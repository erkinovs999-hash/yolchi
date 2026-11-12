// Umumiy mashina tayyorlagich: istalgan GLB → o'yin konventsiyasi.
// Ildiz "Car" (extras.wheelRadius), Body + {Front,Rear}_{Left,Right}_steer > Wheel_*; yer y=0, old -Z, o'ng +X, metr.
// Material extras.role: paint | glass | tire | headlamp | brakelamp | trim.
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { transformPrimitive, prune, dedup, weld, simplify, normals, quantize, join, textureCompress } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import sharp from 'sharp';
import { gzipSync } from 'node:zlib';
import { writeFileSync, readFileSync } from 'node:fs';
import { mat4, vec3 } from 'gl-matrix';

const [, , input, outBase, cfgJson] = process.argv;
const cfg = JSON.parse(cfgJson || '{}');
await MeshoptSimplifier.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(input);
const root = doc.getRoot();
const scene = root.getDefaultScene() || root.listScenes()[0];
const srcExtras = root.getAsset().extras || {};

// ko'rinmas (alfa≈0) va keraksiz materiallarni olib tashlash
const drop = cfg.drop ? new RegExp(cfg.drop, 'i') : null;
for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) {
  const m = p.getMaterial(); if (!m) continue;
  const a = m.getBaseColorFactor()[3];
  if ((m.getAlphaMode() === 'BLEND' && a < 0.02 && !m.getBaseColorTexture()) || (drop && drop.test(m.getName()))) p.dispose();
}
const meshNodes = [];
scene.traverse(n => { if (n.getMesh() && n.getMesh().listPrimitives().length) meshNodes.push(n); });
function worldBounds(n) {
  const M = n.getWorldMatrix(), min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity], v = [0, 0, 0];
  for (const p of n.getMesh().listPrimitives()) { const pos = p.getAttribute('POSITION'), st = Math.max(1, Math.floor(pos.getCount() / 4000));
    for (let i = 0; i < pos.getCount(); i += st) { pos.getElement(i, v); vec3.transformMat4(v, v, M); for (let k = 0; k < 3; k++) { min[k] = Math.min(min[k], v[k]); max[k] = Math.max(max[k], v[k]); } } }
  return { min, max, c: min.map((a, k) => (a + max[k]) / 2), s: max.map((a, k) => a - min[k]) };
}
const wb = new Map(), all = { min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] };
for (const n of meshNodes) { const b = worldBounds(n); wb.set(n, b); for (let k = 0; k < 3; k++) { all.min[k] = Math.min(all.min[k], b.min[k]); all.max[k] = Math.max(all.max[k], b.max[k]); } }
const size = all.max.map((a, k) => a - all.min[k]);
const lenAxis = size[0] > size[2] ? 0 : 2, sideAxis = lenAxis === 0 ? 2 : 0, H = size[1], ground = all.min[1];
const mid = k => (all.min[k] + all.max[k]) / 2;

// G'ildiraklarni geometriya bo'yicha topish
const isTire = b => b.min[1] < ground + .07 * H && b.s[1] > .2 * H && b.s[1] < .56 * H && Math.abs(b.s[lenAxis] - b.s[1]) < .16 * b.s[1] && b.s[sideAxis] < .8 * b.s[1] && Math.abs(b.c[sideAxis] - mid(sideAxis)) > .22 * size[sideAxis];
const corner = b => (b.c[lenAxis] > mid(lenAxis) ? 'A' : 'B') + (b.c[sideAxis] > mid(sideAxis) ? 'P' : 'N');
const wheels = new Map();
for (const n of meshNodes) { const b = wb.get(n); if (!isTire(b)) continue; const k = corner(b); let w = wheels.get(k); if (!w) wheels.set(k, w = { nodes: [], min: [...b.min], max: [...b.max] }); w.nodes.push(n); for (let i = 0; i < 3; i++) { w.min[i] = Math.min(w.min[i], b.min[i]); w.max[i] = Math.max(w.max[i], b.max[i]); } }
let split = null;
if (wheels.size !== 4 && cfg.tireMat) {
  const re = new RegExp(cfg.tireMat, 'i'), pts = [], v = [0, 0, 0];
  for (const n of meshNodes) { const M = n.getWorldMatrix(); for (const p of n.getMesh().listPrimitives()) { if (!re.test(p.getMaterial()?.getName() || '')) continue; const pos = p.getAttribute('POSITION'); for (let i = 0; i < pos.getCount(); i++) { pos.getElement(i, v); const w = vec3.transformMat4([0, 0, 0], v, M); if (w[1] < ground + .6 * H) pts.push(w); } } }
  const tm = [0, 1, 2].map(k => (Math.min(...pts.map(p => p[k])) + Math.max(...pts.map(p => p[k]))) / 2);
  wheels.clear();
  for (const p of pts) { const k = (p[lenAxis] > tm[lenAxis] ? 'A' : 'B') + (p[sideAxis] > tm[sideAxis] ? 'P' : 'N'); let w = wheels.get(k); if (!w) wheels.set(k, w = { nodes: [], min: [...p], max: [...p] }); for (let i = 0; i < 3; i++) { w.min[i] = Math.min(w.min[i], p[i]); w.max[i] = Math.max(w.max[i], p[i]); } }
  split = wheels.size === 4;
}
const hasWheels = wheels.size === 4 && !cfg.noWheels;
const inWheel = new Set();
for (const w of wheels.values()) { w.c = w.min.map((a, k) => (a + w.max[k]) / 2); w.radius = (w.max[1] - w.min[1]) / 2; }
if (hasWheels && !split) for (const w of wheels.values()) {
  const pad = (w.max[1] - w.min[1]) * .06; w.nodes.forEach(n => inWheel.add(n));
  for (const n of meshNodes) { if (inWheel.has(n)) continue; const b = wb.get(n); if ([0, 1, 2].every(i => b.min[i] >= w.min[i] - pad && b.max[i] <= w.max[i] + pad)) { w.nodes.push(n); inWheel.add(n); } }
  w.c = w.min.map((a, k) => (a + w.max[k]) / 2); w.radius = (w.max[1] - w.min[1]) / 2;
}
const body = meshNodes.filter(n => !inWheel.has(n));

const frontSign = cfg.front || 1;
const f = [0, 0, 0]; f[lenAxis] = frontSign;
const right = vec3.cross([0, 0, 0], f, [0, 1, 0]);
const R = mat4.fromValues(right[0], 0, -f[0], 0, right[1], 1, -f[1], 0, right[2], 0, -f[2], 0, 0, 0, 0, 1);
const cx = hasWheels ? [0, 1, 2].map(k => [...wheels.values()].reduce((a, w) => a + w.c[k], 0) / 4) : [mid(0), 0, mid(2)];
const T = mat4.fromTranslation(mat4.create(), [-cx[0], -ground, -cx[2]]);
const s = (cfg.length || 4.5) / size[lenAxis];
const X = mat4.multiply(mat4.create(), mat4.fromScaling(mat4.create(), [s, s, s]), mat4.multiply(mat4.create(), R, T));

// Material rollari
const rx = k => cfg[k] ? new RegExp(cfg[k], 'i') : null;
const P = rx('paint'), G = rx('glass'), TI = rx('tire'), HL = rx('head'), BL = rx('brake');
for (const m of root.listMaterials()) {
  const n = m.getName(); let role = 'trim';
  if (P && P.test(n)) role = 'paint'; else if (HL && HL.test(n)) role = 'headlamp'; else if (BL && BL.test(n)) role = 'brakelamp'; else if (TI && TI.test(n)) role = 'tire';
  else if ((G && G.test(n)) || m.getAlphaMode() === 'BLEND') role = 'glass';
  m.setExtras({ role });
}

const newScene = doc.createScene('Scene'), car = doc.createNode('Car'), bodyNode = doc.createNode('Body');
car.addChild(bodyNode); newScene.addChild(car);
let idx = 0;
function bake(target, n, M0) {
  const M = mat4.multiply(mat4.create(), M0, n.getWorldMatrix()), mesh = doc.createMesh('m' + idx);
  for (const p of n.getMesh().listPrimitives()) { const q = p.clone(); transformPrimitive(q, M); mesh.addPrimitive(q); }
  target.addChild(doc.createNode('n' + idx++).setMesh(mesh));
}
for (const n of body) bake(bodyNode, n, X);
let wheelRadius = cfg.wheelRadius || .3; const wheelInfo = [];
if (hasWheels && split) {
  // kuzov primitivlaridan g'ildirak silindri ichidagi uchburchaklarni ajratib olish
  wheelRadius = 0;
  const W = [...wheels.values()].map(w => { const c = vec3.transformMat4([0, 0, 0], w.c, X), r = w.radius * s, hw = (w.max[sideAxis] - w.min[sideAxis]) / 2 * s; wheelRadius = Math.max(wheelRadius, r); return { c, r, hw, prims: [] }; });
  const sub = (prim, tris, off) => {
    const idx = prim.getIndices(), map = new Map(), order = [], out = [];
    for (const t of tris) for (let k = 0; k < 3; k++) { const vi = idx ? idx.getScalar(t * 3 + k) : t * 3 + k; let ni = map.get(vi); if (ni === undefined) { ni = order.length; map.set(vi, ni); order.push(vi); } out.push(ni); }
    const q = doc.createPrimitive().setMaterial(prim.getMaterial()).setMode(prim.getMode());
    for (const sem of prim.listSemantics()) { const a = prim.getAttribute(sem), es = a.getElementSize(), src = a.getArray(), dst = new src.constructor(order.length * es);
      for (let i = 0; i < order.length; i++) for (let k = 0; k < es; k++) dst[i * es + k] = src[order[i] * es + k];
      if (sem === 'POSITION' && off) for (let i = 0; i < order.length; i++) for (let k = 0; k < 3; k++) dst[i * 3 + k] -= off[k];
      q.setAttribute(sem, doc.createAccessor().setType(a.getType()).setNormalized(a.getNormalized()).setArray(dst)); }
    q.setIndices(doc.createAccessor().setType('SCALAR').setArray(order.length > 65535 ? new Uint32Array(out) : new Uint16Array(out)));
    return q;
  };
  for (const node of bodyNode.listChildren()) { const mesh = node.getMesh(); for (const prim of mesh.listPrimitives()) {
    if (prim.getMode() !== 4) continue;
    const pos = prim.getAttribute('POSITION'), idx = prim.getIndices(), nt = (idx ? idx.getCount() : pos.getCount()) / 3, keep = [], per = W.map(() => []), a = [0, 0, 0];
    for (let t = 0; t < nt; t++) { let wi = -1;
      for (let j = 0; j < W.length && wi < 0; j++) { const w = W[j]; let ok = true; for (let k = 0; k < 3 && ok; k++) { pos.getElement(idx ? idx.getScalar(t * 3 + k) : t * 3 + k, a); ok = Math.abs(a[0] - w.c[0]) <= w.hw + .03 && (a[1] - w.c[1]) ** 2 + (a[2] - w.c[2]) ** 2 <= (w.r * 1.03) ** 2; } if (ok) wi = j; }
      wi < 0 ? keep.push(t) : per[wi].push(t); }
    if (keep.length === nt) continue;
    per.forEach((tr, j) => { if (tr.length) W[j].prims.push(sub(prim, tr, W[j].c)); });
    if (keep.length) mesh.addPrimitive(sub(prim, keep, null)); mesh.removePrimitive(prim); prim.dispose();
  } }
  for (const w of W) { const side = w.c[0] >= 0 ? 'Right' : 'Left', axle = w.c[2] < 0 ? 'Front' : 'Rear';
    const steer = doc.createNode(`${axle}_${side}_steer`).setTranslation([...w.c]), wheel = doc.createNode(`Wheel_${axle}_${side}`), mesh = doc.createMesh('w' + idx);
    w.prims.forEach(p => mesh.addPrimitive(p)); wheel.addChild(doc.createNode('n' + idx++).setMesh(mesh)); steer.addChild(wheel); car.addChild(steer);
    wheelInfo.push(`${axle}_${side} ${w.c.map(v => +v.toFixed(2))} r=${w.r.toFixed(2)} prims=${w.prims.length}`); }
} else if (hasWheels) { wheelRadius = 0; for (const w of wheels.values()) {
  const c = vec3.transformMat4([0, 0, 0], w.c, X), side = c[0] >= 0 ? 'Right' : 'Left', axle = c[2] < 0 ? 'Front' : 'Rear';
  const steer = doc.createNode(`${axle}_${side}_steer`).setTranslation([c[0], c[1], c[2]]), wheel = doc.createNode(`Wheel_${axle}_${side}`);
  steer.addChild(wheel); car.addChild(steer);
  const local = mat4.multiply(mat4.create(), mat4.fromTranslation(mat4.create(), [-c[0], -c[1], -c[2]]), X);
  for (const n of w.nodes) bake(wheel, n, local);
  wheelRadius = Math.max(wheelRadius, w.radius * s); wheelInfo.push(`${axle}_${side} ${c.map(v => +v.toFixed(2))} n=${w.nodes.length}`);
} }
car.setExtras({ wheelRadius, hasWheels, license: srcExtras.license || '', author: srcExtras.author || '', source: srcExtras.source || '' });
root.setDefaultScene(newScene);
for (const sc of root.listScenes()) if (sc !== newScene) sc.dispose();
for (const n of root.listNodes()) { let r = n; while (r.getParentNode()) r = r.getParentNode(); if (r !== car) n.dispose(); }

const tris = () => root.listMeshes().reduce((a, m) => a + m.listPrimitives().reduce((b, p) => b + (p.getIndices() ? p.getIndices().getCount() : p.getAttribute('POSITION').getCount()) / 3, 0), 0);
const before = tris(), target = cfg.tris || 70000, ratio = Math.min(1, target / before);
if (cfg.strip) for (const m of root.listMeshes()) for (const p of m.listPrimitives()) { const mt = p.getMaterial(), tex = mt && (mt.getBaseColorTexture() || mt.getNormalTexture() || mt.getEmissiveTexture()); for (const sem of p.listSemantics()) if (sem === 'NORMAL' || sem === 'TANGENT' || sem.startsWith('COLOR') || (!tex && sem.startsWith('TEXCOORD'))) p.setAttribute(sem, null); }
await doc.transform(prune(), dedup(), join({ keepNamed: false }), weld(),
  simplify({ simplifier: MeshoptSimplifier, ratio, error: cfg.error || 0.004, lockBorder: false }),
  normals({ overwrite: !!(cfg.renormal || cfg.strip) }), textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [cfg.tex || 512, cfg.tex || 512], quality: 80 }),
  quantize({ pattern: /^(NORMAL|TEXCOORD_\d+)$/, quantizeNormal: 8 }), prune({ keepLeaves: true, keepExtras: true }));
const glb = await io.writeBinary(doc), gz = gzipSync(glb, { level: 9 });
writeFileSync(outBase + '.glb', glb); writeFileSync(outBase + '.glb.gz', gz);
console.log(JSON.stringify({ lenAxis, size: size.map(v => +(v * s).toFixed(2)), scale: +s.toFixed(4), hasWheels, wheelsFound: wheels.size, wheelRadius: +wheelRadius.toFixed(3), wheelInfo, before, after: tris(), meshes: root.listMeshes().length, glbMB: +(glb.length / 1e6).toFixed(2), gzMB: +(gz.length / 1e6).toFixed(2) }));

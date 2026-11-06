// Gentra (Sketchfab, uzb_rx7, CC BY 4.0) modelini o'yin konventsiyasiga keltirish:
// ildiz "Gentra" (extras.wheelRadius), Body + {Front,Rear}_{Left,Right}_steer > Wheel_*,
// yer y=0, old tomon -Z, o'ng +X, metr. Tugun extras.role: tire | headlamp | brakelamp | lampglass | trim.
import { NodeIO, Document } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { transformPrimitive, prune, dedup, weld, simplify, normals, quantize } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import { gzipSync } from 'node:zlib';
import { writeFileSync } from 'node:fs';
import { mat4, vec3 } from 'gl-matrix';

const [, , input, outGz, outGlb] = process.argv;
await MeshoptSimplifier.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(input);
const root = doc.getRoot();
const scene = root.listScenes()[0];

const meshNodes = [];
scene.traverse(n => { if (n.getMesh()) meshNodes.push(n); });

// Har bir mesh tugunining dunyo koordinatalaridagi chegaralari
function worldBounds(n) {
  const M = n.getWorldMatrix(); const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  const v = [0, 0, 0];
  for (const p of n.getMesh().listPrimitives()) {
    const pos = p.getAttribute('POSITION');
    for (let i = 0; i < pos.getCount(); i += 7) {
      pos.getElement(i, v); vec3.transformMat4(v, v, M);
      for (let k = 0; k < 3; k++) { min[k] = Math.min(min[k], v[k]); max[k] = Math.max(max[k], v[k]); }
    }
  }
  return { min, max, c: min.map((a, k) => (a + max[k]) / 2) };
}
const under = (n, pred) => { for (let p = n; p; p = p.getParentNode()) if (pred(p)) return p; return null; };
const wheelRoot = n => under(n, p => /^wheel_rf_dummy/.test(p.getName()));

const groups = new Map(); // wheel dummy -> nodes
const body = [];
for (const n of meshNodes) {
  const w = wheelRoot(n);
  if (w) { if (!groups.has(w)) groups.set(w, []); groups.get(w).push(n); } else body.push(n);
}
if (groups.size !== 4) throw new Error('4 ta g\'ildirak kutilgan, topildi: ' + groups.size);

// Umumiy chegaralar
const all = { min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] };
const wb = new Map();
for (const n of meshNodes) {
  const b = worldBounds(n); wb.set(n, b);
  for (let k = 0; k < 3; k++) { all.min[k] = Math.min(all.min[k], b.min[k]); all.max[k] = Math.max(all.max[k], b.max[k]); }
}
const size = all.max.map((a, k) => a - all.min[k]);
const up = 1; // glTF Y-up
const lenAxis = size[0] > size[2] ? 0 : 2, sideAxis = lenAxis === 0 ? 2 : 0;

const wheels = [...groups.entries()].map(([d, nodes]) => {
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (const n of nodes) { const b = wb.get(n); for (let k = 0; k < 3; k++) { min[k] = Math.min(min[k], b.min[k]); max[k] = Math.max(max[k], b.max[k]); } }
  return { d, nodes, min, max, c: min.map((a, k) => (a + max[k]) / 2), radius: (max[up] - min[up]) / 2 };
});
// Old tomon: faralar ("Faralar_on") qaysi uchida
const head = meshNodes.find(n => /Faralar_on/.test(n.getName()));
const headC = wb.get(head).c[lenAxis];
const mid = (all.min[lenAxis] + all.max[lenAxis]) / 2;
const frontSign = Math.sign(headC - mid); // old tomon lenAxis bo'yicha +1 yoki -1

// Maqsad: old = -Z, o'ng = +X, yuqori = +Y.
// Mashinaning "o'ng" tomoni: oldga qarab turganda. f = old vektor, u = Y, o'ng = f × u
const f = [0, 0, 0]; f[lenAxis] = frontSign;
const right = vec3.cross([0, 0, 0], f, [0, 1, 0]);
// Aylanish matritsasi: dunyo -> maqsad. Maqsadda X = right, Y = up, Z = -f
const R = mat4.fromValues(
  right[0], 0, -f[0], 0,
  right[1], 1, -f[1], 0,
  right[2], 0, -f[2], 0,
  0, 0, 0, 1);
// Markaz: g'ildirak o'qlari o'rtasi (gorizontal), yer = min Y
const wc = [0, 1, 2].map(k => wheels.reduce((a, w) => a + w.c[k], 0) / 4);
const T = mat4.fromTranslation(mat4.create(), [-wc[0], -all.min[1], -wc[2]]);
// Masshtab: haqiqiy Gentra uzunligi 4.515 m
const length = size[lenAxis];
const s = 4.515 / length;
const S = mat4.fromScaling(mat4.create(), [s, s, s]);
const X = mat4.create(); mat4.multiply(X, S, mat4.multiply(mat4.create(), R, T));

const roleOf = (n, isWheel) => {
  const mats = n.getMesh().listPrimitives().map(p => p.getMaterial()?.getName() || '');
  const name = n.getName();
  if (isWheel) return mats.some(m => /^unnamed\.(0|002|004|006)$/.test(m)) ? 'tire' : 'trim';
  if (/Faralar_on/.test(name)) return 'headlamp';
  if (mats.some(m => m === 'right_rear_light' || m === 'arxa_stop.0')) return 'brakelamp';
  if (mats.some(m => /^glass$/.test(m))) return 'lampglass';
  return 'trim';
};

// Yangi ierarxiya
const newScene = doc.createScene('Scene');
const car = doc.createNode('Gentra');
const bodyNode = doc.createNode('Body');
car.addChild(bodyNode);
newScene.addChild(car);

function bakeInto(target, n, extraM, role, idx) {
  const M = mat4.multiply(mat4.create(), extraM, n.getWorldMatrix());
  const src = n.getMesh();
  // Har bir primitive alohida tugunga (rol bo'yicha)
  const mesh = doc.createMesh(n.getName());
  for (const p of src.listPrimitives()) { const q = p.clone(); transformPrimitive(q, M); mesh.addPrimitive(q); }
  const node = doc.createNode(`${target.getName()}_${idx}`).setMesh(mesh).setExtras({ role });
  target.addChild(node);
}
let i = 0;
for (const n of body) bakeInto(bodyNode, n, X, roleOf(n, false), i++);

let wheelRadius = 0;
for (const w of wheels) {
  const c = vec3.transformMat4([0, 0, 0], w.c, X);
  const side = c[0] >= 0 ? 'Right' : 'Left';
  const axle = c[2] < 0 ? 'Front' : 'Rear';
  const steer = doc.createNode(`${axle}_${side}_steer`).setTranslation([c[0], c[1], c[2]]);
  const wheel = doc.createNode(`Wheel_${axle}_${side}`);
  steer.addChild(wheel); car.addChild(steer);
  const local = mat4.multiply(mat4.create(), mat4.fromTranslation(mat4.create(), [-c[0], -c[1], -c[2]]), X);
  for (const n of w.nodes) bakeInto(wheel, n, local, roleOf(n, true), i++);
  wheelRadius = Math.max(wheelRadius, w.radius * s);
}
car.setExtras({
  wheelRadius, license: 'CC-BY-4.0', author: 'uzb_rx7', source: 'https://sketchfab.com/3d-models/gentra-99f158337e2741ac9af2848675f9128a',
});
root.setDefaultScene(newScene);
for (const sc of root.listScenes()) if (sc !== newScene) sc.dispose();
// Eski tugunlarni tozalash
for (const n of root.listNodes()) { let r = n; while (r.getParentNode()) r = r.getParentNode(); if (r !== car) n.dispose(); }

const tris = () => root.listMeshes().reduce((a, m) => a + m.listPrimitives().reduce((b, p) => b + (p.getIndices() ? p.getIndices().getCount() : p.getAttribute("POSITION").getCount()) / 3, 0), 0);
const before = tris();
await doc.transform(
  prune(),
  dedup(),
  weld(),
  simplify({ simplifier: MeshoptSimplifier, ratio: 0.25, error: 0.0015, lockBorder: true }),
  normals({ overwrite: true }),
  quantize({ pattern: /^(NORMAL|TEXCOORD_\d+)$/, quantizeNormal: 8 }),
  prune({ keepLeaves: true, keepExtras: true }),
);
const glb = await io.writeBinary(doc);
if (outGlb) writeFileSync(outGlb, glb);
const gz = gzipSync(glb, { level: 9 });
writeFileSync(outGz, gz);
console.log(JSON.stringify({ lenAxis, frontSign, length: +length.toFixed(3), scale: +s.toFixed(4), wheelRadius: +wheelRadius.toFixed(3),
  wheels: car.listChildren().filter(n => /steer/.test(n.getName())).map(n => n.getName() + ' ' + n.getTranslation().map(v => +v.toFixed(3))),
  trianglesBefore: before, trianglesAfter: tris(), glbMB: +(glb.length / 1e6).toFixed(2), gzMB: +(gz.length / 1e6).toFixed(2) }));

// Yo'lchi: 3D modellarni Telegram Mini App uchun yengillashtirish.
// Tugun (node) va material nomlari o'zgarmaydi — o'yin kodi ularga tayanadi.
import { NodeIO, PropertyType } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, weld, simplify, prune, textureCompress, quantize, normals, simplifyPrimitive, weldPrimitive } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import sharp from 'sharp';
import { gzipSync } from 'node:zlib';
import { readFileSync, writeFileSync } from 'node:fs';

const [, , input, output, ratioArg, errorArg, texArg, lockArg] = process.argv;
const lockBorder = lockArg !== 'nolock';
const ratio = Number(ratioArg ?? 0.15);
const error = Number(errorArg ?? 0.002);
const texSize = Number(texArg ?? 1024);

await MeshoptSimplifier.ready;

function heavyFlat(limit) {
  return async (document) => {
    for (const mesh of document.getRoot().listMeshes()) {
      for (const prim of mesh.listPrimitives()) {
        const t = (prim.getIndices()?.getCount() ?? 0) / 3;
        if (t < limit || prim.getAttribute('TEXCOORD_0') && mesh.getName().startsWith('Wheel')) continue;
        prim.setAttribute('NORMAL', null);
        prim.setAttribute('TEXCOORD_0', null);
        weldPrimitive(prim);
        simplifyPrimitive(prim, { simplifier: MeshoptSimplifier, ratio: 0.1, error: 0.01, lockBorder: false });
        console.error('heavyFlat', mesh.getName(), Math.round(t), '->', Math.round(prim.getIndices().getCount() / 3));
      }
    }
    await document.transform(normals({ overwrite: false }));
  };
}
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);

let buf = readFileSync(input);
if (buf[0] === 0x1f && buf[1] === 0x8b) buf = (await import('node:zlib')).gunzipSync(buf);
const doc = await io.readBinary(new Uint8Array(buf));

const tris = () => doc.getRoot().listMeshes().reduce((s, m) => s + m.listPrimitives().reduce((a, p) => a + ((p.getIndices()?.getCount() ?? p.getAttribute('POSITION').getCount()) / 3), 0), 0);
const before = tris();

await doc.transform(
  // Materiallarni birlashtirmaymiz — nomlari kodda ishlatiladi.
  dedup({ propertyTypes: [PropertyType.ACCESSOR, PropertyType.MESH, PropertyType.TEXTURE] }),
  weld(),
  simplify({ simplifier: MeshoptSimplifier, ratio, error, lockBorder }),
  // Tekis (flat) normalli og'ir bo'laklar weld bo'lmaydi va soddalashmaydi:
  // normalni olib tashlab, birlashtirib, soddalashtirib, normalni qayta hisoblaymiz.
  heavyFlat(20000),
  // Pozitsiyani kvantlamaymiz: u tugun transformlarini (g'ildirak pivotlari) o'zgartiradi.
  quantize({ pattern: /^(NORMAL|TANGENT|TEXCOORD_\d+)$/, quantizeNormal: 8, quantizeTexcoord: 14 }),
  textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [texSize, texSize], quality: 80 }),
  // Bo'sh pivot tugunlarini (masalan TRAILER_kingpin_Y_rotation) saqlab qolamiz.
  prune({ propertyTypes: [PropertyType.ACCESSOR, PropertyType.TEXTURE, PropertyType.BUFFER], keepLeaves: true, keepAttributes: true, keepExtras: true })
);

const after = tris();
const glb = await io.writeBinary(doc);
const gz = gzipSync(glb, { level: 9 });
writeFileSync(output, gz);
console.log(JSON.stringify({ input, trianglesBefore: Math.round(before), trianglesAfter: Math.round(after), glbMB: +(glb.length / 1e6).toFixed(2), gzMB: +(gz.length / 1e6).toFixed(2) }));

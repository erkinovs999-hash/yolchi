import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune } from '@gltf-transform/functions';
import { gzipSync, gunzipSync } from 'node:zlib';
import { readFileSync, writeFileSync } from 'node:fs';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.readBinary(new Uint8Array(gunzipSync(readFileSync(process.argv[2]))));
let removedPrims = 0; const touched = [];
for (const mesh of doc.getRoot().listMeshes()) for (const p of mesh.listPrimitives()) {
  if (/DECAL/.test(p.getMaterial()?.getName() || '')) { mesh.removePrimitive(p); p.dispose(); removedPrims++; touched.push(mesh.getName()); }
}
// Bo'sh qolgan meshlarni tugundan ajratamiz (tugun nomlari saqlanadi)
for (const n of doc.getRoot().listNodes()) { const m = n.getMesh(); if (m && m.listPrimitives().length === 0) n.setMesh(null); }
await doc.transform(prune({ keepLeaves: true, keepExtras: true }));
const glb = await io.writeBinary(doc);
writeFileSync(process.argv[3], gzipSync(glb, { level: 9 }));
console.log(JSON.stringify({ removedPrims, touched, materials: doc.getRoot().listMaterials().map(m => m.getName()).filter(n => /BTS|DECAL/i.test(n)), nodes: doc.getRoot().listNodes().length }));

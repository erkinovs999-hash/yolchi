// Yo'lchi reytingi — Vercel Blob (private) ichidagi bitta JSON fayl.
// POST /api/lb { initData, race?, exam?, xp? } → o'z natijasini yozadi va jadvallarni qaytaradi.
//   race — yakka poygadagi eng yaxshi vaqt (soniya, kichigi yaxshi)
//   exam — avtodrom "vaqtga qarshi" natijasi (soniya, kichigi yaxshi)
//   xp   — umumiy tajriba (kattasi yaxshi)
import { get, put } from '@vercel/blob';
import { checkInitData } from './_shop-items.mjs';

const FILE = 'lb/all.json';
const BOARDS = { race: { min: 30, max: 3600, low: true }, exam: { min: 60, max: 7200, low: true }, xp: { min: 1, max: 5e6, low: false } };
const KEEP = 300, TOP = 30;

async function load() {
  const r = await get(FILE, { access: 'private', useCache: false });
  if (!r || !r.stream) return { data: { race: {}, exam: {}, xp: {} }, etag: null };
  const data = JSON.parse(await new Response(r.stream).text());
  for (const k of Object.keys(BOARDS)) data[k] = data[k] || {};
  return { data, etag: r.blob?.etag || null };
}
const sorted = (board, low) => Object.entries(board).sort((a, b) => (low ? a[1].v - b[1].v : b[1].v - a[1].v));

function view(data, uid) {
  const out = {};
  for (const [k, cfg] of Object.entries(BOARDS)) {
    const list = sorted(data[k], cfg.low);
    const idx = list.findIndex(([id]) => id === String(uid));
    out[k] = { top: list.slice(0, TOP).map(([id, e], i) => ({ rank: i + 1, name: e.n, v: e.v, vip: !!e.vip, me: id === String(uid) })), me: idx >= 0 ? { rank: idx + 1, v: list[idx][1].v } : null, total: list.length };
  }
  return out;
}

export default async function handler(req, res) {
  const token = process.env.BOT_TOKEN;
  if (!token || !process.env.BLOB_READ_WRITE_TOKEN) return res.status(503).json({ ok: false, error: 'Reyting sozlanmagan' });
  if (req.method === 'GET') {   // holat tekshiruvi: ombor o'qilyaptimi, nechta o'yinchi bor
    try { const { data } = await load(); return res.status(200).json({ ok: true, players: Object.fromEntries(Object.keys(BOARDS).map(k => [k, Object.keys(data[k]).length])) }); }
    catch (e) { console.error(e); return res.status(500).json({ ok: false, error: 'Ombor o‘qilmadi' }); }
  }
  if (req.method !== 'POST') return res.status(405).end();
  let b = req.body; if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
  const user = checkInitData(b?.initData, token);
  if (!user) return res.status(401).json({ ok: false, error: 'Telegram orqali oching' });
  const name = String(user.first_name || 'Haydovchi').replace(/[<>&"]/g, '').slice(0, 18);

  try {
    for (let attempt = 0; attempt < 4; attempt++) {
      const { data, etag } = await load();
      let changed = false;
      for (const [k, cfg] of Object.entries(BOARDS)) {
        const v = Math.round(Number(b[k]) * 10) / 10;
        if (!Number.isFinite(v) || v < cfg.min || v > cfg.max) continue;
        const cur = data[k][user.id];
        if (!cur || (cfg.low ? v < cur.v : v > cur.v) || cur.n !== name || !!cur.vip !== !!b.vip) {
          data[k][user.id] = { n: name, v: cur ? (cfg.low ? Math.min(v, cur.v) : Math.max(v, cur.v)) : v, ...(b.vip ? { vip: 1 } : {}) };
          changed = true;
        }
        const list = sorted(data[k], cfg.low);
        if (list.length > KEEP) { data[k] = Object.fromEntries(list.slice(0, KEEP)); changed = true; }
      }
      if (!changed) return res.status(200).json({ ok: true, boards: view(data, user.id) });
      try {
        await put(FILE, JSON.stringify(data), { access: 'private', addRandomSuffix: false, allowOverwrite: true, contentType: 'application/json', cacheControlMaxAge: 0, ...(etag ? { ifMatch: etag } : {}) });
        return res.status(200).json({ ok: true, boards: view(data, user.id) });
      } catch (e) {
        if (attempt === 3) throw e;       // boshqa o'yinchi bir vaqtda yozgan bo'lsa — qayta o'qib urinamiz
      }
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: 'Reytingni yuklab bo‘lmadi' });
  }
}

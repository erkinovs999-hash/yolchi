// Yo'lchi do'koni — Vercel funksiyasi.
// POST /api/shop { action: "invoice", item, initData } → { ok, link }   (Telegram Stars hisob-fakturasi)
// POST /api/shop { action: "sync", initData }          → { ok, purchases: [{ id, item, date }] }
// Xaridlar ma'lumotlar bazasisiz, to'g'ridan-to'g'ri Telegram'dagi Stars tranzaksiyalaridan olinadi.
import { ITEMS, checkInitData, makePayload, parsePayload, REF_REWARD, refToken, checkRefToken } from './_shop-items.mjs';

const GAME = 'https://bts-avtodrom.vercel.app';

async function tg(method, body) {
  const r = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/${method}`, {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body || {}),
  });
  return r.json();
}

async function purchasesOf(uid) {
  const paid = new Map(), refunded = new Set();
  for (let offset = 0, page = 0; page < 20; page++, offset += 100) {
    const r = await tg('getStarTransactions', { offset, limit: 100 });
    if (!r.ok) throw new Error(r.description || 'getStarTransactions');
    const list = r.result?.transactions || [];
    for (const t of list) {
      if (t.receiver?.type === 'user' && t.receiver.user?.id === uid) refunded.add(t.id);
      if (t.source?.type === 'user' && t.source.user?.id === uid) {
        const p = parsePayload(t.source.invoice_payload);
        if (p && p.uid === uid) paid.set(t.id, { id: t.id, item: p.item, date: t.date, stars: t.amount });
      }
    }
    if (list.length < 100) break;
  }
  return [...paid.values()].filter(p => !refunded.has(p.id));
}

export default async function handler(req, res) {
  const token = process.env.BOT_TOKEN;
  if (!token) return res.status(503).json({ ok: false, error: 'BOT_TOKEN sozlanmagan' });
  if (req.method === 'GET') return res.status(200).json({ ok: true, items: Object.fromEntries(Object.entries(ITEMS).map(([k, v]) => [k, { stars: v.stars, coins: v.coins || 0, title: v.title }])) });
  if (req.method !== 'POST') return res.status(405).end();

  let b = req.body; if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
  const user = checkInitData(b?.initData, token);
  if (!user) return res.status(401).json({ ok: false, error: 'Telegram orqali oching' });

  try {
    if (b.action === 'invoice') {
      const it = ITEMS[b.item];
      if (!it) return res.status(400).json({ ok: false, error: 'Mahsulot topilmadi' });
      const r = await tg('createInvoiceLink', {
        title: it.title, description: it.description, payload: makePayload(b.item, user.id),
        currency: 'XTR', prices: [{ label: it.title, amount: it.stars }],
      });
      if (!r.ok) return res.status(502).json({ ok: false, error: r.description || 'Telegram xatosi' });
      return res.status(200).json({ ok: true, link: r.result });
    }
    // Yangi o'yinchi taklif havolasi bilan kirdi → taklif qilganga botdan mukofot tugmasi yuboriladi
    if (b.action === 'ref') {
      const m = /^ref_(\d+)$/.exec(user._start || '');
      const inviter = m ? Number(m[1]) : 0;
      if (!inviter || inviter === user.id || user._age > 3600) return res.status(400).json({ ok: false, error: 'Taklif havolasi yaroqsiz' });
      const name = String(user.first_name || 'Do‘stingiz').replace(/[<>&]/g, '').slice(0, 32);
      const r = await tg('sendMessage', {
        chat_id: inviter, parse_mode: 'HTML',
        text: `🎉 <b>${name}</b> sizning taklifingiz bilan Yo‘lchi’ga qo‘shildi!\n\nMukofotingiz: <b>+${REF_REWARD} tanga</b>.`,
        reply_markup: { inline_keyboard: [[{ text: `🎁 ${REF_REWARD} tangani olish`, web_app: { url: `${GAME}/?claim=${refToken(token, inviter, user.id)}` } }]] },
      });
      return res.status(200).json({ ok: true, reward: REF_REWARD, notified: !!r.ok });
    }
    if (b.action === 'claim') {
      const invitee = checkRefToken(token, user.id, b.token);
      if (!invitee) return res.status(400).json({ ok: false, error: 'Mukofot kaliti yaroqsiz' });
      return res.status(200).json({ ok: true, reward: REF_REWARD, invitee });
    }
    if (b.action === 'sync') return res.status(200).json({ ok: true, purchases: await purchasesOf(user.id) });
    return res.status(400).json({ ok: false, error: 'Noma’lum amal' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: 'Server xatosi' });
  }
}

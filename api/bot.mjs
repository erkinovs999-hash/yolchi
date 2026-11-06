// Yo'lchi Telegram boti — Vercel funksiyasi (webhook).
// Kerakli muhit o'zgaruvchisi: BOT_TOKEN (Vercel → Settings → Environment Variables).
// Ixtiyoriy: SETUP_KEY — sozlamalarni qayta yuborish uchun (/api/bot?setup=<SETUP_KEY>).
import { createHash, timingSafeEqual } from 'node:crypto';

const GAME = 'https://bts-avtodrom.vercel.app';
const BOT = 'yolchigame_bot';

const TEXT = {
  name: 'Yo‘lchi',
  short: 'Do‘stlar bilan 3D poyga, yuk mashinasi va avtodrom imtihoni — to‘g‘ridan-to‘g‘ri Telegram’da.',
  description:
    '🏁 Yo‘lchi — Telegram ichidagi 3D haydash o‘yini.\n\n' +
    '• Poyga — do‘stlaringiz bilan 2–4 kishilik onlayn poyga\n' +
    '• Yuk mashinasi — MAN TGX bilan parkovka missiyalari\n' +
    '• Avtodrom — B toifa imtihon mashqlari\n\n' +
    'Gentra, Cobalt yoki Malibu — o‘zingiz tanlang. Pastdagi tugmani bosing va boshlang!',
  commands: [
    { command: 'start', description: 'O‘yinni ochish' },
    { command: 'poyga', description: 'Do‘stni poygaga chaqirish' },
    { command: 'yordam', description: 'Boshqaruv va savollar' },
    { command: 'mualliflar', description: '3D modellar mualliflari' },
  ],
};

const secretOf = token => createHash('sha256').update('yolchi:' + token).digest('hex').slice(0, 48);

async function tg(method, body) {
  const r = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/${method}`, {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body || {}),
  });
  return r.json();
}

const playButton = (text = '🎮 O‘ynash', url = GAME) => ({ text, web_app: { url } });
const MENU = { type: 'web_app', text: '🎮 O‘ynash', web_app: { url: GAME } };
const esc = s => String(s || '').replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

async function onMessage(m) {
  const chat = m.chat.id;
  const text = (m.text || '').trim();
  const [cmdRaw, ...args] = text.split(/\s+/);
  const cmd = cmdRaw.replace(/@.*$/, '').toLowerCase();
  const name = esc(m.from?.first_name || 'haydovchi');
  const send = (t, keyboard) => tg('sendMessage', {
    chat_id: chat, text: t, parse_mode: 'HTML', link_preview_options: { is_disabled: true },
    ...(keyboard ? { reply_markup: { inline_keyboard: keyboard } } : {}),
  });

  if (cmd === '/start') {
    // Telegram menyu tugmasini keshlaydi — shu chat uchun alohida qayta o'rnatamiz.
    await tg('setChatMenuButton', { chat_id: chat, menu_button: MENU });
    const room = /^room_([A-Za-z0-9]{8})$/.exec(args[0] || '');
    if (room) {
      const code = room[1].toUpperCase();
      return send(`🏁 <b>${name}</b>, sizni poygaga taklif qilishdi!\nXona kodi: <code>${code}</code>`,
        [[playButton('🏁 Poygaga qo‘shilish', `${GAME}/race/#room=${code}`)]]);
    }
    return send(
      `Salom, <b>${name}</b>! 👋\n\n<b>Yo‘lchi</b> — Telegram ichidagi 3D haydash o‘yini.\n\n` +
      '🏁 <b>Poyga</b> — do‘stlar bilan onlayn\n🚛 <b>Yuk mashinasi</b> — parkovka missiyalari\n🚗 <b>Avtodrom</b> — B toifa imtihoni\n\n' +
      'Telefonni yon tomonga buring va boshlang 👇',
      [[playButton()], [{ text: '🏁 Do‘stni chaqirish', callback_data: 'race' }, { text: '❓ Yordam', callback_data: 'help' }]]);
  }
  if (cmd === '/poyga' || cmd === '/race') return raceHelp(send);
  if (cmd === '/yordam' || cmd === '/help') return help(send);
  if (cmd === '/mualliflar') return credits(send);
  return send('O‘yinni ochish uchun pastdagi tugmani bosing 👇', [[playButton()]]);
}

const raceHelp = send => send(
  '🏁 <b>Do‘st bilan poyga</b>\n\n1. «O‘ynash» → <b>Poyga</b>\n2. Mashina va rangni tanlang\n3. <b>Do‘stlar uchun xona yaratish</b>\n4. ↗ tugmasi bilan taklifni do‘stingizga yuboring\n\nXonada 4 tagacha o‘yinchi bo‘ladi.',
  [[playButton('🏁 Poygani ochish', `${GAME}/race/`)]]);

const help = send => send(
  '❓ <b>Yordam</b>\n\n<b>Boshqaruv:</b> ← → — rul, o‘ngdagi pedallar — gaz va tormoz, R — orqaga.\n' +
  '<b>Telefon:</b> o‘yin gorizontal rejimda ishlaydi, avto-aylanishni yoqing.\n' +
  '<b>Sekin yuklanyaptimi?</b> Birinchi ochilishda 3D modellar yuklanadi, keyingi safar tezroq bo‘ladi.\n\n' +
  'Taklif va xatolar uchun shu yerga yozib qoldiring.',
  [[playButton()]]);

const credits = send => send(
  '🙏 <b>3D modellar mualliflari</b>\n\n' +
  '• Gentra — <a href="https://sketchfab.com/uzbek_supra">uzb_rx7</a>, <a href="https://sketchfab.com/3d-models/gentra-99f158337e2741ac9af2848675f9128a">Sketchfab</a>, CC BY 4.0\n' +
  '• Chevrolet Cobalt LTZ 2014 — <a href="https://sketchfab.com/qsardor57913">Q.SARDOR</a>, <a href="https://sketchfab.com/3d-models/chevrolet-cobalt-ltz-2014-f91cbef731444f939e263041400216ca">Sketchfab</a>, CC BY 4.0\n' +
  '• Malibu, MAN TGX va boshqa resurslar — o‘yin ichidagi litsenziya fayllarida.\n\n' +
  'Litsenziya: <a href="https://creativecommons.org/licenses/by/4.0/">creativecommons.org/licenses/by/4.0</a>. Mualliflar o‘yinni qo‘llab-quvvatlashini bildirmaydi.');

async function onCallback(q) {
  await tg('answerCallbackQuery', { callback_query_id: q.id });
  const send = (t, keyboard) => tg('sendMessage', {
    chat_id: q.message.chat.id, text: t, parse_mode: 'HTML', link_preview_options: { is_disabled: true },
    ...(keyboard ? { reply_markup: { inline_keyboard: keyboard } } : {}),
  });
  if (q.data === 'race') return raceHelp(send);
  if (q.data === 'help') return help(send);
}

async function setup(host) {
  const token = process.env.BOT_TOKEN;
  const url = `https://${host}/api/bot`;
  const res = {};
  res.webhook = await tg('setWebhook', { url, secret_token: secretOf(token), allowed_updates: ['message', 'callback_query'], drop_pending_updates: true });
  res.name = await tg('setMyName', { name: TEXT.name });
  res.short = await tg('setMyShortDescription', { short_description: TEXT.short });
  res.description = await tg('setMyDescription', { description: TEXT.description });
  res.commands = await tg('setMyCommands', { commands: TEXT.commands });
  res.menu = await tg('setChatMenuButton', { menu_button: MENU });
  return Object.fromEntries(Object.entries(res).map(([k, v]) => [k, v.ok ? 'ok' : (v.description || 'xato')]));
}

const safeEq = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && timingSafeEqual(x, y); };

export default async function handler(req, res) {
  const token = process.env.BOT_TOKEN;
  if (!token) return res.status(503).json({ ok: false, error: 'BOT_TOKEN sozlanmagan' });
  const host = req.headers['x-forwarded-host'] || req.headers.host;

  if (req.method === 'GET') {
    const info = await tg('getWebhookInfo');
    const ours = info.result?.url === `https://${host}/api/bot`;
    const key = new URL(req.url, 'https://x').searchParams.get('setup');
    // Birinchi marta (webhook hali o'rnatilmagan) — kalitsiz; keyin faqat SETUP_KEY bilan.
    if (key !== null && (!ours || (process.env.SETUP_KEY && safeEq(key, process.env.SETUP_KEY)))) {
      return res.status(200).json({ ok: true, setup: await setup(host) });
    }
    return res.status(200).json({ ok: true, bot: BOT, webhook: ours ? 'ulangan' : 'ulanmagan', pending: info.result?.pending_update_count ?? null });
  }

  if (req.method !== 'POST') return res.status(405).end();
  if (!safeEq(req.headers['x-telegram-bot-api-secret-token'] || '', secretOf(token))) return res.status(401).end();
  try {
    const u = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (u?.message?.text) await onMessage(u.message);
    else if (u?.callback_query) await onCallback(u.callback_query);
  } catch (e) {
    console.error(e);
  }
  return res.status(200).json({ ok: true });
}

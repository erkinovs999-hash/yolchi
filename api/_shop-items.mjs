// Yo'lchi do'koni: Telegram Stars (XTR) narxlari. Server uchun yagona manba (bot.mjs va shop.mjs ishlatadi).
import { createHmac, timingSafeEqual } from 'node:crypto';

export const ITEMS = {
  coins1: { stars: 15, coins: 1000, title: '1 000 tanga', description: 'Yo‘lchi tangalari: bo‘yoqlar va yangiliklar uchun.' },
  coins2: { stars: 75, coins: 6000, title: '6 000 tanga', description: '5 000 tanga + 20% bonus.' },
  coins3: { stars: 150, coins: 15000, title: '15 000 tanga', description: '10 000 tanga + 50% bonus.' },
  vip: { stars: 249, title: 'Yo‘lchi VIP', description: 'Barcha mukofotlar ×2, 3 ta maxsus bo‘yoq va VIP belgisi. Bir marta to‘lanadi — umrbod.' },
};

export const safeEq = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && timingSafeEqual(x, y); };

// Telegram Mini App initData imzosini tekshirish (core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app)
export function checkInitData(initData, token, maxAgeSec = 7 * 86400) {
  if (!initData || !token) return null;
  const p = new URLSearchParams(initData);
  const hash = p.get('hash'); if (!hash) return null;
  p.delete('hash');
  const dcs = [...p.entries()].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)).map(([k, v]) => `${k}=${v}`).join('\n');
  const secret = createHmac('sha256', 'WebAppData').update(token).digest();
  const calc = createHmac('sha256', secret).update(dcs).digest('hex');
  if (!safeEq(calc, hash)) return null;
  const age = Date.now() / 1000 - Number(p.get('auth_date') || 0);
  if (!(age >= -300 && age <= maxAgeSec)) return null;
  try { const u = JSON.parse(p.get('user') || 'null'); return u && u.id ? u : null; } catch { return null; }
}

// to'lov yuklamasi: yolchi:<item>:<userId>:<vaqt>
export const makePayload = (item, uid) => `yolchi:${item}:${uid}:${Date.now().toString(36)}`;
export function parsePayload(s) {
  const m = /^yolchi:([a-z0-9]+):(\d+):[a-z0-9]+$/.exec(String(s || ''));
  return m && ITEMS[m[1]] ? { item: m[1], uid: Number(m[2]) } : null;
}

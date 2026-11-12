/* Yo'lchi do'koni: Telegram Stars (tanga paketlari, VIP) va tangaga bo'yoqlar.
   To'lov: /api/shop → createInvoiceLink → Telegram.WebApp.openInvoice. Xaridlar /api/shop sync orqali tiklanadi.
   Yolchi.shop = { open, sync, owned, PAINTS } */
(function () {
  var Y = window.Yolchi;
  var ITEMS = {
    coins1: { stars: 15, coins: 1000, title: '1 000', sub: 'tanga' },
    coins2: { stars: 75, coins: 6000, title: '6 000', sub: 'tanga', badge: '+20%' },
    coins3: { stars: 150, coins: 15000, title: '15 000', sub: 'tanga', badge: '+50%' },
    vip: { stars: 249 }
  };
  var TUNE = [['tneon', 'RGB neon', 59, ['neon']], ['tspoiler', 'Spoyler', 39, ['spoiler']], ['tflame', 'Ko‘k nitro', 29, ['flame']], ['tpack', 'Hammasi', 99, ['neon', 'spoiler', 'flame']]];
  var PAINTS = [['sun', 'Quyosh', '#ff7a3c'], ['ice', 'Muz', '#7f9cff'], ['emerald', 'Zumrad', '#12a37f']];
  var PAINT_PRICE = 2500;
  var tg = window.Telegram && Telegram.WebApp, init = tg && tg.initData;
  // Yulduz belgisi: sariq tugma ustida ham ko'rinishi uchun to'q konturli (dark=true — VIP tugmasi uchun to'q yulduz)
  var star = function (s, dark) { s = s || 14; return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" style="flex:none"><path d="M12 1.8l3 6.3 6.9.9-5 4.8 1.3 6.8L12 17.3l-6.2 3.3 1.3-6.8-5-4.8 6.9-.9z" fill="' + (dark ? '#2a1700' : '#ffc400') + '" stroke="' + (dark ? '#2a1700' : '#5a3b00') + '" stroke-width="1.4" stroke-linejoin="round"/></svg>'; };

  function owned(id) { var st = Y.state(); return !!st.vip || (st.paints || []).indexOf(id) >= 0; }
  function api(body) {
    return fetch('/api/shop', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(Object.assign({ initData: init }, body)) })
      .then(function (r) { return r.json().catch(function () { return { ok: false, error: 'Server javobi noto‘g‘ri' }; }); });
  }
  function grant(list, quiet) {
    var st = Y.state(); st.claimed = st.claimed || []; var add = 0, vipNew = false, tuneNew = false;
    (list || []).forEach(function (p) {
      if (p.item === 'vip' && !st.vip) { st.vip = true; vipNew = true; }
      TUNE.forEach(function (t) { if (t[0] === p.item) { st.tune = st.tune || {}; t[3].forEach(function (k) { if (!st.tune[k]) { st.tune[k] = true; tuneNew = true; } }); } });
      if (st.claimed.indexOf(p.id) >= 0) return;
      st.claimed.push(p.id);
      var it = ITEMS[p.item]; if (it && it.coins) add += it.coins;
    });
    st.coins = (st.coins || 0) + add; Y.save(st);
    if (!quiet || add || vipNew || tuneNew) {
      if (tuneNew) Y.toast('Tyuning o‘rnatildi — poygada ko‘rinadi');
      else if (vipNew) Y.toast('VIP yoqildi! Mukofotlar ×2, maxsus bo‘yoqlar ochildi');
      else if (add) Y.toast('+' + add.toLocaleString('ru-RU') + ' tanga qo‘shildi');
      else if (!quiet) Y.toast('Barcha xaridlar joyida');
    }
    if (add || vipNew || tuneNew) { Y.haptic && Y.haptic('heavy'); document.dispatchEvent(new CustomEvent('yolchi:wallet')); }
    return add || vipNew || tuneNew;
  }
  function sync(quiet) {
    if (!init) { quiet || Y.toast('Xaridlar faqat Telegram ichida tiklanadi'); return Promise.resolve(false); }
    return api({ action: 'sync' }).then(function (r) { if (!r.ok) { quiet || Y.toast(r.error || 'Tiklab bo‘lmadi'); return false; } return grant(r.purchases, quiet); })
      .catch(function () { quiet || Y.toast('Internet aloqasini tekshiring'); return false; });
  }
  function buy(item, btn) {
    if (!init || !tg.openInvoice) { Y.toast('Xarid faqat Telegram ichida ishlaydi'); return; }
    btn && (btn.disabled = true);
    api({ action: 'invoice', item: item }).then(function (r) {
      btn && (btn.disabled = false);
      if (!r.ok) { Y.toast(r.error || 'To‘lovni ochib bo‘lmadi'); return; }
      tg.openInvoice(r.link, function (status) {
        if (status === 'paid') {
          Y.toast('To‘lov qabul qilindi…');
          var n = 0; (function again() { sync(true).then(function (ok) { if (!ok && ++n < 5) setTimeout(again, 1500); else render(); }); })();
        } else if (status === 'failed') Y.toast('To‘lov amalga oshmadi');
      });
    }).catch(function () { btn && (btn.disabled = false); Y.toast('Internet aloqasini tekshiring'); });
  }
  function buyPaint(id) {
    var st = Y.state(); st.paints = st.paints || [];
    if (owned(id)) return applyPaint(id);
    if ((st.coins || 0) < PAINT_PRICE) { Y.toast('Tanga yetmaydi — chapdan tanga oling'); return; }
    st.coins -= PAINT_PRICE; st.paints.push(id); Y.save(st); Y.haptic && Y.haptic('medium');
    Y.toast('Bo‘yoq ochildi — mashinangizga qo‘yildi'); applyPaint(id);
  }
  function applyPaint(id) {
    var p = PAINTS.filter(function (x) { return x[0] === id; })[0]; if (!p) return;
    try { var r = JSON.parse(localStorage.getItem('bts-racer') || '{}'); r.color = p[2]; localStorage.setItem('bts-racer', JSON.stringify(r)); } catch (e) {}
    document.dispatchEvent(new CustomEvent('yolchi:wallet')); render();
  }

  var o = null, q;
  var CSS = [
    '.dim{position:absolute;inset:0;background:rgba(5,10,14,.66);pointer-events:auto}',
    '.box{position:absolute;left:50%;top:calc(50% + 6px);transform:translate(-50%,-50%);width:680px;max-width:calc(100% - 28px);padding:14px 16px 14px;border-radius:18px;background:#0e1a22;border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 80px rgba(0,0,0,.5)}',
    '.hd{display:flex;align-items:center;gap:8px;margin-bottom:10px}.hd .t{font-family:Unbounded,sans-serif;font-size:16px;font-weight:800;letter-spacing:.04em}.hd .grow{flex:1}',
    '.vipb{font-size:9px;font-weight:800;letter-spacing:.1em;padding:3px 8px;border-radius:99px;background:linear-gradient(90deg,#ffd76a,#ff9f43);color:#2a1700}',
    '.cols{display:grid;grid-template-columns:1.45fr 1fr;gap:14px}',
    '.packs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}',
    '.pack{position:relative;padding:10px 8px 8px;border-radius:14px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);display:flex;flex-direction:column;align-items:center;gap:2px}',
    '.pack b{font-family:Unbounded,sans-serif;font-size:15px;font-weight:800}.pack small{font-size:9.5px;font-weight:700;color:var(--muted)}',
    '.pack .tag{position:absolute;top:-7px;right:6px;font-size:8.5px;font-weight:800;padding:2px 6px;border-radius:99px;background:var(--lime);color:#0a1218}',
    '.buy{margin-top:6px;width:100%;height:30px;border-radius:10px;background:#1d2a33;border:1.5px solid #ffb800;color:#ffd35a;font-weight:800;font-size:12.5px;display:flex;align-items:center;justify-content:center;gap:5px}',
    '.buy:active{transform:scale(.96)}',
    '.vip .buy{background:linear-gradient(90deg,#ffd76a,#ff9f43);border:0;color:#2a1700}',
    '.buy:disabled{opacity:.5}',
    '.vip{margin-top:10px;padding:11px 12px;border-radius:14px;background:linear-gradient(120deg,rgba(255,215,106,.16),rgba(255,159,67,.10));border:1px solid rgba(255,200,80,.45);display:flex;align-items:center;gap:12px}',
    '.vip .tx{flex:1}.vip b{font-family:Unbounded,sans-serif;font-size:14px;font-weight:800;color:#ffd76a}.vip p{margin:3px 0 0;font-size:10px;font-weight:600;line-height:1.4;color:var(--soft)}',
    '.vip .buy{width:118px;margin:0;height:38px;font-size:13.5px}',
    '.paints{display:flex;flex-direction:column;gap:7px}',
    '.paint{display:flex;align-items:center;gap:10px;padding:7px 9px;border-radius:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10)}',
    '.paint i{width:26px;height:26px;border-radius:50%;flex:none;border:2px solid rgba(255,255,255,.25)}',
    '.paint span{flex:1;font-size:12px;font-weight:800}',
    '.paint button{height:28px;padding:0 10px;border-radius:9px;font-size:11px;font-weight:800;display:flex;align-items:center;gap:4px;background:rgba(255,255,255,.08)}',
    '.paint button.on{background:var(--lime);color:#0a1218}',
    '.ft{display:flex;align-items:center;gap:10px;margin-top:10px;font-size:9.5px;font-weight:600;color:var(--muted)}.ft .grow{flex:1}',
    '.ft button{font-size:10.5px;font-weight:800;color:var(--blue)}',
    '.tune{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:10px}',
    '.tn{display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10)}',
    '.tn span{flex:1;font-size:11px;font-weight:800;white-space:nowrap}.tn .buy{margin:0;width:auto;padding:0 8px;height:26px;font-size:11.5px}',
    '.lbl2{font-size:9px;font-weight:800;letter-spacing:.14em;color:var(--muted);text-transform:uppercase;margin-bottom:7px}'
  ].join('');
  function build() {
    o = Y.overlay(CSS, 'yolchi-shop'); o.host.style.zIndex = '95'; o.show(false);
    o.ui.innerHTML = '<div class="dim" id="dim"></div><div class="box glass">' +
      '<div class="hd"><span class="t">DO‘KON</span><span class="vipb" id="vipb" hidden>VIP</span><span class="grow"></span>' +
      '<span class="pill"><span data-ic="coin" data-s="16"></span><b id="coins">0</b></span>' +
      '<button class="iconbtn" id="x" aria-label="Yopish"><span data-ic="x" data-c="#fff" data-s="14"></span></button></div>' +
      '<div class="cols"><div><div class="lbl2">Telegram Stars bilan</div><div class="packs">' +
      ['coins1', 'coins2', 'coins3'].map(function (k) { var it = ITEMS[k]; return '<div class="pack">' + (it.badge ? '<span class="tag">' + it.badge + '</span>' : '') + Y.icon('coin', null, 26) + '<b>' + it.title + '</b><small>' + it.sub + '</small><button class="buy" data-buy="' + k + '">' + star(14) + it.stars + '</button></div>'; }).join('') +
      '</div><div class="vip"><div class="tx"><b>YO‘LCHI VIP</b><p>Barcha mukofotlar ×2 · 3 ta maxsus bo‘yoq · VIP belgisi. Bir marta to‘lanadi — umrbod.</p></div><button class="buy" data-buy="vip" id="vipBtn">' + star(16, true) + ITEMS.vip.stars + '</button></div></div>' +
      '<div><div class="lbl2">Maxsus bo‘yoqlar</div><div class="paints" id="paints"></div></div></div>' +
      '<div class="lbl2" style="margin:10px 0 0">Tyuning · poygada ko‘rinadi</div><div class="tune" id="tune"></div>' +
      '<div class="ft"><span>To‘lov Telegram Stars orqali. Muammo bo‘lsa — botga /paysupport.</span><span class="grow"></span><button id="restore">Xaridlarni tiklash</button></div></div>';
    o.icons();
    q = function (id) { return o.root.getElementById(id); };
    q('x').onclick = q('dim').onclick = close;
    q('restore').onclick = function () { sync(false).then(render); };
    o.root.querySelectorAll('[data-buy]').forEach(function (b) { b.onclick = function () { Y.haptic && Y.haptic(); buy(b.dataset.buy, b); }; });
  }
  function render() {
    if (!o) return;
    var st = Y.state(), cur = '';
    try { cur = (JSON.parse(localStorage.getItem('bts-racer') || '{}').color || '').toLowerCase(); } catch (e) {}
    q('coins').textContent = (st.coins || 0).toLocaleString('ru-RU');
    q('vipb').hidden = !st.vip;
    q('vipBtn').disabled = !!st.vip; q('vipBtn').innerHTML = st.vip ? 'Sizda bor ✓' : star(16, true) + ITEMS.vip.stars;
    var tn = st.tune || {};
    q('tune').innerHTML = TUNE.map(function (t) { var have = t[3].every(function (k) { return tn[k]; }); return '<div class="tn"><span>' + t[1] + '</span><button class="buy" data-tune="' + t[0] + '"' + (have ? ' disabled' : '') + '>' + (have ? '✓' : star(13) + t[2]) + '</button></div>'; }).join('');
    q('tune').querySelectorAll('[data-tune]').forEach(function (b) { b.onclick = function () { Y.haptic && Y.haptic(); buy(b.dataset.tune, b); }; });
    q('paints').innerHTML = PAINTS.map(function (p) {
      var have = owned(p[0]), on = cur === p[2];
      return '<div class="paint"><i style="background:' + p[2] + '"></i><span>' + p[1] + '</span><button data-paint="' + p[0] + '" class="' + (on ? 'on' : '') + '">' +
        (on ? 'Tanlangan ✓' : have ? 'Qo‘yish' : Y.icon('coin', null, 14) + PAINT_PRICE.toLocaleString('ru-RU')) + '</button></div>';
    }).join('');
    q('paints').querySelectorAll('[data-paint]').forEach(function (b) { b.onclick = function () { buyPaint(b.dataset.paint); }; });
  }
  function open() { o || build(); render(); o.show(true); init && sync(true).then(render); }
  function close() { o && o.show(false); document.dispatchEvent(new CustomEvent('yolchi:wallet')); }

  Y.shop = { open: open, close: close, sync: sync, owned: owned, PAINTS: PAINTS };
  document.addEventListener('yolchi:wallet', render);
})();

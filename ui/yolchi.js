/* Yo'lchi — umumiy UI: masshtab, Telegram xavfsiz hududlari, ikonkalar, mahalliy holat. */
(function () {
  var root = document.documentElement;
  var tg = window.Telegram && window.Telegram.WebApp;
  var inTg = !!(tg && tg.initData);
  var BOT = 'yolchigame_bot';

  /* ---------- Ikonkalar (24×24) ---------- */
  var P = {
    x: 'M6 6l12 12M18 6L6 18', back: 'M15 18l-6-6 6-6', fwd: 'M9 6l6 6-6 6', chev: 'M6 9l6 6 6-6',
    plus: 'M12 5v14M5 12h14', check: 'M5 12.5l4.5 4.5L19 7.5',
    sliders: 'M4 7h9M17 7h3M4 17h3M11 17h9M15 5v4M9 15v4',
    garage: 'M3 21V9.5L12 4l9 5.5V21M7 21v-7h10v7M7 17.5h10',
    bag: 'M5.5 8.5h13l-1 11.5h-11zM9 8.5V7a3 3 0 0 1 6 0v1.5',
    target: 'M12 3a9 9 0 1 0 .01 0zM12 7.5a4.5 4.5 0 1 0 .01 0zM12 11.2a.8.8 0 1 0 .01 0z',
    trophy: 'M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4',
    users: 'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 6.5M18.5 14.5A6.5 6.5 0 0 1 21.5 20',
    flag: 'M5 21V4M5 4h12l-2.5 4.5L17 13H5',
    truck: 'M2.5 6.5h11v10h-11zM13.5 10h4l3.5 3.5v3h-7.5M6 19a1.8 1.8 0 1 0 0-.01zM17 19a1.8 1.8 0 1 0 0-.01z',
    wheel: 'M12 3a9 9 0 1 0 .01 0zM12 10a2 2 0 1 0 .01 0zM3.5 11h6.5M14 11h6.5M12 14v6.5',
    lock: 'M5.5 11h13v9.5h-13zM8.5 11V8a3.5 3.5 0 0 1 7 0v3',
    copy: 'M9 9h11v11H9zM5 15H4V4h11v1',
    send: 'M21.5 3L2.5 10.8l7.3 2.9 2.9 7.3zM9.8 13.7L21.5 3',
    rotate: 'M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4',
    refresh: 'M20 12a8 8 0 1 1-2.6-5.9M20 4v5h-5',
    light: 'M10 6c6 0 10 2.5 10 6s-4 6-10 6zM3 8h4M3 12h4M3 16h4',
    left: 'M19 12H5M11 6l-6 6 6 6', right: 'M5 12h14M13 6l6 6-6 6',
    brake: 'M3.5 7h17v10h-17zM7 10.5h10M7 13.5h10', gas: 'M8 2.5h8v19H8zM10.5 7h3M10.5 11h3M10.5 15h3',
    sound: 'M11 4 5 9H2v6h3l6 5zM16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12',
    help: 'M12 3a9 9 0 1 0 .01 0zM9.5 9a2.6 2.6 0 0 1 5 .9c0 1.8-2.5 2.1-2.5 4M12 17h.01',
    camera: 'M4 7h4l2-3h4l2 3h4v13H4zM12 9.5a3.5 3.5 0 1 0 .01 0z',
    door: 'M3 3h18v18H3zM12 3v18M9 12H7M17 12h-2',
    exit: 'M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10',
    map: 'M9 4 3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14',
    fullscreen: 'M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5',
    signalL: 'M10 6l-6 6 6 6M20 12H5', signalR: 'M14 6l6 6-6 6M4 12h15',
    star: 'F:M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z',
    play: 'F:M7 4.5v15l12.5-7.5z', pause: 'F:M6.5 4.5h4v15h-4zM13.5 4.5h4v15h-4z',
    bolt: 'F:M13.5 2L4.5 14h6.5l-1 8 9-12.5h-6.5z', crown: 'F:M3 8l4.5 4L12 4.5 16.5 12 21 8l-2 11H5z',
    dots: 'F:M5.5 12a1.6 1.6 0 1 0 0 .01zM12 12a1.6 1.6 0 1 0 0 .01zM18.5 12a1.6 1.6 0 1 0 0 .01z'
  };
  function svg(name, color, size) {
    size = size || 18; color = color || 'currentColor';
    if (name === 'coin') return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10.5" fill="#ffc83d"/><circle cx="12" cy="12" r="7.2" fill="none" stroke="#c98a10" stroke-width="1.6"/><path d="M9.2 9h5.6M12 9v6.5" stroke="#9a6a08" stroke-width="2" stroke-linecap="round"/></svg>';
    if (name === 'stars') return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24"><path d="M12 1.8l3 6.3 6.9.9-5 4.8 1.3 6.8L12 17.3l-6.2 3.3 1.3-6.8-5-4.8 6.9-.9z" fill="#ffb800" stroke="#ffd766" stroke-width="1" stroke-linejoin="round"/></svg>';
    if (name === 'logo') return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="#c6f24e"/><path d="M8.5 6.5l5.5 8.5v7M19.5 6.5L14 15" fill="none" stroke="#0a1218" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var d = P[name]; if (!d) return '';
    var body = d.indexOf('F:') === 0 ? '<path d="' + d.slice(2) + '" fill="' + color + '"/>'
      : '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" aria-hidden="true">' + body + '</svg>';
  }
  function hydrateIcons(scope) {
    (scope || document).querySelectorAll('[data-ic]').forEach(function (el) {
      if (el.firstElementChild && el.firstElementChild.tagName === 'svg') return;
      el.classList.add('ic');
      el.insertAdjacentHTML('afterbegin', svg(el.getAttribute('data-ic'), el.getAttribute('data-c'), +el.getAttribute('data-s') || 18));
    });
  }

  /* ---------- Masshtab va xavfsiz hududlar ---------- */
  var probe;
  function envInsets() {
    if (!probe) {
      probe = document.createElement('div');
      probe.style.cssText = 'position:fixed;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)';
      document.body.appendChild(probe);
    }
    var cs = getComputedStyle(probe);
    return { t: parseFloat(cs.paddingTop) || 0, r: parseFloat(cs.paddingRight) || 0, b: parseFloat(cs.paddingBottom) || 0, l: parseFloat(cs.paddingLeft) || 0 };
  }
  function tgv(name) { return parseFloat(getComputedStyle(root).getPropertyValue(name)) || 0; }

  function layout() {
    var vw = window.innerWidth, vh = window.innerHeight;
    var s = Math.max(0.78, Math.min(1.7, vh / 390));
    if (vw / s < 600) s = Math.max(0.6, vw / 600);
    var fs = root.classList.contains('tg-fs');
    var e = envInsets();
    var st = fs ? tgv('--tg-safe-area-inset-top') : e.t;
    var ct = fs ? tgv('--tg-content-safe-area-inset-top') : 0;
    var yl = fs ? tgv('--tg-safe-area-inset-left') : e.l;
    var yr = fs ? tgv('--tg-safe-area-inset-right') : e.r;
    var yb = fs ? tgv('--tg-safe-area-inset-bottom') : e.b;
    var L = Math.max(yl, 14) / s, R = Math.max(yr, 14) / s, B = Math.max(yb, 10) / s;
    var rowY = fs && ct ? (st + ct / 2) / s - 15 : Math.max(st / s, 0) + 8;
    var tgL = fs ? (yl + 112) / s : L, tgR = fs ? (yr + 86) / s : R;
    var set = function (k, v) { root.style.setProperty(k, v); };
    set('--s', s.toFixed(4));
    set('--L', L.toFixed(1) + 'px'); set('--R', R.toFixed(1) + 'px'); set('--B', B.toFixed(1) + 'px');
    set('--rowY', rowY.toFixed(1) + 'px'); set('--T', (rowY + 44).toFixed(1) + 'px');
    set('--tgL', tgL.toFixed(1) + 'px'); set('--tgR', tgR.toFixed(1) + 'px');
    var ui = document.getElementById('ui');
    if (ui) { ui.style.width = (vw / s) + 'px'; ui.style.height = (vh / s) + 'px'; }
    root.classList.toggle('narrow', vw / s < 760);
  }

  /* ---------- Mahalliy holat (tanga, tajriba, kunlik vazifa) ---------- */
  var KEY = 'yolchi-state';
  function today() { var d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
  function load() {
    var st; try { st = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
    st = st || {};
    st.coins = st.coins || 0; st.stars = st.stars || 0; st.xp = st.xp || 0;
    st.mode = st.mode || 'race';
    if (st.day !== today()) { st.day = today(); st.racesToday = 0; st.examToday = 0; st.truckToday = 0; st.dailyClaimed = false; st.claims = {}; }
    st.claims = st.claims || {};
    return st;
  }
  function save(st) { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  function racer() {
    var r; try { r = JSON.parse(localStorage.getItem('bts-racer') || 'null'); } catch (e) {}
    r = r || {};
    var tu = inTg && tg.initDataUnsafe && tg.initDataUnsafe.user;
    if ((!r.name || r.name === 'Haydovchi') && tu && tu.first_name) r.name = tu.first_name.slice(0, 18);
    return { name: r.name || 'Haydovchi', car: r.car || 'gentra', color: r.color || '#e5e7eb' };
  }
  function level(xp) { var lv = 1, need = 200, left = xp; while (left >= need) { left -= need; lv++; need = 200 + (lv - 1) * 100; } return { lv: lv, cur: left, need: need }; }

  var CARS = {
    gentra: { name: 'Gentra', sub: '1.5 · mexanika', cls: 'Sedan · 1-sinf', speed: 187, acc: 5.1, brake: 12.5, steer: 0.53 },
    cobalt: { name: 'Cobalt', sub: '2014 · LTZ', cls: 'Sedan · 1-sinf', speed: 176, acc: 4.9, brake: 12.4, steer: 0.53 },
    malibu: { name: 'Malibu', sub: '2019 · Premier', cls: 'Sedan · 2-sinf', speed: 220, acc: 6.8, brake: 13.2, steer: 0.49 },
    damas: { price: 1500, name: 'Damas', sub: '0.8 · mikroavtobus', cls: 'Mikroavtobus · 1-sinf', speed: 130, acc: 3.8, brake: 11, steer: 0.55 },
    nexia: { price: 2500, name: 'Nexia 2', sub: '1.5 · mexanika', cls: 'Sedan · 1-sinf', speed: 169, acc: 4.6, brake: 12, steer: 0.53 },
    onix: { price: 4000, name: 'Onix', sub: '1.2 Turbo · avtomat', cls: 'Sedan · 2-sinf', speed: 194, acc: 5.6, brake: 12.8, steer: 0.52 },
    tracker: { win: 'firsts5', name: 'Tracker', sub: '1.2 Turbo · krossover', cls: 'Krossover · sovrin', speed: 198, acc: 5.8, brake: 12.8, steer: 0.51 },
    equinox: { win: 'tracks', name: 'Equinox', sub: 'RS · 1.5 Turbo', cls: 'Krossover · sovrin', speed: 209, acc: 6.3, brake: 13, steer: 0.5 },
    tahoe: { win: 'firsts20', name: 'Tahoe', sub: 'RST · 5.3 V8', cls: 'Yo‘ltanlamas · sovrin', speed: 216, acc: 6.6, brake: 13, steer: 0.47 }
  };
  var HEX = ['e5e7eb', '28313e', '36799b', 'ac393f', 'c5c0a5'];
  function carImage(car, color) { var h = String(color || '#e5e7eb').replace('#', '').toLowerCase(); if (CARS[car] && (CARS[car].price || CARS[car].win) && HEX.indexOf(h) < 0) h = 'e5e7eb'; return '/ui/cars/' + car + '-' + h + '.webp'; }

  /* ---------- Yordamchilar ---------- */
  var toastEl, toastT;
  function toast(msg) {
    var ui = document.getElementById('ui') || document.body;
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'y-toast'; ui.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  }
  function haptic(kind) { try { if (inTg && tg.HapticFeedback) tg.HapticFeedback.impactOccurred(kind || 'light'); } catch (e) {} }
  function share(text, startapp) {
    var link = 'https://t.me/' + BOT + (startapp ? '?startapp=' + startapp : '');
    if (inTg) { tg.openTelegramLink('https://t.me/share/url?url=' + encodeURIComponent(link) + '&text=' + encodeURIComponent(text)); return; }
    if (navigator.share) { navigator.share({ text: text, url: link }).catch(function () {}); return; }
    try { navigator.clipboard.writeText(text + ' ' + link); toast('Havola nusxalandi'); } catch (e) { toast(link); }
  }

  window.Yolchi = {
    inTg: inTg, tg: tg, icon: svg, hydrate: hydrateIcons, layout: layout, toast: toast, haptic: haptic, share: share,
    state: load, save: save, today: today, uid: (inTg && tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.id) || 0, racer: racer, level: level, cars: CARS, carImage: carImage
  };

  function boot() {
    hydrateIcons();
    layout();
    document.documentElement.classList.add('yolchi-ready');
  }
  window.addEventListener('resize', layout);
  if (inTg) ['viewportChanged', 'safeAreaChanged', 'contentSafeAreaChanged', 'fullscreenChanged'].forEach(function (ev) { try { tg.onEvent(ev, function () { setTimeout(layout, 30); }); } catch (e) {} });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  // tg.js tg-fs klassini keyinroq qo'yishi mumkin
  new MutationObserver(layout).observe(root, { attributes: true, attributeFilter: ['class'] });
})();

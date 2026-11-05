/* Yo'lchi — Telegram Mini App moslamasi va telefonda gorizontal rejim. */
(function () {
  var root = document.documentElement;
  var tg = window.Telegram && window.Telegram.WebApp;
  var inTg = !!(tg && tg.initData);
  var mobileTg = inTg && (tg.platform === 'android' || tg.platform === 'ios');
  var phone = mobileTg || (!inTg && matchMedia('(pointer:coarse)').matches && Math.min(screen.width, screen.height) < 600);
  var landscape = matchMedia('(orientation: landscape)');

  /* ---------- Gorizontal rejim (telefonlar) ---------- */
  if (phone) {
    root.classList.add('yolchi-phone');

    var css = document.createElement('style');
    css.textContent = [
      '#yolchi-rotate{display:none;position:fixed;inset:0;z-index:2147483647;align-items:center;justify-content:center;flex-direction:column;gap:18px;padding:32px;text-align:center;background:#0d1821;color:#fff;font:600 17px/1.35 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}',
      '#yolchi-rotate small{font-weight:400;font-size:14px;opacity:.65;max-width:260px}',
      '#yolchi-rotate svg{width:84px;height:84px;animation:yolchi-turn 2.2s ease-in-out infinite}',
      '@keyframes yolchi-turn{0%,25%{transform:rotate(0)}55%,100%{transform:rotate(-90deg)}}',
      '@media (orientation:portrait){html.yolchi-phone #yolchi-rotate{display:flex}}'
    ].join('');
    (document.head || root).appendChild(css);

    // Gorizontal "o'yin" ko'rinishi: mobile.css (sahifa turi bo'yicha)
    var p = location.pathname.replace(/\/+$/, '') || '/';
    root.setAttribute('data-page', p === '/race' ? 'race' : p === '/exam' ? 'exam' : 'truck');
    var link = document.createElement('link');
    link.rel = 'stylesheet'; link.href = '/mobile.css?v=2';
    (document.head || root).appendChild(link);

    var mount = function () {
      if (document.getElementById('yolchi-rotate')) return;
      var el = document.createElement('div');
      el.id = 'yolchi-rotate';
      el.setAttribute('role', 'alert');
      el.innerHTML = '<svg viewBox="0 0 64 64" fill="none" stroke="#f78435" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="20" y="6" width="24" height="44" rx="5"/><path d="M29 43h6"/><path d="M50 52a22 22 0 0 1-30 6" stroke="#fff" stroke-opacity=".5"/><path d="M24 54l-4 4 5 3" stroke="#fff" stroke-opacity=".5"/></svg>' +
        '<div>Telefonni yon tomonga buring</div><small>Yo‘lchi gorizontal rejimda o‘ynaladi</small>';
      // Brauzerda: bosilganda to'liq ekran + gorizontal qulf (Android Chrome qo'llaydi)
      if (!inTg) el.addEventListener('click', function () {
        var p = root.requestFullscreen ? root.requestFullscreen() : null;
        Promise.resolve(p).then(function () { return screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape'); }).catch(function () {});
      });
      document.body.appendChild(el);
    };
    if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
  }

  if (!inTg) return;

  /* ---------- Telegram Mini App ---------- */
  var BOT = 'yolchigame_bot';
  var path = location.pathname.replace(/\/+$/, '') || '/';
  var color = (document.querySelector('meta[name="theme-color"]') || {}).content || '#111d27';
  var v8 = tg.isVersionAtLeast && tg.isVersionAtLeast('8.0');

  root.classList.add('in-telegram');
  tg.ready();
  tg.expand();
  try { tg.disableVerticalSwipes(); } catch (e) {}   // rul burganda ilova yopilmasin
  try { tg.enableClosingConfirmation(); } catch (e) {}
  try { tg.setHeaderColor(color); tg.setBackgroundColor(color); } catch (e) {}

  // Do'st taklifi: t.me/yolchigame_bot?startapp=room_ABCD1234 → poyga xonasi
  var start = (tg.initDataUnsafe && tg.initDataUnsafe.start_param) || '';
  var room = /^room_([A-Za-z0-9]{8})$/.exec(start);
  if (room && path === '/' && !sessionStorage.getItem('yolchi-room-used')) {
    sessionStorage.setItem('yolchi-room-used', '1');
    location.replace('/race/#room=' + room[1].toUpperCase());
    return;
  }

  // Telefonda: to'liq ekran va gorizontal holatda aylanishni qulflash.
  if (mobileTg && v8) {
    var syncFs = function () { root.classList.toggle('tg-fs', !!tg.isFullscreen); };
    var lockIfLandscape = function () {
      if (landscape.matches) { try { tg.lockOrientation(); } catch (e) {} }
    };
    tg.onEvent('fullscreenChanged', syncFs);
    tg.onEvent('fullscreenFailed', syncFs);
    syncFs();
    if (!tg.isFullscreen) { try { tg.requestFullscreen(); } catch (e) {} }
    lockIfLandscape();
    if (landscape.addEventListener) landscape.addEventListener('change', lockIfLandscape);
    else landscape.addListener(lockIfLandscape);
  }

  // Ichki sahifalarda Telegramning "Orqaga" tugmasi bosh sahifaga qaytaradi.
  if (path !== '/') {
    tg.BackButton.show();
    tg.BackButton.onClick(function () { location.href = '/'; });
  }

  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest && ev.target.closest('button');
    if (!btn) return;

    // To'liq ekran: brauzer API o'rniga Telegram API.
    if (btn.id === 'fullscreen' && tg.requestFullscreen && v8) {
      ev.preventDefault(); ev.stopImmediatePropagation();
      try { tg.isFullscreen ? tg.exitFullscreen() : tg.requestFullscreen(); } catch (e) {}
      return;
    }

    // Poyga xonasiga taklif: havolani nusxalash o'rniga Telegram orqali ulashish.
    if (btn.id === 'copy') {
      var code = ((document.getElementById('room-code') || {}).textContent || '').trim();
      if (!/^[A-Za-z0-9]{8}$/.test(code)) return;
      ev.preventDefault(); ev.stopImmediatePropagation();
      var link = 'https://t.me/' + BOT + '?startapp=room_' + code;
      var text = "Yo'lchi'da poygaga chiqamiz! Xona kodi: " + code;
      tg.openTelegramLink('https://t.me/share/url?url=' + encodeURIComponent(link) + '&text=' + encodeURIComponent(text));
    }
  }, true);
})();

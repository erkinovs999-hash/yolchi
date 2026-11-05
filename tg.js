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
      '@media (orientation:portrait){html.yolchi-phone #yolchi-rotate{display:flex}}',

      /* Telegram to'liq ekranda: tepadagi Telegram tugmalari va "chelka" ostida qolmaslik */
      'html.tg-fs{--yt:calc(var(--tg-safe-area-inset-top,0px) + var(--tg-content-safe-area-inset-top,0px));--yb:var(--tg-safe-area-inset-bottom,0px);--yl:var(--tg-safe-area-inset-left,0px);--yr:var(--tg-safe-area-inset-right,0px)}',
      'html.tg-fs :is(header,.topbar){left:var(--yl)!important;right:var(--yr)!important}',
      /* tepada: chapga, o'rtada, o'ngga yopishgan panellar */
      'html.tg-fs :is(header,.topbar,.top-status,#toast,.menu,.scene-label,#render-note){translate:0 var(--yt)}',
      'html.tg-fs :is(.mission-panel,.menu-overlay,.race-heading,.leaderboard,.lobby-panel,.menu-panel,.task-card){translate:var(--yl) var(--yt)}',
      'html.tg-fs :is(.map-panel,.mini-panel,.map-card,.score-bar,.car-caption){translate:calc(-1*var(--yr)) var(--yt)}',
      'html.tg-fs .topbar{box-shadow:0 calc(-1*var(--yt)) 0 0 var(--yolchi-bar,transparent)}',
      'html.tg-fs :is(.menu-card,.menu-panel,.lobby-panel){max-height:calc(100dvh - 110px - var(--yt))!important}',
      'html.tg-fs .menu{padding-bottom:calc(20px + var(--yt))!important;padding-left:calc(23px + var(--yl))!important}',
      /* pastda */
      'html.tg-fs :is(.dashboard,.speedometer,.garage-footer,.keyboard-hint,.keyboard-tip){translate:0 calc(-1*var(--yb))}',
      'html.tg-fs .bottom-left{translate:var(--yl) calc(-1*var(--yb))}',
      'html.tg-fs :is(.camera-panel,.race-actions,.actions){translate:calc(-1*var(--yr)) calc(-1*var(--yb))}',
      'html.tg-fs .touch-controls{translate:0 calc(-1*var(--yb))}',
      'html.tg-fs .task-card{max-width:calc(50vw - 165px - var(--yl));box-sizing:border-box}',
      'html.tg-fs .touch-controls{padding-left:var(--yl);padding-right:var(--yr)}'
    ].join('');
    (document.head || root).appendChild(css);

    var bar = { '/exam': '#f4f5ec' };

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
      var key = (location.pathname.replace(/\/+$/, '') || '/');
      if (bar[key]) root.style.setProperty('--yolchi-bar', bar[key]);
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

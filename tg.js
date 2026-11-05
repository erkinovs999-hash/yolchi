/* Yo'lchi — Telegram Mini App moslamasi. Telegramdan tashqarida hech narsa qilmaydi. */
(function () {
  var tg = window.Telegram && window.Telegram.WebApp;
  if (!tg || !tg.initData) return;

  var BOT = 'yolchigame_bot';
  var path = location.pathname.replace(/\/+$/, '') || '/';
  var color = (document.querySelector('meta[name="theme-color"]') || {}).content || '#111d27';

  document.documentElement.classList.add('in-telegram');
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

  // Ichki sahifalarda Telegramning "Orqaga" tugmasi bosh sahifaga qaytaradi.
  if (path !== '/') {
    tg.BackButton.show();
    tg.BackButton.onClick(function () { location.href = '/'; });
  }

  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest && ev.target.closest('button');
    if (!btn) return;

    // To'liq ekran: brauzer API o'rniga Telegram API.
    if (btn.id === 'fullscreen' && tg.requestFullscreen) {
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

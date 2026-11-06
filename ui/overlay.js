/* Yo'lchi — eski o'yin sahifalari ustidagi menyu qatlami (Shadow DOM: o'yin uslublari bilan aralashmaydi).
   Yolchi.overlay(css) → { host, root, ui, show(bool) } */
(function () {
  var Y = window.Yolchi;
  var TOKENS = ':host{all:initial;position:fixed;inset:0;z-index:60;pointer-events:none;display:block;' +
    '--bg:#0a1218;--panel:rgba(14,26,34,.74);--line:rgba(255,255,255,.10);--line2:rgba(255,255,255,.16);--text:#fff;--muted:#8fa3b1;--soft:#c3cdd4;' +
    '--lime:#c6f24e;--lime-d:#7fa31f;--orange:#ff8a3d;--orange-d:#b8561b;--blue:#4da3ff;--coin:#ffc83d;--tg:#2aabee;--red:#ff4d5e;' +
    'font-family:"Manrope",system-ui,sans-serif;color:#fff;-webkit-font-smoothing:antialiased}' +
    ':host([hidden]){display:none!important}' +
    '#ui{position:absolute;left:0;top:0;width:calc(100vw / var(--s,1));height:calc(100vh / var(--s,1));transform-origin:0 0;transform:scale(var(--s,1));pointer-events:none}' +
    '#ui :is(button,a,select,.glass,.pe){pointer-events:auto}' +
    '*{box-sizing:border-box}';

  function overlay(css, id) {
    var host = document.createElement('div');
    host.id = id || 'yolchi-overlay';
    var root = host.attachShadow({ mode: 'open' });
    root.innerHTML = '<link rel="stylesheet" href="/ui/yolchi.css"><style>' + TOKENS + (css || '') + '</style><div id="ui"></div>';
    document.body.appendChild(host);
    var ui = root.getElementById('ui');
    return {
      host: host, root: root, ui: ui,
      $: function (sel) { return root.querySelector(sel); },
      show: function (on) { host.hidden = !on; },
      icons: function () {
        root.querySelectorAll('[data-ic]').forEach(function (el) {
          if (el.firstElementChild && el.firstElementChild.tagName === 'svg') return;
          el.classList.add('ic');
          el.insertAdjacentHTML('afterbegin', Y.icon(el.getAttribute('data-ic'), el.getAttribute('data-c'), +el.getAttribute('data-s') || 18));
        });
      }
    };
  }
  // Asl o'yin elementini dasturiy bosish (yashirin bo'lsa ham ishlaydi)
  function press(el) { if (el) el.click(); }
  Y.overlay = overlay;
  Y.press = press;
})();

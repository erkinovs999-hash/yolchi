/* Yo'lchi — avtodrom menyusi. O'yin mantiqi exam.js'da; bu qatlam asl #car, [data-mode], #lesson va #start'ni boshqaradi. */
(function () {
  var Y = window.Yolchi;
  var $d = function (id) { return document.getElementById(id); };
  var MODES = [['exam', 'Imtihon', '12 mashq'], ['practice', 'Mashq', 'Bittasini'], ['time', 'Vaqt', 'Rekord'], ['free', 'Erkin', 'Jarimasiz'], ['city', 'Shahar', 'Trafik bilan']];
  var NOTES = { exam: 'Real avtodrom sxemasi: 10-dan 21-mashqqacha, 100 jarima balli \u2014 yiqilish.', practice: 'Bitta mashqni tanlab, qayta-qayta bajaring.', time: 'Barcha mashqlar vaqtga. Har bir jarima balli +1 soniya.', free: 'Mashqsiz va jarimasiz, yo\u2018llarda boshqa mashinalar bor.', city: '6 ta manzil, svetoforlar va trafik. Tezlik 40 km/soatgacha.' };
  var WX = [['day', '\u2600 Kun'], ['night', '\u263E Tun'], ['rain', '\u2602 Yomg\u2018ir']];
  var CARS = [['gentra', 'Gentra', '1.5 · mexanika'], ['cobalt', 'Cobalt', '2014 · LTZ'], ['malibu', 'Malibu', '2019 · Premier']];

  var CSS = [
    '.bg{position:absolute;inset:0;background:radial-gradient(560px 300px at 38% 64%,#18324a 0%,#0f1c27 52%,#0a1218 100%);pointer-events:none}',
    '.glow{left:calc(var(--L) + 120px);top:248px;width:400px;height:60px;border-radius:50%;background:radial-gradient(closest-side,rgba(77,163,255,.32),rgba(77,163,255,0))}',
    '.ring{left:calc(var(--L) + 170px);top:266px;width:300px;height:32px;border-radius:50%;border:1.5px solid rgba(77,163,255,.5)}',
    '.hero{left:calc(var(--L) + 140px);top:86px;width:360px;height:200px;object-fit:contain;transition:opacity .25s}',
    '.info{left:var(--L);top:var(--T);display:flex;flex-direction:column;gap:2px}',
    '.cars{left:var(--L);bottom:calc(var(--B) + 6px);display:flex;gap:8px}',
    '.car{width:104px;height:72px;border-radius:12px;overflow:hidden;background:rgba(14,26,34,.74);border:1px solid rgba(255,255,255,.10);display:flex;flex-direction:column;align-items:center;justify-content:flex-end;position:relative}',
    '.car img{position:absolute;left:6px;right:6px;top:4px;width:92px;height:46px;object-fit:contain}',
    '.car span{position:relative;width:100%;height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 8px;background:#0e1a22;font-size:10px;font-weight:800}',
    '.car.on{border:2px solid var(--blue)}.car.on span{background:var(--blue);color:#06182b}',
    '.panel{right:var(--R);top:var(--T);bottom:calc(var(--B) + 74px);width:250px;padding:12px;display:flex;flex-direction:column;gap:9px;overflow:hidden}',
    '.modes{display:grid;grid-template-columns:repeat(6,1fr);gap:4px}',
    '.modes button{grid-column:span 2;padding:6px 3px;border-radius:10px;background:rgba(255,255,255,.06);display:flex;flex-direction:column;align-items:center;gap:1px;font-size:11px;font-weight:800;color:#fff;border:1px solid transparent}',
    '.modes button:nth-child(n+4){grid-column:span 3}',
    '.modes small{font-size:8.5px;font-weight:700;color:var(--muted)}',
    '.modes button.on{background:rgba(77,163,255,.18);border-color:var(--blue)}.modes button.on small{color:#bcdcff}',
    '.seg{display:flex;gap:4px;padding:3px;border-radius:11px;background:rgba(255,255,255,.06)}',
    '.seg button{flex:1;height:28px;border-radius:9px;display:flex;align-items:center;justify-content:center;gap:5px;font-size:11px;font-weight:800;color:var(--muted)}',
    '.seg button.on{background:var(--blue);color:#06182b}',
    'select{appearance:none;-webkit-appearance:none;width:100%;height:34px;padding:0 30px 0 10px;border-radius:10px;background:#13222c url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M6 9l6 6 6-6%27 fill=%27none%27 stroke=%27%238fa3b1%27 stroke-width=%272.5%27/%3E%3C/svg%3E") no-repeat right 10px center;border:1px solid rgba(255,255,255,.14);color:#fff;font:700 12px Manrope,sans-serif;pointer-events:auto}',
    '.chips{display:flex;gap:6px}',
    '.chips div{flex:1;padding:6px 8px;border-radius:10px;background:rgba(255,255,255,.05);display:flex;flex-direction:column;gap:1px}',
    '.chips b{font-size:13px;font-weight:800}',
    '.note{margin:auto 0 0;font-size:9.5px;font-weight:600;line-height:1.4;color:var(--muted)}',
    '.status{font-size:10px;font-weight:700;color:var(--muted);display:flex;gap:6px;align-items:center}',
    '.status button{color:var(--blue);font-weight:800;font-size:10px}',
    '.go{right:var(--R);bottom:calc(var(--B) + 6px);width:250px;height:56px;font-size:14px}',
    ':host-context(.narrow) .hero{width:300px;left:calc(var(--L) + 150px)}',
    ':host-context(.narrow) .glow,:host-context(.narrow) .ring{transform:scale(.85)}'
  ].join('');

  var o = Y.overlay(CSS, 'yolchi-exam');
  var st = Y.state();
  o.ui.innerHTML =
    '<div class="bg"></div><div class="abs glow"></div><div class="abs ring"></div><img class="abs hero" id="hero" alt="">' +
    '<div class="topbar"><span class="title">AVTODROM</span><span class="muted" style="font-size:11px;font-weight:700">B toifa · 12 mashq</span><span class="grow"></span>' +
    '<span class="pill"><span data-ic="coin" data-s="16"></span><b id="coins">0</b></span>' +
    '<button class="iconbtn" id="cfg" aria-label="Sozlamalar"><span data-ic="sliders" data-c="#fff" data-s="15"></span></button>' +
    '<button class="iconbtn" id="hlp" aria-label="Qoidalar"><span data-ic="help" data-c="#fff" data-s="15"></span></button></div>' +
    '<div class="abs info"><span class="lbl" style="color:var(--blue)">Imtihon simulyatori</span><span class="disp" id="carName" style="font-size:24px;line-height:1.1"></span><span class="muted" id="carSub" style="font-size:11px;font-weight:600"></span></div>' +
    '<div class="abs cars" id="cars"></div>' +
    '<div class="abs glass panel"><span class="lbl">Rejim</span>' +
    '<div class="modes" id="modes">' + MODES.map(function (m) { return '<button data-m="' + m[0] + '">' + m[1] + '<small>' + m[2] + '</small></button>'; }).join('') + '</div>' +
    '<select id="lesson" hidden aria-label="Mashqni tanlash"></select>' +
    '<span class="lbl">Ob-havo</span><div class="seg" id="wx">' + WX.map(function (w) { return '<button data-w="' + w[0] + '">' + w[1] + '</button>'; }).join('') + '</div>' +
    '<div class="status" id="status"></div><p class="note" id="mnote"></p></div>' +
    '<button class="abs btn blue go" id="go" disabled><span id="goTxt">YUKLANMOQDA…</span></button>';
  o.icons();
  var q = function (id) { return o.root.getElementById(id); };
  var car = $d('car');

  function paint() {
    var v = car.value, c = CARS.filter(function (x) { return x[0] === v; })[0] || CARS[1];
    q('carName').textContent = c[1]; q('carSub').textContent = c[2];
    q('hero').src = Y.carImage(v, '#e5e7eb');
    q('cars').innerHTML = CARS.map(function (x) {
      return '<button class="car' + (x[0] === v ? ' on' : '') + '" data-car="' + x[0] + '"><img alt="" src="' + Y.carImage(x[0], '#e5e7eb') + '"><span>' + x[1] + (x[0] === v ? Y.icon('check', '#06182b', 12) : '') + '</span></button>';
    }).join('');
    q('cars').querySelectorAll('[data-car]').forEach(function (b) {
      b.onclick = function () { if (car.value === b.dataset.car) return; car.value = b.dataset.car; car.dispatchEvent(new Event('change', { bubbles: true })); Y.haptic(); paint(); syncStart(); };
    });
    q('coins').textContent = (Y.state().coins || 0).toLocaleString('ru-RU');
  }

  function syncMode() {
    var m = (document.querySelector('[data-mode][aria-pressed="true"]') || {}).dataset;
    m = m ? m.mode : 'exam';
    o.root.querySelectorAll('#modes [data-m]').forEach(function (b) { b.classList.toggle('on', b.dataset.m === m); });
    q('mnote').textContent = NOTES[m] || '';
    var best = window.__ycBest && window.__ycBest();
    if (m === 'time' && best) q('mnote').textContent += ' Eng yaxshi natija: ' + Math.floor(best / 60) + ':' + String(best % 60).padStart(2, '0') + '.';
    var src = $d('lesson'), dst = q('lesson');
    dst.hidden = m !== 'practice';
    if (dst.options.length !== src.options.length) dst.innerHTML = src.innerHTML;
    dst.value = src.value;
  }
  function syncWx() { var w = 'day'; try { w = localStorage.getItem('yolchi-wx') || 'day'; } catch (e) {} o.root.querySelectorAll('#wx [data-w]').forEach(function (b) { b.classList.toggle('on', b.dataset.w === w); }); }
  o.root.querySelectorAll('#wx [data-w]').forEach(function (b) { b.onclick = function () { window.__ycEnv && window.__ycEnv(b.dataset.w); Y.haptic(); syncWx(); }; });
  syncWx();
  o.root.querySelectorAll('#modes [data-m]').forEach(function (b) {
    b.onclick = function () { Y.press(document.querySelector('[data-mode="' + b.dataset.m + '"]')); Y.haptic(); setTimeout(function () { syncMode(); syncStart(); }, 0); };
  });
  q('lesson').onchange = function () { var src = $d('lesson'); src.value = q('lesson').value; src.dispatchEvent(new Event('change', { bubbles: true })); };

  function syncStart() {
    var s = $d('start'), t = s.firstElementChild ? s.firstElementChild.textContent : s.textContent;
    q('go').disabled = s.disabled;
    q('goTxt').textContent = (t || '').trim().toUpperCase();
    var ms = $d('model-status'), rm = $d('retry-model');
    q('status').innerHTML = '';
    if (ms && !ms.hidden && ms.textContent.trim()) q('status').textContent = ms.textContent.trim();
    if (rm && !rm.hidden) { var b = document.createElement('button'); b.textContent = 'Qayta yuklash ↻'; b.onclick = function () { Y.press(rm); }; q('status').appendChild(b); }
  }
  q('go').onclick = function () { Y.haptic('medium'); Y.press($d('start')); };
  q('hlp').onclick = function () { Y.press($d('help')); };
  q('cfg').onclick = function () { window.YS && window.YS.open(); Y.haptic(); };

  function syncPhase() {
    var on = document.body.dataset.phase === 'menu';
    o.show(on); document.documentElement.classList.toggle('y-menu', on);
    if (on) { paint(); syncMode(); syncStart(); }
  }
  new MutationObserver(syncPhase).observe(document.body, { attributes: true, attributeFilter: ['data-phase'] });
  new MutationObserver(syncStart).observe($d('start'), { attributes: true, childList: true, characterData: true, subtree: true });
  var ms = $d('model-status'); if (ms) new MutationObserver(syncStart).observe(ms, { attributes: true, childList: true, characterData: true, subtree: true });
  var rm = $d('retry-model'); if (rm) new MutationObserver(syncStart).observe(rm, { attributes: true });
  document.querySelectorAll('[data-mode]').forEach(function (b) { new MutationObserver(syncMode).observe(b, { attributes: true, attributeFilter: ['aria-pressed'] }); });
  new MutationObserver(syncMode).observe($d('lesson'), { childList: true, attributes: true });

  // Imtihon natijasi: tanga va tajriba (bir marta)
  var given = false;
  new MutationObserver(function () {
    var ph = document.body.dataset.phase;
    if (ph !== 'result') { given = false; return; }
    if (given) return; given = true;
    var title = ($d('result-title') || {}).textContent || '';
    var passed = /bajarildi|sizniki/i.test(title);
    st = Y.state(); var c = (passed ? 100 : 20) * (st.vip ? 2 : 1); st.coins = (st.coins || 0) + c; st.xp = (st.xp || 0) + (passed ? 60 : 15); if (passed) { st.examToday = (st.examToday || 0) + 1; st.examPassed = (st.examPassed || 0) + 1; } Y.save(st);
    Y.toast('+' + c + ' tanga');
  }).observe(document.body, { attributes: true, attributeFilter: ['data-phase'] });

  syncPhase();
})();

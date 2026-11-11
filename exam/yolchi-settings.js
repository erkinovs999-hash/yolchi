/* Yo'lchi — avtodrom sozlamalari: boshqaruv (rul / tugmalar / egish), uzatma qutisi (mexanika / avtomat), ovoz.
   Saqlanadi: localStorage "yolchi-settings". O'yin (exam.js) window.__ycSet / __ycSound / __ycVol orqali yangilanadi. */
(function () {
  var Y = window.Yolchi;
  var KEY = 'yolchi-settings';
  var DEF = { steer: 'wheel', sens: 1, trans: 'manual', snd: true, vEng: .8, vFx: .8 };
  var S = (function () { try { return Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { return Object.assign({}, DEF); } })();
  try { var old = localStorage.getItem('yolchi-sound'); if (old === '0' && !localStorage.getItem(KEY)) S.snd = false; } catch (e) {}
  var subs = [];
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function apply(k) {
    if (!k || k === 'trans') window.__ycSet && window.__ycSet('trans', S.trans);
    if (!k || k === 'snd') window.__ycSound && window.__ycSound(S.snd);
    if (!k || k === 'vEng' || k === 'vFx') window.__ycVol && window.__ycVol(S.vEng, S.vFx);
  }
  function set(k, v) { S[k] = v; save(); apply(k); subs.forEach(function (f) { f(S, k); }); }

  var CSS = [
    '.dim{position:absolute;inset:0;background:rgba(5,10,14,.62);pointer-events:auto}',
    '.box{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:560px;max-width:calc(100% - 40px);padding:16px 18px 18px;border-radius:18px;background:#0e1a22;border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 80px rgba(0,0,0,.5)}',
    '.hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}',
    '.hd b{font-family:Unbounded,sans-serif;font-size:16px;font-weight:800;letter-spacing:.04em}',
    '.cols{display:grid;grid-template-columns:1fr 1fr;gap:18px}',
    '.sec{display:flex;flex-direction:column;gap:7px}',
    '.seg{display:flex;gap:4px;padding:3px;border-radius:11px;background:rgba(255,255,255,.06)}',
    '.seg button{flex:1;height:34px;border-radius:9px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:11.5px;font-weight:800;color:var(--muted)}',
    '.seg button small{font-size:8px;font-weight:700;opacity:.85}',
    '.seg button.on{background:var(--lime);color:#0a1218}',
    '.row{display:flex;align-items:center;gap:10px;font-size:11.5px;font-weight:700;color:var(--soft)}',
    '.row span{width:82px;flex:none}.row output{width:34px;text-align:right;font-weight:800;color:#fff}',
    'input[type=range]{flex:1;-webkit-appearance:none;appearance:none;height:6px;border-radius:99px;background:rgba(255,255,255,.12);pointer-events:auto}',
    'input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:var(--lime);border:3px solid #0e1a22}',
    'input[type=range]::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:var(--lime);border:3px solid #0e1a22}',
    'input:disabled{opacity:.35}',
    '.tg{width:46px;height:26px;border-radius:99px;background:rgba(255,255,255,.14);position:relative;flex:none}',
    '.tg i{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:left .15s}',
    '.tg.on{background:var(--lime)}.tg.on i{left:23px;background:#0a1218}',
    '.note{margin:0;font-size:9.5px;font-weight:600;line-height:1.4;color:var(--muted)}',
    '.done{margin-top:14px;width:100%;height:44px;font-size:13px}',
    ':host-context(.narrow) .box{width:520px}'
  ].join('');
  var o = Y.overlay(CSS, 'yolchi-settings'); o.host.style.zIndex = '90'; o.show(false);
  var seg = function (id, items) { return '<div class="seg" id="' + id + '">' + items.map(function (x) { return '<button data-v="' + x[0] + '">' + x[1] + (x[2] ? '<small>' + x[2] + '</small>' : '') + '</button>'; }).join('') + '</div>'; };
  o.ui.innerHTML = '<div class="dim" id="dim"></div><div class="box glass">' +
    '<div class="hd"><b>SOZLAMALAR</b><button class="iconbtn" id="x" aria-label="Yopish"><span data-ic="x" data-c="#fff" data-s="14"></span></button></div>' +
    '<div class="cols"><div class="sec">' +
    '<span class="lbl">Boshqaruv</span>' + seg('steer', [['wheel', 'Rul', 'aylantirish'], ['buttons', 'Tugmalar', '◀ ▶'], ['tilt', 'Egish', 'telefonni burish']]) +
    '<div class="row"><span>Sezgirlik</span><input type="range" id="sens" min="50" max="150" step="5"><output id="sensO"></output></div>' +
    '<p class="note" id="steerNote"></p>' +
    '<span class="lbl" style="margin-top:6px">Uzatma qutisi</span>' + seg('trans', [['manual', 'Mexanika', '1 · 2 · 3 + ilashish'], ['auto', 'Avtomat', 'R · N · D']]) +
    '<p class="note" id="transNote"></p></div>' +
    '<div class="sec"><span class="lbl">Ovoz</span>' +
    '<div class="row"><span>Ovoz</span><button class="tg" id="snd" aria-label="Ovozni yoqish"><i></i></button></div>' +
    '<div class="row"><span>Dvigatel</span><input type="range" id="vEng" min="0" max="100" step="5"><output id="vEngO"></output></div>' +
    '<div class="row"><span>Effektlar</span><input type="range" id="vFx" min="0" max="100" step="5"><output id="vFxO"></output></div>' +
    '<span class="lbl" style="margin-top:6px">Kamera</span>' + seg('cam', [['0', 'Orqadan', ''], ['1', 'Salondan', '1-shaxs'], ['2', 'Tepadan', '']]) + '</div></div>' +
    '<button class="btn primary done" id="ok">TAYYOR</button></div>';
  o.icons();
  var q = function (id) { return o.root.getElementById(id); };
  var NOTE = { wheel: 'Rulni barmoq bilan aylantiring, qo‘yib yuborsangiz markazga qaytadi.', buttons: 'O‘ng pastdagi ◀ ▶ tugmalarini bosib turing.', tilt: 'Telefonni rul kabi chapga-o‘ngga eging.' };
  function render() {
    ['steer', 'trans'].forEach(function (k) { q(k).querySelectorAll('[data-v]').forEach(function (b) { b.classList.toggle('on', b.dataset.v === S[k]); }); });
    q('sens').value = Math.round(S.sens * 100); q('sensO').textContent = Math.round(S.sens * 100) + '%'; q('sens').disabled = S.steer === 'buttons';
    q('steerNote').textContent = NOTE[S.steer];
    q('transNote').textContent = S.trans === 'auto' ? 'Avtomatda ilashish pedali yo‘q, dvigatel o‘chib qolmaydi. D — oldinga, R — orqaga.' : 'Haqiqiy imtihondagidek: uzatmani ilashish pedali bosilganda almashtiring.';
    var cm = String(window.__ycCam ? window.__ycCam() : 0); q('cam').querySelectorAll('[data-v]').forEach(function (b) { b.classList.toggle('on', b.dataset.v === cm); });
    q('snd').classList.toggle('on', !!S.snd);
    q('vEng').value = Math.round(S.vEng * 100); q('vEngO').textContent = Math.round(S.vEng * 100) + '%';
    q('vFx').value = Math.round(S.vFx * 100); q('vFxO').textContent = Math.round(S.vFx * 100) + '%';
    q('vEng').disabled = q('vFx').disabled = !S.snd;
  }
  ['steer', 'trans'].forEach(function (k) {
    q(k).querySelectorAll('[data-v]').forEach(function (b) {
      b.onclick = function () {
        if (k === 'steer' && b.dataset.v === 'tilt' && window.DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
          DeviceOrientationEvent.requestPermission().then(function (r) { if (r === 'granted') { set(k, 'tilt'); render(); } else Y.toast('Egish uchun ruxsat berilmadi'); }).catch(function () { Y.toast('Egish uchun ruxsat berilmadi'); });
          return;
        }
        set(k, b.dataset.v); Y.haptic(); render();
      };
    });
  });
  q('cam').querySelectorAll('[data-v]').forEach(function (b) { b.onclick = function () { window.__ycCam && window.__ycCam(+b.dataset.v); Y.haptic(); render(); }; });
  q('sens').oninput = function () { set('sens', q('sens').value / 100); render(); };
  q('vEng').oninput = function () { set('vEng', q('vEng').value / 100); render(); };
  q('vFx').oninput = function () { set('vFx', q('vFx').value / 100); render(); };
  q('snd').onclick = function () { set('snd', !S.snd); Y.haptic(); render(); };

  var resumeAfter = false;
  function open() {
    resumeAfter = false;
    if (document.body.dataset.phase === 'running') { var p = document.getElementById('pause'); p && p.click(); resumeAfter = true; }
    render(); o.show(true);
  }
  function close() { o.show(false); if (resumeAfter) { var r = document.getElementById('resume'); r && !r.hidden && r.click(); } resumeAfter = false; }
  q('x').onclick = q('ok').onclick = q('dim').onclick = close;

  window.YS = { get: function () { return S; }, set: set, open: open, close: close, on: function (f) { subs.push(f); } };
  // O'yin moduli yuklangach sozlamalarni qo'llash
  var tries = 0, t = setInterval(function () { if (window.__ycSet || ++tries > 120) { clearInterval(t); apply(); } }, 250);
})();

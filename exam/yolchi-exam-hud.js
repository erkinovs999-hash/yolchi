/* Yo'lchi — avtodrom HUD (haydash paytida): chapda spidometr, uzatmalar va 3 pedal, o'ngda rul.
   O'yin mantiqi exam.js'da. Pedallar window.__yDrive to'plamiga yozadi, rul esa window.__yWheel (-1…1) ga. */
(function () {
  var Y = window.Yolchi;
  var $d = function (id) { return document.getElementById(id); };
  document.documentElement.classList.add('y-hud');

  var SVG = function (d, c, s, w) { return '<svg width="' + (s || 18) + '" height="' + (s || 18) + '" viewBox="0 0 24 24" fill="none" stroke="' + (c || '#fff') + '" stroke-width="' + (w || 2.2) + '" stroke-linecap="round" stroke-linejoin="round"><path d="' + d + '"/></svg>'; };
  var IC = {
    menu: 'M4 7h16M4 12h16M4 17h16',
    belt: 'M12 3.5a2 2 0 1 0 .01 0M7.5 21v-5.5L6 11l2.5-3h7l2.5 3-1.5 4.5V21M9 8.5l7.5 9',
    engine: 'M4 10h3l2-3h6v3h3v6h-2l-2 2H8l-2-2H4zM20 11v4',
    tri: 'M15 6l-7 6 7 6z'
  };

  var CSS = [
    /* tepa qator */
    '.top{position:absolute;top:var(--rowY);left:var(--tgL);right:var(--tgR);height:32px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px}',
    '.top .l,.top .r{display:flex;gap:6px;align-items:center}.top .r{justify-content:flex-end}',
    '.stats{height:34px;display:flex;align-items:center;border-radius:999px;padding:0 6px 0 14px;background:rgba(14,26,34,.82);border:1px solid rgba(255,255,255,.12)}',
    '.stats>div{display:flex;flex-direction:column;align-items:center;padding:0 10px;border-left:1px solid rgba(255,255,255,.10)}.stats>div:first-child{border:0;padding-left:0}',
    '.stats b{font-family:Unbounded,sans-serif;font-size:12px;font-weight:800;line-height:1.15}.stats b small{font-size:8px;color:var(--muted)}',
    '.stats span{font-size:7px;font-weight:800;letter-spacing:.12em;color:var(--muted)}',
    '.lim{width:26px;height:26px;border-radius:50%;border:3px solid #e2483b;background:#fff;color:#111;display:flex;align-items:center;justify-content:center;font:800 10px Unbounded,sans-serif;margin-left:4px}',
    '.pillb{height:30px;padding:0 12px;border-radius:999px;background:rgba(14,26,34,.82);border:1px solid rgba(255,255,255,.12);display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:800}',
    /* vazifa */
    '.task{position:absolute;top:var(--T);left:50%;transform:translateX(-50%);max-width:400px;height:28px;padding:0 14px;border-radius:999px;background:rgba(14,26,34,.72);border:1px solid rgba(255,255,255,.10);display:flex;align-items:center;gap:8px;white-space:nowrap;font-size:10.5px;font-weight:700;color:var(--soft)}',
    '.task b{color:#fff;font-weight:800}.task i{font-style:normal;font-weight:800;color:var(--lime);overflow:hidden;text-overflow:ellipsis}',
    '.toast{position:absolute;top:calc(var(--T) + 34px);left:50%;transform:translateX(-50%);max-width:420px;padding:7px 14px;border-radius:999px;background:rgba(255,200,61,.95);color:#1b1203;font-size:11px;font-weight:800;text-align:center;opacity:0;transition:opacity .2s}',
    '.toast.on{opacity:1}',
    /* chap ustun */
    '.gauge{position:absolute;left:var(--L);top:var(--T);width:94px;height:94px}',
    '.gauge .num{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:4px}',
    '.gauge b{font-family:Unbounded,sans-serif;font-size:26px;font-weight:800;line-height:1}.gauge span{font-size:8px;font-weight:800;color:var(--muted);margin-top:2px}',
    '.sw{position:absolute;left:calc(var(--L) + 102px);top:calc(var(--T) + 6px);display:flex;gap:6px}',
    '.sw button{width:44px;height:52px;border-radius:14px;background:rgba(14,26,34,.78);border:1px solid rgba(255,255,255,.12);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;font-size:7px;font-weight:800;letter-spacing:.06em;color:var(--muted)}',
    '.sw button.on{border-color:rgba(198,242,78,.6);color:var(--lime)}.sw #hb.on{border-color:rgba(255,138,61,.7);color:var(--orange)}',
    '.sw .p{width:20px;height:20px;border-radius:50%;border:2px solid currentColor;display:flex;align-items:center;justify-content:center;font:800 10px Unbounded,sans-serif}',
    '.gears{position:absolute;left:var(--L);top:calc(var(--T) + 102px);display:flex;gap:3px;padding:3px;border-radius:14px;background:rgba(14,26,34,.78);border:1px solid rgba(255,255,255,.12)}',
    '.gears button{width:36px;height:36px;border-radius:11px;font:800 15px Unbounded,sans-serif;color:var(--muted)}',
    '.gears button.on{background:var(--lime);color:#0a1218}.gears button.on[data-g="R"]{background:var(--orange)}',
    '.gears button:active{transform:scale(.93)}',
    /* pedallar */
    '.pedals{position:absolute;left:var(--L);bottom:var(--B);display:flex;gap:10px;align-items:flex-end}',
    '.ped{display:flex;flex-direction:column;align-items:center;touch-action:none;transition:transform .06s}',
    '.ped .stem{width:20px;height:14px;border-radius:5px 5px 0 0;background:#55626c}',
    '.ped .pad{border-radius:16px;border:2px solid rgba(0,0,0,.35);box-shadow:0 6px 0 rgba(0,0,0,.35)}',
    '.ped.on{transform:translateY(5px) scale(.96)}.ped.on .pad{box-shadow:0 1px 0 rgba(0,0,0,.35);filter:brightness(1.18)}',
    '#pc .pad{width:60px;height:78px;background:repeating-linear-gradient(180deg,#ffc83d 0 9px,#d9a522 9px 12px);}',
    '#pb .pad{width:76px;height:84px;background:repeating-linear-gradient(180deg,#3b4852 0 10px,#26313a 10px 14px)}',
    '#pg .pad{width:64px;height:110px;background:repeating-linear-gradient(180deg,#e9eef1 0 10px,#b9c4cb 10px 14px)}',
    /* xarita */
    '.map{position:absolute;right:var(--R);top:var(--T);width:104px;height:100px;padding:4px;border-radius:16px;background:rgba(14,26,34,.82);border:1px solid rgba(255,255,255,.14)}',
    '.map canvas{width:100%;height:100%;border-radius:12px;display:block}',
    /* rul va ishoralar */
    '.wheel{position:absolute;right:var(--R);bottom:var(--B);width:170px;height:170px;touch-action:none}',
    '.wheel svg{width:100%;height:100%;filter:drop-shadow(0 8px 14px rgba(0,0,0,.45))}',
    '.sig{position:absolute;right:calc(var(--R) + 33px);bottom:calc(var(--B) + 178px);display:flex;gap:16px}',
    '.sig button{width:44px;height:44px;border-radius:50%;background:rgba(14,26,34,.78);border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center}',
    '.sig button.on{background:rgba(198,242,78,.22);border-color:var(--lime)}',
    '.stb{position:absolute;right:var(--R);bottom:var(--B);display:flex;gap:12px}',
    '.st{width:86px;height:86px;border-radius:50%;background:rgba(14,26,34,.78);border:1px solid rgba(255,255,255,.16);align-items:center;justify-content:center;transition:transform .06s,background .06s}',
    '.st.on{background:rgba(198,242,78,.3);border-color:var(--lime);transform:scale(.95)}',
    '.tilt{position:absolute;right:var(--R);bottom:calc(var(--B) + 20px);width:184px;height:46px;border-radius:999px;background:rgba(14,26,34,.78);border:1px solid rgba(255,255,255,.16);display:flex;align-items:center;justify-content:center}',
    '.tilt span{font-size:9px;font-weight:800;letter-spacing:.14em;color:var(--muted)}',
    '.tilt i{position:absolute;top:8px;left:calc(50% - 14px);width:28px;height:28px;border-radius:50%;background:var(--lime)}',
    '.mode-buttons .wheel,.mode-buttons .tilt,.mode-wheel .stb,.mode-wheel .tilt,.mode-tilt .wheel,.mode-tilt .stb{display:none!important}',
    '.mode-buttons .sig{bottom:calc(var(--B) + 100px);right:calc(var(--R) + 40px)}.mode-tilt .sig{bottom:calc(var(--B) + 80px);right:calc(var(--R) + 45px)}',
    '.auto #pc{display:none}',
    '.task u{text-decoration:none;flex:none;width:18px;height:18px;border-radius:50%;background:var(--blue);color:#06182b;font-weight:800;font-size:11px;display:flex;align-items:center;justify-content:center}',
    '.guide{position:absolute;left:50%;top:calc(var(--T) + 42px);transform:translateX(-50%);width:400px;padding:12px 16px 12px;border-radius:16px;background:rgba(14,26,34,.95);border:1px solid rgba(77,163,255,.5);box-shadow:0 20px 50px rgba(0,0,0,.5);z-index:5}',
    '.guide b{font-family:Unbounded,sans-serif;font-size:13px;font-weight:800;color:var(--blue)}',
    '.guide ol{margin:8px 0 10px;padding-left:20px;display:flex;flex-direction:column;gap:5px;font-size:11.5px;font-weight:600;line-height:1.35;color:var(--soft)}',
    '.guide button{width:100%;height:34px;border-radius:10px;background:var(--blue);color:#06182b;font-weight:800;font-size:12px}',
    '#ui,#ui *{touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}',
    ':host-context(.narrow) .task{max-width:300px}'
  ].join('');

  var o = Y.overlay(CSS, 'yolchi-exam-hud');
  var wheelSvg = '<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="86" fill="none" stroke="#1d272e" stroke-width="22"/>' +
    '<circle cx="100" cy="100" r="86" fill="none" stroke="rgba(255,255,255,.10)" stroke-width="2"/>' +
    '<path d="M100 14a86 86 0 0 1 14 1.2" stroke="#c6f24e" stroke-width="22" fill="none"/>' +
    '<path d="M22 112 Q60 104 76 112 L88 136 M178 112 Q140 104 124 112 L112 136 M100 128 V180" stroke="#1d272e" stroke-width="22" fill="none" stroke-linecap="round"/>' +
    '<circle cx="100" cy="112" r="30" fill="#26323b" stroke="#1d272e" stroke-width="6"/>' +
    '<path d="M91 102l9 12v12M109 102l-9 12" stroke="#c6f24e" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var arc = function (r, a0, a1) { var p = function (a) { var t = (a - 90) * Math.PI / 180; return [47 + r * Math.cos(t), 47 + r * Math.sin(t)]; }; var s = p(a0), e = p(a1); return 'M' + s[0].toFixed(2) + ' ' + s[1].toFixed(2) + 'A' + r + ' ' + r + ' 0 ' + (a1 - a0 > 180 ? 1 : 0) + ' 1 ' + e[0].toFixed(2) + ' ' + e[1].toFixed(2); };
  o.ui.innerHTML =
    '<div class="top"><div class="l"><button class="iconbtn" id="pause" aria-label="Pauza">' + SVG(IC.menu, '#fff', 15) + '</button>' +
    '<button class="pillb" id="reset"><span data-ic="refresh" data-c="#fff" data-s="13"></span>Qaytarish</button></div>' +
    '<div class="stats"><div><b id="pts">0<small>/100</small></b><span>JARIMA</span></div><div><b id="tm">0:00</b><span>VAQT</span></div><div><b id="stg">01<small>/12</small></b><span id="stgL">MASHQ</span></div><div class="lim" id="lim">20</div></div>' +
    '<div class="r"><button class="iconbtn" id="set" aria-label="Sozlamalar"><span data-ic="sliders" data-c="#fff" data-s="15"></span></button><button class="iconbtn" id="snd" aria-label="Ovoz"><span data-ic="sound" data-c="#fff" data-s="15"></span></button><button class="iconbtn" id="cam" aria-label="Kamera"><span data-ic="camera" data-c="#fff" data-s="15"></span></button>' +
    '<button class="iconbtn" id="hlp" aria-label="Qoidalar"><span data-ic="help" data-c="#fff" data-s="15"></span></button></div></div>' +
    '<div class="task pe" id="task"><b id="tt"></b><i id="tc"></i><u id="tq">?</u></div><div class="toast" id="toast"></div>' +
    '<div class="guide pe" id="guide" hidden><b id="gT"></b><ol id="gL"></ol><button id="gOk">TUSHUNARLI</button></div>' +
    '<div class="gauge"><svg width="94" height="94" viewBox="0 0 94 94"><circle cx="47" cy="47" r="45" fill="rgba(14,26,34,.85)" stroke="rgba(255,255,255,.12)"/>' +
    '<path d="' + arc(37, -135, 135) + '" stroke="rgba(255,255,255,.12)" stroke-width="6" fill="none" stroke-linecap="round"/>' +
    '<path id="ga" d="' + arc(37, -135, -134) + '" stroke="#4da3ff" stroke-width="6" fill="none" stroke-linecap="round"/>' +
    '<path id="gl" d="" stroke="#e2483b" stroke-width="8" fill="none"/></svg><div class="num"><b id="spd">0</b><span>km/soat</span></div></div>' +
    '<div class="sw"><button id="belt">' + SVG(IC.belt, 'currentColor', 18) + 'KAMAR</button><button id="eng">' + SVG(IC.engine, 'currentColor', 18) + 'DVIGATEL</button><button id="hb"><span class="p">P</span>QO‘L T.</button></div>' +
    '<div class="gears" id="gears">' + ['R', 'N', '1', '2', '3'].map(function (g) { return '<button data-g="' + g + '">' + g + '</button>'; }).join('') + '</div>' +
    '<div class="pedals"><div class="ped pe" id="pc" data-p="clutch" aria-label="Ilashish"><span class="stem"></span><span class="pad"></span></div>' +
    '<div class="ped pe" id="pb" data-p="brake" aria-label="Tormoz"><span class="stem"></span><span class="pad"></span></div>' +
    '<div class="ped pe" id="pg" data-p="gas" aria-label="Gaz"><span class="stem"></span><span class="pad"></span></div></div>' +
    '<div class="map pe"><canvas id="map" width="208" height="192"></canvas></div>' +
    '<div class="sig"><button id="sl" aria-label="Chap ishora">' + SVG(IC.tri, '#fff', 20, 2) + '</button><button id="sr" aria-label="O‘ng ishora" style="transform:scaleX(-1)">' + SVG(IC.tri, '#fff', 20, 2) + '</button></div>' +
    '<div class="wheel pe" id="wheel" aria-label="Rul">' + wheelSvg + '</div>' +
    '<div class="stb" id="stb"><div class="ped pe st" data-p="left" aria-label="Chapga">' + SVG('M15 5l-8 7 8 7', '#fff', 34, 3) + '</div><div class="ped pe st" data-p="right" aria-label="O‘ngga">' + SVG('M9 5l8 7-8 7', '#fff', 34, 3) + '</div></div>' +
    '<div class="tilt" id="tilt"><span>EGISH</span><i id="tiltI"></i></div>';
  o.icons();
  var q = function (id) { return o.root.getElementById(id); };

  // Tugmalar → asl o'yin tugmalari
  var map = { pause: 'pause', reset: 'reset', cam: 'camera', hlp: 'help', belt: 'belt', eng: 'engine', hb: 'handbrake', sl: 'left-signal', sr: 'right-signal' };
  // Ko'p barmoqli bosishda brauzer "click" bermaydi (masalan, ilashishni ushlab turib uzatma bosilganda),
  // shuning uchun tugmalar barmoq tekkan zahoti (pointerdown) ishlaydi.
  var tapNow = function (el, fn) {
    el.addEventListener('pointerdown', function (e) { e.preventDefault(); e.stopPropagation(); fn(); });
    el.addEventListener('click', function (e) { if (e.detail === 0) fn(); });   // klaviatura (Enter/Space)
  };
  Object.keys(map).forEach(function (k) { tapNow(q(k), function () { Y.press($d(map[k])); Y.haptic(); }); });
  // Mashq ko'rsatmalari: har bir mashq qanday bajarilishi (qadamma-qadam)
  var GUIDE = {
    start: ['Kamarni taqing va dvigatelni yoqing.', 'Chap burilish ishorasini yoqing.', 'Ilashishni bosib 1-uzatmani qo‘shing (avtomatda — D).', 'Qo‘l tormozini tushirib, ilashishni sekin qo‘yib yuboring va START chizig‘idan o‘ting.'],
    pedestrian: ['Zebraga sekin yaqinlashing.', 'Stop-chiziq oldida to‘liq to‘xtang (ilashishni bosishni unutmang).', 'Piyoda yo‘lni to‘liq kesib o‘tishini kuting.', 'So‘ng harakatni davom ettiring.'],
    railway: ['STOP belgisi oldidagi chiziqda to‘liq to‘xtang.', 'Kamida 2 soniya turing — chapga va o‘ngga qarang.', 'Relslar ustida to‘xtamasdan, bir tekis o‘tib keting.', 'Chorrahada chapga — shimolga buriling.'],
    uturn: ['O‘ng ishorani yoqib, tor yo‘lakka kiring.', 'Yo‘lak oxirigacha borib to‘xtang.', 'R ni qo‘shib, yon cho‘ntakka orqa bilan kiring.', '1-uzatmada chiqib, kelgan tomoningizga qayting.'],
    signal: ['Svetoforga sekin yaqinlashing.', 'Qizil yoki sariqda stop-chiziq oldida to‘xtang.', 'Yashil yonganda chorrahadan to‘g‘riga o‘ting.', 'Chiziqni qizilda kesish — 30 jarima balli.'],
    serpentine: ['O‘ng ishorani yoqib, egri yo‘lakka buriling.', '1-uzatmada, past tezlikda yuring.', 'Rulni oldindan, bir tekis burang.', 'Bordyurga tegmasdan yashil nuqtalar bo‘ylab o‘ting.'],
    hill: ['Qiyalikdagi chiziqqa yetib to‘xtang.', 'Qo‘l tormozini torting va 2 soniya kuting.', 'Gaz bering, ilashishni sekin qo‘yib, qo‘l tormozini tushiring.', 'Orqaga 30 sm dan ortiq sirpanmang.'],
    acceleration: ['To‘g‘ri yo‘lda gaz bering.', '10–12 km/soatda 2-uzatmaga o‘ting.', 'Kamida 20 km/soatga yeting, 40 dan oshirmang.', 'Bo‘lak oxirida tezlikni kamaytiring.'],
    garage: ['Ichki yo‘lga burilib, garaj qutisidan biroz o‘tib to‘xtang.', 'R ni qo‘shing va orqaga sekin yuring.', 'Rulni quti tomonga burab, chiziqlar ichiga kiring.', 'Tekislab to‘xtang va qo‘l tormozini torting.'],
    brake: ['Sariq STOP chizig‘iga yaqinlashing.', 'Oldindan tormoz bosa boshlang.', 'Chiziq oldida to‘liq to‘xtang — undan o‘tib ketmang.', '2 soniya turing.'],
    parking: ['Bo‘sh joy yonidan o‘tib, undan biroz oldinda to‘xtang.', 'R ni qo‘shing, rulni joy tomonga burang.', 'Orqa qism kirgach, rulni teskari burab tekislang.', 'Chiziqlar ichida to‘xtab, qo‘l tormozini torting.'],
    finish: ['FINISH maydonchasiga kiring.', 'To‘liq to‘xtang.', 'N ni tanlang.', 'Qo‘l tormozini torting.']
  };
  var gShown = -1;
  function stageNow() { var Yc = window.__yc, P = Yc && Yc.pe && Yc.pe(); if (!P || P.mode === 'free' || P.mode === 'city') return null; var s = Yc.stages[P.stage]; return s ? { i: P.stage, s: s, mode: P.mode } : null; }
  function guide(open) {
    var n = stageNow();
    if (!open || !n || !GUIDE[n.s.id]) { q('guide').hidden = true; return; }
    q('gT').textContent = (n.s.no ? n.s.no + '-mashq · ' : '') + n.s.name;
    q('gL').innerHTML = GUIDE[n.s.id].map(function (x) { return '<li>' + x + '</li>'; }).join('');
    q('guide').hidden = false;
  }
  tapNow(q('gOk'), function () { guide(false); Y.haptic(); });
  tapNow(q('task'), function () { guide(q('guide').hidden); });
  // Ovoz: yoqish / o'chirish (holat saqlanadi)
  var sndSync = function () { var on = window.__ycSound ? window.__ycSound() : true; q('snd').setAttribute('aria-pressed', on ? 'true' : 'false'); q('snd').style.opacity = on ? '1' : '.45'; };
  tapNow(q('snd'), function () { window.__ycSound && window.__ycSound(!window.__ycSound()); Y.haptic(); sndSync(); });
  sndSync();
  tapNow(q('set'), function () { window.YS && window.YS.open(); Y.haptic(); });
  var cfg = function () { return window.YS ? window.YS.get() : { steer: 'wheel', sens: 1, trans: 'manual' }; };
  function applyCfg() {
    var c = cfg();
    q('gears').innerHTML = (c.trans === 'auto' ? ['R', 'N', 'D'] : ['R', 'N', '1', '2', '3']).map(function (g) { return '<button data-g="' + g + '">' + g + '</button>'; }).join('');
    q('gears').querySelectorAll('[data-g]').forEach(function (b) {
      tapNow(b, function () { Y.press(document.querySelector('[data-gear="' + b.dataset.g + '"]')); Y.haptic('medium'); });
    });
    o.ui.classList.toggle('auto', c.trans === 'auto');
    ['wheel', 'buttons', 'tilt'].forEach(function (m) { o.ui.classList.toggle('mode-' + m, c.steer === m); });
  }
  applyCfg(); window.YS && window.YS.on(applyCfg);
  // Telefonni egish (landshaft: beta burchagi rul kabi)
  var tiltV = 0;
  addEventListener('deviceorientation', function (e) {
    if (cfg().steer !== 'tilt' || e.beta == null) return;
    var ang = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
    var v = ang === 90 ? e.beta : ang === -90 || ang === 270 ? -e.beta : e.gamma;
    tiltV = Math.max(-1, Math.min(1, -(v || 0) / 28));
  });

  // Pedallar
  var drive = function () { return window.__yDrive; };
  q('gears').parentNode.querySelectorAll('.ped').forEach(function (el) {
    var name = el.dataset.p;
    var up = function () { var s = drive(); s && s.delete(name); };
    el.addEventListener('pointerdown', function (e) {
      e.preventDefault(); if (document.body.dataset.phase !== 'running') return;
      try { el.setPointerCapture(e.pointerId); } catch (x) {}
      var s = drive(); s && s.add(name); Y.haptic('light');
    });
    ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(function (ev) { el.addEventListener(ev, up); });
    el.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  });

  // Rul: aylantirish burchagi → -1…1, qo'yib yuborilsa markazga qaytadi
  var W = q('wheel'), rot = 0, drag = null, MAX = 150;
  var ang = function (e) { var r = W.getBoundingClientRect(); return Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180 / Math.PI; };
  W.addEventListener('pointerdown', function (e) {
    e.preventDefault(); if (document.body.dataset.phase !== 'running') return;
    try { W.setPointerCapture(e.pointerId); } catch (x) {}
    drag = { id: e.pointerId, last: ang(e) };
  });
  W.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var a = ang(e), d = a - drag.last; if (d > 180) d -= 360; if (d < -180) d += 360;
    drag.last = a; rot = Math.max(-MAX, Math.min(MAX, rot + d));
  });
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(function (ev) { W.addEventListener(ev, function () { drag = null; }); });

  // Har kadrda holatni ko'chirish
  var mm = $d('minimap'), mctx = q('map').getContext('2d'), raf = 0, lastLim = '';
  var txt = function (id) { var e = $d(id); return e ? e.textContent.trim() : ''; };
  var on = function (id) { var e = $d(id); return e && e.getAttribute('aria-pressed') === 'true'; };
  var prev = 0;
  function frame(now) {
    raf = requestAnimationFrame(frame);
    var dt = prev ? Math.min(0.1, (now - prev) / 1000) : 0.016; prev = now;
    if (!drag) rot *= Math.pow(0.78, dt * 60);
    if (Math.abs(rot) < 0.3 && !drag) rot = 0;
    W.style.transform = 'rotate(' + rot.toFixed(1) + 'deg)';
    var c = cfg(), sens = c.sens || 1;
    window.__yWheel = c.steer === 'tilt' ? Math.max(-1, Math.min(1, tiltV * sens)) : c.steer === 'buttons' ? 0 : Math.max(-1, Math.min(1, -rot / MAX * sens));
    if (c.steer === 'tilt') q('tiltI').style.transform = 'translateX(' + (-tiltV * 70).toFixed(1) + 'px)';

    var sp = parseInt(txt('speed'), 10) || 0;
    q('spd').textContent = sp;
    var lim = txt('limit') || '20', a = -135 + 270 * Math.min(sp, 60) / 60;
    q('ga').setAttribute('d', arc(37, -135, Math.max(-134, a)));
    q('ga').setAttribute('stroke', sp > +lim ? '#ff4d5e' : '#4da3ff');
    if (lim !== lastLim) { lastLim = lim; var la = -135 + 270 * (+lim) / 60; q('gl').setAttribute('d', arc(37, la - 2, la + 2)); q('lim').textContent = lim; }

    var pe = $d('points'), pts = pe && pe.firstChild ? pe.firstChild.textContent.trim() : '0';
    q('pts').innerHTML = pts + '<small>/100</small>'; q('pts').style.color = +pts > 0 ? '#ff8a7a' : '#c6f24e';
    q('tm').textContent = txt('time').replace(/^0(\d:)/, '$1');
    var sc = txt('stage-count').split('/'); var ml = txt('mode-label'); q('stgL').textContent = /SHAHAR/.test(ml) ? 'MANZIL' : /ERKIN/.test(ml) ? 'REJIM' : 'MASHQ';
    q('stg').innerHTML = (sc[0] || '').trim() + (sc[1] ? '<small>/' + sc[1].trim() + '</small>' : '');
    q('tt').textContent = txt('task-title'); q('tc').textContent = txt('task-condition');

    var sn = stageNow(); q('tq').style.display = sn ? '' : 'none';
    if (sn && sn.mode === 'practice' && gShown !== sn.i) { gShown = sn.i; guide(true); }   // mashq rejimida ko'rsatma o'zi ochiladi
    if (!sn && !q('guide').hidden) guide(false);
    var t = $d('toast'), show = t && !t.hidden && t.textContent.trim();
    q('toast').classList.toggle('on', !!show); if (show) q('toast').textContent = t.textContent;

    q('belt').classList.toggle('on', on('belt')); q('eng').classList.toggle('on', on('engine')); q('hb').classList.toggle('on', on('handbrake'));
    var blink = Math.floor(now / 400) % 2 === 0;
    q('sl').classList.toggle('on', on('left-signal') && blink); q('sr').classList.toggle('on', on('right-signal') && blink);
    var g = document.querySelector('[data-gear][aria-pressed="true"]'); g = g ? g.dataset.gear : '';
    q('gears').querySelectorAll('[data-g]').forEach(function (b) { b.classList.toggle('on', b.dataset.g === g); });
    var s = drive();
    o.root.querySelectorAll('.ped').forEach(function (el) { el.classList.toggle('on', !!(s && s.has(el.dataset.p))); });

    if (mm && mm.width && !mm.hidden) { try { mctx.clearRect(0, 0, 208, 192); mctx.drawImage(mm, 0, 0, 208, 192); } catch (x) {} }
  }
  function sync() {
    var run = document.body.dataset.phase === 'running';
    o.show(run); if (run) sndSync(); else if (document.body.dataset.phase === 'menu') { gShown = -1; q('guide').hidden = true; }
    if (run && !raf) raf = requestAnimationFrame(frame);
    if (!run && raf) { cancelAnimationFrame(raf); raf = 0; rot = 0; drag = null; window.__yWheel = 0; }
  }
  new MutationObserver(sync).observe(document.body, { attributes: true, attributeFilter: ['data-phase'] });
  sync();
})();

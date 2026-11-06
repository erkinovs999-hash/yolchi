/* Yo'lchi — yuk mashinasi missiyalari ekrani (Figma 04). O'yin mantiqi game.js'da; bu fayl faqat menyuni chizadi
   va asl tugmalarni (missiya, #play, #sound, #help) bosadi. */
(function () {
  var Y = window.Yolchi;
  var $d = function (id) { return document.getElementById(id); };

  var MISSIONS = [
    { id: 'reverse', n: '01', title: 'Birinchi parkovka', bay: 'DOK 04', text: 'Tirkamani 04-dokka to‘g‘ri orqaga yurib joylashtiring. Konuslarga tegmang.' },
    { id: 'maneuver', n: '02', title: 'Aniq manevr', bay: 'DOK 02', text: 'Maydonchada burilib, tirkamani dokka aniq burchak bilan kiriting.' },
    { id: 'free', n: '03', title: 'Erkin haydash', bay: 'MAYDONCHA', text: 'Maydonchani erkin o‘rganing: rul, tirkama burchagi va orqaga yurishni mashq qiling.' },
    { id: 'night', n: '04', title: 'Tungi yetkazish', locked: true },
    { id: 'street', n: '05', title: 'Tor ko‘cha', locked: true }
  ];
  var GOALS = ['To‘qnashuvsiz', '90 soniyadan tez', '90+ ball'];

  var CSS = [
    '.glow{left:calc(var(--L) + 10px);top:262px;width:330px;height:46px;border-radius:50%;background:radial-gradient(closest-side,rgba(255,138,61,.30),rgba(255,138,61,0))}',
    '.bg{position:absolute;inset:0;background:radial-gradient(520px 280px at 26% 62%,#33261c 0%,#1a1612 50%,#0d0f11 100%);pointer-events:none}',
    '.truck{left:var(--L);top:92px;width:326px}',
    '.list{left:calc(var(--L) + 338px);top:var(--T);width:150px;display:flex;flex-direction:column;gap:6px}',
    '.m{height:46px;padding:0 10px;border-radius:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;gap:8px;text-align:left;transition:transform .1s}',
    '.m:active{transform:scale(.97)}',
    '.m .n{font-family:Unbounded,sans-serif;font-weight:700;font-size:11px;color:var(--muted)}',
    '.m b{display:block;font-size:11px;font-weight:800}',
    '.m .st{display:flex;gap:1px;margin-top:2px}',
    '.m.on{background:rgba(255,138,61,.14);border:1.5px solid var(--orange)}',
    '.m.on .n{color:var(--orange)}',
    '.m.locked{opacity:.55}',
    '.m.locked small{display:inline-flex;align-items:center;gap:4px;font-size:9px;font-weight:700;color:var(--muted);margin-top:2px}',
    '.card{right:var(--R);top:var(--T);bottom:calc(var(--B) + 74px);width:250px;padding:12px 14px;display:flex;flex-direction:column;gap:8px;overflow:hidden}',
    '.card .hd{display:flex;justify-content:space-between;align-items:center}',
    '.card .bay{font-size:10px;font-weight:800;padding:3px 8px;border-radius:999px;background:rgba(255,138,61,.16);color:#ffb37f}',
    '.card h2{margin:0;font-family:Unbounded,sans-serif;font-size:18px;font-weight:800;line-height:1.15}',
    '.card p{margin:0;font-size:11px;font-weight:600;line-height:1.45;color:var(--soft)}',
    '.goals{display:flex;flex-direction:column;gap:6px;margin-top:2px}',
    '.goals div{display:flex;align-items:center;gap:8px;font-size:11px;font-weight:700}',
    '.goals .off{color:var(--muted)}',
    '.foot{margin-top:auto;display:flex;justify-content:space-between;align-items:center;padding-top:9px;border-top:1px solid rgba(255,255,255,.08)}',
    '.rw{display:inline-flex;align-items:center;gap:5px;font-size:13px;font-weight:800;color:var(--coin)}',
    '.go{right:var(--R);bottom:calc(var(--B) + 6px);width:250px;height:56px;font-size:15px}',
    '.load{left:calc(var(--L) + 4px);bottom:calc(var(--B) + 8px);width:300px;display:flex;flex-direction:column;gap:6px}',
    '.load .bar>i{background:var(--orange)}',
    '.best{left:calc(var(--L) + 4px);bottom:calc(var(--B) + 8px);display:flex;gap:6px}',
    ':host-context(.narrow) .truck{width:300px;top:110px}'
  ].join('');

  var o = Y.overlay(CSS, 'yolchi-truck');
  var st = Y.state(); st.truck = st.truck || {};
  o.ui.innerHTML =
    '<div class="bg"></div><div class="abs glow"></div><img class="abs truck" src="/ui/truck.webp" alt="">' +
    '<div class="topbar"><span class="title">YUK MASHINASI</span><span class="muted" style="font-size:11px;font-weight:700">MAN TGX · 4×2</span>' +
    '<span class="grow"></span><span class="pill" style="color:var(--coin)"><span data-ic="star" data-c="#ffc83d" data-s="14"></span><b id="starsTotal" style="color:#fff">0 / 9</b></span>' +
    '<span class="pill"><span data-ic="coin" data-s="16"></span><b id="coins">0</b></span>' +
    '<button class="iconbtn" id="snd" aria-label="Ovoz"><span data-ic="sound" data-c="#fff" data-s="15"></span></button>' +
    '<button class="iconbtn" id="hlp" aria-label="Yordam"><span data-ic="help" data-c="#fff" data-s="15"></span></button></div>' +
    '<div class="abs list" id="list"></div>' +
    '<div class="abs glass card"><div class="hd"><span class="lbl" style="color:var(--orange)" id="mNo"></span><span class="bay" id="mBay"></span></div>' +
    '<h2 id="mTitle"></h2><p id="mText"></p><div class="goals" id="goals"></div>' +
    '<div class="foot"><span class="lbl" style="font-size:8px" id="bestLbl">Mukofot</span><span class="rw" id="rw"><span data-ic="coin" data-s="16"></span><span id="rwN">+60</span></span></div></div>' +
    '<div class="abs load" id="load"><span class="lbl" id="loadTxt">Yuk mashinasi yuklanmoqda</span><span class="bar"><i id="loadBar" style="width:0%"></i></span></div>' +
    '<button class="abs btn orange go" id="go" disabled><span data-ic="play" data-c="#1b0d03" data-s="14"></span><span id="goTxt">YUKLANMOQDA…</span></button>';
  o.icons();
  var q = function (id) { return o.root.getElementById(id); };

  function stars(id) { return (st.truck[id] && st.truck[id].stars) || 0; }
  function starRow(n, size) { var h = ''; for (var i = 0; i < 3; i++) h += Y.icon('star', i < n ? '#ffc83d' : '#4a5560', size || 10); return h; }
  function current() { var b = document.querySelector('#mission-options .selected'); return b ? b.dataset.mission : 'reverse'; }

  function render() {
    var cur = current(), total = 0;
    q('list').innerHTML = MISSIONS.map(function (m) {
      if (m.locked) return '<div class="m locked"><span class="n">' + m.n + '</span><div><b>' + m.title + '</b><small>' + Y.icon('lock', '#8fa3b1', 10) + ' tez kunda</small></div></div>';
      total += stars(m.id);
      return '<button class="m' + (m.id === cur ? ' on' : '') + '" data-id="' + m.id + '"><span class="n">' + m.n + '</span><div><b>' + m.title + '</b><span class="st">' + starRow(stars(m.id)) + '</span></div></button>';
    }).join('');
    q('starsTotal').textContent = total + ' / 9';
    q('coins').textContent = (st.coins || 0).toLocaleString('ru-RU');
    var m = MISSIONS.filter(function (x) { return x.id === cur; })[0] || MISSIONS[0], s = stars(m.id), best = st.truck[m.id] && st.truck[m.id].best;
    q('mNo').textContent = m.n + '-missiya'; q('mBay').textContent = m.bay; q('mTitle').textContent = m.title; q('mText').textContent = m.text;
    q('goals').innerHTML = GOALS.map(function (g, i) { return '<div class="' + (i < s ? '' : 'off') + '">' + Y.icon('star', i < s ? '#ffc83d' : '#4a5560', 12) + '<span>' + g + '</span></div>'; }).join('');
    q('bestLbl').textContent = best ? 'Eng yaxshi: ' + best + ' ball' : 'Mukofot';
    q('rwN').textContent = m.id === 'free' ? '+20' : '+60';
    q('list').querySelectorAll('[data-id]').forEach(function (b) {
      b.onclick = function () { Y.press(document.querySelector('#mission-options [data-mission="' + b.dataset.id + '"]')); Y.haptic(); setTimeout(render, 0); };
    });
  }

  // #play holatini ko'chirish (yuklanmoqda / tayyor / pauza)
  function syncPlay() {
    var p = $d('play'); if (!p) return;
    q('go').disabled = p.disabled;
    var t = (p.textContent || '').trim();
    q('goTxt').textContent = p.disabled ? 'YUKLANMOQDA…' : /Davom/.test(t) ? 'DAVOM ETISH' : 'RULGA O‘TIRISH';
    var lp = $d('load-progress'); q('loadBar').style.width = lp ? lp.style.width || '0%' : '0%';
    q('load').hidden = !p.disabled;
    var paused = /Davom/.test(t);
    q('loadTxt').textContent = 'Yuk mashinasi yuklanmoqda';
    o.host.classList.toggle('paused', paused);
  }
  q('go').onclick = function () { Y.haptic('medium'); Y.press($d('play')); };
  q('snd').onclick = function () { Y.press($d('sound')); setTimeout(function () { q('snd').setAttribute('aria-pressed', $d('sound').classList.contains('active') || $d('sound').getAttribute('aria-pressed') === 'true'); }, 30); };
  q('hlp').onclick = function () { Y.press($d('help')); };

  // Menyu ko'rinsa — qatlam ham ko'rinadi
  var menu = $d('menu');
  function syncMenu() { var on = !menu.hidden; o.show(on); document.documentElement.classList.toggle('y-menu', on); if (on) { st = Y.state(); st.truck = st.truck || {}; render(); syncPlay(); } }
  new MutationObserver(syncMenu).observe(menu, { attributes: true, attributeFilter: ['hidden'] });
  new MutationObserver(syncPlay).observe($d('play'), { attributes: true, childList: true, characterData: true, subtree: true });
  var lp = $d('load-progress'); if (lp) new MutationObserver(syncPlay).observe(lp, { attributes: true, attributeFilter: ['style'] });
  document.querySelectorAll('#mission-options [data-mission]').forEach(function (b) { new MutationObserver(function () { if (!menu.hidden) render(); }).observe(b, { attributes: true, attributeFilter: ['class'] }); });

  // Missiya yakuni: yulduz va tanga
  var fin = $d('finish');
  new MutationObserver(function () {
    if (fin.hidden) return;
    var score = parseInt($d('finish-score').textContent, 10) || 0, hits = parseInt($d('finish-hits').textContent, 10) || 0;
    var tm = ($d('finish-time').textContent || '0:0').split(':'), secs = (+tm[0]) * 60 + (+tm[1] || 0);
    var id = current(), s = 1 + (hits === 0 ? 1 : 0) + (secs <= 90 ? 1 : 0);
    if (score >= 90 && s < 3) s = Math.max(s, 2);
    st = Y.state(); st.truck = st.truck || {};
    var prev = st.truck[id] || { stars: 0, best: 0 };
    var coins = id === 'free' ? 20 : 20 * s;
    st.truck[id] = { stars: Math.max(prev.stars, s), best: Math.max(prev.best || 0, score) };
    st.coins = (st.coins || 0) + coins; st.xp = (st.xp || 0) + 30;
    Y.save(st);
    Y.toast('+' + coins + ' tanga · ' + s + ' ★');
    Y.haptic('heavy');
  }).observe(fin, { attributes: true, attributeFilter: ['hidden'] });

  syncMenu(); render(); syncPlay();
})();

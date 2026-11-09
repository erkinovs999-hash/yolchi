/* Yo'lchi — poyga sahifasi uchun UI mantiqi (o'yin mantiqi race.js'da, unga tegilmaydi). */
(function () {
  var Y = window.Yolchi, body = document.body;
  var $ = function (id) { return document.getElementById(id); };
  var st = Y.state();
  var MAX = { speed: 240, acc: 8, brake: 15, steer: 0.6 };

  function racer() { var r; try { r = JSON.parse(localStorage.getItem('bts-racer') || 'null'); } catch (e) {} r = r || {}; return { car: r.car || 'gentra', color: r.color || '#e5e7eb' }; }
  var cur = racer();

  /* ---------- Bosqichlar ---------- */
  function step(s) { body.dataset.step = s; Y.haptic(); }
  var want = null; try { want = sessionStorage.getItem('yolchi-step'); sessionStorage.removeItem('yolchi-step'); } catch (e) {}
  body.dataset.step = want === 'mode' ? 'mode' : 'garage';
  body.dataset.tab = 'friends';
  $('choose').onclick = function () { step('mode'); };
  $('toGarage').onclick = $('changeCar').onclick = function () { step('garage'); };
  document.querySelectorAll('.seg [data-tab]').forEach(function (b) {
    b.onclick = function () {
      if (b.dataset.tab === 'quick') { Y.toast('Tezkor o‘yin — tez kunda'); return; }
      document.querySelectorAll('.seg [data-tab]').forEach(function (x) { x.classList.toggle('on', x === b); });
      body.dataset.tab = b.dataset.tab; Y.haptic();
    };
  });
  // Maxsus bo'yoqlar: do'konda olinganlari ochiladi (race.js [data-color] tugmalarini keyin ulaydi)
  var PAINTS = [['sun', 'Quyosh', '#ff7a3c'], ['ice', 'Muz', '#7f9cff'], ['emerald', 'Zumrad', '#12a37f']];
  var ownsPaint = function (id) { return !!st.vip || (st.paints || []).indexOf(id) >= 0; };
  document.querySelectorAll('.swatch.locked').forEach(function (b, i) {
    var p = PAINTS[i]; if (!p) return;
    b.removeAttribute('data-soon');
    if (ownsPaint(p[0])) {
      b.classList.remove('locked'); b.innerHTML = ''; b.dataset.color = p[2]; b.style.setProperty('--sw', p[2]); b.setAttribute('aria-label', p[1]);
    } else {
      b.setAttribute('aria-label', p[1] + ' — do‘konda'); b.addEventListener('click', function () { Y.toast(p[1] + ' bo‘yog‘i — do‘konda'); setTimeout(function () { location.href = '/#shop'; }, 500); });
    }
  });
  document.querySelectorAll('[data-soon]').forEach(function (b) { b.addEventListener('click', function () { Y.toast('Tez kunda — do‘konda ochiladi'); }); });

  /* ---------- Mashina ma'lumotlari va rasmlar ---------- */
  function paintCar() {
    var c = Y.cars[cur.car] || Y.cars.gentra;
    $('carName').textContent = c.name; $('carSub').textContent = c.sub; $('carClass').textContent = c.cls;
    $('stSpeed').textContent = c.speed + ' km/s'; $('brSpeed').style.width = (c.speed / MAX.speed * 100) + '%';
    $('stAcc').textContent = c.acc; $('brAcc').style.width = (c.acc / MAX.acc * 100) + '%';
    $('stBrake').textContent = c.brake; $('brBrake').style.width = (c.brake / MAX.brake * 100) + '%';
    $('stSteer').textContent = c.steer; $('brSteer').style.width = (c.steer / MAX.steer * 100) + '%';
    document.querySelectorAll('[data-thumb]').forEach(function (img) { img.src = Y.carImage(img.dataset.thumb, cur.color); });
    ['', '2'].forEach(function (k) {
      $('mySelImg' + k).src = Y.carImage(cur.car, cur.color); $('mySelName' + k).textContent = c.name; $('mySelSub' + k).textContent = c.sub;
    });
  }
  // race.js tanlangan mashina/rangni .selected klassi bilan belgilaydi — shundan o'qiymiz.
  function sync() {
    var c = document.querySelector('.car-choice.selected'), k = document.querySelector('.swatch.selected');
    var nc = c ? c.dataset.car : cur.car, nk = k ? k.dataset.color : cur.color;
    if (nc !== cur.car || nk !== cur.color || !sync.done) { cur.car = nc; cur.color = nk; sync.done = true; paintCar(); }
  }
  var mo = new MutationObserver(sync);
  document.querySelectorAll('[data-car],[data-color]').forEach(function (b) { mo.observe(b, { attributes: true, attributeFilter: ['class'] }); });
  document.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('[data-car],[data-color]')) Y.haptic(); });
  paintCar(); setTimeout(sync, 0);

  /* ---------- Trassa soyasi, tanga, rekord ---------- */
  var tp = $('track-path');
  new MutationObserver(function () { $('track-shadow').setAttribute('d', tp.getAttribute('d') || ''); }).observe(tp, { attributes: true, attributeFilter: ['d'] });
  function coins() { document.querySelectorAll('.coins').forEach(function (el) { el.textContent = st.coins.toLocaleString('ru-RU'); }); }
  coins();
  $('best').textContent = st.bestRace || '—';

  /* ---------- HUD: o'rin ---------- */
  var lb = $('leaderboard');
  new MutationObserver(function () {
    var items = lb.children, me = 0;
    for (var i = 0; i < items.length; i++) if (items[i].classList.contains('self')) me = i + 1;
    $('pos').textContent = me || 1; $('posOf').textContent = '/' + Math.max(items.length, 1);
  }).observe(lb, { childList: true });

  /* ---------- 06 · Natija va mukofot ---------- */
  var lastPhase = body.dataset.phase, awarded = false, resultText = '';
  function award() {
    var list = $('result-list').children, place = 0, finished = false, time = '';
    for (var i = 0; i < list.length; i++) {
      var b = list[i].querySelector('.player-info b');
      if (b && /· Siz$/.test(b.textContent)) {
        place = i + 1; list[i].classList.add('me');
        var t = list[i].querySelector('.result-time');
        time = t ? t.firstChild && t.firstChild.textContent : '';
        finished = !!(t && /FINISH|jarima/.test(t.textContent));
      }
    }
    if (!place && list.length === 1) { place = 1; var t1 = list[0].querySelector('.result-time'); time = t1 && t1.firstChild ? t1.firstChild.textContent : ''; finished = !!(t1 && /FINISH|jarima/.test(t1.textContent)); }
    var n = list.length;
    var coinsWon = !finished ? 10 : n > 1 ? [80, 50, 40, 30][place - 1] || 30 : 30;
    var xp = finished ? (n > 1 ? 60 - (place - 1) * 10 : 40) : 10;
    st = Y.state();
    if (st.vip) coinsWon *= 2;
    st.coins += coinsWon; st.xp += xp; if (finished) st.racesToday = (st.racesToday || 0) + 1;
    if (finished && n === 1 && time && (!st.bestRace || time < st.bestRace)) st.bestRace = time;
    Y.save(st); coins();
    $('rwCoins').textContent = '+' + coinsWon;
    $('rwXp').lastChild.textContent = '+' + xp + ' tajriba';
    var lv = Y.level(st.xp);
    $('rwLv').textContent = lv.lv + '-daraja'; $('rwLvNum').textContent = lv.cur + ' / ' + lv.need; $('rwLvBar').style.width = Math.round(lv.cur / lv.need * 100) + '%';
    $('placeLine').textContent = n > 1 ? (place + '-o‘rin · ' + n + ' o‘yinchi' + (time ? ' · ' + time : '')) : (finished ? 'Vaqtingiz: ' + time + (st.bestRace === time ? ' · yangi rekord!' : '') : 'Poyga yakunlanmadi');
    resultText = n > 1 ? 'Yo‘lchi’da Toshkent Ring poygasida ' + place + '-o‘rinni oldim! 🏁' : 'Yo‘lchi’da Toshkent Ring: ' + (time || '3 aylana') + ' ⏱ Meni yengib ko‘r!';
    Y.haptic('heavy');
  }
  new MutationObserver(function () {
    var p = body.dataset.phase;
    if (p === 'finished' && lastPhase !== 'finished' && !awarded) { awarded = true; setTimeout(award, 60); }
    if (p !== 'finished') awarded = false;
    if (p === 'menu' && lastPhase !== 'menu') coins();
    lastPhase = p;
  }).observe(body, { attributes: true, attributeFilter: ['data-phase'] });
  $('shareRes').onclick = function () { Y.share(resultText || 'Yo‘lchi’da poygaga chiq! 🏁', ''); };
})();

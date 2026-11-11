/* Yo'lchi PDD — rasmli savollar: chorraha sxemalari (SVG, kod bilan chiziladi) va ularning savollari.
   Sxemalar va savollar original, Yo'l harakati qoidalarining ustuvorlik bo'limi asosida tuzilgan. */
(function () {
  var C = 150, HW = 34, LN = 17;
  var D = { N: [0, -1], E: [1, 0], S: [0, 1], W: [-1, 0] };
  var COL = { red: '#e5484d', blue: '#3b82f6', green: '#22b573', white: '#f4f6f8', tram: '#f2c230' };
  var r1 = function (n) { return Math.round(n * 10) / 10; };
  function inPos(a, dist, side) { var d = D[a], t = [-d[0], -d[1]], r = [-t[1], t[0]]; return [C + d[0] * (HW + dist) + r[0] * side, C + d[1] * (HW + dist) + r[1] * side]; }
  function outPos(b, dist) { var d = D[b], r = [-d[1], d[0]]; return [C + d[0] * (HW + dist) + r[0] * LN, C + d[1] * (HW + dist) + r[1] * LN]; }
  function ang(a) { return { N: 180, E: 270, S: 0, W: 90 }[a]; }   // mashina tumshug'i chorrahaga qaraydi

  function road(arms, o) {
    var s = '<rect width="300" height="300" rx="18" fill="#2f6a47"/>';
    arms.split('').forEach(function (a) { var d = D[a]; s += d[0] ? '<rect x="' + (d[0] > 0 ? C : 0) + '" y="' + (C - HW) + '" width="150" height="' + HW * 2 + '" fill="#4b535c"/>' : '<rect x="' + (C - HW) + '" y="' + (d[1] > 0 ? C : 0) + '" width="' + HW * 2 + '" height="150" fill="#4b535c"/>'; });
    s += '<rect x="' + (C - HW) + '" y="' + (C - HW) + '" width="' + HW * 2 + '" height="' + HW * 2 + '" fill="#4b535c"/>';
    if (o.mainPath) { var p = o.mainPath, a = D[p[0]], b = D[p[1]]; s += '<path d="M' + (C + a[0] * 150) + ',' + (C + a[1] * 150) + ' L' + C + ',' + C + ' L' + (C + b[0] * 150) + ',' + (C + b[1] * 150) + '" fill="none" stroke="#ffd43b" stroke-opacity=".28" stroke-width="' + HW * 2 + '" stroke-linejoin="round"/>'; }
    arms.split('').forEach(function (a) {
      var d = D[a], x1 = C + d[0] * (HW + 4), y1 = C + d[1] * (HW + 4), x2 = C + d[0] * 150, y2 = C + d[1] * 150;
      s += '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="#fff" stroke-opacity=".8" stroke-width="1.6" stroke-dasharray="9 8"/>';
      if (o.rails && o.rails.indexOf(a) >= 0) [-4, 4].forEach(function (k) { s += '<line x1="' + (C + d[1] * k) + '" y1="' + (C + d[0] * k) + '" x2="' + (x2 + d[1] * k) + '" y2="' + (y2 + d[0] * k) + '" stroke="#1d2227" stroke-width="1.6"/>'; });
      if (o.zebra === a) for (var k = -HW + 4; k < HW; k += 9) { var q = [C + d[0] * (HW + 6) + d[1] * k, C + d[1] * (HW + 6) + d[0] * k]; s += '<rect x="' + r1(q[0] - (d[0] ? 6 : 2.5)) + '" y="' + r1(q[1] - (d[1] ? 6 : 2.5)) + '" width="' + (d[0] ? 12 : 5) + '" height="' + (d[1] ? 12 : 5) + '" fill="#fff"/>'; }
    });
    return s;
  }
  function sign(kind, a, far) {
    var p = inPos(a, far ? 40 : 16, HW + 16), x = r1(p[0]), y = r1(p[1]), g = '<g transform="translate(' + x + ',' + y + ')">';
    if (kind === 'main') g += '<rect x="-8" y="-8" width="16" height="16" transform="rotate(45)" fill="#fff"/><rect x="-5.2" y="-5.2" width="10.4" height="10.4" transform="rotate(45)" fill="#ffc21a"/>';
    if (kind === 'yield') g += '<path d="M-11,-9 L11,-9 L0,10 Z" fill="#fff" stroke="#e02d3c" stroke-width="3.2" stroke-linejoin="round"/>';
    if (kind === 'stop') g += '<path d="M-4.6,-11 L4.6,-11 L11,-4.6 L11,4.6 L4.6,11 L-4.6,11 L-11,4.6 L-11,-4.6 Z" fill="#e02d3c" stroke="#fff" stroke-width="1.4"/><text y="2.6" font-family="Arial" font-size="6.2" font-weight="700" fill="#fff" text-anchor="middle">STOP</text>';
    return g + '</g>';
  }
  function light(a, st) {
    var p = inPos(a, 12, HW + 14), on = function (c, k) { return st === k || (k === 'yellow' && st === 'flash') ? c : '#2b3036'; };
    return '<g transform="translate(' + r1(p[0]) + ',' + r1(p[1]) + ')"><rect x="-6" y="-14" width="12" height="28" rx="3.5" fill="#12161a" stroke="#fff" stroke-opacity=".5" stroke-width=".8"/><circle cy="-8.5" r="3.4" fill="' + on('#ff3b47', 'red') + '"/><circle r="3.4" fill="' + on('#ffcf33', 'yellow') + '"/><circle cy="8.5" r="3.4" fill="' + on('#3be07a', 'green') + '"/></g>';
  }
  function vehicle(v) {
    var tram = v.kind === 'tram', side = tram ? 0 : LN, len = tram ? 58 : 34, w = tram ? 19 : 19, p = inPos(v.from, 14 + len / 2, side), col = COL[tram ? 'tram' : v.c];
    var g = '<g transform="translate(' + r1(p[0]) + ',' + r1(p[1]) + ') rotate(' + ang(v.from) + ')">';
    g += '<rect x="' + (-w / 2) + '" y="' + (-len / 2) + '" width="' + w + '" height="' + len + '" rx="' + (tram ? 4 : 5.5) + '" fill="' + col + '" stroke="#0d1317" stroke-width="1.4"/>';
    if (tram) g += '<rect x="-7" y="' + (-len / 2 + 3) + '" width="14" height="6" rx="1.5" fill="#1d2a33"/><rect x="-9.5" y="-6" width="19" height="5" fill="#e02d3c"/><line y1="-2" y2="14" stroke="#1d2a33" stroke-width="1.4"/><text y="24" font-family="Arial" font-size="7" font-weight="700" fill="#1d2a33" text-anchor="middle">T</text>';
    else {
      g += '<rect x="-7" y="-9.5" width="14" height="6.5" rx="2" fill="#12202b" fill-opacity=".8"/><rect x="-7" y="6" width="14" height="5" rx="2" fill="#12202b" fill-opacity=".6"/>';
      if (v.kind === 'amb') g += '<path d="M-1.6,-2.5h3.2v2.4h2.4v3.2h-2.4v2.4h-3.2v-2.4h-2.4v-3.2h2.4z" fill="#e02d3c" transform="translate(0,1.5) scale(.9)"/><circle cx="-4" cy="-12.5" r="2.6" fill="#3b9bff"/><circle cx="4" cy="-12.5" r="2.6" fill="#3b9bff"/><path d="M-10,-17 l-4,-4 M10,-17 l4,-4 M0,-19 v-5" stroke="#8cc8ff" stroke-width="1.6" stroke-linecap="round"/>';
    }
    return g + '</g>';
  }
  function arrow(v) {
    var tram = v.kind === 'tram', side = tram ? 0 : LN, col = COL[tram ? 'tram' : v.c], vert = D[v.from][0] === 0;
    var s = inPos(v.from, 10, side), e1 = inPos(v.from, 0, side), d = D[v.to], rr = [-d[1], d[0]], k = tram ? 0 : LN;
    var e2 = [C + d[0] * HW + rr[0] * k, C + d[1] * HW + rr[1] * k], end = [C + d[0] * (HW + 34) + rr[0] * k, C + d[1] * (HW + 34) + rr[1] * k];
    var straight = D[v.from][0] === -d[0] && D[v.from][1] === -d[1];
    var path = 'M' + r1(s[0]) + ',' + r1(s[1]) + ' L' + r1(e1[0]) + ',' + r1(e1[1]) + (straight ? '' : ' Q' + r1(vert ? e1[0] : e2[0]) + ',' + r1(vert ? e2[1] : e1[1]) + ' ' + r1(e2[0]) + ',' + r1(e2[1])) + ' L' + r1(end[0]) + ',' + r1(end[1]);
    var tip = [end[0] + d[0] * 9, end[1] + d[1] * 9], l = [end[0] + rr[0] * 6, end[1] + rr[1] * 6], r = [end[0] - rr[0] * 6, end[1] - rr[1] * 6];
    return '<path d="' + path + '" fill="none" stroke="#0d1317" stroke-width="5.5" stroke-linecap="round" stroke-opacity=".55"/><path d="' + path + '" fill="none" stroke="' + col + '" stroke-width="3.2" stroke-linecap="round"/>' +
      '<path d="M' + r1(tip[0]) + ',' + r1(tip[1]) + ' L' + r1(l[0]) + ',' + r1(l[1]) + ' L' + r1(r[0]) + ',' + r1(r[1]) + ' Z" fill="' + col + '" stroke="#0d1317" stroke-width="1.2" stroke-linejoin="round"/>';
  }
  function draw(o) {
    var s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" class="scene">' + road(o.arms || 'NESW', o);
    o.v.forEach(function (v) { s += arrow(v); });
    o.v.forEach(function (v) { s += vehicle(v); });
    if (o.light) (o.arms || 'NESW').split('').forEach(function (a) { s += light(a, o.light === 'flash' ? 'flash' : (a === 'N' || a === 'S') ? o.light.NS : o.light.EW); });
    if (o.signs) Object.keys(o.signs).forEach(function (a) { s += sign(o.signs[a], a, !!o.light); });
    if (o.ped) { var p = inPos(o.ped, 6, HW - 6); s += '<circle cx="' + r1(p[0]) + '" cy="' + r1(p[1]) + '" r="6.5" fill="#ffd9b0" stroke="#0d1317" stroke-width="1.4"/><circle cx="' + r1(p[0]) + '" cy="' + r1(p[1]) + '" r="2.6" fill="#3a2a1e"/>'; }
    return s + '</svg>';
  }

  var FIRST = 'Qaysi transport vositasi chorrahadan birinchi o‘tadi?';
  var R = 'Qizil avtomobil', B = 'Ko‘k avtomobil', G = 'Yashil avtomobil', T = 'Tramvay', A = 'Tez yordam avtomobili';
  var SAME = 'Ikkalasi bir vaqtda o‘tadi', ANY = 'Chorrahaga birinchi yetib kelgani';
  var MAIN_NS = { N: 'main', S: 'main', E: 'yield', W: 'yield' };
  var Q = [
    { id: 'eq-right', o: { v: [{ from: 'S', to: 'N', c: 'red' }, { from: 'E', to: 'W', c: 'blue' }] }, q: 'Teng ahamiyatli yo‘llar chorrahasi. ' + FIRST, ok: B, wrong: [R, SAME, ANY],
      ex: 'Belgi va svetofor yo‘q — chorraha teng ahamiyatli. Ko‘k avtomobil qizilning <b>o‘ng tomonida</b>, shuning uchun qizil unga yo‘l beradi.' },
    { id: 'eq-left', o: { v: [{ from: 'S', to: 'W', c: 'red' }, { from: 'N', to: 'S', c: 'blue' }] }, q: 'Qizil avtomobil chapga burilmoqda, ko‘k to‘g‘riga ketmoqda. ' + FIRST, ok: B, wrong: [R, SAME, ANY],
      ex: 'Chapga burilayotgan haydovchi qarshidan <b>to‘g‘riga yoki o‘ngga</b> kelayotgan transportga yo‘l beradi.' },
    { id: 'eq-three', o: { v: [{ from: 'S', to: 'N', c: 'red' }, { from: 'E', to: 'W', c: 'blue' }, { from: 'N', to: 'W', c: 'green' }] }, q: 'Teng ahamiyatli yo‘llar chorrahasi, uchta avtomobil. ' + FIRST, ok: G, wrong: [R, B, 'Uchalasi bir vaqtda o‘tadi'],
      ex: 'Yashilning o‘ng tomonida hech kim yo‘q — u birinchi. Ko‘k yashilga (o‘ngida), qizil esa ko‘kka (o‘ngida) yo‘l beradi. Tartib: yashil → ko‘k → qizil.' },
    { id: 'eq-three-last', o: { v: [{ from: 'W', to: 'E', c: 'red' }, { from: 'S', to: 'N', c: 'blue' }, { from: 'E', to: 'N', c: 'green' }] }, q: 'Teng ahamiyatli yo‘llar chorrahasi. Qaysi avtomobil chorrahadan oxirgi bo‘lib o‘tadi?', ok: R, wrong: [B, G, 'Tartibning ahamiyati yo‘q'],
      ex: 'Yashilning o‘ngida hech kim yo‘q — birinchi o‘tadi. Ko‘k yashilga, qizil esa o‘ngidagi ko‘kka yo‘l beradi. Qizil oxirgi bo‘lib o‘tadi.' },
    { id: 'main-three', o: { signs: MAIN_NS, v: [{ from: 'E', to: 'W', c: 'red' }, { from: 'S', to: 'W', c: 'blue' }, { from: 'N', to: 'S', c: 'green' }] }, q: 'Belgilarga qarang. ' + FIRST, ok: G, wrong: [R, B, ANY],
      ex: 'Yashil va ko‘k <b>asosiy yo‘lda</b>. Ko‘k chapga burilayotgani uchun qarshidan to‘g‘riga kelayotgan yashilga yo‘l beradi. Qizil («Yo‘l bering» belgisi) oxirgi o‘tadi.' },
    { id: 'main-last', o: { signs: MAIN_NS, v: [{ from: 'S', to: 'N', c: 'red' }, { from: 'N', to: 'E', c: 'blue' }, { from: 'W', to: 'E', c: 'green' }] }, q: 'Belgilarga qarang. Qaysi avtomobil chorrahadan oxirgi bo‘lib o‘tadi?', ok: G, wrong: [R, B, 'Tartibning ahamiyati yo‘q'],
      ex: 'Yashil ikkinchi darajali yo‘lda («Yo‘l bering») — asosiy yo‘ldagi ikkalasini ham o‘tkazadi. Asosiy yo‘lda avval to‘g‘riga ketayotgan qizil, keyin chapga burilayotgan ko‘k o‘tadi.' },
    { id: 'main-right', o: { signs: MAIN_NS, v: [{ from: 'W', to: 'S', c: 'red' }, { from: 'N', to: 'S', c: 'blue' }] }, q: 'Qizil avtomobil o‘ngga burilmoqchi. Haydovchi nima qilishi kerak?', ok: 'Ko‘k avtomobilga yo‘l berishi kerak', wrong: ['To‘xtamasdan burilishi mumkin, chunki o‘ngga burilyapti', 'Ovozli signal berib birinchi o‘tishi kerak', 'Ko‘k avtomobil yo‘l berishini kutishi kerak'],
      ex: '«Yo‘l bering» belgisi ostida o‘ngga burilganda ham asosiy yo‘lda kelayotgan transportga yo‘l beriladi — ikkalasi bitta bo‘lakka chiqadi.' },
    { id: 'tram-eq', o: { rails: 'WE', v: [{ from: 'W', to: 'E', kind: 'tram' }, { from: 'S', to: 'N', c: 'blue' }] }, q: 'Teng ahamiyatli yo‘llar chorrahasi. ' + FIRST, ok: T, wrong: [B, SAME, ANY],
      ex: 'Teng ahamiyatli yo‘llar chorrahasida <b>tramvay</b> harakat yo‘nalishidan qat’i nazar relssiz transport vositalaridan ustun — garchi u ko‘k avtomobilning chap tomonida bo‘lsa ham.' },
    { id: 'tram-secondary', o: { rails: 'WE', signs: MAIN_NS, v: [{ from: 'E', to: 'W', kind: 'tram' }, { from: 'S', to: 'N', c: 'red' }] }, q: 'Belgilarga qarang. ' + FIRST, ok: R, wrong: [T, SAME, ANY],
      ex: 'Tramvayning ustunligi faqat <b>teng huquqli</b> vaziyatda ishlaydi. Bu yerda tramvay ikkinchi darajali yo‘lda, qizil avtomobil esa asosiy yo‘lda — avtomobil birinchi o‘tadi.' },
    { id: 'tram-green', o: { rails: 'NS', light: { NS: 'green', EW: 'red' }, v: [{ from: 'S', to: 'W', kind: 'tram' }, { from: 'N', to: 'S', c: 'blue' }] }, q: 'Ikkalasiga ham yashil signal yonib turibdi. Tramvay chapga burilmoqda. ' + FIRST, ok: T, wrong: [B, SAME, ANY],
      ex: 'Svetofor tramvayga ham, relssiz transportga ham bir vaqtda ruxsat berganda <b>tramvay</b> harakat yo‘nalishidan qat’i nazar ustunlikka ega.' },
    { id: 'light-left', o: { light: { NS: 'green', EW: 'red' }, v: [{ from: 'S', to: 'W', c: 'red' }, { from: 'N', to: 'S', c: 'blue' }] }, q: 'Svetoforning yashil signali yonib turibdi. Qizil avtomobil chapga burilmoqchi. ' + FIRST, ok: B, wrong: [R, SAME, ANY],
      ex: 'Yashil signalda chapga burilayotgan haydovchi qarshidan to‘g‘riga va o‘ngga harakatlanayotgan transportga yo‘l beradi.' },
    { id: 'light-vs-sign', o: { light: { NS: 'red', EW: 'green' }, signs: MAIN_NS, v: [{ from: 'E', to: 'W', c: 'red' }, { from: 'S', to: 'N', c: 'blue' }] }, q: 'Ko‘k avtomobil asosiy yo‘lda, lekin unga qizil signal yonib turibdi. ' + FIRST, ok: R, wrong: [B, SAME, 'Ko‘k avtomobil — chunki u asosiy yo‘lda'],
      ex: 'Svetofor ishlab turganda uning signallari <b>ustuvorlik belgilaridan ustun</b>. Yashil signal qizil avtomobilga yonyapti — u o‘tadi, ko‘k esa stop-chiziqda kutadi.' },
    { id: 'flash-sign', o: { light: 'flash', signs: MAIN_NS, v: [{ from: 'E', to: 'W', c: 'red' }, { from: 'N', to: 'S', c: 'blue' }] }, q: 'Svetofor sariq miltillovchi rejimda ishlayapti. ' + FIRST, ok: B, wrong: [R, SAME, ANY],
      ex: 'Sariq miltillovchi signalda chorraha tartibga solinmagan hisoblanadi — <b>belgilarga</b> amal qilinadi. Ko‘k asosiy yo‘lda, qizil esa yo‘l beradi.' },
    { id: 'amb', o: { signs: MAIN_NS, v: [{ from: 'W', to: 'E', c: 'white', kind: 'amb' }, { from: 'S', to: 'N', c: 'blue' }] }, q: 'Tez yordam avtomobili ko‘k chiroq-mayoq va sirenani yoqib kelmoqda. ' + FIRST, ok: A, wrong: [B + ' — chunki u asosiy yo‘lda', SAME, ANY],
      ex: 'Ko‘k chiroq-mayoq va maxsus ovozli signali yoqilgan transport vositasiga <b>hamma yo‘l beradi</b> — asosiy yo‘lda bo‘lsangiz ham.' },
    { id: 't-eq', o: { arms: 'ESW', v: [{ from: 'S', to: 'W', c: 'red' }, { from: 'W', to: 'E', c: 'blue' }] }, q: 'Teng ahamiyatli yo‘llarning T-simon chorrahasi. ' + FIRST, ok: R, wrong: [B + ' — chunki u to‘g‘riga ketmoqda', SAME, ANY],
      ex: 'Belgi yo‘q — yo‘llar teng ahamiyatli. Qizil avtomobil ko‘kning <b>o‘ng tomonida</b>, shuning uchun to‘g‘riga ketayotgan bo‘lsa ham ko‘k yo‘l beradi.' },
    { id: 'main-turn', o: { mainPath: 'SE', signs: { S: 'main', E: 'main', N: 'yield', W: 'yield' }, v: [{ from: 'S', to: 'N', c: 'red' }, { from: 'E', to: 'S', c: 'blue' }] }, q: 'Asosiy yo‘l yo‘nalishini o‘zgartiradi (sariq bilan ko‘rsatilgan). ' + FIRST, ok: B, wrong: [R + ' — chunki u to‘g‘riga ketmoqda', SAME, ANY],
      ex: 'Ikkala avtomobil ham asosiy yo‘lda — ular o‘zaro <b>o‘ng qo‘l qoidasi</b> bo‘yicha o‘tadi. Ko‘k qizilning o‘ng tomonida, demak ko‘k birinchi.' },
    { id: 'ped-turn', o: { zebra: 'E', ped: 'E', v: [{ from: 'S', to: 'E', c: 'red' }] }, q: 'Qizil avtomobil o‘ngga burilmoqda. Burilayotgan yo‘lning qatnov qismidan piyoda o‘tmoqda. Haydovchi nima qilishi kerak?', ok: 'Piyodaga yo‘l berishi kerak', wrong: ['Ovozli signal berib o‘tib ketishi kerak', 'Piyoda to‘xtashini kutmasdan aylanib o‘tishi kerak', 'Tezlikni oshirib piyodadan oldin o‘tib olishi kerak'],
      ex: 'O‘ngga yoki chapga burilayotgan haydovchi o‘zi burilayotgan yo‘lning qatnov qismini kesib o‘tayotgan <b>piyodalarga yo‘l beradi</b>.' }
  ];
  window.PDD_SCENES = Q.map(function (x) { return { id: x.id, q: x.q, svg: draw(x.o), ok: x.ok, wrong: x.wrong, ex: x.ex }; });
})();

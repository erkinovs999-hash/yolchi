/* Yo'lchi PDD — yo'l belgilari (o'zimiz chizgan SVG, 100×100). window.PDD_SIGNS = [{ id, cat, name, svg }] */
(function () {
  var R = '#d6362b', B = '#1f5fb0', K = '#16191c', W = '#fff', Y = '#f6c21c';
  var wrap = function (s) { return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">' + s + '</svg>'; };
  var tri = function (inner) { return wrap('<path d="M50 8 94 86H6z" fill="' + W + '" stroke="' + R + '" stroke-width="8" stroke-linejoin="round"/>' + inner); };
  var ban = function (inner, slash) { return wrap('<circle cx="50" cy="50" r="42" fill="' + W + '" stroke="' + R + '" stroke-width="9"/>' + inner + (slash ? '<path d="M22 22 78 78" stroke="' + R + '" stroke-width="8"/>' : '')); };
  var man = function (inner) { return wrap('<circle cx="50" cy="50" r="45" fill="' + B + '"/><circle cx="50" cy="50" r="45" fill="none" stroke="' + W + '" stroke-width="2"/>' + inner); };
  var inf = function (inner) { return wrap('<rect x="6" y="6" width="88" height="88" rx="8" fill="' + B + '"/><rect x="8" y="8" width="84" height="84" rx="7" fill="none" stroke="' + W + '" stroke-width="2"/>' + inner); };
  var arrow = function (d, c, w) { return '<path d="' + d + '" fill="none" stroke="' + (c || W) + '" stroke-width="' + (w || 9) + '" stroke-linecap="round" stroke-linejoin="round"/>'; };
  var txt = function (t, y, size, c) { return '<text x="50" y="' + y + '" text-anchor="middle" font-family="Arial,sans-serif" font-weight="900" font-size="' + size + '" fill="' + (c || K) + '">' + t + '</text>'; };
  var person = function (x, y, s, c) { c = c || K; return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" stroke="' + c + '" stroke-width="5" stroke-linecap="round" fill="none"><circle cx="0" cy="-17" r="4.5" fill="' + c + '" stroke="none"/><path d="M0-11v15M0 4l-8 14M0 4l8 14M-9-4 0-9l9 6"/></g>'; };
  var car = function (x, y, c) { return '<g transform="translate(' + x + ' ' + y + ')" fill="' + c + '"><rect x="-11" y="-6" width="22" height="13" rx="3"/><rect x="-7" y="-13" width="14" height="9" rx="2.5"/><circle cx="-6" cy="8" r="3.4"/><circle cx="6" cy="8" r="3.4"/></g>'; };
  var up = 'M50 78V26M36 40 50 24 64 40', rt = 'M30 76V52q0-12 12-12h28M58 28 72 40 58 52', lt = 'M70 76V52q0-12-12-12H30M42 28 28 40 42 52';

  var S = [
    // Imtiyoz belgilari
    ['stop', 'imtiyoz', 'To‘xtamasdan harakatlanish taqiqlangan (STOP)', wrap('<path d="M32 6h36l26 26v36L68 94H32L6 68V32z" fill="' + R + '" stroke="' + W + '" stroke-width="3"/>' + txt('STOP', 60, 27, W))],
    ['yield', 'imtiyoz', 'Yo‘l bering', wrap('<path d="M6 12h88L50 92z" fill="' + W + '" stroke="' + R + '" stroke-width="9" stroke-linejoin="round"/>')],
    ['main', 'imtiyoz', 'Asosiy yo‘l', wrap('<rect x="19" y="19" width="62" height="62" rx="5" transform="rotate(45 50 50)" fill="' + W + '" stroke="' + K + '" stroke-width="2"/><rect x="30" y="30" width="40" height="40" rx="3" transform="rotate(45 50 50)" fill="' + Y + '"/>')],
    ['mainend', 'imtiyoz', 'Asosiy yo‘lning oxiri', wrap('<rect x="19" y="19" width="62" height="62" rx="5" transform="rotate(45 50 50)" fill="' + W + '" stroke="' + K + '" stroke-width="2"/><rect x="30" y="30" width="40" height="40" rx="3" transform="rotate(45 50 50)" fill="' + Y + '"/><path d="M24 76 76 24" stroke="' + K + '" stroke-width="7"/>')],
    ['minor', 'imtiyoz', 'Ikkinchi darajali yo‘l bilan kesishuv', tri('<path d="M50 32v46" stroke="' + K + '" stroke-width="10"/><path d="M30 58h40" stroke="' + K + '" stroke-width="4.5"/>')],
    // Taqiqlovchi
    ['noentry', 'taqiq', 'Kirish taqiqlangan', wrap('<circle cx="50" cy="50" r="45" fill="' + R + '"/><rect x="18" y="41" width="64" height="18" rx="2" fill="' + W + '"/>')],
    ['noveh', 'taqiq', 'Harakatlanish taqiqlangan', ban('')],
    ['speed40', 'taqiq', 'Eng yuqori tezlik cheklangan (40 km/soat)', ban(txt('40', 64, 40))],
    ['endall', 'taqiq', 'Barcha cheklovlar hududining oxiri', wrap('<circle cx="50" cy="50" r="43" fill="' + W + '" stroke="' + K + '" stroke-width="3"/><g stroke="' + K + '" stroke-width="3.5"><path d="M24 70 70 24M28 74 74 28M32 78 78 32M20 66 66 20"/></g>')],
    ['noover', 'taqiq', 'Quvib o‘tish taqiqlangan', ban(car(35, 50, R) + car(65, 50, K))],
    ['nostop', 'taqiq', 'To‘xtash taqiqlangan', wrap('<circle cx="50" cy="50" r="42" fill="' + B + '" stroke="' + R + '" stroke-width="9"/><path d="M22 22 78 78M78 22 22 78" stroke="' + R + '" stroke-width="8"/>')],
    ['nopark', 'taqiq', 'To‘xtab turish taqiqlangan', wrap('<circle cx="50" cy="50" r="42" fill="' + B + '" stroke="' + R + '" stroke-width="9"/><path d="M22 22 78 78" stroke="' + R + '" stroke-width="8"/>')],
    ['noleft', 'taqiq', 'Chapga burilish taqiqlangan', ban(arrow(lt, K, 8), true)],
    ['noright', 'taqiq', 'O‘ngga burilish taqiqlangan', ban(arrow(rt, K, 8), true)],
    ['nouturn', 'taqiq', 'Qayrilib olish taqiqlangan', ban(arrow('M64 76V44a14 14 0 0 0-28 0v20M26 54l10 12 10-12', K, 8), true)],
    ['noped', 'taqiq', 'Piyodalar harakati taqiqlangan', ban(person(50, 54, 1.25), true)],
    // Buyuruvchi
    ['straight', 'buyruq', 'Faqat to‘g‘riga harakatlanish', man(arrow(up))],
    ['right', 'buyruq', 'Faqat o‘ngga harakatlanish', man(arrow(rt))],
    ['left', 'buyruq', 'Faqat chapga harakatlanish', man(arrow(lt))],
    ['strright', 'buyruq', 'To‘g‘riga yoki o‘ngga harakatlanish', man(arrow('M40 80V24M28 36 40 22 52 36M40 62q0-12 12-12h18M60 40l12 10-12 10', W, 8))],
    ['round', 'buyruq', 'Aylanma harakatlanish', man(arrow('M50 26a24 24 0 0 1 21 12M64 28l8 11-13 3M71 62a24 24 0 0 1-42 0M33 72l-5-11 13-1M29 38a24 24 0 0 1 12-10M27 26l1 13 12-3', W, 6))],
    ['minspeed', 'buyruq', 'Eng past tezlik cheklangan (50 km/soat)', man(txt('50', 65, 42, W))],
    ['pedpath', 'buyruq', 'Piyodalar yo‘lkasi', man(person(50, 54, 1.4, W))],
    // Ogohlantiruvchi
    ['wped', 'ogoh', 'Piyodalar o‘tish joyi (ogohlantiruvchi)', tri(person(50, 58, .95) + '<path d="M28 80h44" stroke="' + K + '" stroke-width="4" stroke-dasharray="6 4"/>')],
    ['children', 'ogoh', 'Bolalar', tri(person(41, 62, .85) + person(60, 64, .7))],
    ['light', 'ogoh', 'Svetofor orqali tartibga solish', tri('<rect x="41" y="34" width="18" height="44" rx="5" fill="' + K + '"/><circle cx="50" cy="42" r="5" fill="' + R + '"/><circle cx="50" cy="56" r="5" fill="' + Y + '"/><circle cx="50" cy="70" r="5" fill="#2fae5a"/>')],
    ['bendr', 'ogoh', 'Xavfli burilish (o‘ngga)', tri(arrow('M42 78V60q0-10 10-10h10M54 40l10 10-10 10', K, 7))],
    ['bends', 'ogoh', 'Xavfli burilishlar', tri(arrow('M40 78V68q0-8 10-8t10-8V40M52 48l8-10 8 10', K, 7))],
    ['narrow', 'ogoh', 'Yo‘lning torayishi', tri('<path d="M36 80V62l8-10V36M64 80V62l-8-10V36" fill="none" stroke="' + K + '" stroke-width="6" stroke-linejoin="round"/>')],
    ['descent', 'ogoh', 'Tik nishablik', tri('<path d="M26 56 76 78H26z" fill="' + K + '"/>' + txt('10%', 52, 14))],
    ['bumps', 'ogoh', 'Notekis yo‘l', tri('<path d="M22 76h14q5-14 10 0h8q5-14 10 0h14" fill="none" stroke="' + K + '" stroke-width="7" stroke-linejoin="round"/>')],
    ['twoway', 'ogoh', 'Ikki tomonlama harakat', tri(arrow('M40 78V48M32 56l8-10 8 10', K, 6) + arrow('M60 46v30M52 68l8 10 8-10', K, 6))],
    ['danger', 'ogoh', 'Boshqa xavf-xatarlar', tri('<path d="M50 36v26" stroke="' + K + '" stroke-width="9" stroke-linecap="round"/><circle cx="50" cy="74" r="5" fill="' + K + '"/>')],
    ['rail', 'ogoh', 'Shlagbaumli temir yo‘l kesishmasi', tri('<path d="M30 76h40M30 62h40M34 56v24M46 56v24M58 56v24M68 56v24" stroke="' + K + '" stroke-width="5"/>')],
    ['slippery', 'ogoh', 'Sirpanchiq yo‘l', tri(car(50, 50, K) + '<path d="M38 66q6 6 0 12M56 66q6 6 0 12" fill="none" stroke="' + K + '" stroke-width="4" stroke-linecap="round"/>')],
    // Axborot-ishora
    ['zebra', 'axborot', 'Piyodalar o‘tish joyi', inf('<path d="M50 18 84 80H16z" fill="' + W + '"/>' + person(50, 60, .9) + '<path d="M30 78h40" stroke="' + K + '" stroke-width="3.5" stroke-dasharray="5 3"/>')],
    ['parking', 'axborot', 'To‘xtab turish joyi', inf(txt('P', 74, 68, W))],
    ['oneway', 'axborot', 'Bir tomonlama harakatlanish yo‘li', inf(arrow(up, W, 10))],
    ['deadend', 'axborot', 'Boshi berk ko‘cha', inf('<rect x="42" y="42" width="16" height="42" fill="' + W + '"/><rect x="26" y="22" width="48" height="18" rx="2" fill="' + R + '"/>')],
    ['uturn', 'axborot', 'Qayrilib olish joyi', inf(arrow('M64 78V44a14 14 0 0 0-28 0v22M26 56l10 12 10-12', W, 9))],
    ['busstop', 'axborot', 'Avtobus to‘xtash joyi', inf('<rect x="20" y="18" width="60" height="64" rx="5" fill="' + W + '"/><rect x="30" y="34" width="40" height="26" rx="5" fill="' + K + '"/><rect x="34" y="38" width="32" height="10" rx="2" fill="' + W + '"/><circle cx="38" cy="64" r="4.5" fill="' + K + '"/><circle cx="62" cy="64" r="4.5" fill="' + K + '"/>')],
    ['hospital', 'axborot', 'Shifoxona', inf('<rect x="20" y="18" width="60" height="64" rx="5" fill="' + W + '"/><path d="M50 30v40M30 50h40" stroke="' + R + '" stroke-width="13"/>')],
    ['fuel', 'axborot', 'Yoqilg‘i quyish shoxobchasi', inf('<rect x="20" y="18" width="60" height="64" rx="5" fill="' + W + '"/><rect x="34" y="30" width="22" height="40" rx="3" fill="' + K + '"/><rect x="38" y="35" width="14" height="11" fill="' + W + '"/><path d="M56 44h6q4 0 4 4v14" fill="none" stroke="' + K + '" stroke-width="4"/>')]
  ];
  window.PDD_SIGNS = S.map(function (s) { return { id: s[0], cat: s[1], name: s[2], svg: s[3] }; });
  window.PDD_CATS = { imtiyoz: 'Imtiyoz belgilari', taqiq: 'Taqiqlovchi belgilar', buyruq: 'Buyuruvchi belgilar', ogoh: 'Ogohlantiruvchi belgilar', axborot: 'Axborot-ishora belgilari' };
})();

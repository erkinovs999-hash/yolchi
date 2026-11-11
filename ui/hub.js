/* Yo'lchi bosh sahifasi: Vazifalar (kunlik bonus + 3 vazifa), Rekordlar, do'st taklifi mukofoti.
   Yolchi.hub = { tasks(), records(), pending() } */
(function () {
  var Y = window.Yolchi, tg = window.Telegram && Telegram.WebApp, init = tg && tg.initData;
  var BONUS = [50, 75, 100, 150, 200, 300, 500];
  var TASKS = [
    { id: 'race', text: '3 ta poygani oxirigacha haydang', need: 3, key: 'racesToday', coins: 150, url: '/race/' },
    { id: 'exam', text: 'Avtodromda imtihon yoki mashqni topshiring', need: 1, key: 'examToday', coins: 100, url: '/exam/' },
    { id: 'truck', text: 'Yuk mashinasida 1 ta missiyani bajaring', need: 1, key: 'truckToday', coins: 100, url: '/truck/' }
  ];
  var mult = function (st) { return st.vip ? 2 : 1; };
  var fmt = function (n) { return (n || 0).toLocaleString('ru-RU'); };
  var wallet = function () { document.dispatchEvent(new CustomEvent('yolchi:wallet')); };
  function dayDiff(a, b) { return Math.round((new Date(b + 'T00:00:00') - new Date(a + 'T00:00:00')) / 864e5); }

  /* ---- kunlik bonus: ketma-ket kunlar ---- */
  function bonusInfo(st) {
    var t = Y.today(), last = st.bonusDay, streak = st.streak || 0;
    var claimed = last === t;
    if (!claimed && (!last || dayDiff(last, t) !== 1)) streak = 0;       // uzilgan bo'lsa qaytadan
    var idx = claimed ? (streak - 1) % 7 : streak % 7;
    return { claimed: claimed, idx: idx, streak: streak };
  }
  function claimBonus() {
    var st = Y.state(), b = bonusInfo(st); if (b.claimed) return;
    var c = BONUS[b.idx] * mult(st);
    st.coins = (st.coins || 0) + c; st.streak = b.streak + 1; st.bonusDay = Y.today(); Y.save(st);
    Y.haptic('heavy'); Y.toast('+' + c + ' tanga — ' + (b.idx + 1) + '-kun bonusi' + (st.vip ? ' (VIP ×2)' : '')); wallet(); render();
  }
  function taskDone(st, t) { return (st[t.key] || 0) >= t.need; }
  function taskClaimed(st, t) { return !!st.claims[t.id] || (t.id === 'race' && st.dailyClaimed); }
  function claimTask(id) {
    var st = Y.state(), t = TASKS.filter(function (x) { return x.id === id; })[0];
    if (!t || !taskDone(st, t) || taskClaimed(st, t)) return;
    var c = t.coins * mult(st);
    st.coins = (st.coins || 0) + c; st.xp = (st.xp || 0) + 50; st.claims[t.id] = true; if (t.id === 'race') st.dailyClaimed = true; Y.save(st);
    Y.haptic('medium'); Y.toast('+' + c + ' tanga!' + (st.vip ? ' (VIP ×2)' : '')); wallet(); render();
  }
  function pending() {
    var st = Y.state(), n = bonusInfo(st).claimed ? 0 : 1;
    TASKS.forEach(function (t) { if (taskDone(st, t) && !taskClaimed(st, t)) n++; });
    return n;
  }

  var CSS = [
    '.dim{position:absolute;inset:0;background:rgba(5,10,14,.66);pointer-events:auto}',
    '.box{position:absolute;left:50%;top:calc(50% + 6px);transform:translate(-50%,-50%);width:660px;max-width:calc(100% - 28px);padding:14px 16px;border-radius:18px;background:#0e1a22;border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 80px rgba(0,0,0,.5)}',
    '.hd{display:flex;align-items:center;gap:8px;margin-bottom:10px}.hd .t{font-family:Unbounded,sans-serif;font-size:16px;font-weight:800;letter-spacing:.04em}.hd .grow{flex:1}',
    '.lbl2{font-size:9px;font-weight:800;letter-spacing:.14em;color:var(--muted);text-transform:uppercase;margin:0 0 7px}',
    '.days{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;margin-bottom:12px}',
    '.day{position:relative;height:62px;border-radius:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;font-size:9px;font-weight:800;color:var(--muted)}',
    '.day b{font-family:Unbounded,sans-serif;font-size:13px;color:#fff}',
    '.day.got{opacity:.5}.day.got::after{content:"✓";position:absolute;top:3px;right:6px;color:var(--lime);font-size:11px}',
    '.day.now{border:2px solid var(--lime);background:rgba(198,242,78,.12);color:var(--lime)}',
    'button.day.now:active{transform:scale(.96)}',
    '.task{display:flex;align-items:center;gap:12px;padding:9px 11px;border-radius:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);margin-bottom:6px}',
    '.task .tx{flex:1;min-width:0}.task b{display:block;font-size:12px;font-weight:800;margin-bottom:5px}',
    '.task .pr{display:flex;align-items:center;gap:8px;font-size:10.5px;font-weight:800}.task .pr .bar{flex:1}',
    '.task .rw{display:inline-flex;align-items:center;gap:4px;font-size:12px;font-weight:800;color:var(--coin);width:62px;justify-content:flex-end}',
    '.task .act{width:86px;height:32px;border-radius:10px;font-size:11.5px;font-weight:800;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center}',
    '.task .act.go{background:var(--lime);color:#0a1218}.task .act.done{background:none;color:var(--muted)}',
    '.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}',
    '.rec{padding:11px 12px;border-radius:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);display:flex;flex-direction:column;gap:3px}',
    '.rec b{font-family:Unbounded,sans-serif;font-size:17px;font-weight:800}.rec span{font-size:10px;font-weight:700;color:var(--muted)}',
    '.tabs{display:flex;gap:4px;padding:3px;border-radius:11px;background:rgba(255,255,255,.06);margin-bottom:10px}',
    '.tabs button{flex:1;height:30px;border-radius:9px;font-size:11.5px;font-weight:800;color:var(--muted)}.tabs button.on{background:var(--lime);color:#0a1218}',
    '.rows{max-height:206px;overflow-y:auto;display:flex;flex-direction:column;gap:4px;pointer-events:auto;touch-action:pan-y}',
    '.row{display:flex;align-items:center;gap:10px;height:32px;flex:none;padding:0 12px;border-radius:10px;background:rgba(255,255,255,.05);font-size:12px;font-weight:700}',
    '.row i{width:26px;font-style:normal;font-weight:800;color:var(--muted);text-align:center}.row span{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row b{font-family:Unbounded,sans-serif;font-size:11.5px}',
    '.row em{font-style:normal;font-size:8px;font-weight:800;padding:2px 5px;border-radius:99px;background:linear-gradient(90deg,#ffd76a,#ff9f43);color:#2a1700;vertical-align:middle}',
    '.row.me{background:rgba(198,242,78,.14);border:1px solid var(--lime)}',
    '.note{margin:10px 0 0;font-size:9.5px;font-weight:600;color:var(--muted);line-height:1.4}'
  ].join('');
  var o, q, mode = 'tasks';
  function build() {
    o = Y.overlay(CSS, 'yolchi-hub'); o.host.style.zIndex = '94'; o.show(false);
    o.ui.innerHTML = '<div class="dim" id="dim"></div><div class="box glass"><div class="hd"><span class="t" id="title"></span><span class="grow"></span>' +
      '<span class="pill"><span data-ic="coin" data-s="16"></span><b id="coins">0</b></span>' +
      '<button class="iconbtn" id="x" aria-label="Yopish"><span data-ic="x" data-c="#fff" data-s="14"></span></button></div><div id="body"></div></div>';
    o.icons(); q = function (id) { return o.root.getElementById(id); };
    q('x').onclick = q('dim').onclick = function () { o.show(false); wallet(); };
  }
  function render() {
    if (!o || o.host.hidden) return;
    var st = Y.state(); q('coins').textContent = fmt(st.coins);
    if (mode === 'tasks') {
      var b = bonusInfo(st), m = mult(st);
      q('title').textContent = 'VAZIFALAR';
      q('body').innerHTML = '<p class="lbl2">Kunlik bonus · har kuni kiring' + (st.vip ? ' · VIP ×2' : '') + '</p><div class="days">' + BONUS.map(function (c, i) {
        var got = i < b.idx || (b.claimed && i === b.idx), now = !b.claimed && i === b.idx;
        return '<' + (now ? 'button' : 'div') + ' class="day' + (got ? ' got' : '') + (now ? ' now' : '') + '"' + (now ? ' id="bonus"' : '') + '>' + (i + 1) + '-kun<b>' + c * m + '</b>' + (now ? 'OLISH' : 'tanga') + '</' + (now ? 'button' : 'div') + '>';
      }).join('') + '</div><p class="lbl2">Bugungi vazifalar</p>' + TASKS.map(function (t) {
        var n = Math.min(st[t.key] || 0, t.need), done = n >= t.need, cl = taskClaimed(st, t);
        return '<div class="task"><div class="tx"><b>' + t.text + '</b><div class="pr"><span class="bar"><i style="width:' + (n / t.need * 100) + '%"></i></span>' + n + '/' + t.need + '</div></div>' +
          '<span class="rw">' + Y.icon('coin', null, 15) + '+' + t.coins * m + '</span>' +
          (cl ? '<span class="act done">Olindi ✓</span>' : done ? '<button class="act go" data-claim="' + t.id + '">Olish</button>' : '<a class="act" href="' + t.url + '">O‘ynash</a>') + '</div>';
      }).join('');
      var bb = q('bonus'); if (bb) bb.onclick = claimBonus;
      o.root.querySelectorAll('[data-claim]').forEach(function (x) { x.onclick = function () { claimTask(x.dataset.claim); }; });
    } else if (mode === 'records' && tab !== 'me') {
      q('title').textContent = 'REYTING';
      q('body').innerHTML = tabsHtml() + boardHtml();
      bindTabs();
    } else {
      var lv = Y.level(st.xp || 0), best = 0, stars = 0; try { best = +localStorage.getItem('yolchi-exam-best') || 0; } catch (e) {}
      Object.keys(st.truck || {}).forEach(function (k) { stars += st.truck[k].stars || 0; });
      var rec = [[lv.lv + '-daraja', fmt(st.xp) + ' tajriba'], [st.bestRace || '—', 'Poyga: eng yaxshi vaqt'], [fmt(st.wins), 'Poygada g‘alabalar'],
        [best ? Math.floor(best / 60) + ':' + String(best % 60).padStart(2, '0') : '—', 'Avtodrom: vaqtga qarshi'], [fmt(st.examPassed), 'Topshirilgan imtihon va mashqlar'], [stars + ' / 9', 'Yuk mashinasi yulduzlari'],
        [fmt(st.races), 'Tugatilgan poygalar'], [(st.streak || 0) + ' kun', 'Ketma-ket kirish'], [fmt((st.refs || []).length), 'Taklif qilingan do‘stlar']];
      q('title').textContent = 'REYTING';
      q('body').innerHTML = tabsHtml() + '<div class="grid">' + rec.map(function (r) { return '<div class="rec"><b>' + r[0] + '</b><span>' + r[1] + '</span></div>'; }).join('') + '</div>' +
        '<p class="note">Bu sizning shaxsiy natijalaringiz — shu qurilmada saqlanadi.</p>';
      bindTabs();
    }
  }
  /* ---- umumiy reyting ---- */
  var tab = 'race', boards = null, lbErr = '';
  var TABS = [['race', 'Poyga'], ['exam', 'Avtodrom'], ['xp', 'Daraja'], ['me', 'Mening rekordlarim']];
  function secs(t) { var m = /^(\d+):(\d+(?:\.\d+)?)$/.exec(t || ''); return m ? +m[1] * 60 + +m[2] : 0; }
  function clock(v) { var m = Math.floor(v / 60), s = v - m * 60; return m + ':' + (s < 10 ? '0' : '') + (Math.round(s * 10) / 10).toFixed(s % 1 ? 1 : 0); }
  function tabsHtml() { return '<div class="tabs">' + TABS.map(function (t) { return '<button data-tab="' + t[0] + '" class="' + (t[0] === tab ? 'on' : '') + '">' + t[1] + '</button>'; }).join('') + '</div>'; }
  function bindTabs() { o.root.querySelectorAll('[data-tab]').forEach(function (b) { b.onclick = function () { tab = b.dataset.tab; Y.haptic(); render(); }; }); }
  function val(v) { return tab === 'xp' ? Y.level(v).lv + '-daraja · ' + fmt(v) : clock(v); }
  function boardHtml() {
    if (!init) return '<p class="note">Umumiy reyting faqat Telegram ichida ko‘rinadi.</p>';
    if (lbErr) return '<p class="note">' + lbErr + '</p>';
    if (!boards) return '<p class="note">Yuklanmoqda…</p>';
    var b = boards[tab], hint = { race: 'Yakka poygadagi eng yaxshi vaqt', exam: 'Avtodrom “Vaqtga qarshi” natijasi', xp: 'Umumiy tajriba' }[tab];
    if (!b.top.length) return '<p class="note">' + hint + '. Hali hech kim yo‘q — birinchi bo‘ling!</p>';
    var rows = b.top.map(function (r) { return '<div class="row' + (r.me ? ' me' : '') + '"><i>' + (r.rank <= 3 ? ['🥇', '🥈', '🥉'][r.rank - 1] : r.rank) + '</i><span>' + r.name + (r.vip ? ' <em>VIP</em>' : '') + '</span><b>' + val(r.v) + '</b></div>'; }).join('');
    var mine = b.me ? (b.me.rank > b.top.length ? 'Sizning o‘rningiz: ' + b.me.rank + ' / ' + b.total + ' · ' + val(b.me.v) : 'Sizning o‘rningiz: ' + b.me.rank + ' / ' + b.total) : 'Siz hali bu jadvalda yo‘qsiz';
    return '<div class="rows">' + rows + '</div><p class="note">' + hint + '. ' + mine + '.</p>';
  }
  function loadBoards() {
    if (!init) return;
    var st = Y.state(), best = 0; try { best = +localStorage.getItem('yolchi-exam-best') || 0; } catch (e) {}
    fetch('/api/lb', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ initData: init, race: secs(st.bestRace), exam: best, xp: st.xp || 0, vip: !!st.vip }) })
      .then(function (r) { return r.json(); }).then(function (r) { if (r.ok) { boards = r.boards; lbErr = ''; } else lbErr = r.error || 'Reytingni yuklab bo‘lmadi'; render(); })
      .catch(function () { lbErr = 'Internet aloqasini tekshiring'; render(); });
  }
  function open(m) { o || build(); mode = m; o.show(true); if (m === 'records') { if (!init) tab = 'me'; loadBoards(); } render(); }

  /* ---- do'st taklifi ---- */
  function api(body) { return fetch('/api/shop', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(Object.assign({ initData: init }, body)) }).then(function (r) { return r.json(); }); }
  function referral() {
    if (!init) return;
    var st = Y.state(), sp = (tg.initDataUnsafe && tg.initDataUnsafe.start_param) || '';
    var m = /^ref_(\d+)$/.exec(sp);
    // taklif bilan kelgan yangi o'yinchi: xush kelibsiz bonusi + taklif qilganga xabar
    if (m && +m[1] !== Y.uid && !st.refBy) {
      st.refBy = +m[1]; st.coins = (st.coins || 0) + 500; Y.save(st); wallet();
      setTimeout(function () { Y.toast('Xush kelibsiz! +500 tanga do‘stingizdan sovg‘a'); }, 800);
      api({ action: 'ref' }).catch(function () {});
    }
    // taklif qilgan o'yinchi mukofot tugmasi bilan kirdi
    var tok = new URLSearchParams(location.search).get('claim');
    if (tok) {
      history.replaceState(null, '', location.pathname);
      api({ action: 'claim', token: tok }).then(function (r) {
        if (!r.ok) { Y.toast(r.error || 'Mukofotni olib bo‘lmadi'); return; }
        var s2 = Y.state(); s2.refs = s2.refs || [];
        if (s2.refs.indexOf(r.invitee) >= 0) { Y.toast('Bu mukofot allaqachon olingan'); return; }
        s2.refs.push(r.invitee); s2.coins = (s2.coins || 0) + r.reward; Y.save(s2); wallet(); Y.haptic('heavy');
        Y.toast('+' + r.reward + ' tanga — do‘stingiz qo‘shildi!');
      }).catch(function () { Y.toast('Internet aloqasini tekshiring'); });
    }
  }
  function invite() {
    Y.share('Yo‘lchi — Telegramdagi haydash o‘yini! Shu havola bilan kirsang, ikkalamizga 500 tangadan 🎁', Y.uid ? 'ref_' + Y.uid : '');
  }

  Y.hub = { tasks: function () { open('tasks'); }, records: function () { open('records'); }, pending: pending, bonusClaimed: function () { return bonusInfo(Y.state()).claimed; }, referral: referral, invite: invite };
  document.addEventListener('yolchi:wallet', render);
})();

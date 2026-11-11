/* Yo'lchi — mukofotli reklama (Adsgram). BLOCK_ID bo'sh bo'lsa, reklama tugmalari umuman ko'rinmaydi.
   Blok ID: partner.adsgram.ai → platforma → "+ Block" (Reward) → moderatsiyadan so'ng "Copy BlockID". */
(function () {
  var Y = window.Yolchi, BLOCK_ID = '';            // ← Adsgram blok ID shu yerga yoziladi
  var LIMIT = 5, REWARD = 100, ctrl = null, loading = null;
  var tg = window.Telegram && Telegram.WebApp;
  function left() { var st = Y.state(); return Math.max(0, LIMIT - (st.claims.ads || 0)); }
  function sdk() {
    if (ctrl) return Promise.resolve(ctrl);
    return loading || (loading = new Promise(function (ok, no) {
      var s = document.createElement('script'); s.src = 'https://sad.adsgram.ai/js/sad.min.js';
      s.onload = function () { try { ctrl = window.Adsgram.init({ blockId: BLOCK_ID }); ok(ctrl); } catch (e) { no(e); } };
      s.onerror = function () { loading = null; no(new Error('sdk')); }; document.head.appendChild(s);
    }));
  }
  function show() {
    if (!left()) { Y.toast('Bugungi reklama mukofotlari tugadi'); return Promise.resolve(false); }
    return sdk().then(function (c) { return c.show(); }).then(function (r) {
      if (!r || !r.done || r.error) return false;
      var st = Y.state(), c = REWARD * (st.vip ? 2 : 1);
      st.claims.ads = (st.claims.ads || 0) + 1; st.coins = (st.coins || 0) + c; Y.save(st);
      Y.haptic('heavy'); Y.toast('+' + c + ' tanga — rahmat!'); document.dispatchEvent(new CustomEvent('yolchi:wallet')); return true;
    }).catch(function () { Y.toast('Hozircha reklama yo‘q. Keyinroq urinib ko‘ring.'); return false; });
  }
  Y.ads = { ready: !!BLOCK_ID && !!(tg && tg.initData), left: left, limit: LIMIT, reward: REWARD, show: show };
})();

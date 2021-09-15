/*
 howler.js v2.1.3
  howlerjs.com

  (c) 2013-2019, James Simpson of GoldFire Studios
  goldfirestudios.com

  MIT License
 Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.

  howler.js v2.1.3
  howlerjs.com

  (c) 2013-2019, James Simpson of GoldFire Studios
  goldfirestudios.com

  MIT License
*/
var krpanoplugin = function () {
    function B(a) { return 0 <= "yesontrue1".indexOf(String(a).toLowerCase()) } function Z() { if (f) { var a = !1, c = u.getArray(), k = c.length, e, l; for (e = 0; e < k; e++)(l = c[e]) && l.is3d && l.DATA && (1 == l.DATA.mode3d && (a = !0), 0 < l.DATA.updateflags3d && l.update3d()); a && (e = f.view, a = e.tx, c = e.ty, k = e.tz, e = f.view, e = e.dir, D.cameraUpdate(a, c, k, e.x, e.y, e.z, e.ux, e.uy, e.uz)) } } function z(a, c) { f.trace(2, (c ? c + ": " : "") + "no sound with name '" + a + "' found!") } function aa(a) {
        f && (a = document.visibilityState, !0 === document.hidden ||
            "hidden" == a || "prerender" == a || "unloaded" == a ? E && N() : O())
    } function S(a) {
        var c = null; a = "" + a; if (93 == a.charCodeAt(a.length - 1)) { var k = a.indexOf("["); 0 < k && (c = a.slice(k + 1, a.length - 1).split(","), 2 != c.length ? c = null : (c[0] = Number(c[0]) / 1E3, c[1] = Number(c[1]) / 1E3), a = a.slice(0, k)) } a = a.split("|"); k = a.length; var e; for (e = 0; e < k; e++) {
            var l = a[e]; if (!("/" == l.charAt(0) || 0 < l.indexOf("://") || 0 == l.indexOf("data:"))) { var m = J; null != m && 0 < m.length && "null" != ("" + m).toLowerCase() ? "/" != m.charAt(m.length - 1) && (m += "/") : m = ""; l = m + l } a[e] =
                f.parsepath(l)
        } return { src: a, sprite: c }
    } function T(a, c) { c = B(c); var k = "UID_" + a.src.join("_x_").split(".").join("_") + "_s" + (c | 0) + "_c" + (a.sprite ? 1 : 0), e = U[k]; e || (e = {}, e.src = a.src, e.html5 = c, e.onloaderror = ba, e.onplay = ca, e.onpause = da, e.onstop = ea, e.onseek = fa, e.onend = ha, e = { hsound: D.newSound(e), uid: k, sounds: {} }, U[k] = e); return e } function ba(a, c) {
        1 == c ? c = "Loading aborted" : 2 == c ? c = "Network error" : 3 == c ? c = "Decoding failed" : 4 == c && (c = "Loading failed"); f.lasterror = c; c = (a = A[a]) ? a.url + " - " + c : "Soundinterface Load Error: " +
            c; a && a.onloaderror ? f.call(a.onloaderror, a) : 0 == f.events.dispatch("onloaderror") && f.trace(3, c)
    } function ca(a) { (a = A[a]) && a.onplay && f.call(a.onplay, a) } function da(a) { (a = A[a]) && a.onpause && f.call(a.onpause, a) } function ea(a) { (a = A[a]) && a.onstop && f.call(a.onstop, a) } function fa(a) { (a = A[a]) && a.onseeked && f.call(a.onseeked, a) } function ha(a) { (a = A[a]) && a.DATA && 0 == a.DATA.loop && (a.oncomplete && f.call(a.oncomplete, a), a.destroy()) } function ia() {
        this.panner = this.sprite_crop = this.sprite_id = this.id = this.hsound = null; this.allpaused =
            !1; this.mode3d = this.updateflags3d = 0; this.muted = this.loop = !1; this.speed = this.volume = 1; this.pan = 0; this.hotspot = null; this.tz = this.ty = this.tx = this.depth = this.atv = this.ath = 0; this.range = 360; this.rolloff = this.refdistance = 1
    } function ja(a) { T(S(a), !1) } function F(a, c, k) {
        var e = S(c); e.sprite && (k = !1); var l = !1; "auto" == a && (a = P("autosound"), l = !0); var m = T(e, k), n = m.hsound, h = u.getItem(a), d = null, p = null; h ? (d = h.DATA, p = h, h.destroy(), h = null) : d = new ia; h = u.createItem(a); h.DATA = d; h.url = c; h.keep = !0; h.isstreaming = k; h.is2d = !1;
        h.is3d = !1; h.onloaderror = null; h.onplay = null; h.onpause = null; h.onstop = null; h.onseeked = null; h.oncomplete = null; p && (h.keep = p.keep, h.onloaderror = p.onloaderror, h.onplay = p.onplay, h.onpause = p.onpause, h.onstop = p.onstop, h.onseeked = p.onseeked, h.oncomplete = p.oncomplete, p = null); d.hsound = n; d.filelink = m; d.id = null; d.sprite_id = null; d.sprite_crop = null; e.sprite && (d.sprite_id = P("sprite"), d.sprite_crop = e.sprite, n._sprite[d.sprite_id] = d.sprite_crop); h.play = h.resume = ka.bind(h); h.pause = la.bind(h); h.toggle = ma.bind(h); h.stop =
            na.bind(h); h.seek = oa.bind(h); h.destroy = pa.bind(h); h.sethv = qa.bind(h); h.setxyz = ra.bind(h); h.setup3d = sa.bind(h); h.update3d = ta.bind(h); h.registerattribute("loop", d.loop, function (a) { a = B(a); d.loop = a; d.id && n.loop(a, d.id) }, function () { return d.loop }); h.registerattribute("muted", d.muted, function (a) { a = B(a); d.muted = a; d.id && n.mute(a, d.id) }, function () { return d.muted }); h.registerattribute("volume", d.volume, function (a) { a = parseFloat(a); isNaN(a) || (d.volume = a, d.id && n.volume(a, d.id)) }, function () {
                return d.id ? n.volume(null,
                    d.id) : d.volume
            }); h.registerattribute("range", d.range, function (a) { a = parseFloat(a); isNaN(a) || (d.range = a) }, function () { return d.range }); h.registerattribute("speed", d.speed, function (a) { a = parseFloat(a); isNaN(a) || (.5 > a && (a = .5), d.speed = a, d.id && n.rate(a, d.id)) }, function () { return d.speed }); h.registerattribute("paused", null, function (a) { }, function () { return d.id ? !d.hsound.playing(d.id) : !0 }); h.registerattribute("duration", null, function (a) { }, function () { return d.id ? d.hsound.duration(d.id) : 0 }); h.registerattribute("position",
                null, function (a) { "" != a && null != a && h.seek(a) }, function () { var a = Number(d.id ? d.hsound.seek(void 0, d.id) : 0); return isNaN(a) ? 0 : a }); h.registerattribute("pan", d.pan, function (a) { a = parseFloat(a); isNaN(a) || (0 != a && (h.is2d = !0), d.pan = a, d.id && !h.is3d && 0 != a && n.stereo(a, d.id)) }, function () { return d.pan }); h.registerattribute("ath", d.ath, function (a) { d.ath = Number(a); d.updateflags3d |= 1 }, function () { return d.ath }); h.registerattribute("atv", d.atv, function (a) { d.atv = Number(a); d.updateflags3d |= 1 }, function () { return d.atv }); h.registerattribute("depth",
                    d.depth, function (a) { d.depth = Number(a); d.updateflags3d |= 1 }, function () { return d.depth }); h.registerattribute("tx", d.tx, function (a) { d.tx = Number(a); d.updateflags3d |= 1 }, function () { return d.tx }); h.registerattribute("ty", d.ty, function (a) { d.ty = Number(a); d.updateflags3d |= 1 }, function () { return d.ty }); h.registerattribute("tz", d.tz, function (a) { d.tz = Number(a); d.updateflags3d |= 1 }, function () { return d.tz }); m.sounds[a] = h; l && (f.autosound = h); return h
    } function ka() {
        var a = this.DATA, c = a.hsound; null == a.id ? (a.id = a.sprite_id ?
            c.play(a.sprite_id) : c.play(), A[a.id] = this, c.loop(a.loop, a.id), c.volume(a.volume, a.id), c.rate(a.speed, a.id), c.mute(a.muted, a.id), a.panner && c.pannerAttr(a.panner, a.id)) : c.playing(a.id) || c.play(a.id)
    } function la() { var a = this.DATA; a.id && a.hsound.pause(a.id) } function ma() { var a = this.DATA; a.id && (a.hsound.playing(a.id) ? a.hsound.pause(a.id) : a.hsound.play(a.id)) } function na() { var a = this.DATA; a.id && a.hsound.stop(a.id) } function oa(a) {
        if (null != a && "" != a && (a = Number(a), !isNaN(a))) {
            var c = this.DATA; c.id && c.hsound.seek(a,
                c.id)
        }
    } function pa() { if (this.name && !0 !== this._destroyed) { var a = this.DATA; a && a.id && (a.hsound.stop(a.id), a.filelink && delete a.filelink.sounds[this.name], A[a.id] = null); this.DATA = null; this._destroyed = !0; u.removeItem(this.name) } } function qa(a, c, k) { this.is3d = !0; var e = this.DATA; e.id && (a = Number(a), c = Number(c), k = Number(k), isNaN(k) && (k = 1E3), isNaN(a) || (e.ath = a), isNaN(c) || (e.atv = c), e.depth = k, e.tx = 0, e.ty = 0, e.tz = 0, e.updateflags3d |= 1) } function ra(a, c, k) {
        this.is3d = !0; var e = this.DATA; e && (a = Number(a), c = Number(c), k =
            Number(k), isNaN(a) || (e.tx = a), isNaN(c) || (e.ty = c), isNaN(k) || (e.tz = k), e.ath = 0, e.atv = 0, e.depth = 0, e.updateflags3d |= 1)
    } function sa(a, c, k, e) {
        this.is3d = !0; var f = this.DATA; e || (e = K); if (C.ios || C.safari) e = "HRTF"; f.mode3d = "equalpower" == e || "HRTF" == e ? 1 : 0; a = Number(a); if (isNaN(a) || 1 > a) a = 1; c = Number(c); isNaN(c) && (c = 1); f.refdistance = a; f.rolloff = c; 1 == f.mode3d && (f.panner = { coneInnerAngle: 360, coneOuterAngle: 360, coneOuterGain: 0, refDistance: a, maxDistance: 1E4, rolloffFactor: c, distanceModel: k ? k : "inverse", panningModel: e ? e : "HRTF" },
            f.id && f.hsound.pannerAttr(f.panner, f.id)); f.updateflags3d |= 1
    } function ta() {
        var a = this.DATA, c = a.id, k = a.hsound; a.updateflags3d = 0; if (c) {
            var e; if (e = a.hotspot) { if (e._destroyed) { a.hotspot = null; return } var l = Number(e.tx); var m = Number(e.ty); var n = Number(e.tz); var h = Number(e.ath); var d = Number(e.atv); e = Number(e.depth); isNaN(e) && (e = 1E3); a.updateflags3d |= 2 } else l = a.tx, m = a.ty, n = a.tz, h = a.ath, d = a.atv, e = a.depth; h = (h - 90) * Math.PI / 180; d = d * Math.PI / 180; l += e * Math.cos(d) * Math.cos(h); n += -e * Math.cos(d) * Math.sin(h); m += e * Math.sin(d);
            var p = f.view; h = p.dir; d = l - p.tx; e = m - p.ty; p = n - p.tz; var q = Math.sqrt(d * d + e * e + p * p); if (0 == a.mode3d) { a.updateflags3d |= 2; m = 0; l = a.volume; if (0 < q) { m = 1E3 * a.refdistance; n = m / (m + a.rolloff * (Math.max(q, m) - m)); q = 1 / q; d *= q; e *= q; p *= q; q = Math.acos(d * h.x + e * h.y + p * h.z) / Math.PI; var b = a.range / 180; q > b && (q = b); m = h.rx * d + h.ry * e + h.rz * p; l *= (b - q) / b * n } k.volume(l, c); k.stereo(m, c) } else b = a.range / 180, 2 > b && (a.updateflags3d |= 1, q = 1 / q, q = Math.acos(d * q * h.x + e * q * h.y + p * q * h.z) / Math.PI, q > b && (q = b), k.volume((b - q) / b * a.volume, c)), a = V * G, k.pos(l * a, m * a, n *
                a, c)
        }
    } function L(a) { if ("" == a || void 0 === a) return !1; if ("boolean" == typeof a) return a; if ("true" === a) return !0; if ("false" === a) return !1; var c = Number(a); return isNaN(c) ? B(a) : 0 == c ? !0 : !1 } function w(a, c) { return "" === a || "null" === a || null === a || void 0 === a ? c : a } function Q() {
        var a = arguments, c = a.length; if (1 > c) return null; var k = !0 === a[5], e = a[0]; if (1 == c) (a = u.getItem(e)) ? a.play() : z(e, "playsound"); else {
            var l = !1; "auto" == e && (e = P("autosound"), l = !0); var m = a[1], n = 3 <= c ? L(a[2]) : !1, h = 1, d = null; 4 == c ? (c = Number(a[3]), isNaN(c) ? d = a[3] :
                h = c) : 5 <= c && (h = Number(a[3]), d = a[4]); (C.ios || C.iosdesktop) && 1 != h && (k = !1); if (a = F(e, m, k)) a.loop = w(n, !1), a.volume = w(h, 1), a.oncomplete = w(d, null), a.play(); l && (f.autosound = a)
        } return a
    } function ua(a, c, k, e, f) { return Q(a, c, k, e, f, !0) } function R(a, c, k, e, f, m, n, h, d) { if (a = F(a, c, !1)) c = Number(h), isNaN(c) && (c = 360, h && !d && (d = h)), a.loop = w(m, !1), a.volume = w(n, 1), a.range = c, a.oncomplete = w(d, null), a.play(), a.setup3d(), a.sethv(k, e, f); return a } function va(a, c, k, e, f, m, n, h, d) {
        if (a = F(a, c, !1)) c = Number(h), isNaN(c) && (c = 360, h && !d &&
            (d = h)), a.loop = w(m, !1), a.volume = w(n, 1), a.range = c, a.oncomplete = w(d, null), a.play(), a.setup3d(), a.setxyz(k, e, f); return a
    } function W(a, c, k, e, l, m, n) { if (!k) return null; "string" == typeof k && (0 == k.indexOf("hotspot[") && (k = k.slice(8, -1)), k = f.hotspot.getItem(k)); if (!k) return null; if (a = F(a, c, !1)) c = Number(m), isNaN(c) && (c = 360, m && !n && (n = m)), a.is3d = !0, a.DATA.hotspot = k, a.DATA.updateflags3d |= 2, a.loop = w(e, !1), a.volume = w(l, 1), a.range = c, a.oncomplete = w(n, null), a.play(), a.setup3d(); return a } function wa(a, c, f, e, l) {
        (a = u.getItem(a)) &&
        a.setup3d(c, f, e, l)
    } function xa(a, c, f, e, l, m) { if (a = Q(a, c, l, f, m)) a.pan = e; return a } function ya(a, c, f, e, l, m, n, h) { return R(a, c, f, e, 1E3, L(n), m, l, h) } function za(a, c, f, e, l, m, n) { return R(a, c, f, 0, 1E3, L(m), l, e, n) } function Aa(a, c, f, e, l, m, n) { return W(a, c, f, L(m), l, e, n) } function Ba(a) { var c = u.getItem(a); c ? c.pause() : z(a, "pausesound"); return c } function Ca(a) { var c = u.getItem(a); c ? c.play() : z(a, "resumesound"); return c } function Da(a) { var c = u.getItem(a); c ? c.stop() : z(a, "stopsound"); return c } function Ea(a) {
        var c = u.getItem(a);
        c ? c.destroy() : z(a, "destroysound")
    } function X(a) { var c = u.getItem(a); c ? c.toggle() : z(a, "togglesound"); return c } function Fa(a, c) { var f = u.getItem(a); f ? f.seek(c) : z(a, "seeksound"); return f } function Ga(a, c) { var f = u.getItem(a); f ? f.muted = c : z(a, "mutesound"); return f } function Y() { for (var a = u.getArray(), c = a.length, f; 0 <= --c;)(f = a[c]) && f.destroy() } function N() { if (f) { var a = u.getArray(), c = a.length, k, e; for (k = 0; k < c; k++)(e = a[k]) && !e.paused && (e.DATA.allpaused = !0, e.pause()) } } function O() {
        if (f) {
            var a = u.getArray(), c = a.length,
            k, e; for (k = 0; k < c; k++)(e = a[k]) && e.DATA && e.DATA.allpaused && (e.DATA.allpaused = !1, e.play())
        }
    } var D = new function () {
        var a = function () { this.init() }; a.prototype = {
            init: function () {
                var b = this || c; b._counter = 1E3; b._html5AudioPool = []; b.html5PoolSize = 10; b._codecs = {}; b._howls = []; b._muted = !1; b._volume = 1; b._canPlayEvent = "canplaythrough"; b._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null; b.masterGain = null; b.noAudio = !1; b.usingWebAudio = !0; b.autoSuspend = !0; b.ctx = null; b.autoUnlock = !0; b._setup();
                return b
            }, volume: function (b) { var g = this || c; b = parseFloat(b); g.ctx || p(); if ("undefined" !== typeof b && 0 <= b && 1 >= b) { g._volume = b; if (g._muted) return g; g.usingWebAudio && g.masterGain.gain.setValueAtTime(b, c.ctx.currentTime); for (var a = 0; a < g._howls.length; a++)if (!g._howls[a]._webAudio) for (var e = g._howls[a]._getSoundIds(), r = 0; r < e.length; r++) { var y = g._howls[a]._soundById(e[r]); y && y._node && (y._node.volume = y._volume * b) } return g } return g._volume }, mute: function (b) {
                var g = this || c; g.ctx || p(); g._muted = b; g.usingWebAudio &&
                    g.masterGain.gain.setValueAtTime(b ? 0 : g._volume, c.ctx.currentTime); for (var a = 0; a < g._howls.length; a++)if (!g._howls[a]._webAudio) for (var e = g._howls[a]._getSoundIds(), r = 0; r < e.length; r++) { var y = g._howls[a]._soundById(e[r]); y && y._node && (y._node.muted = b ? !0 : y._muted) } return g
            }, unload: function () { for (var b = this || c, g = b._howls.length - 1; 0 <= g; g--)b._howls[g].unload(); b.usingWebAudio && b.ctx && "undefined" !== typeof b.ctx.close && (b.ctx.close(), b.ctx = null, p()); return b }, codecs: function (b) {
                return (this || c)._codecs[b.replace(/^x-/,
                    "")]
            }, _setup: function () { var b = this || c; b.state = b.ctx ? b.ctx.state || "suspended" : "suspended"; b._autoSuspend(); if (!b.usingWebAudio) if ("undefined" !== typeof Audio) try { var g = new Audio; "undefined" === typeof g.oncanplaythrough && (b._canPlayEvent = "canplay") } catch (v) { b.noAudio = !0 } else b.noAudio = !0; try { g = new Audio, g.muted && (b.noAudio = !0) } catch (v) { } b.noAudio || b._setupCodecs(); return b }, _setupCodecs: function () {
                var b = this || c, g = null; try { g = "undefined" !== typeof Audio ? new Audio : null } catch (r) { return b } if (!g || "function" !==
                    typeof g.canPlayType) return b; var a = g.canPlayType("audio/mpeg;").replace(/^no$/, ""), e = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g); e = e && 33 > parseInt(e[0].split("/")[1], 10); b._codecs = {
                        mp3: !(e || !a && !g.canPlayType("audio/mp3;").replace(/^no$/, "")), mpeg: !!a, opus: !!g.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""), ogg: !!g.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), oga: !!g.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), wav: !!g.canPlayType('audio/wav; codecs="1"').replace(/^no$/,
                            ""), aac: !!g.canPlayType("audio/aac;").replace(/^no$/, ""), caf: !!g.canPlayType("audio/x-caf;").replace(/^no$/, ""), m4a: !!(g.canPlayType("audio/x-m4a;") || g.canPlayType("audio/m4a;") || g.canPlayType("audio/aac;")).replace(/^no$/, ""), mp4: !!(g.canPlayType("audio/x-mp4;") || g.canPlayType("audio/mp4;") || g.canPlayType("audio/aac;")).replace(/^no$/, ""), weba: !!g.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""), webm: !!g.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""), dolby: !!g.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,
                                ""), flac: !!(g.canPlayType("audio/x-flac;") || g.canPlayType("audio/flac;")).replace(/^no$/, "")
                    }; return b
            }, _unlockAudio: function () {
                var b = this || c; if (!b._audioUnlocked && b.ctx) {
                    b._audioUnlocked = !1; b.autoUnlock = !1; if (!b._mobileUnloaded && 44100 !== b.ctx.sampleRate && (b._mobileUnloaded = !0, b.unload(), !b || !b.ctx)) return; b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050); var g = function (a) {
                        for (a = 0; a < b.html5PoolSize; a++)try { var c = new Audio; c._unlocked = !0; b._releaseHtml5Audio(c) } catch (Ja) { b.noAudio = !0 } for (a = 0; a < b._howls.length; a++)if (!b._howls[a]._webAudio) {
                            c =
                            b._howls[a]._getSoundIds(); for (var v = 0; v < c.length; v++) { var e = b._howls[a]._soundById(c[v]); e && e._node && !e._node._unlocked && (e._node._unlocked = !0, e._node.load(), e._node.play()) }
                        } b._autoResume(); var f = b.ctx.createBufferSource(); f.buffer = b._scratchBuffer; f.connect(b.ctx.destination); "undefined" === typeof f.start ? f.noteOn(0) : f.start(0); "function" === typeof b.ctx.resume && b.ctx.resume(); f.onended = function () {
                            f.disconnect(0); b._audioUnlocked = !0; document.removeEventListener("touchstart", g, !0); document.removeEventListener("touchend",
                                g, !0); document.removeEventListener("click", g, !0); for (var a = 0; a < b._howls.length; a++)b._howls[a]._emit("unlock")
                        }
                    }; document.addEventListener("touchstart", g, !0); document.addEventListener("touchend", g, !0); document.addEventListener("click", g, !0); return b
                }
            }, _obtainHtml5Audio: function () { var b = this || c; if (b._html5AudioPool.length) return b._html5AudioPool.pop(); (b = (new Audio).play()) && "undefined" !== typeof Promise && (b instanceof Promise || "function" === typeof b.then) && b.catch(function () { }); return new Audio }, _releaseHtml5Audio: function (b) {
                var g =
                    this || c; b._unlocked && g._html5AudioPool.push(b); return g
            }, _autoSuspend: function () {
                var b = this; if (b.autoSuspend && b.ctx && "undefined" !== typeof b.ctx.suspend && c.usingWebAudio) {
                    for (var g = 0; g < b._howls.length; g++)if (b._howls[g]._webAudio) for (var a = 0; a < b._howls[g]._sounds.length; a++)if (!b._howls[g]._sounds[a]._paused) return b; b._suspendTimer && clearTimeout(b._suspendTimer); b._suspendTimer = setTimeout(function () {
                        if (b.autoSuspend) {
                            b._suspendTimer = null; b.state = "suspending"; var g = function () {
                                b.state = "suspended"; b._resumeAfterSuspend &&
                                    (delete b._resumeAfterSuspend, b._autoResume())
                            }; b.ctx.suspend().then(g, g)
                        }
                    }, 3E4); return b
                }
            }, _autoResume: function () {
                var b = this; if (b.ctx && "undefined" !== typeof b.ctx.resume && c.usingWebAudio) return "running" === b.state && "interrupted" !== b.ctx.state && b._suspendTimer ? (clearTimeout(b._suspendTimer), b._suspendTimer = null) : "suspended" === b.state || "running" === b.state && "interrupted" === b.ctx.state ? (b.ctx.resume().then(function () { b.state = "running"; for (var g = 0; g < b._howls.length; g++)b._howls[g]._emit("resume") }), b._suspendTimer &&
                    (clearTimeout(b._suspendTimer), b._suspendTimer = null)) : "suspending" === b.state && (b._resumeAfterSuspend = !0), b
            }
        }; var c = new a, f = function (b) { b.src && 0 !== b.src.length && this.init(b) }; f.prototype = {
            init: function (b) {
                var g = this; c.ctx || p(); g._autoplay = b.autoplay || !1; g._format = "string" !== typeof b.format ? b.format : [b.format]; g._html5 = b.html5 || !1; g._muted = b.mute || !1; g._loop = b.loop || !1; g._pool = b.pool || 5; g._preload = "boolean" === typeof b.preload ? b.preload : !0; g._rate = b.rate || 1; g._sprite = b.sprite || {}; g._src = "string" !== typeof b.src ?
                    b.src : [b.src]; g._volume = void 0 !== b.volume ? b.volume : 1; g._xhrWithCredentials = b.xhrWithCredentials || !1; g._duration = 0; g._state = "unloaded"; g._sounds = []; g._endTimers = {}; g._queue = []; g._playLock = !1; g._onend = b.onend ? [{ fn: b.onend }] : []; g._onfade = b.onfade ? [{ fn: b.onfade }] : []; g._onload = b.onload ? [{ fn: b.onload }] : []; g._onloaderror = b.onloaderror ? [{ fn: b.onloaderror }] : []; g._onplayerror = b.onplayerror ? [{ fn: b.onplayerror }] : []; g._onpause = b.onpause ? [{ fn: b.onpause }] : []; g._onplay = b.onplay ? [{ fn: b.onplay }] : []; g._onstop = b.onstop ?
                        [{ fn: b.onstop }] : []; g._onmute = b.onmute ? [{ fn: b.onmute }] : []; g._onvolume = b.onvolume ? [{ fn: b.onvolume }] : []; g._onrate = b.onrate ? [{ fn: b.onrate }] : []; g._onseek = b.onseek ? [{ fn: b.onseek }] : []; g._onunlock = b.onunlock ? [{ fn: b.onunlock }] : []; g._onresume = []; g._webAudio = c.usingWebAudio && !g._html5; "undefined" !== typeof c.ctx && c.ctx && c.autoUnlock && c._unlockAudio(); c._howls.push(g); g._autoplay && g._queue.push({ event: "play", action: function () { g.play() } }); g._preload && g.load(); return g
            }, load: function () {
                var b = null; if (c.noAudio) this._emit("loaderror",
                    null, "No audio support."); else {
                        "string" === typeof this._src && (this._src = [this._src]); for (var g = 0; g < this._src.length; g++) { if (this._format && this._format[g]) var a = this._format[g]; else { var f = this._src[g]; if ("string" !== typeof f) { this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring."); continue } (a = /^data:audio\/([^;,]+);/i.exec(f)) || (a = /\.([^.]+)$/.exec(f.split("?", 1)[0])); a && (a = a[1].toLowerCase()) } if (a && c.codecs(a)) { b = this._src[g]; break } } if (b) return this._src = b, this._state =
                            "loading", "https:" === window.location.protocol && "http:" === b.slice(0, 5) && (this._html5 = !0, this._webAudio = !1), new e(this), this._webAudio && m(this), this; this._emit("loaderror", null, "No codec support for selected audio sources.")
                }
            }, play: function (b, g) {
                var a = this, e = null; if ("number" === typeof b) e = b, b = null; else {
                    if ("string" === typeof b && "loaded" === a._state && !a._sprite[b]) return null; if ("undefined" === typeof b && (b = "__default", !a._playLock)) {
                        for (var r = 0, f = 0; f < a._sounds.length; f++)a._sounds[f]._paused && !a._sounds[f]._ended &&
                            (r++, e = a._sounds[f]._id); 1 === r ? b = null : e = null
                    }
                } var d = e ? a._soundById(e) : a._inactiveSound(); if (!d) return null; e && !b && (b = d._sprite || "__default"); if ("loaded" !== a._state) { d._sprite = b; d._ended = !1; var h = d._id; a._queue.push({ event: "play", action: function () { a.play(h) } }); return h } if (e && !d._paused) return g || a._loadQueue("play"), d._id; a._webAudio && c._autoResume(); var k = Math.max(0, 0 < d._seek ? d._seek : a._sprite[b][0] / 1E3), l = Math.max(0, (a._sprite[b][0] + a._sprite[b][1]) / 1E3 - k), m = 1E3 * l / Math.abs(d._rate), n = a._sprite[b][0] /
                    1E3, p = (a._sprite[b][0] + a._sprite[b][1]) / 1E3; d._sprite = b; d._ended = !1; var q = function () { d._paused = !1; d._seek = k; d._start = n; d._stop = p; d._loop = !(!d._loop && !a._sprite[b][2]) }; if (k >= p) a._ended(d); else {
                        var t = d._node; if (a._webAudio) e = function () {
                            a._playLock = !1; q(); a._refreshBuffer(d); t.gain.setValueAtTime(d._muted || a._muted ? 0 : d._volume, c.ctx.currentTime); d._playStart = c.ctx.currentTime; "undefined" === typeof t.bufferSource.start ? d._loop ? t.bufferSource.noteGrainOn(0, k, 86400) : t.bufferSource.noteGrainOn(0, k, l) : d._loop ?
                                t.bufferSource.start(0, k, 86400) : t.bufferSource.start(0, k, l); Infinity !== m && (a._endTimers[d._id] = setTimeout(a._ended.bind(a, d), m)); g || setTimeout(function () { a._emit("play", d._id); a._loadQueue() }, 0)
                        }, "running" === c.state && "interrupted" !== c.ctx.state ? e() : (a._playLock = !0, a.once("resume", e), a._clearTimer(d._id)); else {
                            var u = function () {
                                t.currentTime = k; t.muted = d._muted || a._muted || c._muted || t.muted; t.volume = d._volume * c.volume(); t.playbackRate = d._rate; try {
                                    var e = t.play(); e && "undefined" !== typeof Promise && (e instanceof
                                        Promise || "function" === typeof e.then) ? (a._playLock = !0, q(), e.then(function () { a._playLock = !1; t._unlocked = !0; g || (a._emit("play", d._id), a._loadQueue()) }).catch(function () { a._playLock = !1; a._emit("playerror", d._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."); d._ended = !0; d._paused = !0 })) : g || (a._playLock = !1, q(), a._emit("play", d._id), a._loadQueue()); t.playbackRate = d._rate; t.paused ? a._emit("playerror", d._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.") :
                                            "__default" !== b || d._loop ? a._endTimers[d._id] = setTimeout(a._ended.bind(a, d), m) : (a._endTimers[d._id] = function () { a._ended(d); t.removeEventListener("ended", a._endTimers[d._id], !1) }, t.addEventListener("ended", a._endTimers[d._id], !1))
                                } catch (Ia) { a._emit("playerror", d._id, Ia) }
                            }; "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === t.src && (t.src = a._src, t.load()); e = window && window.ejecta || !t.readyState && c._navigator.isCocoonJS; if (3 <= t.readyState || e) u(); else {
                                a._playLock = !0;
                                var w = function () { u(); t.removeEventListener(c._canPlayEvent, w, !1) }; t.addEventListener(c._canPlayEvent, w, !1); a._clearTimer(d._id)
                            }
                        } return d._id
                    }
            }, pause: function (b, a) {
                var g = this; if ("loaded" !== g._state || g._playLock) return g._queue.push({ event: "pause", action: function () { g.pause(b) } }), g; for (var c = g._getSoundIds(b), e = 0; e < c.length; e++) {
                    g._clearTimer(c[e]); var d = g._soundById(c[e]); if (d && !d._paused && (d._seek = g.seek(c[e]), d._rateSeek = 0, d._paused = !0, g._stopFade(c[e]), d._node)) if (g._webAudio) {
                        if (!d._node.bufferSource) continue;
                        "undefined" === typeof d._node.bufferSource.stop ? d._node.bufferSource.noteOff(0) : d._node.bufferSource.stop(0); g._cleanBuffer(d._node)
                    } else isNaN(d._node.duration) && Infinity !== d._node.duration || d._node.pause(); a || g._emit("pause", d ? d._id : null)
                } return g
            }, stop: function (b, a) {
                var g = this; if ("loaded" !== g._state || g._playLock) return g._queue.push({ event: "stop", action: function () { g.stop(b) } }), g; for (var c = g._getSoundIds(b), e = 0; e < c.length; e++) {
                    g._clearTimer(c[e]); var d = g._soundById(c[e]); d && (d._seek = d._start || 0,
                        d._rateSeek = 0, d._paused = !0, d._ended = !0, g._stopFade(c[e]), d._node && (g._webAudio ? d._node.bufferSource && ("undefined" === typeof d._node.bufferSource.stop ? d._node.bufferSource.noteOff(0) : d._node.bufferSource.stop(0), g._cleanBuffer(d._node)) : isNaN(d._node.duration) && Infinity !== d._node.duration || (d._node.currentTime = d._start || 0, d._node.pause(), Infinity === d._node.duration && g._clearSound(d._node))), a || g._emit("stop", d._id))
                } return g
            }, mute: function (b, a) {
                var g = this; if ("loaded" !== g._state || g._playLock) return g._queue.push({
                    event: "mute",
                    action: function () { g.mute(b, a) }
                }), g; if ("undefined" === typeof a) if ("boolean" === typeof b) g._muted = b; else return g._muted; for (var e = g._getSoundIds(a), d = 0; d < e.length; d++) { var f = g._soundById(e[d]); f && (f._muted = b, f._interval && g._stopFade(f._id), g._webAudio && f._node ? f._node.gain.setValueAtTime(b ? 0 : f._volume, c.ctx.currentTime) : f._node && (f._node.muted = c._muted ? !0 : b), g._emit("mute", f._id)) } return g
            }, volume: function () {
                var b = this, a = arguments, e, d; if (0 === a.length) return b._volume; 1 === a.length || 2 === a.length && "undefined" ===
                    typeof a[1] ? 0 <= b._getSoundIds().indexOf(a[0]) ? d = parseInt(a[0], 10) : e = parseFloat(a[0]) : 2 <= a.length && (e = parseFloat(a[0]), d = parseInt(a[1], 10)); var f; if ("undefined" !== typeof e && 0 <= e && 1 >= e) {
                        if ("loaded" !== b._state || b._playLock) { d = b._getSoundIds(d); for (var h = 0; h < d.length; h++)if (f = b._soundById(d[h])) f._volume = e; b._queue.push({ event: "volume", action: function () { b.volume.apply(b, a) } }); return b } "undefined" === typeof d && (b._volume = e); d = b._getSoundIds(d); for (h = 0; h < d.length; h++)if (f = b._soundById(d[h])) f._volume = e,
                            a[2] || b._stopFade(d[h]), b._webAudio && f._node && !f._muted ? f._node.gain.setValueAtTime(e, c.ctx.currentTime) : f._node && !f._muted && (f._node.volume = e * c.volume()), b._emit("volume", f._id)
                    } else return (f = d ? b._soundById(d) : b._sounds[0]) ? f._volume : 0; return b
            }, fade: function (b, a, e, d) {
                var g = this; if ("loaded" !== g._state || g._playLock) return g._queue.push({ event: "fade", action: function () { g.fade(b, a, e, d) } }), g; b = parseFloat(b); a = parseFloat(a); e = parseFloat(e); g.volume(b, d); for (var f = g._getSoundIds(d), v = 0; v < f.length; v++) {
                    var h =
                        g._soundById(f[v]); if (h) { d || g._stopFade(f[v]); if (g._webAudio && !h._muted) { var k = c.ctx.currentTime, Ha = k + e / 1E3; h._volume = b; h._node.gain.setValueAtTime(b, k); h._node.gain.linearRampToValueAtTime(a, Ha) } g._startFadeInterval(h, b, a, e, f[v], "undefined" === typeof d) }
                } return g
            }, _startFadeInterval: function (b, a, c, e, d, f) {
                var g = this, r = a, v = c - a; d = Math.abs(v / .01); d = Math.max(4, 0 < d ? e / d : e); var h = Date.now(); b._fadeTo = c; b._interval = setInterval(function () {
                    var d = (Date.now() - h) / e; h = Date.now(); r += v * d; r = Math.max(0, r); r = Math.min(1,
                        r); r = Math.round(100 * r) / 100; g._webAudio ? b._volume = r : g.volume(r, b._id, !0); f && (g._volume = r); if (c < a && r <= c || c > a && r >= c) clearInterval(b._interval), b._interval = null, b._fadeTo = null, g.volume(c, b._id), g._emit("fade", b._id)
                }, d)
            }, _stopFade: function (b) { var a = this._soundById(b); a && a._interval && (this._webAudio && a._node.gain.cancelScheduledValues(c.ctx.currentTime), clearInterval(a._interval), a._interval = null, this.volume(a._fadeTo, b), a._fadeTo = null, this._emit("fade", b)); return this }, loop: function () {
                var b = arguments,
                a; if (0 === b.length) return this._loop; if (1 === b.length) if ("boolean" === typeof b[0]) this._loop = a = b[0]; else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop : !1; else if (2 === b.length) { a = b[0]; var c = parseInt(b[1], 10) } c = this._getSoundIds(c); for (var d = 0; d < c.length; d++)if (b = this._soundById(c[d])) if (b._loop = a, this._webAudio && b._node && b._node.bufferSource && (b._node.bufferSource.loop = a)) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop; return this
            }, rate: function () {
                var b = this, a = arguments,
                d; if (0 === a.length) var e = b._sounds[0]._id; else 1 === a.length ? 0 <= b._getSoundIds().indexOf(a[0]) ? e = parseInt(a[0], 10) : d = parseFloat(a[0]) : 2 === a.length && (d = parseFloat(a[0]), e = parseInt(a[1], 10)); var f; if ("number" === typeof d) {
                    if ("loaded" !== b._state || b._playLock) return b._queue.push({ event: "rate", action: function () { b.rate.apply(b, a) } }), b; "undefined" === typeof e && (b._rate = d); e = b._getSoundIds(e); for (var h = 0; h < e.length; h++)if (f = b._soundById(e[h])) {
                        b.playing(e[h]) && (f._rateSeek = b.seek(e[h]), f._playStart = b._webAudio ?
                            c.ctx.currentTime : f._playStart); f._rate = d; b._webAudio && f._node && f._node.bufferSource ? f._node.bufferSource.playbackRate.setValueAtTime(d, c.ctx.currentTime) : f._node && (f._node.playbackRate = d); var k = b.seek(e[h]); k = 1E3 * ((b._sprite[f._sprite][0] + b._sprite[f._sprite][1]) / 1E3 - k) / Math.abs(f._rate); if (b._endTimers[e[h]] || !f._paused) b._clearTimer(e[h]), b._endTimers[e[h]] = setTimeout(b._ended.bind(b, f), k); b._emit("rate", f._id)
                    }
                } else return (f = b._soundById(e)) ? f._rate : b._rate; return b
            }, seek: function () {
                var b = this,
                a = arguments; if (0 === a.length) var d = b._sounds[0]._id; else if (1 === a.length) if (0 <= b._getSoundIds().indexOf(a[0])) d = parseInt(a[0], 10); else { if (b._sounds.length) { d = b._sounds[0]._id; var e = parseFloat(a[0]) } } else 2 === a.length && (e = parseFloat(a[0]), d = parseInt(a[1], 10)); if ("undefined" === typeof d) return b; if ("loaded" !== b._state || b._playLock) return b._queue.push({ event: "seek", action: function () { b.seek.apply(b, a) } }), b; var f = b._soundById(d); if (f) if ("number" === typeof e && 0 <= e) {
                    var h = b.playing(d); h && b.pause(d, !0); f._seek =
                        e; f._ended = !1; b._clearTimer(d); b._webAudio || !f._node || isNaN(f._node.duration) || (f._node.currentTime = e); var k = function () { b._emit("seek", d); h && b.play(d, !0) }; if (h && !b._webAudio) { var l = function () { b._playLock ? setTimeout(l, 0) : k() }; setTimeout(l, 0) } else k()
                } else return b._webAudio ? (e = b.playing(d) ? c.ctx.currentTime - f._playStart : 0, f._seek + ((f._rateSeek ? f._rateSeek - f._seek : 0) + e * Math.abs(f._rate))) : f._node.currentTime; return b
            }, playing: function (b) {
                if ("number" === typeof b) return (b = this._soundById(b)) ? !b._paused :
                    !1; for (b = 0; b < this._sounds.length; b++)if (!this._sounds[b]._paused) return !0; return !1
            }, duration: function (b) { var a = this._duration; if (b = this._soundById(b)) { if (!this._sprite[b._sprite]) return 0; a = this._sprite[b._sprite][1] / 1E3 } return a }, state: function () { return this._state }, unload: function () {
                for (var b = this._sounds, a = 0; a < b.length; a++)b[a]._paused || this.stop(b[a]._id), this._webAudio || (this._clearSound(b[a]._node), b[a]._node.removeEventListener("error", b[a]._errorFn, !1), b[a]._node.removeEventListener(c._canPlayEvent,
                    b[a]._loadFn, !1), c._releaseHtml5Audio(b[a]._node)), delete b[a]._node, this._clearTimer(b[a]._id); a = c._howls.indexOf(this); 0 <= a && c._howls.splice(a, 1); b = !0; for (a = 0; a < c._howls.length; a++)if (c._howls[a]._src === this._src || 0 <= this._src.indexOf(c._howls[a]._src)) { b = !1; break } l && b && delete l[this._src]; c.noAudio = !1; this._state = "unloaded"; this._sounds = []; return null
            }, on: function (b, a, c, d) { b = this["_on" + b]; "function" === typeof a && b.push(d ? { id: c, fn: a, once: d } : { id: c, fn: a }); return this }, off: function (b, a, c) {
                var g = this["_on" +
                    b]; "number" === typeof a && (c = a, a = null); if (a || c) for (b = 0; b < g.length; b++) { var d = c === g[b].id; if (a === g[b].fn && d || !a && d) { g.splice(b, 1); break } } else if (b) this["_on" + b] = []; else for (a = Object.keys(this), b = 0; b < a.length; b++)0 === a[b].indexOf("_on") && Array.isArray(this[a[b]]) && (this[a[b]] = []); return this
            }, once: function (b, a, c) { this.on(b, a, c, 1); return this }, _emit: function (b, a, c) {
                for (var g = this["_on" + b], d = g.length - 1; 0 <= d; d--)g[d].id && g[d].id !== a && "load" !== b || (setTimeout(function (b) { b.call(this, a, c) }.bind(this, g[d].fn),
                    0), g[d].once && this.off(b, g[d].fn, g[d].id)); this._loadQueue(b); return this
            }, _loadQueue: function (b) { if (0 < this._queue.length) { var a = this._queue[0]; a.event === b && (this._queue.shift(), this._loadQueue()); b || a.action() } return this }, _ended: function (b) {
                var a = b._sprite; if (!this._webAudio && b._node && !b._node.paused && !b._node.ended && b._node.currentTime < b._stop) return setTimeout(this._ended.bind(this, b), 100), this; a = !(!b._loop && !this._sprite[a][2]); this._emit("end", b._id); !this._webAudio && a && this.stop(b._id, !0).play(b._id);
                if (this._webAudio && a) { this._emit("play", b._id); b._seek = b._start || 0; b._rateSeek = 0; b._playStart = c.ctx.currentTime; var d = 1E3 * (b._stop - b._start) / Math.abs(b._rate); this._endTimers[b._id] = setTimeout(this._ended.bind(this, b), d) } this._webAudio && !a && (b._paused = !0, b._ended = !0, b._seek = b._start || 0, b._rateSeek = 0, this._clearTimer(b._id), this._cleanBuffer(b._node), c._autoSuspend()); this._webAudio || a || this.stop(b._id, !0); return this
            }, _clearTimer: function (b) {
                if (this._endTimers[b]) {
                    if ("function" !== typeof this._endTimers[b]) clearTimeout(this._endTimers[b]);
                    else { var a = this._soundById(b); a && a._node && a._node.removeEventListener("ended", this._endTimers[b], !1) } delete this._endTimers[b]
                } return this
            }, _soundById: function (b) { for (var a = 0; a < this._sounds.length; a++)if (b === this._sounds[a]._id) return this._sounds[a]; return null }, _inactiveSound: function () { this._drain(); for (var b = 0; b < this._sounds.length; b++)if (this._sounds[b]._ended) return this._sounds[b].reset(); return new e(this) }, _drain: function () {
                var b = this._pool, a = 0, c; if (!(this._sounds.length < b)) {
                    for (c = 0; c < this._sounds.length; c++)this._sounds[c]._ended &&
                        a++; for (c = this._sounds.length - 1; 0 <= c && !(a <= b); c--)this._sounds[c]._ended && (this._webAudio && this._sounds[c]._node && this._sounds[c]._node.disconnect(0), this._sounds.splice(c, 1), a--)
                }
            }, _getSoundIds: function (b) { if ("undefined" === typeof b) { b = []; for (var a = 0; a < this._sounds.length; a++)b.push(this._sounds[a]._id); return b } return [b] }, _refreshBuffer: function (b) {
                b._node.bufferSource = c.ctx.createBufferSource(); b._node.bufferSource.buffer = l[this._src]; b._panner ? b._node.bufferSource.connect(b._panner) : b._node.bufferSource.connect(b._node);
                if (b._node.bufferSource.loop = b._loop) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop || 0; b._node.bufferSource.playbackRate.setValueAtTime(b._rate, c.ctx.currentTime); return this
            }, _cleanBuffer: function (b) { var a = c._navigator && 0 <= c._navigator.vendor.indexOf("Apple"); if (c._scratchBuffer && b.bufferSource && (b.bufferSource.onended = null, b.bufferSource.disconnect(0), a)) try { b.bufferSource.buffer = c._scratchBuffer } catch (v) { } b.bufferSource = null; return this }, _clearSound: function (b) {
                /MSIE |Trident\//.test(c._navigator &&
                    c._navigator.userAgent) || (b.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
            }
        }; var e = function (b) { this._parent = b; this.init() }; e.prototype = {
            init: function () { var b = this._parent; this._muted = b._muted; this._loop = b._loop; this._volume = b._volume; this._rate = b._rate; this._seek = 0; this._ended = this._paused = !0; this._sprite = "__default"; this._id = ++c._counter; b._sounds.push(this); this.create(); return this }, create: function () {
                var b = this._parent, a = c._muted || this._muted || this._parent._muted ?
                    0 : this._volume; b._webAudio ? (this._node = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), this._node.gain.setValueAtTime(a, c.ctx.currentTime), this._node.paused = !0, this._node.connect(c.masterGain)) : c.noAudio || (this._node = c._obtainHtml5Audio(), this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(c._canPlayEvent, this._loadFn, !1), this._node.src = b._src, this._node.preload =
                        "auto", this._node.volume = a * c.volume(), this._node.load()); return this
            }, reset: function () { var b = this._parent; this._muted = b._muted; this._loop = b._loop; this._volume = b._volume; this._rate = b._rate; this._rateSeek = this._seek = 0; this._ended = this._paused = !0; this._sprite = "__default"; this._id = ++c._counter; return this }, _errorListener: function () { this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0); this._node.removeEventListener("error", this._errorFn, !1) }, _loadListener: function () {
                var b =
                    this._parent; b._duration = Math.ceil(10 * this._node.duration) / 10; 0 === Object.keys(b._sprite).length && (b._sprite = { __default: [0, 1E3 * b._duration] }); "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue()); this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1)
            }
        }; var l = {}, m = function (b) {
            var a = b._src; if (l[a]) b._duration = l[a].duration, d(b); else if (/^data:[^;]+;base64,/.test(a)) {
                for (var c = atob(a.split(",")[1]), e = new Uint8Array(c.length), f = 0; f < c.length; ++f)e[f] = c.charCodeAt(f); h(e.buffer,
                    b)
            } else { var k = new XMLHttpRequest; k.open("GET", a, !0); k.withCredentials = b._xhrWithCredentials; k.responseType = "arraybuffer"; k.onload = function () { var a = (k.status + "")[0]; "0" !== a && "2" !== a && "3" !== a ? b._emit("loaderror", null, "Failed loading audio file with status: " + k.status + ".") : h(k.response, b) }; k.onerror = function () { b._webAudio && (b._html5 = !0, b._webAudio = !1, b._sounds = [], delete l[a], b.load()) }; n(k) }
        }, n = function (b) { try { b.send() } catch (g) { b.onerror() } }, h = function (b, a) {
            var g = function () {
                a._emit("loaderror", null,
                    "Decoding audio data failed.")
            }, e = function (b) { b && 0 < a._sounds.length ? (l[a._src] = b, d(a, b)) : g() }; "undefined" !== typeof Promise && 1 === c.ctx.decodeAudioData.length ? c.ctx.decodeAudioData(b).then(e).catch(g) : c.ctx.decodeAudioData(b, e, g)
        }, d = function (b, a) { a && !b._duration && (b._duration = a.duration); 0 === Object.keys(b._sprite).length && (b._sprite = { __default: [0, 1E3 * b._duration] }); "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue()) }, p = function () {
            if (c.usingWebAudio) {
                try {
                    "undefined" !== typeof AudioContext ?
                    c.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? c.ctx = new webkitAudioContext : c.usingWebAudio = !1
                } catch (v) { c.usingWebAudio = !1 } c.ctx || (c.usingWebAudio = !1); var b = /iP(hone|od|ad)/.test(c._navigator && c._navigator.platform), a = c._navigator && c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/); a = a ? parseInt(a[1], 10) : null; b && a && 9 > a && (b = /safari/.test(c._navigator && c._navigator.userAgent.toLowerCase()), c._navigator && c._navigator.standalone && !b || c._navigator && !c._navigator.standalone && !b) && (c.usingWebAudio =
                    !1); c.usingWebAudio && (c.masterGain = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), c.masterGain.gain.setValueAtTime(c._muted ? 0 : c._volume, c.ctx.currentTime), c.masterGain.connect(c.ctx.destination)); c._setup()
            }
        }; a.prototype._pos = [0, 0, 0]; a.prototype._orientation = [0, 0, -1, 0, 1, 0]; a.prototype.stereo = function (b) { if (!this.ctx || !this.ctx.listener) return this; for (var a = this._howls.length - 1; 0 <= a; a--)this._howls[a].stereo(b); return this }; a.prototype.pos = function (b, a, d) {
            if (!this.ctx ||
                !this.ctx.listener) return this; a = "number" !== typeof a ? this._pos[1] : a; d = "number" !== typeof d ? this._pos[2] : d; if ("number" === typeof b) this._pos = [b, a, d], "undefined" !== typeof this.ctx.listener.positionX ? (this.ctx.listener.positionX.setTargetAtTime(this._pos[0], c.ctx.currentTime, .1), this.ctx.listener.positionY.setTargetAtTime(this._pos[1], c.ctx.currentTime, .1), this.ctx.listener.positionZ.setTargetAtTime(this._pos[2], c.ctx.currentTime, .1)) : this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]);
            else return this._pos; return this
        }; a.prototype.orientation = function (b, a, d, e, f, h) {
            if (!this.ctx || !this.ctx.listener) return this; var g = this._orientation; a = "number" !== typeof a ? g[1] : a; d = "number" !== typeof d ? g[2] : d; e = "number" !== typeof e ? g[3] : e; f = "number" !== typeof f ? g[4] : f; h = "number" !== typeof h ? g[5] : h; if ("number" === typeof b) this._orientation = [b, a, d, e, f, h], "undefined" !== typeof this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(b, c.ctx.currentTime, .1), this.ctx.listener.forwardY.setTargetAtTime(a,
                c.ctx.currentTime, .1), this.ctx.listener.forwardZ.setTargetAtTime(d, c.ctx.currentTime, .1), this.ctx.listener.upX.setTargetAtTime(e, c.ctx.currentTime, .1), this.ctx.listener.upY.setTargetAtTime(f, c.ctx.currentTime, .1), this.ctx.listener.upZ.setTargetAtTime(h, c.ctx.currentTime, .1)) : this.ctx.listener.setOrientation(b, a, d, e, f, h); else return g; return this
        }; f.prototype.init = function (b) {
            return function (a) {
                this._orientation = a.orientation || [1, 0, 0]; this._stereo = a.stereo || null; this._pos = a.pos || null; this._pannerAttr =
                {
                    coneInnerAngle: "undefined" !== typeof a.coneInnerAngle ? a.coneInnerAngle : 360, coneOuterAngle: "undefined" !== typeof a.coneOuterAngle ? a.coneOuterAngle : 360, coneOuterGain: "undefined" !== typeof a.coneOuterGain ? a.coneOuterGain : 0, distanceModel: "undefined" !== typeof a.distanceModel ? a.distanceModel : "inverse", maxDistance: "undefined" !== typeof a.maxDistance ? a.maxDistance : 1E4, panningModel: "undefined" !== typeof a.panningModel ? a.panningModel : "HRTF", refDistance: "undefined" !== typeof a.refDistance ? a.refDistance : 1, rolloffFactor: "undefined" !==
                        typeof a.rolloffFactor ? a.rolloffFactor : 1
                }; this._onstereo = a.onstereo ? [{ fn: a.onstereo }] : []; this._onpos = a.onpos ? [{ fn: a.onpos }] : []; this._onorientation = a.onorientation ? [{ fn: a.onorientation }] : []; return b.call(this, a)
            }
        }(f.prototype.init); f.prototype.stereo = function (b, a) {
            var g = this; if (!g._webAudio) return g; if ("loaded" !== g._state) return g._queue.push({ event: "stereo", action: function () { setTimeout(function () { g.stereo(b, a) }, 0) } }), g; var d = "undefined" === typeof c.ctx.createStereoPanner ? "spatial" : "stereo"; if ("undefined" ===
                typeof a) if ("number" === typeof b) g._stereo = b, g._pos = [b, 0, 0]; else return g._stereo; for (var e = g._getSoundIds(a), f = 0; f < e.length; f++) {
                    var h = g._soundById(e[f]); if (h) if ("number" === typeof b) h._stereo = b, h._pos = [b, 0, 0], h._node && (h._pannerAttr.panningModel = "equalpower", h._panner && h._panner.pan || q(h, d), "spatial" === d ? "undefined" !== typeof h._panner.positionX ? (h._panner.positionX.setValueAtTime(b, c.ctx.currentTime), h._panner.positionY.setValueAtTime(0, c.ctx.currentTime), h._panner.positionZ.setValueAtTime(0, c.ctx.currentTime)) :
                        (-1 > b ? b = -1 : 1 < b && (b = 1), h._panner.setPosition(b, 0, 1 - Math.abs(b))) : h._panner.pan.setValueAtTime(b, c.ctx.currentTime)), g._emit("stereo", h._id); else return h._stereo
                } return g
        }; f.prototype.pos = function (a, g, d, e) {
            var b = this; if (!b._webAudio) return b; if ("loaded" !== b._state) return b._queue.push({ event: "pos", action: function () { b.pos(a, g, d, e) } }), b; g = "number" !== typeof g ? 0 : g; d = "number" !== typeof d ? -.5 : d; if ("undefined" === typeof e) if ("number" === typeof a) b._pos = [a, g, d]; else return b._pos; for (var f = b._getSoundIds(e),
                h = 0; h < f.length; h++) { var k = b._soundById(f[h]); if (k) if ("number" === typeof a) k._pos = [a, g, d], k._node && (k._panner && !k._panner.pan || q(k, "spatial"), "undefined" !== typeof k._panner.positionX ? (k._panner.positionX.setValueAtTime(a, c.ctx.currentTime), k._panner.positionY.setValueAtTime(g, c.ctx.currentTime), k._panner.positionZ.setValueAtTime(d, c.ctx.currentTime)) : k._panner.setPosition(a, g, d)), b._emit("pos", k._id); else return k._pos } return b
        }; f.prototype.orientation = function (a, g, d, e) {
            var b = this; if (!b._webAudio) return b;
            if ("loaded" !== b._state) return b._queue.push({ event: "orientation", action: function () { b.orientation(a, g, d, e) } }), b; g = "number" !== typeof g ? b._orientation[1] : g; d = "number" !== typeof d ? b._orientation[2] : d; if ("undefined" === typeof e) if ("number" === typeof a) b._orientation = [a, g, d]; else return b._orientation; for (var f = b._getSoundIds(e), h = 0; h < f.length; h++) {
                var k = b._soundById(f[h]); if (k) if ("number" === typeof a) k._orientation = [a, g, d], k._node && (k._panner || (k._pos || (k._pos = b._pos || [0, 0, -.5]), q(k, "spatial")), "undefined" !==
                    typeof k._panner.orientationX ? (k._panner.orientationX.setValueAtTime(a, c.ctx.currentTime), k._panner.orientationY.setValueAtTime(g, c.ctx.currentTime), k._panner.orientationZ.setValueAtTime(d, c.ctx.currentTime)) : k._panner.setOrientation(a, g, d)), b._emit("orientation", k._id); else return k._orientation
            } return b
        }; f.prototype.pannerAttr = function () {
            var a = arguments; if (!this._webAudio) return this; if (0 === a.length) return this._pannerAttr; if (1 === a.length) if ("object" === typeof a[0]) {
                var c = a[0]; "undefined" === typeof d &&
                    (c.pannerAttr || (c.pannerAttr = { coneInnerAngle: c.coneInnerAngle, coneOuterAngle: c.coneOuterAngle, coneOuterGain: c.coneOuterGain, distanceModel: c.distanceModel, maxDistance: c.maxDistance, refDistance: c.refDistance, rolloffFactor: c.rolloffFactor, panningModel: c.panningModel }), this._pannerAttr = {
                        coneInnerAngle: "undefined" !== typeof c.pannerAttr.coneInnerAngle ? c.pannerAttr.coneInnerAngle : this._coneInnerAngle, coneOuterAngle: "undefined" !== typeof c.pannerAttr.coneOuterAngle ? c.pannerAttr.coneOuterAngle : this._coneOuterAngle,
                        coneOuterGain: "undefined" !== typeof c.pannerAttr.coneOuterGain ? c.pannerAttr.coneOuterGain : this._coneOuterGain, distanceModel: "undefined" !== typeof c.pannerAttr.distanceModel ? c.pannerAttr.distanceModel : this._distanceModel, maxDistance: "undefined" !== typeof c.pannerAttr.maxDistance ? c.pannerAttr.maxDistance : this._maxDistance, refDistance: "undefined" !== typeof c.pannerAttr.refDistance ? c.pannerAttr.refDistance : this._refDistance, rolloffFactor: "undefined" !== typeof c.pannerAttr.rolloffFactor ? c.pannerAttr.rolloffFactor :
                            this._rolloffFactor, panningModel: "undefined" !== typeof c.pannerAttr.panningModel ? c.pannerAttr.panningModel : this._panningModel
                    })
            } else return (a = this._soundById(parseInt(a[0], 10))) ? a._pannerAttr : this._pannerAttr; else if (2 === a.length) { c = a[0]; var d = parseInt(a[1], 10) } d = this._getSoundIds(d); for (var e = 0; e < d.length; e++)if (a = this._soundById(d[e])) {
                var f = a._pannerAttr; f = {
                    coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : f.coneInnerAngle, coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ?
                        c.coneOuterAngle : f.coneOuterAngle, coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : f.coneOuterGain, distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : f.distanceModel, maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : f.maxDistance, refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : f.refDistance, rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : f.rolloffFactor, panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : f.panningModel
                };
                var h = a._panner; h ? (h.coneInnerAngle = f.coneInnerAngle, h.coneOuterAngle = f.coneOuterAngle, h.coneOuterGain = f.coneOuterGain, h.distanceModel = f.distanceModel, h.maxDistance = f.maxDistance, h.refDistance = f.refDistance, h.rolloffFactor = f.rolloffFactor, h.panningModel = f.panningModel) : (a._pos || (a._pos = this._pos || [0, 0, -.5]), q(a, "spatial"))
            } return this
        }; e.prototype.init = function (a) {
            return function () {
                var b = this._parent; this._orientation = b._orientation; this._stereo = b._stereo; this._pos = b._pos; this._pannerAttr = b._pannerAttr;
                a.call(this); this._stereo ? b.stereo(this._stereo) : this._pos && b.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
            }
        }(e.prototype.init); e.prototype.reset = function (a) { return function () { var b = this._parent; this._orientation = b._orientation; this._stereo = b._stereo; this._pos = b._pos; this._pannerAttr = b._pannerAttr; this._stereo ? b.stereo(this._stereo) : this._pos ? b.pos(this._pos[0], this._pos[1], this._pos[2], this._id) : this._panner && (this._panner.disconnect(0), this._panner = void 0, b._refreshBuffer(this)); return a.call(this) } }(e.prototype.reset);
        var q = function (a, d) {
            "spatial" === (d || "spatial") ? (a._panner = c.ctx.createPanner(), a._panner.coneInnerAngle = a._pannerAttr.coneInnerAngle, a._panner.coneOuterAngle = a._pannerAttr.coneOuterAngle, a._panner.coneOuterGain = a._pannerAttr.coneOuterGain, a._panner.distanceModel = a._pannerAttr.distanceModel, a._panner.maxDistance = a._pannerAttr.maxDistance, a._panner.refDistance = a._pannerAttr.refDistance, a._panner.rolloffFactor = a._pannerAttr.rolloffFactor, a._panner.panningModel = a._pannerAttr.panningModel, "undefined" !==
                typeof a._panner.positionX ? (a._panner.positionX.setValueAtTime(a._pos[0], c.ctx.currentTime), a._panner.positionY.setValueAtTime(a._pos[1], c.ctx.currentTime), a._panner.positionZ.setValueAtTime(a._pos[2], c.ctx.currentTime)) : a._panner.setPosition(a._pos[0], a._pos[1], a._pos[2]), "undefined" !== typeof a._panner.orientationX ? (a._panner.orientationX.setValueAtTime(a._orientation[0], c.ctx.currentTime), a._panner.orientationY.setValueAtTime(a._orientation[1], c.ctx.currentTime), a._panner.orientationZ.setValueAtTime(a._orientation[2],
                    c.ctx.currentTime)) : a._panner.setOrientation(a._orientation[0], a._orientation[1], a._orientation[2])) : (a._panner = c.ctx.createStereoPanner(), a._panner.pan.setValueAtTime(a._stereo, c.ctx.currentTime)); a._panner.connect(a._node); a._paused || a._parent.pause(a._id, !0).play(a._id, !0)
        }; this.newSound = function (a) { return new f(a) }; this.cameraUpdate = function (a, d, e, f, h, k, l, m, n) { var b = V * G; c.pos(a * b, d * b, e * b); c.orientation(f, h, k, l, m, n) }; this.setAutoUnlock = function (a) { c.autoUnlock = a }; this.setGlobalVolume = function (a,
            d) { c.volume(a); c.mute(d) }
    }, f = null, x = null, C = null, V = .001, J = "", H = 1, I = !1, G = 1, E = !0, M = !0, K = "simple", u = null; this.registerplugin = function (a, c, k) {
        f = a; x = k; C = f.device; "2019-09-17" > f.build ? f.trace(3, "Soundinterface Plugin - too old krpano version, min. version is 1.20.1!") : f.soundinterface || (f.soundinterface = k, f.autosound = null, u = f.createarray("sound"), x.keep = !0, x.registerattribute("rootpath", J, function (a) { J = a }, function () { return J }), x.registerattribute("volume", H, function (a) { H = a; D.setGlobalVolume(H, I) }, function () { return H }),
            x.registerattribute("mute", I, function (a) { I = B(a); D.setGlobalVolume(H, I) }, function () { return I }), x.registerattribute("worldscale", G, function (a) { a = Number(a); isNaN(a) && (a = 1); G = a }, function () { return G }), x.registerattribute("autopause", E, function (a) { E = B(a) }, function () { return E }), x.registerattribute("autounlock", M, function (a) { M = B(a) }, function () { return M }), x.registerattribute("panningmodel", K, function (a) { K = a }, function () { return K }), D.setAutoUnlock(M), f.preloadsound = ja, f.createsound = F, f.playsound = Q, f.streamsound =
            ua, f.playsound2d = xa, f.playsound3d = ya, f.playsound3dh = za, f.playsound3dhs = Aa, f.pausesound = Ba, f.resumesound = Ca, f.stopsound = Da, f.destroysound = Ea, f.togglesound = X, f.pausesoundtoggle = X, f.seeksound = Fa, f.mutesound = Ga, f.playsound_at_hv = R, f.playsound_at_xyz = va, f.playsound_at_hotspot = W, f.setup3dsound = wa, f.stopallsounds = Y, f.pauseallsounds = N, f.resumeallsounds = O, window.addEventListener("pagehide", function () { E && N() }, !1), window.addEventListener("pageshow", O, !1), document.addEventListener("visibilitychange", aa, !1), f.actions.renderloop(Z))
    };
    this.unloadplugin = function () {
        if (f) {
            Y(); try {
                delete f.soundinterface, delete f.autosound, delete f.sound, delete f.preloadsound, delete f.createsound, delete f.playsound, delete f.streamsound, delete f.playsound2d, delete f.playsound3d, delete f.playsound3dh, delete f.playsound3dhs, delete f.pausesound, delete f.resumesound, delete f.stopsound, delete f.destroysound, delete f.togglesound, delete f.pausesoundtoggle, delete f.seeksound, delete f.mutesound, delete f.playsound_at_hv, delete f.playsound_at_xyz, delete f.playsound_at_hotspot,
                delete f.setup3dsound, delete f.stopallsounds, delete f.pauseallsounds, delete f.resumeallsounds, f = x = C = null
            } catch (a) { }
        }
    }; var U = {}, A = {}, P = function () { var a = 0; return function (c) { return c + ++a } }()
};

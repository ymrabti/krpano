var krpanoplugin = function () {
    function Nt(e) { return ".yes.on.true.1"[g](("." + e)[y]()) >= 0 } function Ct(e) { } function Lt(e) {
        var t = e.data;
        t && t[L] == s && t[m] && kt && (t[m][L] = s, kt(t[m]))
    } function At(e) { Y && et && (et.triggerevent(e), Y.call("events.dispatch('gyro_" + e + "');", et)) } function Ot() {
        dt = 0;
        if (Z.mobile || Z.tablet || Z.safari || it) dt = 2;
        if (dt > 0) {
            if (tt == 1 && Z.android && Z.chrome && (Z[E] | 0) == 65) {
                var e = i, t = "" + Y[f].useragent, l = t[g]("Chrome/65");
                if (l > 0) {
                    var c = parseInt(t.slice(l + 7 + 2 + 3, t[g](" ", l)));
                    c > 3325 && (e = n)
                } e && (Y[S] !== i && (Y[S] = i, Y.trace(2, "The gyroscope support is broken in this Chrome version!"), Y.trace(2, "The gyro or VR control might not work at all or be jerky and delayed!")), tt = 0)
            } tt == 0 && (dt = 1);
            if ((Z.ios || Z.safari) && Y[f].protocol == 'https') {
                var h = G[dt == 1 ? "DeviceOrientationEvent" : "DeviceMotionEvent"];
                if (h && h[_]) {
                    pt = h, setTimeout(Dt, 1);
                    return
                }
            } G[u](dt == 1 ? o : s, Dt, n), kt = Dt;
            var p = et[a] != "" && et[a] != r, d = Z.desktop && it == n ? 500 : p ? 2500 : 1e4;
            setTimeout(_t, d)
        } else ht == n && (ht = i, Mt(), At(a))
    } function Mt() { Y[P] !== i && Y[f].protocol != 'https' && (Z[E] >= 74 || Z[A] >= 12.2) && (Y[P] = i, Y.trace(2, "HTTPS might be required for Gyro/VR support!")) } function _t() { G[t](o, Dt, n), G[t](s, Dt, n), kt = r, Y && ht == n && (ht = i, Mt(), At(a)) } function Dt(e) { e && G[t](e[L], Dt, n), kt = r, e && (e[L] == o || e[L] == s && e[b] && e.rotationRate) || pt ? (ht = i, at = i, At(D), rt && Ft()) : ht == n && (ht = i, Mt(), At(a)) } function Pt(e) {
        var t = 2;
        switch (("" + e)[y]()) {
            case "0": case "off": t = 0;
                break;
            case "1": case x: t = 1;
                break;
            case "2": case F: t = 2;
                break;
            case "3": case M: t = 3
        }st = t
    } function Ht() {
        var e = F;
        switch (st) {
            case 0: e = "off";
                break;
            case 1: e = x;
                break;
            case 2: e = F;
                break;
            case 3: e = M
        }return e
    } function Bt(e) { ut = e, e ? (St = { continuousupdates: Y[h][l], usercontrol: Y[c].usercontrol, loadwhilemoving: Y[N][v], hlookat: Y[h][k], vlookat: Y[h][U], camroll: Y[h][C], limitview: Y[h][O] }, Y[h][l] = i, Y[N][v] = i, Y[h][O] = "off", bt = Y[h][k], bt -= un(), $t(), At(q)) : St && (Y[h][l] = St[l], Y[N][v] = St[v], Y[h][O] = St[O], Y.call("tween(view.camroll,0)"), St = r, $t(), pn = 0, At(j)) } function Ft() {
        if (Y && at && ut == n) if (pt) try {
            var e = pt[_]();
            e && e.then ? e.then(function () { It() }, function () { rt = n }) : rt = n
        } catch (t) { rt = n } else It()
    } function It() { Bt(i), ct > 0 && (jt = Y[d]), dt == 1 ? G[u](o, dn, i) : dt == 2 && (G[u](s, cr, i), kt = cr), Z[f][p].touch && Y[c][J][u](Z[f][p][I], Vt, n), Y.set("events[__gyro2].keep", i), Y.set("events[__gyro2].order", -99), Y.set("events[__gyro2].onviewchange", zt), Y.get(p).sortby("order", i) } function qt() { Y && ut && (Bt(n), Y.set("events[__gyro2].name", r), G[t](o, dn, i), G[t](s, cr, i), kt = r, Z[f][p].touch && Y[c][J][t](Z[f][p][I], Vt, n), Y[h].haschanged = i) } function Rt(e, t) {
        e === undefined ? e = Number.NaN : e = Number(e), isNaN(e) && Y.xml && Y.xml[h] && (e = Number(Y.xml[h][k]), isNaN(e) && (e = 0)), st == 2 && t !== undefined && !isNaN(parseFloat(t)) && (Et = -yt + Number(t));
        var n = gt;
        bt = bt - n + e
    } function zt() {
        var e = Y.webVR;
        if (e && e[B]) return;
        if (ut) {
            var t = un();
            t != Ut && (Ut = t, hn = 5, vt = mt - 1), Y[h][l] = i;
            var n = [0, 0, 0];
            if (vt > mt) {
                var s = r;
                if (nt == 0) s = fn.q;
                else if ((nt == 4 || nt >= 6) && dt == 2) s = fn.q, ar(s);
                else if (nt <= 3 || nt == 5 || dt == 1) if (an.t > 0 && fn.t > 0) {
                    var o = Y[d], u, a, f = 1, p = 1;
                    nt == 1 || nt == 2 ? u = o - fn.t : (u = o - an.t, p = 2, Y[N].fps < 59 && (u = o - fn.t, p = 1)), a = fn.t - an.t, a > 0 ? (f = u / a, f > p && (f = p), ln.x = an.q.x, ln.y = an.q.y, ln.z = an.q.z, ln.w = an.q.w, tn(ln, fn.q, f), s = ln) : s = fn.q
                } if (s) {
                    if (ft != 0) if (hn > 0) hn--, cn.x = s.x, cn.y = s.y, cn.z = s.z, cn.w = s.w;
                    else {
                        var v = 1 - ft;
                        v == 2 && (v = Math.pow(Math.tan(Math.min(Number(Y[h].fov), 90) * xt * .5), 1.5), v /= Math.max(Math.min(Number(Y[N].currentfps) / 50, 1), .2), v > 1 && (v = 1)), tn(cn, s, v), s = cn
                    } var m = Math.min(Math.abs(Et) / 30, 1);
                    on(n, s, ot && m < 1 ? T : "YZX");
                    var g = bt - n[1] * Tt + t, y = Et - n[0] * Tt, b = ot ? -n[2] * Tt : 0;
                    b *= 1 - m, st == 2 && (Et < -0.1 && y <= -90 ? Et += -90 - y : Et > .1 && y > 90 && (Et += 90 - y)), isNaN(g) && (g = 0), isNaN(y) && (y = 0), isNaN(b) && (b = 0);
                    var w = Y.image.hfov;
                    if (w > 0 && w < 10) {
                        w /= 90, g *= w, y *= w;
                        var E = Y.image;
                        if (E) {
                            var S = g - (E.flatgyro_h || g), x = y - (E.flatgyro_v || y);
                            E.flatgyro_h = g, E.flatgyro_v = y, g = Y[h][k] += S, y = Y[h][U] += x
                        }
                    } gt = g, yt = y;
                    if (jt > 0) {
                        var L = Y[d] - jt;
                        if (L < ct * 1e3) {
                            var A = L / (ct * 1e3);
                            A > 1 && (A = 1), A *= A;
                            var O = new Jt, M = new Jt;
                            rn(O, Y[h][U] * xt, Y[h][k] * xt, Y[h][C] * xt, T), rn(M, y * xt, g * xt, b * xt, T), tn(O, M, A);
                            var _ = [0, 0, 0];
                            on(_, O, T), g = _[1] * Tt, y = _[0] * Tt, b = _[2] * Tt
                        } else jt = 0
                    } Y[h][k] = g, Y[h][U] = y, Y[h][C] = b;
                    if (st == 2 && Xt == r) {
                        var D = Wt(s);
                        D = Math.max(Math.min(1, 1 - D), 0), Et *= D, Math.abs(Et) < 1e-5 && (Et = 0)
                    } Xt == r && (wt *= Math.pow(Y[c].touchfriction, .92), bt += wt)
                }
            }
        }
    } function Vt(e) {
        var s = n;
        if (st == 3) et[B] = n, s = i;
        else if (st == 0 || Y[c].panoControl.isMultiTouch()) s = i;
        else {
            var o = Y[d], a = Y[c].getMousePos(e[X] ? e[X][0] : e);
            a.x /= Y.stagescale, a.y /= Y.stagescale;
            if (e[L] == Z[f][p][I]) Xt == r ? (Xt = a, Y[c][J][u](Z[f][p][z], Vt, i), Y[c][J][u](Z[f][p][$], Vt, i)) : s = i;
            else if (e[L] == Z[f][p][$]) s = i;
            else if (e[L] == Z[f][p][z] && Xt) {
                var l = Xt.x, h = a.x;
                if (Y[N].stereo) {
                    var v = Y.stagewidth * .5;
                    (l >= v || h >= v) && (l < v || h < v) && (h = l)
                } var m = Y[V](l, Xt.y, n), g = Y[V](h, a.y, n), y = g.x - m.x, b = g.y - m.y;
                y < -180 ? y += 360 : y > 180 && (y -= 360), Math.abs(y) < 120 && Math.abs(b) < 45 && (Xt = a, bt -= y, wt = -y, wt < -45 ? wt = -45 : wt > 45 && (wt = 45), st == 2 && (Et -= b))
            }
        } s && (Xt = r, Y[c][J][t](Z[f][p][z], Vt, i), Y[c][J][t](Z[f][p][$], Vt, i))
    } function $t() { vt = 0, an.t = 0, fn.t = 0, Vr(), Qr = 0, Xr = n, rr = r, hn = 1 } function Jt(e, t, n, r) { this.x = e, this.y = t, this.z = n, this.w = r } function Kt(e) {
        var t = Math[W](e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w);
        t === 0 ? (e.x = e.y = e.z = 0, e.w = 1) : (t = 1 / t, e.x *= t, e.y *= t, e.z *= t, e.w *= t)
    } function Qt(e) { e.x *= -1, e.y *= -1, e.z *= -1, Kt(e) } function Gt(e, t) { return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w } function Yt(e) { return Math[W](e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w) } function Zt(e, t) {
        var n = e.x, r = e.y, i = e.z, s = e.w, o = t.x, u = t.y, a = t.z, f = t.w;
        e.x = n * f + s * o + r * a - i * u, e.y = r * f + s * u + i * o - n * a, e.z = i * f + s * a + n * u - r * o, e.w = s * f - n * o - r * u - i * a
    } function en(e, t) {
        var n = t.x, r = t.y, i = t.z, s = t.w, o = e.x, u = e.y, a = e.z, f = e.w;
        e.x = n * f + s * o + r * a - i * u, e.y = r * f + s * u + i * o - n * a, e.z = i * f + s * a + n * u - r * o, e.w = s * f - n * o - r * u - i * a
    } function tn(e, t, n) {
        var r = e.x, i = e.y, s = e.z, o = e.w, u = r * t.x + i * t.y + s * t.z + o * t.w;
        u < 0 ? (u = -u, e.x = -t.x, e.y = -t.y, e.z = -t.z, e.w = -t.w) : (e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w);
        if (u >= 1) {
            e.w = o, e.x = r, e.y = i, e.z = s;
            return
        } var a = Math.acos(u), f = Math[W](1 - u * u);
        if (Math.abs(f) < .001) {
            e.w = .5 * (o + e.w), e.x = .5 * (r + e.x), e.y = .5 * (i + e.y), e.z = .5 * (s + e.z);
            return
        } var l = Math.sin((1 - n) * a) / f, c = Math.sin(n * a) / f;
        e.w = o * l + e.w * c, e.x = r * l + e.x * c, e.y = i * l + e.y * c, e.z = s * l + e.z * c
    } function nn(e, t, n) {
        var r = n / 2, i = Math.sin(r);
        e.x = t.x * i, e.y = t.y * i, e.z = t.z * i, e.w = Math.cos(r)
    } function rn(e, t, n, r, i) {
        var s = Math.cos(t / 2), o = Math.cos(n / 2), u = Math.cos(r / 2), a = Math.sin(t / 2), f = Math.sin(n / 2), l = Math.sin(r / 2);
        return i === "XYZ" ? (e.x = a * o * u + s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u - a * f * l) : i === T ? (e.x = a * o * u + s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u + a * f * l) : i === "ZXY" ? (e.x = a * o * u - s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u - a * f * l) : i === "ZYX" ? (e.x = a * o * u - s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u + a * f * l) : i === "YZX" ? (e.x = a * o * u + s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u - a * f * l) : i === "XZY" && (e.x = a * o * u - s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u + a * f * l), e
    } function sn(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h, p, d;
        i = t.x, s = t.y, o = t.z, u = Math[W](i * i + s * s + o * o), u > 0 && (i /= u, s /= u, o /= u), a = n.x, f = n.y, l = n.z, c = Math[W](a * a + f * f + l * l), c > 0 && (a /= c, f /= c, l /= c), r = i * a + s * f + o * l + 1, r < 1e-6 ? (r = 0, Math.abs(i) > Math.abs(o) ? (h = -s, p = i, d = 0) : (h = 0, p = -o, d = s)) : (h = s * l - o * f, p = o * a - i * l, d = i * f - s * a), e.x = h, e.y = p, e.z = d, e.w = r, Kt(e)
    } function on(e, t, n) {
        function r(e, t, n) { return e < t ? t : e > n ? n : e } if (!t || isNaN(t.x) || isNaN(t.y) || isNaN(t.z) || isNaN(t.w)) return;
        var i = t.x * t.x, s = t.y * t.y, o = t.z * t.z, u = t.w * t.w;
        if (n === "XYZ") e[0] = Math[w](2 * (t.x * t.w - t.y * t.z), u - i - s + o), e[1] = Math.asin(r(2 * (t.x * t.z + t.y * t.w), -1, 1)), e[2] = Math[w](2 * (t.z * t.w - t.x * t.y), u + i - s - o);
        else if (n === T) e[0] = Math.asin(r(2 * (t.x * t.w - t.y * t.z), -1, 1)), e[1] = Math[w](2 * (t.x * t.z + t.y * t.w), u - i - s + o), e[2] = Math[w](2 * (t.x * t.y + t.z * t.w), u - i + s - o);
        else if (n === "ZXY") e[0] = Math.asin(r(2 * (t.x * t.w + t.y * t.z), -1, 1)), e[1] = Math[w](2 * (t.y * t.w - t.z * t.x), u - i - s + o), e[2] = Math[w](2 * (t.z * t.w - t.x * t.y), u - i + s - o);
        else if (n === "ZYX") e[0] = Math[w](2 * (t.x * t.w + t.z * t.y), u - i - s + o), e[1] = Math.asin(r(2 * (t.y * t.w - t.x * t.z), -1, 1)), e[2] = Math[w](2 * (t.x * t.y + t.z * t.w), u + i - s - o);
        else if (n === "YZX") e[0] = Math[w](2 * (t.x * t.w - t.z * t.y), u - i + s - o), e[1] = Math[w](2 * (t.y * t.w - t.x * t.z), u + i - s - o), e[2] = Math.asin(r(2 * (t.x * t.y + t.z * t.w), -1, 1));
        else {
            if (n !== "XZY") return;
            e[0] = Math[w](2 * (t.x * t.w + t.y * t.z), u - i + s - o), e[1] = Math[w](2 * (t.x * t.z + t.y * t.w), u + i - s - o), e[2] = Math.asin(r(2 * (t.z * t.w - t.x * t.y), -1, 1))
        }
    } function un() {
        var e = Number.NaN, t = screen[H] || screen.msOrientation || screen.mozOrientation;
        t && t[L] && (t = t[L]);
        if (t) {
            t = ("" + t)[y]();
            var n = t[g]("portrait") >= 0, r = t[g]("landscape") >= 0, i = t[g]("primary") >= 0, s = t[g]("secondary") >= 0;
            n && i ? e = 0 : r && i ? e = 90 : r && s ? e = -90 : n && s && (e = 180), Z.desktop && (Z.edge ? e = -90 + e : e = 90 - e)
        } return isNaN(e) && (e = Y._have_top_access ? top[H] : G[H]), isNaN(e) && (e = 0), e
    } function dn(e) {
        if (!ut) return;
        var t = Y[d], n = t - lr;
        lr = t;
        var i = un() * xt, s = e.alpha * xt, o = e.beta * xt, u = e.gamma * xt;
        pn === r && (pn = s), s = s - pn + Math.PI;
        var a = Math.cos(s), f = Math.sin(s), l = Math.cos(o), c = Math.sin(o), h = Math.cos(u), p = Math.sin(u);
        s = Math[w](-f * c * h - a * p, f * p - a * c * h), o = -Math.asin(l * h), u = Math[w](l * p, -c) - Math.PI, an.q.x = fn.q.x, an.q.y = fn.q.y, an.q.z = fn.q.z, an.q.w = fn.q.w, an.t = fn.t;
        var v = fn.q;
        fn.t = t, vt++, rn(v, o, s + i, u - i, T)
    } function vn() { this.x = 0, this.y = 0, this.z = 0 } function mn(e, t, n, r) { e.x = t, e.y = n, e.z = r } function gn(e, t) { e.x = t.x, e.y = t.y, e.z = t.z } function yn(e) { e.x = 0, e.y = 0, e.z = 0 } function bn(e, t, n) { t == 0 ? e.x = n : t == 1 ? e.y = n : e.z = n } function wn(e) { return Math[W](e.x * e.x + e.y * e.y + e.z * e.z) } function En(e) {
        var t = wn(e);
        t > 0 ? Sn(e, 1 / t) : (e.x = 0, e.y = 0, e.z = 0)
    } function Sn(e, t) { e.x *= t, e.y *= t, e.z *= t } function xn(e, t, n) { mn(n, e.x - t.x, e.y - t.y, e.z - t.z) } function Tn(e, t, n) { mn(n, e.y * t.z - e.z * t.y, e.z * t.x - e.x * t.z, e.x * t.y - e.y * t.x) } function Nn(e, t) { return e.x * t.x + e.y * t.y + e.z * t.z } function Cn() {
        var e;
        return typeof Float64Array != "undefined" ? e = new Float64Array(9) : e = new Array(9), Ln(e), e
    } function kn(e) { e[0] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = 0 } function Ln(e) { e[0] = e[4] = e[8] = 1, e[1] = e[2] = e[3] = e[5] = e[6] = e[7] = 0 } function An(e, t) { e[0] = e[4] = e[8] = t } function On(e, t) { e[0] *= t, e[1] *= t, e[2] *= t, e[3] *= t, e[4] *= t, e[5] *= t, e[6] *= t, e[7] *= t, e[8] *= t } function Mn(e, t) {
        var n = e[1], r = e[2], i = e[5];
        t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = n, t[4] = e[4], t[5] = e[7], t[6] = r, t[7] = i, t[8] = e[8]
    } function _n(e, t, n) { e[t] = n.x, e[t + 3] = n.y, e[t + 6] = n.z } function Dn(e, t) { e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8] } function Pn(e, t) {
        var n = e[0] * (e[4] * e[8] - e[7] * e[5]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
        n != 0 && (n = 1 / n, t[0] = (e[4] * e[8] - e[7] * e[5]) * n, t[1] = -(e[1] * e[8] - e[2] * e[7]) * n, t[2] = (e[1] * e[5] - e[2] * e[4]) * n, t[3] = -(e[3] * e[8] - e[5] * e[6]) * n, t[4] = (e[0] * e[8] - e[2] * e[6]) * n, t[5] = -(e[0] * e[5] - e[3] * e[2]) * n, t[6] = (e[3] * e[7] - e[6] * e[4]) * n, t[7] = -(e[0] * e[7] - e[6] * e[1]) * n, t[8] = (e[0] * e[4] - e[3] * e[1]) * n)
    } function Hn(e, t) { e[0] -= t[0], e[1] -= t[1], e[2] -= t[2], e[3] -= t[3], e[4] -= t[4], e[5] -= t[5], e[6] -= t[6], e[7] -= t[7], e[8] -= t[8] } function Bn(e, t) { e[0] += t[0], e[1] += t[1], e[2] += t[2], e[3] += t[3], e[4] += t[4], e[5] += t[5], e[6] += t[6], e[7] += t[7], e[8] += t[8] } function jn(e, t, n) {
        var r = t[0], i = t[1], s = t[2], o = t[3], u = t[4], a = t[5], f = t[6], l = t[7], c = t[8], h = e[0], p = e[1], d = e[2];
        n[0] = h * r + p * o + d * f, n[1] = h * i + p * u + d * l, n[2] = h * s + p * a + d * c, h = e[3], p = e[4], d = e[5], n[3] = h * r + p * o + d * f, n[4] = h * i + p * u + d * l, n[5] = h * s + p * a + d * c, h = e[6], p = e[7], d = e[8], n[6] = h * r + p * o + d * f, n[7] = h * i + p * u + d * l, n[8] = h * s + p * a + d * c
    } function Fn(e, t, n) {
        var r = e[0] * t.x + e[1] * t.y + e[2] * t.z, i = e[3] * t.x + e[4] * t.y + e[5] * t.z, s = e[6] * t.x + e[7] * t.y + e[8] * t.z;
        n.x = r, n.y = i, n.z = s
    } function In(e, t, n) { n[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n[3] = e[3] + t[3], n[4] = e[4] + t[4], n[5] = e[5] + t[5], n[6] = e[6] + t[6], n[7] = e[7] + t[7], n[8] = e[8] + t[8] } function Jn(e, t, n) {
        Tn(e, t, Rn);
        if (wn(Rn) == 0) Ln(n);
        else {
            gn(Un, e), gn(zn, t), En(Rn), En(Un), En(zn);
            var r = Xn, i = Vn;
            Tn(Rn, Un, qn), r[0] = Un.x, r[1] = Un.y, r[2] = Un.z, r[3] = Rn.x, r[4] = Rn.y, r[5] = Rn.z, r[6] = qn.x, r[7] = qn.y, r[8] = qn.z, Tn(Rn, zn, qn), i[0] = zn.x, i[3] = zn.y, i[6] = zn.z, i[1] = Rn.x, i[4] = Rn.y, i[7] = Rn.z, i[2] = qn.x, i[5] = qn.y, i[8] = qn.z, jn(i, r, n)
        }
    } function Kn(e, t) {
        var n = Nn(e, e), r = Math[W](n), i, s;
        if (n < 1e-8) i = 1 - 1 / 6 * n, s = .5;
        else if (n < 1e-6) s = .5 - .25 * (1 / 6) * n, i = 1 - n * (1 / 6) * (1 - .05 * n);
        else {
            var o = 1 / r;
            i = Math.sin(r) * o, s = (1 - Math.cos(r)) * o * o
        } Gn(e, i, s, t)
    } function Gn(e, t, n, r) {
        var i = e.x * e.x, s = e.y * e.y, o = e.z * e.z;
        r[0] = 1 - n * (s + o), r[4] = 1 - n * (i + o), r[8] = 1 - n * (i + s);
        var u = t * e.z, a = n * e.x * e.y;
        r[1] = a - u, r[3] = a + u, u = t * e.y, a = n * e.x * e.z, r[2] = a + u, r[6] = a - u, u = t * e.x, a = n * e.y * e.z, r[5] = a - u, r[7] = a + u
    } function Yn(e, t, n, r) {
        t *= xt, n *= xt, r *= xt;
        var i = Math.cos(t), s = Math.sin(t), o = Math.cos(n), u = Math.sin(n), a = Math.cos(r), f = Math.sin(r), l = i * u, c = s * u;
        e[0] = o * a, e[1] = l * a + i * f, e[2] = -c * a + s * f, e[3] = -o * f, e[4] = -l * f + i * a, e[5] = c * f + s * a, e[6] = u, e[7] = -s * o, e[8] = i * o
    } function Zn(e, t) {
        var n = e[0] + e[4] + e[8], r;
        n > 0 ? (r = Math[W](1 + n) * 2, t.x = (e[5] - e[7]) / r, t.y = (e[6] - e[2]) / r, t.z = (e[1] - e[3]) / r, t.w = .25 * r) : e[0] > e[4] && e[0] > e[8] ? (r = Math[W](1 + e[0] - e[4] - e[8]) * 2, t.x = .25 * r, t.y = (e[3] + e[1]) / r, t.z = (e[6] + e[2]) / r, t.w = (e[5] - e[7]) / r) : e[4] > e[8] ? (r = Math[W](1 + e[4] - e[0] - e[8]) * 2, t.x = (e[3] + e[1]) / r, t.y = .25 * r, t.z = (e[7] + e[5]) / r, t.w = (e[6] - e[2]) / r) : (r = Math[W](1 + e[8] - e[0] - e[4]) * 2, t.x = (e[6] + e[2]) / r, t.y = (e[7] + e[5]) / r, t.z = .25 * r, t.w = (e[1] - e[3]) / r)
    } function ar(e) {
        if (hr) {
            var t = un();
            t != rr && (rr = t, Yn(sr, 0, 0, -t), Yn(ir, -90, 0, +t));
            var n;
            if (nt <= 1 || nt == 3) n = Yr();
            else {
                var r = Y[d], i = (r - er) / 1e3, s = i;
                nt == 2 ? s += 2 / 60 : nt == 6 ? s += 1 / 60 : nt == 7 && (s += 2 / 60), n = ni(s)
            } jn(sr, n, ur), jn(ur, ir, or), Zn(or, e)
        }
    } function cr(e) {
        if (!ut) return;
        var t = Y[d], s = t - lr;
        lr = t, s > 5e3 && ($t(), s = .16), vt++;
        if (vt < mt) return;
        Xr == n && (Xr = i, Vr());
        var o = 0, u = 9.81, a = 0, f = e[b];
        f && (o = f.x, u = f.y, a = f.z, o == r && (o = 0), u == r && (u = 9.81), a == r && (a = 0));
        var l = e.acceleration;
        if (l) {
            var c = l.x, h = l.y, p = l.z;
            c == r && (c = 0), h == r && (h = 0), p == r && (p = 0), o -= c, u -= h, a -= p
        } if (Z.ios || Z.ie || Z.safari) o *= -1, u *= -1, a *= -1;
        var v = 0, m = 0, g = 0, y = e.rotationRate;
        y && (v = y.alpha, m = y.beta, g = y.gamma, v == r && (v = 0), m == r && (m = 0), g == r && (g = 0)), !Z.ios && Z.chrome && Z[E] < 66 || (v *= xt, m *= xt, g *= xt);
        if (Z.ie) {
            var w = v, S = m, x = g;
            v = S, m = x, g = w
        } if (lt) {
            var T = fr(v, m, g, t);
            v = T.rx, m = T.ry, g = T.rz
        } mn(tr, o, u, a), Kr(tr, s), er = t, mn(nr, v, m, g), Gr(nr, t);
        if (nt <= 3 || nt == 5) an.q.x = fn.q.x, an.q.y = fn.q.y, an.q.z = fn.q.z, an.q.w = fn.q.w, an.t = fn.t, ar(fn.q), fn.t = t
    } function Vr() { Ln(Nr), Ln(Cr), kn(Lr), An(Lr, Rr), kn(kr), An(kr, 1), kn(_r), An(_r, Ur), kn(Or), kn(Ar), kn(Mr), yn(br), yn(gr), yn(mr), yn(yr), yn(vr), mn(dr, 0, 0, zr), hr = n } function $r(e, t) { Fn(e, dr, mr), Jn(mr, gr, qr), Qn(qr, t) } function Jr() { Mn(Cr, Fr), jn(Lr, Fr, Ir), jn(Cr, Ir, Lr), Ln(Cr) } function Kr(e, t) {
        gn(gr, e);
        if (hr) {
            $r(Nr, br), t < 5 && (t = 5);
            var n = 1e3 / 60 / t, r = Wr * n, s = 1 / Wr, o = wr;
            for (var u = 0;
                u < 3;
                u++)yn(o), bn(o, u, s), Kn(o, Dr), jn(Dr, Nr, Pr), $r(Pr, Er), xn(br, Er, Sr), Sn(Sr, r), _n(Ar, u, Sr);
            Mn(Ar, Hr), jn(Lr, Hr, Br), jn(Ar, Br, jr), In(jr, _r, Or), Pn(Or, Hr), Mn(Ar, Br), jn(Br, Hr, jr), jn(Lr, jr, Mr), Fn(Mr, br, vr), jn(Mr, Ar, Hr), Ln(Br), Hn(Br, Hr), jn(Br, Lr, Hr), Dn(Lr, Hr), Kn(vr, Cr), jn(Cr, Nr, Nr), Jr()
        } else Jn(dr, gr, Nr), hr = i
    } function Gr(e, t) {
        if (Qr != 0) {
            var n = (t - Qr) / 1e3;
            n > 1 && (n = 1), gn(yr, e), Sn(yr, -n), Kn(yr, Cr), Dn(xr, Nr), jn(Cr, Nr, xr), Dn(Nr, xr), Jr(), Dn(Tr, kr), On(Tr, n * n), Bn(Lr, Tr)
        } Qr = t, gn(pr, e)
    } function Yr() { return Nr } function ni(e) {
        var t = Zr;
        gn(t, pr), Sn(t, -e);
        var n = ei;
        Kn(t, n);
        var r = ti;
        return jn(n, Nr, r), r
    } var e = "registerattribute", t = "removeEventListener", n = !1, r = null, i = !0, s = "devicemotion", o = "deviceorientation", u = "addEventListener", a = "onunavailable", f = "browser", l = "continuousupdates", c = "control", h = "view", p = "events", d = "timertick", v = "loadwhilemoving", m = "deviceMotionEvent", g = "indexOf", y = "toLowerCase", b = "accelerationIncludingGravity", w = "atan2", E = "chromeversion", S = "brokenGyroChromeWarning", x = "horizontaloffset", T = "YXZ", N = "display", C = "camroll", k = "hlookat", L = "type", A = "iosversion", O = "limitview", M = "disablegyro", _ = "requestPermission", D = "onavailable", P = "httpsGyroWarning", H = "orientation", B = "enabled", j = "ondisable", F = "full", I = "touchstart", q = "onenable", R = "safariversion", U = "vlookat", z = "touchmove", W = "sqrt", X = "changedTouches", V = "screentosphere", $ = "touchend", J = "layer", K = this, Q = document, G = window, Y = r, Z = r, et = r, tt = 1, nt = 1, rt = n, it = n, st = 2, ot = i, ut = n, at = n, ft = 0, lt = n, ct = .5, ht = n, pt = r, dt = 0, vt = 0, mt = 6, gt = 0, yt = 0, bt = 0, wt = 0, Et = 0, St = r, xt = Math.PI / 180, Tt = 180 / Math.PI;
    K.registerplugin = function (t, i, s) {
        Y = t, et = s;
        if (Y.version < "1.20" || Y.build < "2019-09-01") {
            Y.trace(3, "gyro2 plugin - too old krpano version (min. 1.20)");
            return
        } Z = Y.device;
        if (Z.ios && Z[A] >= 13.4 && Z[A] < 14 || Z.safari && Z[R] >= 13.1 && Z[R] < 14) tt = 0;
        et.pluginversion = "1.20.9", et[e](B, rt, function (e) { rt = Nt(e), rt ? Ft() : qt() }, function () { return rt }), et[e]("desktopsupport", it, function (e) { it = Nt(e) }, function () { return it }), et[e]("sensor", tt, function (e) { tt = parseInt(e) & 1 }, function () { return tt }), et[e]("sensor_mode", nt, function (e) {
            var t = parseInt(e);
            t >= 0 && t <= 7 && (nt = t), vt = 0
        }, function () { return nt }), et[e]("touch_mode", "" + st, Pt, Ht), et[e](C, ot, function (e) { ot = Nt(e) }, function () { return ot }), et[e]("friction", "" + ft, function (e) { ft = ("" + e)[y]() == "auto" ? -1 : Math.max(Math.min(Number(e), .99), 0), isNaN(ft) && (ft = 0), hn = 1 }, function () { return ft == -1 ? "auto" : "" + ft }), et[e]("autocalibration", lt, function (e) { lt = Nt(e) }, function () { return lt }), et[e]("softstart", ct, function (e) { ct = parseFloat(e), isNaN(ct) && (ct = .5) }, function () { return ct }), et[e]("isavailable", at, function (e) { }, function () { return at }), et[e]("available", at, function (e) { }, function () { return at }), et[e](D, r), et[e](a, r), et[e](q, r), et[e](j, r), et.resetsensor = Rt, (top != G || Nt(et.postmessagesupport)) && G[u]("message", Lt, n), Ot()
    };
    var kt = r;
    K.unloadplugin = function () { G[t](o, Dt, n), G[t](s, Dt, n), kt = r, qt(), et = r, Z = r, Y = r };
    var jt = 0, Ut = -1, Wt = function () {
        var e = r;
        return function (t) {
            var n = 0;
            return e == r ? e = new Jt(t.x, t.y, t.z, t.w) : (n = Math[W]((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y) + (t.z - e.z) * (t.z - e.z) + (t.w - e.w) * (t.w - e.w)), e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, isNaN(n) && (n = 0)), n
        }
    }(), Xt = r, an = { q: new Jt(0, 0, 0, 1), t: 0 }, fn = { q: new Jt(0, 0, 0, 1), t: 0 }, ln = new Jt(0, 0, 0, 1), cn = new Jt(0, 0, 0, 1), hn = 1, pn = r, qn = new vn, Rn = new vn, Un = new vn, zn = new vn, Wn = new vn, Xn = Cn(), Vn = Cn(), $n = new vn, Qn = function () {
        var e = new vn;
        return function (t, n) {
            var r = (t[0] + t[4] + t[8] - 1) * .5;
            mn(n, (t[7] - t[5]) / 2, (t[2] - t[6]) / 2, (t[3] - t[1]) / 2);
            var i = wn(n);
            if (r > Math.SQRT1_2) i > 0 && Sn(n, Math.asin(i) / i);
            else if (r > -Math.SQRT1_2) {
                var s = Math.acos(r);
                Sn(n, s / i)
            } else {
                var s = Math.PI - Math.asin(i), o = t[0] - r, u = t[4] - r, a = t[8] - r, f = e;
                o * o > u * u && o * o > a * a ? mn(f, o, (t[3] + t[1]) / 2, (t[2] + t[6]) / 2) : u * u > a * a ? mn(f, (t[3] + t[1]) / 2, u, (t[7] + t[5]) / 2) : mn(f, (t[2] + t[6]) / 2, (t[7] + t[5]) / 2, a), Nn(f, n) < 0 && Sn(f, -1), En(f), Sn(f, s), gn(n, f)
            }
        }
    }(), er = 0, tr = new vn, nr = new vn, rr = r, ir = Cn(), sr = Cn(), or = Cn(), ur = Cn(), fr = function () {
        var e = { rx: 0, ry: 0, rz: 0 }, t = 0, n = 0, r = 0, i = 0, s = 0, o = 0, u = 0, a = 0, f = 0, l = 0, c = 1, h = 0, p = 0, d = 0, v = .03;
        return function (m, g, y, b) {
            var w = e, E = m - t, S = g - n, x = y - r, T = b - i;
            t = m, n = g, r = y, i = b;
            var N = Math[W](E * E + S * S + x * x);
            if (T > 500) return s = 0, w;
            if (s == 0) return s = T, o = N, w;
            s = s * .95 + .05 * T;
            var C = Math.min(15 * s / 1e3, .5);
            return o = o * (1 - C) + C * N, o < v ? (u++, a += m, f += g, l += y, u > 19 && (h = h * (1 - c) + c * (a / u), p = p * (1 - c) + c * (f / u), d = d * (1 - c) + c * (l / u), c > .5 && (c *= .9), o = 10, v *= .5)) : (u = 1, a = m, f = g, l = y), w.rx = m - h, w.ry = g - p, w.rz = y - d, w
        }
    }(), lr = 0, hr = n, pr = new vn, dr = new vn, vr = new vn, mr = new vn, gr = new vn, yr = new vn, br = new vn, wr = new vn, Er = new vn, Sr = new vn, xr = Cn(), Tr = Cn(), Nr = Cn(), Cr = Cn(), kr = Cn(), Lr = Cn(), Ar = Cn(), Or = Cn(), Mr = Cn(), _r = Cn(), Dr = Cn(), Pr = Cn(), Hr = Cn(), Br = Cn(), jr = Cn(), Fr = Cn(), Ir = Cn(), qr = Cn(), Rr = 20, Ur = .5, zr = 9.81, Wr = 1e7, Xr = n, Qr = 0, Zr = new vn, ei = Cn(), ti = Cn()
};
var krpanoplugin = function () {
    function Ii(e) { return ".yes.on.true.1"[p](("." + e)[h]()) >= 0 } function qi(e) { } function Ri() {
        Ci = 0;
        if (Dr[mn] || Vr) if (Dr[A]) {
            var e = ("" + navigator[vt])[h]()[p]("ucbrowser") > 0;
            Dr.chrome || Dr[ut] ? Ci = 2 : e && (Ci = 2)
        } else Ci = 2;
        if (Ci > 0) {
            ai == 0 && (Ci = 1);
            if (Dr[E] && Vr) setTimeout(zi, 10);
            else {
                window[o](Ci == 1 ? v : T, Wi, t);
                var r = Pr[l] != "" && Pr[l] != s;
                setTimeout(zi, Dr[E] ? 10 : r ? 1500 : 3e3)
            }
        } else Si == t && (Si = n, _r[at](Pr[l], Pr))
    } function Ui() { Si == t && (Si = n, mi = n, gi = n, yi = n, bi = t, ls(), _r[at](Pr[I], Pr)) } function zi() { window[r](v, Wi, t), window[r](T, Wi, t), Dr[E] && Vr ? Ui() : Si == t && (Si = n, _r[at](Pr[l], Pr)) } function Wi(e) { window[r](e.type, Wi, t), e.type == v || e.type == T && e[Ft] && e.rotationRate ? (Si = n, mi = n, gi = n, Dr[E] && (yi = n), ls(), _r[at](Pr[I], Pr)) : Dr[E] && Vr ? Ui() : Si == t && (Si = n, _r[at](Pr[l], Pr)) } function ns(e) { mi = t, e[Jt] > 0 && (Xi = e[0], _r.trace(0, "WebVR Display: " + Xi.displayName + " (connected=" + Xi.isConnected + ", presenting=" + Xi[W] + ", canpresent=" + Xi[V].canPresent + " externaldisplay=" + Xi[V][Pn] + ")"), mi = n, Xi && Xi[V] && Xi[V].canPresent), mi ? (ui == t && Dr[A] && (bi = n), window[o]("vrdisplaypresentchange", rs, t), _r[at](Pr[I], Pr)) : Dr[E] && Vr ? Ui() : Si == t && (Si = n, _r[at](Pr[l], Pr)) } function rs(e) {
        _r[H][Q] = n;
        var i = _r[x][kt], s = _r[w][q];
        Xi[V][Pn] ? Xi[W] ? Dr[E] && (Pi && ("onpointerlockchange" in document ? document[o]("pointerlockchange", ss, t) : "onmozpointerlockchange" in document && document[o]("mozpointerlockchange", ss, t), Hi.apply(s), Hs = 1, i[o](U, Bs, t)), qs = 5, s[o](pt, Rs, t), document[o](Ar, is, t)) : (document[r](Ar, is, t), s[r](pt, Rs, t), i[r](U, Bs, t)) : Xi[W] == t && Ts()
    } function is(e) { e.keyCode == 27 && Ts() } function ss() {
        var e = _r[w][q];
        document[jn] !== e && document[gn] !== e && Ts()
    } function os(e) {
        var r;
        for (r = 0;
            r < e[Jt];
            r++)if (e[r] instanceof HMDVRDevice) {
                Vi = e[r], Vi[y] ? (Ji = Vi[y](Bt), Ki = Vi[y](G), Gi = Ji[dr], Yi = Ki[dr], Zi = Ji[un], es = Ki[un]) : Vi[Mt] && Vi[F] && (Gi = Vi[Mt](Bt), Yi = Vi[Mt](G), Zi = Vi[F](Bt), es = Vi[F](G));
                var i = 2 * Math.max(Zi.leftDegrees, Zi.rightDegrees), o = 2 * Math.max(Zi.upDegrees, Zi.downDegrees);
                ts = Math.max(i, o);
                break
            } for (r = 0;
            r < e[Jt];
            r++)if (e[r] instanceof PositionSensorVRDevice) if (Vi == s || Vi[vr] == e[r][vr]) {
                $i = e[r];
                break
            } Vi || $i ? (mi = n, ui == t && Dr[A] && (bi = n), _r[at](Pr[I], Pr)) : Dr[E] && Vr ? Ui() : Si == t && (Si = n, _r[at](Pr[l], Pr))
    } function as(e) {
        vi = e;
        if (e) {
            us = { imagehfov: _r.image.hfov, continuousupdates: _r[u][L], usercontrol: _r[x][Xt], mousetype: _r[x][dn], contextmenu_touch: _r[An].touch, loadwhilemoving: _r[w][$], stereo: _r[w][_n], stereooverlap: _r[w][Et], hlookat: _r[u][O], vlookat: _r[u][tn], camroll: _r[u][On], fovmin: _r[u][Rt], fovmax: _r[u][Wt], fisheye: _r[u][nt], fov: _r[u].fov, maxpixelzoom: _r[u][b], fovtype: _r[u][st], stereographic: _r[u][k], fisheyefovlink: _r[u][S], pannini: _r[u][ot], architectural: _r[u][g], limitview: _r[u][D], area_mode: _r[H].mode, area_align: _r[H].align, area_x: _r[H].x, area_y: _r[H].y, area_width: _r[H][ht], area_height: _r[H][j], maxmem: _r.memory[Zn] }, _r[H].mode = "align", _r[H].align = "lefttop", _r[H].x = "0", _r[H].y = "0", _r[H][ht] = "100%", _r[H][j] = "100%", _r[H][Q] = n, _r[An].touch = t, _r[u][L] = n, yi && Dr[E] && !Pi ? _r[x][dn] = "drag2d" : _r[x][Xt] = Yn, _r[w][_n] = n, _r[w][$] = n, _r[u][D] = Yn, _r[u][ot] = 0, _r[u][g] = 0, _r[u][st] = wr, _r[u][Rt] = 0, _r[u][Wt] = 179, _r[u][nt] = 0, _r[u].fov = ts, _r[u][b] = 0, _r[u][k] = n, _r[u][S] = 0, Ai = _r[u][O], Is = 0, Dr[E] || (Ai -= to()), Ps();
            if (gi || bi) ps(0, 0), yi && Dr[E] && !Pi || (_r[ct] = n);
            Os(), $r && Ds(n), _r.set("events[__webvr].keep", n), _r.set("events[__webvr].onnewpano", Ms), _r.set("events[__webvr].onresize", _s), (gi || bi) && Oa(n), _r[at](Pr.onentervr, Pr)
        } else {
            Dr[c][m][a] && Hr[r](Dr[c][m][a], js);
            if (us) {
                _r.set("events[__webvr].name", s), _r[u][L] = us[L], _r[x][Xt] = us[Xt], _r[x][dn] = us[dn], _r[An].touch = us.contextmenu_touch, _r[w][$] = us[$], _r[w][_n] = us[_n], _r[w][Et] = us[Et], _r[u][On] = 0;
                if (us.imagehfov == _r.image.hfov) _r[u][Rt] = us[Rt], _r[u][Wt] = us[Wt], _r[u].fov = us.fov, _r[u][b] = us[b], _r[u][st] = us[st], _r[u][D] = us[D], _r[u][nt] = us[nt], _r[u][k] = us[k], _r[u][S] = us[S], _r[u][ot] = us[ot], _r[u][g] = us[g];
                else {
                    var i = _r.xml[u];
                    _r[u][Rt] = i && !isNaN(Number(i[Rt])) ? Number(i[Rt]) : 1, _r[u][Wt] = i && !isNaN(Number(i[Wt])) ? Number(i[Wt]) : 140, _r[u].fov = i && !isNaN(Number(i.fov)) ? Number(i.fov) : 90, _r[u][nt] = i && !isNaN(Number(i[nt])) ? Number(i[nt]) : 0, _r[u][ot] = i && !isNaN(Number(i[ot])) ? Number(i[ot]) : 0, _r[u][g] = i && !isNaN(Number(i[g])) ? Number(i[g]) : 0, _r[u][b] = i && !isNaN(Number(i[b])) ? Number(i[b]) : 2, _r[u][st] = i && i[st] ? i[st] : "MFOV", _r[u][D] = i && i[D] ? i[D] : sn, _r[u][k] = n, _r[u][S] = .5
                } _r[H].mode = us.area_mode, _r[H].align = us.area_align, _r[H].x = us.area_x, _r[H].y = us.area_y, _r[H][ht] = us.area_width, _r[H][j] = us.area_height, _r[H][Q] = n, _r[Dt] = -1, _r[tt] = t, _r.memory[Zn] = us[Zn], us = s, hi && (yo(hi, t), hi = s), Oa(t), Ds(t), Ps(), _r[at](Pr.onexitvr, Pr)
            }
        }
    } function ls() {
        if (fs) return fs;
        var e = xr, r = 0, i = 1536, o = Math.min(screen[ht], screen[j]), u = Math.max(screen[ht], screen[j]), a = window.devicePixelRatio || 1, f = t;
        if (Dr.iphone) if (u == 568) {
            var l = _r[kn].context, c = "" + l.getParameter(l.VERSION);
            c[p]("A8 GPU") > 0 ? Dr.ipod ? (e = "iPod 6", r = 4) : (e = cr, r = 4.7) : c[p]("A9 GPU") > 0 ? (e = "iPhone 6S", r = 4.7) : c[p]("SGX") > 0 ? (e = "iPhone 5", r = 4, i = 1024) : c[p]("A7 GPU") > 0 ? (e = "iPhone 5S", r = 4, i = 1024) : (e = "iPhone", r = 4.7)
        } else u == 667 ? a == 2 ? (e = cr, r = 4.7) : (e = er, r = 5.5) : u == 736 && (e = er, r = 5.5);
        else if (Dr[mn]) {
            var d = navigator[vt], v = s, m = d[p]("("), g = d[p](")");
            if (m > 0 && g > m) {
                var y = ("" + d[Ut](m + 1, g))[en](";");
                if (y[Jt] > 2) {
                    v = y[y[Jt] - 1].trim();
                    var b = v[h]()[p](" build/");
                    b > 0 && (v = v[Ut](0, b)), v = v[en](" ").join("-")[en]("_").join("-")[en]("/").join("-"), v[Ut](0, 3)[h]() == "rv:" && (v = s)
                }
            } if (v) {
                var w = cs(v[h]());
                w ? (e = w[0], r = Number(w[1])) : _r.trace(2, "WebVR - unknown device: " + v)
            }
        } r == 0 && f == t && (xi == t && (xi = n, _r[at](Pr[vn], Pr)), yi ? r = 7 : r = 5);
        var E = Math[Sn](r * r / (1 + o / u * (o / u))) * 25.4, S = E * o / u;
        return fs = { screendiagonal_inch: r, screenwidth_mm: E, screenheight_mm: S, screenwidth_px: u * a, screenheight_px: o * a, devicename: e, best_res: i }, fs
    } function cs(e) {
        var t = { "sm-n750": ["Note 3 Neo", 5.5], "sm-n900": ["Note 3", 5.7], "sm-n910": ["Note 4", 5.7], "sm-n916": ["Note 4", 5.7], "sm-n920": ["Note 5", 5.7], "sm-n915": ["Note Edge", 5.6], "gt-i930": [ur, 4.7], "gt-i950": [tr, 4.7], "galaxy-s3": [ur, 4.7], "galaxy-s4": [tr, 4.7], "sc-04f": [gt, 5.1], "[scl23": [gt, 5.1], "sm-g530": ["Galaxy Grand Prime", 5], "sm-g720": ["Galaxy Grand Max", 5.25], "sm-g800": ["Galaxy S5 Mini", 4.5], "sm-g850": ["Galaxy Alpha", 4.7], "sm-g860": ["Galaxy S5 Sport", 5.1], "sm-g870": ["Galaxy S5 Active", 5.1], "sm-g890": ["Galaxy S6 Active", 5.1], "sm-g903": ["Galaxy S5 Neo", 5.1], "sm-g900": [gt, 5.1], "sm-g906": [gt, 5.1], "sm-g901": ["Galaxy S5+", 5.1], "sm-g920": ["Galaxy S6", 5.1], "sm-g925": ["Galaxy S6 Edge", 5.1], "sm-g928": ["Galaxy S6+ Edge", 5.7], "sm-g930": ["Galaxy S7", 5.1], "sm-g935": ["Galaxy S7 Edge", 5.5], "sm-a300": [rr, 4.5], "sm-a310": [rr, 4.7], "sm-a500": [ir, 5], "sm-a510": [ir, 5.2], "sm-a700": [sr, 5.5], "sm-a710": [sr, 5.5], "sm-a800": ["Galaxy A8", 5.7], "sm-a900": ["Galaxy A9", 6], "sm-e500": ["Galaxy E5", 5], "sm-e700": ["Galaxy E7", 5.5], "sm-j320": ["Galaxy J3", 5], "sm-j500": ["Galaxy J5", 5], "sm-j700": ["Galaxy J7", 5.5], c6916: ["Xperia Z1s", 5], c6902: [bt, 5], c6903: [bt, 5], c6906: [bt, 5], c6943: [bt, 5], c6802: [lt, 6.4], c6806: [lt, 6.4], c6833: [lt, 6.4], d5503: ["Xperia Z1 Compact", 4.3], d2533: ["Xperia C3", 5.5], d6563: ["Xperia Z2a", 5], d5322: ["Xperia T2", 6], d5803: [rn, 4.6], d5833: [rn, 4.6], d6603: [xt, 5.2], d6633: [xt, 5.2], d6653: [xt, 5.2], d6708: [xt, 5.2], e5633: [Tt, 5], e5643: [Tt, 5], e5653: [Tt, 5], e5663: [Tt, 5], e5303: [_, 5.5], e5306: [_, 5.5], e5333: [_, 5.5], e5343: [_, 5.5], e5353: [_, 5.5], e5363: [_, 5.5], e5506: [St, 6], e5533: [St, 6], e5553: [St, 6], e5563: [St, 6], e6508: ["Xperia Z4v", 5.2], e6533: ["Xperia Z3+", 5.2], e6603: [lr, 5.2], "xperia-z4": ["Xperia Z4", 5.2], "xperia-z5": [lr, 5.2], "so-02h": ["Xperia Z5 Compact", 4.6], "so-03h": ["Xperia Z5 Premium", 5.5], "lg-d80": [hn, 5.2], "lg-f320": [hn, 5.2], "[vs980": [hn, 5.2], "lg-ls980": [hn, 5.2], "lg-d85": [B, 5.5], lgls990: [B, 5.5], lgus990: [B, 5.5], "lg-as990": [B, 5.5], "lg-fs400": [B, 5.5], "lg-fs460": [B, 5.5], lgv31: [B, 5.5], "[as985": [B, 5.5], "[vs985": [B, 5.5], "lg-f460": ["LG G3 Prime", 5.5], "lg-d690": ["LG G3 Stylus", 5.5], "lg-d722": [Vt, 5], "lg-d724": [Vt, 5], "lg-d725": [Vt, 5], "lg-d728": [Vt, 5], "lg-h525": ["LG G4c", 5], "lg-h735": ["LG G4 Beat", 5.5], "lg-as811": [C, 5.5], "lg-as991": [C, 5.5], "lg-f500": [C, 5.5], "lg-h810": [C, 5.5], "lg-h811": [C, 5.5], "lg-h812": [C, 5.5], "lg-h815": [C, 5.5], "lg-h818": [C, 5.5], "lg-h819": [C, 5.5], lgus991: [C, 5.5], lgls991: [C, 5.5], "[as986": [C, 5.5], "[vs986": [C, 5.5], h830: [Kn, 5.3], h840: [Kn, 5.3], h850: [Kn, 5.3], "lg-e98": [ln, 5.5], "lg-f240": [ln, 5.5], "lg-h420": [or, 4.7], "lg-h440": [or, 4.7], "lg-h500": [fn, 5], "lg-h502": [fn, 5], "lg-h520": [fn, 5], "lg-h540": [N, 5.7], "lg-h542": [N, 5.7], "lg-h630": [N, 5.7], "lg-h631": [N, 5.7], "lg-h635": [N, 5.7], lgms631: [N, 5.7], "lg-f600": [Y, 5.7], "lg-h900": [Y, 5.7], "lg-h901": [Y, 5.7], "lg-h961": [Y, 5.7], "lg-h962": [Y, 5.7], "[vs990": [Y, 5.7], "lg-d95": [Gt, 6], "lg-fs340": [Gt, 6], "lg-ls995": [Gt, 6], "lg-f510": [P, 5.5], "lg-h95": [P, 5.5], lgas995: [P, 5.5], lgls996: [P, 5.5], lgus996: [P, 5.5], "htc-x9u": ["HTC One X9", 5.5], "htc-m9p": [In, 5.2], "htc-one-m9p": [In, 5.2], "htc-one-m9": [$t, 5], "htc-m9u": [$t, 5], htc6535: [$t, 5], "htc-m8s": [Qn, 5], "htc-one-e8": [Qn, 5], "htc-m8": [Z, 5], "htc-one-m8": [Z, 5], "htc-0p6b": [Z, 5], htc6525: [Z, 5], "htc-a9": [Vn, 5], "htc-one-a9": [Vn, 5], "htc-one-e9": [Wn, 5.5], "htc-d826": [Wn, 5.5], "htc-desire-eye": ["HTC Desire Eye", 5.2], "htc-d728": [Tn, 5.5], "htc-desire-728": [Tn, 5.5], "htc-d626": [xn, 5], "htc-d630": [xn, 5], "htc-d828": ["HTC Desire 828", 5.5], "htc-desire-820": ["HTC Desire 820", 5.5], "htc-b830x": ["HTC Butterfly 3", 5.2], "htc-one]": [Or, 4.7], "htcone]": [Or, 4.7], moto3: ["Moto G Turbo", 5], xt105: [Yt, 4.7], xt106: [Yt, 4.7], xt108: [Yt, 4.7], xt109: [Yt, 4.7], xt1021: [Un, 5.5], xt1563: [Un, 5.5], xt157: ["Moto X Style", 5.7], xt125: ["Moto Droid Turbo", 5.2], xt1580: ["Moto X Force", 5.4], xt1585: ["Moto Droid Turbo 2", 5.4], "mt8-": ["Mate 8", 6], "mt7-": ["Mate 7", 6], "crr-": ["Mate S", 5.5], "hol-u19": ["Honor Holly", 5], "chm-u": ["Honor 4C", 5], "che1-": [Sr, 5.5], "che2-": [Sr, 5.5], "kiw-tl00h": ["Honor 5X", 5.5], "h60-l01": ["Honor 6", 5], "pe-tl10": [Er, 5.5], "pe-ul00": [Er, 5.5], "plk-l01": [Cr, 5.2], "plk-ul00": [Cr, 5.2], "ath-al00": ["Honor 7i", 5.2], "tit-": ["Enjoy 5", 5], "ale-l21": ["P8lite", 5], "ale-ul00": ["P8lite", 5], "gra-l09": ["P8", 5.2], "gra-ul10": ["P8", 5.2], p8max: ["P8max", 6.8], "p7-l": ["P7", 5], "p6-u06": ["P6", 4.7], "rio-l01": ["G8", 5.5], "g7-tl00": ["G7", 5.5], "rio-al00": ["G7+", 5.5], "scc-u21": ["Y6", 5], "scl-l21": ["Y6", 5], "hol-t00": ["3C", 5], a7010: ["Vibe K4 Note", 5.5], x3a40: ["Vibe X3", 5.5], "k50-t5": ["K3 Note", 5.5], a7000: ["A7000", 5.5], a6000: ["A6000", 5.5], "redmi-note-3": ["Redmi Note 3", 5.5], "redmi-note-2": ["Redmi Note 2", 5.5], "redmi-3": ["Redmi 3", 5], "redmi-2": ["Redmi 2", 4.7], "mi-4": ["Mi 4", 5], "mi-3": ["Mi 3", 5], "mi-note": ["Mi Note", 5.7], ze551ml: ["Zenfone 2", 5.5], ze601kl: [et, 6], z011d: [et, 6], ze551kl: [et, 5.5], zd551kl: [Ln, 5.5], z00ud: [Ln, 5.5], zx550: [Bn, 5.5], zx551ml: [Bn, 5.5], "one a2003": ["OnePlus 2", 5.5], "[one]": [X, 5.5], a0001: [X, 5.5], e1003: ["OnePlus X", 5], a2001: [X, 5.5], a2005: [X, 5.5], "lumia-520": ["Lumia 520", 4], "lumia-535": ["Lumia 535", 5], "lumia-540": ["Lumia 540", 5], "lumia-550": ["Lumia 550", 4.7], "lumia-630": ["Lumia 630", 4.5], "lumia-635": ["Lumia 635", 4.5], "lumia-640-xl": ["Lumia 640 XL", 5.7], "lumia-640": ["Lumia 640", 5], "lumia-730": ["Lumia 730", 4.7], "lumia-735": ["Lumia 735", 4.7], "lumia-830": ["Lumia 830", 5], "lumia-930": ["Lumia 930", 5], "lumia-950-xl": ["Lumia 950 XL", 5.7], "lumia-950": ["Lumia 950", 5.2], "lumia-1020": ["Lumia 1020", 4.5], "lumia-1320": ["Lumia 1320", 6], "lumia-1520": ["Lumia 1520", 6], "nexus-4": ["Nexus 4", 4.7], "nexus-5x": [gr, 5.2], "nexus-5": ["Nexus 5", 5], "lg-h791": [gr, 5.2], "nexus-6p": ["Nexus 6P", 5.7], "nexus-6": ["Nexus 6", 5.96], "[list-end]": [xr, 5] };
        e = "[" + e + "]";
        for (dev in t) if (e[p](dev) >= 0) {
            var n = t[dev];
            return Array.isArray(n) || (n = t[n]), n
        } return s
    } function hs() {
        ei < 1 ? ei = 1 : ei > 179.9 && (ei = 179.9), ti < 0 ? ti = 0 : ti > 5 && (ti = 5);
        var e = ni[en]("|"), t;
        for (t = 0;
            t < 4;
            t++) {
                var r = Number(e[t]);
            isNaN(r) && (r = t == 0 ? 1 : 0), ri[t] = r
        } ii = ri[0] != 1 || ri[1] != 0 || ri[2] != 0 || ri[3] != 0, Ti[f] && (gi || bi) && (ps(0, 0), Oa(n))
    } function ps(e, r) {
        var i = ls(), s = 0, o = 0, u = _r[kn].canvas;
        if (u) {
            var a = Number(_r[w].framebufferscale);
            s = u[ht], o = u[j], !isNaN(a) && a != 0 && (s /= a, o /= a)
        } if (e <= 0 || r <= 0) e = s, r = o;
        var f = ei, l = ti;
        f = Math.tan(f * .5 * ji), l = Math.exp(l) - 1;
        var c = Math.atan(f) * 2 / 2, h = l * 1e3, p = 1e3, d = p * Math.sin(c), v = p * Math.cos(c), m = 2 * Math.atan(d / (h + v));
        f = Math.tan(m / 2);
        var g = l, y = Gr;
        y /= Zr;
        var b = i.screenwidth_mm, E = i.screenheight_mm;
        if (Yr > 0) {
            var S = Math.min(screen[ht], screen[j]), x = Math.max(screen[ht], screen[j]);
            b = Math[Sn](Yr * Yr / (1 + S / x * (S / x))) * 25.4, E = b * S / x
        } var T = b / 2 - y, N = 2 * (T / b), C = e, k = r, L = i.screenwidth_px, A = i.screenheight_px, O = n;
        if (yi || Dr.tablet || r > e) O = t;
        C <= 0 && (C = s), k <= 0 && (k = o);
        var M = E / 70.9, _ = f;
        _ *= M, Oi = M / .69, O && (_ *= k / A, N = 2 * (b * (C / L) / 2 - y) / (b * (C / L)));
        var D = 2 * Math.atan(_) * Fi;
        Mi = D, _i = g, Di = N, ds()
    } function ds() {
        var e = _r[u];
        Mi > 0 && (e[nt] = _i, e.fov = Mi, e[Rt] = Mi, e[Wt] = Mi, e[b] = 0, e[st] = wr, e[k] = n, e[S] = 0, e[D] = Yn, e[g] = 0, e[ot] = 0, _r[w][Et] = Di)
    } function vs() {
        var e = _r[u];
        e[st] = wr, e[D] = Yn, e[k] = n, e[S] = 0, e[g] = 0, e[ot] = 0, e[Rt] = 0, e[Wt] = 179, e.fov = ts, e[nt] = 0, e[b] = 0
    } function ms() { return Dr[E] && Vi && Vi.deviceName ? Vi.deviceName : (ls(), fs ? fs[Xn] : "") } function gs() { return fs ? fs.screendiagonal_inch : 0 } function ys(e) {
        if (("" + e)[h]() == sn) Yr = 0, hs();
        else {
            var t = parseFloat(e);
            if (isNaN(t) || t <= 0) t = 0;
            Yr = t, hs()
        }
    } function bs() {
        var e = Yr;
        return e <= 0 ? sn : e
    } function ws() { return Dr[A] && Ei == t ? _r[w][q] : _r[kn].canvas } function Es() { Ti[f] && (gi || bi) && (ps(0, 0), Oa(n)) } function Ss() {
        if (mi && vi == t) if (gi == t) if (Xi) {
            Dr[A] && Dr[c][m][a] && Hr[o](Dr[c][m][a], js);
            if (lo()) {
                zr && Dr[E] && Ei == t && _r.set(ct, n);
                var e = { source: _r[kn].canvas }, r = t, i = navigator[vt][p]("Chrome/51.0.");
                i > 0 && parseInt(navigator[vt][Ut](i + 12)) < 2701 && (r = n), r == t && (e = [e]), Xi.requestPresent(e).then(function () {
                    Ti[f] = n, as(n), Ni = n;
                    var e = _r[w][q];
                    window.activekrpanowindow = e.id, e.focus()
                }, function () { })
            } else Ti[f] = n, Ni = t, as(n), xs(n)
        } else {
            var s = ws();
            Dr[c][m][a] && Hr[o](Dr[c][m][a], Fs), Ti[f] = n, as(n), Ni = n, bi = t, ui == t && Dr[A] && (bi = n), bi && (Ni = t), s[Dr[c][m].requestfullscreen]({ vrDisplay: Vi, vrDistortion: Ni }), Dr[mn] && ks(_r[u][O]), Ni == t && ps()
        } else {
            Dr[c][m][a] && Hr[o](Dr[c][m][a], Fs), Ti[f] = n, as(n);
            if (Dr[mn] || Dr.tablet) Ci == 1 ? window[o](v, oo, n) : Ci == 2 && window[o](T, gu, n);
            yi == t && Dr[c][m].touch && _r[x][kt][o](Dr[c][m][Rn], As, t)
        }
    } function xs(e) {
        if (Dr[E] || Jr == t) return;
        try {
            var n = typeof screen[d] == "object" && screen[d].type && screen[d].lock;
            if (e) {
                var r = "" + (n ? screen[d].type : screen[d] || screen[mr]), i = r[p](Kt) >= 0 ? r : Kt;
                screen[fr] ? screen[fr](i) : screen[Hn] ? screen[Hn](i) : n && screen[d].lock(i)
            } else screen[zn] ? screen[zn]() : screen[bn] ? screen[bn]() : n && screen[d].unlock()
        } catch (s) { }
    } function Ts() { Ti[f] = t, _r.get(ct) && _r.set(ct, t), Xi && lo() && Xi.exitPresent(), window[r](v, oo, n), window[r](T, gu, n), Dr[c][m].touch && _r[x][kt][r](Dr[c][m][Rn], As, t), as(t), _r[u][Q] = n } function Ns() { mi && (vi ? Ts() : Ss()) } function Cs(e) { ks(e, n) } function ks(e, t) {
        t === undefined && (t = n), e === undefined ? e = Number.NaN : e = Number(e), isNaN(e) && _r.xml && _r.xml[u] && (e = Number(_r.xml[u][O]), isNaN(e) && (e = 0));
        var r = qr;
        if (t == n) if (Xi) Xi.resetPose(), r = 0, Ai = 0;
        else if ($i) { try { $i.resetSensor !== undefined && $i.resetSensor() } catch (i) { } try { $i.zeroSensor !== undefined && $i.zeroSensor() } catch (i) { } r = 0, Ai = 0 } yi && (_r[u][O] = e), Ai = Ai - r + e, Is = 0
    } function As(e) {
        var i = t;
        if (Xr == t) i = n;
        else {
            var u = _r[x].getMousePos(e[pr] ? e[pr][0] : e);
            u.x /= _r.stagescale, u.y /= _r.stagescale;
            if (e.type == Dr[c][m][Rn]) Ls == s ? (Ls = u, _r[x][kt][o](Dr[c][m][ar], As, n), _r[x][kt][o](Dr[c][m][Lr], As, n)) : i = n;
            else if (e.type == Dr[c][m][Lr]) i = n;
            else if (e.type == Dr[c][m][ar] && Ls) {
                var a = Ls.x, f = u.x;
                if (_r[w][_n]) {
                    var l = _r.stagewidth * .5;
                    (a >= l || f >= l) && (a < l || f < l) && (f = a)
                } var h = _r[br](a, Ls.y, t), p = _r[br](f, u.y, t), d = p.x - h.x;
                Ls = u, Ai -= d
            }
        } i && (Ls = s, _r[x][kt][r](Dr[c][m][ar], As, n), _r[x][kt][r](Dr[c][m][Lr], As, n))
    } function Os() {
        if (Rr == t) _r[Dt] = -1, _r[tt] = t;
        else if (_r.image.type == "cube" && _r.image.multires) {
            var e = ls().best_res, r = 0, s = -1, o = 0, u = _r.image.level.getArray(), a = u[Jt];
            if (a > 0) for (i = 0;
                i < a;
                i++) {
                    var f = u[i].tiledimagewidth, l = Math.abs(f - e);
                if (s == -1 || l < s) r = f, s = l, o = i
            } if (s > 0) {
                _r[Dt] = o, _r[tt] = n;
                if (r > 0) {
                    var c = 4 + 8 * (r * r * 6 + 1048575 >> 20);
                    c > _r.memory[Zn] && (_r.memory[Zn] = c)
                }
            }
        }
    } function Ms() { Ti[f] && Os() } function _s() { Ms(), hs() } function Ps() { ki = 0, no.t = 0, ro.t = 0, Yu(), na = 0, Gu = t, fu = s } function Bs(e) { Hs == 1 ? (Bi.apply(document), Hs = 0) : (Hi.apply(ws()), Hs = 1) } function js(e) {
        var n = !!(Hr[_t] || Hr[K] || Hr[mt] || Hr[R] || Hr[it]);
        n == t && Ts()
    } function Fs(e) {
        var i = ws(), s = !!(Hr[_t] || Hr[K] || Hr[mt] || Hr[R] || Hr[it]);
        if (s && Ti[f]) { try { Dr[E] && Pi && (Hi.apply(i), yi && (Hs = 1, _r[x][kt][o](U, Bs, t))) } catch (u) { } xs(n), Dr[E] && (qs = 5, i[o](pt, Rs, t)) } else xs(t), window[r](v, oo, n), window[r](T, gu, n), i[r](pt, Rs, t), _r[x][kt][r](U, Bs, t), Ti[f] = t, as(t)
    } function Rs(e) {
        var t = ws();
        Xi && (t = _r[w][q]);
        if (Hr[jn] === t || Hr[gn] === t) {
            var n = e.movementX || e.mozMovementX, r = e.movementY || e.mozMovementY;
            if (qs > 0) {
                qs--;
                return
            } if (!isNaN(n)) {
                Is += n * jr;
                while (Is < 0) Is += Math.PI * 2;
                while (Is >= Math.PI * 2) Is -= Math.PI * 2
            } else n = 0;
            yi && (isNaN(r) && (r = 0), Ir && (_r[u][O] += n * jr * Fi, _r[u][tn] = Math.max(Math.min(_r[u][tn] + r * jr * Fi, 120), -120)))
        }
    } function Us(e, t, n, r) { this.x = e, this.y = t, this.z = n, this.w = r } function zs(e) {
        var t = Math[Sn](e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w);
        t === 0 ? (e.x = e.y = e.z = 0, e.w = 1) : (t = 1 / t, e.x *= t, e.y *= t, e.z *= t, e.w *= t)
    } function Ws(e) { e.x *= -1, e.y *= -1, e.z *= -1, zs(e) } function Xs(e, t) { return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w } function Vs(e) { return Math[Sn](e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w) } function $s(e, t) {
        var n = e.x, r = e.y, i = e.z, s = e.w, o = t.x, u = t.y, a = t.z, f = t.w;
        e.x = n * f + s * o + r * a - i * u, e.y = r * f + s * u + i * o - n * a, e.z = i * f + s * a + n * u - r * o, e.w = s * f - n * o - r * u - i * a
    } function Js(e, t) {
        var n = t.x, r = t.y, i = t.z, s = t.w, o = e.x, u = e.y, a = e.z, f = e.w;
        e.x = n * f + s * o + r * a - i * u, e.y = r * f + s * u + i * o - n * a, e.z = i * f + s * a + n * u - r * o, e.w = s * f - n * o - r * u - i * a
    } function Ks(e, t, n) {
        var r = e.x, i = e.y, s = e.z, o = e.w, u = r * t.x + i * t.y + s * t.z + o * t.w;
        u < 0 ? (u = -u, e.x = -t.x, e.y = -t.y, e.z = -t.z, e.w = -t.w) : (e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w);
        if (u >= 1) {
            e.w = o, e.x = r, e.y = i, e.z = s;
            return
        } var a = Math.acos(u), f = Math[Sn](1 - u * u);
        if (Math.abs(f) < .001) {
            e.w = .5 * (o + e.w), e.x = .5 * (r + e.x), e.y = .5 * (i + e.y), e.z = .5 * (s + e.z);
            return
        } var l = Math.sin((1 - n) * a) / f, c = Math.sin(n * a) / f;
        e.w = o * l + e.w * c, e.x = r * l + e.x * c, e.y = i * l + e.y * c, e.z = s * l + e.z * c
    } function Qs(e, t, n) {
        var r = n / 2, i = Math.sin(r);
        e.x = t.x * i, e.y = t.y * i, e.z = t.z * i, e.w = Math.cos(r)
    } function Gs(e, t, n, r, i) {
        var s = Math.cos(t / 2), o = Math.cos(n / 2), u = Math.cos(r / 2), a = Math.sin(t / 2), f = Math.sin(n / 2), l = Math.sin(r / 2);
        return i === "XYZ" ? (e.x = a * o * u + s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u - a * f * l) : i === cn ? (e.x = a * o * u + s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u + a * f * l) : i === "ZXY" ? (e.x = a * o * u - s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u - a * f * l) : i === "ZYX" ? (e.x = a * o * u - s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u + a * f * l) : i === "YZX" ? (e.x = a * o * u + s * f * l, e.y = s * f * u + a * o * l, e.z = s * o * l - a * f * u, e.w = s * o * u - a * f * l) : i === "XZY" && (e.x = a * o * u - s * f * l, e.y = s * f * u - a * o * l, e.z = s * o * l + a * f * u, e.w = s * o * u + a * f * l), e
    } function Ys(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h, p, d;
        i = t.x, s = t.y, o = t.z, u = Math[Sn](i * i + s * s + o * o), u > 0 && (i /= u, s /= u, o /= u), a = n.x, f = n.y, l = n.z, c = Math[Sn](a * a + f * f + l * l), c > 0 && (a /= c, f /= c, l /= c), r = i * a + s * f + o * l + 1, r < 1e-6 ? (r = 0, Math.abs(i) > Math.abs(o) ? (h = -s, p = i, d = 0) : (h = 0, p = -o, d = s)) : (h = s * l - o * f, p = o * a - i * l, d = i * f - s * a), e.x = h, e.y = p, e.z = d, e.w = r, zs(e)
    } function Zs(e, t, n) {
        function r(e, t, n) { return e < t ? t : e > n ? n : e } if (!t || isNaN(t.x) || isNaN(t.y) || isNaN(t.z) || isNaN(t.w)) return;
        var i = t.x * t.x, s = t.y * t.y, o = t.z * t.z, u = t.w * t.w;
        if (n === "XYZ") e[0] = Math[jt](2 * (t.x * t.w - t.y * t.z), u - i - s + o), e[1] = Math.asin(r(2 * (t.x * t.z + t.y * t.w), -1, 1)), e[2] = Math[jt](2 * (t.z * t.w - t.x * t.y), u + i - s - o);
        else if (n === cn) e[0] = Math.asin(r(2 * (t.x * t.w - t.y * t.z), -1, 1)), e[1] = Math[jt](2 * (t.x * t.z + t.y * t.w), u - i - s + o), e[2] = Math[jt](2 * (t.x * t.y + t.z * t.w), u - i + s - o);
        else if (n === "ZXY") e[0] = Math.asin(r(2 * (t.x * t.w + t.y * t.z), -1, 1)), e[1] = Math[jt](2 * (t.y * t.w - t.z * t.x), u - i - s + o), e[2] = Math[jt](2 * (t.z * t.w - t.x * t.y), u - i + s - o);
        else if (n === "ZYX") e[0] = Math[jt](2 * (t.x * t.w + t.z * t.y), u - i - s + o), e[1] = Math.asin(r(2 * (t.y * t.w - t.x * t.z), -1, 1)), e[2] = Math[jt](2 * (t.x * t.y + t.z * t.w), u + i - s - o);
        else if (n === "YZX") e[0] = Math[jt](2 * (t.x * t.w - t.z * t.y), u - i + s - o), e[1] = Math[jt](2 * (t.y * t.w - t.x * t.z), u + i - s - o), e[2] = Math.asin(r(2 * (t.x * t.y + t.z * t.w), -1, 1));
        else {
            if (n !== "XZY") return;
            e[0] = Math[jt](2 * (t.x * t.w + t.y * t.z), u - i + s - o), e[1] = Math[jt](2 * (t.x * t.z + t.y * t.w), u + i - s - o), e[2] = Math.asin(r(2 * (t.z * t.w - t.x * t.y), -1, 1))
        }
    } function eo(e, t) {
        var n, r, i, o;
        e == s ? (n = Math.tan(50 * ji), r = Math.tan(50 * ji), i = Math.tan(45 * ji), o = Math.tan(45 * ji)) : (n = Math.tan(e.upDegrees * ji), r = Math.tan(e.downDegrees * ji), i = Math.tan(e.leftDegrees * ji), o = Math.tan(e.rightDegrees * ji));
        var u = 2 / (i + o), a = 2 / (n + r);
        t[0] = u, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -a, t[6] = 0, t[7] = 0, t[8] = (i - o) * u * .5, t[9] = -((n - r) * a * .5), t[10] = 65535 / 65536, t[11] = 1, t[12] = 0, t[13] = 0, t[14] = 65535 / 65536 - 1, t[15] = 1
    } function to() {
        var e = Number.NaN, t = screen[ht] > screen[j], n = screen[d] || screen.msOrientation || screen[mr];
        if (n) {
            n = ("" + n)[h]();
            var r = n[p]("portrait") >= 0, i = n[p](Kt) >= 0, s = n[p]("primary") >= 0, o = n[p]("secondary") >= 0;
            r && s ? e = 0 : i && s ? e = 90 : i && o ? e = -90 : r && o && (e = 180), !isNaN(e) && !Dr[mn] && (e -= 90)
        } return isNaN(e) && (e = _r._have_top_access ? top[d] : window[d]), isNaN(e) && (Dr[mn] ? e = t ? 90 : 0 : e = t ? 0 : 90), Dr.tablet && Dr[ut] && (e += 90), e
    } function oo(e) {
        if (!Ti[f]) return;
        var t = _r[dt], n = t - mu;
        mu = t;
        var r = to() * ji, i = e.alpha * ji, o = e.beta * ji, u = e.gamma * ji;
        so === s && (so = i), i = i - so + Math.PI;
        var a = Math.cos(i), l = Math.sin(i), c = Math.cos(o), h = Math.sin(o), p = Math.cos(u), d = Math.sin(u);
        i = Math[jt](-l * h * p - a * d, l * d - a * h * p), o = -Math.asin(c * p), u = Math[jt](c * d, -h) - Math.PI, no.q.x = ro.q.x, no.q.y = ro.q.y, no.q.z = ro.q.z, no.q.w = ro.q.w, no.t = ro.t;
        var v = ro.q;
        ro.t = t, ki++, Gs(v, o, i + r, u - r, cn)
    } function fo() {
        if (Ti[f]) {
            _r[u][L] = n, _r.autorotate.interrupt();
            var e = [0, 0, 0];
            if (Xi) {
                var t = Xi.getPose();
                if (t) {
                    uo = t;
                    var r = t[d];
                    ao.x = r[0], ao.y = r[1], ao.z = r[2], ao.w = r[3], Zs(e, ao, cn);
                    var i = 0;
                    Dr[A] && (i = to()), i += Ai, qr = (-e[1] + Is) * Fi + i, Ir && (_r[u][O] = qr, _r[u][tn] = -e[0] * Fi, _r[u][On] = -e[2] * Fi)
                }
            } else if ($i) {
                Qi = $i.getState();
                if (Qi) {
                    bi ? ds() : vs();
                    if (Fr && Ir) {
                        var o = Qi.position;
                        if (o) {
                            Is = 0;
                            var a = 400;
                            _r[u].tx = o.x * a, _r[u].ty = o.y * a, _r[u].tz = o.z * a
                        }
                    } Zs(e, Qi[d], cn);
                    var i = 0;
                    Dr[A] && (i = to()), i += Ai, qr = (-e[1] + Is) * Fi + i, Ir && (_r[u][O] = qr, _r[u][tn] = -e[0] * Fi, _r[u][On] = -e[2] * Fi)
                }
            } else if (gi) {
                ds();
                if (ki > Li) {
                    var l = s;
                    if (fi == 0) l = ro.q;
                    else if ((fi == 4 || fi >= 6) && Ci == 2) l = ro.q, du(l);
                    else if (fi <= 3 || fi == 5 || Ci == 1) if (no.t > 0 && ro.t > 0) {
                        var c = _r[dt], h = ro.t - no.t, p = 0, v = 0, m = 1;
                        fi == 1 || fi == 2 ? p = c - ro.t : (p = c - no.t, m = 2), h <= 0 ? v = 1 : (v = p / h, v > m && (v = m)), io.x = no.q.x, io.y = no.q.y, io.z = no.q.z, io.w = no.q.w, Ks(io, ro.q, v), l = io
                    } if (l) {
                        Zs(e, l, cn);
                        var i = to();
                        qr = Ai + (-e[1] + Is) * Fi + i, Ir && (_r[u][O] = qr, _r[u][tn] = -e[0] * Fi, _r[u][On] = -e[2] * Fi)
                    }
                }
            }
        }
    } function lo() {
        var e = n;
        return Dr[A] && ui == t && (e = t), e
    } function co(e) { return Xi && lo() ? (Xi.requestAnimationFrame(e), n) : t } function ho() { Xi && Xi[W] && uo && Xi.submitFrame(uo) } function po(e, r) {
        if (gi == t && Ni == n) if (Xi) {
            var i = Xi[y](e == 1 ? Bt : G);
            eo(i.fieldOfView, r)
        } else eo(e == 1 ? Zi : es, r)
    } function vo(e) {
        var t = 0;
        if (Xi) {
            var n = Xi[y](e == 1 ? Bt : G);
            t = n.offset[0]
        } else e == 1 ? Gi && Gi.x ? t = Gi.x : t = -0.03 : e == 2 && (Yi && Yi.x ? t = Yi.x : t = .03);
        return t *= 320 / Br, t
    } function mo(e, r) {
        var i = 0, o = 0;
        if (Xi) {
            if (Xi[W]) {
                var u = Xi[y](Bt), a = Xi[y](G);
                i = Math.max(u.renderWidth, a.renderWidth) * 2, o = Math.max(u.renderHeight, a.renderHeight);
                if (i > 0 && o > 0) return i *= Ur, o *= Ur, { w: i, h: o }
            } return s
        } var l = !!(Hr[_t] || Hr[K] || Hr[mt] || Hr[R] || Hr[it]);
        if (Ti[f] && l && gi == t && Ni == n) {
            if (Ji) i = Math.max(Ji[J][ht] + Ki[J][ht], Ki[J].x + Ki[J][ht]), o = Math.max(Ji[J][j], Ki[J][j]);
            else if (M in Vi) {
                var c = Vi[M](Bt), h = Vi[M](G);
                i = c[ht] + h[ht], o = Math.max(c[j], h[j])
            } else if (yt in Vi) {
                var p = Vi[yt]();
                i = p[ht], o = p[j]
            } else Ct in Vi ? (i = Vi[Ct][ht], o = Vi[Ct][j]) : (i = 2e3, o = 1056);
            Dr[E] && Dr[ut] && (i = e, o = r);
            if (i > 0 && o > 0) return i *= Ur, o *= Ur, { w: i, h: o }
        } else Ti[f] && (gi || Ni == t) && ps(e, r);
        return s
    } function go(e) {
        var e = ("" + e)[h](), r = e[p](yr), i = e.lastIndexOf("]");
        if (r >= 0 && i > r) {
            var o = e[Ut](r + 8, i), u = yr + o + "]";
            u != li && (li = u, hi && (yo(hi, t), hi = s), hi = _r.get(li), hi && yo(hi, n))
        }
    } function yo(e, r) {
        if (r == n) e[qn] = { visible: e[Mn], enabled: e[f], flying: e.flying, scaleflying: e[It], distorted: e[pn], zorder: e.zorder, scale: e.scale, depth: e.depth, onover: e.onover, onout: e.onout }, e[f] = t, e.flying = 1, e[It] = t, e[pn] = n, e.zorder = 999999999;
        else {
            var i = e[qn];
            i && (e[Mn] = i[Mn], e[f] = i[f], e.flying = i.flying, e[It] = i[It], e[pn] = i[pn], e.zorder = i.zorder, e.scale = i.scale, e.depth = i.depth, e.onover = i.onover, e.onout = i.onout, e[qn] = i = s)
        }
    } function bo() {
        if (li) {
            var e = hi;
            e == s && (e = _r.get(li), e && (yo(e, n), hi = e));
            if (e) {
                if (!Ti[f]) return e[Mn] = t, s;
                e.onover = pi, e.onout = di, e[f] = ci, e[Mn] = n
            } return e
        } return s
    } function wo() { this.x = 0, this.y = 0, this.z = 0 } function Eo(e, t, n, r) { e.x = t, e.y = n, e.z = r } function So(e, t) { e.x = t.x, e.y = t.y, e.z = t.z } function xo(e) { e.x = 0, e.y = 0, e.z = 0 } function To(e, t, n) { t == 0 ? e.x = n : t == 1 ? e.y = n : e.z = n } function No(e) { return Math[Sn](e.x * e.x + e.y * e.y + e.z * e.z) } function Co(e) {
        var t = No(e);
        t > 0 ? ko(e, 1 / t) : (e.x = 0, e.y = 0, e.z = 0)
    } function ko(e, t) { e.x *= t, e.y *= t, e.z *= t } function Lo(e, t, n) { Eo(n, e.x - t.x, e.y - t.y, e.z - t.z) } function Ao(e, t, n) { Eo(n, e.y * t.z - e.z * t.y, e.z * t.x - e.x * t.z, e.x * t.y - e.y * t.x) } function Oo(e, t) { return e.x * t.x + e.y * t.y + e.z * t.z } function Mo() {
        var e;
        return typeof Float64Array != "undefined" ? e = new Float64Array(9) : e = new Array(9), Do(e), e
    } function _o(e) { e[0] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = 0 } function Do(e) { e[0] = e[4] = e[8] = 1, e[1] = e[2] = e[3] = e[5] = e[6] = e[7] = 0 } function Po(e, t) { e[0] = e[4] = e[8] = t } function Ho(e, t) { e[0] *= t, e[1] *= t, e[2] *= t, e[3] *= t, e[4] *= t, e[5] *= t, e[6] *= t, e[7] *= t, e[8] *= t } function Bo(e, t) {
        var n = e[1], r = e[2], i = e[5];
        t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = n, t[4] = e[4], t[5] = e[7], t[6] = r, t[7] = i, t[8] = e[8]
    } function jo(e, t, n) { e[t] = n.x, e[t + 3] = n.y, e[t + 6] = n.z } function Fo(e, t) { e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8] } function Io(e, t) {
        var n = e[0] * (e[4] * e[8] - e[7] * e[5]) - e[1] * (e[3] * e[8] - e[5] * e[6]) + e[2] * (e[3] * e[7] - e[4] * e[6]);
        n != 0 && (n = 1 / n, t[0] = (e[4] * e[8] - e[7] * e[5]) * n, t[1] = -(e[1] * e[8] - e[2] * e[7]) * n, t[2] = (e[1] * e[5] - e[2] * e[4]) * n, t[3] = -(e[3] * e[8] - e[5] * e[6]) * n, t[4] = (e[0] * e[8] - e[2] * e[6]) * n, t[5] = -(e[0] * e[5] - e[3] * e[2]) * n, t[6] = (e[3] * e[7] - e[6] * e[4]) * n, t[7] = -(e[0] * e[7] - e[6] * e[1]) * n, t[8] = (e[0] * e[4] - e[3] * e[1]) * n)
    } function qo(e, t) { e[0] -= t[0], e[1] -= t[1], e[2] -= t[2], e[3] -= t[3], e[4] -= t[4], e[5] -= t[5], e[6] -= t[6], e[7] -= t[7], e[8] -= t[8] } function Ro(e, t) { e[0] += t[0], e[1] += t[1], e[2] += t[2], e[3] += t[3], e[4] += t[4], e[5] += t[5], e[6] += t[6], e[7] += t[7], e[8] += t[8] } function Uo(e, t, n) {
        var r = t[0], i = t[1], s = t[2], o = t[3], u = t[4], a = t[5], f = t[6], l = t[7], c = t[8], h = e[0], p = e[1], d = e[2];
        n[0] = h * r + p * o + d * f, n[1] = h * i + p * u + d * l, n[2] = h * s + p * a + d * c, h = e[3], p = e[4], d = e[5], n[3] = h * r + p * o + d * f, n[4] = h * i + p * u + d * l, n[5] = h * s + p * a + d * c, h = e[6], p = e[7], d = e[8], n[6] = h * r + p * o + d * f, n[7] = h * i + p * u + d * l, n[8] = h * s + p * a + d * c
    } function zo(e, t, n) {
        var r = e[0] * t.x + e[1] * t.y + e[2] * t.z, i = e[3] * t.x + e[4] * t.y + e[5] * t.z, s = e[6] * t.x + e[7] * t.y + e[8] * t.z;
        n.x = r, n.y = i, n.z = s
    } function Wo(e, t, n) { n[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n[3] = e[3] + t[3], n[4] = e[4] + t[4], n[5] = e[5] + t[5], n[6] = e[6] + t[6], n[7] = e[7] + t[7], n[8] = e[8] + t[8] } function eu(e, t, n) {
        Ao(e, t, Vo);
        if (No(Vo) == 0) Do(n);
        else {
            So($o, e), So(Jo, t), Co(Vo), Co($o), Co(Jo);
            var r = Qo, i = Go;
            Ao(Vo, $o, Xo), r[0] = $o.x, r[1] = $o.y, r[2] = $o.z, r[3] = Vo.x, r[4] = Vo.y, r[5] = Vo.z, r[6] = Xo.x, r[7] = Xo.y, r[8] = Xo.z, Ao(Vo, Jo, Xo), i[0] = Jo.x, i[3] = Jo.y, i[6] = Jo.z, i[1] = Vo.x, i[4] = Vo.y, i[7] = Vo.z, i[2] = Xo.x, i[5] = Xo.y, i[8] = Xo.z, Uo(i, r, n)
        }
    } function tu(e, t) {
        var n = Oo(e, e), r = Math[Sn](n), i, s;
        if (n < 1e-8) i = 1 - 1 / 6 * n, s = .5;
        else if (n < 1e-6) s = .5 - .25 * (1 / 6) * n, i = 1 - n * (1 / 6) * (1 - .05 * n);
        else {
            var o = 1 / r;
            i = Math.sin(r) * o, s = (1 - Math.cos(r)) * o * o
        } ru(e, i, s, t)
    } function nu(e, t) {
        var n = (e[0] + e[4] + e[8] - 1) * .5;
        Eo(t, (e[7] - e[5]) / 2, (e[2] - e[6]) / 2, (e[3] - e[1]) / 2);
        var r = No(t);
        if (n > Math.SQRT1_2) r > 0 && ko(t, Math.asin(r) / r);
        else if (n > -Math.SQRT1_2) {
            var i = Math.acos(n);
            ko(t, i / r)
        } else {
            var i = Math.PI - Math.asin(r), s = e[0] - n, o = e[4] - n, u = e[8] - n, a = Yo;
            s * s > o * o && s * s > u * u ? Eo(a, s, (e[3] + e[1]) / 2, (e[2] + e[6]) / 2) : o * o > u * u ? Eo(a, (e[3] + e[1]) / 2, o, (e[7] + e[5]) / 2) : Eo(a, (e[2] + e[6]) / 2, (e[7] + e[5]) / 2, u), Oo(a, t) < 0 && ko(a, -1), Co(a), ko(a, i), So(t, a)
        }
    } function ru(e, t, n, r) {
        var i = e.x * e.x, s = e.y * e.y, o = e.z * e.z;
        r[0] = 1 - n * (s + o), r[4] = 1 - n * (i + o), r[8] = 1 - n * (i + s);
        var u = t * e.z, a = n * e.x * e.y;
        r[1] = a - u, r[3] = a + u, u = t * e.y, a = n * e.x * e.z, r[2] = a + u, r[6] = a - u, u = t * e.x, a = n * e.y * e.z, r[5] = a - u, r[7] = a + u
    } function iu(e, t, n, r) {
        t *= ji, n *= ji, r *= ji;
        var i = Math.cos(t), s = Math.sin(t), o = Math.cos(n), u = Math.sin(n), a = Math.cos(r), f = Math.sin(r), l = i * u, c = s * u;
        e[0] = o * a, e[1] = l * a + i * f, e[2] = -c * a + s * f, e[3] = -o * f, e[4] = -l * f + i * a, e[5] = c * f + s * a, e[6] = u, e[7] = -s * o, e[8] = i * o
    } function su(e, t) {
        var n = e[0] + e[4] + e[8], r;
        n > 0 ? (r = Math[Sn](1 + n) * 2, t.x = (e[5] - e[7]) / r, t.y = (e[6] - e[2]) / r, t.z = (e[1] - e[3]) / r, t.w = .25 * r) : e[0] > e[4] && e[0] > e[8] ? (r = Math[Sn](1 + e[0] - e[4] - e[8]) * 2, t.x = .25 * r, t.y = (e[3] + e[1]) / r, t.z = (e[6] + e[2]) / r, t.w = (e[5] - e[7]) / r) : e[4] > e[8] ? (r = Math[Sn](1 + e[4] - e[0] - e[8]) * 2, t.x = (e[3] + e[1]) / r, t.y = .25 * r, t.z = (e[7] + e[5]) / r, t.w = (e[6] - e[2]) / r) : (r = Math[Sn](1 + e[8] - e[0] - e[4]) * 2, t.x = (e[6] + e[2]) / r, t.y = (e[7] + e[5]) / r, t.z = .25 * r, t.w = (e[1] - e[3]) / r)
    } function du(e) {
        if (yu) {
            var t = to();
            t != fu && (fu = t, iu(cu, 0, 0, -t), iu(lu, -90, 0, +t));
            var n;
            if (fi <= 1 || fi == 3) n = ia();
            else {
                var r = _r[dt], i = (r - ou) / 1e3, s = i;
                fi == 2 ? s += 2 / 60 : fi == 6 ? s += 1 / 60 : fi == 7 && (s += 2 / 60), n = aa(s)
            } Uo(cu, n, pu), Uo(pu, lu, hu), su(hu, e)
        }
    } function gu(e) {
        if (!Ti[f]) return;
        var r = _r[dt], i = r - mu;
        mu = r, i > 5e3 && (Ps(), i = .16), ki++;
        if (ki < Li) return;
        Gu == t && (Gu = n, Yu());
        var o = e[Ft], u = o.x, a = o.y, l = o.z;
        u == s && (u = 0), a == s && (a = 9.81), l == s && (l = 0);
        var c = e.acceleration;
        if (c) {
            var h = c.x, p = c.y, d = c.z;
            h == s && (h = 0), p == s && (p = 0), d == s && (d = 0), u -= h, a -= p, l -= d
        } if (Dr.ios || Dr.ie) u *= -1, a *= -1, l *= -1;
        var v = e.rotationRate, m = v.alpha, g = v.beta, y = v.gamma;
        m == s && (m = 0), g == s && (g = 0), y == s && (y = 0);
        if (Dr.ios || Dr[ut] || Dr.ie) {
            m *= ji, g *= ji, y *= ji;
            if (Dr.ie) {
                var b = m, w = g, E = y;
                m = w, g = E, y = b
            }
        } xa ? Aa(i, m, g, y) : Kr && vu(m, g, y, r);
        var S = Ta;
        m -= S.rx, g -= S.ry, y -= S.rz, Eo(uu, u, a, l), ta(uu, i), ou = r, Eo(au, m, g, y), ra(au, r);
        if (fi <= 3 || fi == 5) no.q.x = ro.q.x, no.q.y = ro.q.y, no.q.z = ro.q.z, no.q.w = ro.q.w, no.t = ro.t, du(ro.q), ro.t = r
    } function Yu() { Do(Mu), Do(_u), _o(Pu), Po(Pu, $u), _o(Du), Po(Du, 1), _o(Fu), Po(Fu, Ju), _o(Bu), _o(Hu), _o(ju), xo(Nu), xo(xu), xo(Su), xo(Tu), xo(Eu), Eo(wu, 0, 0, Ku), yu = t } function Zu(e, t) { zo(e, wu, Su), eu(Su, xu, Vu), nu(Vu, t) } function ea() { Bo(_u, Wu), Uo(Pu, Wu, Xu), Uo(_u, Xu, Pu), Do(_u) } function ta(e, t) {
        So(xu, e);
        if (yu) {
            Zu(Mu, Nu), t < 5 && (t = 5);
            var r = 1e3 / 60 / t, i = Qu * r, s = 1 / Qu, o = Cu;
            for (var u = 0;
                u < 3;
                u++)xo(o), To(o, u, s), tu(o, Iu), Uo(Iu, Mu, qu), Zu(qu, ku), Lo(Nu, ku, Lu), ko(Lu, i), jo(Hu, u, Lu);
            Bo(Hu, Ru), Uo(Pu, Ru, Uu), Uo(Hu, Uu, zu), Wo(zu, Fu, Bu), Io(Bu, Ru), Bo(Hu, Uu), Uo(Uu, Ru, zu), Uo(Pu, zu, ju), zo(ju, Nu, Eu), Uo(ju, Hu, Ru), Do(Uu), qo(Uu, Ru), Uo(Uu, Pu, Ru), Fo(Pu, Ru), tu(Eu, _u), Uo(_u, Mu, Mu), ea()
        } else eu(wu, xu, Mu), yu = n
    } function ra(e, t) {
        if (na != 0) {
            var n = (t - na) / 1e3;
            n > 1 && (n = 1), So(Tu, e), ko(Tu, -n), tu(Tu, _u), Fo(Au, Mu), Uo(_u, Mu, Au), Fo(Mu, Au), ea(), Fo(Ou, Du), Ho(Ou, n * n), Ro(Pu, Ou)
        } na = t, So(bu, e)
    } function ia() { return Mu } function aa(e) {
        var t = sa;
        So(t, bu), ko(t, -e);
        var n = oa;
        tu(t, n);
        var r = ua;
        return Uo(n, Mu, r), r
    } function va(e) {
        var t = e[p]("://");
        if (t > 0) {
            var n = e[p]("/", t + 3), r = e[Ut](0, t)[h](), i = e[Ut](t + 3, n), o = e[Ut](n);
            return [r, i, o]
        } return s
    } function ma(e) {
        if (ca == s) {
            var r = va(fa), i = va(window[Tr].href), u = i[0];
            if (u == "http" || u == "https") {
                if (Dr.ie || Dr.edge) u = "https";
                ha = u + "://" + r[1], pa = ha + r[2];
                var a = document[Nr]("iframe");
                a.style.cssText = "position:absolute;width:1px;height:1px;left:-9999px;visibility:hidden;", _r[w][q].appendChild(a), ca = a, a[o]("load", function () { la = n, e(ca) }, t), window[o]("message", ya, t), a.src = pa
            }
        } else la && e(ca)
    } function ga(e) { ma(function (t) { try { t.contentWindow.postMessage(e, ha) } catch (n) { } }) } function ya(e) {
        if (e.origin == ha) {
            var t = "" + e.data;
            t[Ut](0, 15) == "webvr_settings:" && ba(t[Ut](15))
        }
    } function ba(e) {
        var t = e[en](on), r = Number(t[0]), i = Number(t[1]), s = Number(t[2]), o = Number(t[3]), u = Number(t[4]), a = Number(t[5]), f = Number(t[6]), l = Number(t[7]), c = Number(t[8]), h = Number(t[9]), p = "" + t[10], d = Number(t[11]);
        isNaN(f) && (f = 0), isNaN(l) && (l = 0), isNaN(c) && (c = 0), isNaN(h) && (h = 1), isNaN(d) && (d = 0), p[en]("|")[Jt] != 4 && (p = $n), !isNaN(r) && r >= 30 && r < 90 && !isNaN(i) && i >= 0 && i < 12 && !isNaN(s) && s >= 1 && s < 180 && !isNaN(o) && o >= 0 && o < 10 && !isNaN(u) && u >= 1 && u < 500 && !isNaN(a) && a >= 0 && a < 10 && !isNaN(h) && h > 0 && h < 2 && (Gr = r, Yr = i, ei = s, ti = o, oi = u, fi = a, Ta.rx = f, Ta.ry = l, Ta.rz = c, Zr = h, ni = p, si = d, wi = n)
    } function wa(e) {
        var n = ("" + e)[h]() != "local";
        if (Dr[ut] || Dr.ios || Dr.safari || Dr[E]) n = t;
        return n
    } function Ea(e) {
        if (gi || bi) {
            if (da) try {
                var t = window.localStorage;
                if (t) {
                    var n = t[nr](yn);
                    n || (n = t[nr](wn)), n || (n = t[nr](Nn)), n || (n = t[nr](En)), n && ba(n)
                }
            } catch (r) { } wa(e) && ga("load.4")
        }
    } function Sa(e) {
        if (gi || bi) {
            var n = Gr + on + Yr + on + ei + on + ti + on + oi + on + fi + on + Ta.rx + on + Ta.ry + on + Ta.rz + on + Zr + on + ni + on + si;
            if (da) try {
                var r = window.localStorage;
                r && (r[Gn](yn, n), r[Gn](wn, n[en](on)[Ut](0, 10).join(on)), r[Gn](Nn, n[en](on)[Ut](0, 9).join(on)), r[Gn](En, n[en](on)[Ut](0, 6).join(on)))
            } catch (i) { } var s = ("" + e)[h]() != "local";
            if (Dr[ut] || Dr.ios) s = t;
            wa(e) && ga("save.4:" + n)
        }
    } function ka(e, r) { vi && gi && !yi && (xa = n, Kr = t, Na = e, Ca = r, Aa(-1)) } function La() { xa = t, Ta.rx = 0, Ta.ry = 0, Ta.rz = 0 } var e = "registerattribute", t = !1, n = !0, r = "removeEventListener", s = null, o = "addEventListener", u = "view", a = "fullscreenchange", f = "enabled", l = "onunavailable", c = "browser", h = "toLowerCase", p = "indexOf", d = "orientation", v = "deviceorientation", m = "events", g = "architectural", y = "getEyeParameters", b = "maxpixelzoom", w = "display", E = "desktop", S = "fisheyefovlink", x = "control", T = "devicemotion", N = "LG G4 Stylus", C = "LG G4", k = "stereographic", L = "continuousupdates", A = "android", O = "hlookat", M = "getRecommendedEyeRenderRect", _ = "Xperia C4", D = "limitview", P = "LG G Flex 2", H = "area", B = "LG G3", j = "height", F = "getCurrentEyeFieldOfView", I = "onavailable", q = "viewerlayer", R = "webkitFullscreenElement", U = "mousedown", z = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n", W = "isPresenting", X = "OnePlus One", V = "capabilities", $ = "loadwhilemoving", J = "renderRect", K = "mozFullScreenElement", Q = "haschanged", G = "right", Y = "LG V10", Z = "HTC One M8", et = "Zenfone 2 Laser", tt = "downloadlockedlevel", nt = "fisheye", rt = "float r = texture2D(sm,vR).r;", it = "msFullscreenElement", st = "fovtype", ot = "pannini", ut = "firefox", at = "call", ft = "float b = texture2D(sm,vB).b;", lt = "Xperia Z Ultra", ct = "fullscreen", ht = "width", pt = "mousemove", dt = "timertick", vt = "userAgent", mt = "webkitIsFullScreen", gt = "Galaxy S5", yt = "getRecommendedRenderTargetSize", bt = "Xperia Z1",
        wt = "uniform1f", Et = "stereooverlap", St = "Xperia C5", xt = "Xperia Z3", Tt = "Xperia M5", Nt = "vec2 vR = center + v * ca;", Ct = "renderTargetSize", kt = "layer", Lt = "vec2 vB = center + v / ca;", At = "precision mediump float;\n", Ot = "documentElement", Mt = "getEyeTranslation", _t = "fullscreenElement", Dt = "lockmultireslevel", Pt = "precision highp float;\n", Ht = "#endif\n", Bt = "left", jt = "atan2", Ft = "accelerationIncludingGravity", It = "scaleflying", qt = "uniform sampler2D sm;", Rt = "fovmin", Ut = "slice", zt = "vec2 v = tx - center;", Wt = "fovmax", Xt = "usercontrol", Vt = "LG G3 S", $t = "HTC One M9", Jt = "length", Kt = "landscape", Qt = "useProgram", Gt = "LG G Flex", Yt = "Moto X", Zt = "uniform float ca;", en = "split", tn = "vlookat", nn = "uniform float ol;", rn = "Xperia Z3 Compact", sn = "auto", on = ",", un = "recommendedFieldOfView", an = "varying vec2 tx;", fn = "LG Magna", ln = "LG Optimus G Pro", cn = "YXZ", hn = "LG G2", pn = "distorted", dn = "mousetype", vn = "onunknowndevice", mn = "mobile", gn = "mozPointerLockElement", yn = "krpano.webvr.4", bn = "mozUnlockOrientation", wn = "krpano.webvr.3", En = "krpano.webvr.1", Sn = "sqrt", xn = "HTC Desire 626", Tn = "HTC Desire 728", Nn = "krpano.webvr.2", Cn = "#ifdef GL_ES\n", kn = "webGL", Ln = "Zenfone Selfie", An = "contextmenu", On = "camroll", Mn = "visible", _n = "stereo", Dn = "mozGetVRDevices", Pn = "hasExternalDisplay", Hn = "mozLockOrientation", Bn = "Zenfone Zoom", jn = "pointerLockElement", Fn = "void main()", In = "HTC One M9+", qn = "_VR_backup", Rn = "touchstart", Un = "Moto X Play", zn = "unlockOrientation", Wn = "HTC One E9", Xn = "devicename", Vn = "HTC One A9", $n = "1|0|0|0", Jn = "getVRDisplays", Kn = "LG G5", Qn = "HTC One E8", Gn = "setItem", Yn = "off", Zn = "maxmem", er = "iPhone 6+", tr = "Galaxy S4", nr = "getItem", rr = "Galaxy A3", ir = "Galaxy A5", sr = "Galaxy A7", or = "LG Spirit", ur = "Galaxy S3", ar = "touchmove", fr = "lockOrientation", lr = "Xperia Z5", cr = "iPhone 6", hr = "createppshader", pr = "changedTouches", dr = "eyeTranslation", vr = "hardwareUnitId", mr = "mozOrientation", gr = "Nexus 5X", yr = "hotspot[", br = "screentosphere", wr = "VFOV", Er = "Honor 6+", Sr = "Honor 4X", xr = "Unknown", Tr = "location", Nr = "createElement", Cr = "Honor 7", kr = "#else\n", Lr = "touchend", Ar = "keydown", Or = "HTC One", Mr = this;
    Mr.name = "WebVR", Mr.version = "1.19-pr7", Mr.build = "2016-09-09";
    var _r = s, Dr = s, Pr = s, Hr = document, Br = 1, jr = .00125, Fr = t, Ir = n, qr = 0, Rr = n, Ur = 1, zr = n, Wr = n, Xr = t, Vr = t, $r = n, Jr = n, Kr = t, Qr = t, Gr = 63.5, Yr = sn, Zr = 1, ei = 96, ti = .6, ni = $n, ri = [1, 0, 0, 0], ii = t, si = 0, oi = 100, ui = t, ai = 1, fi = 3, li = "", ci = n, hi = s, pi = s, di = s, vi = t, mi = t, gi = t, yi = t, bi = t, wi = t, Ei = t, Si = t, xi = t, Ti = { enabled: t, eyetranslt: vo, requestframe: co, updateview: fo, submitframe: ho, prjmatrix: po, getsize: mo, getcursor: bo, setoffset: Cs, resetsensor: ks }, Ni = n, Ci = 0, ki = 0, Li = 6, Ai = 0, Oi = 1, Mi = 0, _i = 0, Di = 0, Pi = t, Hi = s, Bi = s, ji = Math.PI / 180, Fi = 180 / Math.PI;
    Mr.registerplugin = function (r, i, o) {
        _r = r, Pr = o;
        if (_r.version < "1.19" || _r.build < "2015-07-09") {
            _r.trace(3, "WebVR plugin - too old krpano version (min. 1.19)");
            return
        } if (_r.webVR) return;
        Dr = _r.device, ("" + navigator[vt])[h]()[p]("mobile vr") >= 0 && (Ei = n, ui = n), Pr[e]("worldscale", Br, function (e) {
            var t = Number(e);
            isNaN(t) || (Br = Math.max(t, .1))
        }, function () { return Br }), Pr[e]("mousespeed", jr, function (e) {
            var t = Number(e);
            isNaN(t) || (jr = t)
        }, function () { return jr }), Pr[e]("headtracking", Ir, function (e) {
            var r = Ii(e);
            if (r != Ir) if (r == t) Ir = t;
            else {
                Ir = n;
                var i = _r[u][O];
                _r[u][O] = qr, Cs(i)
            }
        }, function () { return Ir }), Pr[e]("pos_tracking", Fr, function (e) { Fr = Ii(e) }, function () { return Fr }), Pr[e]("multireslock", Rr, function (e) { Rr = Ii(e), Ti[f] && Os() }, function () { return Rr }), Pr[e]("oversampling", Ur, function (e) { Ur = Number(e), _r[H][Q] = n }, function () { return Ur }), Pr[e]("fullscreen_mirroring", zr, function (e) { zr = Ii(e) }, function () { return zr }), Pr[e]("mobilevr_support", Wr, function (e) { Wr = Ii(e) }, function () { return Wr }), Pr[e]("mobilevr_touch_support", Xr, function (e) { Xr = Ii(e) }, function () { return Xr }), Pr[e]("mobilevr_fake_support", Vr, function (e) { Vr = Ii(e) }, function () { return Vr }), Pr[e]("mobilevr_ipd", Gr, function (e) {
            var t = Number(e);
            isNaN(t) || (Gr = t), hs()
        }, function () { return Gr }), Pr[e]("mobilevr_screensize", Yr, function (e) { ys(e) }, function () { return bs() }), Pr[e]("mobilevr_lens_fov", ei, function (e) {
            var t = Number(e);
            isNaN(t) || (ei = t, hs())
        }, function () { return ei }), Pr[e]("mobilevr_lens_overlap", Zr, function (e) {
            var t = Number(e);
            isNaN(t) || (Zr = t, hs())
        }, function () { return Zr }), Pr[e]("mobilevr_lens_dist", ti, function (e) {
            var t = Number(e);
            isNaN(t) || (ti = t, hs())
        }, function () { return ti }), Pr[e]("mobilevr_lens_dist2", ni, function (e) { ni = e, hs() }, function () { return ni }), Pr[e]("mobilevr_lens_ca", si, function (e) {
            var t = Number(e);
            isNaN(t) || (si = t, hs())
        }, function () { return si }), Pr[e]("mobilevr_lens_vign", oi, function (e) {
            var t = Number(e);
            isNaN(t) || (oi = t, hs())
        }, function () { return oi }), Pr[e]("mobilevr_webvr_dist", ui, function (e) { ui = Ii(e) }, function () { return ui }), Pr[e]("mobilevr_wakelock", $r, function (e) { $r = Ii(e) }, function () { return $r }), Pr[e]("mobilevr_orientationlock", Jr, function (e) { Jr = Ii(e) }, function () { return Jr }), Pr[e]("mobilevr_autocalibration", Kr, function (e) { Kr = Ii(e) }, function () { return Kr }), Pr[e]("mobilevr_webvr_firefox", Qr, function (e) { Qr = Ii(e) }, function () { return Qr }), Pr[e]("mobilevr_sensor", ai, function (e) { ai = parseInt(e) & 1 }, function () { return ai }), Pr[e]("mobilevr_sensor_mode", fi, function (e) {
            var t = parseInt(e);
            t >= 0 && t <= 7 && (fi = t), ki = 0
        }, function () { return fi }), Pr[e]("vr_cursor", li, function (e) { go(e) }, function () { return li }), Pr[e]("vr_cursor_enabled", ci, function (e) { ci = Ii(e) }, function () { return ci }), Pr[e]("vr_cursor_onover", pi, function (e) { pi = e }, function () { return pi }), Pr[e]("vr_cursor_onout", di, function (e) { di = e }, function () { return di }), Pr[e]("isavailable", mi, function (e) { }, function () { return mi }), Pr[e]("isenabled", vi, function (e) { }, function () { return vi }), Pr[e]("iswebvr", !gi, function (e) { }, function () { return !gi || bi }), Pr[e]("ismobilevr", gi, function (e) { }, function () { return gi || bi }), Pr[e]("isfake", yi, function (e) { }, function () { return yi }), Pr[e]("havesettings", wi, function (e) { }, function () { return wi }), Pr[e](Xn, "", function (e) { }, function () { return ms() }), Pr[e]("devicesize", "", function (e) { }, function () { return gs() }), Pr[e](I, s), Pr[e](l, s), Pr[e](vn, s), Pr[e]("onentervr", s), Pr[e]("onexitvr", s), Pr.entervr = Ss, Pr.exitvr = Ts, Pr.togglevr = Ns, Pr.resetsensor = ks, Pr.lookat = Cs, Pr.loadsettings = Ea, Pr.savesettings = Sa, Pr.calibrate = ka, Pr.resetcalibration = La, Pr.update = Es;
        if (_r[kn]) {
            _r.webVR = Ti;
            var a = t;
            Dr[A] && Dr[ut] && Qr == t && (a = n);
            var c = document[Ot].requestPointerLock || document[Ot].mozRequestPointerLock || document[Ot].webkitRequestPointerLock, d = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock;
            c && d && (Pi = n, Hi = c, Bi = d);
            try { a == t && navigator[Jn] ? navigator[Jn]().then(ns) : a == t && navigator.getVRDevices ? navigator.getVRDevices().then(os) : a == t && navigator[Dn] ? navigator[Dn](os) : Wr ? Ri() : Si == t && (Si = n, _r[at](Pr[l], Pr)) } catch (v) { }
        } else Si == t && (Si = n, _r[at](Pr[l], Pr))
    }, Mr.unloadplugin = function () { Ts(), Ds(t, n), Hr[r](Dr[c][m][a], Fs), _r[x][kt][r](U, Bs, t), _r.webVR = s };
    var Xi = s, Vi = s, $i = s, Ji = s, Ki = s, Qi = s, Gi = s, Yi = s, Zi = s, es = s, ts = 100, us = s, fs = s, Ls = s, Ds = function () {
        var e = s, n = s;
        return function (r, i) {
            if (Dr[mn] && yi == t) if (r) if (Dr.ios) {
                var o = 15;
                e = window.setInterval(function () {
                    var e = ("" + window[Tr].href)[en]("#")[0];
                    window[Tr].ref = e, window.setTimeout(window.stop, 0), window.setTimeout(_r.Kloader.iOSWakelockCheck, 1)
                }, o * 1e3)
            } else Dr[A] && (n == s && (n = document[Nr]("video"), n.setAttribute("loop", ""), n.canPlayType("video/webm") != "" && (n.src = Ma)), n.play());
            else {
                e && (window.clearInterval(e), e = s);
                if (n && i) {
                    n.pause();
                    try { n.src = "", n.removeAttribute("src") } catch (u) { } n = s
                }
            }
        }
    }(), Hs = 0, Is = 0, qs = 0, no = { q: new Us(0, 0, 0, 1), t: 0 }, ro = { q: new Us(0, 0, 0, 1), t: 0 }, io = new Us(0, 0, 0, 1), so = s, uo = s, ao = new Us(0, 0, 0, 1), Xo = new wo, Vo = new wo, $o = new wo, Jo = new wo, Ko = new wo, Qo = Mo(), Go = Mo(), Yo = new wo, Zo = new wo, ou = 0, uu = new wo, au = new wo, fu = s, lu = Mo(), cu = Mo(), hu = Mo(), pu = Mo(), vu = function () {
        var e = 0, t = 0, n = 0, r = 0, i = 0, s = 0, o = 0, u = 0, a = 0, f = 0, l = 1, c = 0, h = 0, p = 0, d = .03;
        return function (c, h, p, v) {
            var m = c - e, g = h - t, y = p - n, b = v - r;
            e = c, t = h, n = p, r = v;
            var w = Math[Sn](m * m + g * g + y * y);
            if (b > 500) {
                i = 0;
                return
            } if (i == 0) {
                i = b, s = w;
                return
            } i = i * .95 + .05 * b;
            var E = Math.min(15 * i / 1e3, .5);
            s = s * (1 - E) + E * w;
            var S = Ta;
            s < d ? (o++, u += c, a += h, f += p, o > 19 && (S.rx = S.rx * (1 - l) + l * (u / o), S.ry = S.ry * (1 - l) + l * (a / o), S.rz = S.rz * (1 - l) + l * (f / o), l > .5 && (l *= .9), s = 10, d *= .5)) : (o = 1, u = c, a = h, f = p)
        }
    }(), mu = 0, yu = t, bu = new wo, wu = new wo, Eu = new wo, Su = new wo, xu = new wo, Tu = new wo, Nu = new wo, Cu = new wo, ku = new wo, Lu = new wo, Au = Mo(), Ou = Mo(), Mu = Mo(), _u = Mo(), Du = Mo(), Pu = Mo(), Hu = Mo(), Bu = Mo(), ju = Mo(), Fu = Mo(), Iu = Mo(), qu = Mo(), Ru = Mo(), Uu = Mo(), zu = Mo(), Wu = Mo(), Xu = Mo(), Vu = Mo(), $u = 20, Ju = .5, Ku = 9.81, Qu = 1e7, Gu = t, na = 0, sa = new wo, oa = Mo(), ua = Mo(), fa = "http://d8d913s460fub.cloudfront.net/krpanocloud/webvr_localstorage.html?v=4", la = t, ca = s, ha = s, pa = s, da = n, xa = t, Ta = { rx: 0, ry: 0, rz: 0 }, Na = s, Ca = s, Aa = function () {
        function i() {
            var t = 0, r = n * 3, i = 0, s = 0, o = 0, u = 0, a = 0, f = 0, l = 0, c = 0, h = 0, p = 0;
            for (t = 0;
                t < r;
                t += 3)i += e[t | 0], s += e[t + 1 | 0], o += e[t + 2 | 0];
            i /= n, s /= n, o /= n;
            for (t = 0;
                t < r;
                t += 3)l = e[t | 0] - i, c = e[t + 1 | 0] - s, h = e[t + 2 | 0] - o, u += l * l, a += c * c, f += h * h;
            u = Math[Sn](u / n), a = Math[Sn](a / n), f = Math[Sn](f / n), p = Math[Sn](u * u + a * a + f * f);
            if (p < .05) {
                var d = Ta;
                d.rx = i, d.ry = s, d.rz = o, Na && _r[at](Na, Pr)
            } else Ca && _r[at](Ca, Pr)
        } var e = new Array(300), n = 0, r = 0;
        return function (s, o, u, a) {
            if (s < 0) {
                n = 0, r = _r[dt];
                return
            } var f = _r[dt] - r;
            if (f > 500) {
                var l = n * 3;
                e[l | 0] = o, e[l + 1 | 0] = u, e[l + 2 | 0] = a, n++;
                if (n > 100 || f > 2500) xa = t, i()
            }
        }
    }(), Oa = function () {
        function u(t) {
            for (i = 0;
                i < t[Jt];
                i++)if (e && t[i] === e || r && t[i] === r) t.splice(i, 1), i--
        } var e = s, n = "" + Cn + z + Pt + kr + At + Ht + Ht + qt + an + Zt + nn + Fn + "{" + "float g = texture2D(sm,tx).g;" + "vec2 center = vec2(0.5 + (0.5 - ol)*(step(0.5,tx.x) - 0.5), 0.5);" + zt + Nt + rt + Lt + ft + "gl_FragColor=vec4(r,g,b,1.0);" + "}", r = s, o = "" + Cn + z + Pt + kr + At + Ht + Ht + qt + an + "uniform vec2 sz;" + "uniform float ss;" + Zt + nn + "uniform float vg;" + "uniform vec4 dd;" + Fn + "{" + "float vig = 0.015;" + "float side = step(0.5,tx.x) - 0.5;" + "float aspect = (sz.x / sz.y);" + "vec2 center = vec2(0.5 + (0.5 - ol)*side, 0.5);" + zt + "v.x = v.x * aspect;" + "v *= 2.0 * ss;" + "float rs = dot(v,v);" + "v = v * (dd.x + rs*(dd.y + rs*(dd.z + rs*dd.w)));" + "v /= 2.0 * ss;" + "v.x = v.x / aspect;" + "vec2 vG = center + v;" + "float a = (1.0 - smoothstep(vG.x-vig - side*ol, vG.x - side*ol, center.x - 0.25)) * " + "(1.0 - smoothstep(center.x + 0.25 - vG.x + side*ol - vig, center.x + 0.25 - vG.x + side*ol, 0.0)) * " + "(1.0 - smoothstep(vG.y-vig, vG.y, 0.0)) * " + "(1.0 - smoothstep(1.0 - vG.y-vig,1.0 - vG.y, 0.0));" + "a *= smoothstep(rs-vig, rs+vig, vg);" + Nt + Lt + rt + "float g = texture2D(sm,vG).g;" + ft + "gl_FragColor=vec4(a*r,a*g,a*b,1.0);" + "}";
        return function (i) {
            var a = _r[kn];
            if (a) {
                var f, l = a.context, c = a.ppshaders, h = 1 - si * .1 / Oi;
                ii == t && h > .999999 && h < 1.000001 && (i = t), _r[w][_n] == t && (i = t);
                if (i) if (ii) {
                    r == s && (r = a[hr](o, "ss,ca,dd,ol,sz,vg"));
                    if (r) {
                        var p = 1 / ri[0], d = ri[1], v = ri[2], m = ri[3];
                        a[Qt](r.prg), l[wt](r.ss, Oi), l[wt](r.ca, h), l.uniform4f(r.dd, p, p * d, p * v, p * m), l[wt](r.ol, .5 * Di * (1 + (Zr - 1) * .1)), l[wt](r.vg, oi / 30), a[Qt](s), u(c), c.push(r)
                    }
                } else e == s && (e = a[hr](n, "ca,ol")), e && (a[Qt](e.prg), l[wt](e.ca, h), l[wt](e.ol, .5 * Di * (1 + (Zr - 1) * .1)), a[Qt](s), u(c), c.push(e));
                else u(c)
            }
        }
    }(), Ma = "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4ECQoWBAhhTgGcBAAAAAAABzRFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEuTbuMU6uEHFO7a1OsggGw7AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEMq17GDD0JATYCMTGF2ZjU2LjMuMTAwV0GMTGF2ZjU2LjMuMTAwc6SQC+JFWnEfyt4nOD98NcnLDESJiAAAAAAAAAAAFlSuawEAAAAAAABCrgEAAAAAAAA514EBc8WBAZyBACK1nIN1bmSGhVZfVlA4g4EBI+ODgw9CQOABAAAAAAAADrCBCLqBCFSwgQhUuoEIH0O2dQEAAAAAAAAo54EAo6OBAACAEAIAnQEqCAAIAABHCIWFiIWEiAICAAwNYAD+/6PeABxTu2sBAAAAAAAAEbuPs4EAt4r3gQHxggF88IED"
};
var krpanoplugin = function () {
    function A(a) { return "boolean" == typeof a ? a : 0 <= "yesontrue1".indexOf(String(a).toLowerCase()) } function la(a, c) { return new Microsoft.Maps.Color(255 * c, a >> 16 & 255, a >> 8 & 255, a & 255) } function ma(a) { return "rgb(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + ")" } function Da(a, c) {
        var b = document.createElementNS("http://www.w3.org/2000/svg", "svg"); b.setAttribute("width", a); b.setAttribute("height", c); b.style.position = "absolute"; b.style.left = -a / 2 + "px"; b.style.top = -c / 2 + "px"; var f = document.createElementNS("http://www.w3.org/2000/svg",
            "path"); f.style.pointerEvents = "visiblePainted"; f.style.cursor = "pointer"; f.setAttribute("stroke", "rgba(255,0,0,1.0)"); f.setAttribute("stroke-width", 2); f.setAttribute("fill", "rgba(0,255,0,0.5)"); b.appendChild(f); var d = {}; d.svg = b; d.path = f; d.centerx = a / 2; d.centery = c / 2; var e = -1; d.hide = function () { 0 != e && (e = 0, b.style.display = "none") }; d.show = function () { 1 != e && (e = 1, b.style.display = "") }; d.drawpie = function (a, b, c, e, d) {
                var l, k; e > d && (l = d, d = e, e = l); e = e * Math.PI / 180; d = d * Math.PI / 180; k = d - e; l = (e + d) / 2; var h = k > Math.PI ? 1 : 0;
                k >= 2 * Math.PI && (k = 2 * Math.PI - .01); e = l - k / 2; d = l + k / 2; l = a + c * Math.sin(e); e = b - c * Math.cos(e); k = a + c * Math.sin(d); d = b - c * Math.cos(d); f.setAttribute("d", "M " + a + "," + b + " L " + l + "," + e + " A " + c + "," + c + " 0 " + h + " 1 " + k + "," + d + " Z")
            }; return d
    } function Fa() {
        var a = document.createElement("div"); a.style.position = "absolute"; a.style.left = "50%"; a.style.top = "50%"; a.style.width = "100%"; a.style.zIndex = 999998; a.style.color = "#FFFFFF"; a.style.opacity = .67; a.style.fontSize = h.isphone ? "10px" : "16px"; a.style["-webkit-text-size-adjust"] = "none";
        a.style.display = "block"; a.style.cursor = "none"; a.style.pointerEvents = "none"; var c = document.createElement("div"); c.style.position = "relative"; c.style.left = "-50%"; c.style.top = h.isphone ? "-64px" : "-46px"; c.style.fontFamily = "sans-serif"; c.style.textShadow = "#000000 1px 1px 2px"; c.innerHTML = "<center><i><b>krpano Bing Maps Plugin<br/>DEMO MODE</b></i></center>"; a.appendChild(c); d && d.sprite && d.sprite.appendChild(a)
    } function T(a, c) {
        var b = document.createElement("img"); b.addEventListener("error", function () {
            h && d &&
            h.trace(3, d._type + "[" + d.name + "] loading error: " + a)
        }, !0); b.addEventListener("load", function () { h && d && c(b) }, !1); b.src = h.parsePath(a)
    } function Ga() { null != D && (window[D] = null, delete window[D], D = null); h && d && setTimeout(ca, 10) } function da() { if (d) { var a = Number(d.bgcolor), c = Number(d.bgalpha); m && m.childNodes && m.childNodes[0] && m.childNodes[0].style && (m.childNodes[0].style.backgroundColor = "rgba(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + "," + c + ")") } } function ca() {
        var a = window._krpano_bmap_loadedcallbacks_; if (a) {
            window._krpano_bmap_loadedcallbacks_ =
            null; delete window._krpano_bmap_loadedcallbacks_; var c = a.length, b; if (0 < c && 99 > c) for (b = 0; b < c; b++)setTimeout(a[b], 10 + 5 * b)
        } if (h && d) {
            d._use_css_scale = !1; d.poschanged = !0; d.updatepos(); c = Math.floor(d.pixelwidth * h.stagescale); b = Math.floor(d.pixelheight * h.stagescale); var a = !U.firefox, f; f = d.key; var l = document.domain; 0 == l.indexOf("www.") && (l = l.slice(4)); if (null != f && 0 < f.indexOf("|")) {
                var e = f.split("|"); f = null; var C = e.length; if (2 <= C) {
                    if (null == l || "" == l) l = "local"; for (var g = 0; g < C; g += 2) {
                        var p = String(e[g]).toLowerCase(),
                        Ea = e[g + 1]; if (p == l) { f = Ea; break }
                    }
                }
            } "TEST" == f ? (na = !0, f = null) : "" != f && null != f || h.trace(2, "bingmaps plugin - no API key!"); c = { credentials: f, mapTypeId: oa(G), labelOverlay: pa(G), center: new Microsoft.Maps.Location(d.lat, d.lng), zoom: t, enableSearchLogo: !1, enableClickableLogo: !1, showMapTypeSelector: !1, showDashboard: !1, showScalebar: !1, disableKeyboardInput: !0, disableScrollWheelZoom: !a, fixedMapPosition: !0, width: c, height: b }; k = new Microsoft.Maps.Map(m, c); da(); m && m.childNodes && m.childNodes[0] && m.childNodes[0].childNodes &&
                m.childNodes[0].childNodes[0] && "BUTTON" == m.childNodes[0].childNodes[0].nodeName && m.childNodes[0].removeChild(m.childNodes[0].childNodes[0]); c = k.getRootElement(); 0 == a && (c.addEventListener("DOMMouseScroll", ea, !0), c.addEventListener("mousewheel", ea, !0), c.addEventListener("wheel", ea, !0)); Microsoft.Maps.Events.addHandler(k, "mousewheel", Ha); m.addEventListener("gesturestart", fa, !1); m.addEventListener("gesturechange", fa, !1); m.addEventListener("gestureend", fa, !1); null == O && (O = setInterval(Ia, 1E3 / 60)); w = new Ja;
            qa(); ra(); Ka(); V = !0; d.triggerevent("onmapready"); 0 == E && Microsoft.Maps.Events.addHandler(k, "imagerychanged", sa); Microsoft.Maps.Events.addHandler(k, "viewchange", ta)
        }
    } function fa(a) { a && (a.preventDefault(), a.stopPropagation()) } function Ha(a) { a && (h && h.control && !0 === h.control.disablewheel ? a.handled = !0 : a.originalEvent && (a.originalEvent.preventDefault(), a.originalEvent.stopPropagation())) } function ea(a) {
        if (h && k) {
            var c = k.getZoom(), b = 0; a.detail && (b = a.detail, 0 == h.device.mac && (b /= 3)); a.wheelDelta && (b = a.wheelDelta /
                -120); a.wheelDeltaY && (b = a.wheelDeltaY / -120); a.deltaY && (b = a.deltaY, 1 == a.deltaMode ? b *= 40 : 2 == a.deltaMode && (b *= 800), b /= 120); a.webkitDirectionInvertedFromDevice && (b = -b); var f = 1; 0 < b ? (c--, f = 2) : (c++, f = .5); 0 >= c ? c = 1 : 21 <= c && (c = 21); var l = d.sprite.getBoundingClientRect(), b = l.x + l.width / 2, e = l.y + l.height / 2, C = a.clientX, g = a.clientY, b = b - l.x, e = e - l.y, C = C - l.x, g = g - l.y, l = new Microsoft.Maps.Point(C, g), l = k.tryPixelToLocation(l, Microsoft.Maps.PixelReference.control), f = new Microsoft.Maps.Point(-(b - C) * f, -(e - g) * f); k.setView({
                    zoom: c,
                    animate: !0, center: l, centerOffset: f
                }); a.preventDefault(); a.stopPropagation()
        }
    } function sa() { if (k) { var a = k.getOptions(), c = k.getImageryId(), b = "satellite"; "Road" == c ? b = "normal" : "Aerial" == c && (b = 1 == a.labelOverlay ? "satellite" : "hybrid"); if (b != G) { G = b; if (F) F.onMapTypeChanged(G); d.triggerevent("onmaptypechanged") } } } function ta() {
        if (k) {
            var a = k.getCenter(); if (y != a.latitude || z != a.longitude) y = a.latitude, z = a.longitude, d.triggerevent("onmapmoved"); a = k.getZoom(); t != a && (w && (w.needredraw = !0), t = a, d.triggerevent("onmapzoomed"),
                w && w.updatehandler(), ra())
        }
    } function ra() { var a = d.spot.getArray(), c = null, b, f; f = a.length; for (b = 0; b < f; b++)a[b] && (c = a[b].internalObject) && c.zoomwithmap && c.scalespot(Math.pow(2, t) / Math.pow(2, c.zoombaselevel)) } function Ia(a) {
        if (na && (a = m) && (a = a.firstChild)) { a = a.children; for (var c = 0; c < a.length; c++) { var b = a[c]; b && "alert" == b.getAttribute("role") && b.parentNode.removeChild(b) } } if (V) {
            K && W(); if (P) {
                P = !1; a = d.spot.getArray(); var c = null, f; f = a.length; for (b = 0; b < f; b++)c = a[b].internalObject, 0 == E && c.needdom && c.try_dom_access(),
                    c.needupdate && c.processupdate()
            } w && w.updatehandler(); H && 0 == ((h.display.frame | 0) & 1) && (a = H.onhover, null != a && "" != a && h.call(a, H))
        }
    } function Ka() {
        d.createobject("positioncontrol"); d.createobject("zoomcontrol"); n = d.createobject("maptypecontrol"); d.createobject("navigationcontrol"); d.createobject("overviewmapcontrol"); n.registerattribute("visible", !1, function (a) { n._visible = A(a); K = !0 }, function () { return n._visible }); n.registerattribute("align", "rightbottom", function (a) { n._align = String(a).toLowerCase(); K = !0 },
            function () { return n._align }); n.registerattribute("anchor", n._align, function (a) { n._align = String(a).toLowerCase(); K = !0 }, function () { return n._align }); n.registerattribute("x", 2, function (a) { a = Number(a); n._x = isNaN(a) ? 2 : a; K = !0 }, function () { return n._x }); n.registerattribute("y", 2, function (a) { a = Number(a); n._y = isNaN(a) ? 2 : a; K = !0 }, function () { return n._y }); W()
    } function W() {
        if (V) {
            var a = m; n._visible ? (null == F && (F = new La(n), a.appendChild(F.dom)), F.setControlPosition(n._align, Number(n._x), Number(n._y))) : null != F && (a.removeChild(F.dom),
                F = null); K = !1
        }
    } function Ma() { d.createarray("spotstyle"); d.spotstyle.createItem("default"); var a = d.spotstyle.getArray(), c = null, b, f; f = a.length; for (b = 0; b < f; b++)c = a[b], c.internalObject = new ua(c) } function Na() { d.createarray("spot"); var a = d.spot.getArray(), c = null, b, f; f = a.length; for (b = 0; b < f; b++)c = a[b], c.internalObject = new X(c) } function Oa() {
        var a = arguments; if (1 <= a.length) {
            var c = String(a[0]).toLowerCase(), c = d.spotstyle.createItem(c); 1 < a.length && (c.url = a[1]); 2 < a.length && (c.overurl = a[2]); 3 < a.length && (c.activeurl =
                a[3]); 4 < a.length && (c.edge = a[4]); 5 < a.length && (c.x = a[5]); 6 < a.length && (c.y = a[6]); 7 < a.length && (c.shadow = a[7]); c.internalObject = new ua(c)
        } else h.trace(3, "bingmaps plugin - addspotstyle() syntax error!")
    } function Pa() {
        var a = arguments; if (3 <= a.length) {
            var c = String(a[0]).toLowerCase(), b = null, f = null, b = d.spot.getItem(c); null != b && Y(c); b = d.spot.createItem(c); b.lat = a[1]; b.lng = a[2]; 3 < a.length && (b.heading = a[3]); 4 < a.length && (b.active = a[4]); 5 < a.length && (b.onclick = a[5]); 6 < a.length && (b.onhover = a[6]); 7 < a.length && (b.onover =
                a[7]); 8 < a.length && (b.onout = a[8]); f = new X(b); f.update(); b.internalObject = f; f.active && Z(c)
        } else h.trace(3, "bingmaps plugin - addspot() syntax error!")
    } function Qa() {
        var a = arguments; if (5 <= a.length) {
            var c = String(a[0]).toLowerCase(), b = null, f = null, b = d.spot.getItem(c); null != b && Y(c); b = d.spot.createItem(c); b.lat = a[1]; b.lng = a[2]; b.heading = a[3]; b.spotstyle = a[4]; 5 < a.length && (b.active = a[5]); 6 < a.length && (b.onclick = a[6]); 7 < a.length && (b.onhover = a[7]); 8 < a.length && (b.onover = a[8]); 9 < a.length && (b.onout = a[9]); f = new X(b);
            f.update(); b.internalObject = f; f.active && Z(c)
        } else h.trace(3, "bingmaps plugin - addstylespot() syntax error!")
    } function Ra() { var a = arguments; if (6 <= a.length) { var c = String(a[0]).toLowerCase(), b = null, f = null, b = d.spot.getItem(c); null != b && Y(c); b = d.spot.createItem(c); b.lat = a[1]; b.lng = a[2]; b.heading = a[3]; b.spotstyle = a[4]; b.url = a[5]; 6 < a.length && (b.onclick = a[6]); 7 < a.length && (b.onhover = a[7]); 8 < a.length && (b.onover = a[8]); 9 < a.length && (b.onout = a[9]); f = new X(b); f.update(); b.internalObject = f } else h.trace(3, "bingmaps plugin - addimagespot() syntax error!") }
    function Y() { var a = arguments; if (1 == a.length) { var a = String(a[0]).toLowerCase(), c = null, b = null; (c = d.spot.getItem(a)) ? (b = c.internalObject, w && w.bmspot == b && (w.bmspot = null), b && b.destroy(), c.internalObject = null, d.spot.removeItem(a)) : h.trace(3, "bingmaps plugin - removespot() - spot[" + a + "] not found!") } else h.trace(3, "bingmaps plugin - removespot() syntax error!") } function va() {
        var a = d.spot.getArray(), c = null, b = null, f, l; l = a.length; for (f = 0; f < l; f++)c = a[f], (b = c.internalObject) && b.destroy(), c.internalObject = null;
        d.spot.count = 0; w && (w.bmspot = null)
    } function qa() { var a = d.spot.getArray(), c = null, b = c = null, f, l; l = a.length; for (f = 0; f < l; f++)c = a[f], c = c.internalObject, c.processupdate(), c.active && (b = c); b && w && (w.bmspot = b, w.update()) } function Z() {
        var a = arguments; if (1 == a.length) {
            var a = String(a[0]).toLowerCase(), c = d.spot.getArray(), b = null, f = null, l = null, e, k; k = c.length; for (e = 0; e < k; e++)b = c[e], f = b.internalObject, String(b.name).toLowerCase() == a ? (0 == f.active && (f.active = !0, f.update(1)), l = f) : 0 != f.active && (f.active = !1, f.update(1));
            l && (0 == M && l.xmlobject == H && (H.event_out(null), H = null), w && (w.bmspot = l, w.update()))
        } else h.trace(3, "bingmaps plugin - activatespot() syntax error!")
    } function ga() { if (k) { var a = new Microsoft.Maps.Location(y, z); k.setView({ animate: !1, center: a, zoom: t }) } } function oa(a) { a = a.toLowerCase(); return "satellite" != a && "normal" == a ? Microsoft.Maps.MapTypeId.road : Microsoft.Maps.MapTypeId.aerial } function pa(a) { a = a.toLowerCase(); return "satellite" == a || "normal" != a && "hybrid" != a ? Microsoft.Maps.LabelOverlay.hidden : Microsoft.Maps.LabelOverlay.visible }
    function Q() { var a = arguments; 1 == a.length ? (a = String(a[0]).toLowerCase(), "satellite" != a && "normal" != a && "hybrid" != a && (a = "satellite"), k ? (k.setMapType(oa(a)), k.setOptions({ labelOverlay: pa(a) }), da(), sa()) : G = a) : h.trace(3, "bingmaps plugin - setmaptype() syntax error!") } function Sa() { if (k) { var a = arguments; if (1 <= a.length) { var c = Number(a[0]), b = !1; 1 < a.length && (b = A(a[1])); t = c; a = new Microsoft.Maps.Location(y, z); k.setView({ animate: b, center: a, zoom: t }) } else h.trace(3, "bingmaps plugin - setzoom() syntax error!") } } function wa() {
        if (k) {
            var a =
                arguments; if (3 == a.length) { var c = Number(a[2]), a = new Microsoft.Maps.Location(Number(a[0]), Number(a[1])); k.setView({ animate: !1, center: a, zoom: c }) } else h.trace(3, "bingmaps plugin - setcenter() syntax error!")
        }
    } function Ta() {
        if (k) {
            var a = arguments, c = null; if (2 <= a.length) { var b = a[0], f = a[1]; null != b && void 0 != b && "" != b && "null" != b && null != f && void 0 != f && "" != f && "null" != f && (c = new Microsoft.Maps.Location(Number(b), Number(f))) } 2 < a.length && A(a[2]); 3 < a.length && A(a[3]); a = t; 32 > a && (a += 1); t = a; c && (y = c.latitude, z = c.longitude);
            c = new Microsoft.Maps.Location(y, z); k.setView({ animate: !0, center: c, zoom: t })
        }
    } function Ua() { if (k) { var a = arguments, c = null; if (2 <= a.length) { var b = a[0], f = a[1]; null != b && void 0 != b && "" != b && "null" != b && null != f && void 0 != f && "" != f && "null" != f && (c = new Microsoft.Maps.Location(Number(b), Number(f))) } 2 < a.length && A(a[2]); a = t; --a; .5 > a && (a = .5); t = a; c && (y = c.latitude, z = c.longitude); c = new Microsoft.Maps.Location(y, z); k.setView({ animate: !0, center: c, zoom: t }) } } function Va() {
        if (k) {
            var a, c, b, f, l, e, h, g = d.spot.getArray(); e = g.length;
            if (!(1 > e)) if (1 == e) h = g[0].internalObject, wa(h.lat, h.lng, t); else { h = g[0].internalObject; a = b = h.lat; c = f = h.lng; for (l = 1; l < e; l++)h = g[l].internalObject, h.lat < a && (a = h.lat), h.lat > b && (b = h.lat), h.lng < c && (c = h.lng), h.lng > f && (f = h.lng); a = new Microsoft.Maps.LocationRect.fromCorners(new Microsoft.Maps.Location(b, c), new Microsoft.Maps.Location(a, f)); k.setView({ animate: !1, bounds: a }); ta() }
        }
    } function xa() {
        if (k) {
            var a = arguments; if (1 == a.length) {
                var c = String(a[0]), a = aa + ".spot[" + c + "]"; h.get(a) ? (c = Number(h.get(a + ".lat")), a =
                    Number(h.get(a + ".lng")), isNaN(c) || isNaN(a) || (a = new Microsoft.Maps.Location(c, a), k.setView({ animate: !0, center: a }))) : h.trace(3, "bingmaps plugin - pantospot() - spot[" + c + "] not found!")
            } else h.trace(3, "bingmaps plugin - pantospot() syntax error!")
        }
    } function Wa() { if (k) { var a = arguments; 2 == a.length ? (a = new Microsoft.Maps.Location(Number(a[0]), Number(a[1])), k.setView({ animate: !0, center: a })) : h.trace(3, "bingmaps plugin - panto() syntax error!") } } function Xa() { } function Ya() {
        if (k) {
            var a = arguments; if (1 <= a.length) {
                var c =
                    aa + ".spot[" + String(a[0]) + "].", b = Number(h.get(c + "lat")), f = Number(h.get(c + "lng")); isNaN(b) || isNaN(f) || (c = k.getZoom(), 2 <= a.length && (c = Number(a[1])), a = new Microsoft.Maps.Location(b, f), k.setView({ animate: !0, center: a, zoom: c }))
            } else h.trace(3, "bingmaps plugin - flytospot() syntax error!")
        }
    } function Za() {
        if (k) {
            var a = arguments, c = !0; if (2 <= a.length) {
                var b = Number(a[0]), f = Number(a[1]); if (2 == a.length) a = new Microsoft.Maps.Location(b, f), k.setView({ animate: !0, center: a }), c = !1; else {
                    var d = Number(a[2]); 3 == a.length ? (a =
                        new Microsoft.Maps.Location(b, f), k.setView({ animate: !0, center: a, zoom: d }), c = !1) : 6 <= a.length && (6 == a.length ? (a = new Microsoft.Maps.Location(b, f), k.setView({ animate: !0, center: a, zoom: d }), c = !1) : 7 == a.length && (a = new Microsoft.Maps.Location(b, f), k.setView({ animate: !0, center: a, zoom: d }), c = !1))
                }
            } c && h.trace(3, "bingmaps plugin - flyto() syntax error!")
        }
    } function $a() {
        if (k) {
            var a = arguments; if (2 == a.length) {
                var c = Number(a[0]), a = Number(a[1]), b = k.tryLocationToPixel(new Microsoft.Maps.Location(y, z)); b && (b.x += c, b.y += a,
                    (c = k.tryPixelToLocation(b)) && k.setView({ animate: !0, center: c, zoom: t }))
            } else h.trace(3, "bingmaps plugin - panby() syntax error!")
        }
    } function La(a) {
        function c(a) { var b = document.createElement("div"); b.style.position = "absolute"; b.style.width = q[0] + "px"; b.style.height = q[1] + "px"; b.style.fontFamily = "Arial"; b.style.fontSize = q[2] + "px"; b.style.fontWeight = "bold"; g && (b.style[R] = q[0] + "px " + 3 * q[1] + "px"); b.innerHTML = "<div style='vertical-align:middle;padding-top:" + q[3] + "px;'><center>" + a + "</center></div>"; return b }
        function b(a, b, c) {
            a.style.border = c ? "1px solid rgba(100,100,100,0.3)" : "1px solid #acafb8"; a.style.color = c ? "#ffffff" : "#4f5459"; a.style.textShadow = c ? "#4f5459 0px -1px 1px" : "#f2f3f5 0px 1px 1px"; var f = L; if ("Microsoft Internet Explorer" == navigator.appName || 0 <= navigator.userAgent.indexOf("MSIE ") || 0 <= navigator.userAgent.indexOf("Trident")) f = "ms"; "" != f && (f = "-" + f + "-"); a.style.backgroundImage = "webkit" == L ? c ? "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#b0b4ba), to(#6d7580))" : "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#f3f4f5), to(#bdc0ca))" :
                "-ms-" == f ? c ? f + "linear-gradient(top, #b0b4ba, #6d7580)" : f + "linear-gradient(top, #f3f4f5, #bdc0ca)" : c ? f + "linear-gradient(to bottom, #b0b4ba, #6d7580)" : f + "linear-gradient(to bottom, #f3f4f5, #bdc0ca)"; g && (a.style.backgroundPosition = "0px " + -(b - 1) * q[1] + "px")
        } function f(a) { a && (a.stopPropagation(), a.preventDefault(), a.stopImmediatePropagation()) } function l(a) { a && (f(a), Q("normal")); b(n, 1, !0); b(x, 2, !1); b(u, 3, !1) } function e(a) { a && (f(a), Q("satellite")); b(n, 1, !1); b(x, 2, !0); b(u, 3, !1) } function k(a) {
            a && (f(a), Q("hybrid"));
            b(n, 1, !1); b(x, 2, !1); b(u, 3, !0)
        } var g = "v" == String(a.buttonalign).toLowerCase(), p = Number(a.scale), m = String(a.buttontexts).split("|"); 3 != m.length && (m = ["Map", "Satellite", "Hybrid"]); isNaN(p) && (p = 1); h.ismobile && (p *= .5); var p = p * I, r = document.createElement("div"); r.style.position = "absolute"; this.dom = r; var n = null, x = null, u = null, q = [80 * p, 26 * p, 12 * p, 6 * p], t = [0, 0]; this.onMapTypeChanged = function (a) { "normal" == a ? l() : "satellite" == a ? e() : "hybrid" == a && k() }; this.setControlPosition = function (a, b, c) {
            var f = Math.floor(d.pixelwidth *
                h.stagescale), e = Math.floor(d.pixelheight * h.stagescale), k = g ? q[0] : 3 * q[0], l = g ? 3 * q[1] : q[1], k = k + t[0], l = l + t[1], p = 0 <= a.indexOf("left") && 0 > a.indexOf("right"); a = 0 <= a.indexOf("top") && 0 > a.indexOf("bottom"); b = b * h.stagescale * I; c = c * h.stagescale * I; p || (b = f - k - b); a || (c = e - l - c); r.style.left = b + "px"; r.style.top = c + "px"
        }; (function () {
            r.style.borderRadius = 7 * p + "px"; r.style.borderBottom = "2px solid rgba(100,100,100,0.5)"; r.style.boxShadow = r.style.MozBoxShadow = r.style.webkitBoxShadow = "2px 2px 4px rgba(0,0,0,0.5)"; g ? (r.style.width =
                q[0] + "px", r.style.height = 3 * q[1] + 1 + "px") : (r.style.width = 3 * q[0] + "px", r.style.height = q[1] + 1 + "px"); n = c(m[0]); x = c(m[1]); u = c(m[2]); var a = 5 * p + "px"; g ? (n.style.borderRadius = a + " " + a + " 0px 0px", u.style.borderRadius = "0px 0px " + a + " " + a, t = [4, 4], n.style.top = "0px", x.style.top = q[1] + "px", u.style.top = 2 * q[1] + "px") : (n.style.borderRadius = a + " 0px 0px " + a, u.style.borderRadius = "0px " + a + " " + a + " 0px", t = [4, 4], n.style.left = "0px", x.style.left = q[0] + "px", u.style.left = 2 * q[0] + "px"); r.appendChild(n); r.appendChild(x); r.appendChild(u);
            v.mouse && (n.addEventListener("mousedown", l), n.addEventListener("mouseup", f)); v.touch && (n.addEventListener(S, l), n.addEventListener(N, f)); v.mouse && (x.addEventListener("mousedown", e), x.addEventListener("mouseup", f)); v.touch && (x.addEventListener(S, e), x.addEventListener(N, f)); v.mouse && (u.addEventListener("mousedown", k), u.addEventListener("mouseup", f)); v.touch && (u.addEventListener(S, k), u.addEventListener(N, f)); a = G; "normal" == a ? l() : "satellite" == a ? e() : "hybrid" == a && k()
        })()
    } function Ja() {
        function a(a) {
            a && void 0 !==
            a.preventDefault && (a.preventDefault(), a.stopImmediatePropagation(), a.stopPropagation())
        } function c(c) {
            e.dragable && (u = !0, 0 == g ? (k.setOptions({ disablePanning: !0 }), ba = Microsoft.Maps.Events.addHandler(k, "mousemove", f), B = Microsoft.Maps.Events.addHandler(k, "mouseup", b), e.bmspot && (c = k.tryLocationToPixel(new Microsoft.Maps.Location(e.bmspot.lat, e.bmspot.lng), Microsoft.Maps.PixelReference.page), ha = { x: c.x, y: c.y })) : (f(c), v.mouse && (window.addEventListener("mousemove", f, !0), window.addEventListener("mouseup", b,
                !0)), v.touch && (window.addEventListener(ia, f, !0), window.addEventListener(ja, b, !0), window.addEventListener(N, b, !0)), a(c)))
        } function b(c) {
            0 == g ? (k.setOptions({ disablePanning: !1 }), null != ba && (Microsoft.Maps.Events.removeHandler(ba), ba = null), null != B && (Microsoft.Maps.Events.removeHandler(B), B = null)) : (v.mouse && (window.removeEventListener("mousemove", f, !0), window.removeEventListener("mouseup", b, !0)), v.touch && (window.removeEventListener(ia, f, !0), window.removeEventListener(ja, b, !0), window.removeEventListener(N,
                b, !0)), a(c))
        } function f(a) {
            if (null == h) b(a); else if ((1 != g || null != p) && null != e.bmspot) {
                var c; c = null; var f = 0, d = 0; c = { x: 0, y: 0 }; if (1 == g) { var k = p.svg.parentNode.getBoundingClientRect(); v && v.touch ? (a = a.changedTouches ? a.changedTouches : [a], 0 < a.length && (d = a[0], f = Math.round(d.clientX - k.left), d = Math.round(d.clientY - k.top))) : (f = Math.round(a.clientX - k.left), d = Math.round(a.clientY - k.top)) } else c.x = ha.x, c.y = ha.y, f = a.pageX, d = a.pageY; c = 180 * Math.atan2(d - c.y, f - c.x) / Math.PI; c -= e.bmspot.heading; if (1 == u) q = c - Number(h.view.hlookat),
                    u = !1; else { for (c -= q; 180 < c;)c -= 360; for (; -180 > c;)c += 360; h.view.hlookat = c } e.needredraw = !0
            }
        } function l() {
            e.needredraw = !0; 0 == g ? (t = { visible: e.visible, fillColor: la(e.fillcolor, e.fillalpha * e.alpha), strokeColor: la(e.linecolor, e.linealpha * e.alpha), strokeThickness: e.linewidth }, r && r.setOptions(t)) : p && (p.path.setAttribute("stroke", ma(e.linecolor)), p.path.setAttribute("stroke-width", e.linewidth), p.path.setAttribute("stroke-opacity", e.linealpha * e.alpha), p.path.setAttribute("fill", ma(e.fillcolor)), p.path.setAttribute("fill-opacity",
                e.fillalpha * e.alpha))
        } var e = this, m = null, g = E ? 0 : 1, p = null; e.visible = !1; e.dragable = !0; e.size = 100; e.zoomwithmap = !1; e.alpha = .5; e.fillcolor = 16777215; e.fillalpha = 1; e.linewidth = 0; e.linecolor = 16777215; e.linealpha = 0; e.glow = !0; e.glowcolor = 16777215; e.glowwidth = 4; e.glowstrength = 3; e.headingoffset = 90; e.bmspot = null; e.needredraw = !0; var n = null, r = null, t = null, x = [], u = !1, q = 0, w = null, ya = 0, za = 0, Aa = -1E3, y = -1E3, z = -1, m = d.radar; m || (h.set(aa + ".radar.visible", !1), m = d.radar); e.destroy = function () {
            e.bmspot = null; r && k.entities.remove(r);
            n && k.entities.remove(n); r = n = null
        }; var ha = null, ba = null, B = null; e.update = function () { e.needredraw = !0 }; e.updatehandler = function () {
            if (k) {
                if (1 == g) {
                    null == n && null != e.bmspot && (n = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(e.bmspot.lat, e.bmspot.lng), { icon: ka.src, anchor: { x: 0, y: 0 }, width: 64, height: 64, zIndex: 0 }), k.entities.push(n)); if (null == n) return; if (null == n._krpdom) {
                        a: {
                            var a = n, b; for (b in a) if (a[b] && "object" === typeof a[b] && a[b].dom && a[b].dom.childNodes && a[b].dom.childNodes[0]) {
                                a._krpdom = a[b].dom; a._krpimg =
                                    a[b].dom.childNodes[0]; break a
                            }
                        } if (null == n._krpdom) return; p = Da(500, 500); l(); n._krpimg.style.display = "none"; n._krpdom.style.overflow = "visible"; n._krpdom.appendChild(p.svg); v.mouse && p.path.addEventListener("mousedown", c, !0); v.touch && p.path.addEventListener(S, c, !0)
                    }
                } else if (null == r) return; if (null == e.bmspot || 0 == e.visible) if (0 == g) { if (null == x || 0 != x.length) x = [], r.setPolyline(0, x) } else p && p.hide(); else {
                    p && p.show(); a = Number(h.view.hlookat); b = Number(h.view.hfov); a += e.bmspot.heading; a += e.headingoffset; 1 != g ||
                        Aa == e.bmspot.lat && y == e.bmspot.lng || (Aa = e.bmspot.lat, y = e.bmspot.lng, n.setLocation(new Microsoft.Maps.Location(e.bmspot.lat, e.bmspot.lng))); if (e.bmspot != w || a != ya || b != za) w = e.bmspot, ya = a, za = b, e.needredraw = !0; if (e.needredraw) {
                            n && n._krpdom && (n._krpdom.style.overflow = "visible"); var f = e.zoomwithmap ? Math.pow(2, k.getZoom()) / 1E4 : 1, f = 1 * e.size * f * I; 2800 < f && (f = 2800); if (0 == g) {
                                var d = [], m = k.tryLocationToPixel(new Microsoft.Maps.Location(e.bmspot.lat, e.bmspot.lng)), q = new Microsoft.Maps.Point(0, 0), t = 1, u = new Microsoft.Maps.Point(m.x,
                                    m.y + 1), B = k.tryPixelToLocation(m); 0 > k.tryPixelToLocation(u).latitude - B.latitude && (t = -1); d.push(k.tryPixelToLocation(m)); u = Math.floor(1 + b / 8.3); 3 > u && (u = 3); for (B = B = 0; B < u; B++) { var C = (a - .5 * b + B / (u - 1) * b) * Math.PI / 180; q.x = m.x + f * Math.sin(C); q.y = m.y + f * Math.cos(C) * t; d.push(k.tryPixelToLocation(q)) } d.push(k.tryPixelToLocation(m)); x = d; r.setLocations(d)
                            } else p && (d = 16 * (Math.floor(2 * f / 16) + 1) + 16, d != z && (z = d, p.svg.setAttribute("width", d), p.svg.setAttribute("height", d), p.svg.style.left = -d / 2 + "px", p.svg.style.top = -d / 2 + "px",
                                p.centerx = d / 2, p.centery = d / 2), p.drawpie(d / 2, d / 2, f, a - .5 * b, a + .5 * b))
                        } e.needredraw = !1
                }
            }
        }; (function () {
            m.registerattribute("visible", e.visible, function (a) { e.visible = A(a); e.update() }, function () { return e.visible }); m.registerattribute("dragable", e.dragable, function (a) { e.dragable = A(a) }, function () { return e.dragable }); m.registerattribute("size", e.size, function (a) { e.size = Number(a); e.update() }, function () { return e.size }); m.registerattribute("zoomwithmap", e.zoomwithmap, function (a) { e.zoomwithmap = A(a); e.update() }, function () { return e.zoomwithmap });
            m.registerattribute("alpha", e.alpha, function (a) { e.alpha = Number(a); l() }, function () { return e.alpha }); m.registerattribute("fillcolor", e.fillcolor, function (a) { e.fillcolor = Number(a); l() }, function () { return e.fillcolor }); m.registerattribute("fillalpha", e.fillalpha, function (a) { e.fillalpha = Number(a); l() }, function () { return e.fillalpha }); m.registerattribute("linewidth", e.linewidth, function (a) { e.linewidth = Number(a); l() }, function () { return e.linewidth }); m.registerattribute("linecolor", e.linecolor, function (a) {
                e.linecolor =
                Number(a); l()
            }, function () { return e.linecolor }); m.registerattribute("linealpha", e.linealpha, function (a) { e.linealpha = Number(a); l() }, function () { return e.linealpha }); m.registerattribute("headingoffset", e.headingoffset, function (a) { e.headingoffset = Number(a); e.update() }, function () { return e.headingoffset }); l(); 0 == g && (r = new Microsoft.Maps.Polygon([], t), k.entities.push(r), Microsoft.Maps.Events.addHandler(r, "mousedown", c))
        })()
    } function ua(a) {
        function c(a) {
            void 0 === a && (a = !1); var c = b.xmlobject.name, e = d.spot.getArray(),
                k = null, g, h; h = e.length; for (g = 0; g < h; g++)k = e[g].internalObject, k.spotstyle == c && (0 == a || k.active) && k.update(1)
        } var b = this; b.url = null; b.overurl = null; b.activeurl = null; b.edge = "center"; b.x = 0; b.y = 0; b.shadow = !0; b.scale = 1; b.xmlobject = null; b.url_bitmapdata = null; b.overurl_bitmapdata = null; b.activeurl_bitmapdata = null; b.url_bitmapdata = ka; b.overurl_bitmapdata = null; b.activeurl_bitmapdata = Ba; b.xmlobject = a; a.registerattribute("url", b.url, function (a) {
            if ("" == a || "null" == a) a = null; a != b.url && (b.url = a, null != b.url ? T(b.url, function (a) {
                b.url_bitmapdata =
                a; c()
            }) : (b.url_bitmapdata = ka, c()))
        }, function () { return b.url }); a.registerattribute("overurl", b.overurl, function (a) { if ("" == a || "null" == a) a = null; a != b.overurl && (b.overurl = a, null != b.overurl ? T(b.overurl, function (a) { b.overurl_bitmapdata = a }) : b.overurl_bitmapdata = null) }, function () { return b.overurl }); a.registerattribute("activeurl", b.activeurl, function (a) {
            if ("" == a || "null" == a) a = null; a != b.activeurl && (b.activeurl = a, null != b.activeurl ? T(b.activeurl, function (a) { b.activeurl_bitmapdata = a; c(!0) }) : (b.activeurl_bitmapdata =
                Ba, c(!0)))
        }, function () { return b.activeurl }); a.registerattribute("edge", b.edge, function (a) { b.edge = String(a) }, function () { return b.edge }); a.registerattribute("x", b.x, function (a) { b.x = Number(a) }, function () { return b.x }); a.registerattribute("y", b.y, function (a) { b.y = Number(a) }, function () { return b.y }); a.registerattribute("shadow", b.shadow, function (a) { b.shadow = A(a) }, function () { return b.shadow }); a.registerattribute("scale", b.scale, function (a) { b.scale = Number(a) }, function () { return b.scale })
    } function X(a) {
        function c() {
            var a =
                d.spotstyle.getItem(g.spotstyle), b = null; return null == a ? (a = "bingmaps plugin - spot[" + p.name + '] - spotstyle "' + g.spotstyle + '" not found!', a != u && (u = a, h.trace(3, a)), null) : b = a.internalObject
        } function b(a, b) {
            x = a; b || (b = g.zoomwithmap ? Math.pow(2, t) / Math.pow(2, g.zoombaselevel) : 1); var d = x, e = d ? d.naturalWidth : 12, f = d ? d.naturalHeight : 12, k = Math.floor(e / 2), h = Math.floor(f / 2), l = c(), m = 1 * b * I; l && x && (m = Number(l.scale) * b * I, d && void 0 !== d.naturalScale && (m *= d.naturalScale), e *= m, f *= m, k = l.edge, h = l.x, l = l.y, 0 <= k.indexOf("left") ||
                (h = 0 <= k.indexOf("right") ? h + e : h + Math.floor(e / 2)), 0 <= k.indexOf("top") || (l = 0 <= k.indexOf("bottom") ? l + f : l + Math.floor(f / 2)), k = h, h = l); if (E) {
                    var l = e, n = f, p = d.src; "data:" != p.slice(0, 5) && (p = document.createElement("canvas"), p.width = d.naturalWidth, p.height = d.naturalHeight, p.getContext("2d").drawImage(d, 0, 0), p = p.toDataURL("image/png")); v = {
                        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 " + l + " " + n + "' width='" + l + "' height='" + n + "'%3E%3Cimage xlink:href='" +
                            p + "' x='0' y='0' height='" + n + "px' width='" + l + "px'/%3E%3C/svg%3E", anchor: { x: k, y: h }, width: e, height: f, zIndex: g.active ? 2 : 1, typeName: "_krp_bingmaps_pin_cursor"
                    }
                } else v = { icon: d.src, anchor: { x: k, y: h }, width: e, height: f, zIndex: g.active ? 2 : 1, typeName: "_krp_bingmaps_pin_cursor" }; q && (q.setOptions(v), q._krpimg && (q._krpimg.style[J + "Origin"] = "0 0", q._krpimg.style[J] = "scale(" + m + "," + m + ")")); return v
        } function f(a) {
            for (var b in a) if (a[b] && "object" === typeof a[b] && a[b].dom && a[b].dom.childNodes && a[b].dom.childNodes[0]) {
                a._krpdom =
                a[b].dom; a._krpimg = a[b].dom.childNodes[0]; break
            }
        } function l(a) { g.active && 0 == M || (a = p.onclick, null != a && "" != a && h.call(a, p)) } function e(a) { g.active && 0 == M || (null == r && (a = c()) && a.overurl_bitmapdata && b(a.overurl_bitmapdata), H = p, a = p.onover, null != a && "" != a && h.call(a, p)) } function m(a) { H = null; null != a && g.active && 0 == M || (null == r && (a = c()) && (g.active && a.activeurl_bitmapdata ? b(a.activeurl_bitmapdata) : a.url_bitmapdata && b(a.url_bitmapdata)), a = p.onout, null != a && "" != a && h.call(a, p)) } var g = this; g.spotstyle = "default"; g.url =
            null; g.lat = Number.NaN; g.lng = Number.NaN; g.heading = 0; g.active = !1; g.needdom = !1; g.zoomwithmap = !1; g.zoombaselevel = 10; g.needupdate = !1; var p = null, n = 0, r = null, w = null, x = null, u = null, q = null, v = null, p = a; g.xmlobject = p; g.update = function (a) { void 0 === a && (a = 0); g.needupdate = !0; n |= a; P = !0 }; g.processupdate = function () {
                if (null != p) {
                    if (2 == (n & 2)) {
                        var a = !1; if (k) {
                            var d = !isNaN(g.lat) && !isNaN(g.lng), h = d ? new Microsoft.Maps.Location(g.lat, g.lng) : new Microsoft.Maps.Location(0, 0); null == q && d ? (d = c(), a = g.active ? d.activeurl_bitmapdata :
                                d.url_bitmapdata, q = null, v = b(a), q = new Microsoft.Maps.Pushpin(h, v), k.entities.push(q), 0 == E && f(q), h = d.scale, void 0 !== a.naturalScale && (h *= a.naturalScale), g.zoomwithmap && (h *= Math.pow(2, t) / Math.pow(2, g.zoombaselevel)), h *= I, 0 == E && (q._krpimg ? (q._krpimg.style[J + "Origin"] = "0 0", q._krpimg.style[J] = "scale(" + h + "," + h + ")") : P = g.needdom = !0), Microsoft.Maps.Events.addHandler(q, "click", l), Microsoft.Maps.Events.addHandler(q, "mouseover", e), Microsoft.Maps.Events.addHandler(q, "mouseout", m), a = !0) : q && d && (q.setLocation(h),
                                    a = !0)
                        } a && (n &= -3)
                    } 1 == (n & 1) && g.updateimage() && (n &= -2); 0 == n && (g.needupdate = !1)
                }
            }; g.updateimage = function () { if ("" == g.url || "null" == g.url) g.url = null; if (g.url) g.url != r && (r = g.url, T(g.url, function (a) { w = a; b(a) })); else { w = r = null; var a = c(); a && (a = g.active ? a.activeurl_bitmapdata : a.url_bitmapdata, x != a && b(a)) } return !0 }; g.scalespot = function (a) { b(x, a) }; g.try_dom_access = function () { if (q) if (f(q), q._krpimg) { var a = c(); b(r ? w : g.active ? a.activeurl_bitmapdata : a.url_bitmapdata); g.needdom = !1 } else P = g.needdom = !0 }; g.destroy = function () {
                q &&
                k && k.entities.remove(q); x = p = v = q = null
            }; p.event_out = m; (function () {
                a.registerattribute("spotstyle", g.spotstyle, function (a) { if (null == a || "" == a) a = "default"; g.spotstyle = String(a).toLowerCase(); g.update(1) }, function () { return g.spotstyle }); a.registerattribute("url", g.url, function (a) { a != g.url && (g.url = String(a), g.update(1)) }, function () { return g.url }); a.registerattribute("lat", g.lat, function (a) { g.lat = Number(a); g.update(2) }, function () { return g.lat }); a.registerattribute("lng", g.lng, function (a) {
                    g.lng = Number(a);
                    g.update(2)
                }, function () { return g.lng }); a.registerattribute("heading", g.heading, function (a) { g.heading = Number(a) }, function () { return g.heading }); a.registerattribute("active", g.active, function (a) { g.active = A(a); g.update(1) }, function () { return g.active }); a.registerattribute("zoomwithmap", g.zoomwithmap, function (a) { g.zoomwithmap = A(a); g.update(2) }, function () { return g.zoomwithmap }); a.registerattribute("zoombaselevel", g.zoombaselevel, function (a) { g.zoombaselevel = Number(a); g.update(2) }, function () { return g.zoombaselevel });
                a.registerattribute("onover", null); a.registerattribute("onhover", null); a.registerattribute("onout", null); a.registerattribute("onclick", null); a.activatespot = function () { Z(p.name) }; a.pantospot = function () { xa(p.name) }
            })()
    } var E = !0, ka = {
        src: "data:image/png;base64,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",
        naturalWidth: 64, naturalHeight: 64, naturalScale: .5
    }, Ba = {
        src: "data:image/png;base64,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",
        naturalWidth: 64, naturalHeight: 64, naturalScale: .5
    }, h = null, d = null, aa = null, U = null, O = null, L = "webkit", J = "webkitTransform", R = "-webkit-background-size", v = null, S = "touchstart", ia = "touchmove", N = "touchend", ja = "touchcancel", I = 1, D = null, m = null, k = null, V = !1, P = !1, K = !0, w = null, H = null, na = !1, F = null, n = null, G, Ca, y, z, t, M; this.registerplugin = function (a, c, b) {
        function f() { var a = document.createElement("style"); a.type = "text/css"; a.innerHTML = "._krp_bingmaps_pin_cursor{cursor:pointer!important;}"; document.getElementsByTagName("head")[0].appendChild(a) }
        h = a; d = b; aa = c; if ("1.20" > h.version || "2019-09-01" > h.build) h.trace(3, "Bingmaps Plugin - too old krpano version (min. version 1.20)"); else {
            U = h.device; U.androidstock && (I = U.pixelratio); a = h.device.browser; c = a.css; v = a.events; S = v.touchstart; ia = v.touchmove; N = v.touchend; ja = v.touchcancel; L = c.prefix; J = c.transform; R = c.backgroundsize; L = void 0 === L || null === L ? "webkit" : String(L).toLowerCase(); if (void 0 === J || null === J) J = "webkitTransform"; if (void 0 === R || null === R) R = "-webkit-background-size"; f(); d.maskchildren = !0; if (!1 ===
                d.v8api || "false" === d.v8api) E = !1, console.log("use Bing Maps API V7"); d.registerattribute("key", null); d.registerattribute("maptype", "satellite", function (a) { Q(a) }, function () { return G }); d.registerattribute("maptypes", "normal|satellite|hybrid", function (a) { Ca = String(a) }, function () { return Ca }); d.registerattribute("lat", 0, function (a) { y = Number(a); ga() }, function () { return y }); d.registerattribute("lng", 0, function (a) { z = Number(a); ga() }, function () { return z }); d.registerattribute("zoom", 1, function (a) {
                    t = Number(a);
                    ga()
                }, function () { return t }); d.registerattribute("activespotenabled", !1, function (a) { M = A(a) }, function () { return M }); d.registerattribute("bgcolor", 0); d.registerattribute("bgalpha", 0); d.registerattribute("mapsapi", ""); d.registerattribute("onmapready", null); d.registerattribute("onmapmoved", null); d.registerattribute("onmapzoomed", null); d.registerattribute("onmaptypechanged", null); d.setzoom = Sa; d.setcenter = wa; d.setmaptype = Q; d.addspot = Pa; d.addstylespot = Qa; d.addimagespot = Ra; d.removespot = Y; d.removeallspots = va;
            d.activatespot = Z; d.addspotstyle = Oa; d.panto = Wa; d.pantospot = xa; d.panby = $a; d.flyto = Za; d.flytospot = Ya; d.cancelflyto = Xa; d.zoomin = Ta; d.zoomout = Ua; d.zoomtospotsextent = Va; d.resetspots = va; d.updatespots = qa; d.updatecontrols = W; Ma(); Na(); 0 == h.haveLicense("maps") && setTimeout(Fa, 100); d.registercontentsize(400, 300); a = Math.floor(d.pixelwidth * h.stagescale); c = Math.floor(d.pixelheight * h.stagescale); m = document.createElement("div"); m.style.position = "absolute"; m.style.left = 0; m.style.top = 0; m.style.width = a + "px"; m.style.height =
                c + "px"; m.style.overflow = "hidden"; m.style.fontFamily = "Arial"; m.style.fontSize = 9 * h.stagescale + "px"; m.style.fontSize = 9 * h.stagescale + "px"; m.style.webkitUserSelect = "none"; m.style.MozUserSelect = "none"; d.sprite.appendChild(m); if (window.Microsoft && window.Microsoft.Maps) setTimeout(ca, 10); else if (window._krpano_bmap_loadedcallbacks_) window._krpano_bmap_loadedcallbacks_.push(ca); else {
                    window._krpano_bmap_loadedcallbacks_ = []; D = "_krpano_bmap_cb_"; for (a = 0; 16 > a; a++)D += String.fromCharCode(65 + 32 * Math.round(Math.random()) +
                        Math.floor(25 * Math.random())); window[D] = Ga; a = ""; d.culturecode && (a = "&mkt=" + d.culturecode); (c = d.mapsapi) && "" != c || (c = 0 == ("" + window.location.href).toLowerCase().indexOf("https:") ? E ? "https://www.bing.com/api/maps/mapcontrol" : "https://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0&s=1" : E ? "http://www.bing.com/api/maps/mapcontrol" : "http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0"); b = document.createElement("script"); b.type = "text/javascript"; E ? (b.async = !0, b.defer = !0, b.src = c + "?branch=frozen&callback=" +
                            D + a) : b.src = c + a + "&onscriptload=" + D; document.body.appendChild(b)
                }
        }
    }; this.unloadplugin = function () { V = !1; null != O && (clearInterval(O), O = null); h = d = k = m = null }; this.onresize = function (a, c) { var b = Math.floor(a * h.stagescale), d = Math.floor(c * h.stagescale); m && (m.style.width = b + "px", m.style.height = d + "px"); k && (k.setOptions({ height: d, width: b }), da()); W(); return !1 }
};

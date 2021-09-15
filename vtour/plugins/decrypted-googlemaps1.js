var krpanoplugin = function () {
    function w(a) { return "boolean" == typeof a ? a : 0 <= "yesontrue1".indexOf(String(a).toLowerCase()) } function L(a) { return "rgb(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + ")" } function X() {
        null != x && (window[x] = null, delete window[x], x = null); g && google && google.maps && g.trace(0, "Google Maps API Version: " + google.maps.version); var a = window._krpano_gmap_loadedcallbacks_; if (a) {
            window._krpano_gmap_loadedcallbacks_ = null; delete window._krpano_gmap_loadedcallbacks_; var d = a.length, b; if (0 < d && 99 > d) for (b =
                0; b < d; b++)setTimeout(a[b], 10 + 5 * b); a = null
        } g && e && (k = document.createElement("div"), k.style.position = "absolute", k.style.width = "100%", k.style.height = "100%", q.android && q.firefox && (k.style.opacity = .99), q.ios && k.addEventListener(g.browser.events.gesturestart, function (a) { a.preventDefault(); a.stopPropagation() }, !1), e.sprite.appendChild(k), a = { mapTypeId: da(F), center: new google.maps.LatLng(e.lat, e.lng), zoom: t, tilt: M, heading: N, gestureHandling: "greedy", keyboardShortcuts: !1, noClear: !0 }, g.control && !0 === g.control.disablewheel &&
            (a.scrollwheel = !1), a = Y(a), google.maps.visualRefresh = !0, h = new google.maps.Map(k, a), q.touchdeviceNS && (k.addEventListener(q.browser.events.touchstart, ya, !0), k.addEventListener(q.browser.events.touchend, ea, !0), k.addEventListener(q.browser.events.touchcancel, ea, !0)), k.addEventListener("DOMMouseScroll", fa, !0), k.addEventListener("wheel", fa, !1), null == G && (G = setInterval(za, 1E3 / 60)), l = new Aa, ga(), e.gmAPI = { gmaps: google.maps, map: h, dom: k }, ha = !0, e.triggerevent("onmapready"), google.maps.event.addListener(h, "maptypeid_changed",
                Ba), google.maps.event.addListener(h, "center_changed", ia), google.maps.event.addListener(h, "zoom_changed", ia))
    } function ja(a, d) {
        var b = document.createElementNS("http://www.w3.org/2000/svg", "svg"); b.setAttribute("width", a); b.setAttribute("height", d); b.style.position = "absolute"; b.style.left = -a / 2 + "px"; b.style.top = -d / 2 + "px"; var f = document.createElementNS("http://www.w3.org/2000/svg", "path"); f.style.pointerEvents = "visiblePainted"; f.style.cursor = "pointer"; f.setAttribute("stroke", "rgba(255,0,0,1.0)"); f.setAttribute("stroke-width",
            2); f.setAttribute("fill", "rgba(0,255,0,0.5)"); b.appendChild(f); var e = {}; e.svg = b; e.path = f; e.centerx = a / 2; e.centery = d / 2; var g = -1; e.hide = function () { 0 != g && (g = 0, b.style.display = "none") }; e.show = function () { 1 != g && (g = 1, b.style.display = "") }; e.drawpie = function (a, b, d, e, g) {
                var h, A; e > g && (h = g, g = e, e = h); e = e * Math.PI / 180; g = g * Math.PI / 180; A = g - e; h = (e + g) / 2; var k = A > Math.PI ? 1 : 0; A >= 2 * Math.PI && (A = 2 * Math.PI - .01); e = h - A / 2; g = h + A / 2; h = a + d * Math.sin(e); e = b - d * Math.cos(e); A = a + d * Math.sin(g); g = b - d * Math.cos(g); f.setAttribute("d", "M " + a +
                    "," + b + " L " + h + "," + e + " A " + d + "," + d + " 0 " + k + " 1 " + A + "," + g + " Z")
            }; return e
    } function Ca() {
        var a = document.createElement("div"); a.style.position = "absolute"; a.style.left = "50%"; a.style.top = "50%"; a.style.width = "100%"; a.style.zIndex = 999998; a.style.color = "#FFFFFF"; a.style.opacity = .67; a.style.fontSize = g.isphone ? "10px" : "16px"; a.style["-webkit-text-size-adjust"] = "none"; a.style.display = "block"; a.style.cursor = "default"; a.style.pointerEvents = "none"; var d = document.createElement("div"); d.style.position = "relative"; d.style.left =
            "-50%"; d.style.top = g.isphone ? "-64px" : "-46px"; d.style.pointerEvents = "none"; d.style.fontFamily = "sans-serif"; d.style.textShadow = "#000000 1px 1px 2px"; d.innerHTML = "<center><i><b>krpano Google Maps Plugin<br/>DEMO MODE</b></i></center>"; a.appendChild(d); e && e.sprite && e.sprite.appendChild(a)
    } function ya(a) { g && (g.control.preventTouchEvents = !1) } function ea(a) { setTimeout(function () { g && (g.control.preventTouchEvents = !0) }, 50) } function fa(a) { g && a.stopPropagation() } function O(a, d) {
        var b = document.createElement("img");
        b.addEventListener("error", function () { g && e && g.trace(3, e._type + "[" + e.name + "] loading error: " + a) }, !0); b.addEventListener("load", function () { g && e && d(b) }, !1); b.src = g.parsePath(a)
    } function Ba() { if (h) { var a = "" + h.getMapTypeId(); a != F && (F = a, e.triggerevent("onmaptypechanged")) } } function ia() { if (h) { var a = h.getCenter(); if (u != a.lat() || p != a.lng()) u = a.lat(), p = a.lng(), e.triggerevent("onmapmoved"); a = h.getZoom(); t != a && (l && (l.needredraw = !0), t = a, e.triggerevent("onmapzoomed"), l && l.updatehandler()) } } function H(a) {
        return h &&
            k ? (a = k.clientHeight, (a = 0 < k.clientWidth && 0 < a) ? 0 == Z && (Z = g.timertick) : Z = 0, a) : !1
    } function P(a, d) { u = a; p = d; H("setCenter") ? h.setCenter(new google.maps.LatLng(a, d)) : (v = !0, I = u, J = p) } function y(a) { t = a; H("setZoom") ? h.setZoom(Math.round(t)) : C = !0 } function D(a, d) { H("panTo") ? h.panTo(new google.maps.LatLng(a, d)) : (u = a, p = d, I = u, J = p, v = !0) } function aa(a) { if (h) { var d = t; a & 1 && P(u, p); a & 2 && y(d) } } function la() { h && (h.setTilt(M), h.setHeading(N)) } function Y(a) {
        a.styles = ba ? [] : [{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }];
        var d = ("|" + ca + "|").toLowerCase(); a.zoomControl = 0 <= d.indexOf("|zoom|"); a.mapTypeControl = 0 <= d.indexOf("|maptype|"); a.scaleControl = 0 <= d.indexOf("|scale|"); a.streetViewControl = 0 <= d.indexOf("|streetview|"); a.rotateControl = 0 <= d.indexOf("|rotate|"); a.fullscreenControl = !1; return a
    } function da(a) { a = a.toLowerCase(); if ("satellite" != a) { if ("normal" == a) return google.maps.MapTypeId.ROADMAP; if ("hybrid" == a) return google.maps.MapTypeId.HYBRID; if ("terrain" == a) return google.maps.MapTypeId.TERRAIN } return google.maps.MapTypeId.SATELLITE }
    function ma() { var a = arguments; 1 == a.length ? (a = String(a[0]).toLowerCase(), "satellite" != a && "normal" != a && "hybrid" != a && "terrain" != a && (a = "satellite"), h ? h.setMapTypeId(da(a)) : F = a) : g.trace(3, "googlemaps plugin - setmaptype() syntax error!") } function Da() { if (h) { var a = arguments; if (1 <= a.length) { var d = Number(a[0]); 1 < a.length && w(a[1]); y(d) } else g.trace(3, "googlemaps plugin - setzoom() syntax error!") } } function na() {
        if (h) {
            var a = arguments; if (3 == a.length) { var d = Number(a[2]); P(Number(a[0]), Number(a[1])); y(d) } else g.trace(3,
                "googlemaps plugin - setcenter() syntax error!")
        }
    } function Ea() { if (h) { var a = arguments, d = null; if (2 <= a.length) { var b = a[0], f = a[1]; null != b && void 0 != b && "" != b && "null" != b && null != f && void 0 != f && "" != f && "null" != f && (d = new google.maps.LatLng(Number(b), Number(f))) } 2 < a.length && w(a[2]); 3 < a.length && w(a[3]); a = t; 32 > a && (a += 1); t = a; d && (u = d.lat(), p = d.lng()); d = u; b = p; y(a); P(d, b) } } function Fa() {
        if (h) {
            var a = arguments, d = null; if (2 <= a.length) {
                var b = a[0], f = a[1]; null != b && void 0 != b && "" != b && "null" != b && null != f && void 0 != f && "" != f && "null" !=
                    f && (d = new google.maps.LatLng(Number(b), Number(f)))
            } 2 < a.length && w(a[2]); a = t; --a; .5 > a && (a = .5); t = a; d && (u = d.lat(), p = d.lng()); d = u; b = p; y(a); P(d, b)
        }
    } function oa() { if (h) if (0 == H("zoomtospotsextent")) v = C = !1, K = !0; else { v = !1; var a, d, b, f = e.spot.getArray(); d = f.length; if (!(1 > d)) if (1 == d) b = f[0].internalObject, na(b.lat, b.lng, t); else { var g = new google.maps.LatLngBounds; for (a = 0; a < d; a++)b = f[a].internalObject, g.extend(new google.maps.LatLng(b.lat, b.lng)); h.fitBounds(g) } } else v = C = !1, K = !0 } function pa() {
        if (h) {
            var a = arguments;
            if (1 == a.length) { var d = String(a[0]), a = Q + ".spot[" + d + "]"; g.get(a) ? (d = Number(g.get(a + ".lat")), a = Number(g.get(a + ".lng")), isNaN(d) || isNaN(a) || D(d, a)) : g.trace(3, "googlemaps plugin - pantospot() - spot[" + d + "] not found!") } else g.trace(3, "googlemaps plugin - pantospot() syntax error!")
        }
    } function Ga() { if (h) { var a = arguments; 2 == a.length ? D(Number(a[0]), Number(a[1])) : g.trace(3, "googlemaps plugin - panto() syntax error!") } } function Ha() { } function Ia() {
        if (h) {
            var a = arguments; if (1 <= a.length) {
                var d = Q + ".spot[" + String(a[0]) +
                    "].", b = Number(g.get(d + "lat")), d = Number(g.get(d + "lng")); isNaN(b) || isNaN(d) || (h.getZoom(), 2 <= a.length && y(t), D(b, d))
            } else g.trace(3, "googlemaps plugin - flytospot() syntax error!")
        }
    } function Ja() { if (h) { var a = arguments, d = !0; if (2 <= a.length) { var b = Number(a[0]), f = Number(a[1]); if (2 == a.length) a = new google.maps.LatLng(b, f), h.setView({ animate: !0, center: a }), d = !1; else { var e = Number(a[2]); 3 == a.length ? (y(e), D(b, f), d = !1) : 6 <= a.length && (6 == a.length ? (y(e), D(b, f), d = !1) : 7 == a.length && (y(e), D(b, f), d = !1)) } } d && g.trace(3, "googlemaps plugin - flyto() syntax error!") } }
    function Ka() { if (h) { var a = arguments; 2 == a.length ? h.panBy(Number(a[0]), Number(a[1])) : g.trace(3, "googlemaps plugin - panby() syntax error!") } } function za(a) {
        if (ha) {
            a = [0, 0]; if (h && k) { var d = k.clientHeight; a[0] = k.clientWidth; a[1] = d } d = !1; if (a[0] != R[0] || a[1] != R[1]) R[0] = a[0], R[1] = a[1], d = !0; (d || v || C || K) && H(null) && (google.maps.event.trigger(h, "resize"), K && (K = !1, oa()), C && (C = !1, h.setZoom(t)), v && (u = I, p = J, v = !1, h.setCenter(new google.maps.LatLng(u, p)))); if (S) {
                S = !1; a = e.spot.getArray(); var b = null, f; f = a.length; for (d =
                    0; d < f; d++)(b = a[d]) && (b = b.internalObject) && b.needupdate && b.processupdate()
            } l && l.updatehandler(); B && 0 == ((g.display.frame | 0) & 1) && (a = B.onhover, null != a && "" != a && g.call(a, B))
        }
    } function La() { e.createarray("spotstyle"); e.spotstyle.createItem("default"); var a = e.spotstyle.getArray(), d = null, b, f; f = a.length; for (b = 0; b < f; b++)d = a[b], d.internalObject = new qa(d) } function Ma() { e.createarray("spot"); var a = e.spot.getArray(), d = null, b, f; f = a.length; for (b = 0; b < f; b++)d = a[b], d.internalObject = new T(d) } function Na() {
        var a = arguments;
        if (1 <= a.length) { var d = String(a[0]).toLowerCase(), d = e.spotstyle.createItem(d); 1 < a.length && (d.url = a[1]); 2 < a.length && (d.overurl = a[2]); 3 < a.length && (d.activeurl = a[3]); 4 < a.length && (d.edge = a[4]); 5 < a.length && (d.x = a[5]); 6 < a.length && (d.y = a[6]); 7 < a.length && (d.shadow = a[7]); d.internalObject = new qa(d) } else g.trace(3, "googlemaps plugin - addspotstyle() syntax error!")
    } function Oa() {
        var a = arguments; if (3 <= a.length) {
            var d = String(a[0]).toLowerCase(), b = null, f = null, b = e.spot.getItem(d); null != b && U(d); b = e.spot.createItem(d);
            b.lat = a[1]; b.lng = a[2]; 3 < a.length && (b.heading = a[3]); 4 < a.length && (b.active = a[4]); 5 < a.length && (b.onclick = a[5]); 6 < a.length && (b.onhover = a[6]); 7 < a.length && (b.onover = a[7]); 8 < a.length && (b.onout = a[8]); f = new T(b); f.update(); b.internalObject = f; f.active && V(d)
        } else g.trace(3, "googlemaps plugin - addspot() syntax error!")
    } function Pa() {
        var a = arguments; if (5 <= a.length) {
            var d = String(a[0]).toLowerCase(), b = null, f = null, b = e.spot.getItem(d); null != b && U(d); b = e.spot.createItem(d); b.lat = a[1]; b.lng = a[2]; b.heading = a[3]; b.spotstyle =
                a[4]; 5 < a.length && (b.active = a[5]); 6 < a.length && (b.onclick = a[6]); 7 < a.length && (b.onhover = a[7]); 8 < a.length && (b.onover = a[8]); 9 < a.length && (b.onout = a[9]); f = new T(b); f.update(); b.internalObject = f; f.active && V(d)
        } else g.trace(3, "googlemaps plugin - addstylespot() syntax error!")
    } function Qa() {
        var a = arguments; if (6 <= a.length) {
            var d = String(a[0]).toLowerCase(), b = null, f = null, b = e.spot.getItem(d); null != b && U(d); b = e.spot.createItem(d); b.lat = a[1]; b.lng = a[2]; b.heading = a[3]; b.spotstyle = a[4]; b.url = a[5]; 6 < a.length && (b.onclick =
                a[6]); 7 < a.length && (b.onhover = a[7]); 8 < a.length && (b.onover = a[8]); 9 < a.length && (b.onout = a[9]); f = new T(b); f.update(); b.internalObject = f
        } else g.trace(3, "googlemaps plugin - addimagespot() syntax error!")
    } function U() {
        var a = arguments; if (1 == a.length) { var a = String(a[0]).toLowerCase(), d = null, b = null; (d = e.spot.getItem(a)) ? (b = d.internalObject, l && l.bmspot == b && (l.bmspot = null), b && b.destroy(), d.internalObject = null, e.spot.removeItem(a)) : g.trace(3, "googlemaps plugin - removespot() - spot[" + a + "] not found!") } else g.trace(3,
            "googlemaps plugin - removespot() syntax error!")
    } function ra() { var a = e.spot.getArray(), d = null, b = null, f, g; g = a.length; for (f = 0; f < g; f++)d = a[f], (b = d.internalObject) && b.destroy(), d.internalObject = null; e.spot.count = 0; l && (l.bmspot = null) } function ga() { var a = e.spot.getArray(), d = null, b = d = null, f, g; g = a.length; for (f = 0; f < g; f++)d = a[f], d = d.internalObject, d.processupdate(), d.active && (b = d); b && l && (l.bmspot = b, l.update()) } function V() {
        var a = arguments; if (1 == a.length) {
            var a = String(a[0]).toLowerCase(), d = e.spot.getArray(),
            b = null, f = null, h = null, k, c; c = d.length; for (k = 0; k < c; k++)b = d[k], f = b.internalObject, String(b.name).toLowerCase() == a ? (0 == f.active && (f.active = !0, f.update(1)), h = f) : 0 != f.active && (f.active = !1, f.update(1)); h && (0 == E && h.xmlobject == B && (B.event_out(null), B = null), l && (l.bmspot = h, l.update()))
        } else g.trace(3, "googlemaps plugin - activatespot() syntax error!")
    } function Aa() {
        function a(a, c) {
            function d(a, b) { this.latlng_ = a; this.setMap(b) } d.prototype = new google.maps.OverlayView; d.prototype.draw = function () {
                var a = this.getPanes();
                if (a && a.overlayImage) {
                    var c = this._krpdom, d = this._krpdom2; c || (c = this._krpdom = document.createElement("DIV"), c.style.border = "none", c.style.position = "absolute", c.style.cursor = "pointer", d = this._krpdom2 = document.createElement("DIV"), d.style.border = "none", d.style.position = "absolute", d.style.cursor = "pointer", m = ja(500, 500), r = ja(500, 500), l(), c.style.overflow = "visible", c.appendChild(m.svg), d.style.opacity = 0, d.style.overflow = "visible", d.appendChild(r.svg), q.browser.events.mouse && r.path.addEventListener("mousedown",
                        b, !0), q.browser.events.touch && r.path.addEventListener(q.browser.events.touchstart, b, !0), a.overlayImage.appendChild(d), a.markerLayer.appendChild(c)); if (a = this.getProjection().fromLatLngToDivPixel(this.latlng_)) c.style.left = a.x + "px", c.style.top = a.y + "px", d.style.left = a.x + "px", d.style.top = a.y + "px"
                }
            }; d.prototype.remove = function () { this.div_ && (this.div_.parentNode.removeChild(this.div_), this.div_ = null) }; d.prototype.getPosition = function () { return this.latlng_ }; d.prototype.setPosition = function (a) {
                this.latlng_ =
                a; this.draw()
            }; return new d(a, c)
        } function d(a) { a && (a.preventDefault(), a.stopImmediatePropagation(), a.stopPropagation()) } function b(a) { c.dragable && (u = !0, k(a), q.browser.events.mouse && (window.addEventListener("mousemove", k, !0), window.addEventListener("mouseup", f, !0)), q.browser.events.touch && (window.addEventListener(q.browser.events.touchmove, k, !0), window.addEventListener(q.browser.events.touchcancel, f, !0), window.addEventListener(q.browser.events.touchend, f, !0)), d(a)) } function f(a) {
            q.browser.events.mouse &&
            (window.removeEventListener("mousemove", k, !0), window.removeEventListener("mouseup", f, !0)); q.browser.events.touch && (window.removeEventListener(q.browser.events.touchmove, k, !0), window.removeEventListener(q.browser.events.touchcancel, f, !0), window.removeEventListener(q.browser.events.touchend, f, !0)); d(a)
        } function k(a) {
            if (null == g) f(a); else if (null != m && null != c.bmspot) {
                d(a); var b; b = null; var e = 0, z = 0; b = { x: 0, y: 0 }; var h = r.svg.parentNode.getBoundingClientRect(); q.browser.events && q.browser.events.touch ? (a = a.changedTouches ?
                    a.changedTouches : [a], 0 < a.length && (z = a[0], e = Math.round(z.clientX - h.left), z = Math.round(z.clientY - h.top))) : (e = Math.round(a.clientX - h.left), z = Math.round(a.clientY - h.top)); b = 180 * Math.atan2(z - b.y, e - b.x) / Math.PI; b -= c.bmspot.heading; if (1 == u) ka = b - Number(g.view.hlookat), u = !1; else { for (b -= ka; 180 < b;)b -= 360; for (; -180 > b;)b += 360; g.view.hlookat = b } c.needredraw = !0
            }
        } function l() {
            c.needredraw = !0; m && (m.path.setAttribute("stroke", L(c.linecolor)), m.path.setAttribute("stroke-width", c.linewidth), m.path.setAttribute("stroke-opacity",
                c.linealpha * c.alpha), m.path.setAttribute("fill", L(c.fillcolor)), m.path.setAttribute("fill-opacity", c.fillalpha * c.alpha)); r && (r.path.setAttribute("stroke", L(c.linecolor)), r.path.setAttribute("stroke-width", c.linewidth), r.path.setAttribute("stroke-opacity", c.linealpha * c.alpha), r.path.setAttribute("fill", L(c.fillcolor)), r.path.setAttribute("fill-opacity", c.fillalpha * c.alpha))
        } var c = this, n = null, m = null, r = null; c.visible = !1; c.dragable = !0; c.size = 100; c.zoomwithmap = !1; c.alpha = .5; c.fillcolor = 16777215; c.fillalpha =
            1; c.linewidth = 0; c.linecolor = 16777215; c.linealpha = 0; c.glow = !0; c.glowcolor = 16777215; c.glowwidth = 4; c.glowstrength = 3; c.headingoffset = 90; c.bmspot = null; c.needredraw = !0; var t = null, u = !1, ka = 0, p = null, z = 0, sa = 0, ta = -1E3, v = -1E3, ua = -1, n = e.radar; n || (g.set(Q + ".radar.visible", !1), n = e.radar); c.destroy = function () { c.bmspot = null; t && t.setMap(null); t = null }; c.update = function () { c.needredraw = !0 }; c.updatehandler = function () {
                if (h) if (null == t && null != c.bmspot && (t = a(new google.maps.LatLng(c.bmspot.lat, c.bmspot.lng), h)), null == c.bmspot ||
                    0 == c.visible) m && m.hide(), r && r.hide(); else {
                        m && m.show(); r && r.show(); var b = Number(g.view.hlookat), d = Number(g.view.hfov), b = b + c.bmspot.heading, b = b + c.headingoffset; if (ta != c.bmspot.lat || v != c.bmspot.lng) ta = c.bmspot.lat, v = c.bmspot.lng, t.setPosition(new google.maps.LatLng(c.bmspot.lat, c.bmspot.lng)); if (c.bmspot != p || b != z || d != sa) p = c.bmspot, z = b, sa = d, c.needredraw = !0; if (c.needredraw) {
                            var e = c.zoomwithmap ? Math.pow(2, h.getZoom()) / 1E4 : 1, e = 1 * c.size * e * W; 2800 < e && (e = 2800); var f = 16 * (Math.floor(2 * e / 16) + 1) + 16; m && f != ua && (ua =
                                f, m && (m.svg.setAttribute("width", f), m.svg.setAttribute("height", f), m.svg.style.left = -f / 2 + "px", m.svg.style.top = -f / 2 + "px", m.centerx = f / 2, m.centery = f / 2), r && (r.svg.setAttribute("width", f), r.svg.setAttribute("height", f), r.svg.style.left = -f / 2 + "px", r.svg.style.top = -f / 2 + "px", r.centerx = f / 2, r.centery = f / 2)); m && m.drawpie(f / 2, f / 2, e, b - .5 * d, b + .5 * d); r && r.drawpie(f / 2, f / 2, e, b - .5 * d, b + .5 * d)
                        } c.needredraw = !1
                }
            }; (function () {
                n.registerattribute("visible", c.visible, function (a) { c.visible = w(a); c.update() }, function () { return c.visible });
                n.registerattribute("dragable", c.dragable, function (a) { c.dragable = w(a) }, function () { return c.dragable }); n.registerattribute("size", c.size, function (a) { c.size = Number(a); c.update() }, function () { return c.size }); n.registerattribute("zoomwithmap", c.zoomwithmap, function (a) { c.zoomwithmap = w(a); c.update() }, function () { return c.zoomwithmap }); n.registerattribute("alpha", c.alpha, function (a) { c.alpha = Number(a); l() }, function () { return c.alpha }); n.registerattribute("fillcolor", c.fillcolor, function (a) {
                    c.fillcolor = Number(a);
                    l()
                }, function () { return c.fillcolor }); n.registerattribute("fillalpha", c.fillalpha, function (a) { c.fillalpha = Number(a); l() }, function () { return c.fillalpha }); n.registerattribute("linewidth", c.linewidth, function (a) { c.linewidth = Number(a); l() }, function () { return c.linewidth }); n.registerattribute("linecolor", c.linecolor, function (a) { c.linecolor = Number(a); l() }, function () { return c.linecolor }); n.registerattribute("linealpha", c.linealpha, function (a) { c.linealpha = Number(a); l() }, function () { return c.linealpha }); n.registerattribute("headingoffset",
                    c.headingoffset, function (a) { c.headingoffset = Number(a); c.update() }, function () { return c.headingoffset }); l()
            })()
    } function qa(a) {
        function d(a) { void 0 === a && (a = !1); var d = b.xmlobject.name, g = e.spot.getArray(), c = null, h, k; k = g.length; for (h = 0; h < k; h++)c = g[h].internalObject, c.spotstyle == d && (0 == a || c.active) && c.update(1) } var b = this; b.url = null; b.overurl = null; b.activeurl = null; b.edge = "center"; b.x = 0; b.y = 0; b.shadow = !0; b.scale = 1; b.xmlobject = null; b.url_bitmapdata = null; b.overurl_bitmapdata = null; b.activeurl_bitmapdata = null;
        b.url_bitmapdata = va; b.overurl_bitmapdata = null; b.activeurl_bitmapdata = wa; b.xmlobject = a; a.registerattribute("url", b.url, function (a) { if ("" == a || "null" == a) a = null; a != b.url && (b.url = a, null != b.url ? O(b.url, function (a) { b.url_bitmapdata = a; d() }) : (b.url_bitmapdata = va, d())) }, function () { return b.url }); a.registerattribute("overurl", b.overurl, function (a) { if ("" == a || "null" == a) a = null; a != b.overurl && (b.overurl = a, null != b.overurl ? O(b.overurl, function (a) { b.overurl_bitmapdata = a }) : b.overurl_bitmapdata = null) }, function () { return b.overurl });
        a.registerattribute("activeurl", b.activeurl, function (a) { if ("" == a || "null" == a) a = null; a != b.activeurl && (b.activeurl = a, null != b.activeurl ? O(b.activeurl, function (a) { b.activeurl_bitmapdata = a; d(!0) }) : (b.activeurl_bitmapdata = wa, d(!0))) }, function () { return b.activeurl }); a.registerattribute("edge", b.edge, function (a) { b.edge = String(a) }, function () { return b.edge }); a.registerattribute("x", b.x, function (a) { b.x = Number(a) }, function () { return b.x }); a.registerattribute("y", b.y, function (a) { b.y = Number(a) }, function () { return b.y });
        a.registerattribute("shadow", b.shadow, function (a) { b.shadow = w(a) }, function () { return b.shadow }); a.registerattribute("scale", b.scale, function (a) { b.scale = Number(a) }, function () { return b.scale })
    } function T(a) {
        function d() { var a = e.spotstyle.getItem(c.spotstyle), b = null; return null == a ? (a = "googlemaps plugin - spot[" + n.name + '] - spotstyle "' + c.spotstyle + '" not found!', a != u && (u = a, g.trace(3, a)), null) : b = a.internalObject } function b(a, b) {
            q = a; b || (b = c.zoomwithmap ? Math.pow(2, t) / Math.pow(2, c.zoombaselevel) : 1); var e =
                q, f = e ? e.naturalWidth : 12, g = e ? e.naturalHeight : 12, k = Math.floor(f / 2), m = Math.floor(g / 2), l = d(), n = 1 * b * W; l && q && (n = Number(l.scale) * b * W, e && void 0 !== e.naturalScale && (n *= e.naturalScale), f *= n, g *= n, k = l.edge, m = l.x, l = l.y, 0 <= k.indexOf("left") || (m = 0 <= k.indexOf("right") ? m + f : m + Math.floor(f / 2)), 0 <= k.indexOf("top") || (l = 0 <= k.indexOf("bottom") ? l + g : l + Math.floor(g / 2)), k = m, m = l); v = {
                    map: h, icon: {
                        url: e.src, origin: new google.maps.Point(0, 0), anchor: new google.maps.Point(k, m), size: new google.maps.Size(f, g), scaledSize: new google.maps.Size(f,
                            g)
                    }, flat: !0, optimized: !1, zIndex: c.active ? 2 : 1
                }; p && p.setOptions(v); return v
        } function f(a) { c.active && 0 == E || (a = n.onclick, null != a && "" != a && g.call(a, n)) } function k(a) { c.active && 0 == E || (null == r && (a = d()) && a.overurl_bitmapdata && b(a.overurl_bitmapdata), B = n, a = n.onover, null != a && "" != a && g.call(a, n)) } function l(a) { B = null; null != a && c.active && 0 == E || (null == r && (a = d()) && (c.active && a.activeurl_bitmapdata ? b(a.activeurl_bitmapdata) : a.url_bitmapdata && b(a.url_bitmapdata)), a = n.onout, null != a && "" != a && g.call(a, n)) } var c = this; c.spotstyle =
            "default"; c.url = null; c.lat = Number.NaN; c.lng = Number.NaN; c.heading = 0; c.active = !1; c.needdom = !1; c.zoomwithmap = !1; c.zoombaselevel = 10; c.needupdate = !1; var n = null, m = 0, r = null, q = null, u = null, p = null, v = null, n = a; c.xmlobject = n; c.update = function (a) { void 0 === a && (a = 0); c.needupdate = !0; m |= a; S = !0 }; c.processupdate = function () {
                if (null != n) {
                    if (2 == (m & 2)) {
                        var a = !1; if (h) {
                            var e = !isNaN(c.lat) && !isNaN(c.lng), g = e ? new google.maps.LatLng(c.lat, c.lng) : new google.maps.LatLng(0, 0); null == p && e ? (a = d(), a = c.active ? a.activeurl_bitmapdata : a.url_bitmapdata,
                                p = null, v = b(a), v.position = g, p = new google.maps.Marker(v), c.zoomwithmap && (Math.pow(2, t), Math.pow(2, c.zoombaselevel)), google.maps.event.addListener(p, "click", f), google.maps.event.addListener(p, "mouseover", k), google.maps.event.addListener(p, "mouseout", l), a = !0) : p && e && (p.setPosition(g), a = !0)
                        } a && (m &= -3)
                    } 1 == (m & 1) && c.updateimage() && (m &= -2); 0 == m && (c.needupdate = !1)
                }
            }; c.updateimage = function () {
                if ("" == c.url || "null" == c.url) c.url = null; if (c.url) c.url != r && (r = c.url, O(c.url, function (a) { b(a) })); else {
                    r = null; var a = d(); a &&
                        (a = c.active ? a.activeurl_bitmapdata : a.url_bitmapdata, q != a && b(a))
                } return !0
            }; c.scalespot = function (a) { b(q, a) }; c.try_dom_access = function () { if (p) if (p._krpimg) { var a = d(); b(c.active ? a.activeurl_bitmapdata : a.url_bitmapdata); c.needdom = !1 } else S = c.needdom = !0 }; c.destroy = function () { p && h && p.setMap(null); q = n = v = p = null }; n.event_out = l; (function () {
                a.registerattribute("spotstyle", c.spotstyle, function (a) { if (null == a || "" == a) a = "default"; c.spotstyle = String(a).toLowerCase(); c.update(1) }, function () { return c.spotstyle }); a.registerattribute("url",
                    c.url, function (a) { a != c.url && (c.url = String(a), c.update(1)) }, function () { return c.url }); a.registerattribute("lat", c.lat, function (a) { c.lat = Number(a); c.update(2) }, function () { return c.lat }); a.registerattribute("lng", c.lng, function (a) { c.lng = Number(a); c.update(2) }, function () { return c.lng }); a.registerattribute("heading", c.heading, function (a) { c.heading = Number(a) }, function () { return c.heading }); a.registerattribute("active", c.active, function (a) { c.active = w(a); c.update(1) }, function () { return c.active }); a.registerattribute("zoomwithmap",
                        c.zoomwithmap, function (a) { c.zoomwithmap = w(a); c.update(2) }, function () { return c.zoomwithmap }); a.registerattribute("zoombaselevel", c.zoombaselevel, function (a) { c.zoombaselevel = Number(a); c.update(2) }, function () { return c.zoombaselevel }); a.registerattribute("onover", null); a.registerattribute("onhover", null); a.registerattribute("onout", null); a.registerattribute("onclick", null); a.activatespot = function () { V(n.name) }; a.pantospot = function () { pa(n.name) }
            })()
    } var g = null, e = null, Q = null, q = null, G = null, W = 1, x = null, k = null,
        h = null, ha = !1, Z = 0, S = !1, K = !1, v = !1, C = !1, I = 0, J = 0, l = null, B = null, F, xa, u, p, t, M, N, ca, ba, E; this.registerplugin = function (a, d, b) {
            g = a; e = b; Q = d; if ("1.20" > g.version || "2019-09-01" > g.build) g.trace(3, "Googlemaps Plugin - too old krpano version (min. version 1.20)"); else if (q = g.device, q.androidstock && (W = q.pixelratio), e.registerattribute("key", null), e.registerattribute("maptype", "satellite", function (a) { ma(a) }, function () { return F }), e.registerattribute("maptypes", "normal|satellite|hybrid|terrain", function (a) { xa = String(a) },
                function () { return xa }), e.registerattribute("lat", 0, function (a) { u = Number(a); aa(1) }, function () { return u }), e.registerattribute("lng", 0, function (a) { p = Number(a); aa(1) }, function () { return p }), e.registerattribute("zoom", 1, function (a) { t = Number(a); aa(2) }, function () { return t }), e.registerattribute("tilt", 0, function (a) { M = Number(a); la() }, function () { return M }), e.registerattribute("heading", 0, function (a) { N = Number(a); la() }, function () { return N }), e.registerattribute("controls", "zoom|maptype", function (a) { ca = a; h && h.setOptions(Y({})) },
                    function () { return ca }), e.registerattribute("poi", !1, function (a) { ba = w(a); h && h.setOptions(Y({})) }, function () { return ba }), e.registerattribute("mapsapi", ""), e.registerattribute("activespotenabled", !1, function (a) { E = w(a) }, function () { return E }), e.registerattribute("bgcolor", 0), e.registerattribute("bgalpha", 0), e.registerattribute("onmapready", null), e.registerattribute("onmapmoved", null), e.registerattribute("onmapzoomed", null), e.registerattribute("onmaptypechanged", null), e.setzoom = Da, e.setcenter = na, e.setmaptype =
                ma, e.addspot = Oa, e.addstylespot = Pa, e.addimagespot = Qa, e.removespot = U, e.removeallspots = ra, e.activatespot = V, e.addspotstyle = Na, e.panto = Ga, e.pantospot = pa, e.panby = Ka, e.flyto = Ja, e.flytospot = Ia, e.cancelflyto = Ha, e.zoomin = Ea, e.zoomout = Fa, e.zoomtospotsextent = oa, e.resetspots = ra, e.updatespots = ga, e.updatecontrols = function () { }, La(), Ma(), 0 == g.haveLicense("maps") && setTimeout(Ca, 100), e.registercontentsize(400, 300), window.google && window.google.maps) setTimeout(X, 10); else if (window._krpano_gmap_loadedcallbacks_) window._krpano_gmap_loadedcallbacks_.push(X);
            else {
                window._krpano_gmap_loadedcallbacks_ = []; x = "_krpano_gmap_cb_"; for (a = 0; 16 > a; a++)x += String.fromCharCode(65 + 32 * Math.round(Math.random()) + Math.floor(25 * Math.random())); window[x] = X; (a = e.mapsapi) && "" != a || (a = 0 == ("" + window.location.href).toLowerCase().indexOf("https:") ? "https://maps.google.com" : "http://maps.google.com"); d = []; e.apiversion && d.push("v=" + e.apiversion); e.key && d.push("key=" + e.key); e.language && d.push("language=" + e.language); e.region && d.push("region=" + e.region); d.push("signed_in=false"); d.push("callback=" +
                    x); b = document.createElement("script"); b.type = "text/javascript"; b.async = !0; b.src = a + "/maps/api/js?" + d.join("&"); document.body.appendChild(b)
            }
        }; this.unloadplugin = function () { null != G && (clearInterval(G), G = null); e && (e.gmAPI && (e.gmAPI.gmaps = null, e.gmAPI.map = null, e.gmAPI.dom = null), e.gmAPI = null); q = g = e = null }; this.onresize = function (a, d) { h && (e.sprite && (k.style.width = e.sprite.style.width, k.style.height = e.sprite.style.height), 0 == v && (v = !0, I = u, J = p), google.maps.event.trigger(h, "resize")); return !0 }; this.onvisibilitychanged =
            function (a) { return h ? (1 == a ? (e.poschanged = !0, e.sprite.style.display = "", e.sprite.appendChild(k), k.style.left = "0", k.style.pointerEvents = "auto", 0 == v && (v = !0, I = u, J = p), google.maps.event.trigger(h, "resize")) : (e.sprite.style.display = "none", k.style.left = "-10000px", k.style.pointerEvents = "none", g.display.viewerlayer.appendChild(k)), !0) : !1 }; var R = [0, 0], va = {
                src: "data:image/png;base64,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",
                naturalWidth: 64, naturalHeight: 64, naturalScale: .5
            }, wa = {
                src: "data:image/png;base64,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",
                naturalWidth: 64, naturalHeight: 64, naturalScale: .5
            }
};

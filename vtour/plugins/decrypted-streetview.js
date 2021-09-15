window.krpanoPluginsStuff = {
        streetview: {}
};

var streetviewPlugin = {};  

streetviewPlugin.DataProvider = {
    
        // relative url where all files are located
        // (for krpano embeding - index.html in another folder)
        firstXML: undefined, // to be defined in KrpanoPlugin.js
    
    
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // !!! urls are relative to embedpano.js path !!!
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        _actions: {
            timeline: {
                sectionName: 'timeline',
            actionNames: {
                    getDates: 'dates'
            },
            url: 'plugins/streetview/ajax/timeline.php'
        }
    },

    _encodeQueryData: function (data) {
            var ret = [],
            newName;
        for (var name in data)
            if (data.hasOwnProperty(name)) {
                    newName = name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
                ret.push(encodeURIComponent(newName) + '=' + encodeURIComponent(data[name]));
            }
        return ret.join('&');
    },

    _getData: function (callback, sectionName, actionName, params) {
    
        var acts = this._actions[sectionName],
            section = acts.sectionName,
            action = acts.actionNames[actionName],
            url = this.firstXML + acts.url;


        var xmlhttp = new XMLHttpRequest(),
            _params = {
                    section: section,
                action: action
            };

        streetviewPlugin.Utils.extend(_params, params);

        url += _params.noParams ? '' : '?' + this._encodeQueryData(_params);


        // if we have a function that handles requests to php files
        if (typeof krpanoXhrCallback == 'function') {
                krpanoXhrCallback(url, callback);
            return;
        }


        xmlhttp.open('GET', url, true);

        xmlhttp.onreadystatechange = function () {
                if (!(xmlhttp.readyState == 4 && (xmlhttp.status == 200 || xmlhttp.responseText))) {
                    return;
            }

            var data =
                xmlhttp.responseText &&
                (xmlhttp.getResponseHeader('Content-Type').indexOf('xml') > -1
                        ? xmlhttp.responseText
                        : JSON.parse(xmlhttp.responseText)
                );

            if (callback && data && !data.error) {
                    callback(data);
            }
        };

        xmlhttp.setRequestHeader('Content-Type', 'application/json');
        xmlhttp.send(null);
    },

    getDates: function (callback, params) {
            this._getData(callback, 'timeline', 'getDates', params);
    }

};



/*window.krpanoXhrCallback = function (url, callback) {
        var regKGen = /kgen.php/;
    var regLeafletmap = /mapspots.php/;
    var regRNearSpot = /=nearest_spot/;
    var regRSpot = /=spot/;
    var regRSubdiv = /=subdivision/;
    var regRDiv = /=division/;
    var regRSub = /=subregion/;
    var regSVTimeline = /timeline.php/;


    if (regSVTimeline.test(url)) {
            var txt = '[{'id':'1','value':'15.12.2015'},{'id':'2','value':'21.12.2015'}]';
        callback(JSON.parse(txt));
        return;
    }

    if (regKGen.test(url)) {
            var txt = '<krpano>            <mapspot id='709' pano='Camera-20150507-051250-000000544' title='Camera-20150507-051250-000000544' lat='55.11723201' lng='24.25772949' heading='329'/>            <preview url='%FIRSTXML%/%$sv.tilespath%/Camera-20150507-051250-000000544/preview.jpg' />            <image type='CUBE' multires='true' tilesize='512' progressive='true'>            <level tiledimagewidth='2048' tiledimageheight='2048'>                <cube url='%FIRSTXML%/%$sv.tilespath%/Camera-20150507-051250-000000544/l3_%s_%v_%h.jpg' />            </level>            <level tiledimagewidth='1024' tiledimageheight='1024'>            <cube url='%FIRSTXML%/%$sv.tilespath%/Camera-20150507-051250-000000544/l2_%s_%v_%h.jpg' />            </level>            <level tiledimagewidth='512' tiledimageheight='512'>                <cube url='%FIRSTXML%/%$sv.tilespath%/Camera-20150507-051250-000000544/l1_%s_%v_%h.jpg' />            </level>            <mobile>            <cube url='%FIRSTXML%/%$sv.tilespath%/Camera-20150507-051250-000000544/mobile_%s.jpg' />            </mobile>            </image>                <hotspot name='spot3' style='streetview_arrow|streetview_arrow_others2' direction='-180' linkedpano='Camera-20150507-051250-000000542' description='' imagetype='normal'/>                <hotspot name='spot4' style='streetview_arrow|streetview_arrow_others2' direction='-1' linkedpano='Camera-20150507-051250-000000546' description='' imagetype='normal'/>                <hotspot name='spot1' style='streetview_arrow' direction='-180' linkedpano='Camera-20150507-051250-000000543' description='' imagetype='sequence'/>                <hotspot name='spot2' style='streetview_arrow' direction='-1' linkedpano='Camera-20150507-051250-000000545' description='' imagetype='sequence'/>            </krpano>';
        callback(txt);
        //
        return;
    }

    if (regLeafletmap.test(url)) {
            var txt = '[{'id':'673','pano':'Camera-20150507-051250-000000508','latitude':'55.11563182','longitude':'24.25911348','heading':'338','batch':'1','dist':10893792.057593},{'id':'677','pano':'Camera-20150507-051250-000000512','latitude':'55.11581137','longitude':'24.25898481','heading':'337','batch':'1','dist':15.811914841699},{'id':'680','pano':'Camera-20150507-051250-000000515','latitude':'55.11594745','longitude':'24.25888210','heading':'336','batch':'1','dist':12.077638676223},{'id':'683','pano':'Camera-20150507-051250-000000518','latitude':'55.11608515','longitude':'24.25877575','heading':'336','batch':'1','dist':12.266537989346},{'id':'687','pano':'Camera-20150507-051250-000000522','latitude':'55.11625023','longitude':'24.25864298','heading':'335','batch':'1','dist':14.806646993924},{'id':'691','pano':'Camera-20150507-051250-000000526','latitude':'55.11641733','longitude':'24.25850195','heading':'334','batch':'1','dist':15.119713432317},{'id':'695','pano':'Camera-20150507-051250-000000530','latitude':'55.11663016','longitude':'24.25831476','heading':'332','batch':'1','dist':19.413416610579},{'id':'699','pano':'Camera-20150507-051250-000000534','latitude':'55.11680319','longitude':'24.25815519','heading':'332','batch':'1','dist':15.940721868279},{'id':'702','pano':'Camera-20150507-051250-000000537','latitude':'55.11693372','longitude':'24.25803000','heading':'331','batch':'1','dist':12.131645220345},{'id':'705','pano':'Camera-20150507-051250-000000540','latitude':'55.11706527','longitude':'24.25790012','heading':'330','batch':'1','dist':12.310598401554},{'id':'708','pano':'Camera-20150507-051250-000000543','latitude':'55.11719282','longitude':'24.25777012','heading':'329','batch':'1','dist':12.030677835886},{'id':'709','pano':'Camera-20150507-051250-000000544','latitude':'55.11723201','longitude':'24.25772949','heading':'329','batch':'1','dist':3.7126877836778},{'id':'712','pano':'Camera-20150507-051250-000000547','latitude':'55.11734984','longitude':'24.25760387','heading':'328','batch':'1','dist':14.958289759847},{'id':'716','pano':'Camera-20150507-051250-000000551','latitude':'55.11750863','longitude':'24.25742869','heading':'327','batch':'1','dist':15.299857307983},{'id':'720','pano':'Camera-20150507-051250-000000555','latitude':'55.11772064','longitude':'24.25718535','heading':'326','batch':'1','dist':20.666090049071},{'id':'724','pano':'Camera-20150507-051250-000000559','latitude':'55.11788277','longitude':'24.25699079','heading':'325','batch':'1','dist':16.024024200121},{'id':'727','pano':'Camera-20150507-051250-000000562','latitude':'55.11800515','longitude':'24.25683941','heading':'324','batch':'1','dist':12.215840425891},{'id':'730','pano':'Camera-20150507-051250-000000565','latitude':'55.11812819','longitude':'24.25668357','heading':'323','batch':'1','dist':12.380586261999},{'id':'733','pano':'Camera-20150507-051250-000000568','latitude':'55.11825111','longitude':'24.25652364','heading':'323','batch':'1','dist':12.485531915986},{'id':'736','pano':'Camera-20150507-051250-000000571','latitude':'55.11837381','longitude':'24.25636009','heading':'322','batch':'1','dist':12.572730028931},{'id':'739','pano':'Camera-20150507-051250-000000574','latitude':'55.11849562','longitude':'24.25619316','heading':'321','batch':'1','dist':12.611702880336},{'id':'742','pano':'Camera-20150507-051250-000000577','latitude':'55.11861610','longitude':'24.25602310','heading':'320','batch':'1','dist':12.617705990579},{'id':'745','pano':'Camera-20150507-051250-000000580','latitude':'55.11873571','longitude':'24.25584927','heading':'320','batch':'1','dist':12.674214114736}]';
        callback(JSON.parse(txt));
        return;
    }

    if (regRNearSpot.test(url)) {
            var txt = '{'spotID':'Camera-20150507-051250-000001758','heading':'322','lat':'55.15668534','lng':'24.17387977','alt':'97.8670','division':'LATVIJA','subregion':'LATVIJA','subdivision':'Vilnius-\\u0160iauliai-Klaip\\u0117da 2','milepost':'107.00000000','distance':'0'}';
        callback(JSON.parse(txt));
        return;
    }

    if (regRSubdiv.test(url)) {
            var txt = '['Vilnius-\\u0160iauliai-Klaip\\u0117da','Vilnius-\\u0160iauliai-Klaip\\u0117da 2']';
        callback(JSON.parse(txt));
        return;
    }

    if (regRSpot.test(url)) {
            var txt = '{'spotID':'Camera-20150507-051250-000001758','heading':'322','lat':'55.15668534','lng':'24.17387977','alt':'97.8670','division':'LATVIJA','subregion':'LATVIJA','subdivision':'Vilnius-\\u0160iauliai-Klaip\\u0117da 2','milepost':'107.00000000','distance':'0'}';
        callback(JSON.parse(txt));
        return;
    }

    if (regRDiv.test(url)) {
            var txt = '['LATVIJA']';
        callback(JSON.parse(txt));
        return;
    }

    if (regRSub.test(url)) {
            var txt = '['LATVIJA']';
        callback(JSON.parse(txt));
        return;
    }

    callback();
};*/

var krpanoplugin = function()
{
        var local = this;   // save the 'this' pointer from the current plugin object

    var krpano = null;  // the krpano and plugin interface objects
    var plugin = null;

    var plugincanvas = null;        // optionally - a canvas object for graphic content
    var plugincanvascontext = null;

    // registerplugin - startup point for the plugin (required)
    // - krpanointerface = krpano interface object
    // - pluginpath = string with the krpano path of the plugin (e.g. 'plugin[pluginname]')
    // - pluginobject = the plugin object itself (the same as: pluginobject = krpano.get(pluginpath) )
    local.registerplugin = function(krpanointerface, pluginpath, pluginobject)
    {
            krpano = /*window.krpano = */ krpanointerface;
        plugin = /*window.plugin = */ pluginobject;

        streetviewPlugin.changeLayerOrder();

        // add plugin graphic content (optionally)
        var havegraphiccontent = plugin.show_timeline == 'true';
        if (havegraphiccontent) // this code here is only an example for how-to add addtional graphical content!
        {
                // register the size of the plugin content
            // e.g. to set the plugin source size to 256x256 pixels:
            //plugin.registercontentsize(parseInt(plugin.width), parseInt(plugin.height));

            plugin.visible = true;

            plugincanvas = document.createElement('select');
            plugincanvas.setAttribute('id', 'timeline');
            plugincanvas.style.width  = '100%';  // automatic scale with parent
            plugincanvas.style.height = '100%';

            plugincanvas.onselectstart = function() { return false; };  // fix select mouse cursor

            // the plugin 'sprite' variable holds the visible html element
            // - it can be used to add elements or events
            plugin.sprite.appendChild(plugincanvas);

            streetviewPlugin.DataProvider.firstXML = krpano.parsePath('%FIRSTXML%');

            streetviewPlugin.init(plugincanvas, krpano, plugin);

        }
    };

    // unloadplugin - end point for the plugin (optionally)
    // - will be called from krpano when the plugin will be removed
    // - everything that was added by the plugin (objects,intervals,...) should be removed here
    local.unloadplugin = function()
    {
            plugin = null;
        krpano = null;
    };
};

streetviewPlugin.init = function (container, krpano, plugin) {
    
    var parseDates = function (data) {
                var tmpl = '<option value='+$1+'>$2</option>',
                html = '',
                selectedIndex;

            for (var i = 0; i < data.length; i++) {
                    var date = data[i];
                if (date.id == +plugin.timeline) {
                        selectedIndex = i;
                }
                html += tmpl.replace('$1', date.id).replace('$2', date.value);
            }

            var timelineElem = document.getElementById('timeline');
            timelineElem.innerHTML = html;
            timelineElem.selectedIndex = selectedIndex;

            // set arrows enabled
            setArrowEnabled();

            // enlarge timeline control if needed (labels in select element are wider)
            container.style.width = '';
            var widthDelta = parseInt(container.offsetWidth) - plugin.width;
            if (widthDelta > 0) {
                    var label = krpano.layer.getItem('streetview_tm_label');
                var arrowLeft = krpano.layer.getItem('streetview_tm_arrow_left');
                label.x = +label.x + widthDelta;
                arrowLeft.x = +arrowLeft.x + widthDelta;
                plugin.x = +plugin.x + widthDelta;
            } else {
                    container.style.width = '100%';
            }
        },
        setArrowEnabled = function () {
                var that = container;
            if (that.selectedIndex == 0) {
                    krpano.set('layer[streetview_tm_arrow_left].enabled', false);
                if (krpano.skin_lockglow == 'streetview_tm_arrow_left') {
                        krpano.set('layer[streetview_tm_arrow_left].hovering', false); // to delete skin_glow in onup event
                }
            } else {
                    krpano.set('layer[streetview_tm_arrow_left].enabled', true);
            }

            if (that.selectedIndex == that.options.length - 1) {
                    krpano.set('layer[streetview_tm_arrow_right].enabled', false);
                if (krpano.skin_lockglow == 'streetview_tm_arrow_right') {
                        krpano.set('layer[streetview_tm_arrow_right].hovering', false); // to delete skin_glow in onup event
                }
            } else {
                    krpano.set('layer[streetview_tm_arrow_right].enabled', true);
            }
        },
        setPrevBatch = function () {
                var that = container;
            if (that.selectedIndex == 0) return;

            that.selectedIndex = that.selectedIndex - 1;

            that.onchange();
        },
        setNextBatch = function () {
                var that = container;
            if (that.selectedIndex == that.options.length - 1) return;

            that.selectedIndex = that.selectedIndex + 1;

            that.onchange();
        };


    // fill timeline control with values
    streetviewPlugin.DataProvider.getDates(parseDates);

    // bind actions for batch is changed
    container.onchange = function () {
            setArrowEnabled();

        var newBatch = this.options[this.selectedIndex].value;
        krpano.set('plugin[streetview].timeline', newBatch);
        krpano.call('streetview_gotopano(null, null, true);');
    };

    // bind actions for arrows
    krpanoPluginsStuff.streetview.setPrevBatch = setPrevBatch;
    krpanoPluginsStuff.streetview.setNextBatch = setNextBatch;


    // delete translateZ CSS option in FF
    // it all must be in setTimeout function
    setTimeout(function () {
            // remove translateZ from transform CSS option of plugin container
        // in order nice select->option rendering if FF
        if (krpano.device.firefox) {
                var tempContainer = container;
            while ((tempContainer = tempContainer.parentNode) && tempContainer.style) {
                    tempContainer.style.transform = tempContainer.style.transform.replace(/translatez[\\(\\)\\S\\+0-9a-z]+/i, '');
            }
        }
    }, 1000);

};


// change skin_control_bar and skin_scroll_window z-index
// in order streetview arrows are above them
streetviewPlugin.changeLayerOrder = function () {
        try {
            var layers = document.getElementById('krpanoSWFObject').children[0].children[1].children,
            arr = [layers[0], layers[1], layers[2]];

        for (var i = 0; i < arr.length; i++) {
    
            var layer = arr[i],
                zIndex = layer.style.zIndex + '',
                display = layer.style.display;

            if (zIndex && display != 'none') {
                    layer.style.zIndex = 1900 + parseInt(zIndex.slice(2));
            }

        }
    }
    catch (e) {
    
        }
};

streetviewPlugin.Utils = {
        extend: function (dest) {
            var i, j, len, src;

        for (j = 1, len = arguments.length; j < len; j++) {
                src = arguments[j];
            for (i in src) {
                    dest[i] = src[i];
            }
        }
        return dest;
    }
};
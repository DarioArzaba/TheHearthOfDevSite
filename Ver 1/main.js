/*Combine en este orden: Dropotron, Scrolly, OnVisible, Skel y Util.*/
!function(a){a.fn.disableSelection_dropotron=function(){return a(this).css("user-select","none").css("-khtml-user-select","none").css("-moz-user-select","none").css("-o-user-select","none").css("-webkit-user-select","none")},a.fn.dropotron=function(b){if(0==this.length)return a(this);if(this.length>1)for(var c=0;c<this.length;c++)a(this[c]).dropotron(b);return a.dropotron(a.extend({selectorParent:a(this)},b))},a.dropotron=function(b){var c=a.extend({selectorParent:null,baseZIndex:1e3,menuClass:"dropotron",expandMode:"hover",hoverDelay:150,hideDelay:250,openerClass:"opener",openerActiveClass:"active",submenuClassPrefix:"level-",mode:"fade",speed:"fast",easing:"swing",alignment:"left",offsetX:0,offsetY:0,globalOffsetY:0,IEOffsetX:0,IEOffsetY:0,noOpenerFade:!0,detach:!0,cloneOnDetach:!0},b),d=c.selectorParent,e=d.find("ul"),f=a("body"),g=a("body,html"),h=a(window),i=!1,j=null,k=null;d.on("doCollapseAll",function(){e.trigger("doCollapse")}),e.each(function(){var b=a(this),d=b.parent();c.hideDelay>0&&b.add(d).on("mouseleave",function(a){window.clearTimeout(k),k=window.setTimeout(function(){b.trigger("doCollapse")},c.hideDelay)}),b.disableSelection_dropotron().hide().addClass(c.menuClass).css("position","absolute").on("mouseenter",function(a){window.clearTimeout(k)}).on("doExpand",function(){if(b.is(":visible"))return!1;window.clearTimeout(k),e.each(function(){var b=a(this);a.contains(b.get(0),d.get(0))||b.trigger("doCollapse")});var f,g,j,l,m=d.offset(),n=d.position(),o=(d.parent().position(),d.outerWidth()),p=b.outerWidth(),q=b.css("z-index")==c.baseZIndex;if(q){switch(f=c.detach?m:n,l=f.top+d.outerHeight()+c.globalOffsetY,g=c.alignment,b.removeClass("left").removeClass("right").removeClass("center"),c.alignment){case"right":j=f.left-p+o,0>j&&(j=f.left,g="left");break;case"center":j=f.left-Math.floor((p-o)/2),0>j?(j=f.left,g="left"):j+p>h.width()&&(j=f.left-p+o,g="right");break;case"left":default:j=f.left,j+p>h.width()&&(j=f.left-p+o,g="right")}b.addClass(g)}else switch("relative"==d.css("position")||"absolute"==d.css("position")?(l=c.offsetY,j=-1*n.left):(l=n.top+c.offsetY,j=0),c.alignment){case"right":j+=-1*d.parent().outerWidth()+c.offsetX;break;case"center":case"left":default:j+=d.parent().outerWidth()+c.offsetX}navigator.userAgent.match(/MSIE ([0-9]+)\./)&&RegExp.$1<8&&(j+=c.IEOffsetX,l+=c.IEOffsetY),b.css("left",j+"px").css("top",l+"px").css("opacity","0.01").show();var r=!1;switch(j="relative"==d.css("position")||"absolute"==d.css("position")?-1*n.left:0,b.offset().left<0?(j+=d.parent().outerWidth()-c.offsetX,r=!0):b.offset().left+p>h.width()&&(j+=-1*d.parent().outerWidth()-c.offsetX,r=!0),r&&b.css("left",j+"px"),b.hide().css("opacity","1"),c.mode){case"zoom":i=!0,d.addClass(c.openerActiveClass),b.animate({width:"toggle",height:"toggle"},c.speed,c.easing,function(){i=!1});break;case"slide":i=!0,d.addClass(c.openerActiveClass),b.animate({height:"toggle"},c.speed,c.easing,function(){i=!1});break;case"fade":if(i=!0,q&&!c.noOpenerFade){var r;r="slow"==c.speed?80:"fast"==c.speed?40:Math.floor(c.speed/2),d.fadeTo(r,.01,function(){d.addClass(c.openerActiveClass),d.fadeTo(c.speed,1),b.fadeIn(c.speed,function(){i=!1})})}else d.addClass(c.openerActiveClass),d.fadeTo(c.speed,1),b.fadeIn(c.speed,function(){i=!1});break;case"instant":default:d.addClass(c.openerActiveClass),b.show()}return!1}).on("doCollapse",function(){return!!b.is(":visible")&&(b.hide(),d.removeClass(c.openerActiveClass),b.find("."+c.openerActiveClass).removeClass(c.openerActiveClass),b.find("ul").hide(),!1)}).on("doToggle",function(a){return b.is(":visible")?b.trigger("doCollapse"):b.trigger("doExpand"),!1}),d.disableSelection_dropotron().addClass("opener").css("cursor","pointer").on("click touchend",function(a){i||(a.preventDefault(),a.stopPropagation(),b.trigger("doToggle"))}),"hover"==c.expandMode&&d.hover(function(a){i||(j=window.setTimeout(function(){b.trigger("doExpand")},c.hoverDelay))},function(a){window.clearTimeout(j)})}),e.find("a").css("display","block").on("click touchend",function(b){i||a(this).attr("href").length<1&&b.preventDefault()}),d.find("li").css("white-space","nowrap").each(function(){var b=a(this),c=b.children("a"),e=b.children("ul"),f=c.attr("href");c.on("click touchend",function(a){0==f.length||"#"==f?a.preventDefault():a.stopPropagation()}),c.length>0&&0==e.length&&b.on("click touchend",function(a){i||(d.trigger("doCollapseAll"),a.stopPropagation())})}),d.children("li").each(function(){var b,d=a(this),e=d.children("ul");if(e.length>0){c.detach&&(c.cloneOnDetach&&(b=e.clone(),b.attr("class","").hide().appendTo(e.parent())),e.detach().appendTo(f));for(var g=c.baseZIndex,h=1,i=e;i.length>0;h++)i.css("z-index",g++),c.submenuClassPrefix&&i.addClass(c.submenuClassPrefix+(g-1-c.baseZIndex)),i=i.find("> li > ul")}}),h.on("scroll",function(){d.trigger("doCollapseAll")}).on("keypress",function(a){i||27!=a.keyCode||(a.preventDefault(),d.trigger("doCollapseAll"))}),g.on("click touchend",function(){i||d.trigger("doCollapseAll")})}}(jQuery),function(a){function b(b,g){var h,i,j;if(0==(h=a(b))[c])return d;switch(i=h[f]()[e],g.anchor){case"middle":j=i-(a(window).height()-h.outerHeight())/2;break;default:case e:j=Math.max(i,0)}return j-="function"==typeof g[f]?g[f]():g[f]}var c="length",d=null,e="top",f="offset",g="click.scrolly";a(window);a.fn.scrolly=function(f){var h,i,j,k,l=a(this);if(0==this[c])return l;if(this[c]>1){for(h=0;h<this[c];h++)a(this[h]).scrolly(f);return l}return k=d,j=l.attr("href"),"#"!=j.charAt(0)||j[c]<2?l:(i=jQuery.extend({anchor:e,easing:"swing",offset:0,parent:a("body,html"),pollOnce:!1,speed:1e3},f),i.pollOnce&&(k=b(j,i)),l.off(g).on(g,function(a){var c=k!==d?k:b(j,i);c!==d&&(a.preventDefault(),i.parent.stop().animate({scrollTop:c},i.speed,i.easing))}),void 0)}}(jQuery),function(){var a,b=jQuery(window),c=[],d=100,e=150,f=function(){var f,g,a=c.length,d=b.scrollTop()+b.height()-e;for(f=0;f<a;f++)g=c[f],!g.state&&d>g.o.offset().top&&(g.state=!0,g.fn())};b.load(function(){b.on("scroll resize",function(){window.clearTimeout(a),a=window.setTimeout(function(){f()},d)}).trigger("resize")}),jQuery.fn.onVisible=function(a,b){c.push({o:jQuery(this),fn:a,pad:b?b:e,state:!1})}}();var skel=function(){"use strict";var a={breakpointIds:null,events:{},isInit:!1,obj:{attachments:{},breakpoints:{},head:null,states:{}},sd:"/",state:null,stateHandlers:{},stateId:"",vars:{},DOMReady:null,indexOf:null,isArray:null,iterate:null,matchesMedia:null,extend:function(b,c){a.iterate(c,function(d){a.isArray(c[d])?(a.isArray(b[d])||(b[d]=[]),a.extend(b[d],c[d])):"object"==typeof c[d]?("object"!=typeof b[d]&&(b[d]={}),a.extend(b[d],c[d])):b[d]=c[d]})},newStyle:function(a){var b=document.createElement("style");return b.type="text/css",b.innerHTML=a,b},_canUse:null,canUse:function(b){a._canUse||(a._canUse=document.createElement("div"));var c=a._canUse.style,d=b.charAt(0).toUpperCase()+b.slice(1);return b in c||"Moz"+d in c||"Webkit"+d in c||"O"+d in c||"ms"+d in c},on:function(b,c){var d=b.split(/[\s]+/);return a.iterate(d,function(b){var e=d[b];if(a.isInit){if("init"==e)return void c();if("change"==e)c();else{var f=e.charAt(0);if("+"==f||"!"==f){var g=e.substring(1);if(g in a.obj.breakpoints)if("+"==f&&a.obj.breakpoints[g].active)c();else if("!"==f&&!a.obj.breakpoints[g].active)return void c()}}}a.events[e]||(a.events[e]=[]),a.events[e].push(c)}),a},trigger:function(b){return a.events[b]&&0!=a.events[b].length?(a.iterate(a.events[b],function(c){a.events[b][c]()}),a):void 0},breakpoint:function(b){return a.obj.breakpoints[b]},breakpoints:function(b){function c(a,b){this.name=this.id=a,this.media=b,this.active=!1,this.wasActive=!1}return c.prototype.matches=function(){return a.matchesMedia(this.media)},c.prototype.sync=function(){this.wasActive=this.active,this.active=this.matches()},a.iterate(b,function(d){a.obj.breakpoints[d]=new c(d,b[d])}),window.setTimeout(function(){a.poll()},0),a},addStateHandler:function(b,c){a.stateHandlers[b]=c},callStateHandler:function(b){var c=a.stateHandlers[b]();a.iterate(c,function(b){a.state.attachments.push(c[b])})},changeState:function(b){a.iterate(a.obj.breakpoints,function(b){a.obj.breakpoints[b].sync()}),a.vars.lastStateId=a.stateId,a.stateId=b,a.breakpointIds=a.stateId===a.sd?[]:a.stateId.substring(1).split(a.sd),a.obj.states[a.stateId]?a.state=a.obj.states[a.stateId]:(a.obj.states[a.stateId]={attachments:[]},a.state=a.obj.states[a.stateId],a.iterate(a.stateHandlers,a.callStateHandler)),a.detachAll(a.state.attachments),a.attachAll(a.state.attachments),a.vars.stateId=a.stateId,a.vars.state=a.state,a.trigger("change"),a.iterate(a.obj.breakpoints,function(b){a.obj.breakpoints[b].active?a.obj.breakpoints[b].wasActive||a.trigger("+"+b):a.obj.breakpoints[b].wasActive&&a.trigger("-"+b)})},generateStateConfig:function(b,c){var d={};return a.extend(d,b),a.iterate(a.breakpointIds,function(b){a.extend(d,c[a.breakpointIds[b]])}),d},getStateId:function(){var b="";return a.iterate(a.obj.breakpoints,function(c){var d=a.obj.breakpoints[c];d.matches()&&(b+=a.sd+d.id)}),b},poll:function(){var b="";b=a.getStateId(),""===b&&(b=a.sd),b!==a.stateId&&a.changeState(b)},_attach:null,attach:function(b){var c=a.obj.head,d=b.element;return(!d.parentNode||!d.parentNode.tagName)&&(a._attach||(a._attach=c.firstChild),c.insertBefore(d,a._attach.nextSibling),b.permanent&&(a._attach=d),!0)},attachAll:function(b){var c=[];a.iterate(b,function(a){c[b[a].priority]||(c[b[a].priority]=[]),c[b[a].priority].push(b[a])}),c.reverse(),a.iterate(c,function(b){a.iterate(c[b],function(d){a.attach(c[b][d])})})},detach:function(a){var b=a.element;return!(a.permanent||!b.parentNode||b.parentNode&&!b.parentNode.tagName)&&(b.parentNode.removeChild(b),!0)},detachAll:function(b){var c={};a.iterate(b,function(a){c[b[a].id]=!0}),a.iterate(a.obj.attachments,function(b){b in c||a.detach(a.obj.attachments[b])})},attachment:function(b){return b in a.obj.attachments?a.obj.attachments[b]:null},newAttachment:function(b,c,d,e){return a.obj.attachments[b]={id:b,element:c,priority:d,permanent:e}},init:function(){a.initMethods(),a.initVars(),a.initEvents(),a.obj.head=document.getElementsByTagName("head")[0],a.isInit=!0,a.trigger("init")},initEvents:function(){a.on("resize",function(){a.poll()}),a.on("orientationChange",function(){a.poll()}),a.DOMReady(function(){a.trigger("ready")}),window.onload&&a.on("load",window.onload),window.onload=function(){a.trigger("load")},window.onresize&&a.on("resize",window.onresize),window.onresize=function(){a.trigger("resize")},window.onorientationchange&&a.on("orientationChange",window.onorientationchange),window.onorientationchange=function(){a.trigger("orientationChange")}},initMethods:function(){document.addEventListener?!function(b,c){a.DOMReady=c()}("domready",function(){function a(a){for(f=1;a=c.shift();)a()}var b,c=[],d=document,e="DOMContentLoaded",f=/^loaded|^c/.test(d.readyState);return d.addEventListener(e,b=function(){d.removeEventListener(e,b),a()}),function(a){f?a():c.push(a)}}):!function(b,c){a.DOMReady=c()}("domready",function(a){function b(a){for(n=1;a=d.shift();)a()}var c,d=[],e=!1,f=document,g=f.documentElement,h=g.doScroll,i="DOMContentLoaded",j="addEventListener",k="onreadystatechange",l="readyState",m=h?/^loaded|^c/:/^loaded|c/,n=m.test(f[l]);return f[j]&&f[j](i,c=function(){f.removeEventListener(i,c,e),b()},e),h&&f.attachEvent(k,c=function(){/^c/.test(f[l])&&(f.detachEvent(k,c),b())}),a=h?function(b){self!=top?n?b():d.push(b):function(){try{g.doScroll("left")}catch(c){return setTimeout(function(){a(b)},50)}b()}()}:function(a){n?a():d.push(a)}}),Array.prototype.indexOf?a.indexOf=function(a,b){return a.indexOf(b)}:a.indexOf=function(a,b){if("string"==typeof a)return a.indexOf(b);var c,d,e=b?b:0;if(!this)throw new TypeError;if(d=this.length,0===d||e>=d)return-1;for(0>e&&(e=d-Math.abs(e)),c=e;d>c;c++)if(this[c]===a)return c;return-1},Array.isArray?a.isArray=function(a){return Array.isArray(a)}:a.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)},Object.keys?a.iterate=function(a,b){if(!a)return[];var c,d=Object.keys(a);for(c=0;d[c]&&b(d[c],a[d[c]])!==!1;c++);}:a.iterate=function(a,b){if(!a)return[];var c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])===!1)break},window.matchMedia?a.matchesMedia=function(a){return""==a||window.matchMedia(a).matches}:window.styleMedia||window.media?a.matchesMedia=function(a){if(""==a)return!0;var b=window.styleMedia||window.media;return b.matchMedium(a||"all")}:window.getComputedStyle?a.matchesMedia=function(a){if(""==a)return!0;var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle;var e="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=e:b.textContent=e,"1px"===d.width}:a.matchesMedia=function(a){if(""==a)return!0;var b,c,d,e,f={"min-width":null,"max-width":null},g=!1;for(d=a.split(/\s+and\s+/),b=0;b<d.length;b++)c=d[b],"("==c.charAt(0)&&(c=c.substring(1,c.length-1),e=c.split(/:\s+/),2==e.length&&(f[e[0].replace(/^\s+|\s+$/g,"")]=parseInt(e[1]),g=!0));if(!g)return!1;var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight;return!(null!==f["min-width"]&&h<f["min-width"]||null!==f["max-width"]&&h>f["max-width"]||null!==f["min-height"]&&i<f["min-height"]||null!==f["max-height"]&&i>f["max-height"])},navigator.userAgent.match(/MSIE ([0-9]+)/)&&RegExp.$1<9&&(a.newStyle=function(a){var b=document.createElement("span");return b.innerHTML='&nbsp;<style type="text/css">'+a+"</style>",b})},initVars:function(){var b,c,d,e=navigator.userAgent;b="other",c=0,d=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],a.iterate(d,function(a,d){return e.match(d[1])?(b=d[0],c=parseFloat(RegExp.$1),!1):void 0}),a.vars.browser=b,a.vars.browserVersion=c,b="other",c=0,d=[["ios",/([0-9_]+) like Mac OS X/,function(a){return a.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(a){return 0}],["wp",/Windows Phone ([0-9\.]+)/,null],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(a){return a.replace("_",".").replace("_","")}],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null]],a.iterate(d,function(a,d){return e.match(d[1])?(b=d[0],c=parseFloat(d[2]?d[2](RegExp.$1):RegExp.$1),!1):void 0}),a.vars.os=b,a.vars.osVersion=c,a.vars.IEVersion="ie"==a.vars.browser?a.vars.browserVersion:99,a.vars.touch="wp"==a.vars.os?navigator.msMaxTouchPoints>0:!!("ontouchstart"in window),a.vars.mobile="wp"==a.vars.os||"android"==a.vars.os||"ios"==a.vars.os||"bb"==a.vars.os}};return a.init(),a}();!function(a,b){"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.skel=b()}(this,function(){return skel}),function(a){a.fn.navList=function(){var c=a(this);return $a=c.find("a"),b=[],$a.each(function(){var c=a(this),d=Math.max(0,c.parents("li").length-1),e=c.attr("href"),f=c.attr("target");b.push('<a class="link depth-'+d+'"'+("undefined"!=typeof f&&""!=f?' target="'+f+'"':"")+("undefined"!=typeof e&&""!=e?' href="'+e+'"':"")+'><span class="indent-'+d+'"></span>'+c.text()+"</a>")}),b.join("")},a.fn.panel=function(b){if(0==this.length)return d;if(this.length>1){for(var c=0;c<this.length;c++)a(this[c]).panel(b);return d}var h,d=a(this),e=a("body"),f=a(window),g=d.attr("id");return h=a.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:d,visibleClass:"visible"},b),"jQuery"!=typeof h.target&&(h.target=a(h.target)),d._hide=function(a){h.target.hasClass(h.visibleClass)&&(a&&(a.preventDefault(),a.stopPropagation()),h.target.removeClass(h.visibleClass),window.setTimeout(function(){h.resetScroll&&d.scrollTop(0),h.resetForms&&d.find("form").each(function(){this.reset()})},h.delay))},d.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),h.hideOnClick&&(d.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),d.on("click","a",function(b){var c=a(this),e=c.attr("href"),f=c.attr("target");e&&"#"!=e&&""!=e&&e!="#"+g&&(b.preventDefault(),b.stopPropagation(),d._hide(),window.setTimeout(function(){"_blank"==f?window.open(e):window.location.href=e},h.delay+10))})),d.on("touchstart",function(a){d.touchPosX=a.originalEvent.touches[0].pageX,d.touchPosY=a.originalEvent.touches[0].pageY}),d.on("touchmove",function(a){if(null!==d.touchPosX&&null!==d.touchPosY){var b=d.touchPosX-a.originalEvent.touches[0].pageX,c=d.touchPosY-a.originalEvent.touches[0].pageY,e=d.outerHeight(),f=d.get(0).scrollHeight-d.scrollTop();if(h.hideOnSwipe){var g=!1,i=20,j=50;switch(h.side){case"left":g=c<i&&c>-1*i&&b>j;break;case"right":g=c<i&&c>-1*i&&b<-1*j;break;case"top":g=b<i&&b>-1*i&&c>j;break;case"bottom":g=b<i&&b>-1*i&&c<-1*j}if(g)return d.touchPosX=null,d.touchPosY=null,d._hide(),!1}(d.scrollTop()<0&&c<0||f>e-2&&f<e+2&&c>0)&&(a.preventDefault(),a.stopPropagation())}}),d.on("click touchend touchstart touchmove",function(a){a.stopPropagation()}),d.on("click",'a[href="#'+g+'"]',function(a){a.preventDefault(),a.stopPropagation(),h.target.removeClass(h.visibleClass)}),e.on("click touchend",function(a){d._hide(a)}),e.on("click",'a[href="#'+g+'"]',function(a){a.preventDefault(),a.stopPropagation(),h.target.toggleClass(h.visibleClass)}),h.hideOnEscape&&f.on("keydown",function(a){27==a.keyCode&&d._hide(a)}),d},a.fn.placeholder=function(){if("undefined"!=typeof document.createElement("input").placeholder)return a(this);if(0==this.length)return c;if(this.length>1){for(var b=0;b<this.length;b++)a(this[b]).placeholder();return c}var c=a(this);return c.find("input[type=text],textarea").each(function(){var b=a(this);""!=b.val()&&b.val()!=b.attr("placeholder")||b.addClass("polyfill-placeholder").val(b.attr("placeholder"))}).on("blur",function(){var b=a(this);b.attr("name").match(/-polyfill-field$/)||""==b.val()&&b.addClass("polyfill-placeholder").val(b.attr("placeholder"))}).on("focus",function(){var b=a(this);b.attr("name").match(/-polyfill-field$/)||b.val()==b.attr("placeholder")&&b.removeClass("polyfill-placeholder").val("")}),c.find("input[type=password]").each(function(){var b=a(this),c=a(a("<div>").append(b.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));""!=b.attr("id")&&c.attr("id",b.attr("id")+"-polyfill-field"),""!=b.attr("name")&&c.attr("name",b.attr("name")+"-polyfill-field"),c.addClass("polyfill-placeholder").val(c.attr("placeholder")).insertAfter(b),""==b.val()?b.hide():c.hide(),b.on("blur",function(a){a.preventDefault();var c=b.parent().find("input[name="+b.attr("name")+"-polyfill-field]");""==b.val()&&(b.hide(),c.show())}),c.on("focus",function(a){a.preventDefault();var b=c.parent().find("input[name="+c.attr("name").replace("-polyfill-field","")+"]");c.hide(),b.show().focus()}).on("keypress",function(a){a.preventDefault(),c.val("")})}),c.on("submit",function(){c.find("input[type=text],input[type=password],textarea").each(function(b){var c=a(this);c.attr("name").match(/-polyfill-field$/)&&c.attr("name",""),c.val()==c.attr("placeholder")&&(c.removeClass("polyfill-placeholder"),c.val(""))})}).on("reset",function(b){b.preventDefault(),c.find("select").val(a("option:first").val()),c.find("input,textarea").each(function(){var c,b=a(this);switch(b.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":b.val(b.attr("defaultValue")),c=b.parent().find("input[name="+b.attr("name")+"-polyfill-field]"),""==b.val()?(b.hide(),c.show()):(b.show(),c.hide());break;case"checkbox":case"radio":b.attr("checked",b.attr("defaultValue"));break;case"text":case"textarea":b.val(b.attr("defaultValue")),""==b.val()&&(b.addClass("polyfill-placeholder"),b.val(b.attr("placeholder")));break;default:b.val(b.attr("defaultValue"))}})}),c},a.prioritize=function(b,c){var d="__prioritize";"jQuery"!=typeof b&&(b=a(b)),b.each(function(){var e,b=a(this),f=b.parent();if(0!=f.length)if(b.data(d)){if(c)return;e=b.data(d),b.insertAfter(e),b.removeData(d)}else{if(!c)return;if(e=b.prev(),0==e.length)return;b.prependTo(f),b.data(d,e)}})}}(jQuery);


/*Codigo Personalizable*/
(function($) {

//Boton Abajo
$('a[href=#abajo]').on('click', function(e) { e.preventDefault(); $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear'); });

//Carousel Settings, Skeleton Sizes.
var settings = {
	carousels: {
		speed: 3,
		fadeIn: true,
		fadeDelay: 100
	},
};
skel.breakpoints({wide: '(max-width: 1680px)',mobile: '(max-width: 736px)'});

$(function() {
//Desactivar Animaciones al cargar el sitio.
var	$window = $(window),
$body = $('body');
$body.addClass('is-loading');
$window.on('load', function() {$body.removeClass('is-loading');});

$('.carousel').each(function() {

//Variables
var	$t = $(this),
$forward = $('<span class="forward"></span>'),
$backward = $('<span class="backward"></span>'),
$reel = $t.children('.reel'),
$items = $reel.children('article');

var	pos = 0,
leftLimit,
rightLimit,
itemWidth,
reelWidth,
timerId;

// Articulos
if (settings.carousels.fadeIn) {

$items.addClass('loading');

$t.onVisible(function() {
var	timerId,
limit = $items.length - Math.ceil($window.width() / itemWidth);

timerId = window.setInterval(function() {
var x = $items.filter('.loading'), xf = x.first();

if (x.length <= limit) {
window.clearInterval(timerId);
$items.removeClass('loading');
return;
}
if (skel.vars.IEVersion < 10) {
xf.fadeTo(750, 1.0);
window.setTimeout(function() {
	xf.removeClass('loading');
}, 50);
}
else
xf.removeClass('loading');

}, settings.carousels.fadeDelay);
}, 50);
}

// Funcion principal
$t._update = function() {
    pos = 0;
    rightLimit = (-1 * reelWidth) + $window.width();
    leftLimit = 0;
    $t._updatePos();
};
$t._updatePos = function() { $reel.css('transform', 'translate(' + pos + 'px, 0)'); };

// Adelante
$forward
.appendTo($t)
.hide()
.mouseenter(function(e) {
timerId = window.setInterval(function() {
pos -= settings.carousels.speed;

if (pos <= rightLimit)
{
window.clearInterval(timerId);
pos = rightLimit;
}

$t._updatePos();
}, 10);
})
.mouseleave(function(e) {window.clearInterval(timerId); });

// Atras
$backward
.appendTo($t)
.hide()
.mouseenter(function(e) {
timerId = window.setInterval(function() {
pos += settings.carousels.speed;

if (pos >= leftLimit) {
    window.clearInterval(timerId);
    pos = leftLimit;
}

$t._updatePos();
}, 10);
})
.mouseleave(function(e) { window.clearInterval(timerId); });

// Iniciar
$window.load(function() {

reelWidth = $reel[0].scrollWidth;

skel.on('change', function() {

    if (skel.vars.touch) {
        $reel
        .css('overflow-y', 'hidden')
        .css('overflow-x', 'scroll')
        .scrollLeft(0);
        $forward.hide();
        $backward.hide();
        } else {
        $reel
        .css('overflow', 'visible')
        .scrollLeft(0);
        $forward.show();
        $backward.show();
    }
    $t._update();
});

}); 

});//Funcion Carousel
});//Funcion Principal
})(jQuery);
function aparecer_mensaje() {$('#boton_mensaje').hide().fadeTo(1000,0.6); }
if ($(window).width() > 736) {
   setTimeout(aparecer_mensaje, 7000);
}
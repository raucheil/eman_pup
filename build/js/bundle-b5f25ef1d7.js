!function(e){"use strict";var t={ENTER:13,ESC:27,F1:112,F12:123,LEFT:37,RIGHT:39},n={autoReset:!0,basic:!1,closable:!0,closableByDimmer:!0,frameless:!1,maintainFocus:!0,maximizable:!0,modal:!0,movable:!0,moveBounded:!1,overflow:!0,padding:!0,pinnable:!0,pinned:!0,preventBodyShift:!1,resizable:!0,startMaximized:!1,transition:"pulse",notifier:{delay:5,position:"bottom-right",closeButton:!1},glossary:{title:"AlertifyJS",ok:"OK",cancel:"Cancel",acccpt:"Accept",deny:"Deny",confirm:"Confirm",decline:"Decline",close:"Close",maximize:"Maximize",restore:"Restore"},theme:{input:"ajs-input",ok:"ajs-ok",cancel:"ajs-cancel"}},i=[];function o(e,t){e.className+=" "+t}function s(e,t){for(var n=e.className.split(" "),i=t.split(" "),o=0;o<i.length;o+=1){var s=n.indexOf(i[o]);s>-1&&n.splice(s,1)}e.className=n.join(" ")}function a(){return"rtl"===e.getComputedStyle(document.body).direction}function l(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function r(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function d(e){for(;e.lastChild;)e.removeChild(e.lastChild)}function c(e){if(null===e)return e;var t;if(Array.isArray(e)){t=[];for(var n=0;n<e.length;n+=1)t.push(c(e[n]));return t}if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp)return(t=new RegExp(e.source)).global=e.global,t.ignoreCase=e.ignoreCase,t.multiline=e.multiline,t.lastIndex=e.lastIndex,t;if("object"==typeof e){t={};for(var i in e)e.hasOwnProperty(i)&&(t[i]=c(e[i]));return t}return e}function m(e,t){var n=e.elements.root;n.parentNode.removeChild(n),delete e.elements,e.settings=c(e.__settings),e.__init=t,delete e.__internal}var u=document.addEventListener?function(e,t,n,i){e.addEventListener(t,n,!0===i)}:document.attachEvent?function(e,t,n){e.attachEvent("on"+t,n)}:void 0,f=document.removeEventListener?function(e,t,n,i){e.removeEventListener(t,n,!0===i)}:document.detachEvent?function(e,t,n){e.detachEvent("on"+t,n)}:void 0,h=function(){var e,t,n=!1,i={animation:"animationend",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==document.documentElement.style[e]){t=i[e],n=!0;break}return{type:t,supported:n}}();function p(e,t){return function(){if(arguments.length>0){for(var n=[],i=0;i<arguments.length;i+=1)n.push(arguments[i]);return n.push(e),t.apply(e,n)}return t.apply(e,[null,e])}}function v(e,t){return{index:e,button:t,cancel:!1}}function g(e,t){if("function"==typeof t.get(e))return t.get(e).call(t)}var b=function(){var n=[],b=null,_=e.navigator.userAgent.indexOf("Safari")>-1&&e.navigator.userAgent.indexOf("Chrome")<0,x={dimmer:'<div class="ajs-dimmer"></div>',modal:'<div class="ajs-modal" tabindex="0"></div>',dialog:'<div class="ajs-dialog" tabindex="0"></div>',reset:'<button class="ajs-reset"></button>',commands:'<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',header:'<div class="ajs-header"></div>',body:'<div class="ajs-body"></div>',content:'<div class="ajs-content"></div>',footer:'<div class="ajs-footer"></div>',buttons:{primary:'<div class="ajs-primary ajs-buttons"></div>',auxiliary:'<div class="ajs-auxiliary ajs-buttons"></div>'},button:'<button class="ajs-button"></button>',resizeHandle:'<div class="ajs-handle"></div>'},k={animationIn:"ajs-in",animationOut:"ajs-out",base:"alertify",basic:"ajs-basic",capture:"ajs-capture",closable:"ajs-closable",fixed:"ajs-fixed",frameless:"ajs-frameless",hidden:"ajs-hidden",maximize:"ajs-maximize",maximized:"ajs-maximized",maximizable:"ajs-maximizable",modeless:"ajs-modeless",movable:"ajs-movable",noSelection:"ajs-no-selection",noOverflow:"ajs-no-overflow",noPadding:"ajs-no-padding",pin:"ajs-pin",pinnable:"ajs-pinnable",prefix:"ajs-",resizable:"ajs-resizable",restore:"ajs-restore",shake:"ajs-shake",unpinned:"ajs-unpinned"};function w(e){if(!e.__internal){delete e.__init,e.__settings||(e.__settings=c(e.settings)),null===b&&document.body.setAttribute("tabindex","0");var t;"function"==typeof e.setup?((t=e.setup()).options=t.options||{},t.focus=t.focus||{}):t={buttons:[],focus:{element:null,select:!1},options:{}},"object"!=typeof e.hooks&&(e.hooks={});var i=[];if(Array.isArray(t.buttons))for(var s=0;s<t.buttons.length;s+=1){var a=t.buttons[s],l={};for(var r in a)a.hasOwnProperty(r)&&(l[r]=a[r]);i.push(l)}var d=e.__internal={isOpen:!1,activeElement:document.body,timerIn:void 0,timerOut:void 0,buttons:i,focus:t.focus,options:{title:void 0,modal:void 0,basic:void 0,frameless:void 0,pinned:void 0,movable:void 0,moveBounded:void 0,resizable:void 0,autoReset:void 0,closable:void 0,closableByDimmer:void 0,maximizable:void 0,startMaximized:void 0,pinnable:void 0,transition:void 0,padding:void 0,overflow:void 0,onshow:void 0,onclosing:void 0,onclose:void 0,onfocus:void 0,onmove:void 0,onmoved:void 0,onresize:void 0,onresized:void 0,onmaximize:void 0,onmaximized:void 0,onrestore:void 0,onrestored:void 0},resetHandler:void 0,beginMoveHandler:void 0,beginResizeHandler:void 0,bringToFrontHandler:void 0,modalClickHandler:void 0,buttonsClickHandler:void 0,commandsClickHandler:void 0,transitionInHandler:void 0,transitionOutHandler:void 0,destroy:void 0},m={};m.root=document.createElement("div"),m.root.className=k.base+" "+k.hidden+" ",m.root.innerHTML=x.dimmer+x.modal,m.dimmer=m.root.firstChild,m.modal=m.root.lastChild,m.modal.innerHTML=x.dialog,m.dialog=m.modal.firstChild,m.dialog.innerHTML=x.reset+x.commands+x.header+x.body+x.footer+x.resizeHandle+x.reset,m.reset=[],m.reset.push(m.dialog.firstChild),m.reset.push(m.dialog.lastChild),m.commands={},m.commands.container=m.reset[0].nextSibling,m.commands.pin=m.commands.container.firstChild,m.commands.maximize=m.commands.pin.nextSibling,m.commands.close=m.commands.maximize.nextSibling,m.header=m.commands.container.nextSibling,m.body=m.header.nextSibling,m.body.innerHTML=x.content,m.content=m.body.firstChild,m.footer=m.body.nextSibling,m.footer.innerHTML=x.buttons.auxiliary+x.buttons.primary,m.resizeHandle=m.footer.nextSibling,m.buttons={},m.buttons.auxiliary=m.footer.firstChild,m.buttons.primary=m.buttons.auxiliary.nextSibling,m.buttons.primary.innerHTML=x.button,m.buttonTemplate=m.buttons.primary.firstChild,m.buttons.primary.removeChild(m.buttonTemplate);for(var u=0;u<e.__internal.buttons.length;u+=1){var f=e.__internal.buttons[u];n.indexOf(f.key)<0&&n.push(f.key),f.element=m.buttonTemplate.cloneNode(),f.element.innerHTML=f.text,"string"==typeof f.className&&""!==f.className&&o(f.element,f.className);for(var h in f.attrs)"className"!==h&&f.attrs.hasOwnProperty(h)&&f.element.setAttribute(h,f.attrs[h]);"auxiliary"===f.scope?m.buttons.auxiliary.appendChild(f.element):m.buttons.primary.appendChild(f.element)}e.elements=m,d.resetHandler=p(e,Z),d.beginMoveHandler=p(e,me),d.beginResizeHandler=p(e,ye),d.bringToFrontHandler=p(e,N),d.modalClickHandler=p(e,G),d.buttonsClickHandler=p(e,X),d.commandsClickHandler=p(e,A),d.transitionInHandler=p(e,$),d.transitionOutHandler=p(e,ee);for(var v in d.options)void 0!==t.options[v]?e.set(v,t.options[v]):y.defaults.hasOwnProperty(v)?e.set(v,y.defaults[v]):"title"===v&&e.set(v,y.defaults.glossary[v]);"function"==typeof e.build&&e.build()}document.body.appendChild(e.elements.root)}var H,z;function C(){e.scrollTo(H,z)}function T(){for(var e=0,t=0;t<i.length;t+=1){var n=i[t];(n.isModal()||n.isMaximized())&&(e+=1)}0===e&&document.body.className.indexOf(k.noOverflow)>=0?(s(document.body,k.noOverflow),O(!1)):e>0&&document.body.className.indexOf(k.noOverflow)<0&&(O(!0),o(document.body,k.noOverflow))}var M="",E=0;function O(t){y.defaults.preventBodyShift&&document.documentElement.scrollHeight>document.documentElement.clientHeight&&(t?(E=z,M=e.getComputedStyle(document.body).top,o(document.body,k.fixed),document.body.style.top=-z+"px"):(z=E,document.body.style.top=M,s(document.body,k.fixed),C()))}function j(e,t,n){"string"==typeof n&&s(e.elements.root,k.prefix+n),o(e.elements.root,k.prefix+t),b=e.elements.root.offsetWidth}function N(e,t){for(var n=i.indexOf(t)+1;n<i.length;n+=1)if(i[n].isModal())return;return document.body.lastChild!==t.elements.root&&(document.body.appendChild(t.elements.root),i.splice(i.indexOf(t),1),i.push(t),Q(t)),!1}function L(e,t,n,i){switch(t){case"title":e.setHeader(i);break;case"modal":(p=e).get("modal")?(s(p.elements.root,k.modeless),p.isOpen()&&(Ce(p),V(p),T())):(o(p.elements.root,k.modeless),p.isOpen()&&(ze(p),V(p),T()));break;case"basic":(h=e).get("basic")?o(h.elements.root,k.basic):s(h.elements.root,k.basic);break;case"frameless":(m=e).get("frameless")?o(m.elements.root,k.frameless):s(m.elements.root,k.frameless);break;case"pinned":(c=e).get("pinned")?(s(c.elements.root,k.unpinned),c.isOpen()&&D(c)):(o(c.elements.root,k.unpinned),c.isOpen()&&!c.isModal()&&W(c));break;case"closable":!function(e){e.get("closable")?(o(e.elements.root,k.closable),u((n=e).elements.modal,"click",n.__internal.modalClickHandler)):(s(e.elements.root,k.closable),f((t=e).elements.modal,"click",t.__internal.modalClickHandler));var t;var n}(e);break;case"maximizable":(d=e).get("maximizable")?o(d.elements.root,k.maximizable):s(d.elements.root,k.maximizable);break;case"pinnable":(r=e).get("pinnable")?o(r.elements.root,k.pinnable):s(r.elements.root,k.pinnable);break;case"movable":(l=e).get("movable")?(o(l.elements.root,k.movable),l.isOpen()&&Te(l)):(he(l),s(l.elements.root,k.movable),l.isOpen()&&Me(l));break;case"resizable":(a=e).get("resizable")?(o(a.elements.root,k.resizable),a.isOpen()&&Ee(a)):(we(a),s(a.elements.root,k.resizable),a.isOpen()&&Oe(a));break;case"transition":j(e,i,n);break;case"padding":i?s(e.elements.root,k.noPadding):e.elements.root.className.indexOf(k.noPadding)<0&&o(e.elements.root,k.noPadding);break;case"overflow":i?s(e.elements.root,k.noOverflow):e.elements.root.className.indexOf(k.noOverflow)<0&&o(e.elements.root,k.noOverflow);break;case"transition":j(e,i,n)}var a,l,r,d,c,m,h,p;"function"==typeof e.hooks.onupdate&&e.hooks.onupdate.call(e,t,n,i)}function I(e,t,n,i,o){var s={op:void 0,items:[]};if(void 0===o&&"string"==typeof i)s.op="get",t.hasOwnProperty(i)?(s.found=!0,s.value=t[i]):(s.found=!1,s.value=void 0);else{var a;if(s.op="set","object"==typeof i){var l=i;for(var r in l)t.hasOwnProperty(r)?(t[r]!==l[r]&&(a=t[r],t[r]=l[r],n.call(e,r,a,l[r])),s.items.push({key:r,value:l[r],found:!0})):s.items.push({key:r,value:l[r],found:!1})}else{if("string"!=typeof i)throw new Error("args must be a string or object");t.hasOwnProperty(i)?(t[i]!==o&&(a=t[i],t[i]=o,n.call(e,i,a,o)),s.items.push({key:i,value:o,found:!0})):s.items.push({key:i,value:o,found:!1})}}return s}function P(e){var t;q(e,function(e){return t=!0===e.invokeOnClose}),!t&&e.isOpen()&&e.close()}function A(e,t){switch(e.srcElement||e.target){case t.elements.commands.pin:t.isPinned()?S(t):R(t);break;case t.elements.commands.maximize:t.isMaximized()?F(t):B(t);break;case t.elements.commands.close:P(t)}return!1}function R(e){e.set("pinned",!0)}function S(e){e.set("pinned",!1)}function B(e){g("onmaximize",e),o(e.elements.root,k.maximized),e.isOpen()&&T(),g("onmaximized",e)}function F(e){g("onrestore",e),s(e.elements.root,k.maximized),e.isOpen()&&T(),g("onrestored",e)}function W(e){var t=r();e.elements.modal.style.marginTop=l()+"px",e.elements.modal.style.marginLeft=t+"px",e.elements.modal.style.marginRight=-t+"px"}function D(e){var t=parseInt(e.elements.modal.style.marginTop,10),n=parseInt(e.elements.modal.style.marginLeft,10);if(e.elements.modal.style.marginTop="",e.elements.modal.style.marginLeft="",e.elements.modal.style.marginRight="",e.isOpen()){var i=0,o=0;""!==e.elements.dialog.style.top&&(i=parseInt(e.elements.dialog.style.top,10)),e.elements.dialog.style.top=i+(t-l())+"px",""!==e.elements.dialog.style.left&&(o=parseInt(e.elements.dialog.style.left,10)),e.elements.dialog.style.left=o+(n-r())+"px"}}function V(e){e.get("modal")||e.get("pinned")?D(e):W(e)}var U=!1;function G(e,t){var n=e.srcElement||e.target;return U||n!==t.elements.modal||!0!==t.get("closableByDimmer")||P(t),U=!1,!1}var Y=!1;function q(e,t){for(var n=0;n<e.__internal.buttons.length;n+=1){var i=e.__internal.buttons[n];if(!i.element.disabled&&t(i)){var o=v(n,i);"function"==typeof e.callback&&e.callback.apply(e,[o]),!1===o.cancel&&e.close();break}}}function X(e,t){var n=e.srcElement||e.target;q(t,function(e){return e.element===n&&(Y=!0)})}function J(e){if(!Y){var o=i[i.length-1],s=e.keyCode;return 0===o.__internal.buttons.length&&s===t.ESC&&!0===o.get("closable")?(P(o),!1):n.indexOf(s)>-1?(q(o,function(e){return e.key===s}),!1):void 0}Y=!1}function K(e){var o=i[i.length-1],s=e.keyCode;if(s===t.LEFT||s===t.RIGHT){for(var a=o.__internal.buttons,l=0;l<a.length;l+=1)if(document.activeElement===a[l].element)switch(s){case t.LEFT:return void a[(l||a.length)-1].element.focus();case t.RIGHT:return void a[(l+1)%a.length].element.focus()}}else if(s<t.F12+1&&s>t.F1-1&&n.indexOf(s)>-1)return e.preventDefault(),e.stopPropagation(),q(o,function(e){return e.key===s}),!1}function Q(e,t){if(t)t.focus();else{var n=e.__internal.focus,i=n.element;switch(typeof n.element){case"number":e.__internal.buttons.length>n.element&&(i=!0===e.get("basic")?e.elements.reset[0]:e.__internal.buttons[n.element].element);break;case"string":i=e.elements.body.querySelector(n.element);break;case"function":i=n.element.call(e)}void 0!==i&&null!==i||0!==e.__internal.buttons.length||(i=e.elements.reset[0]),i&&i.focus&&(i.focus(),n.select&&i.select&&i.select())}}function Z(e,t){if(!t)for(var n=i.length-1;n>-1;n-=1)if(i[n].isModal()){t=i[n];break}if(t&&t.isModal()){var o,s=e.srcElement||e.target,a=s===t.elements.reset[1]||0===t.__internal.buttons.length&&s===document.body;a&&(t.get("maximizable")?o=t.elements.commands.maximize:t.get("closable")&&(o=t.elements.commands.close)),void 0===o&&("number"==typeof t.__internal.focus.element?s===t.elements.reset[0]?o=t.elements.buttons.auxiliary.firstChild||t.elements.buttons.primary.firstChild:a&&(o=t.elements.reset[0]):s===t.elements.reset[0]&&(o=t.elements.buttons.primary.lastChild||t.elements.buttons.auxiliary.lastChild)),Q(t,o)}}function $(e,t){clearTimeout(t.__internal.timerIn),Q(t),C(),Y=!1,g("onfocus",t),f(t.elements.dialog,h.type,t.__internal.transitionInHandler),s(t.elements.root,k.animationIn)}function ee(e,t){clearTimeout(t.__internal.timerOut),f(t.elements.dialog,h.type,t.__internal.transitionOutHandler),he(t),we(t),t.isMaximized()&&!t.get("startMaximized")&&F(t),y.defaults.maintainFocus&&t.__internal.activeElement&&(t.__internal.activeElement.focus(),t.__internal.activeElement=null),"function"==typeof t.__internal.destroy&&t.__internal.destroy.apply(t)}var te=null,ne=0,ie=0,oe="pageX",se="pageY",ae=null,le=!1,re=null;function de(e,t){var n=e[oe]-ne,i=e[se]-ie;le&&(i-=document.body.scrollTop),t.style.left=n+"px",t.style.top=i+"px"}function ce(e,t){var n=e[oe]-ne,i=e[se]-ie;le&&(i-=document.body.scrollTop),t.style.left=Math.min(ae.maxLeft,Math.max(ae.minLeft,n))+"px",t.style.top=le?Math.min(ae.maxTop,Math.max(ae.minTop,i))+"px":Math.max(ae.minTop,i)+"px"}function me(e,t){if(null===pe&&!t.isMaximized()&&t.get("movable")){var n,i=0,s=0;if("touchstart"===e.type?(e.preventDefault(),n=e.targetTouches[0],oe="clientX",se="clientY"):0===e.button&&(n=e),n){var a=t.elements.dialog;if(o(a,k.capture),a.style.left&&(i=parseInt(a.style.left,10)),a.style.top&&(s=parseInt(a.style.top,10)),ne=n[oe]-i,ie=n[se]-s,t.isModal()?ie+=t.elements.modal.scrollTop:t.isPinned()&&(ie-=document.body.scrollTop),t.get("moveBounded")){var l=a,r=-i,d=-s;do{r+=l.offsetLeft,d+=l.offsetTop}while(l=l.offsetParent);ae={maxLeft:r,minLeft:-r,maxTop:document.documentElement.clientHeight-a.clientHeight-d,minTop:-d},re=ce}else ae=null,re=de;return g("onmove",t),le=!t.isModal()&&t.isPinned(),te=t,re(n,a),o(document.body,k.noSelection),!1}}}function ue(e){if(te){var t;"touchmove"===e.type?(e.preventDefault(),t=e.targetTouches[0]):0===e.button&&(t=e),t&&re(t,te.elements.dialog)}}function fe(){if(te){var e=te;te=ae=null,s(document.body,k.noSelection),s(e.elements.dialog,k.capture),g("onmoved",e)}}function he(e){te=null;var t=e.elements.dialog;t.style.left=t.style.top=""}var pe=null,ve=Number.Nan,ge=0,be=0,_e=0;function ye(e,t){if(!t.isMaximized()){var n;if("touchstart"===e.type?(e.preventDefault(),n=e.targetTouches[0]):0===e.button&&(n=e),n){g("onresize",t),pe=t,_e=t.elements.resizeHandle.offsetHeight/2;var i=t.elements.dialog;return o(i,k.capture),ve=parseInt(i.style.left,10),i.style.height=i.offsetHeight+"px",i.style.minHeight=t.elements.header.offsetHeight+t.elements.footer.offsetHeight+"px",i.style.width=(ge=i.offsetWidth)+"px","none"!==i.style.maxWidth&&(i.style.minWidth=(be=i.offsetWidth)+"px"),i.style.maxWidth="none",o(document.body,k.noSelection),!1}}}function xe(e){if(pe){var t;"touchmove"===e.type?(e.preventDefault(),t=e.targetTouches[0]):0===e.button&&(t=e),t&&function(e,t,n){var i=t,o=0,s=0;do{o+=i.offsetLeft,s+=i.offsetTop}while(i=i.offsetParent);var l,r;!0===n?(l=e.pageX,r=e.pageY):(l=e.clientX,r=e.clientY);var d=a();if(d&&(l=document.body.offsetWidth-l,isNaN(ve)||(o=document.body.offsetWidth-o-t.offsetWidth)),t.style.height=r-s+_e+"px",t.style.width=l-o+_e+"px",!isNaN(ve)){var c=.5*Math.abs(t.offsetWidth-ge);d&&(c*=-1),t.offsetWidth>ge?t.style.left=ve+c+"px":t.offsetWidth>=be&&(t.style.left=ve-c+"px")}}(t,pe.elements.dialog,!pe.get("modal")&&!pe.get("pinned"))}}function ke(){if(pe){var e=pe;pe=null,s(document.body,k.noSelection),s(e.elements.dialog,k.capture),U=!0,g("onresized",e)}}function we(e){pe=null;var t=e.elements.dialog;"none"===t.style.maxWidth&&(t.style.maxWidth=t.style.minWidth=t.style.width=t.style.height=t.style.minHeight=t.style.left="",ve=Number.Nan,ge=be=_e=0)}function He(){for(var e=0;e<i.length;e+=1){var t=i[e];t.get("autoReset")&&(he(t),we(t))}}function ze(e){u(e.elements.dialog,"focus",e.__internal.bringToFrontHandler,!0)}function Ce(e){f(e.elements.dialog,"focus",e.__internal.bringToFrontHandler,!0)}function Te(e){u(e.elements.header,"mousedown",e.__internal.beginMoveHandler),u(e.elements.header,"touchstart",e.__internal.beginMoveHandler)}function Me(e){f(e.elements.header,"mousedown",e.__internal.beginMoveHandler),f(e.elements.header,"touchstart",e.__internal.beginMoveHandler)}function Ee(e){u(e.elements.resizeHandle,"mousedown",e.__internal.beginResizeHandler),u(e.elements.resizeHandle,"touchstart",e.__internal.beginResizeHandler)}function Oe(e){f(e.elements.resizeHandle,"mousedown",e.__internal.beginResizeHandler),f(e.elements.resizeHandle,"touchstart",e.__internal.beginResizeHandler)}return{__init:w,isOpen:function(){return this.__internal.isOpen},isModal:function(){return this.elements.root.className.indexOf(k.modeless)<0},isMaximized:function(){return this.elements.root.className.indexOf(k.maximized)>-1},isPinned:function(){return this.elements.root.className.indexOf(k.unpinned)<0},maximize:function(){return this.isMaximized()||B(this),this},restore:function(){return this.isMaximized()&&F(this),this},pin:function(){return this.isPinned()||R(this),this},unpin:function(){return this.isPinned()&&S(this),this},bringToFront:function(){return N(0,this),this},moveTo:function(e,t){if(!isNaN(e)&&!isNaN(t)){g("onmove",this);var n=this.elements.dialog,i=n,o=0,s=0;n.style.left&&(o-=parseInt(n.style.left,10)),n.style.top&&(s-=parseInt(n.style.top,10));do{o+=i.offsetLeft,s+=i.offsetTop}while(i=i.offsetParent);var l=e-o,r=t-s;a()&&(l*=-1),n.style.left=l+"px",n.style.top=r+"px",g("onmoved",this)}return this},resizeTo:function(e,t){var n=parseFloat(e),i=parseFloat(t),o=/(\d*\.\d+|\d+)%/;if(!isNaN(n)&&!isNaN(i)&&!0===this.get("resizable")){g("onresize",this),(""+e).match(o)&&(n=n/100*document.documentElement.clientWidth),(""+t).match(o)&&(i=i/100*document.documentElement.clientHeight);var s=this.elements.dialog;"none"!==s.style.maxWidth&&(s.style.minWidth=(be=s.offsetWidth)+"px"),s.style.maxWidth="none",s.style.minHeight=this.elements.header.offsetHeight+this.elements.footer.offsetHeight+"px",s.style.width=n+"px",s.style.height=i+"px",g("onresized",this)}return this},setting:function(e,t){var n=this,i=I(this,this.__internal.options,function(e,t,i){L(n,e,t,i)},e,t);if("get"===i.op)return i.found?i.value:void 0!==this.settings?I(this,this.settings,this.settingUpdated||function(){},e,t).value:void 0;if("set"===i.op){if(i.items.length>0)for(var o=this.settingUpdated||function(){},s=0;s<i.items.length;s+=1){var a=i.items[s];a.found||void 0===this.settings||I(this,this.settings,o,a.key,a.value)}return this}},set:function(e,t){return this.setting(e,t),this},get:function(e){return this.setting(e)},setHeader:function(t){return"string"==typeof t?(d(this.elements.header),this.elements.header.innerHTML=t):t instanceof e.HTMLElement&&this.elements.header.firstChild!==t&&(d(this.elements.header),this.elements.header.appendChild(t)),this},setContent:function(t){return"string"==typeof t?(d(this.elements.content),this.elements.content.innerHTML=t):t instanceof e.HTMLElement&&this.elements.content.firstChild!==t&&(d(this.elements.content),this.elements.content.appendChild(t)),this},showModal:function(e){return this.show(!0,e)},show:function(t,n){if(w(this),this.__internal.isOpen){he(this),we(this),o(this.elements.dialog,k.shake);var a=this;setTimeout(function(){s(a.elements.dialog,k.shake)},200)}else{if(this.__internal.isOpen=!0,i.push(this),y.defaults.maintainFocus&&(this.__internal.activeElement=document.activeElement),"function"==typeof this.prepare&&this.prepare(),c=this,1===i.length&&(u(e,"resize",He),u(document.body,"keyup",J),u(document.body,"keydown",K),u(document.body,"focus",Z),u(document.documentElement,"mousemove",ue),u(document.documentElement,"touchmove",ue),u(document.documentElement,"mouseup",fe),u(document.documentElement,"touchend",fe),u(document.documentElement,"mousemove",xe),u(document.documentElement,"touchmove",xe),u(document.documentElement,"mouseup",ke),u(document.documentElement,"touchend",ke)),u(c.elements.commands.container,"click",c.__internal.commandsClickHandler),u(c.elements.footer,"click",c.__internal.buttonsClickHandler),u(c.elements.reset[0],"focus",c.__internal.resetHandler),u(c.elements.reset[1],"focus",c.__internal.resetHandler),Y=!0,u(c.elements.dialog,h.type,c.__internal.transitionInHandler),c.get("modal")||ze(c),c.get("resizable")&&Ee(c),c.get("movable")&&Te(c),void 0!==t&&this.set("modal",t),H=r(),z=l(),T(),"string"==typeof n&&""!==n&&(this.__internal.className=n,o(this.elements.root,n)),this.get("startMaximized")?this.maximize():this.isMaximized()&&F(this),V(this),s(this.elements.root,k.animationOut),o(this.elements.root,k.animationIn),clearTimeout(this.__internal.timerIn),this.__internal.timerIn=setTimeout(this.__internal.transitionInHandler,h.supported?1e3:100),_){var d=this.elements.root;d.style.display="none",setTimeout(function(){d.style.display="block"},0)}b=this.elements.root.offsetWidth,s(this.elements.root,k.hidden),"function"==typeof this.hooks.onshow&&this.hooks.onshow.call(this),g("onshow",this)}var c;return this},close:function(){this.__internal.isOpen&&!1!==g("onclosing",this)&&(t=this,1===i.length&&(f(e,"resize",He),f(document.body,"keyup",J),f(document.body,"keydown",K),f(document.body,"focus",Z),f(document.documentElement,"mousemove",ue),f(document.documentElement,"mouseup",fe),f(document.documentElement,"mousemove",xe),f(document.documentElement,"mouseup",ke)),f(t.elements.commands.container,"click",t.__internal.commandsClickHandler),f(t.elements.footer,"click",t.__internal.buttonsClickHandler),f(t.elements.reset[0],"focus",t.__internal.resetHandler),f(t.elements.reset[1],"focus",t.__internal.resetHandler),u(t.elements.dialog,h.type,t.__internal.transitionOutHandler),t.get("modal")||Ce(t),t.get("movable")&&Me(t),t.get("resizable")&&Oe(t),s(this.elements.root,k.animationIn),o(this.elements.root,k.animationOut),clearTimeout(this.__internal.timerOut),this.__internal.timerOut=setTimeout(this.__internal.transitionOutHandler,h.supported?1e3:100),o(this.elements.root,k.hidden),b=this.elements.modal.offsetWidth,void 0!==this.__internal.className&&""!==this.__internal.className&&s(this.elements.root,this.__internal.className),"function"==typeof this.hooks.onclose&&this.hooks.onclose.call(this),g("onclose",this),i.splice(i.indexOf(this),1),this.__internal.isOpen=!1,T());var t;return this},closeOthers:function(){return y.closeAll(this),this},destroy:function(){return this.__internal.isOpen?(this.__internal.destroy=function(){m(this,w)},this.close()):m(this,w),this}}}(),_=function(){var t,n=[],i={base:"alertify-notifier",message:"ajs-message",top:"ajs-top",right:"ajs-right",bottom:"ajs-bottom",left:"ajs-left",center:"ajs-center",visible:"ajs-visible",hidden:"ajs-hidden",close:"ajs-close"};function a(e){e.__internal||(e.__internal={position:y.defaults.notifier.position,delay:y.defaults.notifier.delay},t=document.createElement("DIV"),l(e)),t.parentNode!==document.body&&document.body.appendChild(t)}function l(e){switch(t.className=i.base,e.__internal.position){case"top-right":o(t,i.top+" "+i.right);break;case"top-left":o(t,i.top+" "+i.left);break;case"top-center":o(t,i.top+" "+i.center);break;case"bottom-left":o(t,i.bottom+" "+i.left);break;case"bottom-center":o(t,i.bottom+" "+i.center);break;default:case"bottom-right":o(t,i.bottom+" "+i.right)}}function r(a,l){function r(e,t){t.__internal.closeButton&&"true"!==e.target.getAttribute("data-close")||t.dismiss(!0)}function c(e,n){f(n.element,h.type,c),t.removeChild(n.element)}function m(e){clearTimeout(e.__internal.timer),clearTimeout(e.__internal.transitionTimeout)}return(v={element:a,push:function(e,s){if(!this.__internal.pushed){(r=this).__internal.pushed=!0,n.push(r),m(this);var a,l;switch(arguments.length){case 0:l=this.__internal.delay;break;case 1:"number"==typeof e?l=e:(a=e,l=this.__internal.delay);break;case 2:a=e,l=s}return this.__internal.closeButton=y.defaults.notifier.closeButton,void 0!==a&&this.setContent(a),_.__internal.position.indexOf("top")<0?t.appendChild(this.element):t.insertBefore(this.element,t.firstChild),this.element.offsetWidth,o(this.element,i.visible),u(this.element,"click",this.__internal.clickHandler),this.delay(l)}var r;return this},ondismiss:function(){},callback:l,dismiss:function(e){this.__internal.pushed&&(m(this),"function"==typeof this.ondismiss&&!1===this.ondismiss.call(this)||(f(this.element,"click",this.__internal.clickHandler),void 0!==this.element&&this.element.parentNode===t&&(this.__internal.transitionTimeout=setTimeout(this.__internal.transitionEndHandler,h.supported?1e3:100),s(this.element,i.visible),"function"==typeof this.callback&&this.callback.call(this,e)),o=this,n.splice(n.indexOf(o),1),o.__internal.pushed=!1));var o;return this},delay:function(e){if(m(this),this.__internal.delay=void 0===e||isNaN(+e)?_.__internal.delay:+e,this.__internal.delay>0){var t=this;this.__internal.timer=setTimeout(function(){t.dismiss()},1e3*this.__internal.delay)}return this},setContent:function(t){if("string"==typeof t?(d(this.element),this.element.innerHTML=t):t instanceof e.HTMLElement&&this.element.firstChild!==t&&(d(this.element),this.element.appendChild(t)),this.__internal.closeButton){var n=document.createElement("span");o(n,i.close),n.setAttribute("data-close",!0),this.element.appendChild(n)}return this},dismissOthers:function(){return _.dismissAll(this),this}}).__internal||(v.__internal={pushed:!1,delay:void 0,timer:void 0,clickHandler:void 0,transitionEndHandler:void 0,transitionTimeout:void 0},v.__internal.clickHandler=p(v,r),v.__internal.transitionEndHandler=p(v,c)),v;var v}return{setting:function(e,t){if(a(this),void 0===t)return this.__internal[e];switch(e){case"position":this.__internal.position=t,l(this);break;case"delay":this.__internal.delay=t}return this},set:function(e,t){return this.setting(e,t),this},get:function(e){return this.setting(e)},create:function(e,t){a(this);var n=document.createElement("div");return n.className=i.message+("string"==typeof e&&""!==e?" ajs-"+e:""),r(n,t)},dismissAll:function(e){for(var t=n.slice(0),i=0;i<t.length;i+=1){var o=t[i];void 0!==e&&e===o||o.dismiss()}}}}();var y=new function(){var e={};function t(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function o(t){var n=e[t].dialog;return n&&"function"==typeof n.__init&&n.__init(n),n}return{defaults:n,dialog:function(n,i,s,a){if("function"!=typeof i)return o(n);if(this.hasOwnProperty(n))throw new Error("alertify.dialog: name already exists");var l=function(n,i,o,s){var a={dialog:null,factory:i};return void 0!==s&&(a.factory=function(){return t(new e[s].factory,new i)}),o||(a.dialog=t(new a.factory,b)),e[n]=a}(n,i,s,a);this[n]=s?function(){if(0===arguments.length)return l.dialog;var e=t(new l.factory,b);return e&&"function"==typeof e.__init&&e.__init(e),e.main.apply(e,arguments),e.show.apply(e)}:function(){if(l.dialog&&"function"==typeof l.dialog.__init&&l.dialog.__init(l.dialog),0===arguments.length)return l.dialog;var e=l.dialog;return e.main.apply(l.dialog,arguments),e.show.apply(l.dialog)}},closeAll:function(e){for(var t=i.slice(0),n=0;n<t.length;n+=1){var o=t[n];void 0!==e&&e===o||o.close()}},setting:function(e,t,n){if("notifier"===e)return _.setting(t,n);var i=o(e);return i?i.setting(t,n):void 0},set:function(e,t,n){return this.setting(e,t,n)},get:function(e,t){return this.setting(e,t)},notify:function(e,t,n,i){return _.create(t,i).push(e,n)},message:function(e,t,n){return _.create(null,n).push(e,t)},success:function(e,t,n){return _.create("success",n).push(e,t)},error:function(e,t,n){return _.create("error",n).push(e,t)},warning:function(e,t,n){return _.create("warning",n).push(e,t)},dismissAll:function(){_.dismissAll()}}};y.dialog("alert",function(){return{main:function(e,t,n){var i,o,s;switch(arguments.length){case 1:o=e;break;case 2:"function"==typeof t?(o=e,s=t):(i=e,o=t);break;case 3:i=e,o=t,s=n}return this.set("title",i),this.set("message",o),this.set("onok",s),this},setup:function(){return{buttons:[{text:y.defaults.glossary.ok,key:t.ESC,invokeOnClose:!0,className:y.defaults.theme.ok}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(e){this.setContent(e)},settings:{message:void 0,onok:void 0,label:void 0},settingUpdated:function(e,t,n){switch(e){case"message":this.setMessage(n);break;case"label":this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=n)}},callback:function(e){if("function"==typeof this.get("onok")){var t=this.get("onok").call(this,e);void 0!==t&&(e.cancel=!t)}}}}),y.dialog("confirm",function(){var e={timer:null,index:null,text:null,duration:null,task:function(t,i){if(i.isOpen()){if(i.__internal.buttons[e.index].element.innerHTML=e.text+" (&#8207;"+e.duration+"&#8207;) ",e.duration-=1,-1===e.duration){n(i);var o=i.__internal.buttons[e.index],s=v(e.index,o);"function"==typeof i.callback&&i.callback.apply(i,[s]),!1!==s.close&&i.close()}}else n(i)}};function n(t){null!==e.timer&&(clearInterval(e.timer),e.timer=null,t.__internal.buttons[e.index].element.innerHTML=e.text)}function i(t,i,o){n(t),e.duration=o,e.index=i,e.text=t.__internal.buttons[i].element.innerHTML,e.timer=setInterval(p(t,e.task),1e3),e.task(null,t)}return{main:function(e,t,n,i){var o,s,a,l;switch(arguments.length){case 1:s=e;break;case 2:s=e,a=t;break;case 3:s=e,a=t,l=n;break;case 4:o=e,s=t,a=n,l=i}return this.set("title",o),this.set("message",s),this.set("onok",a),this.set("oncancel",l),this},setup:function(){return{buttons:[{text:y.defaults.glossary.ok,key:t.ENTER,className:y.defaults.theme.ok},{text:y.defaults.glossary.cancel,key:t.ESC,invokeOnClose:!0,className:y.defaults.theme.cancel}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(e){this.setContent(e)},settings:{message:null,labels:null,onok:null,oncancel:null,defaultFocus:null,reverseButtons:null},settingUpdated:function(e,t,n){switch(e){case"message":this.setMessage(n);break;case"labels":"ok"in n&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].text=n.ok,this.__internal.buttons[0].element.innerHTML=n.ok),"cancel"in n&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].text=n.cancel,this.__internal.buttons[1].element.innerHTML=n.cancel);break;case"reverseButtons":!0===n?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);break;case"defaultFocus":this.__internal.focus.element="ok"===n?0:1}},callback:function(e){n(this);var t;switch(e.index){case 0:"function"==typeof this.get("onok")&&void 0!==(t=this.get("onok").call(this,e))&&(e.cancel=!t);break;case 1:"function"==typeof this.get("oncancel")&&void 0!==(t=this.get("oncancel").call(this,e))&&(e.cancel=!t)}},autoOk:function(e){return i(this,0,e),this},autoCancel:function(e){return i(this,1,e),this}}}),y.dialog("prompt",function(){var n=document.createElement("INPUT"),i=document.createElement("P");return{main:function(e,t,n,i,o){var s,a,l,r,d;switch(arguments.length){case 1:a=e;break;case 2:a=e,l=t;break;case 3:a=e,l=t,r=n;break;case 4:a=e,l=t,r=n,d=i;break;case 5:s=e,a=t,l=n,r=i,d=o}return this.set("title",s),this.set("message",a),this.set("value",l),this.set("onok",r),this.set("oncancel",d),this},setup:function(){return{buttons:[{text:y.defaults.glossary.ok,key:t.ENTER,className:y.defaults.theme.ok},{text:y.defaults.glossary.cancel,key:t.ESC,invokeOnClose:!0,className:y.defaults.theme.cancel}],focus:{element:n,select:!0},options:{maximizable:!1,resizable:!1}}},build:function(){n.className=y.defaults.theme.input,n.setAttribute("type","text"),n.value=this.get("value"),this.elements.content.appendChild(i),this.elements.content.appendChild(n)},prepare:function(){},setMessage:function(t){"string"==typeof t?(d(i),i.innerHTML=t):t instanceof e.HTMLElement&&i.firstChild!==t&&(d(i),i.appendChild(t))},settings:{message:void 0,labels:void 0,onok:void 0,oncancel:void 0,value:"",type:"text",reverseButtons:void 0},settingUpdated:function(e,t,i){switch(e){case"message":this.setMessage(i);break;case"value":n.value=i;break;case"type":switch(i){case"text":case"color":case"date":case"datetime-local":case"email":case"month":case"number":case"password":case"search":case"tel":case"time":case"week":n.type=i;break;default:n.type="text"}break;case"labels":i.ok&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=i.ok),i.cancel&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].element.innerHTML=i.cancel);break;case"reverseButtons":!0===i?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)}},callback:function(e){var t;switch(e.index){case 0:this.settings.value=n.value,"function"==typeof this.get("onok")&&void 0!==(t=this.get("onok").call(this,e,this.settings.value))&&(e.cancel=!t);break;case 1:"function"==typeof this.get("oncancel")&&void 0!==(t=this.get("oncancel").call(this,e))&&(e.cancel=!t),e.cancel||(n.value=this.settings.value)}}}}),"object"==typeof module&&"object"==typeof module.exports?module.exports=y:"function"==typeof define&&define.amd?define([],function(){return y}):e.alertify||(e.alertify=y)}("undefined"!=typeof window?window:this);function today(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,i=e.getFullYear();return t<10&&(t="0"+t),n<10&&(n="0"+n),t+"/"+n+"/"+i}function countdown(){var e=10,t=setInterval(function(){second_left=--e;var n=new Date,i=new Date("2018-03-18").getTime()-n.getTime(),o=Math.floor(i/864e5),s=new Date(i),a=s.getHours(),l=s.getMinutes(),r=s.getSeconds();null!==document.getElementById("timer_div")&&(document.getElementById("timer_div").innerHTML=a+":"+l+":"+r,console.log("date1: "+o),r<=0&&(document.getElementById("timer_div").innerHTML="You are ready",clearInterval(t)))},1e3)}function getRandomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}function PrdRandom(e,t){return e>=t?t=1:Number.isInteger(e)&&(t-=e),t}function make_vr(e){return getRandomInt(100,150)}function create_cnt(e,t,n){e||(e="http://www.danielecolpo.it/ema_pp/img/map.png"),t||(t="basic title"),n||(n="basic text");return'<div class="badge"><div class="badge_img"><img src="'+e+'" alt=""></div><div class="badge_text"><div class="badge_text_title">'+t+'</div><div class="badge_text_1">'+n+'</div><div class="small_text"></div></div>'}function random_visitor(){return create_cnt("http://www.danielecolpo.it/ema_pp/img/data.png","in questo momento ci sono",make_vr()+" visitatori sul sito")}function random_product(e){var t=PrdRandom(e,10);return create_cnt("http://www.danielecolpo.it/ema_pp/img/calendar.png","in data "+today(),"rimangono soltanto "+t+" prodotti a prezzo scontato.")}function promotion(){return create_cnt("http://www.danielecolpo.it/ema_pp/img/calendar.png","data di scadenza della promozione online: ",""+today())}function random_buyer(){var e=getRandomInt(30,60);return create_cnt("http://www.danielecolpo.it/ema_pp/img/calendar.png","il "+today(),"hanno acquistato "+e+" clienti")}function random_city(){return create_cnt("http://www.danielecolpo.it/ema_pp/img/check.png","un ordine è appena stato effettuato da: ",""+["Agrigento","Alessandria","Ancona","Aosta","L'Aquila","Arezzo","Ascoli-Piceno","Asti","Avellino","Bari","Barletta-Andria-Trani","Belluno","Benevento","Bergamo","Biella","Bologna","Bolzano","Brescia","Brindisi","Cagliari","Caltanissetta","Campobasso","Carbonia Iglesias","Caserta","Catania","Catanzaro","Chieti","Como","Cosenza","Cremona","Crotone","Cuneo","Enna","Fermo","Ferrara","Firenze","Foggia","Forli-Cesena","Frosinone","Genova","Gorizia","Grosseto","Imperia","Isernia","La-Spezia","Latina","Lecce","Lecco","Livorno","Lodi","Lucca","Macerata","Mantova","Massa-Carrara","Matera","Medio Campidano","Messina","Milano","Modena","Monza-Brianza","Napoli","Novara","Nuoro","Ogliastra","Olbia Tempio","Oristano","Padova","Palermo","Parma","Pavia","Perugia","Pesaro-Urbino","Pescara","Piacenza","Pisa","Pistoia","Pordenone","Potenza","Prato","Ragusa","Ravenna","Reggio-Calabria","Reggio-Emilia","Rieti","Rimini","Roma","Rovigo","Salerno","Sassari","Savona","Siena","Siracusa","Sondrio","Taranto","Teramo","Terni","Torino","Trapani","Trento","Treviso","Trieste","Udine","Varese","Venezia","Verbania","Vercelli","Verona","Vibo-Valentia","Vicenza","Viterbo"][getRandomInt(0,109)])}function end_promo(){return create_cnt("http://www.danielecolpo.it/ema_pp/img/count.png","alla scadenza della promozione di oggi mancano: ",'<div id="timer_div"></div>')}function get_slide_type(e,t){switch(e){case 1:var n=random_visitor();break;case 2:n=random_product(t);break;case 3:n=promotion();break;case 4:n=random_buyer();break;case 5:n=random_city();break;case 6:n=end_promo()}return n}function show_slide(e,t,n){var i=t.length,o=Date.now(),s=Math.trunc((o-n)/5e3);console.log("start: "+n+"; Now: "+o+"; elapsed: "+s),alertify.set("notifier","position","bottom-left");var a=get_slide_type(t[e],s),l=alertify.message(a);l.delay(10),countdown(),l.ondismiss=function(){e++,console.log(a),e<i?(console.log(e),show_slide(e,t,n)):show_slide(e=0,t,n)}}function em_pp(e){show_slide(0,e,Date.now())}
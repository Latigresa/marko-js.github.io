(function(){function h(e,t){var n=new Error('Cannot find module "'+e+'"'+(t?' from "'+t+'"':""));return n.code="MODULE_NOT_FOUND",n}function p(e){this.id=this.filename=e[0],this.loaded=!1}function d(n,r,i){var s=i&&i.globals;t[n]=r;if(s){var o=e||global;for(var u=0;u<s.length;u++){var a=s[u];l[n]=o[a]=C(n,n)}}}function v(e,t){u[e]=t}function m(e,t){a[e]=t}function g(e,t,n,r){var i=t.charAt(0)==="."?e+t.substring(1):e+"/$/"+t;o[i]=[n],r!==undefined&&(o[e+"/$/"+r]=[n,t,i])}function y(e){var t,n=0,r=e.length;for(t=0;t<r;t++){var i=e[t];i!=="."&&(i===".."?n--:(e[n]=i,n++))}return n===1?"/":(n>2&&e[n-1].length===0&&n--,e.length=n,e.join("/"))}function b(e,t){return y(e.split("/").concat(t.split("/")))}function w(e){var t=e.lastIndexOf("."),n;return t===-1||(n=e.lastIndexOf("/"))!==-1&&n>t?null:e.substring(0,t)}function E(e,t){return e.substring(0,e.length-t)}function S(e,t,n,r){var i=r&&"/"+t+"@"+r+n;return e+=n,[e,i,undefined]}function x(e,t){var n=e.lastIndexOf("$");if(n===-1)return[e,e,undefined];n+=2;var r=e.indexOf("/",n+3),i,s,u;r===-1?(i=e,s="",u=e.substring(n)):(i=e.substring(0,r),s=e.substring(r),u=e.substring(n,r));var a=o[i];return a===undefined?undefined:S(a[2]||i,a[1]||u,s,a[0])}function T(e,t){e.charAt(e.length-1)==="/"&&(e=e.slice(0,-1));var r=n.length;for(var i=0;i<r;i++){var s=n[i]+e,u=N(s,t);if(u)return u}var a,f,l=e.indexOf("/");l===-1?(a=e,f=""):(a=e.substring(0,l),f=e.substring(l));var c=t+"/$/"+a,h=o[c];if(h!==undefined)return S(h[2]||c,h[1]||a,f,h[0]);var p=t.lastIndexOf("/");while(p!==-1){var d=-1;if(p>0){d=t.lastIndexOf("/",p-1);if(d!==-1&&p-d===2&&t.charAt(d+1)==="$"){p=d;continue}}c=t.substring(0,p)+"/$/"+a,h=o[c];if(h!==undefined)return S(h[2]||c,h[1]||a,f,h[0]);if(d===-1)break;p=d}return undefined}function N(e,n){var r,i;if(e.charAt(0)===".")r=x(b(n,e),e);else if(e.charAt(0)==="/")r=x(y(e.split("/")));else{i=a[e];if(i)return N(i);r=T(e,n)}if(!r)return undefined;var s=r[0],o=r[1];if(!o)return N(s);var f;(f=u[o])!==undefined&&(s=b(s,f),o=b(o,f)),i=a[o],i!==undefined&&(s=b(s+"/..",i),o=b(o+"/..",i));var l=t[o];if(l===undefined){var c;if((c=w(o))===null||(l=t[c])===undefined)return undefined;s=E(s,o.length-c.length),o=c}return r[0]=s,r[1]=o,r[2]=l,r}function C(e,t){if(!e)throw h("");var n=N(e,t);if(!n)throw h(e,t);var r=n[0],i=s[r];if(i!==undefined)return i.exports;var o=n[1];if(l.hasOwnProperty(o))return l[o];var u=n[2];return i=new p(n),s[r]=i,i.load(u),i.exports}function k(e,t){var n=!0;t&&(n=t.wait!==!1);if(n&&!r)return i.push(arguments);C(e,"/")}function L(e){if(r=e!==!1){for(var t=0;t<i.length;t++)k.apply(i,i[t]);i.length=0}}function A(e){n.push(e)}var e=typeof window=="undefined"?null:window;if(e&&e.$rmod)return;var t={},n=[],r=!1,i=[],s={},o={},u={},a={},f={},l={},c;p.cache=s,c=p.prototype,c.load=function(e){var t=this.id;if(e&&e.constructor===Function){var n=t.lastIndexOf("/"),r=t.substring(0,n),i=t,o=f[r]||(f[r]={}),u=function(e){return o[e]||(o[e]=C(e,r))};u.resolve=function(e){if(!e)throw h("");var t=N(e,r);if(!t)throw h(e,r);return t[0]},u.cache=s,this.exports={},e.call(this,u,this.exports,this,i,r)}else this.exports=e;this.loaded=!0};var O={def:d,dep:g,run:k,main:v,remap:m,require:C,resolve:N,join:b,ready:L,addSearchPath:A};e?e.$rmod=O:module.exports=O})();
$rmod.main("/src/components/app-header","index");
$rmod.main("/raptor-pubsub@1.0.5","lib/index");
$rmod.dep("/$/marko-widgets","raptor-pubsub","1.0.5");
$rmod.main("/events@1.0.2","events");
$rmod.dep("/$/marko-widgets","events","1.0.2");
$rmod.def("/events@1.0.2/events",function(e,t,n,r,i){function s(){this._events=this._events||{},this._maxListeners=this._maxListeners||undefined}function o(e){return typeof e=="function"}function u(e){return typeof e=="number"}function a(e){return typeof e=="object"&&e!==null}function f(e){return e===void 0}n.exports=s,s.EventEmitter=s,s.prototype._events=undefined,s.prototype._maxListeners=undefined,s.defaultMaxListeners=10,s.prototype.setMaxListeners=function(e){if(!u(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},s.prototype.emit=function(e){var t,n,r,i,s,u;this._events||(this._events={});if(e==="error")if(!this._events.error||a(this._events.error)&&!this._events.error.length)throw t=arguments[1],t instanceof Error?t:TypeError('Uncaught, unspecified "error" event.');n=this._events[e];if(f(n))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:r=arguments.length,i=new Array(r-1);for(s=1;s<r;s++)i[s-1]=arguments[s];n.apply(this,i)}else if(a(n)){r=arguments.length,i=new Array(r-1);for(s=1;s<r;s++)i[s-1]=arguments[s];u=n.slice(),r=u.length;for(s=0;s<r;s++)u[s].apply(this,i)}return!0},s.prototype.addListener=function(e,t){var n;if(!o(t))throw TypeError("listener must be a function");this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t;if(a(this._events[e])&&!this._events[e].warned){var n;f(this._maxListeners)?n=s.defaultMaxListeners:n=this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),typeof console.trace=="function"&&console.trace())}return this},s.prototype.on=s.prototype.addListener,s.prototype.once=function(e,t){function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}if(!o(t))throw TypeError("listener must be a function");var n=!1;return r.listener=t,this.on(e,r),this},s.prototype.removeListener=function(e,t){var n,r,i,s;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;n=this._events[e],i=n.length,r=-1;if(n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(n)){for(s=i;s-->0;)if(n[s]===t||n[s].listener&&n[s].listener===t){r=s;break}if(r<0)return this;n.length===1?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},s.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[e]&&delete this._events[e],this;if(arguments.length===0){for(t in this._events){if(t==="removeListener")continue;this.removeAllListeners(t)}return this.removeAllListeners("removeListener"),this._events={},this}n=this._events[e];if(o(n))this.removeListener(e,n);else while(n.length)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},s.prototype.listeners=function(e){var t;return!this._events||!this._events[e]?t=[]:o(this._events[e])?t=[this._events[e]]:t=this._events[e].slice(),t},s.listenerCount=function(e,t){var n;return!e._events||!e._events[t]?n=0:o(e._events[t])?n=1:n=e._events[t].length,n}});
$rmod.def("/raptor-pubsub@1.0.5/lib/raptor-pubsub",function(e,t,n,r,i){var s=e("/$/marko-widgets/$/events").EventEmitter,o={},u=new s;u.channel=function(e){var t;return e?t=o[e]||(o[e]=new s):t=new s,t},u.removeChannel=function(e){delete o[e]},n.exports=u});
$rmod.def("/raptor-pubsub@1.0.5/lib/index",function(e,t,n,r,i){var s=typeof window=="undefined"?global:window;n.exports=s.__RAPTOR_PUBSUB||(s.__RAPTOR_PUBSUB=e("./raptor-pubsub"))});
$rmod.main("/raptor-dom@1.1.0","raptor-dom-server");
$rmod.dep("/$/marko-widgets","raptor-dom","1.1.0");
$rmod.main("/try-require@1.2.1","index");
$rmod.dep("/$/marko-widgets/$/raptor-dom","try-require","1.2.1");
$rmod.def("/try-require@1.2.1/index",function(e,t,n,r,i){"use strict";var s=null,o=function(n,r){var i,o=r||e;try{i=o.resolve(n),s=null}catch(u){s=u}return i?o(i):undefined},u=function(n,r){var i,o=r||e;try{i=o.resolve(n),s=null}catch(u){s=u}return i};o.resolve=u,o.lastError=function(){return s},n.exports=o});
$rmod.def("/raptor-dom@1.1.0/ready",function(e,t,n,r,i){function l(){for(var e=0,t=f.length;e<t;e++){var n=f[e];n[0].call(n[1])}f=null}function c(){if(!s){if(!a.body)return setTimeout(c,1);s=!0,l()}}function h(){a.addEventListener?a.removeEventListener("DOMContentLoaded",h,!1):a.detachEvent("onreadystatechange",h),c()}function p(){if(s)return;try{a.documentElement.doScroll("left")}catch(e){setTimeout(p,1);return}c()}function d(){var e=!1;if(document.attachEvent?document.readyState==="complete":document.readyState!=="loading")c();else if(a.addEventListener)a.addEventListener("DOMContentLoaded",h,!1),u.addEventListener("load",h,!1);else if(a.attachEvent){a.attachEvent("onreadystatechange",h),u.attachEvent("onload",h);try{e=u.frameElement==null}catch(t){}a.documentElement.doScroll&&e&&p()}}var s=!1,o=!1,u=window,a=document,f=[];n.exports=function(e,t){if(s)return e.call(t);f.push([e,t]),o||(o=!0,d())}});
$rmod.remap("/raptor-dom@1.1.0/raptor-dom-server","raptor-dom-client");
$rmod.def("/raptor-dom@1.1.0/raptor-dom-client",function(e,t,n,r,i){function u(e){if(typeof e=="string"){var t=e;e=document.getElementById(t);if(!e)throw new Error('Target element not found: "'+t+'"')}return e}function a(e){o&&o.emit("dom/beforeRemove",{el:e})}var s=e("/$/marko-widgets/$/raptor-dom/$/try-require"),o=s("raptor-pubsub",e),f={forEachChildEl:function(e,t,n){f.forEachChild(e,t,n,1)},forEachChild:function(e,t,n,r){if(!e)return;var i=0,s=e.childNodes,o=s.length;for(;i<o;i++){var u=s[i];u&&(r==null||r==u.nodeType)&&t.call(n,u)}},detach:function(e){e=u(e),e.parentNode.removeChild(e)},appendTo:function(e,t){u(t).appendChild(u(e))},remove:function(e){e=u(e),a(e),e.parentNode&&e.parentNode.removeChild(e)},removeChildren:function(e){e=u(e);var t=0,n=e.childNodes,r=n.length;for(;t<r;t++){var i=n[t];i&&i.nodeType===1&&a(i)}e.innerHTML=""},replace:function(e,t){t=u(t),a(t),t.parentNode.replaceChild(u(e),t)},replaceChildrenOf:function(e,t){t=u(t),f.forEachChildEl(t,function(e){a(e)}),t.innerHTML="",t.appendChild(u(e))},insertBefore:function(e,t){t=u(t),t.parentNode.insertBefore(u(e),t)},insertAfter:function(e,t){t=u(t),e=u(e);var n=t.nextSibling,r=t.parentNode;n?r.insertBefore(e,n):r.appendChild(e)},prependTo:function(e,t){t=u(t),t.insertBefore(u(e),t.firstChild||null)}};f.ready=e("./ready"),n.exports=f});
$rmod.dep("/$/marko-widgets","raptor-util","1.0.10");
$rmod.def("/raptor-util@1.0.10/inherit",function(e,t,n,r,i){function o(e,t,n){var r=e.prototype,i=function(){};return i.prototype=t.prototype,e.prototype=new i,e.$super=t,n!==!1&&s(e.prototype,r),e.prototype.constructor=e,e}function u(e,t){return o(e,t,!0)}var s=e("./extend");n.exports=u,u._inherit=o});
$rmod.main("/listener-tracker@1.0.3","lib/listener-tracker");
$rmod.dep("/$/marko-widgets","listener-tracker","1.0.3");
$rmod.def("/listener-tracker@1.0.3/lib/listener-tracker",function(e,t,n,r,i){function u(e){this._target=e,this._listeners=[]}function a(){this._subscribeToList=[]}var s=0,o=1;u.prototype={_proxy:function(e,t,n){return this._target[e](t,n),this._listeners.push([t,n]),this},_remove:function(e){var t=this._target,n=this._listeners;this._listeners=n.filter(function(n){var r=n[s],i=n[o];return e(r,i)?(t.removeListener(r,i),!1):!0})},on:function(e,t){return this._proxy("on",e,t)},once:function(e,t){return this._proxy("once",e,t)},removeListener:function(e,t){return typeof e=="function"&&(t=e,e=null),t&&e?this._remove(function(n,r){return e===n&&t===r}):t?this._remove(function(e,n){return t===n}):e&&this.removeAllListeners(e),this},removeAllListeners:function(e){var t=this._listeners,n=this._target;if(e)this._remove(function(t,n){return e===t});else{for(var r=t.length-1;r>=0;r--){var i=t[r];n.removeListener(i[s],i[o])}this._listeners.length=0}return this}},u.prototype.addListener=u.prototype.on,a.prototype={subscribeTo:function(e){var t,n=this._subscribeToList;for(var r=0,i=n.length;r<i;r++){var s=n[r];if(s._target===e){t=s;break}}return t||(t=new u(e),t.once("destroy",function(){t.removeAllListeners();for(var r=n.length-1;r>=0;r--)if(n[r]._target===e){n.splice(r,1);break}}),n.push(t)),t},removeAllListeners:function(e,t){var n=this._subscribeToList,r;if(e)for(r=n.length-1;r>=0;r--){var i=n[r];if(i._target===e){i.removeAllListeners(t),i._listeners.length||n.splice(r,1);break}}else{for(r=n.length-1;r>=0;r--)n[r].removeAllListeners();n.length=0}}},t.wrap=function(e){var t=new u(e);return e.once("destroy",function(){t._listeners.length=0}),t},t.createTracker=function(){return new a}});
$rmod.def("/raptor-util@1.0.10/arrayFromArguments",function(e,t,n,r,i){var s=[].slice;n.exports=function(e,t){return e?t?t<e.length?s.call(e,t):[]:s.call(e):[]}});
$rmod.def("/raptor-util@1.0.10/extend",function(e,t,n,r,i){n.exports=function(t,n){t||(t={});if(n)for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);return t}});
$rmod.main("/morphdom@1.0.1","lib/index");
$rmod.dep("/$/marko-widgets","morphdom","1.0.1");
$rmod.def("/morphdom@1.0.1/lib/index",function(e,t,n,r,i){function o(e){s||(s=document.createRange(),s.selectNode(document.body));var t;return s.createContextualFragment?t=s.createContextualFragment(e):(t=document.createElement("body"),t.innerHTML=e),t.childNodes[0]}function a(){}function f(e,t){var n=t.attributes,r,i,s,o,u={};for(r=n.length-1;r>=0;r--)i=n[r],i.specified!==!1&&(s=i.name,o=i.value,u[s]=!0,e.getAttribute(s)!==o&&e.setAttribute(s,o));n=e.attributes;for(r=n.length-1;r>=0;r--)i=n[r],i.specified!==!1&&(s=i.name,u.hasOwnProperty(s)||e.removeAttribute(s))}function l(e,t){var n=e.firstChild;while(n){var r=n.nextSibling;t.appendChild(n),n=r}return t}function c(e,t,n){function v(e,t){var n=e.id;n?r[n]=e:t||s(e);if(e.nodeType===1){var i=e.firstChild;while(i)v(i,t||n),i=i.nextSibling}}function m(e){if(e.nodeType===1){var t=e.firstChild;while(t)t.id||(s(t),m(t)),t=t.nextSibling}}function g(e,t,n){if(p(e)===!1)return;t.removeChild(e),n?e.id||(s(e),m(e)):v(e)}function y(e,t,n,s){t.id&&delete r[t.id];if(!s){if(c(e,t)===!1)return;f(e,t);if(h(e,t)===!1)return}if(e.tagName!="TEXTAREA"){var o=t.firstChild,a=e.firstChild,l,p,d,v,m;e:while(o){d=o.nextSibling,l=o.id;while(a){var b=a.id;p=a.nextSibling;if(!n&&b&&(m=i[b])){m.parentNode.replaceChild(a,m),y(a,m,n),a=p;continue}var w=a.nodeType;if(w===o.nodeType){var E=!1;w===1?(a.tagName===o.tagName&&(b||l?l===b&&(E=!0):E=!0),E&&y(a,o,n)):w===3&&(E=!0,a.nodeValue=o.nodeValue);if(E){o=d,a=p;continue e}}g(a,e,n),a=p}l&&((v=r[l])?(y(v,o,!0),o=v):i[l]=o),e.appendChild(o),o=d,a=p}while(a)p=a.nextSibling,g(a,e,n),a=p}var S=u[e.tagName];S&&S(e,t)}n||(n={}),typeof t=="string"&&(t=o(t));var r={},i={},s=n.onNodeDiscarded||a,c=n.onBeforeMorphEl||a,h=n.onBeforeMorphElChildren||a,p=n.onBeforeNodeDiscarded||a,d=n.childrenOnly===!0,b=e,w=b.nodeType,E=t.nodeType;if(!d)if(w===1)E===1?e.tagName!==t.tagName&&(s(e),b=l(e,document.createElement(t.tagName))):b=t;else if(w===3){if(E===3)return b.nodeValue=t.nodeValue,b;b=t}if(b===t)s(e);else{y(b,t,!1,d);for(var S in r)if(r.hasOwnProperty(S)){var x=r[S];s(x),m(x)}}return!d&&b!==e&&e.parentNode&&e.parentNode.replaceChild(b,e),b}var s,u={OPTION:function(e,t){(e.selected=t.selected)?e.setAttribute("selected",""):e.removeAttribute("selected","")},INPUT:function(e,t){e.checked=t.checked,e.value=t.value,t.hasAttribute("checked")||e.removeAttribute("checked"),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value=n,e.firstChild&&(e.firstChild.nodeValue=n)}};n.exports=c});
$rmod.def("/raptor-polyfill@1.0.2/array/_toObject",function(e,t,n,r,i){var s="a"[0]!="a";n.exports=function(e){if(e==null)throw new TypeError("can't convert "+e+" to object");return s&&typeof e=="string"&&e?e.split(""):Object(e)}});
$rmod.dep("/$/marko-widgets","raptor-polyfill","1.0.2");
$rmod.def("/raptor-polyfill@1.0.2/array/forEach",function(e,t,n,r,i){if(!Array.prototype.forEach){var s=e("./_toObject");Array.prototype.forEach=function(t,n){var r=s(this),i=-1,o=r.length>>>0;if(typeof t!="function")throw new TypeError;while(++i<o)i in r&&t.call(n,r[i],i,r)}}});
$rmod.def("/raptor-polyfill@1.0.2/string/endsWith",function(e,t,n,r,i){String.prototype.endsWith||(String.prototype.endsWith=function(e,t){var n=this;return t&&(n=n.substring(t)),n.length<e.length?!1:n.slice(0-e.length)==e})});
$rmod.main("/raptor-logging@1.0.6","lib/index");
$rmod.dep("/$/marko-widgets","raptor-logging","1.0.6");
$rmod.def("/raptor-logging@1.0.6/lib/raptor-logging",function(e,t,n,r,i){var s="./raptor-logging-impl";try{s=e.resolve(s)}catch(o){s=null}var u=function(){return!1},a={isTraceEnabled:u,isDebugEnabled:u,isInfoEnabled:u,isWarnEnabled:u,isErrorEnabled:u,isFatalEnabled:u,dump:u,trace:u,debug:u,info:u,warn:u,error:u,fatal:u},f={logger:function(){return a},configure:u,voidLogger:a};n.exports=s?e(s):f});
$rmod.def("/raptor-logging@1.0.6/lib/index",function(e,t,n,r,i){var s=typeof window=="undefined"?global:window;n.exports=s.__RAPTOR_LOGGING||(s.__RAPTOR_LOGGING=e("./raptor-logging"))});
$rmod.main("/raptor-renderer@1.4.3","lib/raptor-renderer");
$rmod.dep("/$/marko-widgets","raptor-renderer","1.4.3");
$rmod.main("/process@0.6.0","index");
$rmod.dep("","process","0.6.0");
$rmod.remap("/process@0.6.0/index","browser");
$rmod.def("/process@0.6.0/browser",function(e,t,n,r,i){function o(){}var s=n.exports={};s.nextTick=function(){var e=typeof window!="undefined"&&window.setImmediate,t=typeof window!="undefined"&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||t===null)&&e.data==="process-tick"){e.stopPropagation();if(n.length>0){var r=n.shift();r()}}},!0),function(t){n.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=o,s.once=o,s.off=o,s.emit=o,s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")}});
$rmod.main("/async-writer@1.4.0","lib/async-writer");
$rmod.dep("/$/marko-widgets/$/raptor-renderer","async-writer","1.4.0");
$rmod.def("/async-writer@1.4.0/lib/AsyncWriter",function(e,t,n,r,i){function o(e){this.str="",this.events=e,this.finished=!1}function u(e){this._buffer="",this._wrapped=e}function c(e){this.asyncWriter=e,this.writer=e.writer,this.finished=!1,this.flushed=!1,this.next=null,this.ready=!0}function h(e,t){var n=e.next;n&&(n.ready=!0,n.writer=n.asyncWriter.writer=t,n.flush())}function p(e,t){c.call(this,e),this.buffer=t}function d(e){c.call(this,e)}function v(e,t,n,r){this.data={},this.global=this.attributes=t||(t={}),this._af=this._prevAF=this._parentAF=null,this._isSync=!1,this._last=null,t.events||(t.events=e&&e.on?e:new a),this._events=t.events,n?this._async=n:this._async=t.async||(t.async={remaining:0,ended:!1,last:0,finished:!1});var i;e?r&&(i=e,e=new u(e)):e=new o(this._events),this.stream=i||e,this.writer=this._stream=e}var s=e("process");"use strict",o.prototype={end:function(){this.finished=!0,this.events&&this.events.emit("finish")},write:function(e){return this.str+=e,this},toString:function(){return this.str}},u.prototype={write:function(e){this._buffer+=e},flush:function(){this._buffer.length!==0&&(this._wrapped.write(this._buffer),this._buffer="",this._wrapped.flush&&this._wrapped.flush())},end:function(){this.flush(),this._wrapped.isTTY||this._wrapped.end()},on:function(e,t){return this._wrapped.on(e,t)},once:function(e,t){return this._wrapped.once(e,t)}};var a=e("/$/marko-widgets/$/events").EventEmitter,f=typeof s!="undefined"&&s.env.NODE_ENV==="development",l={write:function(){}};p.prototype={flush:function(){var e=this.writer,t=this.buffer.toString();t.length!==0&&e.write(t),this.flushed=!0,h(this,e)}},d.prototype={end:function(){this.finished||(this.finished=!0,this.ready&&this.flush())},flush:function(){if(!this.finished)return;this.flushed=!0;var e=this.writer;this.writer=this.asyncWriter.writer=l,h(this,e)}},v.DEFAULT_TIMEOUT=1e4,v.prototype={constructor:v,isAsyncWriter:v,sync:function(){this._isSync=!0},getAttributes:function(){return this.global},getAttribute:function(e){return this.global[e]},write:function(e){return e!=null&&this.writer.write(e.toString()),this},getOutput:function(){return this.writer.toString()},captureString:function(e,t){var n=new o;return this.swapWriter(n,e,t),n.toString()},swapWriter:function(e,t,n){var r=this.writer;this.writer=e,t.call(n),this.writer=r},createNestedWriter:function(e){var t=this,n=new v(e,t.global);return n._stream=t._stream,n.stream=t.stream,n},beginAsync:function(e){if(this._isSync)throw new Error("beginAsync() not allowed when using renderSync()");var t=!0,n=this.createNestedWriter(this.writer),r=this.writer=new o,i=new d(n),s=new p(this,r);i.next=s,n._af=i,n._parentAF=i;var u=this._prevAF||this._parentAF;return u&&(s.next=u.next,u.next=i,u.flushed||(t=!1)),i.ready=t,this._prevAF=s,n.handleBeginAsync(e,this),n},handleBeginAsync:function(e,t){var n=this,r=n._async,i,s;r.remaining++,e!=null&&(typeof e=="number"?i=e:(i=e.timeout,e.last===!0&&(i==null&&(i=0),r.last++),s=e.name)),i==null&&(i=v.DEFAULT_TIMEOUT),n.stack=f?(new Error).stack:null,n.name=s,i>0&&(n._timeoutId=setTimeout(function(){n.error(new Error("Async fragment "+(s?"("+s+") ":"")+"timed out after "+i+"ms"))},i)),this._events.emit("beginAsync",{writer:this,parentWriter:t})},on:function(e,t){return e==="finish"&&this.writer.finished?(t(),this):(this._events.on(e,t),this)},once:function(e,t){return e==="finish"&&this.writer.finished?(t(),this):(this._events.once(e,t),this)},onLast:function(e){var t=this._last;if(!t){t=this._last=[];var n=0,r=function i(){if(n===t.length)return;var e=t[n++];e(i)};this.once("last",function(){r()})}t.push(e)},emit:function(e){var t=this._events;switch(arguments.length){case 0:t.emit();break;case 1:t.emit(e);break;default:t.emit.apply(t,arguments)}return this},removeListener:function(){var e=this._events;return e.removeListener.apply(e,arguments),this},pipe:function(e){return this._stream.pipe(e),this},error:function(e){try{var t=this.stack,n=this.name;e=new Error("Async fragment failed"+(n?" ("+n+")":"")+". Exception: "+(e.stack||e)+(t?"\nCreation stack trace: "+t:"")),this.emit("error",e)}finally{this.end()}},end:function(e){e&&this.write(e);var t=this._af;return t?(t.end(),this.handleEnd(!0)):this.handleEnd(!1),this},handleEnd:function(e){var t=this._async;if(t.finished)return;var n;if(e){var r=this._timeoutId;r&&clearTimeout(r),n=--t.remaining}else n=t.remaining,t.ended=!0;t.ended&&(!t.lastFired&&t.remaining-t.last===0&&(t.lastFired=!0,t.last=0,this._events.emit("last")),n===0&&(t.finished=!0,this._finish()))},_finish:function(){this._stream.end?this._stream.end():this._events.emit("finish")},flush:function(){if(!this._async.finished){var e=this._stream;e&&e.flush&&e.flush()}}},v.prototype.w=v.prototype.write,v.enableAsyncStackTrace=function(){f=!0},n.exports=v});
$rmod.def("/async-writer@1.4.0/lib/async-writer",function(e,t,n,r,i){"use strict";var s=e("./AsyncWriter");t.create=function(e,t){var n,r;t&&(n=t.global,r=t.buffer===!0);var i=new s(e,null,null,r);return n&&(i.global=i.attributes=n),i},t.enableAsyncStackTrace=function(){s.INCLUDE_STACK=!0},t.AsyncWriter=s});
$rmod.remap("/raptor-renderer@1.4.3/lib/RenderResult","RenderResult-browser");
$rmod.def("/raptor-renderer@1.4.3/lib/RenderResult-browser",function(e,t,n,r,i){"use strict";function u(e,t){if(!e._added)throw new Error("Cannot call "+t+"() until after HTML fragment is added to DOM.")}function a(e,t){this.html=e,this.out=t,this._node=undefined;var n=t.global.widgets;this._widgetDefs=n?n.widgets:null}var s=e("/$/marko-widgets/$/raptor-dom"),o=e("/$/marko-widgets/$/raptor-pubsub");a.prototype={getWidget:function(){u(this,"getWidget");var e=this.out.__rerenderWidget;if(e)return e;var t=this._widgetDefs;if(!t)throw new Error("No widget rendered");return t.length?t[0].widget:undefined},getWidgets:function(e){u(this,"getWidgets");var t=this._widgetDefs;if(!t)throw new Error("No widget rendered");var n,r;if(e){n=[];for(r=0;r<t.length;r++){var i=t[r].widget;e(i)&&n.push(i)}}else{n=new Array(t.length);for(r=0;r<t.length;r++)n[r]=t[r].widget}return n},afterInsert:function(){return this._added=!0,o.emit("raptor-renderer/renderedToDOM",{node:this.getNode(),context:this.out,out:this.out}),this},appendTo:function(e){return s.appendTo(this.getNode(),e),this.afterInsert()},replace:function(e){return s.replace(this.getNode(),e),this.afterInsert()},replaceChildrenOf:function(e){return s.replaceChildrenOf(this.getNode(),e),this.afterInsert()},insertBefore:function(e){return s.insertBefore(this.getNode(),e),this.afterInsert()},insertAfter:function(e){return s.insertAfter(this.getNode(),e),this.afterInsert()},prependTo:function(e){return s.prependTo(this.getNode(),e),this.afterInsert()},getNode:function(){var e=this._node,t,n;if(e===undefined){if(this.html){n=document.createElement("body"),n.innerHTML=this.html;if(n.childNodes.length==1)e=n.childNodes[0];else{e=document.createDocumentFragment();while(t=n.firstChild)e.appendChild(t)}}else e=document.createDocumentFragment();this._node=e}return e},toString:function(){return this.html}},n.exports=a});
$rmod.def("/raptor-renderer@1.4.3/lib/raptor-renderer",function(e,t,n,r,i){function f(e){return function(r,i,s){switch(arguments.length){case 0:return t.render(e);case 1:return t.render(e,r);case 2:return t.render(e,r,i);case 3:return t.render(e,r,i,s);default:throw new Error("Illegal arguments")}}}var s=e("process");"use strict";var o=e("/$/marko-widgets/$/raptor-renderer/$/async-writer"),u=e("./RenderResult"),a=e("/$/marko-widgets/$/raptor-util/extend");t.render=function(e,t,n){var r=arguments.length,i;r>1&&(i=arguments[r-1]);var s=n,f=t||{};typeof i=="function"?r===3&&(s=o.create()):(i=null,s||(s=o.create()));var l=f.$global;l&&(a(s.global,l),delete f.$global);if(typeof e!="function"){var c=e.renderer||e.render||e.process;if(typeof c!="function")throw new Error("Invalid renderer");c.call(e,f,s)}else e(f,s);if(!i)return s.end(),new u(s.getOutput(),s);s.on("finish",function(){i(null,new u(s.getOutput(),s))}).on("error",i),s.end()},t.renderable=function(e,t){e.renderer=t,e.render=f(t)},t.createRenderFunc=f});
$rmod.dep("/$/marko-widgets","raptor-async","1.1.2");
$rmod.def("/raptor-async@1.1.2/AsyncValue",function(e,t,n,r,i){function c(e){this.data=undefined,this.error=undefined,this._callbacks=undefined,this._state=o,this._timestamp=undefined,e&&(this._loader=e.loader,this._scope=e.scope,this._ttl=e.ttl||undefined)}function h(e,t,n){var r=e._callbacks;if(r!==undefined){e._callbacks=undefined;for(var i=0;i<r.length;i++){var s=r[i];s.callback.call(s.scope,t,n)}}}function p(e){e._state=u,e._loader.call(e._scope||e,function(t,n){t?e.reject(t):e.resolve(n)})}function d(e,t,n){e._callbacks===undefined&&(e._callbacks=[]),e._callbacks.push({callback:t,scope:n||e._scope||e})}function v(e){var t=e._ttl;return t!==undefined&&l()-e._timestamp>t?(e.unsettle(),!0):!1}var s=e("process"),o=0,u=1,a=2,f=3,l=Date.now||function(){return(new Date).getTime()};c.prototype={isResolved:function(){return this._state===a&&!v(this)},isRejected:function(){return this._state===f&&!v(this)},isLoading:function(){return this._state===u},isSettled:function(){return this._state>u&&!v(this)},load:function(e,t){if(!this._loader)throw new Error("Cannot call load when loader is not configured");return this.isSettled()&&this.unsettle(),e&&d(this,e,t),this._state!==u&&p(this),this.data},done:function(e,t){if(!e||e.constructor!==Function)throw new Error("Invalid callback: "+e);if(this.isSettled())return e.call(t||this._scope||this,this.error,this.data);s.domain&&(e=s.domain.bind(e)),d(this,e,t),this._loader&&this._state!==u&&p(this)},reject:function(e){this.error=e,this.data=undefined,this._ttl!==undefined&&(this._timestamp=l()),this._state=this._loader?o:f,h(this,e,null)},resolve:function(e){this.error=undefined,this.data=e,this._ttl!==undefined&&(this._timestamp=l()),this._state=a,h(this,null,e)},reset:function(){this.unsettle(),this.callbacks=undefined},unsettle:function(){this._state=o,this.error=undefined,this.data=undefined,this._timestamp=undefined}},c.create=function(e){return new c(e)},n.exports=c});
$rmod.dep("/$/marko-widgets","marko","2.7.20");
$rmod.dep("/$/marko-widgets/$/marko","async-writer","1.4.0");
$rmod.dep("/$/marko-widgets/$/marko","events","1.0.2");
$rmod.dep("/$/marko-widgets/$/marko","raptor-util","1.0.10");
$rmod.def("/raptor-util@1.0.10/escapeXml",function(e,t,n,r,i){function l(e){return f[e]}function c(e){return typeof e=="string"?s.test(e)?e.replace(o,l):e:e==null?"":e.toString()}function h(e){return typeof e=="string"?u.test(e)?e.replace(a,l):e:e==null?"":e.toString()}var s=/[&<]/,o=/[&<]/g,u=/[&<>\"\'\n]/,a=/[&<>\"\'\n]/g,f={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;","\n":"&#10;"};n.exports=c,c.attr=h});
$rmod.def("/raptor-util@1.0.10/attr",function(e,t,n,r,i){var s=e("./escapeXml").attr;n.exports=function(e,t,n){if(t===!0)t="";else{if(t==null||t===""||t===!1)return"";t='="'+(n===!1?t:s(t))+'"'}return" "+e+t}});
$rmod.def("/raptor-util@1.0.10/attrs",function(e,t,n,r,i){var s=e("./attr");n.exports=function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+=s(n,e[n]));return t}});
$rmod.def("/raptor-util@1.0.10/forEach",function(e,t,n,r,i){n.exports=function(e,t,n){e!=null&&(e.forEach?e:[e]).forEach(t,n)}});
$rmod.dep("/$/marko-widgets/$/marko","raptor-logging","1.0.6");
$rmod.remap("/marko-widgets@5.0.0-beta.9/taglib/helpers/getDynamicClientWidgetPath","getDynamicClientWidgetPath-browser");
$rmod.def("/marko-widgets@5.0.0-beta.9/taglib/helpers/getDynamicClientWidgetPath-browser",function(e,t,n,r,i){n.exports=function(t){return t}});
$rmod.run("marko-widgets/lib/client-init");
$rmod.dep("","raptor-pubsub","1.0.5");
$rmod.dep("","events","1.0.2");
$rmod.dep("","raptor-dom","1.1.0");
$rmod.dep("","try-require","1.2.1");
$rmod.dep("","raptor-util","1.0.10");
$rmod.dep("","listener-tracker","1.0.3");
$rmod.dep("","morphdom","1.0.1");
$rmod.dep("","raptor-polyfill","1.0.2");
$rmod.dep("","raptor-logging","1.0.6");
$rmod.dep("","raptor-renderer","1.4.3");
$rmod.dep("","async-writer","1.4.0");
$rmod.dep("","raptor-async","1.1.2");
$rmod.def("/marko-widgets@5.0.0-beta.9/lib/widget-args-id",function(e,t,n,r,i){var s=e("marko-widgets/lib/repeated-id");n.exports=function(t,n){var r=t.id;if(r){var i=t.out,o=t.scope;if(r.charAt(0)==="!")return r.substring(1);var u;return r.endsWith("[]")?u=s.nextId(i,o,r):u=o+"-"+r,n&&(t.id="!"+u),u}}});
$rmod.def("/marko-widgets@5.0.0-beta.9/taglib/helpers/widgetBody",function(e,t,n,r,i){var s=e("marko-widgets"),o=e("raptor-util/escapeXml"),u=typeof window!="undefined";n.exports=function(t,n,r,i){if(n!=null&&r==null){if(u){var a=document.getElementById(n);if(a){var f=s.getWidgetsContext(t);f.addPreservedDOMNode(a,!0)}}}else typeof r=="function"?r(t,i):(typeof r=="string"&&(r=o(r)),t.write(r))}});
$rmod.def("/marko-widgets@5.0.0-beta.9/taglib/widget-tag",function(e,t,n,r,i){"use strict";function l(e,t){var n=document.getElementById(e),r;return n&&(r=n.__widget)&&r.__type===t?r:null}function c(e,t,n,r){var i=e.el.tagName;t.write("<"+i+' id="'+e.id+'">');var s=!1;r&&e.bodyEl&&(s=!0,a(t,e.bodyEl.id,r,e)),t.write("</"+i+">"),e._reset(),n.addPreservedDOMNode(e.el,null,s)}var s=e("marko-widgets"),o=e("raptor-util/extend"),u=e("marko-widgets/lib/widget-args-id"),a=e("./helpers/widgetBody"),f={elId:function(){}};n.exports=function(t,n){var r=n.global;r.__widgetsBeginAsyncAdded||(r.__widgetsBeginAsyncAdded=!0,n.on("beginAsync",function(e){var t=e.parentWriter,i=e.writer,o=r.widgets,u;if(o&&(u=o.widgetStack).length){var a=new s.WidgetsContext(n);a.widgetStack=[u[0]],i.data.widgets=a}i.data.widgetArgs=t.data.widgetArgs}));var i=t.module,a=t.config||t._cfg,h=t.state||t._state,p=t.props||t._props,d=n.data.widgetArgs,v=t.body,m=t._body,g=t.id,y,b=t.hasDomEvents,w,E,S,x;if(d){delete n.data.widgetArgs,E=d.scope,g=g||u(d),y=d.extend,w=d.customEvents;if(S=d.extendState)h?o(h,S):h=S;if(x=d.extendConfig)a?o(a,x):a=x}var T=r.__rerenderWidget,N=r.__rerender===!0,C=s.getWidgetsContext(n);if(!g){var k=C.getCurrentWidget();k&&(g=k.nextId())}var L;T?(L=T,g=T.id,delete r.__rerenderWidget):N&&(L=l(g,i));if(!g&&t.hasOwnProperty("id"))throw new Error('Invalid widget ID for "'+i+'"');if(i){var A=!0;if(L&&!T){if(h){L._replaceState(h);if(L._processUpdateHandlers()===!0){A=!1,c(L,n,C,m);return}}if(!L.isDirty()&&!L.shouldUpdate(p,h)){A=!1,c(L,n,C,m);return}}L&&L._emitLifecycleEvent("beforeUpdate");var O=C.beginWidget({type:i,id:g,config:a,state:h,hasDomEvents:b,customEvents:w,scope:E,createWidget:t.createWidget,extend:y,existingWidget:L,bodyElId:v});A&&(t.renderBody(n,O),s.writeDomEventsEl(O,n)),O.end()}else t.renderBody(n,f)}});
$rmod.dep("/$/marko","async-writer","1.4.0");
$rmod.dep("/$/marko","events","1.0.2");
$rmod.dep("/$/marko","raptor-util","1.0.10");
$rmod.dep("/$/marko","raptor-logging","1.0.6");
$rmod.def("/src/components/app-header/template.marko",function(e,t,n,r,i){function s(t){function m(){typeof window!="undefined"&&s.registerWidget(a,e("./index"))}var n=t.s,r=t.e,i=t.ne,s=e("/$/marko-widgets"),o=s.attrs,u=e("/$/marko-widgets/taglib/helpers/getDynamicClientWidgetPath-browser"),a="/src/components/app-header/index",f=t.r,l=f(e("marko-widgets/taglib/widget-tag")),c=t.t,h=t.a,p=t.as,d=t.f,v=t.x;return function(t,n){m&&(m(),m=null),c(n,l,{id:"header",module:a,_cfg:t.widgetConfig,_state:t.widgetState,_props:t.widgetProps,_body:t.widgetBody},function(e,n){e.w("<header"+h("id",n.elId())+p(o(n))+'><div class="container"><div id="logo">'),t.site.logo&&e.w('<a href="/"><img src="/images/logo-header.png"'+h("alt",t.site.title)+"></a>"),e.w('</div><nav role="navigation" id="nav" class="mobile-hidden"><ul class="main-navigation">'),d(t.site.navLinks,function(n){e.w("<li><a"+h("href",n.url)+h("class",n.name===t.activeSection?"active":"")+">"+v(n.title)+"</a></li>")}),e.w('</ul></nav><div style="clear: both"></div></div></header>')})}}(n.exports=e("/$/marko").c(r)).c(s)});
$rmod.def("/src/components/app-header/index",function(e,t,n,r,i){n.exports=e("/$/marko-widgets").defineComponent({template:e("./template.marko"),init:function(){this.mobileMenuHidden=!0},handleToggleMenuClick:function(){var e=document.getElementById("nav");this.mobileMenuHidden=!this.mobileMenuHidden,e.className=this.mobileMenuHidden?"mobile-hidden":""}})});
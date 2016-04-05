$_mod.main("/marko-widgets$6.0.2","lib/index");
$_mod.def("/marko-widgets$6.0.2/lib/addEventListener",function(e,t,n,o,r){function i(e,t,n){this._info=[e,t,n]}function a(e,t,n){this._info=[e,t,n]}function u(){var e=window.event;return e.target=e.target||e.srcElement,e.preventDefault=e.preventDefault||function(){e.returnValue=!1},e.stopPropagation=e.stopPropagation||function(){e.cancelBubble=!0},e.key=(e.which+1||e.keyCode+1)-1||0,e}var c=document.body||document.createElement("div");i.prototype={remove:function(){var e=this._info,t=e[0],n=e[1],o=e[2];t.detachEvent(n,o)}},a.prototype={remove:function(){var e=this._info,t=e[0],n=e[1],o=e[2];t.removeEventListener(n,o)}},c.addEventListener?n.exports=function(e,t,n){return e.addEventListener(t,n,!1),new a(e,t,n)}:n.exports=function(e,t,n){function o(){var e=u();n(e)}return t="on"+t,e.attachEvent(t,o),new i(e,t,o)}});
$_mod.main("/marko-widgets$6.0.2/lib","");
$_mod.def("/marko-widgets$6.0.2/lib/update-manager",function(e,u,n,t,a){function l(){if(y.length)try{d(y)}finally{s=!1}}function i(){s||(s=!0,p.nextTick(l))}function r(e){i(),h||(h=new c),h.done(e)}function d(e){for(var u=0;u<e.length;u++){var n=e[u];n.__updateQueued=!1,n.update()}e.length=0}function f(e){var u=0===g.length,n={queue:null};g.push(n);try{e()}finally{try{n.queue&&d(n.queue)}finally{g.length--,u&&h&&(h.resolve(),h=null)}}}function o(e){if(!e.__updateQueued){e.__updateQueued=!0;var u=g.length;if(u){var n=g[u-1];n.queue?n.queue.push(e):n.queue=[e]}else i(),y.push(e)}}var p=e("process"),c=e("/raptor-async$1.1.2/AsyncValue"),h=null,h=null,s=!1,g=[],y=[];u.queueWidgetUpdate=o,u.batchUpdate=f,u.onAfterUpdate=r});
$_mod.def("/marko-widgets$6.0.2/lib/repeated-id",function(e,t,n,o,d){function i(){this.nextIdLookup={}}i.prototype={nextId:function(e,t){var n=e+"-"+t,o=this.nextIdLookup[n];return o=null==o?this.nextIdLookup[n]=0:++this.nextIdLookup[n],n.slice(0,-2)+"["+o+"]"}},t.nextId=function(e,t,n){var o=e.global.__repeatedId;return null==o&&(o=e.global.__repeatedId=new i),o.nextId(t,n)}});
$_mod.def("/marko-widgets$6.0.2/lib/WidgetDef",function(t,s,i,e,n){function d(t,s,i){this.type=t.type,this.id=t.id,this.config=t.config,this.state=t.state,this.scope=t.scope,this.domEvents=null,this.customEvents=t.customEvents,this.bodyElId=t.bodyElId,this.children=[],this.end=s,this.extend=t.extend,this.out=i,this.hasDomEvents=t.hasDomEvents,this._nextId=0}t("/raptor-polyfill$1.0.2/string/endsWith");var o=t("/marko-widgets$6.0.2/lib/repeated-id");d.prototype={addChild:function(t){this.children.push(t)},elId:function(t){return null==t?this.id:"string"==typeof t&&t.endsWith("[]")?o.nextId(this.out,this.id,t):this.id+"-"+t},addDomEvent:function(t,s,i){this.domEvents||(this.domEvents=[]),this.domEvents.push(t),this.domEvents.push(s),this.domEvents.push(i)},getDomEventsAttr:function(){return this.domEvents?this.domEvents.join(","):void 0},nextId:function(){return this.id+"-w"+this._nextId++}},i.exports=d});
$_mod.def("/marko-widgets$6.0.2/lib/uniqueId-browser",function(i,n,o,r,w){var I=window.MARKO_WIDGETS_UNIQUE_ID;if(!I){var _=0;window.MARKO_WIDGETS_UNIQUE_ID=I=function(){return"wc"+_++}}o.exports=I});
$_mod.def("/marko-widgets$6.0.2/lib/WidgetsContext",function(t,e,i,n,s){function d(t){h.call(this),this.out=t,this.widgets=[],this.widgetStack=[],this.preserved=null,this.reusableWidgets=null,this.reusableWidgetsById=null,this.widgetsById={}}var r=t("/marko-widgets$6.0.2/lib/WidgetDef"),g=t("/marko-widgets$6.0.2/lib/uniqueId-browser"),u=t("/marko-widgets$6.0.2/lib/init-widgets-browser"),h=t("/events$1.1.0/events").EventEmitter,o=t("/raptor-util$1.0.10/inherit"),a=1,l=2,c=4;d.prototype={getWidgets:function(){return this.widgets},getWidgetStack:function(){return this.widgetStack},getCurrentWidget:function(){return this.widgetStack.length?this.widgetStack[this.widgetStack.length-1]:void 0},beginWidget:function(t,e){function i(){s.length=d}var n=this,s=n.widgetStack,d=s.length,g=d?s[d-1]:null;t.id||(t.id=n._nextWidgetId()),t.parent=g;var u=new r(t,i,this.out);return this.widgetsById[t.id]=u,g?g.addChild(u):n.widgets.push(u),s.push(u),this.emit("beginWidget",u),u},getWidget:function(t){return this.widgetsById[t]},hasWidgets:function(){return 0!==this.widgets.length},clearWidgets:function(){this.widgets=[],this.widgetStack=[]},_nextWidgetId:function(){return g(this.out)},initWidgets:function(t){var e=this.widgets;u.initClientRendered(e,t),this.clearWidgets()},onBeginWidget:function(t){this.on("beginWidget",t)},isPreservedEl:function(t){var e=this.preserved;return e&&e[t]&a},isPreservedBodyEl:function(t){var e=this.preserved;return e&&e[t]&l},hasUnpreservedBody:function(t){var e=this.preserved;return e&&e[t]&c},addPreservedDOMNode:function(t,e,i){var n=this.preserved||(this.preserved={}),s=e?l:a;i&&(s|=c),n[t.id]=s}},o(d,h),d.getWidgetsContext=function(t){var e=t.global;return t.data.widgets||e.widgets||(e.widgets=new d(t))},i.exports=d});
$_mod.def("/marko-widgets$6.0.2/lib/bubble",function(e,d,s,o,r){s.exports=["click","dblclick","mousedown","mouseup","dragstart","drag","drop","dragend","keydown","keypress","keyup","select","change","submit","reset"]});
$_mod.def("/marko-widgets$6.0.2/lib/defineRenderer",function(e,r,t,n,d){var i=e("/marko$3.0.7/runtime/marko-runtime"),a=e("/raptor-renderer$1.4.4/lib/raptor-renderer"),o=e("/raptor-util$1.0.10/extend");t.exports=function(e){var r,t=e.template,n=e.getInitialProps,d=e.getTemplateData,g=e.getInitialState,_=e.getWidgetConfig,l=e.getInitialBody,f=e.extendWidget,u=e.renderer;return u||(u=function(e,a){var u=a.global,p=e;p||(p={}),r||(r=t.render?t:i.load(t));var s;if(g&&u.__rerenderWidget&&u.__rerenderState){var m=!u.__firstWidgetFound;if(!m||f)for(var w in u.__rerenderState)u.__rerenderState.hasOwnProperty(w)&&!e.hasOwnProperty(w)&&(p[w]=u.__rerenderState[w]);else s=e,p=null}s||(n&&(p=n(p,a)||{}),g&&(s=g(p,a))),u.__firstWidgetFound=!0;var v=d?d(s,p,a):s||p;v=v?o({},v):{},s&&(v.widgetState=s),p&&(v.widgetProps=p,l?v.widgetBody=l(p,a):v.widgetBody=p.renderBody,_&&(v.widgetConfig=_(p,a))),r.render(v,a)}),u.render=a.createRenderFunc(u),u}});
$_mod.def("/marko-widgets$6.0.2/lib/defineComponent",function(e,r,t,i,n){var d,o;t.exports=function(e){if(e._isWidget)return e;var r;if(!e.template&&!e.renderer)throw new Error('Expected "template" or "renderer"');return r=d(e),o(e,r)},d=e("/marko-widgets$6.0.2/lib/defineRenderer"),o=e("/marko-widgets$6.0.2/lib/defineWidget-browser")});
$_mod.def("/marko-widgets$6.0.2/lib/Widget",function(t,e,r,i,n){function o(t){t.remove()}function s(t){v.forEachChildEl(t,function(t){var e=t.__widget;e&&d(e,!1,!1),s(t)})}function l(t,e,r){var i=t[O[e]];i&&i.call(t,r),t.emit(e,r)}function a(t){var e=t.__evHandles;e&&(e.forEach(o),t.__evHandles=null)}function d(t,e,r){if(!t.isDestroyed()){var i=t.getEl();l(t,"beforeDestroy"),t.__lifecycleState="destroyed",i&&(r&&s(i),e&&i.parentNode&&i.parentNode.removeChild(i),i.__widget=null),a(t),t.__subscriptions&&(t.__subscriptions.removeAllListeners(),t.__subscriptions=null),l(t,"destroy")}}function u(t,e,r,i,n){if("function"!=typeof r){if(null===r&&(r=void 0),i){var o=t.__dirtyState||(t.__dirtyState={});o[e]=!0}else if(t.state[e]===r)return;var s=!t.__dirty;if(s){var l=t.state;t.__dirty=!0,t.__oldState=l,t.state=I({},l),t.__stateChanges={}}t.__stateChanges[e]=r,null==r?delete t.state[e]:t.state[e]=r,s&&n!==!0&&B.queueWidgetUpdate(t)}}function h(t,e,r){var i;for(i in t.state)t.state.hasOwnProperty(i)&&!e.hasOwnProperty(i)&&u(t,i,void 0,!1,r);for(i in e)e.hasOwnProperty(i)&&u(t,i,e[i],!1,r)}function f(t){t.__oldState=null,t.__dirty=!1,t.__stateChanges=null,t.__newProps=null,t.__dirtyState=null}function _(t,e){var r=e.id,i=t.getWidget(r);return i?e.__type===i.type:!1}function c(t,e){b.call(this),this.id=t,this.el=null,this.bodyEl=null,this.state=null,this.__subscriptions=null,this.__evHandles=null,this.__lifecycleState=null,this.__customEvents=null,this.__scope=null,this.__dirty=!1,this.__oldState=null,this.__stateChanges=null,this.__updateQueued=!1,this.__dirtyState=null,this.__document=e}var p,g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},y=t("/raptor-util$1.0.10/inherit"),v=t("/raptor-dom$1.1.1/raptor-dom-client"),m=t("/marko-widgets$6.0.2/lib/index-browser"),E=t("/raptor-renderer$1.4.4/lib/raptor-renderer"),b=t("/events$1.1.0/events").EventEmitter,w=t("/listener-tracker$1.0.5/lib/listener-tracker"),S=t("/raptor-util$1.0.10/arrayFromArguments"),I=t("/raptor-util$1.0.10/extend"),B=t("/marko-widgets$6.0.2/lib/update-manager"),P=t("/morphdom$1.1.4/lib/index"),$=!1,U=null,W={addDestroyListener:!1},C=b.prototype.emit,D=/^\#(\w+)( .*)?/,O={beforeDestroy:"onBeforeDestroy",destroy:"onDestroy",beforeUpdate:"onBeforeUpdate",update:"onUpdate",render:"onRender",beforeInit:"onBeforeInit",afterInit:"onAfterInit"};c.prototype=p={_isWidget:!0,subscribeTo:function(t){if(!t)throw new Error("target is required");var e=this.__subscriptions;e||(this.__subscriptions=e=w.createTracker());var r=t._isWidget?U:W;return e.subscribeTo(t,r)},emit:function(t){var e,r,i=this.__customEvents;if(i&&(e=i[t])){r=r||S(arguments,1),r.push(this);var n=m.getWidgetForEl(this.__scope),o=n[e];if(!o)throw new Error("Method not found for widget "+n.id+": "+e);o.apply(n,r)}return C.apply(this,arguments)},getElId:function(t,e){var r=null!=t?this.id+"-"+t:this.id;return null!=e&&(r+="["+e+"]"),r},getEl:function(t,e){return null!=t?this.__document.getElementById(this.getElId(t,e)):this.el||this.__document.getElementById(this.getElId())},getEls:function(t){for(var e=[],r=0;;){var i=this.getEl(t,r);if(!i)break;e.push(i),r++}return e},getWidget:function(t,e){var r=this.getElId(t,e);return m.getWidgetForEl(r,this.__document)},getWidgets:function(t){for(var e=[],r=0;;){var i=this.getWidget(t,r);if(!i)break;e.push(i),r++}return e},destroy:function(t){t=t||{},d(this,t.removeNode!==!1,t.recursive!==!1)},isDestroyed:function(){return"destroyed"===this.__lifecycleState},getBodyEl:function(){return this.bodyEl},setState:function(t,e){if("object"!==("undefined"==typeof t?"undefined":g(t)))u(this,t,e);else{var r=t;for(var i in r)r.hasOwnProperty(i)&&u(this,i,r[i])}},setStateDirty:function(t,e){1===arguments.length&&(e=this.state[t]),u(this,t,e,!0)},_replaceState:function(t){h(this,t,!0)},_removeDOMEventListeners:function(){a(this)},replaceState:function(t){h(this,t)},setProps:function(t){if(this.getInitialState){this.getInitialProps&&(t=this.getInitialProps(t)||{});var e=this.getInitialState(t);return void this.replaceState(e)}this.__newProps||B.queueWidgetUpdate(this),this.__newProps=t},update:function(){var t=this.__newProps;return this.shouldUpdate(t,this.state)===!1?void f(this):t?(f(this),void this.rerender(t)):void(this.__dirty&&(this._processUpdateHandlers()||this.doUpdate(this.__stateChanges,this.__oldState),f(this)))},isDirty:function(){return this.__dirty},_reset:function(){f(this)},_processUpdateHandlers:function(){var t,e,r,i=this.__stateChanges,n=this.__oldState,o=[];for(var s in i)if(i.hasOwnProperty(s)){if(e=i[s],r=n[s],r===e){var a=this.__dirtyState;if(null==a||!a.hasOwnProperty(s))continue}var d="update_"+s;if(t=this[d],!t)return!1;o.push([s,t])}if(!o.length)return!0;l(this,"beforeUpdate");for(var u=0,h=o.length;h>u;u++){var _=o[u],c=_[0];t=_[1],e=i[c],r=n[c],t.call(this,e,r)}return l(this,"update"),f(this),!0},shouldUpdate:function(t,e){return!0},doUpdate:function(t,e){this.rerender()},_emitLifecycleEvent:function(t,e){l(this,t,e)},rerender:function(t){var e=this;if(!e.renderer)throw new Error('Widget does not have a "renderer" property');var r=this.__document.getElementById(e.id),i=e.renderer||e;e.__lifecycleState="rerender";var n=I({},t||e.state),o=n.$global={};o.__rerenderWidget=e,o.__rerenderEl=e.el,o.__rerender=!0,t||(o.__rerenderState=t?null:e.state),B.batchUpdate(function(){function o(t){var e=t.__widget;e&&d(e,!1,!1)}function s(t,e){var r,i=t.id,n=e.getAttribute("data-w-preserve-attrs");if(n){n=n.split(/\s*[,]\s*/);for(var a=0;a<n.length;a++){var u=n[a],h=t.getAttribute(u);null==h?e.removeAttribute(u):e.setAttribute(u,h)}}if(c&&i){if(c.isPreservedEl(i))return c.hasUnpreservedBody(i)&&(r=t.__widget,P(r.bodyEl,e,{childrenOnly:!0,onNodeDiscarded:o,onBeforeMorphEl:s,onBeforeMorphElChildren:l})),$;r=t.__widget,r&&!_(c,r)&&d(r,!1,!1)}}function l(t){return c&&t.id&&c.isPreservedBodyEl(t.id)?$:void 0}var a=E.render(i,n),u=a.getNode(e.__document),h=a.out,c=h.global.widgets;P(r,u,{onNodeDiscarded:o,onBeforeMorphEl:s,onBeforeMorphElChildren:l}),a.afterInsert(e.__document),e.__lifecycleState=null,t||f(e)})},detach:function(){v.detach(this.el)},appendTo:function(t){v.appendTo(this.el,t)},replace:function(t){v.replace(this.el,t)},replaceChildrenOf:function(t){v.replaceChildrenOf(this.el,t)},insertBefore:function(t){v.insertBefore(this.el,t)},insertAfter:function(t){v.insertAfter(this.el,t)},prependTo:function(t){v.prependTo(this.el,t)},ready:function(t){m.ready(t,this)},$:function(t){var e=m.$,r=arguments;if(1===r.length){if("function"==typeof t){var i=this;i.ready(function(){t.call(i)})}else if("string"==typeof t){var n=D.exec(t);if(null!=n){var o=n[1];return e(null==n[2]?this.getEl(o):"#"+this.getElId(o)+n[2])}var s=this.getEl();if(!s)throw new Error("Root element is not defined for widget");if(s)return e(t,s)}}else{if(2===r.length&&"string"==typeof r[1])return e(t,this.getEl(r[1]));if(0===r.length)return e(this.el)}return e.apply(window,arguments)}},p.elId=p.getElId,y(c,b),r.exports=c});
$_mod.def("/marko-widgets$6.0.2/lib/defineWidget-browser",function(e,r,t,n,o){var i,d,f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.exports=function(e,r){function t(e,r){i.call(this,e,r)}if(e._isWidget)return e;var n=e.extendWidget;if(n)return{renderer:r,render:r.render,extendWidget:function(e){n(e),e.renderer=r}};var o,u;if("function"==typeof e){if(o=e,u=o.prototype,u.render&&2===u.render.length)throw new Error('"render(input, out)" is no longer supported. Use "renderer(input, out)" instead.')}else{if("object"!==("undefined"==typeof e?"undefined":f(e)))throw new Error("Invalid widget");o=e.init||function(){},u=o.prototype=e}return u._isWidget||d(o,i),u=t.prototype=o.prototype,u.initWidget=o,u.constructor=e.constructor=t,t._isWidget=!0,r&&(t.renderer=u.renderer=r,t.render=r.render),t},i=e("/marko-widgets$6.0.2/lib/Widget"),d=e("/raptor-util$1.0.10/inherit")});
$_mod.def("/marko-widgets$6.0.2/lib/registry",function(e,r,t,n,i){function d(r){var t=g[r];if(void 0===t&&(t=f[r],t||(t=e(r)),g[r]=t||null),null==t)throw new Error("Unable to load: "+r);return t}function o(e){var r=l[e];if(r)return r;r=d(e);var t;return r.Widget&&(r=r.Widget),r.renderer&&(t=u(r)),r=a(r,t),r.prototype.__type=e,l[e]=r,r}var a,u,f={},g={},l={};r.register=function(e,r){if(1===arguments.length){var t=arguments[0];e=t.name,r=t.def()}f[e]=r,delete g[e],delete l[e]},r.load=d,r.createWidget=function(e,r,t){var n,i=o(e);return"function"==typeof i?n=new i(r,t):i.initWidget&&(n=i,n.__document=t),n},a=e("/marko-widgets$6.0.2/lib/defineWidget-browser"),u=e("/marko-widgets$6.0.2/lib/defineRenderer")});
$_mod.def("/marko-widgets$6.0.2/lib/init-widgets-browser",function(require,exports,module,__filename,__dirname){function invokeWidgetEventHandler(e,t,i){var r=e[t];if(!r)throw new Error("Widget "+e.id+' does not have method named "'+t+'"');r.apply(e,i)}function addDOMEventListener(e,t,i,r){return _addEventListener(t,i,function(i){invokeWidgetEventHandler(e,r,[i,t])})}function parseJSON(config){return eval("("+config+")")}function getNestedEl(e,t,i){return null==t?null:""===t?e.getEl():"string"==typeof t&&"#"===t.charAt(0)?i.getElementById(t.substring(1)):e.getEl(t)}function initWidget(e,t,i,r,n,d,o,a,g,l,s,u){var f,v,m,c,p;if(s||(s=u.getElementById(t)),l||(l=s.__widget),l&&l.__type!==e&&(l=null),l?(l._removeDOMEventListeners(),l._reset(),p=l):p=registry.createWidget(e,t,u),r)for(var w in r)if(r.hasOwnProperty(w)){var b=r[w];("function"==typeof b||null==b)&&delete r[w]}if(p.state=r||{},logger.isDebugEnabled()&&logger.debug("Creating widget: "+e+" ("+t+")"),i||(i={}),s.__widget=p,p._isWidget){if(p.el=s,p.bodyEl=getNestedEl(p,g,u),d){var E=[];for(f=0,v=d.length;v>f;f+=3){m=d[f],c=d[f+1];var y=d[f+2],_=getNestedEl(p,y,u),h=addDOMEventListener(p,_,m,c);E.push(h)}E.length&&(p.__evHandles=E)}if(o)for(p.__customEvents={},p.__scope=n,f=0,v=o.length;v>f;f+=2)m=o[f],c=o[f+1],p.__customEvents[m]=c;if(a)for(f=0,v=a.length;v>f;f++){var W=a[f];if(!l){var A=registry.load(W),x=A.extendWidget||A.extend;if("function"!=typeof x)throw new Error("extendWidget(widget, cfg) method missing: "+W);x(p)}}}else i.elId=t,i.el=s;if(l)p._emitLifecycleEvent("update"),p._emitLifecycleEvent("render",{});else{var I={widget:p,config:i};raptorPubsub.emit("marko-widgets/initWidget",I),p._emitLifecycleEvent("beforeInit",I),p.initWidget(i),p._emitLifecycleEvent("afterInit",I),p._emitLifecycleEvent("render",{firstRender:!0})}return p}function initWidgetFromEl(e){if(null==e.__widget){var t,i=e.ownerDocument,r=e.id,n=e.getAttribute("data-widget");e.removeAttribute("data-widget");var d=e.getAttribute("data-w-config");d&&(d=parseJSON(d),e.removeAttribute("data-w-config"));var o=e.getAttribute("data-w-state");o&&(o=parseJSON(o),e.removeAttribute("data-w-state"));var a,g=e.getAttribute("data-w-on");if(g){var l=i.getElementById(r+"-$on");l&&(l.parentNode.removeChild(l),a=(l.getAttribute("data-on")||"").split(",")),e.removeAttribute("data-w-on")}var s=e.getAttribute("data-w-events");s&&(s=s.split(","),t=s[0],s=s.slice(1),e.removeAttribute("data-w-events"));var u=e.getAttribute("data-w-extend");u&&(u=u.split(","),e.removeAttribute("data-w-extend"));var f=e.getAttribute("data-w-body");initWidget(n,r,d,o,t,a,s,u,f,null,e,i)}}function initClientRendered(e,t){t=t||window.document;for(var i=0,r=e.length;r>i;i++){var n=e[i];n.children.length&&initClientRendered(n.children,t);var d=initWidget(n.type,n.id,n.config,n.state,n.scope,n.domEvents,n.customEvents,n.extend,n.bodyElId,n.existingWidget,null,t);n.widget=d}}require("/raptor-polyfill$1.0.2/array/forEach"),require("/raptor-polyfill$1.0.2/string/endsWith");var logger=require("/raptor-logging$1.0.8/lib/index").logger(module),raptorPubsub=require("/raptor-pubsub$1.0.5/lib/index"),ready=require("/raptor-dom$1.1.1/raptor-dom-client").ready,_addEventListener=require("/marko-widgets$6.0.2/lib/addEventListener"),registry=require("/marko-widgets$6.0.2/lib/registry");exports.initClientRendered=initClientRendered,exports.initServerRendered=function(e){function t(){if("string"!=typeof e){var t=document.getElementById("markoWidgets");if(!t)return;if(document.markoWidgetsInitialized===!0)return;document.markoWidgetsInitialized=!0,e=t?t.getAttribute("data-ids"):null}if(e)for(var i=e.split(","),r=i.length,n=0;r>n;n++){var d=i[n],o=document.getElementById(d);o?initWidgetFromEl(o):logger.error('DOM node for widget with ID "'+d+'" not found')}}"string"==typeof e?t():ready(t)}});
$_mod.def("/marko-widgets$6.0.2/lib/client-init",function(i,e,t,d,n){i("/marko-widgets$6.0.2/lib/init-widgets-browser").initServerRendered()});
$_mod.def("/marko-widgets$6.0.2/lib/index-browser",function(e,t,r,i,n){function d(e,t){if(!e)return void 0;var r="string"==typeof e?(t||window.document).getElementById(e):e;return r&&r.__widget||void 0}var o=e("/raptor-pubsub$1.0.5/lib/index"),a=e("/raptor-dom$1.1.1/raptor-dom-client").ready,g={},s=e("/marko-widgets$6.0.2/lib/Widget"),f=e("/marko-widgets$6.0.2/lib/init-widgets-browser"),b=e("/marko-widgets$6.0.2/lib/addEventListener"),u=e("/raptor-renderer$1.4.4/lib/raptor-renderer"),w=e("/marko-widgets$6.0.2/lib/update-manager"),l=t.WidgetsContext=e("/marko-widgets$6.0.2/lib/WidgetsContext");t.getWidgetsContext=l.getWidgetsContext,t.Widget=s,t.ready=a,t.onInitWidget=function(e){o.on("marko-widgets/initWidget",e)},t.attrs=function(){return g},t.writeDomEventsEl=function(){},t.get=t.getWidgetForEl=d,t.initAllWidgets=function(){f.initServerRendered(!0)},o.on("dom/beforeRemove",function(e){var t=e.el,r=t.id?d(t):null;r&&r.destroy({removeNode:!1,recursive:!0})}).on("raptor-renderer/renderedToDOM",function(e){var t=e.out||e.context,r=t.global.widgets;r&&r.initWidgets(e.document)}),t.initWidgets=window.$markoWidgets=function(e){f.initServerRendered(e)};var m="jquery",c=window.$;if(!c)try{c=e(m)}catch(p){}t.$=c,a(function(){var t=document.body;e("/marko-widgets$6.0.2/lib/bubble").forEach(function(e){b(t,e,function(t){var r=!1,i=t.stopPropagation;t.stopPropagation=function(){i.call(t),r=!0},w.batchUpdate(function(){var i=t.target;if(i){var n,d,o="data-w-on"+e;do if(n=i.getAttribute(o)){var a=n.lastIndexOf("|"),g=n.substring(a+1);if(d=document.getElementById(g).__widget,!d)throw new Error("Widget not found: "+g);n=n.substring(0,a);var s=d[n];if(!s)throw new Error("Method not found on widget "+d.id+": "+n);if(d[n](t,i),r)break}while((i=i.parentNode)&&i.getAttribute)}})})})}),t.registerWidget=e("/marko-widgets$6.0.2/lib/registry").register,t.makeRenderable=t.renderable=u.renderable,t.render=u.render,t.defineComponent=e("/marko-widgets$6.0.2/lib/defineComponent"),t.defineWidget=e("/marko-widgets$6.0.2/lib/defineWidget-browser"),t.defineRenderer=e("/marko-widgets$6.0.2/lib/defineRenderer"),t.batchUpdate=w.batchUpdate,t.onAfterUpdate=w.onAfterUpdate,window.$MARKO_WIDGETS=t});
function te(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var $={exports:{}},o={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z;function re(){if(z)return o;z=1;var d=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),m=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),t=Symbol.for("react.memo"),c=Symbol.for("react.lazy"),g=Symbol.iterator;function A(e){return e===null||typeof e!="object"?null:(e=g&&e[g]||e["@@iterator"],typeof e=="function"?e:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,I={};function O(e,r,n){this.props=e,this.context=r,this.refs=I,this.updater=n||C}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Y(){}Y.prototype=O.prototype;function N(e,r,n){this.props=e,this.context=r,this.refs=I,this.updater=n||C}var D=N.prototype=new Y;D.constructor=N,U(D,O.prototype),D.isPureReactComponent=!0;var k=Array.isArray,a={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function H(e,r,n,u,f,l){return n=l.ref,{$$typeof:d,type:e,key:r,ref:n!==void 0?n:null,props:l}}function Q(e,r){return H(e.type,r,void 0,void 0,void 0,e.props)}function j(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function Z(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var x=/\/+/g;function L(e,r){return typeof e=="object"&&e!==null&&e.key!=null?Z(""+e.key):r.toString(36)}function q(){}function J(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(q,q):(e.status="pending",e.then(function(r){e.status==="pending"&&(e.status="fulfilled",e.value=r)},function(r){e.status==="pending"&&(e.status="rejected",e.reason=r)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function S(e,r,n,u,f){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case d:case R:s=!0;break;case c:return s=e._init,S(s(e._payload),r,n,u,f)}}if(s)return f=f(e),s=u===""?"."+L(e,0):u,k(f)?(n="",s!=null&&(n=s.replace(x,"$&/")+"/"),S(f,r,n,"",function(ee){return ee})):f!=null&&(j(f)&&(f=Q(f,n+(f.key==null||e&&e.key===f.key?"":(""+f.key).replace(x,"$&/")+"/")+s)),r.push(f)),1;s=0;var E=u===""?".":u+":";if(k(e))for(var y=0;y<e.length;y++)u=e[y],l=E+L(u,y),s+=S(u,r,n,l,f);else if(y=A(e),typeof y=="function")for(e=y.call(e),y=0;!(u=e.next()).done;)u=u.value,l=E+L(u,y++),s+=S(u,r,n,l,f);else if(l==="object"){if(typeof e.then=="function")return S(J(e),r,n,u,f);throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}return s}function h(e,r,n){if(e==null)return e;var u=[],f=0;return S(e,u,"","",function(l){return r.call(n,l,f++)}),u}function F(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var G=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function V(){}return o.Children={map:h,forEach:function(e,r,n){h(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return h(e,function(){r++}),r},toArray:function(e){return h(e,function(r){return r})||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},o.Component=O,o.Fragment=v,o.Profiler=P,o.PureComponent=N,o.StrictMode=p,o.Suspense=i,o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,o.act=function(){throw Error("act(...) is not supported in production builds of React.")},o.cache=function(e){return function(){return e.apply(null,arguments)}},o.cloneElement=function(e,r,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var u=U({},e.props),f=e.key,l=void 0;if(r!=null)for(s in r.ref!==void 0&&(l=void 0),r.key!==void 0&&(f=""+r.key),r)!b.call(r,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&r.ref===void 0||(u[s]=r[s]);var s=arguments.length-2;if(s===1)u.children=n;else if(1<s){for(var E=Array(s),y=0;y<s;y++)E[y]=arguments[y+2];u.children=E}return H(e.type,f,void 0,void 0,l,u)},o.createContext=function(e){return e={$$typeof:m,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:w,_context:e},e},o.createElement=function(e,r,n){var u,f={},l=null;if(r!=null)for(u in r.key!==void 0&&(l=""+r.key),r)b.call(r,u)&&u!=="key"&&u!=="__self"&&u!=="__source"&&(f[u]=r[u]);var s=arguments.length-2;if(s===1)f.children=n;else if(1<s){for(var E=Array(s),y=0;y<s;y++)E[y]=arguments[y+2];f.children=E}if(e&&e.defaultProps)for(u in s=e.defaultProps,s)f[u]===void 0&&(f[u]=s[u]);return H(e,l,void 0,void 0,null,f)},o.createRef=function(){return{current:null}},o.forwardRef=function(e){return{$$typeof:T,render:e}},o.isValidElement=j,o.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:F}},o.memo=function(e,r){return{$$typeof:t,type:e,compare:r===void 0?null:r}},o.startTransition=function(e){var r=a.T,n={};a.T=n;try{var u=e(),f=a.S;f!==null&&f(n,u),typeof u=="object"&&u!==null&&typeof u.then=="function"&&u.then(V,G)}catch(l){G(l)}finally{a.T=r}},o.unstable_useCacheRefresh=function(){return a.H.useCacheRefresh()},o.use=function(e){return a.H.use(e)},o.useActionState=function(e,r,n){return a.H.useActionState(e,r,n)},o.useCallback=function(e,r){return a.H.useCallback(e,r)},o.useContext=function(e){return a.H.useContext(e)},o.useDebugValue=function(){},o.useDeferredValue=function(e,r){return a.H.useDeferredValue(e,r)},o.useEffect=function(e,r){return a.H.useEffect(e,r)},o.useId=function(){return a.H.useId()},o.useImperativeHandle=function(e,r,n){return a.H.useImperativeHandle(e,r,n)},o.useInsertionEffect=function(e,r){return a.H.useInsertionEffect(e,r)},o.useLayoutEffect=function(e,r){return a.H.useLayoutEffect(e,r)},o.useMemo=function(e,r){return a.H.useMemo(e,r)},o.useOptimistic=function(e,r){return a.H.useOptimistic(e,r)},o.useReducer=function(e,r,n){return a.H.useReducer(e,r,n)},o.useRef=function(e){return a.H.useRef(e)},o.useState=function(e){return a.H.useState(e)},o.useSyncExternalStore=function(e,r,n){return a.H.useSyncExternalStore(e,r,n)},o.useTransition=function(){return a.H.useTransition()},o.version="19.0.0",o}var K;function X(){return K||(K=1,$.exports=re()),$.exports}var ne=X();const oe=te(ne);var M={exports:{}},_={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B;function ue(){if(B)return _;B=1;var d=X();function R(i){var t="https://react.dev/errors/"+i;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var c=2;c<arguments.length;c++)t+="&args[]="+encodeURIComponent(arguments[c])}return"Minified React error #"+i+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(){}var p={d:{f:v,r:function(){throw Error(R(522))},D:v,C:v,L:v,m:v,X:v,S:v,M:v},p:0,findDOMNode:null},P=Symbol.for("react.portal");function w(i,t,c){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:g==null?null:""+g,children:i,containerInfo:t,implementation:c}}var m=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(i,t){if(i==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}return _.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,_.createPortal=function(i,t){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(R(299));return w(i,t,null,c)},_.flushSync=function(i){var t=m.T,c=p.p;try{if(m.T=null,p.p=2,i)return i()}finally{m.T=t,p.p=c,p.d.f()}},_.preconnect=function(i,t){typeof i=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,p.d.C(i,t))},_.prefetchDNS=function(i){typeof i=="string"&&p.d.D(i)},_.preinit=function(i,t){if(typeof i=="string"&&t&&typeof t.as=="string"){var c=t.as,g=T(c,t.crossOrigin),A=typeof t.integrity=="string"?t.integrity:void 0,C=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;c==="style"?p.d.S(i,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:g,integrity:A,fetchPriority:C}):c==="script"&&p.d.X(i,{crossOrigin:g,integrity:A,fetchPriority:C,nonce:typeof t.nonce=="string"?t.nonce:void 0})}},_.preinitModule=function(i,t){if(typeof i=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var c=T(t.as,t.crossOrigin);p.d.M(i,{crossOrigin:c,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&p.d.M(i)},_.preload=function(i,t){if(typeof i=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var c=t.as,g=T(c,t.crossOrigin);p.d.L(i,c,{crossOrigin:g,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}},_.preloadModule=function(i,t){if(typeof i=="string")if(t){var c=T(t.as,t.crossOrigin);p.d.m(i,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:c,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else p.d.m(i)},_.requestFormReset=function(i){p.d.r(i)},_.unstable_batchedUpdates=function(i,t){return i(t)},_.useFormState=function(i,t,c){return m.H.useFormState(i,t,c)},_.useFormStatus=function(){return m.H.useHostTransitionStatus()},_.version="19.0.0",_}var W;function ie(){if(W)return M.exports;W=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(R){console.error(R)}}return d(),M.exports=ue(),M.exports}export{oe as R,ie as a,X as b,te as g,ne as r};
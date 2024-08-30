"use strict";exports.id=999,exports.ids=[999],exports.modules={1412:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addBasePath",{enumerable:!0,get:function(){return o}});let n=r(7652),a=r(8796);function o(e,t){return(0,a.normalizePathTrailingSlash)((0,n.addPathPrefix)(e,""))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8878:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(8796);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1838:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return a}});let n=r(5298);function a(e){return(0,n.pathHasPrefix)(e,"")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8796:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathTrailingSlash",{enumerable:!0,get:function(){return o}});let n=r(3575),a=r(626),o=e=>{if(!e.startsWith("/"))return e;let{pathname:t,query:r,hash:o}=(0,a.parsePath)(e);return""+(0,n.removeTrailingSlash)(t)+r+o};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6078:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4813:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return s}});let n=r(8600),a=r(5058),o=r(2795),u=r(5782),l=r(8796),i=r(5853),f=r(2189),c=r(7399);function s(e,t,r){let s;let d="string"==typeof t?t:(0,a.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,u.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,i.isLocalURL)(d))return r?[d]:d;try{s=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){s=new URL("/","http://n")}try{let e=new URL(d,s);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,f.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:u,params:l}=(0,c.interpolateAs)(e.pathname,e.pathname,r);u&&(t=(0,a.formatWithValidation)({pathname:u,hash:e.hash,query:(0,o.omit)(r,l)}))}let u=e.origin===s.origin?e.href.slice(e.origin.length):e.href;return r?[u,t||u]:u}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4592:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return a}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function a(e){return r.test(e)?e.replace(n,"\\$&"):e}},7652:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathPrefix",{enumerable:!0,get:function(){return a}});let n=r(626);function a(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:a,hash:o}=(0,n.parsePath)(e);return""+t+r+a+o}},5058:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return o},formatWithValidation:function(){return l},urlObjectKeys:function(){return u}});let n=r(8760)._(r(8600)),a=/https?|ftp|gopher|file/;function o(e){let{auth:t,hostname:r}=e,o=e.protocol||"",u=e.pathname||"",l=e.hash||"",i=e.query||"",f=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?f=t+e.host:r&&(f=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(f+=":"+e.port)),i&&"object"==typeof i&&(i=String(n.urlQueryToSearchParams(i)));let c=e.search||i&&"?"+i||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||a.test(o))&&!1!==f?(f="//"+(f||""),u&&"/"!==u[0]&&(u="/"+u)):f||(f=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+o+f+(u=u.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let u=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return o(e)}},7399:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return o}});let n=r(3323),a=r(6309);function o(e,t,r){let o="",u=(0,a.getRouteRegex)(e),l=u.groups,i=(t!==e?(0,n.getRouteMatcher)(u)(t):"")||r;o=e;let f=Object.keys(l);return f.every(e=>{let t=i[e]||"",{repeat:r,optional:n}=l[e],a="["+(r?"...":"")+e+"]";return n&&(a=(t?"":"/")+"["+a+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in i)&&(o=o.replace(a,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(o=""),{params:f,result:o}}},5853:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return o}});let n=r(5782),a=r(1838);function o(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,a.hasBasePath)(r.pathname)}catch(e){return!1}}},2795:(e,t)=>{function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},626:(e,t)=>{function r(e){let t=e.indexOf("#"),r=e.indexOf("?"),n=r>-1&&(t<0||r<t);return n||t>-1?{pathname:e.substring(0,n?r:t),query:n?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return r}})},5298:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return a}});let n=r(626);function a(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,n.parsePath)(e);return r===t||r.startsWith(t+"/")}},8600:(e,t)=>{function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function a(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,a]=e;Array.isArray(a)?a.forEach(e=>t.append(r,n(e))):t.set(r,n(a))}),t}function o(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return o},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return a}})},3575:(e,t)=>{function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},3323:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return a}});let n=r(5782);function a(e){let{re:t,groups:r}=e;return e=>{let a=t.exec(e);if(!a)return!1;let o=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},u={};return Object.keys(r).forEach(e=>{let t=r[e],n=a[t.pos];void 0!==n&&(u[e]=~n.indexOf("/")?n.split("/").map(e=>o(e)):t.repeat?[o(n)]:o(n))}),u}}},6309:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return d},getNamedRouteRegex:function(){return s},getRouteRegex:function(){return i}});let n=r(2407),a=r(4592),o=r(3575);function u(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function l(e){let t=(0,o.removeTrailingSlash)(e).slice(1).split("/"),r={},l=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&o){let{key:e,optional:n,repeat:i}=u(o[1]);return r[e]={pos:l++,repeat:i,optional:n},"/"+(0,a.escapeStringRegexp)(t)+"([^/]+?)"}if(!o)return"/"+(0,a.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=u(o[1]);return r[e]={pos:l++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function i(e){let{parameterizedRoute:t,groups:r}=l(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function f(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:o,keyPrefix:l}=e,{key:i,optional:f,repeat:c}=u(n),s=i.replace(/\W/g,"");l&&(s=""+l+s);let d=!1;(0===s.length||s.length>30)&&(d=!0),isNaN(parseInt(s.slice(0,1)))||(d=!0),d&&(s=r()),l?o[s]=""+l+i:o[s]=i;let p=t?(0,a.escapeStringRegexp)(t):"";return c?f?"(?:/"+p+"(?<"+s+">.+?))?":"/"+p+"(?<"+s+">.+?)":"/"+p+"(?<"+s+">[^/]+?)"}function c(e,t){let r;let u=(0,o.removeTrailingSlash)(e).slice(1).split("/"),l=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),i={};return{namedParameterizedRoute:u.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&o){let[r]=e.split(o[0]);return f({getSafeRouteKey:l,interceptionMarker:r,segment:o[1],routeKeys:i,keyPrefix:t?"nxtI":void 0})}return o?f({getSafeRouteKey:l,segment:o[1],routeKeys:i,keyPrefix:t?"nxtP":void 0}):"/"+(0,a.escapeStringRegexp)(e)}).join(""),routeKeys:i}}function s(e,t){let r=c(e,t);return{...i(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=l(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:a}=c(e,!1);return{namedRegex:"^"+a+(n?"(?:(/.*)?)":"")+"$"}}},5469:(e,t,r)=>{e.exports=r(7093).vendored.contexts.RouterContext},8760:(e,t)=>{function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=o?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(a,u,l):a[u]=e[u]}return a.default=e,n&&n.set(e,a),a}}};
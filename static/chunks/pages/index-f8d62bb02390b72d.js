(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(62)}])},9606:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},noSSR:function(){return o}});let l=r(8754);r(5893),r(7294);let n=l._(r(6119));function a(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}function s(e,t){let r=n.default,l={loading:e=>{let{error:t,isLoading:r,pastDelay:l}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l={...l,...e});let s=(l={...l,...t}).loader;return(l.loadableGenerated&&(l={...l,...l.loadableGenerated},delete l.loadableGenerated),"boolean"!=typeof l.ssr||l.ssr)?r({...l,loader:()=>null!=s?s().then(a):Promise.resolve(a(()=>null))}):(delete l.webpack,delete l.modules,o(r,l))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6725:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return l}});let l=r(8754)._(r(7294)).default.createContext(null)},6119:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let l=r(8754)._(r(7294)),n=r(6725),a=[],o=[],s=!1;function u(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class i{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function u(){if(!a){let t=new i(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!s){let e=r.webpack?r.webpack():r.modules;e&&o.push(t=>{for(let r of e)if(t.includes(r))return u()})}function d(e,t){!function(){u();let e=l.default.useContext(n.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let o=l.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),l.default.useMemo(()=>{var t;return o.loading||o.error?l.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:a.retry}):o.loaded?l.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return d.preload=()=>u(),d.displayName="LoadableComponent",l.default.forwardRef(d)}(u,e)}function c(e,t){let r=[];for(;e.length;){let l=e.pop();r.push(l(t))}return Promise.all(r).then(()=>{if(e.length)return c(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{c(a).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(s=!0,t());c(o,e).then(r,r)})),window.__NEXT_PRELOADREADY=d.preloadReady;let f=d},62:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return h},default:function(){return p}});var l=r(5893),n=r(7294);function a(){return(0,l.jsx)("header",{className:"w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 shadow-lg",children:(0,l.jsx)("h1",{className:"text-center text-3xl font-bold tracking-wide",children:"Amazing Posts Explorer"})})}var o=e=>{let{onSearch:t}=e;return(0,l.jsx)("div",{className:"flex justify-center mb-6",children:(0,l.jsx)("input",{type:"text",placeholder:"Search posts...",onChange:e=>t(e.target.value),className:"mt-2 border border-gray-300 rounded-lg p-3 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})})};let s=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=await fetch(t?"https://jsonplaceholder.typicode.com/posts/".concat(e):"https://jsonplaceholder.typicode.com/posts?_page=".concat(e,"&_limit=12"));return await r.json()};var u=r(5152),i=r.n(u);r(8199);let d=i()(()=>r.e(421).then(r.bind(r,8421)),{loadableGenerated:{webpack:()=>[8421]},ssr:!1}),c=i()(()=>r.e(334).then(r.bind(r,5334)),{loadableGenerated:{webpack:()=>[5334]},ssr:!1,loading:()=>(0,l.jsx)("p",{children:"Loading Item List..."})}),f=i()(()=>r.e(943).then(r.bind(r,5943)),{loadableGenerated:{webpack:()=>[5943]},ssr:!1});var h=!0,p=e=>{let{items:t,totalPages:r}=e,[u,i]=(0,n.useState)(1),[h,p]=(0,n.useState)(t),[_,m]=(0,n.useState)(!1),b=async e=>{p(await s(e)),i(e),window.scrollTo(0,0)},y=async e=>{if(""===e.trim()){p(t),m(!1);return}p((await s(1)).filter(t=>t.title.toLowerCase().includes(e.toLowerCase()))),m(!0)};return(0,l.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,l.jsx)(a,{}),(0,l.jsxs)("main",{className:"flex-grow container mx-auto p-6",children:[(0,l.jsx)(o,{onSearch:y}),(0,l.jsx)(c,{items:h}),(0,l.jsx)(f,{currentPage:u,totalPages:r,onPageChange:b,isSearching:_})]}),(0,l.jsx)(d,{})]})}},8199:function(){},5152:function(e,t,r){e.exports=r(9606)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
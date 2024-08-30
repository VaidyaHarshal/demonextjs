(()=>{var e={};e.id=405,e.ids=[405,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},548:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>G,default:()=>v,getServerSideProps:()=>A,getStaticPaths:()=>w,getStaticProps:()=>y,reportWebVitals:()=>O,routeModule:()=>N,unstable_getServerProps:()=>L,unstable_getServerSideProps:()=>C,unstable_getStaticParams:()=>I,unstable_getStaticPaths:()=>M,unstable_getStaticProps:()=>E});var n={};r.r(n),r.d(n,{default:()=>_,getServerSideProps:()=>j});var s=r(7093),a=r(5244),l=r(1323),o=r(1682),i=r.n(o),u=r(8141),d=r.n(u),c=r(997),p=r(6689);function f(){return c.jsx("header",{className:"w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 shadow-lg",children:c.jsx("h1",{className:"text-center text-3xl font-bold tracking-wide",children:"Amazing Posts Explorer"})})}let g=({onSearch:e})=>c.jsx("div",{className:"flex justify-center mb-6",children:c.jsx("input",{type:"text",placeholder:"Search posts...",onChange:t=>e(t.target.value),className:"mt-2 border border-gray-300 rounded-lg p-3 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"})});var P=r(3920),m=r(5152),b=r.n(m);r(108);let x=b()(()=>r.e(431).then(r.bind(r,6431)),{loadableGenerated:{modules:["pages\\index.tsx -> @/components/Footer"]},ssr:!1}),h=b()(()=>Promise.all([r.e(999),r.e(28)]).then(r.bind(r,3028)),{loadableGenerated:{modules:["pages\\index.tsx -> @/components/ItemList"]},ssr:!1,loading:()=>c.jsx("p",{children:"Loading Item List..."})}),S=b()(()=>r.e(437).then(r.bind(r,1437)),{loadableGenerated:{modules:["pages\\index.tsx -> @/components/Pagination"]},ssr:!1}),j=async()=>({props:{items:await (0,P.Z)(1),totalPages:10}}),_=({items:e,totalPages:t})=>{let[r,n]=(0,p.useState)(1),[s,a]=(0,p.useState)(e),[l,o]=(0,p.useState)(!1),i=async e=>{a(await (0,P.Z)(e)),n(e),window.scrollTo(0,0)},u=async t=>{if(""===t.trim()){a(e),o(!1);return}a((await (0,P.Z)(1)).filter(e=>e.title.toLowerCase().includes(t.toLowerCase()))),o(!0)};return(0,c.jsxs)("div",{className:"min-h-screen flex flex-col",children:[c.jsx(f,{}),(0,c.jsxs)("main",{className:"flex-grow container mx-auto p-6",children:[c.jsx(g,{onSearch:u}),c.jsx(h,{items:s}),c.jsx(S,{currentPage:r,totalPages:t,onPageChange:i,isSearching:l})]}),c.jsx(x,{})]})},v=(0,l.l)(n,"default"),y=(0,l.l)(n,"getStaticProps"),w=(0,l.l)(n,"getStaticPaths"),A=(0,l.l)(n,"getServerSideProps"),G=(0,l.l)(n,"config"),O=(0,l.l)(n,"reportWebVitals"),E=(0,l.l)(n,"unstable_getStaticProps"),M=(0,l.l)(n,"unstable_getStaticPaths"),I=(0,l.l)(n,"unstable_getStaticParams"),L=(0,l.l)(n,"unstable_getServerProps"),C=(0,l.l)(n,"unstable_getServerSideProps"),N=new s.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:d(),Document:i()},userland:n})},8141:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=r(167),s=r(997),a=n._(r(6689)),l=r(5782);async function o(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,l.loadGetInitialProps)(t,r)}}class i extends a.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,s.jsx)(e,{...t})}}i.origGetInitialProps=o,i.getInitialProps=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2168:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return i},noSSR:function(){return o}});let n=r(167),s=r(997);r(6689);let a=n._(r(4830));function l(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){delete t.webpack,delete t.modules;let r=t.loading;return()=>(0,s.jsx)(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function i(e,t){let r=a.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let s=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=s?s().then(l):Promise.resolve(l(()=>null))}):(delete n.webpack,delete n.modules,o(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3920:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});let n=async(e,t=!1)=>{let r=t?`https://jsonplaceholder.typicode.com/posts/${e}`:`https://jsonplaceholder.typicode.com/posts?_page=${e}&_limit=12`,n=await fetch(r);return await n.json()}},108:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},4830:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.Loadable},5152:(e,t,r)=>{e.exports=r(2168)},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[682],()=>r(548));module.exports=n})();
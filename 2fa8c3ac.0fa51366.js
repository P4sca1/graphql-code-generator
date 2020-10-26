(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(4),i=n(9),o=(n(1),n(323)),a={},l={unversionedId:"generated-config/typescript-apollo-client-helpers",id:"generated-config/typescript-apollo-client-helpers",isDocsHomePage:!1,title:"typescript-apollo-client-helpers",description:"Installation",source:"@site/docs/generated-config/typescript-apollo-client-helpers.md",slug:"/generated-config/typescript-apollo-client-helpers",permalink:"/docs/generated-config/typescript-apollo-client-helpers",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-apollo-client-helpers.md",version:"current"},c=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]},{value:"<code>requireKeyFields</code>",id:"requirekeyfields",children:[]},{value:"<code>requirePoliciesForAllTypes</code>",id:"requirepoliciesforalltypes",children:[]}]}],p={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("img",{alt:"typescript-apollo-client-helpers plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-apollo-client-helpers?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(o.b)("div",{className:"admonition admonition-shell"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(o.b)("path",Object(r.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(o.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/typescript-apollo-client-helpers\n")))),Object(o.b)("h2",{id:"api-reference"},"API Reference"),Object(o.b)("h3",{id:"usetypeimports"},Object(o.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Will use ",Object(o.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(o.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'),Object(o.b)("h3",{id:"requirekeyfields"},Object(o.b)("inlineCode",{parentName:"h3"},"requireKeyFields")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Remove optional sign from all ",Object(o.b)("inlineCode",{parentName:"p"},"keyFields")," fields."),Object(o.b)("h3",{id:"requirepoliciesforalltypes"},Object(o.b)("inlineCode",{parentName:"h3"},"requirePoliciesForAllTypes")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Remove optional sign from all generated keys of the root TypePolicy."))}s.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(1),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,u=b["".concat(a,".").concat(m)]||b[m]||d[m]||o;return n?i.a.createElement(u,l(l({ref:t},p),{},{components:n})):i.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
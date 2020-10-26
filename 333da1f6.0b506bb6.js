(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(4),a=n(9),o=(n(1),n(323)),p={},i={unversionedId:"generated-config/import-types",id:"generated-config/import-types",isDocsHomePage:!1,title:"import-types",description:"baseTypesPath (string)",source:"@site/docs/generated-config/import-types.md",slug:"/generated-config/import-types",permalink:"/docs/generated-config/import-types",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/import-types.md",version:"current"},s=[{value:"baseTypesPath (<code>string</code>)",id:"basetypespath-string",children:[]},{value:"importTypesNamespace (<code>string</code>, default value: <code>Types</code>)",id:"importtypesnamespace-string-default-value-types",children:[]}],c={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"basetypespath-string"},"baseTypesPath (",Object(o.b)("inlineCode",{parentName:"h3"},"string"),")"),Object(o.b)("p",null,"Required, should point to the base schema types file. The key of the output is used a the base path for this file."),Object(o.b)("h4",{id:"usage-example"},"Usage Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n preset: import-types\n presetConfig:\n   baseTypesPath: types.ts\n plugins:\n   - typescript-operations\n")),Object(o.b)("h3",{id:"importtypesnamespace-string-default-value-types"},"importTypesNamespace (",Object(o.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(o.b)("inlineCode",{parentName:"h3"},"Types"),")"),Object(o.b)("p",null,"Optional, override the name of the import namespace used to import from the ",Object(o.b)("inlineCode",{parentName:"p"},"baseTypesPath")," file."),Object(o.b)("h4",{id:"usage-example-1"},"Usage Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nsrc/:\n preset: import-types\n presetConfig:\n   typesPath: types.ts\n   importTypesNamespace: SchemaTypes\n plugins:\n   - typescript-operations\n")))}l.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(1),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.a.createElement(b,i(i({ref:t},c),{},{components:n})):a.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(4),r=n(9),o=(n(1),n(323)),p={id:"fragment-matcher",title:"Fragment Matcher"},i={unversionedId:"plugins/fragment-matcher",id:"plugins/fragment-matcher",isDocsHomePage:!1,title:"Fragment Matcher",description:"{@import ../generated-config/fragment-matcher.md}",source:"@site/docs/plugins/fragment-matcher.md",slug:"/plugins/fragment-matcher",permalink:"/docs/plugins/fragment-matcher",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/fragment-matcher.md",version:"current",sidebar:"sidebar",previous:{title:"C# Operations",permalink:"/docs/plugins/c-sharp-operations"},next:{title:"Introspection",permalink:"/docs/plugins/introspection"}},c=[{value:"How to use?",id:"how-to-use",children:[]},{value:"Usage with Apollo Client 3",id:"usage-with-apollo-client-3",children:[]},{value:"Usage with Apollo Client 2",id:"usage-with-apollo-client-2",children:[]}],l={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("p",{parentName:"p"},"This plugin generates an introspection file but only with Interfaces and Unions, based on your GraphQLSchema."),Object(o.b)("p",{parentName:"p"},"If you are using ",Object(o.b)("inlineCode",{parentName:"p"},"apollo-client")," and your schema contains ",Object(o.b)("inlineCode",{parentName:"p"},"interface")," or ",Object(o.b)("inlineCode",{parentName:"p"},"union")," declaration, it's recommended to use Apollo's Fragment Matcher and the result generated by the plugin."),Object(o.b)("p",{parentName:"p"},"You can read more about it in ",Object(o.b)("inlineCode",{parentName:"p"},"apollo-client")," documentation: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/data/fragments/#fragments-on-unions-and-interfaces"}),"https://www.apollographql.com/docs/react/data/fragments/#fragments-on-unions-and-interfaces"),"."),Object(o.b)("p",{parentName:"p"},"Fragment Matcher plugin accepts a TypeScript / JavaScript or a JSON file as an output ",Object(o.b)("em",{parentName:"p"},"(",Object(o.b)("inlineCode",{parentName:"em"},".ts, .tsx, .js, .jsx, .json"),")"),"."),Object(o.b)("p",{parentName:"p"},"Both in TypeScript and JavaScript a default export is being used."),Object(o.b)("blockquote",{parentName:"p"},Object(o.b)("p",{parentName:"blockquote"},"The output is based on the output you choose for the output file name.")),Object(o.b)("h2",{parentName:"p"},"Installation"),Object(o.b)("img",{alt:"fragment-matcher plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/fragment-matcher?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(o.b)("div",Object(a.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(o.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(o.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/fragment-matcher\n")))),Object(o.b)("h2",{parentName:"p"},"API Reference"),Object(o.b)("h3",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"h3"},"module")),Object(o.b)("p",{parentName:"p"},"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string (values: commonjs, es2015)"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"es2015")),Object(o.b)("p",{parentName:"p"},"Compatible only with JSON extension, allow you to choose the export type, either ",Object(o.b)("inlineCode",{parentName:"p"},"module.exports")," or ",Object(o.b)("inlineCode",{parentName:"p"},"export default"),".  Allowed values are: ",Object(o.b)("inlineCode",{parentName:"p"},"commonjs"),",  ",Object(o.b)("inlineCode",{parentName:"p"},"es2015"),"."),Object(o.b)("h4",{parentName:"p"},"Usage Examples"),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.json:\n plugins:\n   - fragment-matcher\n config:\n   module: commonjs\n")),Object(o.b)("h3",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"h3"},"apolloClientVersion")),Object(o.b)("p",{parentName:"p"},"type: ",Object(o.b)("inlineCode",{parentName:"p"},"number (values: 2, 3)"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"3")),Object(o.b)("p",{parentName:"p"},"Compatible only with TS/TSX/JS/JSX extensions, allow you to generate output based on your Apollo-Client version. Valid values are: ",Object(o.b)("inlineCode",{parentName:"p"},"2"),", ",Object(o.b)("inlineCode",{parentName:"p"},"3"),"."),Object(o.b)("h4",{parentName:"p"},"Usage Examples"),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - fragment-matcher\n config:\n   apolloClientVersion: 3\n")),Object(o.b)("h3",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"h3"},"useExplicitTyping")),Object(o.b)("p",{parentName:"p"},"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",{parentName:"p"},"Create an explicit type based on your schema. This can help IDEs autofill your fragment matcher. This is mostly useful if you do more with your fragment matcher than just pass it to an Apollo-Client."),Object(o.b)("h4",{parentName:"p"},"Usage Examples"),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - fragment-matcher\n config:\n   useExplicitTyping: true\n")),Object(o.b)("h3",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"h3"},"federation")),Object(o.b)("p",{parentName:"p"},"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"))),Object(o.b)("h2",{id:"how-to-use"},"How to use?"),Object(o.b)("h2",{id:"usage-with-apollo-client-3"},"Usage with Apollo Client 3"),Object(o.b)("p",null,"If you are using Apollo Client 3, update your codegen config accordingly, and then use it in your Apollo cache instance:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { InMemoryCache } from '@apollo/client';\n\n// generated by Fragment Matcher plugin\nimport generatedIntrospection from '../introspection-result';\n\nconst cache = new InMemoryCache({ possibleTypes: generatedIntrospection.possibleTypes });\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/data/fragments/#defining-possibletypes-manually"}),"Read more about fragment matcher and its usage on Apollo Client"))),Object(o.b)("h2",{id:"usage-with-apollo-client-2"},"Usage with Apollo Client 2"),Object(o.b)("p",null,"If you are using version 2 of Apollo-Client, you need to specify the ",Object(o.b)("inlineCode",{parentName:"p"},"apolloClientVersion: 2")," configuration, and then use it like that:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';\n\n// generated by Fragment Matcher plugin\nimport introspectionResult from '../introspection-result';\n\nconst fragmentMatcher = new IntrospectionFragmentMatcher({\n  introspectionQueryResultData: introspectionResult,\n});\n\nconst cache = new InMemoryCache({\n  fragmentMatcher,\n});\n")))}s.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(1),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,d=m["".concat(p,".").concat(u)]||m[u]||b[u]||o;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(4),o=n(9),a=(n(1),n(323)),c={id:"extend-schema",title:"How to extend the GraphQL Schema?"},i={unversionedId:"custom-codegen/extend-schema",id:"custom-codegen/extend-schema",isDocsHomePage:!1,title:"How to extend the GraphQL Schema?",description:"Each plugin can also specify addToSchema field, and to extend the GraphQLSchema with more types:",source:"@site/docs/custom-codegen/extend-schema.md",slug:"/custom-codegen/extend-schema",permalink:"/docs/custom-codegen/extend-schema",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/custom-codegen/extend-schema.md",version:"current",sidebar:"sidebar",previous:{title:"Validate Plugin Configuration",permalink:"/docs/custom-codegen/validate-configuration"},next:{title:"Visitor Pattern",permalink:"/docs/custom-codegen/using-visitor"}},p=[],s={rightToc:p};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Each plugin can also specify ",Object(a.b)("inlineCode",{parentName:"p"},"addToSchema")," field, and to extend the ",Object(a.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," with more types:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  plugin: (schema, documents, config) => {\n    const typesMap = schema.getTypeMap();\n\n    return Object.keys(typesMap).join('\\n');\n  },\n  addToSchema: `\n        type MyType { field: String }\n\n        directive @myDirective on OBJECT\n    `\n};\n")),Object(a.b)("p",null,"It's useful when you wish to add things like declerative ",Object(a.b)("inlineCode",{parentName:"p"},"@directive")," to your ",Object(a.b)("inlineCode",{parentName:"p"},"GraphQLSchema"),", that effects only the output of the codegen."),Object(a.b)("p",null,"For example, let's add a custom ",Object(a.b)("inlineCode",{parentName:"p"},"@directive")," that tells the codegen to ignore a specific ",Object(a.b)("inlineCode",{parentName:"p"},"type"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  plugin: (schema, documents, config, info) => {\n    const typesMap = schema.getTypeMap();\n\n    return Object.keys(typesMap)\n      .filter(typeName => {\n        const type = typesMap[typeName];\n        const astNode = type.astNode;\n\n        if (astNode && astNode.directives && astNode.directives.find(d => d.name.value === 'ignore')) {\n          return false;\n        }\n\n        return true;\n      })\n      .join('\\n');\n  },\n  addToSchema: `\n        directive @ignore on OBJECT\n    `\n};\n")))}d.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(1),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||a;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
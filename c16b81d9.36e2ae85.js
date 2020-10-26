(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{207:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return r})),t.d(n,"default",(function(){return b}));var a=t(4),i=t(9),l=(t(1),t(323)),p={},o={unversionedId:"generated-config/typescript-operations",id:"generated-config/typescript-operations",isDocsHomePage:!1,title:"typescript-operations",description:"This plugin generates TypeScript types based on your GraphQLSchema and your GraphQL operations and fragments.",source:"@site/docs/generated-config/typescript-operations.md",slug:"/generated-config/typescript-operations",permalink:"/docs/generated-config/typescript-operations",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-operations.md",version:"current"},r=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>avoidOptionals</code>",id:"avoidoptionals",children:[]},{value:"<code>immutableTypes</code>",id:"immutabletypes",children:[]},{value:"<code>flattenGeneratedTypes</code>",id:"flattengeneratedtypes",children:[]},{value:"<code>noExport</code>",id:"noexport",children:[]},{value:"<code>globalNamespace</code>",id:"globalnamespace",children:[]},{value:"<code>addOperationExport</code>",id:"addoperationexport",children:[]},{value:"<code>preResolveTypes</code>",id:"preresolvetypes",children:[]},{value:"<code>skipTypeNameForRoot</code>",id:"skiptypenameforroot",children:[]},{value:"<code>operationResultSuffix</code>",id:"operationresultsuffix",children:[]},{value:"<code>dedupeOperationSuffix</code>",id:"dedupeoperationsuffix",children:[]},{value:"<code>omitOperationSuffix</code>",id:"omitoperationsuffix",children:[]},{value:"<code>exportFragmentSpreadSubTypes</code>",id:"exportfragmentspreadsubtypes",children:[]},{value:"<code>addUnderscoreToArgsType</code>",id:"addunderscoretoargstype",children:[]},{value:"<code>enumValues</code>",id:"enumvalues",children:[]},{value:"<code>declarationKind</code>",id:"declarationkind",children:[]},{value:"<code>enumPrefix</code>",id:"enumprefix",children:[]},{value:"<code>fieldWrapperValue</code>",id:"fieldwrappervalue",children:[]},{value:"<code>wrapFieldDefinitions</code>",id:"wrapfielddefinitions",children:[]},{value:"<code>onlyOperationTypes</code>",id:"onlyoperationtypes",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]}]}],c={rightToc:r};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This plugin generates TypeScript types based on your GraphQLSchema ",Object(l.b)("em",{parentName:"p"},"and")," your GraphQL operations and fragments.\nIt generates types for your GraphQL documents: Query, Mutation, Subscription and Fragment."),Object(l.b)("p",null,"Note: In most configurations, this plugin requires you to use `typescript as well, because it depends on its base types."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("img",{alt:"typescript-operations plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-operations?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(l.b)("div",{className:"admonition admonition-shell"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(l.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(l.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/typescript-operations\n")))),Object(l.b)("h2",{id:"api-reference"},"API Reference"),Object(l.b)("h3",{id:"avoidoptionals"},Object(l.b)("inlineCode",{parentName:"h3"},"avoidOptionals")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"AvoidOptionalsConfig | boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"This will cause the generator to avoid using TypeScript optionals (",Object(l.b)("inlineCode",{parentName:"p"},"?"),") on types,\nso the following definition: ",Object(l.b)("inlineCode",{parentName:"p"},"type A { myField: String }")," will output ",Object(l.b)("inlineCode",{parentName:"p"},"myField: Maybe<string>"),"\ninstead of ",Object(l.b)("inlineCode",{parentName:"p"},"myField?: Maybe<string>"),"."),Object(l.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(l.b)("h5",{id:"override-all-definition-types"},"Override all definition types"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n config:\n   avoidOptionals: true\n")),Object(l.b)("h5",{id:"override-only-specific-definition-types"},"Override only specific definition types"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals:\n     field: true\n     inputValue: true\n     object: true\n")),Object(l.b)("h3",{id:"immutabletypes"},Object(l.b)("inlineCode",{parentName:"h3"},"immutableTypes")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Generates immutable types by adding ",Object(l.b)("inlineCode",{parentName:"p"},"readonly")," to properties and uses ",Object(l.b)("inlineCode",{parentName:"p"},"ReadonlyArray"),"."),Object(l.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n config:\n   immutableTypes: true\n")),Object(l.b)("h3",{id:"flattengeneratedtypes"},Object(l.b)("inlineCode",{parentName:"h3"},"flattenGeneratedTypes")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Flatten fragment spread and inline fragments into a simple selection set before generating."),Object(l.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n config:\n   flattenGeneratedTypes: true\n")),Object(l.b)("h3",{id:"noexport"},Object(l.b)("inlineCode",{parentName:"h3"},"noExport")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Set the to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," in order to generate output without ",Object(l.b)("inlineCode",{parentName:"p"},"export")," modifier.\nThis is useful if you are generating ",Object(l.b)("inlineCode",{parentName:"p"},".d.ts")," file and want it to be globally available."),Object(l.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   noExport: true\n")),Object(l.b)("h3",{id:"globalnamespace"},Object(l.b)("inlineCode",{parentName:"h3"},"globalNamespace")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean")),Object(l.b)("h3",{id:"addoperationexport"},Object(l.b)("inlineCode",{parentName:"h3"},"addOperationExport")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Add const export of the operation name to output file. Pay attention that the file should be ",Object(l.b)("inlineCode",{parentName:"p"},"d.ts"),".\nYou can combine it with ",Object(l.b)("inlineCode",{parentName:"p"},"near-operation-file preset")," and therefore the types will be generated along with graphql file. Then you need to set extension in ",Object(l.b)("inlineCode",{parentName:"p"},"presetConfig")," to be ",Object(l.b)("inlineCode",{parentName:"p"},".gql.d.ts")," and by that you can import ",Object(l.b)("inlineCode",{parentName:"p"},"gql")," file in ",Object(l.b)("inlineCode",{parentName:"p"},"ts")," files.\nIt will allow you to get everything with one import: ",Object(l.b)("inlineCode",{parentName:"p"},'import { GetClient, GetClientQuery, GetClientQueryVariables, } from "./GetClient.gql";'),"."),Object(l.b)("h3",{id:"preresolvetypes"},Object(l.b)("inlineCode",{parentName:"h3"},"preResolveTypes")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Avoid using ",Object(l.b)("inlineCode",{parentName:"p"},"Pick")," and resolve the actual primitive type of all selection set."),Object(l.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    preResolveTypes: true\n")),Object(l.b)("h3",{id:"skiptypenameforroot"},Object(l.b)("inlineCode",{parentName:"h3"},"skipTypeNameForRoot")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Avoid adding ",Object(l.b)("inlineCode",{parentName:"p"},"__typename")," for root types. This is ignored when a selection explictly specifies ",Object(l.b)("inlineCode",{parentName:"p"},"__typename"),"."),Object(l.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    skipTypeNameForRoot: true\n")),Object(l.b)("h3",{id:"operationresultsuffix"},Object(l.b)("inlineCode",{parentName:"h3"},"operationResultSuffix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(l.b)("p",null,"Adds a suffix to generated operation result type names"),Object(l.b)("h3",{id:"dedupeoperationsuffix"},Object(l.b)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Set this configuration to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),Object(l.b)("h3",{id:"omitoperationsuffix"},Object(l.b)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Set this configuration to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",Object(l.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Mutation"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Subscription"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Fragment"),"."),Object(l.b)("h3",{id:"exportfragmentspreadsubtypes"},Object(l.b)("inlineCode",{parentName:"h3"},"exportFragmentSpreadSubTypes")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"If set to true, it will export the sub-types created in order to make it easier to access fields declared under fragment spread."),Object(l.b)("h3",{id:"addunderscoretoargstype"},Object(l.b)("inlineCode",{parentName:"h3"},"addUnderscoreToArgsType")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean")),Object(l.b)("p",null,"Adds ",Object(l.b)("inlineCode",{parentName:"p"},"_")," to generated ",Object(l.b)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),Object(l.b)("h4",{id:"usage-examples-6"},"Usage Examples"),Object(l.b)("h5",{id:"with-custom-values"},"With Custom Values"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    addUnderscoreToArgsType: true\n")),Object(l.b)("h3",{id:"enumvalues"},Object(l.b)("inlineCode",{parentName:"h3"},"enumValues")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"EnumValuesMap")),Object(l.b)("p",null,"Overrides the default value of enum values declared in your GraphQL schema.\nYou can also map the entire enum to an external type by providing a string that of ",Object(l.b)("inlineCode",{parentName:"p"},"module#type"),"."),Object(l.b)("h4",{id:"usage-examples-7"},"Usage Examples"),Object(l.b)("h5",{id:"with-custom-values-1"},"With Custom Values"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum:\n        A: 'foo'\n")),Object(l.b)("h5",{id:"with-external-enum"},"With External Enum"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum: ./my-file#MyCustomEnum\n")),Object(l.b)("h5",{id:"import-all-enums-from-a-file"},"Import All Enums from a file"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues: ./my-file\n")),Object(l.b)("h3",{id:"declarationkind"},Object(l.b)("inlineCode",{parentName:"h3"},"declarationKind")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"DeclarationKindConfig | string (values: abstract class, class, interface, type)")),Object(l.b)("p",null,"Overrides the default output for various GraphQL elements."),Object(l.b)("h4",{id:"usage-examples-8"},"Usage Examples"),Object(l.b)("h5",{id:"override-all-declarations"},"Override all declarations"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    declarationKind: 'interface'\n")),Object(l.b)("h5",{id:"override-only-specific-declarations"},"Override only specific declarations"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    declarationKind:\n      type: 'interface'\n      input: 'interface'\n")),Object(l.b)("h3",{id:"enumprefix"},Object(l.b)("inlineCode",{parentName:"h3"},"enumPrefix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"true")),Object(l.b)("p",null,"Allow you to disable prefixing for generated enums, works in combination with ",Object(l.b)("inlineCode",{parentName:"p"},"typesPrefix"),"."),Object(l.b)("h4",{id:"usage-examples-9"},"Usage Examples"),Object(l.b)("h5",{id:"disable-enum-prefixes"},"Disable enum prefixes"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),Object(l.b)("h3",{id:"fieldwrappervalue"},Object(l.b)("inlineCode",{parentName:"h3"},"fieldWrapperValue")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"T")),Object(l.b)("p",null,"Allow you to add wrapper for field type, use T as the generic value. Make sure to set ",Object(l.b)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," in order to make this flag work."),Object(l.b)("h4",{id:"usage-examples-10"},"Usage Examples"),Object(l.b)("h5",{id:"allow-promise"},"Allow Promise"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n   fieldWrapperValue: T | Promise<T>\n")),Object(l.b)("h3",{id:"wrapfielddefinitions"},Object(l.b)("inlineCode",{parentName:"h3"},"wrapFieldDefinitions")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Set the to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",Object(l.b)("inlineCode",{parentName:"p"},"FieldWrapper"),".\nThis is useful to allow return types such as Promises and functions."),Object(l.b)("h4",{id:"usage-examples-11"},"Usage Examples"),Object(l.b)("h5",{id:"enable-wrapping-fields"},"Enable wrapping fields"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n")),Object(l.b)("h3",{id:"onlyoperationtypes"},Object(l.b)("inlineCode",{parentName:"h3"},"onlyOperationTypes")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"This will cause the generator to emit types for operations only (basically only enums and scalars)"),Object(l.b)("h4",{id:"usage-examples-12"},"Usage Examples"),Object(l.b)("h5",{id:"override-all-definition-types-1"},"Override all definition types"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   onlyOperationTypes: true\n")),Object(l.b)("h3",{id:"scalars"},Object(l.b)("inlineCode",{parentName:"h3"},"scalars")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(l.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(l.b)("h4",{id:"usage-examples-13"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(l.b)("h3",{id:"namingconvention"},Object(l.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(l.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(l.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(l.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(l.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(l.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(l.b)("h4",{id:"usage-examples-14"},"Usage Examples"),Object(l.b)("h5",{id:"override-all-names"},"Override All Names"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(l.b)("h5",{id:"upper-case-enum-values"},"Upper-case enum values"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(l.b)("h5",{id:"keep-names-as-is"},"Keep names as is"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(l.b)("h5",{id:"remove-underscores"},"Remove Underscores"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(l.b)("h3",{id:"typesprefix"},Object(l.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(l.b)("p",null,"Prefixes all the generated types."),Object(l.b)("h4",{id:"usage-examples-15"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(l.b)("h3",{id:"typessuffix"},Object(l.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(l.b)("p",null,"Suffixes all the generated types."),Object(l.b)("h4",{id:"usage-examples-16"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesSuffix: I\n")),Object(l.b)("h3",{id:"skiptypename"},Object(l.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(l.b)("h4",{id:"usage-examples-17"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(l.b)("h3",{id:"nonoptionaltypename"},Object(l.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Automatically adds ",Object(l.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(l.b)("h4",{id:"usage-examples-18"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(l.b)("h3",{id:"usetypeimports"},Object(l.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Will use ",Object(l.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(l.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'))}b.isMDXComponent=!0},323:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(1),i=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),s=b(t),u=a,m=s["".concat(p,".").concat(u)]||s[u]||d[u]||l;return t?i.a.createElement(m,o(o({ref:n},c),{},{components:t})):i.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=u;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<l;c++)p[c]=t[c];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);
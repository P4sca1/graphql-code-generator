(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{171:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(4),p=a(9),r=(a(1),a(323)),o={id:"typescript-resolvers",title:"TypeScript Resolvers"},i={unversionedId:"plugins/typescript-resolvers",id:"plugins/typescript-resolvers",isDocsHomePage:!1,title:"TypeScript Resolvers",description:"{@import ../generated-config/typescript-resolvers.md}",source:"@site/docs/plugins/typescript-resolvers.md",slug:"/plugins/typescript-resolvers",permalink:"/docs/plugins/typescript-resolvers",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-resolvers.md",version:"current",sidebar:"sidebar",previous:{title:"TypeScript Operations",permalink:"/docs/plugins/typescript-operations"},next:{title:"TypedDocumentNode",permalink:"/docs/plugins/typed-document-node"}},s=[{value:"Usage Example",id:"usage-example",children:[]},{value:"Integration with Apollo-Server",id:"integration-with-apollo-server",children:[]},{value:"Use Your Model Types (<code>mappers</code>)",id:"use-your-model-types-mappers",children:[]},{value:"Enum Resolvers",id:"enum-resolvers",children:[]}],b={rightToc:s};function l(e){var t=e.components,a=Object(p.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("p",{parentName:"p"},"This plugin generates TypeScript signature for ",Object(r.b)("inlineCode",{parentName:"p"},"resolve")," functions of your GraphQL API.\nYou can use this plugin a to generate simple resolvers signature based on your GraphQL types, or you can change it's behavior be providing custom model types (mappers)."),Object(r.b)("p",{parentName:"p"},"You can find a blog post explaining the usage of this plugin here: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen"}),"https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen")),Object(r.b)("h2",{parentName:"p"},"Installation"),Object(r.b)("img",{alt:"typescript-resolvers plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-resolvers?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(r.b)("div",Object(n.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(r.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(r.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/typescript-resolvers\n")))),Object(r.b)("h2",{parentName:"p"},"API Reference"),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"useIndexSignature")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Adds an index signature to any generates resolver."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   useIndexSignature: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"noSchemaStitching")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Disables Schema Stitching support."),Object(r.b)("p",{parentName:"p"},"Note: The default behavior will be reversed in the next major release. Support for Schema Stitching will be disabled by default."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   noSchemaStitching: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"wrapFieldDefinitions")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",{parentName:"p"},"Set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",Object(r.b)("inlineCode",{parentName:"p"},"FieldWrapper"),".\nThis is useful to allow return types such as Promises and functions. Needed for\ncompatibility with ",Object(r.b)("inlineCode",{parentName:"p"},"federation: true")," when"),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"customResolveInfo")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"graphql#GraphQLResolveInfo")),Object(r.b)("p",{parentName:"p"},"You can provide your custom GraphQLResolveInfo instead of the default one from graphql-js"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   customResolveInfo: ./my-types#MyResolveInfo\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"customResolverFn")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"(parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult")),Object(r.b)("p",{parentName:"p"},"You can provide your custom ResolveFn instead the default. It has to be a type that uses the generics <TResult, TParent, TContext, TArgs>"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Custom Signature"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   customResolverFn: ./my-types#MyResolveFn\n")),Object(r.b)("h5",{parentName:"p"},"With Graphile"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - add:\n       content: \"import { GraphileHelpers } from 'graphile-utils/node8plus/fieldHelpers';\"\n   - typescript\n   - typescript-resolvers\n config:\n   customResolverFn: |\n     (\n       parent: TParent,\n       args: TArgs,\n       context: TContext,\n       info: GraphQLResolveInfo & { graphile: GraphileHelpers<TParent> }\n     ) => Promise<TResult> | TResult;\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"allowParentTypeOverride")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",{parentName:"p"},"Allow you to override the ",Object(r.b)("inlineCode",{parentName:"p"},"ParentType")," generic in each resolver, by avoid enforcing the base type of the generated generic type."),Object(r.b)("p",{parentName:"p"},"This will generate ",Object(r.b)("inlineCode",{parentName:"p"},"ParentType = Type")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"ParentType extends Type = Type")," in each resolver."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    allowParentTypeOverride: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"optionalInfoArgument")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",{parentName:"p"},"Sets ",Object(r.b)("inlineCode",{parentName:"p"},"info")," argument of resolver function to be optional field. Useful for testing."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    optionalInfoArgument: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"addUnderscoreToArgsType")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")),Object(r.b)("p",{parentName:"p"},"Adds ",Object(r.b)("inlineCode",{parentName:"p"},"_")," to generated ",Object(r.b)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    addUnderscoreToArgsType: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"contextType")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",{parentName:"p"},"Use this configuration to set a custom type for your ",Object(r.b)("inlineCode",{parentName:"p"},"context"),", and it will\neffect all the resolvers, without the need to override it using generics each time.\nIf you wish to use an external type and import it from another file, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"add")," plugin\nand add the required ",Object(r.b)("inlineCode",{parentName:"p"},"import")," statement, or you can use a ",Object(r.b)("inlineCode",{parentName:"p"},"module#type")," syntax."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Custom Context Type"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    contextType: MyContext\n")),Object(r.b)("h5",{parentName:"p"},"Custom Context Type"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    contextType: ./my-types#MyContext\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"fieldContextTypes")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"Array_1")),Object(r.b)("p",{parentName:"p"},"Use this to set a custom type for a specific field ",Object(r.b)("inlineCode",{parentName:"p"},"context"),".\nIt will only affect the targeted resolvers.\nYou can either use ",Object(r.b)("inlineCode",{parentName:"p"},"Field.Path#ContextTypeName")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Field.Path#ExternalFileName#ContextTypeName")),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Custom Field Context Types"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"plugins\n  config:\n    fieldContextTypes:\n      - MyType.foo#CustomContextType\n      - MyType.bar#./my-file#ContextTypeOne\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"rootValueType")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",{parentName:"p"},"Use this configuration to set a custom type for the ",Object(r.b)("inlineCode",{parentName:"p"},"rootValue"),", and it will\neffect resolvers of all root types (Query, Mutation and Subscription), without the need to override it using generics each time.\nIf you wish to use an external type and import it from another file, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"add")," plugin\nand add the required ",Object(r.b)("inlineCode",{parentName:"p"},"import")," statement, or you can use both ",Object(r.b)("inlineCode",{parentName:"p"},"module#type")," or ",Object(r.b)("inlineCode",{parentName:"p"},"module#namespace#type")," syntax."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Custom RootValue Type"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    rootValueType: MyRootValue\n")),Object(r.b)("h5",{parentName:"p"},"Custom RootValue Type"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    rootValueType: ./my-types#MyRootValue\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"mapperTypeSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",{parentName:"p"},"Adds a suffix to the imported names to prevent name clashes."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    mapperTypeSuffix: Model\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"mappers")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"object")),Object(r.b)("p",{parentName:"p"},"Replaces a GraphQL type usage with a custom type, allowing you to return custom object from\nyour resolvers.\nYou can use both ",Object(r.b)("inlineCode",{parentName:"p"},"module#type")," and ",Object(r.b)("inlineCode",{parentName:"p"},"module#namespace#type")," syntax."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Custom Context Type"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    mappers:\n      User: ./my-models#UserDbObject\n      Book: ./my-models#Collections#Book\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"defaultMapper")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",{parentName:"p"},"Allow you to set the default mapper when it's not being override by ",Object(r.b)("inlineCode",{parentName:"p"},"mappers")," or generics.\nYou can specify a type name, or specify a string in ",Object(r.b)("inlineCode",{parentName:"p"},"module#type")," or ",Object(r.b)("inlineCode",{parentName:"p"},"module#namespace#type")," format.\nThe default value of mappers it the TypeScript type generated by ",Object(r.b)("inlineCode",{parentName:"p"},"typescript")," package."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Replace with any"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    defaultMapper: any\n")),Object(r.b)("h5",{parentName:"p"},"Custom Base Object"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    defaultMapper: ./my-file#BaseObject\n")),Object(r.b)("h5",{parentName:"p"},"Wrap default types with Partial"),Object(r.b)("p",{parentName:"p"},'You can also specify a custom wrapper for the original type, without overriding the original generated types, use "{T}" to specify the identifier. (for flow, use ',Object(r.b)("inlineCode",{parentName:"p"},"$Shape<{T}>"),")"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    defaultMapper: Partial<{T}>\n")),Object(r.b)("h5",{parentName:"p"},"Allow deep partial with ",Object(r.b)("inlineCode",{parentName:"h5"},"utility-types")),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),'plugins\n plugins:\n   - "typescript"\n   - "typescript-resolvers"\n   - add:\n       content: "import { DeepPartial } from \'utility-types\';"\n config:\n   defaultMapper: DeepPartial<{T}>\n')),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"avoidOptionals")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"This will cause the generator to avoid using optionals (",Object(r.b)("inlineCode",{parentName:"p"},"?"),"),\nso all field resolvers must be implemented in order to avoid compilation errors."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   avoidOptionals: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"showUnusedMappers")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",{parentName:"p"},"Warns about unused mappers."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   showUnusedMappers: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"enumValues")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"EnumValuesMap")),Object(r.b)("p",{parentName:"p"},"Overrides the default value of enum values declared in your GraphQL schema, supported\nin this plugin because of the need for integration with ",Object(r.b)("inlineCode",{parentName:"p"},"typescript")," package.\nSee documentation under ",Object(r.b)("inlineCode",{parentName:"p"},"typescript")," plugin for more information and examples."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"resolverTypeWrapperSignature")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"Promise<T> | T")),Object(r.b)("p",{parentName:"p"},"Allow you to override ",Object(r.b)("inlineCode",{parentName:"p"},"resolverTypeWrapper")," definition."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"federation")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Supports Apollo Federation"),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"enumPrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",{parentName:"p"},"Allow you to disable prefixing for generated enums, works in combination with ",Object(r.b)("inlineCode",{parentName:"p"},"typesPrefix"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Disable enum prefixes"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"optionalResolveType")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Sets the ",Object(r.b)("inlineCode",{parentName:"p"},"__resolveType")," field as optional field."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"immutableTypes")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Generates immutable types by adding ",Object(r.b)("inlineCode",{parentName:"p"},"readonly")," to properties and uses ",Object(r.b)("inlineCode",{parentName:"p"},"ReadonlyArray"),"."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"namespacedImportName")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"''")),Object(r.b)("p",{parentName:"p"},"Prefixes all GraphQL related generated types with that value, as namespaces import.\nYou can use this featuere to allow seperation of plugins to different files."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"resolverTypeSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"Resolvers")),Object(r.b)("p",{parentName:"p"},"Suffix we add to each generated type resolver."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"allResolversTypeName")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"Resolvers")),Object(r.b)("p",{parentName:"p"},"The type name to use when exporting all resolvers signature as unified type."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"scalars")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(r.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(r.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(r.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(r.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Override All Names"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(r.b)("h5",{parentName:"p"},"Upper-case enum values"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(r.b)("h5",{parentName:"p"},"Keep names as is"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(r.b)("h5",{parentName:"p"},"Remove Underscores"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Suffixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesSuffix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Automatically adds ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Will use ",Object(r.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(r.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option')),Object(r.b)("h2",{id:"usage-example"},"Usage Example"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Quick Start with ",Object(r.b)("inlineCode",{parentName:"h5"},"typescript-resolvers"))),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can find ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen"}),"a blog post we wrote about using and customizing this plugin here")))),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-codegen")," as usual, with this new plugin:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"schema: schema.json\ngenerates:\n  ./src/resolvers-types.ts:\n    plugins:\n      - typescript\n      - typescript-resolvers\n")),Object(r.b)("p",null,"Import the types from the generated file and use in the resolver:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Resolvers } from './resolvers-types';\n\nexport const resolvers: Resolvers = {\n  Query: {\n    myQuery: (root, args, context) => {},\n  }\n};\n")),Object(r.b)("p",null,"This will make the resolver fully typed and compatible with typescript compiler, including the handler's arguments and return value."),Object(r.b)("p",null,"Generated resolvers can be passed directly into ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql-tools"}),"graphql-tools")," ",Object(r.b)("inlineCode",{parentName:"p"},"makeExecutableSchema")," function."),Object(r.b)("h2",{id:"integration-with-apollo-server"},"Integration with Apollo-Server"),Object(r.b)("p",null,"By default ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-server")," will not work with generated resolvers signature."),Object(r.b)("p",null,"If you are using Apollo Server with TypeScript, note that you need to set ",Object(r.b)("inlineCode",{parentName:"p"},"useIndexSignature: true")," in your config, in order to add a compatible index signature (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-code-generator/issues/1133#issuecomment-456812621"}),"more info"),")."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  ./resolvers-types.ts:\n    config:\n      useIndexSignature: true\n    plugins:\n      - typescript\n      - typescript-resolvers\n")),Object(r.b)("p",null,"If you wish to have an easy start, and have the ability to use resolvers chaining without models types, you can also add to your config ",Object(r.b)("inlineCode",{parentName:"p"},"defaultMapper: Partial<{T}>"),". This will allow you to return partial types in your resolvers."),Object(r.b)("h2",{id:"use-your-model-types-mappers"},"Use Your Model Types (",Object(r.b)("inlineCode",{parentName:"h2"},"mappers"),")"),Object(r.b)("p",null,"If you wish to use your custom model types, codegen allow you to use ",Object(r.b)("inlineCode",{parentName:"p"},"mappers")," feature to map GraphQL types to your custom model types. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen"}),"You can find an article explaining how to use ",Object(r.b)("inlineCode",{parentName:"a"},"mappers")," here"),"."),Object(r.b)("p",null,"Here's the basic example of using it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"schema: schema.graphql\ngenerates:\n  ./resolvers-types.ts:\n    config:\n      contextType: models#MyContextType\n      mappers:\n        User: ./models#UserModel\n        Profile: ./models#UserProfile\n    plugins:\n      - typescript\n      - typescript-resolvers\n")),Object(r.b)("h2",{id:"enum-resolvers"},"Enum Resolvers"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/apollo-server/"}),"Apollo-Server")," and schemas built with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.graphql-tools.com/"}),Object(r.b)("inlineCode",{parentName:"a"},"graphql-tools"))," supports creating resolvers for GraphQL ",Object(r.b)("inlineCode",{parentName:"p"},"enum"),"s. "),Object(r.b)("p",null,"This is helpful because you can have internal values that are different from the public enum values, and you can use the internal values in your resolvers. "),Object(r.b)("p",null,"Codegen allows you to specify either ",Object(r.b)("inlineCode",{parentName:"p"},"mappers")," or ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues")," to map enums in your resolvers, and if you are using it for enums, you'll get a resolver signature for the enum resolvers as well."),Object(r.b)("h4",{id:"usage-example-1"},"Usage Example"),Object(r.b)("p",null,"With the following schema:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  favoriteColor: Color!\n}\n\ntype Color {\n  RED,\n  BLUE\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"schema: schema.graphql\ngenerates:\n  ./resolvers-types.ts:\n    config:\n      enumValues:\n        Colors: ./enums#ColorsCode\n    plugins:\n      - typescript\n      - typescript-resolvers\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"// in your enums.ts\nexport enum ColorsCode {\n  MY_RED = '#FF0000',\n  MY_BLUE = '#0000FF',\n}\n\n// in your resolvers.ts\nimport { Resolvers } from './resolvers-types';\nimport { ColorsCode } from './enums';\n\nconst resolvers: Resolvers = {\n  Colors: {\n    RED: ColorsCode.MY_RED,\n    BLUE: ColorsCode.MY_BLUE,\n  },\n  Query: {\n    favoriteColor: () => ColorsCode.MY_RED, // Now you cn return this, and it will be mapped to your actual GraphQL enum\n  }\n}\n")),Object(r.b)("p",null,"You can also define the same with explicit enum values:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"schema: schema.graphql\ngenerates:\n  ./resolvers-types.ts:\n    config:\n      enumValues:\n        Colors: \n          RED: '#FF0000'\n          BLUE: '#0000FF'\n    plugins:\n      - typescript\n      - typescript-resolvers\n")),Object(r.b)("p",null,"Or, with ",Object(r.b)("inlineCode",{parentName:"p"},"mappers"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"schema: schema.graphql\ngenerates:\n  ./resolvers-types.ts:\n    config:\n      mappers:\n        Colors: ./enums#ColorsCode\n    plugins:\n      - typescript\n      - typescript-resolvers\n")))}l.isMDXComponent=!0},323:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return u}));var n=a(1),p=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var b=p.a.createContext({}),l=function(e){var t=p.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return p.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),c=l(a),d=n,u=c["".concat(o,".").concat(d)]||c[d]||m[d]||r;return a?p.a.createElement(u,i(i({ref:t},b),{},{components:a})):p.a.createElement(u,i({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<r;b++)o[b]=a[b];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
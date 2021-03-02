(window.webpackJsonp=window.webpackJsonp||[]).push([[832],{1018:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),u=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,b=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return t?r.a.createElement(b,l(l({ref:n},d),{},{components:t})):r.a.createElement(b,l({ref:n},d))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},912:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(8),o=(t(0),t(1018)),i={id:"ram-bundles-inline-requires",title:"RAM Bundles and Inline Requires"},l={unversionedId:"ram-bundles-inline-requires",id:"version-0.60/ram-bundles-inline-requires",isDocsHomePage:!1,title:"RAM Bundles and Inline Requires",description:"If you have a large app you may want to consider the Random Access Modules (RAM) bundle format, and using inline requires. This is useful for apps that have a large number of screens which may not ever be opened during a typical usage of the app. Generally it is useful to apps that have large amounts of code that are not needed for a while after startup. For instance the app includes complicated profile screens or lesser used features, but most sessions only involve visiting the main screen of the app for updates. We can optimize the loading of the bundle by using the RAM format and requiring those features and screens inline (when they are actually used).",source:"@site/versioned_docs/version-0.60/ram-bundles-inline-requires.md",slug:"/ram-bundles-inline-requires",permalink:"/docs/0.60/ram-bundles-inline-requires",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/ram-bundles-inline-requires.md",version:"0.60",lastUpdatedAt:1603945169},s=[{value:"Loading JavaScript",id:"loading-javascript",children:[]},{value:"Inline Requires",id:"inline-requires",children:[{value:"VeryExpensive.js",id:"veryexpensivejs",children:[]},{value:"Optimized.js",id:"optimizedjs",children:[]}]},{value:"Enable the RAM format",id:"enable-the-ram-format",children:[]},{value:"Configure Preloading and Inline Requires",id:"configure-preloading-and-inline-requires",children:[]},{value:"Investigating the Loaded Modules",id:"investigating-the-loaded-modules",children:[]},{value:"Updating the metro.config.js",id:"updating-the-metroconfigjs",children:[]},{value:"Test and Measure Improvements",id:"test-and-measure-improvements",children:[]}],d={toc:s};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you have a large app you may want to consider the Random Access Modules (RAM) bundle format, and using inline requires. This is useful for apps that have a large number of screens which may not ever be opened during a typical usage of the app. Generally it is useful to apps that have large amounts of code that are not needed for a while after startup. For instance the app includes complicated profile screens or lesser used features, but most sessions only involve visiting the main screen of the app for updates. We can optimize the loading of the bundle by using the RAM format and requiring those features and screens inline (when they are actually used)."),Object(o.b)("h2",{id:"loading-javascript"},"Loading JavaScript"),Object(o.b)("p",null,"Before react-native can execute JS code, that code must be loaded into memory and parsed. With a standard bundle if you load a 50mb bundle, all 50mb must be loaded and parsed before any of it can be executed. The optimization behind RAM bundles is that you can load only the portion of the 50mb that you actually need at startup, and progressively load more of the bundle as those sections are needed."),Object(o.b)("h2",{id:"inline-requires"},"Inline Requires"),Object(o.b)("p",null,"Inline requires delay the requiring of a module or file until that file is actually needed. A basic example would look like this:"),Object(o.b)("h3",{id:"veryexpensivejs"},"VeryExpensive.js"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react';\nimport { Text } from 'react-native';\n// ... import some very expensive modules\n\n// You may want to log at the file level to verify when this is happening\nconsole.log('VeryExpensive component loaded');\n\nexport default class VeryExpensive extends Component {\n  // lots and lots of code\n  render() {\n    return <Text>Very Expensive Component</Text>;\n  }\n}\n")),Object(o.b)("h3",{id:"optimizedjs"},"Optimized.js"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react';\nimport { TouchableOpacity, View, Text } from 'react-native';\n\nlet VeryExpensive = null;\n\nexport default class Optimized extends Component {\n  state = { needsExpensive: false };\n\n  didPress = () => {\n    if (VeryExpensive == null) {\n      VeryExpensive = require('./VeryExpensive').default;\n    }\n\n    this.setState(() => ({\n      needsExpensive: true\n    }));\n  };\n\n  render() {\n    return (\n      <View style={{ marginTop: 20 }}>\n        <TouchableOpacity onPress={this.didPress}>\n          <Text>Load</Text>\n        </TouchableOpacity>\n        {this.state.needsExpensive ? <VeryExpensive /> : null}\n      </View>\n    );\n  }\n}\n")),Object(o.b)("p",null,"Even without the RAM format, inline requires can lead to startup time improvements, because the code within VeryExpensive.js will only execute once it is required for the first time."),Object(o.b)("h2",{id:"enable-the-ram-format"},"Enable the RAM format"),Object(o.b)("p",null,"On iOS using the RAM format will create a single indexed file that react native will load one module at a time. On Android, by default it will create a set of files for each module. You can force Android to create a single file, like iOS, but using multiple files can be more performant and requires less memory."),Object(o.b)("p",null,'Enable the RAM format in Xcode by editing the build phase "Bundle React Native code and images". Before ',Object(o.b)("inlineCode",{parentName:"p"},"../node_modules/react-native/scripts/react-native-xcode.sh")," add ",Object(o.b)("inlineCode",{parentName:"p"},'export BUNDLE_COMMAND="ram-bundle"'),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'export BUNDLE_COMMAND="ram-bundle"\nexport NODE_BINARY=node\n../node_modules/react-native/scripts/react-native-xcode.sh\n')),Object(o.b)("p",null,"On Android enable the RAM format by editing your ",Object(o.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," file. Before the line ",Object(o.b)("inlineCode",{parentName:"p"},'apply from: "../../node_modules/react-native/react.gradle"')," add or amend the ",Object(o.b)("inlineCode",{parentName:"p"},"project.ext.react")," block:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'project.ext.react = [\n  bundleCommand: "ram-bundle",\n]\n')),Object(o.b)("p",null,"Use the following lines on Android if you want to use a single indexed file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'project.ext.react = [\n  bundleCommand: "ram-bundle",\n  extraPackagerArgs: ["--indexed-ram-bundle"]\n]\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Note")),": If you are using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/hermes"},"Hermes JS Engine"),", you do not need RAM bundles. When loading the bytecode, ",Object(o.b)("inlineCode",{parentName:"p"},"mmap")," ensures that the entire file is not loaded.")),Object(o.b)("h2",{id:"configure-preloading-and-inline-requires"},"Configure Preloading and Inline Requires"),Object(o.b)("p",null,"Now that we have a RAM bundle, there is overhead for calling ",Object(o.b)("inlineCode",{parentName:"p"},"require"),". ",Object(o.b)("inlineCode",{parentName:"p"},"require")," now needs to send a message over the bridge when it encounters a module it has not loaded yet. This will impact startup the most, because that is where the largest number of require calls are likely to take place while the app loads the initial module. Luckily we can configure a portion of the modules to be preloaded. In order to do this, you will need to implement some form of inline require."),Object(o.b)("h2",{id:"investigating-the-loaded-modules"},"Investigating the Loaded Modules"),Object(o.b)("p",null,"In your root file (index.(ios|android).js) you can add the following after the initial imports:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const modules = require.getModules();\nconst moduleIds = Object.keys(modules);\nconst loadedModuleNames = moduleIds\n  .filter((moduleId) => modules[moduleId].isInitialized)\n  .map((moduleId) => modules[moduleId].verboseName);\nconst waitingModuleNames = moduleIds\n  .filter((moduleId) => !modules[moduleId].isInitialized)\n  .map((moduleId) => modules[moduleId].verboseName);\n\n// make sure that the modules you expect to be waiting are actually waiting\nconsole.log(\n  'loaded:',\n  loadedModuleNames.length,\n  'waiting:',\n  waitingModuleNames.length\n);\n\n// grab this text blob, and put it in a file named packager/modulePaths.js\nconsole.log(\n  `module.exports = ${JSON.stringify(\n    loadedModuleNames.sort(),\n    null,\n    2\n  )};`\n);\n")),Object(o.b)("p",null,"When you run your app, you can look in the console and see how many modules have been loaded, and how many are waiting. You may want to read the moduleNames and see if there are any surprises. Note that inline requires are invoked the first time the imports are referenced. You may need to investigate and refactor to ensure only the modules you want are loaded on startup. Note that you can change the Systrace object on require to help debug problematic requires."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"require.Systrace.beginEvent = (message) => {\n  if (message.includes(problematicModule)) {\n    throw new Error();\n  }\n};\n")),Object(o.b)("p",null,"Every app is different, but it may make sense to only load the modules you need for the very first screen. When you are satisfied, put the output of the loadedModuleNames into a file named ",Object(o.b)("inlineCode",{parentName:"p"},"packager/modulePaths.js"),"."),Object(o.b)("h2",{id:"updating-the-metroconfigjs"},"Updating the metro.config.js"),Object(o.b)("p",null,"We now need to update ",Object(o.b)("inlineCode",{parentName:"p"},"metro.config.js")," in the root of the project to use our newly generated ",Object(o.b)("inlineCode",{parentName:"p"},"modulePaths.js")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const modulePaths = require('./packager/modulePaths');\nconst resolve = require('path').resolve;\nconst fs = require('fs');\n\n// Update the following line if the root folder of your app is somewhere else.\nconst ROOT_FOLDER = resolve(__dirname, '..');\n\nconst config = {\n  transformer: {\n    getTransformOptions: () => {\n      const moduleMap = {};\n      modulePaths.forEach((path) => {\n        if (fs.existsSync(path)) {\n          moduleMap[resolve(path)] = true;\n        }\n      });\n      return {\n        preloadedModules: moduleMap,\n        transform: { inlineRequires: { blacklist: moduleMap } }\n      };\n    }\n  },\n  projectRoot: ROOT_FOLDER\n};\n\nmodule.exports = config;\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"preloadedModules")," entry in the config indicates which modules should be marked as preloaded when building a RAM bundle. When the bundle is loaded, those modules are immediately loaded, before any requires have even executed. The ",Object(o.b)("inlineCode",{parentName:"p"},"blacklist")," entry indicates that those modules should not be required inline. Because they are preloaded, there is no performance benefit from using an inline require. In fact the javascript spends extra time resolving the inline require every time the imports are referenced."),Object(o.b)("h2",{id:"test-and-measure-improvements"},"Test and Measure Improvements"),Object(o.b)("p",null,"You should now be ready to build your app using the RAM format and inline requires. Make sure you measure the before and after startup times."))}u.isMDXComponent=!0}}]);
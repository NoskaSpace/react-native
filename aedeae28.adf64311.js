(window.webpackJsonp=window.webpackJsonp||[]).push([[636],{1018:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return m}));var a=i(0),r=i.n(a);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(i),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||n;return i?r.a.createElement(m,l(l({ref:t},c),{},{components:i})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<n;c++)o[c]=i[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},727:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"toc",(function(){return s})),i.d(t,"default",(function(){return p}));var a=i(3),r=i(8),n=(i(0),i(1018)),o={id:"libraries",title:"Using Libraries",author:"Brent Vatne",authorURL:"https://twitter.com/notbrent",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps."},l={unversionedId:"libraries",id:"version-0.61/libraries",isDocsHomePage:!1,title:"Using Libraries",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps.",source:"@site/versioned_docs/version-0.61/libraries.md",slug:"/libraries",permalink:"/docs/0.61/libraries",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/libraries.md",version:"0.61",lastUpdatedAt:1603945169},s=[{value:"Selecting a Package Manager",id:"selecting-a-package-manager",children:[]},{value:"Installing a Library",id:"installing-a-library",children:[]},{value:"Linking Native Code on iOS",id:"linking-native-code-on-ios",children:[]},{value:"Linking Native Code on Android",id:"linking-native-code-on-android",children:[]},{value:"Finding Libraries",id:"finding-libraries",children:[]},{value:"Determining Library Compatibility",id:"determining-library-compatibility",children:[{value:"Does it work with React Native?",id:"does-it-work-with-react-native",children:[]},{value:"Does it work for the platforms that my app supports?",id:"does-it-work-for-the-platforms-that-my-app-supports",children:[]},{value:"Does it work with my app version of React Native?",id:"does-it-work-with-my-app-version-of-react-native",children:[]}]}],c={toc:s};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"React Native provides a set of built-in ",Object(n.b)("a",{parentName:"p",href:"./components-and-apis"},"Core Components and APIs")," ready to use in your app. You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If the Core Components and APIs don't have what you are looking for, you may be able to find and install a library from the community to add the functionality to your app."),Object(n.b)("h2",{id:"selecting-a-package-manager"},"Selecting a Package Manager"),Object(n.b)("p",null,"React Native libraries are typically installed from the ",Object(n.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry")," using a Node.js package manager such as ",Object(n.b)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/npm"},"npm CLI")," or ",Object(n.b)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/"},"Yarn Classic"),"."),Object(n.b)("p",null,"If you have Node.js installed on your computer then you already have the npm CLI installed. Some developers prefer to use Yarn Classic for slightly faster install times and additional advanced features like Workspaces. Both tools work great with React Native. We will assume npm for the rest of this guide for simplicity of explanation."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},'\ud83d\udca1 The terms "library" and "package" are used interchangably in the JavaScript community.')),Object(n.b)("h2",{id:"installing-a-library"},"Installing a Library"),Object(n.b)("p",null,"To install a library in your project, navigate to your project directory in your terminal and run ",Object(n.b)("inlineCode",{parentName:"p"},"npm install <name-of-the-library>"),". Let's try this with ",Object(n.b)("inlineCode",{parentName:"p"},"react-native-webview"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-webview\n")),Object(n.b)("p",null,"The library that we installed includes native code, and we need to link to our app before we use it."),Object(n.b)("h2",{id:"linking-native-code-on-ios"},"Linking Native Code on iOS"),Object(n.b)("p",null,"React Native uses CocoaPods to manage iOS project dependencies and most React Native libraries follow this same convention. If a library you are using does not, then please refer to their README for additional instruction. In most cases, the following instructions will apply."),Object(n.b)("p",null,"Run ",Object(n.b)("inlineCode",{parentName:"p"},"pod install")," in our ",Object(n.b)("inlineCode",{parentName:"p"},"ios")," directory in order to link it to our native iOS project. A shortcut for doing this without switching to the ",Object(n.b)("inlineCode",{parentName:"p"},"ios")," directory is to run ",Object(n.b)("inlineCode",{parentName:"p"},"npx pod-install"),"."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"npx pod-install\n")),Object(n.b)("p",null,"Once this is complete, re-build the app binary to start using your new library:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"npx react-native run-ios\n")),Object(n.b)("h2",{id:"linking-native-code-on-android"},"Linking Native Code on Android"),Object(n.b)("p",null,"React Native uses Gradle to manage Android project dependencies. After you install a library with native dependencies, you will need to re-build the app binary to use your new library:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"npx react-native run-android\n")),Object(n.b)("h2",{id:"finding-libraries"},"Finding Libraries"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://reactnative.directory"},"React Native Directory")," is a searchable database of libraries built specifically for React Native. This is the first place to look for a library for your React Native app."),Object(n.b)("p",null,"Many of the libraries you will find on the directory are from ",Object(n.b)("a",{parentName:"p",href:"https://github.com/react-native-community/"},"React Native Community")," or ",Object(n.b)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/"},"Expo"),"."),Object(n.b)("p",null,"Libraries built by the React Native Community are driven by volunteers and individuals at companies that depend on React Native. They often support iOS, tvOS, Android, Windows, but this varies across projects. Many of the libraries in this organization were once React Native Core Components and APIs."),Object(n.b)("p",null,"Libraries built by Expo are all written in TypeScript and support iOS, Android, and react-native-web wherever possible. They usually require that you first install ",Object(n.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/master/packages/react-native-unimodules"},"react-native-unimodules")," in order to use in your React Native app."),Object(n.b)("p",null,"After React Native Directory, the ",Object(n.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry")," is the next best place if you can't find a library specifically for React Native on the directory. The npm registry is the definitive source for JavaScript libraries, but the libraries that it lists may not all be compatible with React Native. React Native is one of many JavaScript programming environments, including Node.js, web browsers, Electron, and more, and npm includes libraries that work for all of these environments."),Object(n.b)("h2",{id:"determining-library-compatibility"},"Determining Library Compatibility"),Object(n.b)("h3",{id:"does-it-work-with-react-native"},"Does it work with React Native?"),Object(n.b)("p",null,"Usually libraries built ",Object(n.b)("em",{parentName:"p"},"specifically for other platforms")," will not work with React Native. Examples include ",Object(n.b)("inlineCode",{parentName:"p"},"react-select")," which is built for the web and specifically targets ",Object(n.b)("inlineCode",{parentName:"p"},"react-dom"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"rimraf")," which is built for Node.js and interacts with your computer file system. Other libraries like ",Object(n.b)("inlineCode",{parentName:"p"},"lodash")," use only JavaScript language features and work in any environment. You will gain a sense for this over time, but until then the easiest way to find out is to try it yourself. You can remove packages using ",Object(n.b)("inlineCode",{parentName:"p"},"npm uninstall")," if it turns out that it does not work in React Native."),Object(n.b)("h3",{id:"does-it-work-for-the-platforms-that-my-app-supports"},"Does it work for the platforms that my app supports?"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://reactnative.directory"},"React Native Directory")," allows you to filter by platform compatibility, such as iOS, Android, Web, and Windows. If the library you would like to use is not currently listed there, refer to the README for the library to learn more."),Object(n.b)("h3",{id:"does-it-work-with-my-app-version-of-react-native"},"Does it work with my app version of React Native?"),Object(n.b)("p",null,"The latest version of a library is typically compatible with the latest version of React Native. If you are using an older version, you should refer to the README to know which version of the library you should install. You can install a particular version of the library by running ",Object(n.b)("inlineCode",{parentName:"p"},"npm install <library-name>@<version-number>"),", for example: ",Object(n.b)("inlineCode",{parentName:"p"},"npm install @react-native-community/netinfo@^2.0.0"),"."))}p.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{1018:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=i,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||a;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1066:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/AddToLibraries-92a6a7f58c75a8344d9bbeeae4ac167b.png"},1067:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/AddToBuildPhases-3e79422ff24780db618eae2d7a5ea604.png"},1068:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/AddToSearchPaths-7b278a6ea5ef28cfa94e8d22da5a8b13.png"},394:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(3),r=n(8),a=(n(0),n(1018)),o={id:"linking-libraries-ios",title:"Linking Libraries"},l={unversionedId:"linking-libraries-ios",id:"version-0.63/linking-libraries-ios",isDocsHomePage:!1,title:"Linking Libraries",description:"Not every app uses all the native capabilities, and including the code to support all those features would impact the binary size... But we still want to support adding these features whenever you need them.",source:"@site/versioned_docs/version-0.63/linking-libraries-ios.md",slug:"/linking-libraries-ios",permalink:"/docs/linking-libraries-ios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/linking-libraries-ios.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/docs",previous:{title:"Removing Default Permissions",permalink:"/docs/removing-default-permissions"},next:{title:"Running On Simulator",permalink:"/docs/running-on-simulator-ios"}},s=[{value:"Here are the few steps to link your libraries that contain native code",id:"here-are-the-few-steps-to-link-your-libraries-that-contain-native-code",children:[{value:"Automatic linking",id:"automatic-linking",children:[]},{value:"Manual linking",id:"manual-linking",children:[]}]}],c={toc:s};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Not every app uses all the native capabilities, and including the code to support all those features would impact the binary size... But we still want to support adding these features whenever you need them."),Object(a.b)("p",null,"With that in mind we exposed many of these features as independent static libraries."),Object(a.b)("p",null,"For most of the libs it will be as quick as dragging two files, sometimes a third step will be necessary, but no more than that."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"All the libraries we ship with React Native live on the ",Object(a.b)("inlineCode",{parentName:"em"},"Libraries")," folder in the root of the repository. Some of them are pure JavaScript, and you only need to ",Object(a.b)("inlineCode",{parentName:"em"},"require")," it. Other libraries also rely on some native code, in that case you'll have to add these files to your app, otherwise the app will throw an error as soon as you try to use the library.")),Object(a.b)("h2",{id:"here-are-the-few-steps-to-link-your-libraries-that-contain-native-code"},"Here are the few steps to link your libraries that contain native code"),Object(a.b)("h3",{id:"automatic-linking"},"Automatic linking"),Object(a.b)("h4",{id:"step-1"},"Step 1"),Object(a.b)("p",null,"Install a library with native dependencies:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ npm install <library-with-native-dependencies> --save\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Note:"))," ",Object(a.b)("inlineCode",{parentName:"p"},"--save")," or ",Object(a.b)("inlineCode",{parentName:"p"},"--save-dev")," flag is very important for this step. React Native will link your libs based on ",Object(a.b)("inlineCode",{parentName:"p"},"dependencies")," and ",Object(a.b)("inlineCode",{parentName:"p"},"devDependencies")," in your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," file.")),Object(a.b)("h4",{id:"step-2"},"Step 2"),Object(a.b)("p",null,"Link your native dependencies:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ npx react-native link\n")),Object(a.b)("p",null,"Done! All libraries with native dependencies should be successfully linked to your iOS/Android project."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Note:"))," If your iOS project is using CocoaPods (contains ",Object(a.b)("inlineCode",{parentName:"p"},"Podfile"),") and linked library has ",Object(a.b)("inlineCode",{parentName:"p"},"podspec")," file, then ",Object(a.b)("inlineCode",{parentName:"p"},"npx react-native link")," will link library using Podfile. To support non-trivial Podfiles add ",Object(a.b)("inlineCode",{parentName:"p"},"# Add new pods below this line")," comment to places where you expect pods to be added.")),Object(a.b)("h3",{id:"manual-linking"},"Manual linking"),Object(a.b)("h4",{id:"step-1-1"},"Step 1"),Object(a.b)("p",null,"If the library has native code, there must be an ",Object(a.b)("inlineCode",{parentName:"p"},".xcodeproj")," file inside its folder. Drag this file to your project on Xcode (usually under the ",Object(a.b)("inlineCode",{parentName:"p"},"Libraries")," group on Xcode);"),Object(a.b)("p",null,Object(a.b)("img",{src:n(1066).default})),Object(a.b)("h4",{id:"step-2-1"},"Step 2"),Object(a.b)("p",null,"Click on your main project file (the one that represents the ",Object(a.b)("inlineCode",{parentName:"p"},".xcodeproj"),") select ",Object(a.b)("inlineCode",{parentName:"p"},"Build Phases")," and drag the static library from the ",Object(a.b)("inlineCode",{parentName:"p"},"Products")," folder inside the Library you are importing to ",Object(a.b)("inlineCode",{parentName:"p"},"Link Binary With Libraries")),Object(a.b)("p",null,Object(a.b)("img",{src:n(1067).default})),Object(a.b)("h4",{id:"step-3"},"Step 3"),Object(a.b)("p",null,"Not every library will need this step, what you need to consider is:"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Do I need to know the contents of the library at compile time?")),Object(a.b)("p",null,"What that means is, are you using this library on the native side or only in JavaScript? If you are only using it in JavaScript, you are good to go!"),Object(a.b)("p",null,"If you do need to call it from native, then we need to know the library's headers. To achieve that you have to go to your project's file, select ",Object(a.b)("inlineCode",{parentName:"p"},"Build Settings")," and search for ",Object(a.b)("inlineCode",{parentName:"p"},"Header Search Paths"),". There you should include the path to your library. (This documentation used to recommend using ",Object(a.b)("inlineCode",{parentName:"p"},"recursive"),", but this is no longer recommended, as it can cause subtle build failures, especially with CocoaPods.)"),Object(a.b)("p",null,Object(a.b)("img",{src:n(1068).default})))}b.isMDXComponent=!0}}]);
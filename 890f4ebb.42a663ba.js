(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{1018:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(h,o(o({ref:t},l),{},{components:n})):r.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},609:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(1018)),s={id:"appregistry",title:"AppRegistry"},o={unversionedId:"appregistry",id:"version-0.60/appregistry",isDocsHomePage:!1,title:"AppRegistry",description:"Project with Native Code Required",source:"@site/versioned_docs/version-0.60/appregistry.md",slug:"/appregistry",permalink:"/docs/0.60/appregistry",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/appregistry.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",previous:{title:"Animated",permalink:"/docs/0.60/animated"},next:{title:"AppState",permalink:"/docs/0.60/appstate"}},c=[{value:"Methods",id:"methods",children:[{value:"<code>setWrapperComponentProvider()</code>",id:"setwrappercomponentprovider",children:[]},{value:"<code>registerConfig()</code>",id:"registerconfig",children:[]},{value:"<code>registerComponent()</code>",id:"registercomponent",children:[]},{value:"<code>registerRunnable()</code>",id:"registerrunnable",children:[]},{value:"<code>registerSection()</code>",id:"registersection",children:[]},{value:"<code>getAppKeys()</code>",id:"getappkeys",children:[]},{value:"<code>getSectionKeys()</code>",id:"getsectionkeys",children:[]},{value:"<code>getSections()</code>",id:"getsections",children:[]},{value:"<code>getRunnable()</code>",id:"getrunnable",children:[]},{value:"<code>getRegistry()</code>",id:"getregistry",children:[]},{value:"<code>setComponentProviderInstrumentationHook()</code>",id:"setcomponentproviderinstrumentationhook",children:[]},{value:"<code>runApplication()</code>",id:"runapplication",children:[]},{value:"<code>unmountApplicationComponentAtRootTag()</code>",id:"unmountapplicationcomponentatroottag",children:[]},{value:"<code>registerHeadlessTask()</code>",id:"registerheadlesstask",children:[]},{value:"<code>registerCancellableHeadlessTask()</code>",id:"registercancellableheadlesstask",children:[]},{value:"<code>startHeadlessTask()</code>",id:"startheadlesstask",children:[]},{value:"<code>cancelHeadlessTask()</code>",id:"cancelheadlesstask",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{class:"banner-native-code-required"},Object(i.b)("h3",null,"Project with Native Code Required"),Object(i.b)("p",null,"This API only works in projects made with ",Object(i.b)("code",null,"react-native init"),"or in those made with ",Object(i.b)("code",null,"expo init")," or Create React Native App which have since ejected. For more information about ejecting, please see the ",Object(i.b)("a",{href:"https://docs.expo.io/versions/latest/workflow/customizing/",target:"_blank"},"guide")," on the Expo documentation..")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"AppRegistry")," is the JS entry point to running all React Native apps. App root components should register themselves with ",Object(i.b)("inlineCode",{parentName:"p"},"AppRegistry.registerComponent"),", then the native system can load the bundle for the app and then actually run the app when it's ready by invoking ",Object(i.b)("inlineCode",{parentName:"p"},"AppRegistry.runApplication"),"."),Object(i.b)("p",null,'To "stop" an application when a view should be destroyed, call ',Object(i.b)("inlineCode",{parentName:"p"},"AppRegistry.unmountApplicationComponentAtRootTag")," with the tag that was passed into ",Object(i.b)("inlineCode",{parentName:"p"},"runApplication"),". These should always be used as a pair."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"AppRegistry")," should be required early in the ",Object(i.b)("inlineCode",{parentName:"p"},"require")," sequence to make sure the JS execution environment is setup before other modules are required."),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"setwrappercomponentprovider"},Object(i.b)("inlineCode",{parentName:"h3"},"setWrapperComponentProvider()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static setWrapperComponentProvider(provider)\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"registerconfig"},Object(i.b)("inlineCode",{parentName:"h3"},"registerConfig()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static registerConfig(config)\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"registercomponent"},Object(i.b)("inlineCode",{parentName:"h3"},"registerComponent()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static registerComponent(appKey, componentProvider, section?)\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"registerrunnable"},Object(i.b)("inlineCode",{parentName:"h3"},"registerRunnable()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static registerRunnable(appKey, run)\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"registersection"},Object(i.b)("inlineCode",{parentName:"h3"},"registerSection()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static registerSection(appKey, component)\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getappkeys"},Object(i.b)("inlineCode",{parentName:"h3"},"getAppKeys()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static getAppKeys()\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getsectionkeys"},Object(i.b)("inlineCode",{parentName:"h3"},"getSectionKeys()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static getSectionKeys()\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getsections"},Object(i.b)("inlineCode",{parentName:"h3"},"getSections()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static getSections()\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getrunnable"},Object(i.b)("inlineCode",{parentName:"h3"},"getRunnable()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static getRunnable(appKey)\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getregistry"},Object(i.b)("inlineCode",{parentName:"h3"},"getRegistry()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static getRegistry()\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"setcomponentproviderinstrumentationhook"},Object(i.b)("inlineCode",{parentName:"h3"},"setComponentProviderInstrumentationHook()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static setComponentProviderInstrumentationHook(hook)\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"runapplication"},Object(i.b)("inlineCode",{parentName:"h3"},"runApplication()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static runApplication(appKey, appParameters)\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"unmountapplicationcomponentatroottag"},Object(i.b)("inlineCode",{parentName:"h3"},"unmountApplicationComponentAtRootTag()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static unmountApplicationComponentAtRootTag(rootTag)\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"registerheadlesstask"},Object(i.b)("inlineCode",{parentName:"h3"},"registerHeadlessTask()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static registerHeadlessTask(taskKey, taskProvider)\n")),Object(i.b)("p",null,"Register a headless task. A headless task is a bit of code that runs without a UI. @param taskKey the key associated with this task @param taskProvider a promise returning function that takes some data passed from the native side as the only argument; when the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"registercancellableheadlesstask"},Object(i.b)("inlineCode",{parentName:"h3"},"registerCancellableHeadlessTask()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static registerCancellableHeadlessTask(taskKey, taskProvider, taskCancelProvider)\n")),Object(i.b)("p",null,"Register a headless task which can be cancelled. A headless task is a bit of code that runs without a UI. @param taskKey the key associated with this task @param taskProvider a promise returning function that takes some data passed from the native side as the only argument; when the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context. @param taskCancelProvider a void returning function that takes no arguments; when a cancellation is requested, the function being executed by taskProvider should wrap up and return ASAP."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"startheadlesstask"},Object(i.b)("inlineCode",{parentName:"h3"},"startHeadlessTask()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static startHeadlessTask(taskId, taskKey, data)\n")),Object(i.b)("p",null,"Only called from native code. Starts a headless task."),Object(i.b)("p",null,"@param taskId the native id for this task instance to keep track of its execution @param taskKey the key for the task to start @param data the data to pass to the task"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"cancelheadlesstask"},Object(i.b)("inlineCode",{parentName:"h3"},"cancelHeadlessTask()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static cancelHeadlessTask(taskId, taskKey)\n")),Object(i.b)("p",null,"Only called from native code. Cancels a headless task."),Object(i.b)("p",null,"@param taskId the native id for this task instance that was used when startHeadlessTask was called @param taskKey the key for the task that was used when startHeadlessTask was called"))}p.isMDXComponent=!0}}]);
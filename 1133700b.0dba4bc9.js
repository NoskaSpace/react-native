(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1018:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,h=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?r.a.createElement(h,c(c({ref:t},p),{},{components:n})):r.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1019:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},1020:function(e,t,n){"use strict";var a=n(0),r=n(1021);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1021:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},1022:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1020),o=n(1019),c=n(63),l=n.n(c),p=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,d=e.values,u=e.groupId,b=e.className,h=Object(i.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,v=Object(a.useState)(c),A=v[0],g=v[1],O=a.Children.toArray(e.children);if(null!=u){var y=m[u];null!=y&&y!==A&&d.some((function(e){return e.value===y}))&&g(y)}var j=function(e){g(e),null!=u&&f(u,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":A===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":A===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return j(t)},onClick:function(){j(t)}},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}},1023:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1024:function(e,t,n){"use strict";var a=n(7),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",c=r?"macos":i?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:c,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),i=(n(0),n(1018)),o=n(1022),c=n(1023),l=n(1024),p={id:"appstate",title:"AppState"},s={unversionedId:"appstate",id:"appstate",isDocsHomePage:!1,title:"AppState",description:"AppState can tell you if the app is in the foreground or background, and notify you when the state changes.",source:"@site/../docs/appstate.md",slug:"/appstate",permalink:"/docs/next/appstate",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/appstate.md",version:"current",lastUpdatedAt:1603945169,sidebar:"api",previous:{title:"AppRegistry",permalink:"/docs/next/appregistry"},next:{title:"DevSettings",permalink:"/docs/next/devsettings"}},d=[{value:"App States",id:"app-states",children:[]},{value:"Basic Usage",id:"basic-usage",children:[]},{value:"Events",id:"events",children:[{value:"<code>change</code>",id:"change",children:[]},{value:"<code>memoryWarning</code>",id:"memorywarning",children:[]},{value:"<code>focus</code>",id:"focus",children:[]},{value:"<code>blur</code>",id:"blur",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>currentState</code>",id:"currentstate",children:[]}]}],u={toc:d};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"AppState")," can tell you if the app is in the foreground or background, and notify you when the state changes."),Object(i.b)("p",null,"AppState is frequently used to determine the intent and proper behavior when handling push notifications."),Object(i.b)("h3",{id:"app-states"},"App States"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"active")," - The app is running in the foreground"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"background")," - The app is running in the background. The user is either:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"in another app"),Object(i.b)("li",{parentName:"ul"},"on the home screen"),Object(i.b)("li",{parentName:"ul"},"[Android]"," on another ",Object(i.b)("inlineCode",{parentName:"li"},"Activity")," (even if it was launched by your app)"))),Object(i.b)("li",{parentName:"ul"},"[iOS]"," ",Object(i.b)("inlineCode",{parentName:"li"},"inactive")," - This is a state that occurs when transitioning between foreground & background, and during periods of inactivity such as entering the Multitasking view or in the event of an incoming call")),Object(i.b)("p",null,"For more information, see ",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/app_and_scenes/managing_your_app_s_life_cycle"},"Apple's documentation")),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"To see the current state, you can check ",Object(i.b)("inlineCode",{parentName:"p"},"AppState.currentState"),", which will be kept up-to-date. However, ",Object(i.b)("inlineCode",{parentName:"p"},"currentState")," will be null at launch while ",Object(i.b)("inlineCode",{parentName:"p"},"AppState")," retrieves it over the bridge."),Object(i.b)(o.a,{groupId:"syntax",defaultValue:l.a.defaultSyntax,values:l.a.syntax,mdxType:"Tabs"},Object(i.b)(c.a,{value:"functional",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"AppState Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useRef%2C%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AppState%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20AppStateExample%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20appState%20%3D%20useRef(AppState.currentState)%3B%0A%20%20const%20%5BappStateVisible%2C%20setAppStateVisible%5D%20%3D%20useState(appState.current)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20AppState.addEventListener(%22change%22%2C%20_handleAppStateChange)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20AppState.removeEventListener(%22change%22%2C%20_handleAppStateChange)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20const%20_handleAppStateChange%20%3D%20(nextAppState)%20%3D%3E%20%7B%0A%20%20%20%20if%20(%0A%20%20%20%20%20%20appState.current.match(%2Finactive%7Cbackground%2F)%20%26%26%0A%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20%22active%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20console.log(%22App%20has%20come%20to%20the%20foreground!%22)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20appState.current%20%3D%20nextAppState%3B%0A%20%20%20%20setAppStateVisible(appState.current)%3B%0A%20%20%20%20console.log(%22AppState%22%2C%20appState.current)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7BappStateVisible%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20AppStateExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(i.b)("p",null,"If you don't want to see the AppState update from ",Object(i.b)("inlineCode",{parentName:"p"},"active")," to ",Object(i.b)("inlineCode",{parentName:"p"},"inactive")," on iOS you can remove the state variable and use the ",Object(i.b)("inlineCode",{parentName:"p"},"appState.current")," value.")),Object(i.b)(c.a,{value:"classical",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"AppState Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AppState%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20AppStateExample%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20appState%3A%20AppState.currentState%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20AppState.addEventListener(%22change%22%2C%20this._handleAppStateChange)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20AppState.removeEventListener(%22change%22%2C%20this._handleAppStateChange)%3B%0A%20%20%7D%0A%0A%20%20_handleAppStateChange%20%3D%20nextAppState%20%3D%3E%20%7B%0A%20%20%20%20if%20(%0A%20%20%20%20%20%20this.state.appState.match(%2Finactive%7Cbackground%2F)%20%26%26%0A%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20%22active%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20console.log(%22App%20has%20come%20to%20the%20foreground!%22)%3B%0A%20%20%20%20%7D%0A%20%20%20%20this.setState(%7B%20appState%3A%20nextAppState%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7Bthis.state.appState%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20AppStateExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(i.b)("p",null,'This example will only ever appear to say "Current state is: active" because the app is only visible to the user when in the ',Object(i.b)("inlineCode",{parentName:"p"},"active")," state, and the null state will happen only momentarily. If you want to experiment with the code we recommend to use your own device instead of embedded preview."),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"events"},"Events"),Object(i.b)("h3",{id:"change"},Object(i.b)("inlineCode",{parentName:"h3"},"change")),Object(i.b)("p",null,"This event is received when the app state has changed. The listener is called with one of ",Object(i.b)("a",{parentName:"p",href:"appstate#app-states"},"the current app state values"),"."),Object(i.b)("h3",{id:"memorywarning"},Object(i.b)("inlineCode",{parentName:"h3"},"memoryWarning")),Object(i.b)("p",null,"This event is used in the need of throwing memory warning or releasing it."),Object(i.b)("h3",{id:"focus"},Object(i.b)("inlineCode",{parentName:"h3"},"focus")),Object(i.b)("p",null,"[Android only]"," Received when the app gains focus (the user is interacting with the app)."),Object(i.b)("h3",{id:"blur"},Object(i.b)("inlineCode",{parentName:"h3"},"blur")),Object(i.b)("p",null,"[Android only]"," Received when the user is not actively interacting with the app. Useful in situations when the user pulls down the ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/notifiers/notifications#bar-and-drawer"},"notification drawer"),". ",Object(i.b)("inlineCode",{parentName:"p"},"AppState")," won't change but the ",Object(i.b)("inlineCode",{parentName:"p"},"blur")," event will get fired."),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"addeventlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"addEventListener(type, handler);\n")),Object(i.b)("p",null,"Add a handler to AppState changes by listening to the ",Object(i.b)("inlineCode",{parentName:"p"},"change")," event type and providing the handler"),Object(i.b)("p",null,"TODO: now that AppState is a subclass of NativeEventEmitter, we could deprecate ",Object(i.b)("inlineCode",{parentName:"p"},"addEventListener")," and ",Object(i.b)("inlineCode",{parentName:"p"},"removeEventListener")," and use ",Object(i.b)("inlineCode",{parentName:"p"},"addListener")," and ",Object(i.b)("inlineCode",{parentName:"p"},"listener.remove()")," directly. That will be a breaking change though, as both the method and event names are different (addListener events are currently required to be globally unique)."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"removeeventlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"removeEventListener(type, handler);\n")),Object(i.b)("p",null,"Remove a handler by passing the ",Object(i.b)("inlineCode",{parentName:"p"},"change")," event type and the handler"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"currentstate"},Object(i.b)("inlineCode",{parentName:"h3"},"currentState")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"AppState.currentState;\n")))}b.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1018:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(a),b=n,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},1019:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},1020:function(e,t,a){"use strict";var n=a(0),r=a(1021);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1021:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},1022:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1020),c=a(1019),l=a(63),i=a.n(l),s=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,d=e.values,p=e.groupId,b=e.className,m=Object(o.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(n.useState)(l),O=v[0],g=v[1],j=n.Children.toArray(e.children);if(null!=p){var y=h[p];null!=y&&y!==O&&d.some((function(e){return e.value===y}))&&g(y)}var w=function(e){g(e),null!=p&&f(p,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},b)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},1023:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},1024:function(e,t,a){"use strict";var n=a(7),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),c=r?"ios":"android",l=r?"macos":o?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:c,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(8),o=(a(0),a(1018)),c=a(1022),l=a(1023),i=a(1024),s={id:"appearance",title:"Appearance"},u={unversionedId:"appearance",id:"version-0.63/appearance",isDocsHomePage:!1,title:"Appearance",description:"`jsx",source:"@site/versioned_docs/version-0.63/appearance.md",slug:"/appearance",permalink:"/docs/appearance",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/appearance.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/api",previous:{title:"Animated.ValueXY",permalink:"/docs/animatedvaluexy"},next:{title:"AppRegistry",permalink:"/docs/appregistry"}},d=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>getColorScheme()</code>",id:"getcolorscheme",children:[]},{value:"<code>addChangeListener()</code>",id:"addchangelistener",children:[]},{value:"<code>removeChangeListener()</code>",id:"removechangelistener",children:[]}]}],p={toc:d};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { Appearance } from 'react-native';\n")),Object(o.b)("h4",{id:"developer-notes"},"Developer notes"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Appearance")," module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark)."),Object(o.b)(c.a,{groupId:"guide",defaultValue:"web",values:i.a.getDevNotesTabs(["android","ios","web"]),mdxType:"Tabs"},Object(o.b)(l.a,{value:"web",mdxType:"TabItem"},Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"Appearance")," API is inspired by the ",Object(o.b)("a",{parentName:"p",href:"https://drafts.csswg.org/mediaqueries-5/"},"Media Queries draft")," from the W3C. The color scheme preference is modeled after the ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"},Object(o.b)("inlineCode",{parentName:"a"},"prefers-color-scheme")," CSS media feature"),"."))),Object(o.b)(l.a,{value:"android",mdxType:"TabItem"},Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",Object(o.b)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/look-and-feel/darktheme"},"Dark theme")," preference on Android 10 (API level 29) devices and higher."))),Object(o.b)(l.a,{value:"ios",mdxType:"TabItem"},Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",Object(o.b)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/"},"Dark Mode")," preference on iOS 13 devices and higher.")))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"Appearance")," module to determine if the user prefers a dark color scheme:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const colorScheme = Appearance.getColorScheme();\nif (colorScheme === 'dark') {\n  // Use dark color scheme\n}\n")),Object(o.b)("p",null,"Although the color scheme is available immediately, this may change (e.g. scheduled color scheme change at sunrise or sunset). Any rendering logic or styles that depend on the user preferred color scheme should try to call this function on every render, rather than caching the value. For example, you may use the ",Object(o.b)("a",{parentName:"p",href:"usecolorscheme"},Object(o.b)("inlineCode",{parentName:"a"},"useColorScheme"))," React hook as it provides and subscribes to color scheme updates, or you may use inline styles rather than setting a value in a ",Object(o.b)("inlineCode",{parentName:"p"},"StyleSheet"),"."),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"getcolorscheme"},Object(o.b)("inlineCode",{parentName:"h3"},"getColorScheme()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static getColorScheme()\n")),Object(o.b)("p",null,"Indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle)."),Object(o.b)("p",null,"Supported color schemes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"light"),": The user prefers a light color theme."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dark"),": The user prefers a dark color theme."),Object(o.b)("li",{parentName:"ul"},"null: The user has not indicated a preferred color theme.")),Object(o.b)("p",null,"See also: ",Object(o.b)("inlineCode",{parentName:"p"},"useColorScheme")," hook."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: ",Object(o.b)("inlineCode",{parentName:"p"},"getColorScheme()")," will always return ",Object(o.b)("inlineCode",{parentName:"p"},"light")," when debugging with Chrome.")),Object(o.b)("h3",{id:"addchangelistener"},Object(o.b)("inlineCode",{parentName:"h3"},"addChangeListener()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static addChangeListener(listener)\n")),Object(o.b)("p",null,"Add an event handler that is fired when appearance preferences change."),Object(o.b)("h3",{id:"removechangelistener"},Object(o.b)("inlineCode",{parentName:"h3"},"removeChangeListener()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static removeChangeListener(listener)\n")),Object(o.b)("p",null,"Remove an event handler."))}b.isMDXComponent=!0}}]);
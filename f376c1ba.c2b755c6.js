(window.webpackJsonp=window.webpackJsonp||[]).push([[888],{1018:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return n?a.a.createElement(f,o(o({ref:t},l),{},{components:n})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},967:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),c=(n(0),n(1018)),i={id:"settings",title:"Settings"},o={unversionedId:"settings",id:"version-0.60/settings",isDocsHomePage:!1,title:"Settings",description:"Settings serves as a wrapper for NSUserDefaults, a persistent key-value store available only on iOS.",source:"@site/versioned_docs/version-0.60/settings.md",slug:"/settings",permalink:"/docs/0.60/settings",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/settings.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",previous:{title:"PushNotificationIOS",permalink:"/docs/0.60/pushnotificationios"},next:{title:"Shadow Props",permalink:"/docs/0.60/shadow-props"}},s=[{value:"Methods",id:"methods",children:[{value:"<code>clearWatch()</code>",id:"clearwatch",children:[]},{value:"<code>get()</code>",id:"get",children:[]},{value:"<code>set()</code>",id:"set",children:[]},{value:"<code>watchKeys()</code>",id:"watchkeys",children:[]}]}],l={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Settings")," serves as a wrapper for ",Object(c.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/foundation/nsuserdefaults"},Object(c.b)("inlineCode",{parentName:"a"},"NSUserDefaults")),", a persistent key-value store available only on iOS."),Object(c.b)("hr",null),Object(c.b)("h1",{id:"reference"},"Reference"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"clearwatch"},Object(c.b)("inlineCode",{parentName:"h3"},"clearWatch()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static clearWatch(watchId)\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"watchId")," is the number returned by ",Object(c.b)("inlineCode",{parentName:"p"},"watchKeys()")," when the subscription was originally configured."),Object(c.b)("h3",{id:"get"},Object(c.b)("inlineCode",{parentName:"h3"},"get()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static get(key)\n")),Object(c.b)("p",null,"Get the current value for a key in ",Object(c.b)("inlineCode",{parentName:"p"},"NSUserDefaults"),"."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"set"},Object(c.b)("inlineCode",{parentName:"h3"},"set()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static set(settings)\n")),Object(c.b)("p",null,"Set one or more values in ",Object(c.b)("inlineCode",{parentName:"p"},"NSUserDefaults"),"."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"watchkeys"},Object(c.b)("inlineCode",{parentName:"h3"},"watchKeys()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static watchKeys(keys, callback)\n")),Object(c.b)("p",null,"Subscribe to be notified when the value for any of the keys specified by the ",Object(c.b)("inlineCode",{parentName:"p"},"keys")," array changes in ",Object(c.b)("inlineCode",{parentName:"p"},"NSUserDefaults"),". Returns a ",Object(c.b)("inlineCode",{parentName:"p"},"watchId")," number that may be used with ",Object(c.b)("inlineCode",{parentName:"p"},"clearWatch()")," to unsubscribe."))}b.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[857],{1018:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),s=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return t?i.a.createElement(b,c(c({ref:n},l),{},{components:t})):i.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},937:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(8),o=(t(0),t(1018)),a={id:"running-on-simulator-ios",title:"Running On Simulator"},c={unversionedId:"running-on-simulator-ios",id:"running-on-simulator-ios",isDocsHomePage:!1,title:"Running On Simulator",description:"Starting the simulator",source:"@site/../docs/running-on-simulator-ios.md",slug:"/running-on-simulator-ios",permalink:"/docs/next/running-on-simulator-ios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/running-on-simulator-ios.md",version:"current",lastUpdatedAt:1600844408,sidebar:"docs",previous:{title:"Linking Libraries",permalink:"/docs/next/linking-libraries-ios"},next:{title:"Communication between native and React Native",permalink:"/docs/next/communication-ios"}},u=[{value:"Starting the simulator",id:"starting-the-simulator",children:[]},{value:"Specifying a device",id:"specifying-a-device",children:[]}],l={toc:u};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"starting-the-simulator"},"Starting the simulator"),Object(o.b)("p",null,"Once you have your React Native project initialized, you can run ",Object(o.b)("inlineCode",{parentName:"p"},"npx react-native run-ios")," inside the newly created project directory. If everything is set up correctly, you should see your new app running in the iOS Simulator shortly."),Object(o.b)("h2",{id:"specifying-a-device"},"Specifying a device"),Object(o.b)("p",null,"You can specify the device the simulator should run with the ",Object(o.b)("inlineCode",{parentName:"p"},"--simulator")," flag, followed by the device name as a string. The default is ",Object(o.b)("inlineCode",{parentName:"p"},'"iPhone 11"'),". If you wish to run your app on an iPhone SE (1st generation), run ",Object(o.b)("inlineCode",{parentName:"p"},'npx react-native run-ios --simulator="iPhone SE (1st generation)"'),"."),Object(o.b)("p",null,"The device names correspond to the list of devices available in Xcode. You can check your available devices by running ",Object(o.b)("inlineCode",{parentName:"p"},"xcrun simctl list devices")," from the console."))}s.isMDXComponent=!0}}]);
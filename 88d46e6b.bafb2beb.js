(window.webpackJsonp=window.webpackJsonp||[]).push([[514],{1018:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,m=d["".concat(r,".").concat(b)]||d[b]||u[b]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},608:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(8),i=(n(0),n(1018)),r={id:"tutorial",title:"Learn the Basics"},s={unversionedId:"tutorial",id:"version-0.61/tutorial",isDocsHomePage:!1,title:"Learn the Basics",description:"React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React-Native-specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.",source:"@site/versioned_docs/version-0.61/tutorial.md",slug:"/tutorial",permalink:"/docs/0.61/tutorial",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/tutorial.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/docs",previous:{title:"Introduction",permalink:"/docs/0.61/getting-started"},next:{title:"Props",permalink:"/docs/0.61/props"}},c=[{value:"Hello World",id:"hello-world",children:[]},{value:"What&#39;s going on here?",id:"whats-going-on-here",children:[]},{value:"Components",id:"components",children:[]},{value:"This app doesn&#39;t do very much",id:"this-app-doesnt-do-very-much",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, ",Object(i.b)("inlineCode",{parentName:"p"},"state"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"props"),". If you already know React, you still need to learn some React-Native-specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not."),Object(i.b)("p",null,"Let's do this thing."),Object(i.b)("h2",{id:"hello-world"},"Hello World"),Object(i.b)("p",null,'In accordance with the ancient traditions of our people, we must first build an app that does nothing except say "Hello, world!". Here it is:'),Object(i.b)("div",{className:"snack-player","data-snack-name":"Hello World","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20HelloWorldApp%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EHello%2C%20world!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(i.b)("p",null,"If you are feeling curious, you can play around with sample code directly in the web simulators. You can also paste it into your ",Object(i.b)("inlineCode",{parentName:"p"},"App.js")," file to create a real app on your local machine."),Object(i.b)("h2",{id:"whats-going-on-here"},"What's going on here?"),Object(i.b)("p",null,"Some of the things in here might not look like JavaScript to you. Don't panic. ",Object(i.b)("em",{parentName:"p"},"This is the future"),"."),Object(i.b)("p",null,"First of all, ES2015 (also known as ES6) is a set of improvements to JavaScript that is now part of the official standard, but not yet supported by all browsers, so often it isn't used yet in web development. React Native ships with ES2015 support, so you can use this stuff without worrying about compatibility. ",Object(i.b)("inlineCode",{parentName:"p"},"import"),", ",Object(i.b)("inlineCode",{parentName:"p"},"from"),", ",Object(i.b)("inlineCode",{parentName:"p"},"class"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"extends")," in the example above are all ES2015 features. If you aren't familiar with ES2015, you can probably pick it up by reading through sample code like this tutorial has. If you want, ",Object(i.b)("a",{parentName:"p",href:"https://babeljs.io/learn-es2015/"},"this page")," has a good overview of ES2015 features."),Object(i.b)("p",null,"The other unusual thing in this code example is ",Object(i.b)("inlineCode",{parentName:"p"},"<View><Text>Hello world!</Text></View>"),". This is JSX - a syntax for embedding XML within JavaScript. Many frameworks use a specialized templating language which lets you embed code inside markup language. In React, this is reversed. JSX lets you write your markup language inside code. It looks like HTML on the web, except instead of web things like ",Object(i.b)("inlineCode",{parentName:"p"},"<div>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"<span>"),", you use React components. In this case, ",Object(i.b)("inlineCode",{parentName:"p"},"<Text>")," is a ",Object(i.b)("a",{parentName:"p",href:"intro-react-native-components"},"Core Component")," that displays some text and ",Object(i.b)("inlineCode",{parentName:"p"},"View")," is like the ",Object(i.b)("inlineCode",{parentName:"p"},"<div>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"<span>"),"."),Object(i.b)("h2",{id:"components"},"Components"),Object(i.b)("p",null,"So this code is defining ",Object(i.b)("inlineCode",{parentName:"p"},"HelloWorldApp"),", a new ",Object(i.b)("inlineCode",{parentName:"p"},"Component"),". When you're building a React Native app, you'll be making new components a lot. Anything you see on the screen is some sort of component. A component can be pretty basic - the only thing that's required is a ",Object(i.b)("inlineCode",{parentName:"p"},"render")," function which returns some JSX to render."),Object(i.b)("h2",{id:"this-app-doesnt-do-very-much"},"This app doesn't do very much"),Object(i.b)("p",null,"Good point. To make components do more interesting things, you need to ",Object(i.b)("a",{parentName:"p",href:"/docs/0.61/props"},"learn about Props"),"."))}p.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1018:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,b=u["".concat(c,".").concat(y)]||u[y]||d[y]||o;return n?a.a.createElement(b,s(s({ref:t},i),{},{components:n})):a.a.createElement(b,s({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(1018)),c={id:"style",title:"Style"},s={unversionedId:"style",id:"style",isDocsHomePage:!1,title:"Style",description:"With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the web, except names are written using camel casing, e.g. backgroundColor rather than background-color.",source:"@site/../docs/style.md",slug:"/style",permalink:"/docs/next/style",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/style.md",version:"current",lastUpdatedAt:1599413692,sidebar:"docs",previous:{title:"Upgrading to new versions",permalink:"/docs/next/upgrading"},next:{title:"Height and Width",permalink:"/docs/next/height-and-width"}},l=[],i={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With React Native, you style your application using JavaScript. All of the core components accept a prop named ",Object(o.b)("inlineCode",{parentName:"p"},"style"),". The style names and ",Object(o.b)("a",{parentName:"p",href:"/docs/next/colors"},"values")," usually match how CSS works on the web, except names are written using camel casing, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"backgroundColor")," rather than ",Object(o.b)("inlineCode",{parentName:"p"},"background-color"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"style")," prop can be a plain old JavaScript object. That's what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles."),Object(o.b)("p",null,"As a component grows in complexity, it is often cleaner to use ",Object(o.b)("inlineCode",{parentName:"p"},"StyleSheet.create")," to define several styles in one place. Here's an example:"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Style","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20LotsOfStyles%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.red%7D%3Ejust%20red%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.bigBlue%7D%3Ejust%20bigBlue%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.bigBlue%2C%20styles.red%5D%7D%3EbigBlue%2C%20then%20red%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.red%2C%20styles.bigBlue%5D%7D%3Ered%2C%20then%20bigBlue%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20marginTop%3A%2050%2C%0A%20%20%7D%2C%0A%20%20bigBlue%3A%20%7B%0A%20%20%20%20color%3A%20'blue'%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%20%20fontSize%3A%2030%2C%0A%20%20%7D%2C%0A%20%20red%3A%20%7B%0A%20%20%20%20color%3A%20'red'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20LotsOfStyles%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("p",null,"One common pattern is to make your component accept a ",Object(o.b)("inlineCode",{parentName:"p"},"style"),' prop which in turn is used to style subcomponents. You can use this to make styles "cascade" the way they do in CSS.'),Object(o.b)("p",null,"There are a lot more ways to customize the text style. Check out the ",Object(o.b)("a",{parentName:"p",href:"/docs/next/text"},"Text component reference")," for a complete list."),Object(o.b)("p",null,"Now you can make your text beautiful. The next step in becoming a style expert is to ",Object(o.b)("a",{parentName:"p",href:"/docs/next/height-and-width"},"learn how to control component size"),"."))}p.isMDXComponent=!0}}]);
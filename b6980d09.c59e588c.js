(window.webpackJsonp=window.webpackJsonp||[]).push([[662],{1018:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,O=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return n?a.a.createElement(O,l(l({ref:t},s),{},{components:n})):a.a.createElement(O,l({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},751:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),o=(n(0),n(1018)),i={id:"alert",title:"Alert"},l={unversionedId:"alert",id:"version-0.60/alert",isDocsHomePage:!1,title:"Alert",description:"Launches an alert dialog with the specified title and message.",source:"@site/versioned_docs/version-0.60/alert.md",slug:"/alert",permalink:"/docs/0.60/alert",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/alert.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",previous:{title:"ActionSheetIOS",permalink:"/docs/0.60/actionsheetios"},next:{title:"AlertIOS",permalink:"/docs/0.60/alertios"}},c=[{value:"Example",id:"example",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>alert()</code>",id:"alert",children:[]}]}],s={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Launches an alert dialog with the specified title and message."),Object(o.b)("p",null,"Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button."),Object(o.b)("p",null,"This is an API that works both on Android and iOS and can show static alerts. To show an alert that prompts the user to enter some information, see ",Object(o.b)("inlineCode",{parentName:"p"},"AlertIOS"),"; entering text in an alert is common on iOS only."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("th",{style:{width:"50%"}},"iOS"),Object(o.b)("th",{style:{width:"50%"}},"Android")),Object(o.b)("tr",null,Object(o.b)("td",{style:{width:"50%"}},Object(o.b)("center",null,Object(o.b)("img",{src:"/docs/assets/Alert/exampleios.gif"}))),Object(o.b)("td",{style:{width:"50%"}},Object(o.b)("center",null,Object(o.b)("img",{src:"/docs/assets/Alert/exampleandroid.gif"}))))),Object(o.b)("h2",{id:"ios"},"iOS"),Object(o.b)("p",null,"On iOS you can specify any number of buttons. Each button can optionally specify a style, which is one of 'default', 'cancel' or 'destructive'."),Object(o.b)("h2",{id:"android"},"Android"),Object(o.b)("p",null,"On Android at most three buttons can be specified. Android has a concept of a neutral, negative and a positive button:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you specify one button, it will be the 'positive' one (such as 'OK')"),Object(o.b)("li",{parentName:"ul"},"Two buttons mean 'negative', 'positive' (such as 'Cancel', 'OK')"),Object(o.b)("li",{parentName:"ul"},"Three buttons mean 'neutral', 'negative', 'positive' (such as 'Later', 'Cancel', 'OK')")),Object(o.b)("p",null,"By default alerts on Android can be dismissed by tapping outside of the alert box. This event can be handled by providing an optional options parameter, with an onDismiss callback property { onDismiss: () => {} }."),Object(o.b)("p",null,"Alternatively, the dismissing behavior can be disabled altogether by providing an optional options parameter with the cancelable property set to false i.e. { cancelable: false }"),Object(o.b)("p",null,"Example usage:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// Works on both Android and iOS\nAlert.alert(\n  'Alert Title',\n  'My Alert Msg',\n  [\n    {\n      text: 'Ask me later',\n      onPress: () => console.log('Ask me later pressed')\n    },\n    {\n      text: 'Cancel',\n      onPress: () => console.log('Cancel Pressed'),\n      style: 'cancel'\n    },\n    { text: 'OK', onPress: () => console.log('OK Pressed') }\n  ],\n  { cancelable: false }\n);\n")),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"alert"},Object(o.b)("inlineCode",{parentName:"h3"},"alert()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static alert(title, message?, buttons?, options? type?)\n")))}b.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1018:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,u=d["".concat(c,".").concat(s)]||d[s]||m[s]||o;return n?r.a.createElement(u,i(i({ref:t},l),{},{components:n})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(1018)),c={id:"imagebackground",title:"ImageBackground"},i={unversionedId:"imagebackground",id:"version-0.61/imagebackground",isDocsHomePage:!1,title:"ImageBackground",description:"A common feature request from developers familiar with the web is background-image. To handle this use case, you can use the ` component, which has the same props as `, and add whatever children to it you would like to layer on top of it.",source:"@site/versioned_docs/version-0.61/imagebackground.md",slug:"/imagebackground",permalink:"/docs/0.61/imagebackground",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/imagebackground.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/components",previous:{title:"Image",permalink:"/docs/0.61/image"},next:{title:"InputAccessoryView",permalink:"/docs/0.61/inputaccessoryview"}},b=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>style</code>",id:"style",children:[]},{value:"<code>imageStyle</code>",id:"imagestyle",children:[]},{value:"<code>imageRef</code>",id:"imageref",children:[]}]}],l={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A common feature request from developers familiar with the web is ",Object(o.b)("inlineCode",{parentName:"p"},"background-image"),". To handle this use case, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"<ImageBackground>")," component, which has the same props as ",Object(o.b)("inlineCode",{parentName:"p"},"<Image>"),", and add whatever children to it you would like to layer on top of it."),Object(o.b)("p",null,"You might not want to use ",Object(o.b)("inlineCode",{parentName:"p"},"<ImageBackground>")," in some cases, since the implementation is basic. Refer to ",Object(o.b)("inlineCode",{parentName:"p"},"<ImageBackground>"),"'s ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js"},"source code")," for more insight, and create your own custom component when needed."),Object(o.b)("p",null,"Note that you must specify some width and height style attributes."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"return (\n  <ImageBackground source={...} style={{width: '100%', height: '100%'}}>\n    <Text>Inside</Text>\n  </ImageBackground>\n);\n")),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("p",null,"Inherits ",Object(o.b)("a",{parentName:"p",href:"/docs/0.61/image#props"},"Image Props"),"."),Object(o.b)("h3",{id:"style"},Object(o.b)("inlineCode",{parentName:"h3"},"style")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/0.61/view-style-props"},"view styles")),Object(o.b)("td",{parentName:"tr",align:null},"No")))),Object(o.b)("h3",{id:"imagestyle"},Object(o.b)("inlineCode",{parentName:"h3"},"imageStyle")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/0.61/image-style-props"},"image styles")),Object(o.b)("td",{parentName:"tr",align:null},"No")))),Object(o.b)("h3",{id:"imageref"},Object(o.b)("inlineCode",{parentName:"h3"},"imageRef")),Object(o.b)("p",null,"Allows to set a reference to the inner ",Object(o.b)("inlineCode",{parentName:"p"},"Image")," component"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"Ref")),Object(o.b)("td",{parentName:"tr",align:null},"No")))))}p.isMDXComponent=!0}}]);
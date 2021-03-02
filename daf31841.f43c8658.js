(window.webpackJsonp=window.webpackJsonp||[]).push([[795],{1018:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return A}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,A=p["".concat(o,".").concat(u)]||p[u]||m[u]||r;return n?i.a.createElement(A,s(s({ref:t},l),{},{components:n})):i.a.createElement(A,s({ref:t},l))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},876:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(8),r=(n(0),n(1018)),o={id:"using-a-listview",title:"Using List Views"},s={unversionedId:"using-a-listview",id:"version-0.63/using-a-listview",isDocsHomePage:!1,title:"Using List Views",description:"React Native provides a suite of components for presenting lists of data. Generally, you'll want to use either FlatList or SectionList.",source:"@site/versioned_docs/version-0.63/using-a-listview.md",slug:"/using-a-listview",permalink:"/docs/using-a-listview",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/using-a-listview.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/docs",previous:{title:"Using a ScrollView",permalink:"/docs/using-a-scrollview"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},c=[],l={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"React Native provides a suite of components for presenting lists of data. Generally, you'll want to use either ",Object(r.b)("a",{parentName:"p",href:"/docs/flatlist"},"FlatList")," or ",Object(r.b)("a",{parentName:"p",href:"/docs/sectionlist"},"SectionList"),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"FlatList")," component displays a scrolling list of changing, but similarly structured, data. ",Object(r.b)("inlineCode",{parentName:"p"},"FlatList")," works well for long lists of data, where the number of items might change over time. Unlike the more generic ",Object(r.b)("a",{parentName:"p",href:"/docs/using-a-scrollview"},Object(r.b)("inlineCode",{parentName:"a"},"ScrollView")),", the ",Object(r.b)("inlineCode",{parentName:"p"},"FlatList")," only renders elements that are currently showing on the screen, not all the elements at once."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"FlatList")," component requires two props: ",Object(r.b)("inlineCode",{parentName:"p"},"data")," and ",Object(r.b)("inlineCode",{parentName:"p"},"renderItem"),". ",Object(r.b)("inlineCode",{parentName:"p"},"data")," is the source of information for the list. ",Object(r.b)("inlineCode",{parentName:"p"},"renderItem")," takes one item from the source and returns a formatted component to render."),Object(r.b)("p",null,"This example creates a basic ",Object(r.b)("inlineCode",{parentName:"p"},"FlatList")," of hardcoded data. Each item in the ",Object(r.b)("inlineCode",{parentName:"p"},"data")," props is rendered as a ",Object(r.b)("inlineCode",{parentName:"p"},"Text")," component. The ",Object(r.b)("inlineCode",{parentName:"p"},"FlatListBasics")," component then renders the ",Object(r.b)("inlineCode",{parentName:"p"},"FlatList")," and all ",Object(r.b)("inlineCode",{parentName:"p"},"Text")," components."),Object(r.b)("div",{className:"snack-player","data-snack-name":"FlatList Basics","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20FlatList%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20flex%3A%201%2C%0A%20%20%20paddingTop%3A%2022%0A%20%20%7D%2C%0A%20%20item%3A%20%7B%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20height%3A%2044%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aconst%20FlatListBasics%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20data%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Devin'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Dan'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Dominic'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jackson'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'James'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Joel'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'John'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jillian'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jimmy'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Julie'%7D%2C%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20%3CText%20style%3D%7Bstyles.item%7D%3E%7Bitem.key%7D%3C%2FText%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20FlatListBasics%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("p",null,"If you want to render a set of data broken into logical sections, maybe with section headers, similar to ",Object(r.b)("inlineCode",{parentName:"p"},"UITableView"),"s on iOS, then a ",Object(r.b)("a",{parentName:"p",href:"/docs/sectionlist"},"SectionList")," is the way to go."),Object(r.b)("div",{className:"snack-player","data-snack-name":"SectionList Basics","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20SectionList%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20flex%3A%201%2C%0A%20%20%20paddingTop%3A%2022%0A%20%20%7D%2C%0A%20%20sectionHeader%3A%20%7B%0A%20%20%20%20paddingTop%3A%202%2C%0A%20%20%20%20paddingLeft%3A%2010%2C%0A%20%20%20%20paddingRight%3A%2010%2C%0A%20%20%20%20paddingBottom%3A%202%2C%0A%20%20%20%20fontSize%3A%2014%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%20%20backgroundColor%3A%20'rgba(247%2C247%2C247%2C1.0)'%2C%0A%20%20%7D%2C%0A%20%20item%3A%20%7B%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20height%3A%2044%2C%0A%20%20%7D%2C%0A%7D)%0A%0Aconst%20SectionListBasics%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CSectionList%0A%20%20%20%20%20%20%20%20%20%20sections%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Btitle%3A%20'D'%2C%20data%3A%20%5B'Devin'%2C%20'Dan'%2C%20'Dominic'%5D%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Btitle%3A%20'J'%2C%20data%3A%20%5B'Jackson'%2C%20'James'%2C%20'Jillian'%2C%20'Jimmy'%2C%20'Joel'%2C%20'John'%2C%20'Julie'%5D%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20%3CText%20style%3D%7Bstyles.item%7D%3E%7Bitem%7D%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20renderSectionHeader%3D%7B(%7Bsection%7D)%20%3D%3E%20%3CText%20style%3D%7Bstyles.sectionHeader%7D%3E%7Bsection.title%7D%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(item%2C%20index)%20%3D%3E%20index%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D%0A%0Aexport%20default%20SectionListBasics%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("p",null,"One of the most common uses for a list view is displaying data that you fetch from a server. To do that, you will need to ",Object(r.b)("a",{parentName:"p",href:"/docs/network"},"learn about networking in React Native"),"."))}d.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1018:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(b,".").concat(u)]||d[u]||s[u]||l;return a?r.a.createElement(m,i(i({ref:t},o),{},{components:a})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},209:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),l=(a(0),a(1018)),b={id:"viewpagerandroid",title:"\ud83d\udea7 ViewPagerAndroid"},i={unversionedId:"viewpagerandroid",id:"version-0.61/viewpagerandroid",isDocsHomePage:!1,title:"\ud83d\udea7 ViewPagerAndroid",description:"Deprecated. Use @react-native-community/viewpager instead.",source:"@site/versioned_docs/version-0.61/viewpagerandroid.md",slug:"/viewpagerandroid",permalink:"/docs/0.61/viewpagerandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/viewpagerandroid.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/components",previous:{title:"View",permalink:"/docs/0.61/view"},next:{title:"VirtualizedList",permalink:"/docs/0.61/virtualizedlist"}},c=[{value:"Props",id:"props",children:[{value:"<code>initialPage</code>",id:"initialpage",children:[]},{value:"<code>keyboardDismissMode</code>",id:"keyboarddismissmode",children:[]},{value:"<code>onPageScroll</code>",id:"onpagescroll",children:[]},{value:"<code>onPageScrollStateChanged</code>",id:"onpagescrollstatechanged",children:[]},{value:"<code>onPageSelected</code>",id:"onpageselected",children:[]},{value:"<code>pageMargin</code>",id:"pagemargin",children:[]},{value:"<code>peekEnabled</code>",id:"peekenabled",children:[]},{value:"<code>scrollEnabled</code>",id:"scrollenabled",children:[]},{value:"<code>setPage</code>",id:"setpage",children:[]},{value:"<code>setPageWithoutAnimation</code>",id:"setpagewithoutanimation",children:[]}]},{value:"Type Definitions",id:"type-definitions",children:[{value:"ViewPagerScrollState",id:"viewpagerscrollstate",children:[]}]}],o={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(l.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-viewpager"},"@react-native-community/viewpager")," instead.")),Object(l.b)("p",null,"Container that allows to flip left and right between child views. Each child view of the ",Object(l.b)("inlineCode",{parentName:"p"},"ViewPagerAndroid")," will be treated as a separate page and will be stretched to fill the ",Object(l.b)("inlineCode",{parentName:"p"},"ViewPagerAndroid"),"."),Object(l.b)("p",null,"It is important all children are ",Object(l.b)("inlineCode",{parentName:"p"},"<View>"),"s and not composite components. You can set style properties like ",Object(l.b)("inlineCode",{parentName:"p"},"padding")," or ",Object(l.b)("inlineCode",{parentName:"p"},"backgroundColor")," for each child. It is also important that each child have a ",Object(l.b)("inlineCode",{parentName:"p"},"key")," prop."),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'render() {\n  return (\n    <ViewPagerAndroid\n      style={styles.viewPager}\n      initialPage={0}>\n      <View style={styles.pageStyle} key="1">\n        <Text>First page</Text>\n      </View>\n      <View style={styles.pageStyle} key="2">\n        <Text>Second page</Text>\n      </View>\n    </ViewPagerAndroid>\n  );\n}\n\n...\n\nconst styles = {\n  ...\n  viewPager: {\n    flex: 1\n  },\n  pageStyle: {\n    alignItems: \'center\',\n    padding: 20,\n  }\n}\n')),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",{parentName:"p",href:"/docs/0.61/view#props"},"View Props"),"."),Object(l.b)("h3",{id:"initialpage"},Object(l.b)("inlineCode",{parentName:"h3"},"initialPage")),Object(l.b)("p",null,"Index of initial page that should be selected. Use ",Object(l.b)("inlineCode",{parentName:"p"},"setPage")," method to update the page, and ",Object(l.b)("inlineCode",{parentName:"p"},"onPageSelected")," to monitor page changes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"keyboarddismissmode"},Object(l.b)("inlineCode",{parentName:"h3"},"keyboardDismissMode")),Object(l.b)("p",null,"Determines whether the keyboard gets dismissed in response to a drag."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"'none' (the default), drags do not dismiss the keyboard."),Object(l.b)("li",{parentName:"ul"},"'on-drag', the keyboard is dismissed when a drag begins.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum('none', 'on-drag')"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpagescroll"},Object(l.b)("inlineCode",{parentName:"h3"},"onPageScroll")),Object(l.b)("p",null,"Executed when transitioning between pages (either because of animation for the requested page change or when user is swiping/dragging between pages) The ",Object(l.b)("inlineCode",{parentName:"p"},"event.nativeEvent")," object for this callback will carry following data:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"position - index of first page from the left that is currently visible"),Object(l.b)("li",{parentName:"ul"},"offset - value from range ","[0, 1]",' describing stage between page transitions. Value x means that (1 - x) fraction of the page at "position" index is visible, and x fraction of the next page is visible.')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpagescrollstatechanged"},Object(l.b)("inlineCode",{parentName:"h3"},"onPageScrollStateChanged")),Object(l.b)("p",null,"Function called when the page scrolling state has changed. The page scrolling state can be in 3 states:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"idle, meaning there is no interaction with the page scroller happening at the time"),Object(l.b)("li",{parentName:"ul"},"dragging, meaning there is currently an interaction with the page scroller"),Object(l.b)("li",{parentName:"ul"},"settling, meaning that there was an interaction with the page scroller, and the page scroller is now finishing its closing or opening animation")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpageselected"},Object(l.b)("inlineCode",{parentName:"h3"},"onPageSelected")),Object(l.b)("p",null,"This callback will be called once ViewPager finish navigating to selected page (when user swipes between pages). The ",Object(l.b)("inlineCode",{parentName:"p"},"event.nativeEvent")," object passed to this callback will have following fields:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"position - index of page that has been selected")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"pagemargin"},Object(l.b)("inlineCode",{parentName:"h3"},"pageMargin")),Object(l.b)("p",null,"Blank space to show between pages. This is only visible while scrolling, pages are still edge-to-edge."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"peekenabled"},Object(l.b)("inlineCode",{parentName:"h3"},"peekEnabled")),Object(l.b)("p",null,"Whether enable showing peekFraction or not. If this is true, the preview of last and next page will show in current screen. Defaults to false."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"scrollenabled"},Object(l.b)("inlineCode",{parentName:"h3"},"scrollEnabled")),Object(l.b)("p",null,"When false, the content does not scroll. The default value is true."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setpage"},Object(l.b)("inlineCode",{parentName:"h3"},"setPage")),Object(l.b)("p",null,"A helper function to scroll to a specific page in the ViewPager. The transition between pages will be animated."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"position - index of page that will be selected")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Number"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setpagewithoutanimation"},Object(l.b)("inlineCode",{parentName:"h3"},"setPageWithoutAnimation")),Object(l.b)("p",null,"A helper function to scroll to a specific page in the ViewPager. The transition between pages will ",Object(l.b)("em",{parentName:"p"},"not")," be animated."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"position - index of page that will be selected")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Number"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")))),Object(l.b)("h2",{id:"type-definitions"},"Type Definitions"),Object(l.b)("h3",{id:"viewpagerscrollstate"},"ViewPagerScrollState"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\\$Enum")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Constants:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"idle"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dragging"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"settling"),Object(l.b)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);
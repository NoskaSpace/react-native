(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{1018:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(r),u=n,O=s["".concat(b,".").concat(u)]||s[u]||p[u]||l;return r?a.a.createElement(O,o(o({ref:t},c),{},{components:r})):a.a.createElement(O,o({ref:t},c))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,b=new Array(l);b[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var c=2;c<l;c++)b[c]=r[c];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},604:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(8),l=(r(0),r(1018)),b={id:"refreshcontrol",title:"RefreshControl"},o={unversionedId:"refreshcontrol",id:"refreshcontrol",isDocsHomePage:!1,title:"RefreshControl",description:"This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.",source:"@site/../docs/refreshcontrol.md",slug:"/refreshcontrol",permalink:"/docs/next/refreshcontrol",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/refreshcontrol.md",version:"current",lastUpdatedAt:1613598890,sidebar:"components",previous:{title:"Pressable",permalink:"/docs/next/pressable"},next:{title:"ScrollView",permalink:"/docs/next/scrollview"}},i=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"View Props",id:"view-props",children:[]},{value:'<div class="label required basic">Required</div><strong><code>refreshing</code></strong>',id:"requiredrefreshing",children:[]},{value:'<code>colors</code> <div class="label android">Android</div>',id:"colors-android",children:[]},{value:'<code>enabled</code> <div class="label android">Android</div>',id:"enabled-android",children:[]},{value:"<code>onRefresh</code>",id:"onrefresh",children:[]},{value:'<code>progressBackgroundColor</code> <div class="label android">Android</div>',id:"progressbackgroundcolor-android",children:[]},{value:'<code>progressViewOffset</code> <div class="label android">Android</div>',id:"progressviewoffset-android",children:[]},{value:'<code>size</code> <div class="label android">Android</div>',id:"size-android",children:[]},{value:'<code>tintColor</code> <div class="label ios">iOS</div>',id:"tintcolor-ios",children:[]},{value:'<code>title</code> <div class="label ios">iOS</div>',id:"title-ios",children:[]},{value:'<code>titleColor</code> <div class="label ios">iOS</div>',id:"titlecolor-ios",children:[]}]},{value:"Type Definitions",id:"type-definitions",children:[{value:"RefreshLayoutConsts.SIZE",id:"refreshlayoutconstssize",children:[]}]}],c={toc:i};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at ",Object(l.b)("inlineCode",{parentName:"p"},"scrollY: 0"),", swiping down triggers an ",Object(l.b)("inlineCode",{parentName:"p"},"onRefresh")," event."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("div",{className:"snack-player","data-snack-name":"RefreshControl","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20RefreshControl%2C%20SafeAreaView%2C%20ScrollView%2C%20StyleSheet%2C%20Text%20%7D%20from%20'react-native'%3B%0A%0Aconst%20wait%20%3D%20(timeout)%20%3D%3E%20%7B%0A%20%20return%20new%20Promise(resolve%20%3D%3E%20setTimeout(resolve%2C%20timeout))%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Brefreshing%2C%20setRefreshing%5D%20%3D%20React.useState(false)%3B%0A%0A%20%20const%20onRefresh%20%3D%20React.useCallback(()%20%3D%3E%20%7B%0A%20%20%20%20setRefreshing(true)%3B%0A%20%20%20%20wait(2000).then(()%20%3D%3E%20setRefreshing(false))%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CScrollView%0A%20%20%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollView%7D%0A%20%20%20%20%20%20%20%20refreshControl%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CRefreshControl%0A%20%20%20%20%20%20%20%20%20%20%20%20refreshing%3D%7Brefreshing%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onRefresh%3D%7BonRefresh%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%3EPull%20down%20to%20see%20RefreshControl%20indicator%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%7D%2C%0A%20%20scrollView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'pink'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Note: ",Object(l.b)("inlineCode",{parentName:"p"},"refreshing")," is a controlled prop, this is why it needs to be set to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," in the ",Object(l.b)("inlineCode",{parentName:"p"},"onRefresh")," function otherwise the refresh indicator will stop immediately.")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"view-props"},Object(l.b)("a",{parentName:"h3",href:"/docs/next/view#props"},"View Props")),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",{parentName:"p",href:"/docs/next/view#props"},"View Props"),"."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"requiredrefreshing"},Object(l.b)("div",{class:"label required basic"},"Required"),Object(l.b)("strong",{parentName:"h3"},Object(l.b)("inlineCode",{parentName:"strong"},"refreshing"))),Object(l.b)("p",null,"Whether the view should be indicating an active refresh."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"colors-android"},Object(l.b)("inlineCode",{parentName:"h3"},"colors")," ",Object(l.b)("div",{class:"label android"},"Android")),Object(l.b)("p",null,"The colors (at least one) that will be used to draw the refresh indicator."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"array of ",Object(l.b)("a",{parentName:"td",href:"/docs/next/colors"},"colors"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"enabled-android"},Object(l.b)("inlineCode",{parentName:"h3"},"enabled")," ",Object(l.b)("div",{class:"label android"},"Android")),Object(l.b)("p",null,"Whether the pull to refresh functionality is enabled."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onrefresh"},Object(l.b)("inlineCode",{parentName:"h3"},"onRefresh")),Object(l.b)("p",null,"Called when the view starts refreshing."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"progressbackgroundcolor-android"},Object(l.b)("inlineCode",{parentName:"h3"},"progressBackgroundColor")," ",Object(l.b)("div",{class:"label android"},"Android")),Object(l.b)("p",null,"The background color of the refresh indicator."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/next/colors"},"color"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"progressviewoffset-android"},Object(l.b)("inlineCode",{parentName:"h3"},"progressViewOffset")," ",Object(l.b)("div",{class:"label android"},"Android")),Object(l.b)("p",null,"Progress view top offset."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"size-android"},Object(l.b)("inlineCode",{parentName:"h3"},"size")," ",Object(l.b)("div",{class:"label android"},"Android")),Object(l.b)("p",null,"Size of the refresh indicator."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/next/refreshcontrol#refreshlayoutconstssize"},"RefreshControl.SIZE")),Object(l.b)("td",{parentName:"tr",align:null},"RefreshLayoutConsts.SIZE.DEFAULT")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"tintcolor-ios"},Object(l.b)("inlineCode",{parentName:"h3"},"tintColor")," ",Object(l.b)("div",{class:"label ios"},"iOS")),Object(l.b)("p",null,"The color of the refresh indicator."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/next/colors"},"color"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"title-ios"},Object(l.b)("inlineCode",{parentName:"h3"},"title")," ",Object(l.b)("div",{class:"label ios"},"iOS")),Object(l.b)("p",null,"The title displayed under the refresh indicator."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"titlecolor-ios"},Object(l.b)("inlineCode",{parentName:"h3"},"titleColor")," ",Object(l.b)("div",{class:"label ios"},"iOS")),Object(l.b)("p",null,"The color of the refresh indicator title."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/next/colors"},"color"))))),Object(l.b)("h2",{id:"type-definitions"},"Type Definitions"),Object(l.b)("h3",{id:"refreshlayoutconstssize"},"RefreshLayoutConsts.SIZE"),Object(l.b)("p",null,"The SwipeRefreshLayout Android component constants. The actual component size may vary between devices. You can read more about the native component in the ",Object(l.b)("a",{parentName:"p",href:"https://developer.android.com/reference/androidx/swiperefreshlayout/widget/SwipeRefreshLayout"},"Android documentation"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Constants:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DEFAULT"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"1")),Object(l.b)("td",{parentName:"tr",align:null},"Default RefreshControl size")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"LARGE"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0")),Object(l.b)("td",{parentName:"tr",align:null},"Large RefreshControl size")))))}d.isMDXComponent=!0}}]);
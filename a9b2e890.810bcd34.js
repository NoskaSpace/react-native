(window.webpackJsonp=window.webpackJsonp||[]).push([[615],{1018:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),d=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),O=a,s=p["".concat(b,".").concat(O)]||p[O]||u[O]||r;return n?l.a.createElement(s,o(o({ref:t},c),{},{components:n})):l.a.createElement(s,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,b=new Array(r);b[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var c=2;c<r;c++)b[c]=n[c];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},706:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),l=n(8),r=(n(0),n(1018)),b={id:"toolbarandroid",title:"ToolbarAndroid"},o={unversionedId:"toolbarandroid",id:"version-0.62/toolbarandroid",isDocsHomePage:!1,title:"ToolbarAndroid",description:"NOTE: Toolbar Android has been deprecated and removed from the package since React Native v0.61.0. Use @react-native-community/toolbar-android instead.",source:"@site/versioned_docs/version-0.62/toolbarandroid.md",slug:"/toolbarandroid",permalink:"/docs/0.62/toolbarandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/toolbarandroid.md",version:"0.62",lastUpdatedAt:1603945169},i=[{value:"Props",id:"props",children:[{value:"<code>actions</code>",id:"actions",children:[]},{value:"<code>contentInsetStart</code>",id:"contentinsetstart",children:[]},{value:"<code>contentInsetEnd</code>",id:"contentinsetend",children:[]},{value:"<code>logo</code>",id:"logo",children:[]},{value:"<code>navIcon</code>",id:"navicon",children:[]},{value:"<code>onActionSelected</code>",id:"onactionselected",children:[]},{value:"<code>onIconClicked</code>",id:"oniconclicked",children:[]},{value:"<code>overflowIcon</code>",id:"overflowicon",children:[]},{value:"<code>rtl</code>",id:"rtl",children:[]},{value:"<code>subtitle</code>",id:"subtitle",children:[]},{value:"<code>subtitleColor</code>",id:"subtitlecolor",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>titleColor</code>",id:"titlecolor",children:[]}]}],c={toc:i};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"NOTE"),": Toolbar Android has been deprecated and removed from the package since React Native v0.61.0. Use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-native-community/toolbar-android"},"@react-native-community/toolbar-android")," instead.")),Object(r.b)("p",null,"React component that wraps the Android-only ",Object(r.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/support/v7/widget/Toolbar.html"},Object(r.b)("inlineCode",{parentName:"a"},"Toolbar")," widget"),". A Toolbar can display a logo, navigation icon (e.g. hamburger menu), a title & subtitle and a list of actions. The title and subtitle are expanded so the logo and navigation icons are displayed on the left, title and subtitle in the middle and the actions on the right."),Object(r.b)("p",null,"If the toolbar has an only child, it will be displayed between the title and actions."),Object(r.b)("p",null,"Although the Toolbar supports remote images for the logo, navigation and action icons, this should only be used in DEV mode where ",Object(r.b)("inlineCode",{parentName:"p"},"require('./some_icon.png')")," translates into a bundler URL. In release mode you should always use a drawable resource for these icons. Using ",Object(r.b)("inlineCode",{parentName:"p"},"require('./some_icon.png')")," will do this automatically for you, so as long as you don't explicitly use e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"{uri: 'http://...'}"),", you will be good."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"render: function() {\n  return (\n    <ToolbarAndroid\n      logo={require('./app_logo.png')}\n      title=\"AwesomeApp\"\n      actions={[{title: 'Settings', icon: require('./icon_settings.png'), show: 'always'}]}\n      onActionSelected={this.onActionSelected} />\n  )\n},\nonActionSelected: function(position) {\n  if (position === 0) { // index of 'Settings'\n    showSettings();\n  }\n}\n")),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("p",null,"Inherits ",Object(r.b)("a",{parentName:"p",href:"/docs/0.62/view#props"},"View Props"),"."),Object(r.b)("h3",{id:"actions"},Object(r.b)("inlineCode",{parentName:"h3"},"actions")),Object(r.b)("p",null,"Sets possible actions on the toolbar as part of the action menu. These are displayed as icons or text on the right side of the widget. If they don't fit they are placed in an 'overflow' menu."),Object(r.b)("p",null,"This property takes an array of objects, where each object has the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"title"),": ",Object(r.b)("strong",{parentName:"li"},"required"),", the title of this action"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"icon"),": the icon for this action, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"require('./some_icon.png')")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"show"),": when to show this action as an icon or hide it in the overflow menu: ",Object(r.b)("inlineCode",{parentName:"li"},"always"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ifRoom")," or ",Object(r.b)("inlineCode",{parentName:"li"},"never")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"showWithText"),": boolean, whether to show text alongside the icon or not")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"array of object: {title: string,icon: optionalImageSource,show: enum('always', 'ifRoom', 'never'),showWithText: bool}"),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"contentinsetstart"},Object(r.b)("inlineCode",{parentName:"h3"},"contentInsetStart")),Object(r.b)("p",null,"Sets the content inset for the toolbar starting edge."),Object(r.b)("p",null,"The content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"contentinsetend"},Object(r.b)("inlineCode",{parentName:"h3"},"contentInsetEnd")),Object(r.b)("p",null,"Sets the content inset for the toolbar ending edge."),Object(r.b)("p",null,"The content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"logo"},Object(r.b)("inlineCode",{parentName:"h3"},"logo")),Object(r.b)("p",null,"Sets the toolbar logo."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"optionalImageSource"),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"navicon"},Object(r.b)("inlineCode",{parentName:"h3"},"navIcon")),Object(r.b)("p",null,"Sets the navigation icon."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"optionalImageSource"),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onactionselected"},Object(r.b)("inlineCode",{parentName:"h3"},"onActionSelected")),Object(r.b)("p",null,"Callback that is called when an action is selected. The only argument that is passed to the callback is the position of the action in the actions array."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"oniconclicked"},Object(r.b)("inlineCode",{parentName:"h3"},"onIconClicked")),Object(r.b)("p",null,"Callback called when the icon is selected."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"overflowicon"},Object(r.b)("inlineCode",{parentName:"h3"},"overflowIcon")),Object(r.b)("p",null,"Sets the overflow icon."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"optionalImageSource"),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"rtl"},Object(r.b)("inlineCode",{parentName:"h3"},"rtl")),Object(r.b)("p",null,"Used to set the toolbar direction to RTL. In addition to this property you need to add"),Object(r.b)("p",null,'android:supportsRtl="true"'),Object(r.b)("p",null,"to your application AndroidManifest.xml and then call ",Object(r.b)("inlineCode",{parentName:"p"},"setLayoutDirection(LayoutDirection.RTL)")," in your MainActivity ",Object(r.b)("inlineCode",{parentName:"p"},"onCreate")," method."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"bool"),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"subtitle"},Object(r.b)("inlineCode",{parentName:"h3"},"subtitle")),Object(r.b)("p",null,"Sets the toolbar subtitle."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"subtitlecolor"},Object(r.b)("inlineCode",{parentName:"h3"},"subtitleColor")),Object(r.b)("p",null,"Sets the toolbar subtitle color."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/docs/0.62/colors"},"color")),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"testid"},Object(r.b)("inlineCode",{parentName:"h3"},"testID")),Object(r.b)("p",null,"Used to locate this view in end-to-end tests."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"title"},Object(r.b)("inlineCode",{parentName:"h3"},"title")),Object(r.b)("p",null,"Sets the toolbar title."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"titlecolor"},Object(r.b)("inlineCode",{parentName:"h3"},"titleColor")),Object(r.b)("p",null,"Sets the toolbar title color."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/docs/0.62/colors"},"color")),Object(r.b)("td",{parentName:"tr",align:null},"No")))))}d.isMDXComponent=!0}}]);
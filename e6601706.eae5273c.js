(window.webpackJsonp=window.webpackJsonp||[]).push([[838],{1018:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||l;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1019:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},1020:function(e,t,n){"use strict";var a=n(0),i=n(1021);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1021:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},1022:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(1020),r=n(1019),o=n(63),c=n.n(o),s=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,b=e.values,d=e.groupId,u=e.className,m=Object(l.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,g=Object(a.useState)(o),j=g[0],f=g[1],A=a.Children.toArray(e.children);if(null!=d){var k=h[d];null!=k&&k!==j&&b.some((function(e){return e.value===k}))&&f(k)}var y=function(e){f(e),null!=d&&O(d,e)},N=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},u)},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(a.cloneElement)(A.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},A.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},1023:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1024:function(e,t,n){"use strict";var a=n(7),i=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),r=i?"ios":"android",o=i?"macos":l?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},918:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(8),l=(n(0),n(1018)),r=n(1022),o=n(1023),c=n(1024),s={id:"linking",title:"Linking"},p={unversionedId:"linking",id:"linking",isDocsHomePage:!1,title:"Linking",description:"Projects with Native Code Only",source:"@site/../docs/linking.md",slug:"/linking",permalink:"/docs/next/linking",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/linking.md",version:"current",lastUpdatedAt:1607356774,sidebar:"api",previous:{title:"LayoutAnimation",permalink:"/docs/next/layoutanimation"},next:{title:"PanResponder",permalink:"/docs/next/panresponder"}},b=[{value:"Built-in URL Schemes",id:"built-in-url-schemes",children:[]},{value:"Enabling Deep Links",id:"enabling-deep-links",children:[]},{value:"Handling Deep Links",id:"handling-deep-links",children:[]},{value:"Example",id:"example",children:[{value:"Open Links and Deep Links (Universal Links)",id:"open-links-and-deep-links-universal-links",children:[]},{value:"Open Custom Settings",id:"open-custom-settings",children:[]},{value:"Get the Deep Link",id:"get-the-deep-link",children:[]},{value:"Send Intents (Android)",id:"send-intents-android",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>canOpenURL()</code>",id:"canopenurl",children:[]},{value:"<code>getInitialURL()</code>",id:"getinitialurl",children:[]},{value:"<code>openSettings()</code>",id:"opensettings",children:[]},{value:"<code>openURL()</code>",id:"openurl",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]},{value:'<code>sendIntent()</code> <div class="label android">Android</div>',id:"sendintent-android",children:[]}]}],d={toc:b};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"banner-native-code-required"},Object(l.b)("h3",null,"Projects with Native Code Only"),Object(l.b)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed ",Object(l.b)("code",null,"expo-cli")," workflow, see the guide on ",Object(l.b)("a",{href:"http://docs.expo.io/versions/latest/workflow/linking/"},"Linking")," in the Expo documentation for the appropriate alternative.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Linking")," gives you a general interface to interact with both incoming and outgoing app links."),Object(l.b)("p",null,"Every Link (URL) has a URL Scheme, some websites are prefixed with ",Object(l.b)("inlineCode",{parentName:"p"},"https://")," or ",Object(l.b)("inlineCode",{parentName:"p"},"http://")," and the ",Object(l.b)("inlineCode",{parentName:"p"},"http")," is the URL Scheme. Let's call it scheme for short."),Object(l.b)("p",null,"In addition to ",Object(l.b)("inlineCode",{parentName:"p"},"https"),", you're likely also familiar with the ",Object(l.b)("inlineCode",{parentName:"p"},"mailto")," scheme. When you open a link with the mailto scheme, your operating system will open an installed mail application. Similarly, there are schemes for making phone calls and sending SMS. Read more about ",Object(l.b)("a",{parentName:"p",href:"#built-in-url-schemes"},"built-in URL")," schemes below."),Object(l.b)("p",null,"Like using the mailto scheme, it's possible to link to other applications by using custom url schemes. For example, when you get a ",Object(l.b)("strong",{parentName:"p"},"Magic Link")," email from Slack, the ",Object(l.b)("strong",{parentName:"p"},"Launch Slack")," button is an anchor tag with an href that looks something like: ",Object(l.b)("inlineCode",{parentName:"p"},"slack://secret/magic-login/other-secret"),". Like with Slack, you can tell the operating system that you want to handle a custom scheme. When the Slack app opens, it receives the URL that was used to open it. This is often referred to as deep linking. Read more about how to ",Object(l.b)("a",{parentName:"p",href:"#get-the-deep-link"},"get the deep link")," into your app."),Object(l.b)("p",null,"Custom URL scheme isn't the only way to open your application on mobile. You don't want to use a custom URL scheme in links in the email because then the links would be broken on desktop. Instead, you want to use a regular ",Object(l.b)("inlineCode",{parentName:"p"},"https")," links such as ",Object(l.b)("inlineCode",{parentName:"p"},"https://www.myapp.io/records/1234546"),". and on mobile you want that link open your app. Android calls it ",Object(l.b)("strong",{parentName:"p"},"Deep Links")," (Universal Links - iOS)."),Object(l.b)("h3",{id:"built-in-url-schemes"},"Built-in URL Schemes"),Object(l.b)("p",null,"As mentioned in the introduction, there are some URL schemes for core functionality that exist on every platform. The following is a non-exhaustive list, but covers the most commonly used schemes."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Scheme"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"iOS"),Object(l.b)("th",{parentName:"tr",align:null},"Android"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"mailto")),Object(l.b)("td",{parentName:"tr",align:null},"Open mail app, eg: mailto: ",Object(l.b)("a",{parentName:"td",href:"mailto:support@expo.io"},"support@expo.io")),Object(l.b)("td",{parentName:"tr",align:null},"\u2705"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"tel")),Object(l.b)("td",{parentName:"tr",align:null},"Open phone app, eg: tel:+123456789"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"sms")),Object(l.b)("td",{parentName:"tr",align:null},"Open SMS app, eg: sms:+123456789"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"https")," / ",Object(l.b)("inlineCode",{parentName:"td"},"http")),Object(l.b)("td",{parentName:"tr",align:null},"Open web browser app, eg: ",Object(l.b)("a",{parentName:"td",href:"https://expo.io"},"https://expo.io")),Object(l.b)("td",{parentName:"tr",align:null},"\u2705"),Object(l.b)("td",{parentName:"tr",align:null},"\u2705")))),Object(l.b)("h3",{id:"enabling-deep-links"},"Enabling Deep Links"),Object(l.b)("p",null,"If you want to enable deep links in your app, please read the below guide:"),Object(l.b)(r.a,{groupId:"syntax",defaultValue:c.a.defaultPlatform,values:c.a.platforms,mdxType:"Tabs"},Object(l.b)(o.a,{value:"android",mdxType:"TabItem"},Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"For instructions on how to add support for deep linking on Android, refer to ",Object(l.b)("a",{parentName:"p",href:"http://developer.android.com/training/app-indexing/deep-linking.html#adding-filters"},"Enabling Deep Links for App Content - Add Intent Filters for Your Deep Links"),".")),Object(l.b)("p",null,"If you wish to receive the intent in an existing instance of MainActivity, you may set the ",Object(l.b)("inlineCode",{parentName:"p"},"launchMode")," of MainActivity to ",Object(l.b)("inlineCode",{parentName:"p"},"singleTask")," in ",Object(l.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),". See ",Object(l.b)("a",{parentName:"p",href:"http://developer.android.com/guide/topics/manifest/activity-element.html"},Object(l.b)("inlineCode",{parentName:"a"},"<activity>"))," documentation for more information."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},'<activity\n  android:name=".MainActivity"\n  android:launchMode="singleTask">\n'))),Object(l.b)(o.a,{value:"ios",mdxType:"TabItem"},Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"NOTE:")," On iOS, you'll need to link ",Object(l.b)("inlineCode",{parentName:"p"},"RCTLinking")," to your project by following the steps described ",Object(l.b)("a",{parentName:"p",href:"/docs/next/linking-libraries-ios#manual-linking"},"here"),". If you also want to listen to incoming app links during your app's execution, you'll need to add the following lines to your ",Object(l.b)("inlineCode",{parentName:"p"},"*AppDelegate.m"),":")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-objectivec"},"// iOS 9.x or newer\n#import <React/RCTLinkingManager.h>\n\n- (BOOL)application:(UIApplication *)application\n   openURL:(NSURL *)url\n   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options\n{\n  return [RCTLinkingManager application:application openURL:url options:options];\n}\n")),Object(l.b)("p",null,"If you're targeting iOS 8.x or older, you can use the following code instead:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-objectivec"},"// iOS 8.x or older\n#import <React/RCTLinkingManager.h>\n\n- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url\n  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation\n{\n  return [RCTLinkingManager application:application openURL:url\n                      sourceApplication:sourceApplication annotation:annotation];\n}\n")),Object(l.b)("p",null,"If your app is using ",Object(l.b)("a",{parentName:"p",href:"https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html"},"Universal Links"),", you'll need to add the following code as well:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity\n restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler\n{\n return [RCTLinkingManager application:application\n                  continueUserActivity:userActivity\n                    restorationHandler:restorationHandler];\n}\n")))),Object(l.b)("h3",{id:"handling-deep-links"},"Handling Deep Links"),Object(l.b)("p",null,"There are two ways to handle URLs that open your app."),Object(l.b)("h4",{id:"1-if-the-app-is-already-open-the-app-is-foregrounded-and-a-linking-url-event-is-fired"},"1. If the app is already open, the app is foregrounded and a Linking 'url' event is fired"),Object(l.b)("p",null,"You can handle these events with ",Object(l.b)("inlineCode",{parentName:"p"},"Linking.addEventListener('url', callback)")," - it calls ",Object(l.b)("inlineCode",{parentName:"p"},"callback({ url })")," with the linked URL"),Object(l.b)("h4",{id:"2-if-the-app-is-not-already-open-it-is-opened-and-the-url-is-passed-in-as-the-initialurl"},"2. If the app is not already open, it is opened and the url is passed in as the initialURL"),Object(l.b)("p",null,"You can handle these events with ",Object(l.b)("inlineCode",{parentName:"p"},"Linking.getInitialURL()")," - it returns a Promise that resolves to the URL, if there is one."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("h3",{id:"open-links-and-deep-links-universal-links"},"Open Links and Deep Links (Universal Links)"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useCallback%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Alert%2C%20Button%2C%20Linking%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20supportedURL%20%3D%20%22https%3A%2F%2Fgoogle.com%22%3B%0A%0Aconst%20unsupportedURL%20%3D%20%22slack%3A%2F%2Fopen%3Fteam%3D123456%22%3B%0A%0Aconst%20OpenURLButton%20%3D%20(%7B%20url%2C%20children%20%7D)%20%3D%3E%20%7B%0A%20%20const%20handlePress%20%3D%20useCallback(async%20()%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20Checking%20if%20the%20link%20is%20supported%20for%20links%20with%20custom%20URL%20scheme.%0A%20%20%20%20const%20supported%20%3D%20await%20Linking.canOpenURL(url)%3B%0A%0A%20%20%20%20if%20(supported)%20%7B%0A%20%20%20%20%20%20%2F%2F%20Opening%20the%20link%20with%20some%20app%2C%20if%20the%20URL%20scheme%20is%20%22http%22%20the%20web%20link%20should%20be%20opened%0A%20%20%20%20%20%20%2F%2F%20by%20some%20browser%20in%20the%20mobile%0A%20%20%20%20%20%20await%20Linking.openURL(url)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20Alert.alert(%60Don't%20know%20how%20to%20open%20this%20URL%3A%20%24%7Burl%7D%60)%3B%0A%20%20%20%20%7D%0A%20%20%7D%2C%20%5Burl%5D)%3B%0A%0A%20%20return%20%3CButton%20title%3D%7Bchildren%7D%20onPress%3D%7BhandlePress%7D%20%2F%3E%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3COpenURLButton%20url%3D%7BsupportedURL%7D%3EOpen%20Supported%20URL%3C%2FOpenURLButton%3E%0A%20%20%20%20%20%20%3COpenURLButton%20url%3D%7BunsupportedURL%7D%3EOpen%20Unsupported%20URL%3C%2FOpenURLButton%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("h3",{id:"open-custom-settings"},"Open Custom Settings"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useCallback%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Linking%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20OpenSettingsButton%20%3D%20(%7B%20children%20%7D)%20%3D%3E%20%7B%0A%20%20const%20handlePress%20%3D%20useCallback(async%20()%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20Open%20the%20custom%20settings%20if%20the%20app%20has%20one%0A%20%20%20%20await%20Linking.openSettings()%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20%3CButton%20title%3D%7Bchildren%7D%20onPress%3D%7BhandlePress%7D%20%2F%3E%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3COpenSettingsButton%3EOpen%20Settings%3C%2FOpenSettingsButton%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("h3",{id:"get-the-deep-link"},"Get the Deep Link"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Linking%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20useMount%20%3D%20func%20%3D%3E%20useEffect(()%20%3D%3E%20func()%2C%20%5B%5D)%3B%0A%0Aconst%20useInitialURL%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Burl%2C%20setUrl%5D%20%3D%20useState(null)%3B%0A%20%20const%20%5Bprocessing%2C%20setProcessing%5D%20%3D%20useState(true)%3B%0A%0A%20%20useMount(()%20%3D%3E%20%7B%0A%20%20%20%20const%20getUrlAsync%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%2F%2F%20Get%20the%20deep%20link%20used%20to%20open%20the%20app%0A%20%20%20%20%20%20const%20initialUrl%20%3D%20await%20Linking.getInitialURL()%3B%0A%0A%20%20%20%20%20%20%2F%2F%20The%20setTimeout%20is%20just%20for%20testing%20purpose%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setUrl(initialUrl)%3B%0A%20%20%20%20%20%20%20%20setProcessing(false)%3B%0A%20%20%20%20%20%20%7D%2C%201000)%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20getUrlAsync()%3B%0A%20%20%7D)%3B%0A%0A%20%20return%20%7B%20url%2C%20processing%20%7D%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%7B%20url%3A%20initialUrl%2C%20processing%20%7D%20%3D%20useInitialURL()%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%7Bprocessing%0A%20%20%20%20%20%20%20%20%20%20%3F%20%60Processing%20the%20initial%20url%20from%20a%20deep%20link%60%0A%20%20%20%20%20%20%20%20%20%20%3A%20%60The%20deep%20link%20is%3A%20%24%7BinitialUrl%20%7C%7C%20%22None%22%7D%60%7D%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("h3",{id:"send-intents-android"},"Send Intents (Android)"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Linking Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useCallback%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Alert%2C%20Button%2C%20Linking%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20SendIntentButton%20%3D%20(%7B%20action%2C%20extras%2C%20children%20%7D)%20%3D%3E%20%7B%0A%20%20const%20handlePress%20%3D%20useCallback(async%20()%20%3D%3E%20%7B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20await%20Linking.sendIntent(action%2C%20extras)%3B%0A%20%20%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20%20%20Alert.alert(e.message)%3B%0A%20%20%20%20%7D%0A%20%20%7D%2C%20%5Baction%2C%20extras%5D)%3B%0A%0A%20%20return%20%3CButton%20title%3D%7Bchildren%7D%20onPress%3D%7BhandlePress%7D%20%2F%3E%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CSendIntentButton%20action%3D%22android.intent.action.POWER_USAGE_SUMMARY%22%3E%0A%20%20%20%20%20%20%20%20Power%20Usage%20Summary%0A%20%20%20%20%20%20%3C%2FSendIntentButton%3E%0A%20%20%20%20%20%20%3CSendIntentButton%0A%20%20%20%20%20%20%20%20action%3D%22android.settings.APP_NOTIFICATION_SETTINGS%22%0A%20%20%20%20%20%20%20%20extras%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22android.provider.extra.APP_PACKAGE%22%3A%20%22com.facebook.katana%22%20%7D%2C%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20App%20Notification%20Settings%0A%20%20%20%20%20%20%3C%2FSendIntentButton%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%20flex%3A%201%2C%20justifyContent%3A%20%22center%22%2C%20alignItems%3A%20%22center%22%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"addeventlistener"},Object(l.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"addEventListener(type, handler);\n")),Object(l.b)("p",null,"Add a handler to Linking changes by listening to the ",Object(l.b)("inlineCode",{parentName:"p"},"url")," event type and providing the handler."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"canopenurl"},Object(l.b)("inlineCode",{parentName:"h3"},"canOpenURL()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"canOpenURL(url);\n")),Object(l.b)("p",null,"Determine whether or not an installed app can handle a given URL."),Object(l.b)("p",null,"The method returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," object. When it is determined whether or not the given URL can be handled, the promise is resolved and the first parameter is whether or not it can be opened."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," will reject on Android if it was impossible to check if the URL can be opened, and on iOS if you didn't add the specific scheme in the ",Object(l.b)("inlineCode",{parentName:"p"},"LSApplicationQueriesSchemes")," key inside ",Object(l.b)("inlineCode",{parentName:"p"},"Info.plist")," (see bellow)."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"url ",Object(l.b)("div",{className:"label basic required"},"Required")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The URL to open.")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"For web URLs, the protocol (",Object(l.b)("inlineCode",{parentName:"p"},'"http://"'),", ",Object(l.b)("inlineCode",{parentName:"p"},'"https://"'),") must be set accordingly!")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This method has limitations on iOS 9+. From ",Object(l.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uiapplication/1622952-canopenurl"},"the official Apple documentation"),":"),Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"If your app is linked against an earlier version of iOS but is running in iOS 9.0 or later, you can call this method up to 50 times. After reaching that limit, subsequent calls always return false. If the user reinstalls or upgrades the app, iOS resets the limit.")),Object(l.b)("p",{parentName:"blockquote"},"As of iOS 9, your app also needs to provide the ",Object(l.b)("inlineCode",{parentName:"p"},"LSApplicationQueriesSchemes")," key inside ",Object(l.b)("inlineCode",{parentName:"p"},"Info.plist")," or ",Object(l.b)("inlineCode",{parentName:"p"},"canOpenURL()")," will always return ",Object(l.b)("inlineCode",{parentName:"p"},"false"),".")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getinitialurl"},Object(l.b)("inlineCode",{parentName:"h3"},"getInitialURL()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"getInitialURL();\n")),Object(l.b)("p",null,"If the app launch was triggered by an app link, it will give the link url, otherwise it will give ",Object(l.b)("inlineCode",{parentName:"p"},"null"),"."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"To support deep linking on Android, refer ",Object(l.b)("a",{parentName:"p",href:"http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents"},"http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"getInitialURL may return ",Object(l.b)("inlineCode",{parentName:"p"},"null")," while debugging is enabled. Disable the debugger to ensure it gets passed.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"opensettings"},Object(l.b)("inlineCode",{parentName:"h3"},"openSettings()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"openSettings();\n")),Object(l.b)("p",null,"Open the Settings app and displays the app\u2019s custom settings, if it has any."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"openurl"},Object(l.b)("inlineCode",{parentName:"h3"},"openURL()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"openURL(url);\n")),Object(l.b)("p",null,"Try to open the given ",Object(l.b)("inlineCode",{parentName:"p"},"url")," with any of the installed apps."),Object(l.b)("p",null,'You can use other URLs, like a location (e.g. "geo:37.484847,-122.148386" on Android or "',Object(l.b)("a",{parentName:"p",href:"http://maps.apple.com/?ll=37.484847,-122.148386%22"},'http://maps.apple.com/?ll=37.484847,-122.148386"')," on iOS), a contact, or any other URL that can be opened with the installed apps."),Object(l.b)("p",null,"The method returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," object. If the user confirms the open dialog or the url automatically opens, the promise is resolved. If the user cancels the open dialog or there are no registered applications for the url, the promise is rejected."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"url ",Object(l.b)("div",{className:"label basic required"},"Required")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The URL to open.")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This method will fail if the system doesn't know how to open the specified URL. If you're passing in a non-http(s) URL, it's best to check ",Object(l.b)("inlineCode",{parentName:"p"},"canOpenURL()")," first.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"For web URLs, the protocol (",Object(l.b)("inlineCode",{parentName:"p"},'"http://"'),", ",Object(l.b)("inlineCode",{parentName:"p"},'"https://"'),") must be set accordingly!")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This method may behave differently in a simulator e.g. ",Object(l.b)("inlineCode",{parentName:"p"},'"tel:"')," links are not able to be handled in the iOS simulator as there's no access to the dialer app.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removeeventlistener"},Object(l.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"removeEventListener(type, handler);\n")),Object(l.b)("p",null,"Remove a handler by passing the ",Object(l.b)("inlineCode",{parentName:"p"},"url")," event type and the handler."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"sendintent-android"},Object(l.b)("inlineCode",{parentName:"h3"},"sendIntent()")," ",Object(l.b)("div",{class:"label android"},"Android")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"sendIntent(action, extras);\n")),Object(l.b)("p",null,"Launch an Android intent with extras."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"action ",Object(l.b)("div",{className:"label basic required"},"Required")),Object(l.b)("td",{parentName:"tr",align:null},"string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"extras"),Object(l.b)("td",{parentName:"tr",align:null},"array of ",Object(l.b)("inlineCode",{parentName:"td"},"{key: string, value: string, number, boolean}"))))))}u.isMDXComponent=!0}}]);
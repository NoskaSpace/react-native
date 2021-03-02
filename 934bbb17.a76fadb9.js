(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{1018:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),c=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=c(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(r,".").concat(m)]||d[m]||b[m]||o;return t?i.a.createElement(h,p(p({ref:n},s),{},{components:t})):i.a.createElement(h,p({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var s=2;s<o;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},641:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var a=t(3),i=t(8),o=(t(0),t(1018)),r={id:"native-components-ios",title:"Native UI Components"},p={unversionedId:"native-components-ios",id:"version-0.60/native-components-ios",isDocsHomePage:!1,title:"Native UI Components",description:"There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ScrollView and TextInput, but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application.",source:"@site/versioned_docs/version-0.60/native-components-ios.md",slug:"/native-components-ios",permalink:"/docs/0.60/native-components-ios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/native-components-ios.md",version:"0.60",lastUpdatedAt:1612547093,sidebar:"version-0.60/docs",previous:{title:"Native Modules",permalink:"/docs/0.60/native-modules-ios"},next:{title:"Linking Libraries",permalink:"/docs/0.60/linking-libraries-ios"}},l=[{value:"iOS MapView example",id:"ios-mapview-example",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Events",id:"events",children:[]},{value:"Handling multiple native views",id:"handling-multiple-native-views",children:[]},{value:"Styles",id:"styles",children:[]}],s={toc:l};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ",Object(o.b)("inlineCode",{parentName:"p"},"ScrollView")," and ",Object(o.b)("inlineCode",{parentName:"p"},"TextInput"),", but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application."),Object(o.b)("p",null,"Like the native module guide, this too is a more advanced guide that assumes you are somewhat familiar with iOS programming. This guide will show you how to build a native UI component, walking you through the implementation of a subset of the existing ",Object(o.b)("inlineCode",{parentName:"p"},"MapView")," component available in the core React Native library."),Object(o.b)("h2",{id:"ios-mapview-example"},"iOS MapView example"),Object(o.b)("p",null,"Let's say we want to add an interactive Map to our app - might as well use ",Object(o.b)("a",{parentName:"p",href:"https://developer.apple.com/library/prerelease/mac/documentation/MapKit/Reference/MKMapView_Class/index.html"},Object(o.b)("inlineCode",{parentName:"a"},"MKMapView")),", we only need to make it usable from JavaScript."),Object(o.b)("p",null,"Native views are created and manipulated by subclasses of ",Object(o.b)("inlineCode",{parentName:"p"},"RCTViewManager"),". These subclasses are similar in function to view controllers, but are essentially singletons - only one instance of each is created by the bridge. They expose native views to the ",Object(o.b)("inlineCode",{parentName:"p"},"RCTUIManager"),", which delegates back to them to set and update the properties of the views as necessary. The ",Object(o.b)("inlineCode",{parentName:"p"},"RCTViewManager"),"s are also typically the delegates for the views, sending events back to JavaScript via the bridge."),Object(o.b)("p",null,"To expose a view you can:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Subclass ",Object(o.b)("inlineCode",{parentName:"li"},"RCTViewManager")," to create a manager for your component."),Object(o.b)("li",{parentName:"ul"},"Add the ",Object(o.b)("inlineCode",{parentName:"li"},"RCT_EXPORT_MODULE()")," marker macro."),Object(o.b)("li",{parentName:"ul"},"Implement the ",Object(o.b)("inlineCode",{parentName:"li"},"-(UIView *)view")," method.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-objectivec"},"// RNTMapManager.m\n#import <MapKit/MapKit.h>\n\n#import <React/RCTViewManager.h>\n\n@interface RNTMapManager : RCTViewManager\n@end\n\n@implementation RNTMapManager\n\nRCT_EXPORT_MODULE(RNTMap)\n\n- (UIView *)view\n{\n  return [[MKMapView alloc] init];\n}\n\n@end\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Do not attempt to set the ",Object(o.b)("inlineCode",{parentName:"p"},"frame")," or ",Object(o.b)("inlineCode",{parentName:"p"},"backgroundColor")," properties on the ",Object(o.b)("inlineCode",{parentName:"p"},"UIView")," instance that you expose through the ",Object(o.b)("inlineCode",{parentName:"p"},"-view")," method. React Native will overwrite the values set by your custom class in order to match your JavaScript component's layout props. If you need this granularity of control it might be better to wrap the ",Object(o.b)("inlineCode",{parentName:"p"},"UIView")," instance you want to style in another ",Object(o.b)("inlineCode",{parentName:"p"},"UIView")," and return the wrapper ",Object(o.b)("inlineCode",{parentName:"p"},"UIView")," instead. See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/2948"},"Issue 2948")," for more context."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In the example above, we prefixed our class name with ",Object(o.b)("inlineCode",{parentName:"p"},"RNT"),". Prefixes are used to avoid name collisions with other frameworks. Apple frameworks use two-letter prefixes, and React Native uses ",Object(o.b)("inlineCode",{parentName:"p"},"RCT")," as a prefix. In order to avoid name collisions, we recommend using a three-letter prefix other than ",Object(o.b)("inlineCode",{parentName:"p"},"RCT")," in your own classes.")),Object(o.b)("p",null,"Then you need a little bit of JavaScript to make this a usable React component:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// MapView.js\n\nimport { requireNativeComponent } from 'react-native';\n\n// requireNativeComponent automatically resolves 'RNTMap' to 'RNTMapManager'\nmodule.exports = requireNativeComponent('RNTMap');\n\n// MyApp.js\n\nimport MapView from './MapView.js';\n\n...\n\nrender() {\n  return <MapView style={{ flex: 1 }} />;\n}\n")),Object(o.b)("p",null,"Make sure to use ",Object(o.b)("inlineCode",{parentName:"p"},"RNTMap")," here. We want to require the manager here, which will expose the view of our manager for use in JavaScript."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," When rendering, don't forget to stretch the view, otherwise you'll be staring at a blank screen."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"  render() {\n    return <MapView style={{flex: 1}} />;\n  }\n")),Object(o.b)("p",null,"This is now a fully-functioning native map view component in JavaScript, complete with pinch-zoom and other native gesture support. We can't really control it from JavaScript yet, though :("),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("p",null,"The first thing we can do to make this component more usable is to bridge over some native properties. Let's say we want to be able to disable zooming and specify the visible region. Disabling zoom is a boolean, so we add this one line:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-objectivec"},"// RNTMapManager.m\nRCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)\n")),Object(o.b)("p",null,"Note that we explicitly specify the type as ",Object(o.b)("inlineCode",{parentName:"p"},"BOOL")," - React Native uses ",Object(o.b)("inlineCode",{parentName:"p"},"RCTConvert"),' under the hood to convert all sorts of different data types when talking over the bridge, and bad values will show convenient "RedBox" errors to let you know there is an issue ASAP. When things are straightforward like this, the whole implementation is taken care of for you by this macro.'),Object(o.b)("p",null,"Now to actually disable zooming, we set the property in JS:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// MyApp.js\n<MapView zoomEnabled={false} style={{ flex: 1 }} />\n")),Object(o.b)("p",null,"To document the properties (and which values they accept) of our MapView component we'll add a wrapper component and document the interface with React ",Object(o.b)("inlineCode",{parentName:"p"},"PropTypes"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// MapView.js\nimport PropTypes from 'prop-types';\nimport React from 'react';\nimport { requireNativeComponent } from 'react-native';\n\nclass MapView extends React.Component {\n  render() {\n    return <RNTMap {...this.props} />;\n  }\n}\n\nMapView.propTypes = {\n  /**\n   * A Boolean value that determines whether the user may use pinch\n   * gestures to zoom in and out of the map.\n   */\n  zoomEnabled: PropTypes.bool\n};\n\nvar RNTMap = requireNativeComponent('RNTMap', MapView);\n\nmodule.exports = MapView;\n")),Object(o.b)("p",null,"Now we have a nicely documented wrapper component to work with. Note that we changed ",Object(o.b)("inlineCode",{parentName:"p"},"requireNativeComponent"),"'s second argument from ",Object(o.b)("inlineCode",{parentName:"p"},"null")," to the new ",Object(o.b)("inlineCode",{parentName:"p"},"MapView")," wrapper component. This allows the infrastructure to verify that the propTypes match the native props in order to reduce the chances of mismatches between the Objective-C and JavaScript code."),Object(o.b)("p",null,"Next, let's add the more complex ",Object(o.b)("inlineCode",{parentName:"p"},"region")," prop. We start by adding the native code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-objectivec"},"// RNTMapManager.m\nRCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)\n{\n  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];\n}\n")),Object(o.b)("p",null,"Ok, this is more complicated than the ",Object(o.b)("inlineCode",{parentName:"p"},"BOOL")," case we had before. Now we have a ",Object(o.b)("inlineCode",{parentName:"p"},"MKCoordinateRegion")," type that needs a conversion function, and we have custom code so that the view will animate when we set the region from JS. Within the function body that we provide, ",Object(o.b)("inlineCode",{parentName:"p"},"json")," refers to the raw value that has been passed from JS. There is also a ",Object(o.b)("inlineCode",{parentName:"p"},"view")," variable which gives us access to the manager's view instance, and a ",Object(o.b)("inlineCode",{parentName:"p"},"defaultView")," that we use to reset the property back to the default value if JS sends us a null sentinel."),Object(o.b)("p",null,"You could write any conversion function you want for your view - here is the implementation for ",Object(o.b)("inlineCode",{parentName:"p"},"MKCoordinateRegion")," via a category on ",Object(o.b)("inlineCode",{parentName:"p"},"RCTConvert"),". It uses an already existing category of ReactNative ",Object(o.b)("inlineCode",{parentName:"p"},"RCTConvert+CoreLocation"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-objectivec"},'// RNTMapManager.m\n\n#import "RCTConvert+Mapkit.m"\n\n// RCTConvert+Mapkit.h\n\n#import <MapKit/MapKit.h>\n#import <React/RCTConvert.h>\n#import <CoreLocation/CoreLocation.h>\n#import <React/RCTConvert+CoreLocation.h>\n\n@interface RCTConvert (Mapkit)\n\n+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;\n+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;\n\n@end\n\n@implementation RCTConvert(MapKit)\n\n+ (MKCoordinateSpan)MKCoordinateSpan:(id)json\n{\n  json = [self NSDictionary:json];\n  return (MKCoordinateSpan){\n    [self CLLocationDegrees:json[@"latitudeDelta"]],\n    [self CLLocationDegrees:json[@"longitudeDelta"]]\n  };\n}\n\n+ (MKCoordinateRegion)MKCoordinateRegion:(id)json\n{\n  return (MKCoordinateRegion){\n    [self CLLocationCoordinate2D:json],\n    [self MKCoordinateSpan:json]\n  };\n}\n\n@end\n')),Object(o.b)("p",null,'These conversion functions are designed to safely process any JSON that the JS might throw at them by displaying "RedBox" errors and returning standard initialization values when missing keys or other developer errors are encountered.'),Object(o.b)("p",null,"To finish up support for the ",Object(o.b)("inlineCode",{parentName:"p"},"region")," prop, we need to document it in ",Object(o.b)("inlineCode",{parentName:"p"},"propTypes")," (or we'll get an error that the native prop is undocumented), then we can set it like any other prop:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// MapView.js\n\nMapView.propTypes = {\n  /**\n   * A Boolean value that determines whether the user may use pinch\n   * gestures to zoom in and out of the map.\n   */\n  zoomEnabled: PropTypes.bool,\n\n  /**\n   * The region to be displayed by the map.\n   *\n   * The region is defined by the center coordinates and the span of\n   * coordinates to display.\n   */\n  region: PropTypes.shape({\n    /**\n     * Coordinates for the center of the map.\n     */\n    latitude: PropTypes.number.isRequired,\n    longitude: PropTypes.number.isRequired,\n\n    /**\n     * Distance between the minimum and the maximum latitude/longitude\n     * to be displayed.\n     */\n    latitudeDelta: PropTypes.number.isRequired,\n    longitudeDelta: PropTypes.number.isRequired,\n  }),\n};\n\n// MyApp.js\n\nrender() {\n  var region = {\n    latitude: 37.48,\n    longitude: -122.16,\n    latitudeDelta: 0.1,\n    longitudeDelta: 0.1,\n  };\n  return (\n    <MapView\n      region={region}\n      zoomEnabled={false}\n      style={{ flex: 1 }}\n    />\n  );\n}\n")),Object(o.b)("p",null,"Here you can see that the shape of the region is explicit in the JS documentation - ideally we could codegen some of this stuff, but that's not happening yet."),Object(o.b)("p",null,"Sometimes your native component will have some reserved properties that you don't want to be part of the API for the associated React component. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"Switch")," has a custom ",Object(o.b)("inlineCode",{parentName:"p"},"onChange")," handler for the raw native event, and exposes an ",Object(o.b)("inlineCode",{parentName:"p"},"onValueChange")," handler property that is invoked with the boolean value rather than the raw event. Since you don't want these native only properties to be part of the API, you don't want to put them in ",Object(o.b)("inlineCode",{parentName:"p"},"propTypes"),", but if you don't you'll get an error. The solution is to add them to the ",Object(o.b)("inlineCode",{parentName:"p"},"nativeOnly")," option, e.g."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"var RCTSwitch = requireNativeComponent('RCTSwitch', Switch, {\n  nativeOnly: { onChange: true }\n});\n")),Object(o.b)("h2",{id:"events"},"Events"),Object(o.b)("p",null,"So now we have a native map component that we can control freely from JS, but how do we deal with events from the user, like pinch-zooms or panning to change the visible region?"),Object(o.b)("p",null,"Until now we've only returned a ",Object(o.b)("inlineCode",{parentName:"p"},"MKMapView")," instance from our manager's ",Object(o.b)("inlineCode",{parentName:"p"},"-(UIView *)view")," method. We can't add new properties to ",Object(o.b)("inlineCode",{parentName:"p"},"MKMapView")," so we have to create a new subclass from ",Object(o.b)("inlineCode",{parentName:"p"},"MKMapView")," which we use for our View. We can then add a ",Object(o.b)("inlineCode",{parentName:"p"},"onRegionChange")," callback on this subclass:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-objectivec"},'// RNTMapView.h\n\n#import <MapKit/MapKit.h>\n\n#import <React/RCTComponent.h>\n\n@interface RNTMapView: MKMapView\n\n@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;\n\n@end\n\n// RNTMapView.m\n\n#import "RNTMapView.h"\n\n@implementation RNTMapView\n\n@end\n')),Object(o.b)("p",null,"Note that all ",Object(o.b)("inlineCode",{parentName:"p"},"RCTBubblingEventBlock")," must be prefixed with ",Object(o.b)("inlineCode",{parentName:"p"},"on"),". Next, declare an event handler property on ",Object(o.b)("inlineCode",{parentName:"p"},"RNTMapManager"),", make it a delegate for all the views it exposes, and forward events to JS by calling the event handler block from the native view."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-objectivec",metastring:"{9,17,31-48}","{9,17,31-48}":!0},'// RNTMapManager.m\n\n#import <MapKit/MapKit.h>\n#import <React/RCTViewManager.h>\n\n#import "RNTMapView.h"\n#import "RCTConvert+Mapkit.m"\n\n@interface RNTMapManager : RCTViewManager <MKMapViewDelegate>\n@end\n\n@implementation RNTMapManager\n\nRCT_EXPORT_MODULE()\n\nRCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)\nRCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock)\n\nRCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)\n{\n    [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];\n}\n\n- (UIView *)view\n{\n  RNTMapView *map = [RNTMapView new];\n  map.delegate = self;\n  return map;\n}\n\n#pragma mark MKMapViewDelegate\n\n- (void)mapView:(RNTMapView *)mapView regionDidChangeAnimated:(BOOL)animated\n{\n  if (!mapView.onRegionChange) {\n    return;\n  }\n\n  MKCoordinateRegion region = mapView.region;\n  mapView.onRegionChange(@{\n    @"region": @{\n      @"latitude": @(region.center.latitude),\n      @"longitude": @(region.center.longitude),\n      @"latitudeDelta": @(region.span.latitudeDelta),\n      @"longitudeDelta": @(region.span.longitudeDelta),\n    }\n  });\n}\n@end\n')),Object(o.b)("p",null,"In the delegate method ",Object(o.b)("inlineCode",{parentName:"p"},"-mapView:regionDidChangeAnimated:")," the event handler block is called on the corresponding view with the region data. Calling the ",Object(o.b)("inlineCode",{parentName:"p"},"onRegionChange")," event handler block results in calling the same callback prop in JavaScript. This callback is invoked with the raw event, which we typically process in the wrapper component to simplify API:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// MapView.js\n\nclass MapView extends React.Component {\n  _onRegionChange = (event) => {\n    if (!this.props.onRegionChange) {\n      return;\n    }\n\n    // process raw event...\n    this.props.onRegionChange(event.nativeEvent);\n  }\n  render() {\n    return (\n      <RNTMap\n        {...this.props}\n        onRegionChange={this._onRegionChange}\n      />\n    );\n  }\n}\nMapView.propTypes = {\n  /**\n   * Callback that is called continuously when the user is dragging the map.\n   */\n  onRegionChange: PropTypes.func,\n  ...\n};\n\n// MyApp.js\n\nclass MyApp extends React.Component {\n  onRegionChange(event) {\n    // Do stuff with event.region.latitude, etc.\n  }\n\n  render() {\n    var region = {\n      latitude: 37.48,\n      longitude: -122.16,\n      latitudeDelta: 0.1,\n      longitudeDelta: 0.1,\n    };\n    return (\n      <MapView\n        region={region}\n        zoomEnabled={false}\n        onRegionChange={this.onRegionChange}\n      />\n    );\n  }\n}\n")),Object(o.b)("h2",{id:"handling-multiple-native-views"},"Handling multiple native views"),Object(o.b)("p",null,"A React Native view can have more than one child view in the view tree eg."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"<View>\n  <MyNativeView />\n  <MyNativeView />\n  <Button />\n</View>\n")),Object(o.b)("p",null,"In this example, the class ",Object(o.b)("inlineCode",{parentName:"p"},"MyNativeView")," is a wrapper for a ",Object(o.b)("inlineCode",{parentName:"p"},"NativeComponent")," and exposes methods, which will be called on the iOS platform. ",Object(o.b)("inlineCode",{parentName:"p"},"MyNativeView")," is defined in ",Object(o.b)("inlineCode",{parentName:"p"},"MyNativeView.ios.js")," and contains proxy methods of ",Object(o.b)("inlineCode",{parentName:"p"},"NativeComponent"),"."),Object(o.b)("p",null,"When the user interacts with the component, like clicking the button, the ",Object(o.b)("inlineCode",{parentName:"p"},"backgroundColor")," of ",Object(o.b)("inlineCode",{parentName:"p"},"MyNativeView")," changes. In this case ",Object(o.b)("inlineCode",{parentName:"p"},"UIManager")," would not know which ",Object(o.b)("inlineCode",{parentName:"p"},"MyNativeView")," should be handled and which one should change ",Object(o.b)("inlineCode",{parentName:"p"},"backgroundColor"),". Below you will find a solution to this problem:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"<View>\n  <MyNativeView ref={this.myNativeReference} />\n  <MyNativeView ref={this.myNativeReference2} />\n  <Button\n    onPress={() => {\n      this.myNativeReference.callNativeMethod();\n    }}\n  />\n</View>\n")),Object(o.b)("p",null,"Now the above component has a reference to a particular ",Object(o.b)("inlineCode",{parentName:"p"},"MyNativeView")," which allows us to use a specific instance of ",Object(o.b)("inlineCode",{parentName:"p"},"MyNativeView"),". Now the button can control which ",Object(o.b)("inlineCode",{parentName:"p"},"MyNativeView")," should change its ",Object(o.b)("inlineCode",{parentName:"p"},"backgroundColor"),". In this example let's assume that ",Object(o.b)("inlineCode",{parentName:"p"},"callNativeMethod")," changes ",Object(o.b)("inlineCode",{parentName:"p"},"backgroundColor"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"MyNativeView.ios.js")," contains code as follow:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"class MyNativeView extends React.Component {\n  callNativeMethod = () => {\n    UIManager.dispatchViewManagerCommand(\n      ReactNative.findNodeHandle(this),\n      UIManager.getViewManagerConfig('RNCMyNativeView').Commands\n        .callNativeMethod,\n      []\n    );\n  };\n\n  render() {\n    return <NativeComponent ref={NATIVE_COMPONENT_REF} />;\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"callNativeMethod")," is our custom iOS method which for example changes the ",Object(o.b)("inlineCode",{parentName:"p"},"backgroundColor")," which is exposed through ",Object(o.b)("inlineCode",{parentName:"p"},"MyNativeView"),". This method uses ",Object(o.b)("inlineCode",{parentName:"p"},"UIManager.dispatchViewManagerCommand")," which needs 3 parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"(nonnull NSNumber \\*)reactTag"),"\u200a -\u200a id of react view."),Object(o.b)("li",{parentName:"ul"},"commandID:",Object(o.b)("inlineCode",{parentName:"li"},"(NSInteger)commandID"),"\u200a -\u200a Id of the native method that should be called"),Object(o.b)("li",{parentName:"ul"},"commandArgs:",Object(o.b)("inlineCode",{parentName:"li"},"(NSArray<id> \\*)commandArgs"),"\u200a -\u200a Args of the native method that we can pass from JS to native.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"RNCMyNativeViewManager.m")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-objectivec"},'#import <React/RCTViewManager.h>\n#import <React/RCTUIManager.h>\n#import <React/RCTLog.h>\n\nRCT_EXPORT_METHOD(callNativeMethod:(nonnull NSNumber*) reactTag) {\n    [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {\n        NativeView *view = viewRegistry[reactTag];\n        if (!view || ![view isKindOfClass:[NativeView class]]) {\n            RCTLogError(@"Cannot find NativeView with tag #%@", reactTag);\n            return;\n        }\n        [view callNativeMethod];\n    }];\n\n}\n')),Object(o.b)("p",null,"Here the ",Object(o.b)("inlineCode",{parentName:"p"},"callNativeMethod")," is defined in the ",Object(o.b)("inlineCode",{parentName:"p"},"RNCMyNativeViewManager.m")," file and contains only one parameter which is ",Object(o.b)("inlineCode",{parentName:"p"},"(nonnull NSNumber*) reactTag"),". This exported function will find a particular view using ",Object(o.b)("inlineCode",{parentName:"p"},"addUIBlock")," which contains the ",Object(o.b)("inlineCode",{parentName:"p"},"viewRegistry")," parameter and returns the component based on ",Object(o.b)("inlineCode",{parentName:"p"},"reactTag")," allowing it to call the method on the correct component."),Object(o.b)("h2",{id:"styles"},"Styles"),Object(o.b)("p",null,"Since all our native react views are subclasses of ",Object(o.b)("inlineCode",{parentName:"p"},"UIView"),", most style attributes will work like you would expect out of the box. Some components will want a default style, however, for example ",Object(o.b)("inlineCode",{parentName:"p"},"UIDatePicker")," which is a fixed size. This default style is important for the layout algorithm to work as expected, but we also want to be able to override the default style when using the component. ",Object(o.b)("inlineCode",{parentName:"p"},"DatePickerIOS")," does this by wrapping the native component in an extra view, which has flexible styling, and using a fixed style (which is generated with constants passed in from native) on the inner native component:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// DatePickerIOS.ios.js\n\nimport { UIManager } from 'react-native';\nvar RCTDatePickerIOSConsts = UIManager.RCTDatePicker.Constants;\n...\n  render: function() {\n    return (\n      <View style={this.props.style}>\n        <RCTDatePickerIOS\n          ref={DATEPICKER}\n          style={styles.rkDatePickerIOS}\n          ...\n        />\n      </View>\n    );\n  }\n});\n\nvar styles = StyleSheet.create({\n  rkDatePickerIOS: {\n    height: RCTDatePickerIOSConsts.ComponentHeight,\n    width: RCTDatePickerIOSConsts.ComponentWidth,\n  },\n});\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"RCTDatePickerIOSConsts")," constants are exported from native by grabbing the actual frame of the native component like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-objectivec"},'// RCTDatePickerManager.m\n\n- (NSDictionary *)constantsToExport\n{\n  UIDatePicker *dp = [[UIDatePicker alloc] init];\n  [dp layoutIfNeeded];\n\n  return @{\n    @"ComponentHeight": @(CGRectGetHeight(dp.frame)),\n    @"ComponentWidth": @(CGRectGetWidth(dp.frame)),\n    @"DatePickerModes": @{\n      @"time": @(UIDatePickerModeTime),\n      @"date": @(UIDatePickerModeDate),\n      @"datetime": @(UIDatePickerModeDateAndTime),\n    }\n  };\n}\n')),Object(o.b)("p",null,"This guide covered many of the aspects of bridging over custom native components, but there is even more you might need to consider, such as custom hooks for inserting and laying out subviews. If you want to go even deeper, check out the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/React/Views"},"source code")," of some of the implemented components."))}c.isMDXComponent=!0}}]);
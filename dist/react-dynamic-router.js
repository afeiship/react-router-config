!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],t):"object"==typeof exports?exports.ReactDynamicRouter=t(require("prop-types"),require("react")):e.ReactDynamicRouter=t(e["prop-types"],e.react)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,f,p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(4),l=(n(s),r(3)),d=n(l),y=(f=i=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=(e.className,e.location),n=e.match,a=e.namespace,u=(o(e,["className","location","match","namespace"]),t.pathname.split("/"));return(0,s.createElement)(r(2)(a+"/"+u[2]+"/"+u[3]+".js").default,{match:n})}}],[{key:"build",value:function(e,t){var r=this;return t.map(function(t,n){return(0,s.createElement)(e,{key:n,path:t,component:r})})}}]),t}(s.Component),i.propTypes={className:d.default.string,namespace:d.default.string,location:d.default.object,match:d.default.object},i.defaultProps={namespace:"admin",location:{},match:{}},f);t.default=y},function(e,t,r){function n(e){return r(o(e))}function o(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./react-dynamic-router.js":1};n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id=2},function(t,r){t.exports=e},function(e,r){e.exports=t}])});
//# sourceMappingURL=react-dynamic-router.js.map
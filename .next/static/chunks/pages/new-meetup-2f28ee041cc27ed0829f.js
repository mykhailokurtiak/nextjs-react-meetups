(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},6422:function(e,t,n){"use strict";var r=n(5893),o=n(594),a=n.n(o);t.Z=function(e){return(0,r.jsx)("div",{className:a().card,children:e.children})}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(a=n(617))&&a.__esModule?a:{default:a},c=n(3367),s=n(4287),d=n(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,s=h.length;c<s;c++){var d=h[c];if(o.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?a=!1:n.add(d);else{var f=o.props[d],p=r[d]||new Set;"name"===d&&i||!p.has(f)?(p.add(f),r[d]=p):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:a})}))}function v(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)}v.rewind=function(){};var y=v;t.default=y},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),u=n(8585),c=n(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(7294),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},8573:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7757),o=n.n(r),a=n(5893);function i(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function u(e){i(a,r,o,u,c,"next",e)}function c(e){i(a,r,o,u,c,"throw",e)}u(void 0)}))}}var c=n(1163),s=n(7294),d=n(9008),f=n(6422),p=n(578),l=n.n(p);var h=function(e){var t=(0,s.useRef)(),n=(0,s.useRef)(),r=(0,s.useRef)(),o=(0,s.useRef)();return(0,a.jsx)(f.Z,{children:(0,a.jsxs)("form",{className:l().form,onSubmit:function(a){a.preventDefault();var i={title:t.current.value,image:n.current.value,address:r.current.value,description:o.current.value};e.onAddMeetup(i)},children:[(0,a.jsxs)("div",{className:l().control,children:[(0,a.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),(0,a.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),(0,a.jsxs)("div",{className:l().control,children:[(0,a.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),(0,a.jsx)("input",{type:"url",required:!0,id:"image",ref:n})]}),(0,a.jsxs)("div",{className:l().control,children:[(0,a.jsx)("label",{htmlFor:"address",children:"Address"}),(0,a.jsx)("input",{type:"text",required:!0,id:"address",ref:r})]}),(0,a.jsxs)("div",{className:l().control,children:[(0,a.jsx)("label",{htmlFor:"description",children:"Description"}),(0,a.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:o})]}),(0,a.jsx)("div",{className:l().actions,children:(0,a.jsx)("button",{children:"Add Meetup"})})]})})};var m=function(){var e=(0,c.useRouter)();function t(){return(t=u(o().mark((function t(n){var r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/new-meetup",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 2:return r=t.sent,t.next=5,r.json();case 5:a=t.sent,console.log(a),e.push("/");case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)(d.default,{children:[(0,a.jsx)("title",{children:"Add a New Meetup"}),(0,a.jsx)("meta",{name:"description",content:"Add your own meetups and make amazing networking opportunities!"})]}),(0,a.jsx)(h,{onAddMeetup:function(e){return t.apply(this,arguments)}})]})}},6416:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-meetup",function(){return n(8573)}])},578:function(e){e.exports={form:"NewMeetupForm_form__2wUf9",control:"NewMeetupForm_control__Vi75y",actions:"NewMeetupForm_actions__2d-nQ"}},594:function(e){e.exports={card:"Card_card__3KSLO"}},9008:function(e,t,n){e.exports=n(7947)},1163:function(e,t,n){e.exports=n(2441)}},function(e){e.O(0,[774,888,179],(function(){return t=6416,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
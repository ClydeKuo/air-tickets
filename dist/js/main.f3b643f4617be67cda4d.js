webpackJsonp([4],[,,,function(e,t,n){n(13);var o=n(7)(n(9),n(14),"data-v-9a0f8ba6",null);o.options.__file="D:\\workstation\\air-tickets\\src\\app.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){"use strict";var o={};o.title=function(e){e=e?e+" - Home":"AIR TICKETS",window.document.title=e},t.a=o},function(e,t,n){"use strict";var o=n(12),r=[{path:"/",title:"AIR TICKETS",component:function(e){return Promise.resolve().then(function(){var t=[n(3)];e.apply(null,t)}.bind(this)).catch(n.oe)},children:o.a}];t.a=r},function(e,t){},function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(r=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),o){var c=Object.create(a.computed||null);Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}}),a.computed=c}return{esModule:r,exports:i,options:a}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},mounted:function(){},beforeDestroy:function(){},methods:{}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(1),i=n.n(r),u=n(2),a=n(5),c=n(4),s=n(3),l=n.n(s),f=n(6);n.n(f);o.default.use(u.a),o.default.use(i.a);var p={mode:"history",routes:a.a},d=new u.a(p);d.beforeEach(function(e,t,n){i.a.LoadingBar.start(),c.a.title(e.meta.title),n()}),d.afterEach(function(e,t,n){i.a.LoadingBar.finish(),window.scrollTo(0,0)}),new o.default({el:"#app",router:d,render:function(e){return e(l.a)}})},,function(e,t,n){"use strict";t.a=[{path:"",title:"HOME",name:"home",component:function(e){return n.e(1).then(function(){var t=[n(16)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/main",title:"AIR TICKETS",component:function(e){return n.e(3).then(function(){var t=[n(17)];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"",title:"AIR TICKETS",name:"main",component:function(e){return n.e(0).then(function(){var t=[n(8)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/ucenter",title:"用户中心",name:"ucenter",component:function(e){return n.e(0).then(function(){var t=[n(8)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/security",title:"安全中心",name:"security",component:function(e){return n.e(2).then(function(){var t=[n(18)];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}]},function(e,t){},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}],[10]);
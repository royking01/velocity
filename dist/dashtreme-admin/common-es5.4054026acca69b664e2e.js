!function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{NcV3:function(t,n,r){"use strict";r.d(n,"a",(function(){return i}));var o=r("mrSG"),c=r("LRne"),a=r("iqUP"),u=r("fXoL"),i=function(){var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.level=[]}var n,r,u;return n=t,(r=[{key:"test",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,a.firestore().collection("db").doc("users").collection("dispatchers").where("name","!=","").get().then((function(e){e.forEach((function(e){t.push(e.data())})),n.level=t}));case 3:return e.abrupt("return",Object(c.a)(t));case 4:case"end":return e.stop()}}),e)})))}},{key:"getUser",value:function(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e){t.next=4;break}return t.next=3,a.firestore().collection("db").doc("users").collection("dispatchers").doc(e).get();case 3:return t.abrupt("return",t.sent.data());case 4:case"end":return t.stop()}}),t)})))}},{key:"getCompany",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,a.firestore().collection("db").doc("users").collection("companies").where("name","!=","").get().then((function(e){e.forEach((function(e){t.push(e.data())})),n.level=t}));case 3:return e.abrupt("return",Object(c.a)(t));case 4:case"end":return e.stop()}}),e)})))}},{key:"getComp",value:function(e){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e){t.next=4;break}return t.next=3,a.firestore().collection("db").doc("users").collection("companies").doc(e).get();case 3:return t.abrupt("return",t.sent.data());case 4:case"end":return t.stop()}}),t)})))}}])&&e(n.prototype,r),u&&e(n,u),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},mrSG:function(e,t,n){"use strict";function r(e,t,n,r){var o,c=arguments.length,a=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(c<3?o(a):c>3?o(t,n,a):o(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a}function o(e,t,n,r){return new(n||(n=Promise))((function(o,c){function a(e){try{i(r.next(e))}catch(t){c(t)}}function u(e){try{i(r.throw(e))}catch(t){c(t)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}i((r=r.apply(e,t||[])).next())}))}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}])}();
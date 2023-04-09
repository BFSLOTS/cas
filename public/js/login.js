(self.webpackChunk=self.webpackChunk||[]).push([[4535],{57689:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(87757),o=r.n(n),a=r(15566),i=r(68843);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){c(a,n,o,i,s,"next",e)}function s(e){c(a,n,o,i,s,"throw",e)}i(void 0)}))}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===s(e)&&(r=e,e=""),r=f({url:e,title:t,width:600,height:720},r);var n=void 0!==window.screenLeft?window.screenLeft:window.screen.left,o=void 0!==window.screenTop?window.screenTop:window.screen.top,a=window.innerWidth||document.documentElement.clientWidth||window.screen.width,i=window.innerHeight||document.documentElement.clientHeight||window.screen.height;r.left=a/2-r.width/2+n,r.top=i/2-r.height/2+o;var c=Object.keys(r).reduce((function(e,t){return e.push("".concat(t,"=").concat(r[t])),e}),[]).join(","),u=window.open(e,t,c);return window.focus&&u.focus(),u}const p={name:"OAuth",computed:f(f({},(0,r(20629).rn)("auth",["user"])),{},{providers:function(){return(0,a.v)("oauth")},providersCount:function(){return this.providers?Object.keys(this.providers).length:0}}),mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{ucfirst:i.Ps,loginWith:function(e){var t=this;return u(o().mark((function r(){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=m("",t.$t("Log in with {0}",[e])),r.next=3,t.$store.dispatch("auth/fetchOAuthRedirectUrl",{provider:e});case 3:n.location.href=r.sent;case 4:case"end":return r.stop()}}),r)})))()},onMessage:function(e){var t=this;return u(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.origin===window.origin&&e.data.user){r.next=2;break}return r.abrupt("return");case 2:t.$store.dispatch("auth/updateUser",e.data.user),t.user.two_factor_auth_enabled&&!t.user.two_factor_auth_passed?t.$router.push({name:"2fa"}):t.$router.push({name:"home"});case 4:case"end":return r.stop()}}),r)})))()}}}},91441:(e,t,r)=>{"use strict";r.d(t,{s:()=>n,x:()=>o});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.providersCount?r("v-row",[r("v-col",{staticClass:"text-center"},[e._l(e.providers,(function(t,n){return r("v-btn",{key:n,staticClass:"mx-2",attrs:{fab:"",icon:"",elevation:"5"},on:{click:function(t){return e.loginWith(n)}}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(o){var a=o.on;return[r("v-icon",e._g({attrs:{large:""}},a),[e._v("\n            mdi-"+e._s(t.mdi||n)+"\n          ")])]}}],null,!0)},[e._v(" "),r("span",[e._v(e._s(e.$t("Log in with {0}",[e.ucfirst(n)])))])])],1)})),e._v(" "),r("v-divider",{staticClass:"my-7"})],2)],1):e._e()},o=[]},26525:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>T});var n=r(87757),o=r.n(n),a=r(9669),i=r.n(a),s=r(15566),c=r(50175),u=r.n(c),l=r(36395),f=r(90961),d=r(20629),m=r(97991);function p(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const b={middleware:"guest",components:{OAuth:f.Z,VueRecaptcha:m.Z},mixins:[l.Z],metaInfo:function(){return{title:this.$t("Authentication")}},data:function(){return{csrfCookieRetrieved:!1,showPassword:!1,form:new(u())({email:null,password:null,remember:"",recaptcha:null})}},computed:h(h({},(0,d.rn)("auth",["user"])),{},{appLogoUrl:function(){return(0,s.v)("app.logo")},recaptchaPublicKey:function(){return(0,s.v)("services.recaptcha.public_key")}}),methods:{login:function(){var e,t=this;return(e=o().mark((function e(){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.csrfCookieRetrieved){e.next=4;break}return e.next=3,i().get("/sanctum/csrf-cookie");case 3:t.csrfCookieRetrieved=!0;case 4:return e.next=6,t.form.post("/api/auth/login").catch((function(){return t.recaptchaPublicKey&&(t.form.recaptcha=null,t.$refs.recaptcha.reset()),{}}));case 6:r=e.sent,(n=r.data)&&(t.$store.dispatch("auth/updateUser",n),t.user.two_factor_auth_enabled&&!t.user.two_factor_auth_passed?t.$router.push({name:"2fa"}):t.$router.push({name:"home"}));case 9:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){p(a,n,o,i,s,"next",e)}function s(e){p(a,n,o,i,s,"throw",e)}i(void 0)}))})()}}};var y=r(51900),g=r(43453),_=r.n(g),O=r(97844),k=r(4330),P=r(43776),x=r(5255),j=r(59933),$=r(17024),C=r(66530),V=r(83240),Z=r(17100),E=r(57894),D=r(54933),S=r(40961),R=r(73845),L=(0,y.Z)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6",lg:"4"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary"}},[r("router-link",{attrs:{to:{name:"home"}}},[r("v-avatar",{attrs:{size:"40",tile:""}},[r("v-img",{attrs:{src:e.appLogoUrl}})],1)],1),e._v(" "),r("v-toolbar-title",{staticClass:"ml-2"},[e._v("\n            "+e._s(e.$t("Authentication"))+"\n          ")])],1),e._v(" "),r("v-card-text",[r("o-auth"),e._v(" "),r("v-form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}},model:{value:e.formIsValid,callback:function(t){e.formIsValid=t},expression:"formIsValid"}},[r("v-text-field",{attrs:{label:e.$t("Email"),type:"email",name:"email",rules:[e.validationRequired,e.validationEmail],error:e.form.errors.has("email"),"error-messages":e.form.errors.get("email"),outlined:""},on:{keydown:e.clearFormErrors},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Password"),"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",name:"password",rules:[e.validationRequired],error:e.form.errors.has("password"),"error-messages":e.form.errors.get("password"),outlined:"",counter:!0},on:{"click:append":function(t){e.showPassword=!e.showPassword},keydown:e.clearFormErrors},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("v-checkbox",{attrs:{name:"remember",label:e.$t("Remember me"),color:"primary","true-value":"1","false-value":""},model:{value:e.form.remember,callback:function(t){e.$set(e.form,"remember",t)},expression:"form.remember"}}),e._v(" "),e.recaptchaPublicKey?r("vue-recaptcha",{ref:"recaptcha",staticClass:"mb-3",attrs:{sitekey:e.recaptchaPublicKey,loadRecaptchaScript:!0,theme:this.$vuetify.theme.isDark?"dark":"light"},on:{verify:function(t){return e.form.recaptcha=t}}}):e._e(),e._v(" "),r("v-row",{attrs:{align:"center"}},[r("v-col",{staticClass:"text-center text-md-left"},[r("v-btn",{attrs:{type:"submit",color:"primary",disabled:!e.formIsValid||e.form.busy||!!e.recaptchaPublicKey&&!e.form.recaptcha,loading:e.form.busy}},[e._v("\n                  "+e._s(e.$t("Log in"))+"\n                ")])],1),e._v(" "),r("v-col",{staticClass:"d-flex flex-column text-center text-md-right"},[r("router-link",{attrs:{to:{name:"register"}}},[e._v("\n                  "+e._s(e.$t("Not signed up?"))+"\n                ")]),e._v(" "),r("router-link",{attrs:{to:{name:"password.email"}}},[e._v("\n                  "+e._s(e.$t("Forgot password?"))+"\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);const T=L.exports;_()(L,{VAvatar:O.Z,VBtn:k.Z,VCard:P.Z,VCardText:x.ZB,VCheckbox:j.Z,VCol:$.Z,VContainer:C.Z,VForm:V.Z,VImg:Z.Z,VRow:E.Z,VTextField:D.Z,VToolbar:S.Z,VToolbarTitle:R.qW})}}]);
//# sourceMappingURL=login.js.map
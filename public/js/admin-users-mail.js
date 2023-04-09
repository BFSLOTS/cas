(self.webpackChunk=self.webpackChunk||[]).push([[9292],{41092:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const s={props:["id","small"]}},96992:(e,t,r)=>{"use strict";r.d(t,{s:()=>s,x:()=>i});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[r("v-btn",e._g({attrs:{icon:""}},s),[r("v-icon",{attrs:{small:e.small}},[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),r("v-list",[r("v-list-item",{attrs:{to:{name:"users.show",params:{id:e.id}},exact:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:e.small}},[e._v("mdi-account")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("Profile")))])],1)],1),e._v(" "),r("v-list-item",{attrs:{to:{name:"admin.users.show",params:{id:e.id}},exact:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:e.small}},[e._v("mdi-eye")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("View")))])],1)],1),e._v(" "),r("v-list-item",{attrs:{to:{name:"admin.users.edit",params:{id:e.id}},exact:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:e.small}},[e._v("mdi-pencil")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("Edit")))])],1)],1),e._v(" "),r("v-list-item",{attrs:{to:{name:"admin.users.delete",params:{id:e.id}},exact:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:e.small}},[e._v("mdi-delete")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("Delete")))])],1)],1),e._v(" "),r("v-list-item",{attrs:{to:{name:"admin.users.mail",params:{id:e.id}},exact:""}},[r("v-list-item-icon",[r("v-icon",{attrs:{small:e.small}},[e._v("mdi-email-outline")])],1),e._v(" "),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("E-mail")))])],1)],1)],1)],1)},i=[]},22120:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>F});var s=r(87757),i=r.n(s),n=r(9669),a=r.n(n),o=r(50175),l=r.n(o),m=r(36395),c=r(31531);function u(e,t,r,s,i,n,a){try{var o=e[n](a),l=o.value}catch(e){return void r(e)}o.done?t(l):Promise.resolve(l).then(s,i)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(s,i){var n=e.apply(t,r);function a(e){u(n,s,i,a,o,"next",e)}function o(e){u(n,s,i,a,o,"throw",e)}a(void 0)}))}}const v={middleware:["auth","verified","2fa_passed","admin"],components:{Preloader:r(81673).Z,UserMenu:c.Z},mixins:[m.Z],props:["id"],metaInfo:function(){return{title:this.$t("User {0}",[this.id])}},data:function(){return{user:{},roles:[],showPassword:!1,email:null,form:new(l())({subject:null,greeting:this.$t("Hello"),message:null})}},created:function(){var e=this;return d(i().mark((function t(){var r,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a().get("/api/admin/users/".concat(e.id));case 2:r=t.sent,s=r.data,e.user=s.user;case 5:case"end":return t.stop()}}),t)})))()},methods:{send:function(){var e=this;return d(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/api/admin/users/".concat(e.id,"/mail"));case 2:e.$store.dispatch("message/success",{text:e.$t("Message is successfully sent.")}),e.$router.push({name:"admin.users.index"});case 4:case"end":return t.stop()}}),t)})))()}}};var f=r(51900),_=r(43453),p=r.n(_),b=r(4330),g=r(43776),x=r(5255),h=r(17024),y=r(66530),$=r(83240),w=r(6571),V=r(57894),Z=r(55515),k=r(22515),j=r(54933),E=r(14884),C=r(40961),I=r(73845),T=(0,f.Z)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-card",[r("v-toolbar",[r("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$router.go(-1)}}},[r("v-icon",[e._v("mdi-arrow-left")])],1),e._v(" "),r("v-toolbar-title",[e._v("\n            "+e._s(e.$t("User {0}",[e.id]))+"\n          ")]),e._v(" "),r("v-spacer"),e._v(" "),r("user-menu",{attrs:{id:e.id}}),e._v(" "),r("preloader",{attrs:{active:!e.user.id}})],1),e._v(" "),r("v-card-text",[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.send(t)}},model:{value:e.formIsValid,callback:function(t){e.formIsValid=t},expression:"formIsValid"}},[r("v-text-field",{attrs:{label:e.$t("Subject"),type:"text",name:"subject",disabled:e.form.busy||!e.user.id,rules:[e.validationRequired],error:e.form.errors.has("subject"),"error-messages":e.form.errors.get("subject"),outlined:""},on:{keydown:function(t){return e.clearFormErrors(t,"subject")}},model:{value:e.form.subject,callback:function(t){e.$set(e.form,"subject",t)},expression:"form.subject"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Greeting"),type:"text",name:"greeting",disabled:e.form.busy||!e.user.id,rules:[e.validationRequired],error:e.form.errors.has("greeting"),"error-messages":e.form.errors.get("greeting"),outlined:""},on:{keydown:function(t){return e.clearFormErrors(t,"greeting")}},model:{value:e.form.greeting,callback:function(t){e.$set(e.form,"greeting",t)},expression:"form.greeting"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Email"),type:"email",outlined:"",value:e.user.email,disabled:""}}),e._v(" "),r("v-textarea",{attrs:{label:e.$t("Message"),name:"message",disabled:e.form.busy||!e.user.id,rules:[e.validationRequired],error:e.form.errors.has("message"),"error-messages":e.form.errors.get("message"),outlined:""},on:{keydown:function(t){return e.clearFormErrors(t,"message")}},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}}),e._v(" "),r("v-skeleton-loader",{attrs:{type:"button",loading:!e.user.id}},[r("v-btn",{attrs:{type:"submit",color:"primary",disabled:!e.formIsValid||e.form.busy,loading:e.form.busy}},[e._v("\n                "+e._s(e.$t("Send"))+"\n              ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);const F=T.exports;p()(T,{VBtn:b.Z,VCard:g.Z,VCardText:x.ZB,VCol:h.Z,VContainer:y.Z,VForm:$.Z,VIcon:w.Z,VRow:V.Z,VSkeletonLoader:Z.Z,VSpacer:k.Z,VTextField:j.Z,VTextarea:E.Z,VToolbar:C.Z,VToolbarTitle:I.qW})}}]);
//# sourceMappingURL=admin-users-mail.js.map
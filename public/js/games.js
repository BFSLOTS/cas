(self.webpackChunk=self.webpackChunk||[]).push([[3903],{82203:(e,r,a)=>{"use strict";a.d(r,{Z:()=>i});var t=a(94015),s=a.n(t),n=a(23645),o=a.n(n)()(s());o.push([e.id,".link[data-v-3f72e3fb]{color:var(--v-anchor-base)}","",{version:3,sources:["webpack://./resources/js/components/GameDetailModal.vue"],names:[],mappings:"AAgDA,uBACE,0BA/CF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.link {\n  color: var(--v-anchor-base);\n}\n"],sourceRoot:""}]);const i=o},70306:(e,r,a)=>{"use strict";a.d(r,{Z:()=>c});var t=a(87757),s=a.n(t),n=a(9669),o=a.n(n);function i(e,r,a,t,s,n,o){try{var i=e[n](o),c=i.value}catch(e){return void a(e)}i.done?r(c):Promise.resolve(c).then(t,s)}const c={props:{id:{type:[Number,String],required:!0}},data:function(){return{gamePackageId:null}},computed:{component:function(){var e=this;return this.gamePackageId?function(){return a(99593)("./".concat(e.gamePackageId,"/resources/js/pages/show"))}:null}},created:function(){var e,r=this;return(e=s().mark((function e(){var a,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/api/history/games/".concat(r.id,"/package"));case 2:a=e.sent,t=a.data,r.gamePackageId=t.id;case 5:case"end":return e.stop()}}),e)})),function(){var r=this,a=arguments;return new Promise((function(t,s){var n=e.apply(r,a);function o(e){i(n,t,s,o,c,"next",e)}function c(e){i(n,t,s,o,c,"throw",e)}o(void 0)}))})()}}},22964:(e,r,a)=>{"use strict";a.d(r,{Z:()=>t});const t={components:{GameDetail:a(94984).Z},props:{game:{type:Object,required:!0}},data:function(){return{modal:!1}}}},23031:(e,r,a)=>{"use strict";a.d(r,{Z:()=>v});var t=a(15566),s=a(68843),n=a(74155),o=a(75026),i=a(71229),c=a(25454),u=a(99933),l=a(20629),m=a(38136);function d(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?d(Object(a),!0).forEach((function(r){g(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function g(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}const v={components:{GameDetailModal:c.Z,UserProfileModal:i.Z,UserAvatar:o.Z},mixins:[m.Z],data:function(){return{games:{},unsubscribe:function(){}}},computed:p(p(p({},(0,l.rn)("auth",["user"])),(0,l.rn)("settings",["settings"])),{},{timeout:function(){return 1e3*Math.max(1,parseInt((0,t.v)("settings.interface.game_feed.timeout"),10))}}),created:function(){var e=this;this.isMobile||(this.unsubscribe=this.$store.subscribe((function(r,a){var t=r.type,s=r.payload;e.settings.gameFeed&&t==="game/".concat(u.ah)&&e.user.id!==s.account.user.id&&(e.games=p(p({},e.games),{},g({},s.id,s)),setTimeout((function(){delete e.games[s.id]}),e.timeout))})))},beforeDestroy:function(){this.unsubscribe()},methods:{decimal:n.decimal,truncate:s.$G}}},53472:(e,r,a)=>{"use strict";a.d(r,{Z:()=>u});var t=a(87757),s=a.n(t),n=a(68843),o=a(38136),i=a(36395);function c(e,r,a,t,s,n,o){try{var i=e[n](o),c=i.value}catch(e){return void a(e)}i.done?r(c):Promise.resolve(c).then(t,s)}const u={mixins:[o.Z,i.Z],props:{provablyFairEnabled:{type:Boolean,required:!0}},data:function(){return{menu:!1,provablyFairModal:!1,infoModal:!1,infoModalComponent:null}},computed:{gamePackageId:function(){return this.$route.params.game},provablyFairGame:function(){return this.$store.getters["provably-fair/get"](this.gamePackageId)||{}}},watch:{gamePackageId:function(e){this.initInfoModalComponent(e)}},created:function(){this.initInfoModalComponent(this.gamePackageId)},methods:{initInfoModalComponent:function(e){var r,t=this;return(r=s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a(48439)("./".concat(e,"/resources/js/pages/info"));case 2:n=r.sent,t.infoModalComponent=n.default;case 4:case"end":return r.stop()}}),r)})),function(){var e=this,a=arguments;return new Promise((function(t,s){var n=r.apply(e,a);function o(e){c(n,t,s,o,i,"next",e)}function i(e){c(n,t,s,o,i,"throw",e)}o(void 0)}))})()},copyToClipboard:function(e){return(0,n.vQ)(e.$el.querySelector("input"))},createProvablyFairGame:function(){this.$store.dispatch("provably-fair/create",{key:this.gamePackageId,seed:this.provablyFairGame.client_seed})}}}},49174:(e,r,a)=>{"use strict";var t=a(93379),s=a.n(t),n=a(82203),o={insert:"head",singleton:!1};s()(n.Z,o);n.Z.locals},60401:(e,r,a)=>{"use strict";a.d(r,{s:()=>t,x:()=>s});var t=function(){var e=this,r=e.$createElement;return(e._self._c||r)(e.component,{tag:"component",attrs:{id:e.id}})},s=[]},82088:(e,r,a)=>{"use strict";a.d(r,{s:()=>t,x:()=>s});var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(r){var t=r.on;return[e._t("default",[a("span",e._g({staticClass:"link"},t),[e._v("\n        "+e._s(e.game.title)+" #"+e._s(e.game.id)+"\n      ")])],{on:t})]}}],null,!0),model:{value:e.modal,callback:function(r){e.modal=r},expression:"modal"}},[e._v(" "),a("v-card",[a("v-toolbar",[a("v-toolbar-title",[e._v("\n        "+e._s(e.$t("Game {0}",[e.game.id]))+"\n      ")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(r){e.modal=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),a("v-card-text",[a("game-detail",{attrs:{id:e.game.id}})],1)],1)],1)},s=[]},50074:(e,r,a)=>{"use strict";a.d(r,{s:()=>t,x:()=>s});var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",[e._l(Object.keys(e.games).map((function(r){return e.games[r]})),(function(r,t){return[a("v-hover",{key:r.id,scopedSlots:e._u([{key:"default",fn:function(s){var n=s.hover;return[a("v-snackbar",{staticClass:"game-snackbar",style:"margin-bottom: "+80*t+"px; opacity: "+(n?1:.8),attrs:{app:"",left:"",dark:e.$vuetify.theme.isDark,light:!e.$vuetify.theme.isDark,bottom:"",tile:"",value:!0,elevation:n?8:2,timeout:e.timeout,transition:"scroll-y-transition"}},[a("div",{staticClass:"d-flex justify-space-between"},[a("div",{staticClass:"d-flex align-center"},[a("user-avatar",{attrs:{user:r.account.user}}),e._v(" "),a("div",{staticClass:"d-flex flex-column ml-2"},[a("user-profile-modal",{attrs:{user:r.account.user},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.on;return[a("span",e._g({staticClass:"link"},s),[e._v("\n                    "+e._s(e.truncate(r.account.user.name))+"\n                  ")])]}}],null,!0)}),e._v(" "),a("div",{staticClass:"mt-1"},[a("game-detail-modal",{attrs:{game:r}})],1)],1)],1),e._v(" "),a("div",{staticClass:"d-flex align-center"},[a("v-chip",{attrs:{label:"",outlined:"",small:"",color:r.win>r.bet?"success":r.win<r.bet?"error":"warning"}},[e._v("\n              "+e._s(e.$t("Profit"))+" "+e._s(e.decimal(r.win-r.bet,2))+"\n            ")])],1)])])]}}],null,!0)})]}))],2)},s=[]},44833:(e,r,a)=>{"use strict";a.d(r,{s:()=>t,x:()=>s});var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",[a("v-speed-dial",{class:{"mb-10":!e.isMobile},attrs:{fixed:"",bottom:"",right:"","open-on-hover":"",direction:"top",transition:"scroll-y-transition"},scopedSlots:e._u([{key:"activator",fn:function(){return[a("v-btn",{attrs:{color:"primary",fab:""},model:{value:e.menu,callback:function(r){e.menu=r},expression:"menu"}},[e.menu?a("v-icon",[e._v("\n          mdi-close\n        ")]):a("v-icon",[e._v("\n          mdi-cards-playing-outline\n        ")])],1)]},proxy:!0}]),model:{value:e.menu,callback:function(r){e.menu=r},expression:"menu"}},[e._v(" "),e.provablyFairEnabled?a("v-btn",{attrs:{fab:"",small:"",color:"primary"},on:{click:function(r){e.provablyFairModal=!0}}},[a("v-icon",[e._v("mdi-check-decagram")])],1):e._e(),e._v(" "),a("v-btn",{attrs:{fab:"",small:"",color:"primary"},on:{click:function(r){e.infoModal=!0}}},[a("v-icon",[e._v("mdi-information-variant")])],1)],1),e._v(" "),e.provablyFairEnabled?a("v-dialog",{attrs:{width:"600"},model:{value:e.provablyFairModal,callback:function(r){e.provablyFairModal=r},expression:"provablyFairModal"}},[a("v-card",[a("v-toolbar",[a("v-toolbar-title",[e._v("\n          "+e._s(e.$t("Provably fair"))+"\n        ")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(r){e.provablyFairModal=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),a("v-card-text",{staticClass:"pa-4"},[a("v-form",{on:{submit:function(r){return r.preventDefault(),e.createProvablyFairGame(r)}},model:{value:e.formIsValid,callback:function(r){e.formIsValid=r},expression:"formIsValid"}},[a("v-text-field",{attrs:{label:e.$t("Client seed"),outlined:"",rules:[function(r){return e.validationMaxLength(r,32)}]},model:{value:e.provablyFairGame.client_seed,callback:function(r){e.$set(e.provablyFairGame,"client_seed",r)},expression:"provablyFairGame.client_seed"}}),e._v(" "),a("v-text-field",{ref:"hash",attrs:{label:e.$t("Server hash"),outlined:"",readonly:"","append-icon":"mdi-content-copy"},on:{"click:append":function(r){return e.copyToClipboard(e.$refs.hash)}},model:{value:e.provablyFairGame.hash,callback:function(r){e.$set(e.provablyFairGame,"hash",r)},expression:"provablyFairGame.hash"}}),e._v(" "),a("v-btn",{attrs:{type:"submit",color:"primary",disabled:!e.formIsValid}},[e._v("\n            "+e._s(e.$t("Generate"))+"\n          ")])],1)],1)],1)],1):e._e(),e._v(" "),a("v-dialog",{staticClass:"overflow-hidden",attrs:{width:"600"},model:{value:e.infoModal,callback:function(r){e.infoModal=r},expression:"infoModal"}},[a(e.infoModalComponent,{tag:"component",on:{close:function(r){e.infoModal=!1}}})],1)],1)},s=[]},6544:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>m});var t=a(87757),s=a.n(t),n=a(15566),o=a(51519),i=a(73023);function c(e,r,a,t,s,n,o){try{var i=e[n](o),c=i.value}catch(e){return void a(e)}i.done?r(c):Promise.resolve(c).then(t,s)}function u(e){return function(){var r=this,a=arguments;return new Promise((function(t,s){var n=e.apply(r,a);function o(e){c(n,t,s,o,i,"next",e)}function i(e){c(n,t,s,o,i,"throw",e)}o(void 0)}))}}const l={middleware:["auth","verified","2fa_passed","game"],components:{GameFeed:a(8250).Z,AnimatedBackground:o.Z,GameMenu:i.Z},metaInfo:function(){return{title:this.gameComponent?this.$t(this.gameComponent.name):""}},data:function(){return{gameComponent:null,gameBackgroundImageUrl:null}},created:function(){this.$store.dispatch("auth/fetchUser"),this.initGameComponent(this.$route.params.game,this.$route.params.slug)},methods:{isMultiplayerGame:function(e){return e.startsWith("multiplayer-")},getGameBackgroundImageUrl:function(e,r){var a=(0,n.v)("".concat(e));return a.variations&&r?a.variations[a.variations.findIndex((function(e){return e.slug===r}))].background:a.background},initGameComponent:function(e,r){var t=this;return u(s().mark((function n(){var o;return s().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t.isMultiplayerGame(e)||t.$store.dispatch("provably-fair/create",{key:e}),s.next=3,a(38046)("./".concat(e,"/resources/js/pages/game"));case 3:o=s.sent,t.gameComponent=o.default,t.gameBackgroundImageUrl=t.getGameBackgroundImageUrl(e,r);case 6:case"end":return s.stop()}}),n)})))()}},beforeRouteUpdate:function(e,r,a){var t=this;return u(s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.initGameComponent(e.params.game,e.params.slug);case 2:a();case 3:case"end":return r.stop()}}),r)})))()}};const m=(0,a(51900).Z)(l,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"fill-height",class:{"static-background":e.gameBackgroundImageUrl},style:{backgroundImage:e.gameBackgroundImageUrl?"url("+e.gameBackgroundImageUrl+")":"none"}},[e.gameBackgroundImageUrl?e._e():a("animated-background"),e._v(" "),a(e.gameComponent,{tag:"component",class:["game-container","game-"+e.$route.params.game]}),e._v(" "),a("game-menu",{attrs:{"provably-fair-enabled":!e.isMultiplayerGame(e.$route.params.game)}}),e._v(" "),a("game-feed")],1)}),[],!1,null,null,null).exports},38046:(e,r,a)=>{var t={"./american-roulette/resources/js/pages/game":[53575,6065,160,9295,7627,5743,5610],"./baccarat/resources/js/pages/game":[25060,6065,160,9295,2826],"./blackjack/resources/js/pages/game":[15315,6065,160,9295,6736],"./casino-holdem/resources/js/pages/game":[88292,6065,160,9295,6027],"./crypto-prediction/resources/js/pages/game":[59426,6065,160,9295,5340,9439,7724],"./dice-3d/resources/js/pages/game":[6990,6065,160,9295,3958,9118,6188],"./dice/resources/js/pages/game":[22283,6065,160,9295,4494],"./european-roulette/resources/js/pages/game":[37574,6065,160,9295,7627,5743,298],"./heads-or-tails/resources/js/pages/game":[79363,6065,160,9295,3958,9118,8538],"./horse-racing/resources/js/pages/game":[26387,160,9295,914,5369,3953,800,9186,436,9230,2027,4725,9024,2686],"./keno/resources/js/pages/game":[93317,6065,160,9295,7228,7790],"./lucky-wheel/resources/js/pages/game":[88962,6065,160,9295,9687],"./multiplayer-blackjack/resources/js/pages/game":[54699,6065,160,9295,6915],"./multiplayer-roulette/resources/js/pages/game":[14457,6065,160,9295,914,5369,3953,800,9186,436,9230,2027,4274,1550],"./plinko/resources/js/pages/game":[92580,6065,160,9295,5025,8310,3671,6676,2825,8570,8777,7346],"./sic-bo/resources/js/pages/game":[44830,6065,160,9295,914,5369,3953,800,9186,436,9230,2027,3958,9118,5025,8310,3671,6676,2825,5650,9348],"./slots-3d/resources/js/pages/game":[32317,6065,160,9295,3691],"./slots/resources/js/pages/game":[31791,6065,160,9295,941],"./video-poker/resources/js/pages/game":[66925,6065,160,9295,5002]};function s(e){if(!a.o(t,e))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=t[e],s=r[0];return Promise.all(r.slice(1).map(a.e)).then((()=>a(s)))}s.keys=()=>Object.keys(t),s.id=38046,e.exports=s},48439:(e,r,a)=>{var t={"./american-roulette/resources/js/pages/info":[6841,6065,6603],"./baccarat/resources/js/pages/info":[43552,6065,1344],"./blackjack/resources/js/pages/info":[90283,6065,2339],"./casino-holdem/resources/js/pages/info":[28056,6065,2613],"./crypto-prediction/resources/js/pages/info":[31896,6065,8494],"./dice-3d/resources/js/pages/info":[50676,6065,2195],"./dice/resources/js/pages/info":[67632,6065,6092],"./european-roulette/resources/js/pages/info":[11694,6065,3462],"./heads-or-tails/resources/js/pages/info":[96657,6065,3287],"./horse-racing/resources/js/pages/info":[45232,6065,3495],"./keno/resources/js/pages/info":[3408,6065,2412],"./lucky-wheel/resources/js/pages/info":[22721,6065,100],"./multiplayer-blackjack/resources/js/pages/info":[96646,6065,8757],"./multiplayer-roulette/resources/js/pages/info":[94990,6065,5503],"./plinko/resources/js/pages/info":[45278,6065,6959],"./sic-bo/resources/js/pages/info":[55859,6065,9702],"./slots-3d/resources/js/pages/info":[34836,6065,8614],"./slots/resources/js/pages/info":[49698,6065,5142],"./video-poker/resources/js/pages/info":[1624,6065,6713]};function s(e){if(!a.o(t,e))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=t[e],s=r[0];return Promise.all(r.slice(1).map(a.e)).then((()=>a(s)))}s.keys=()=>Object.keys(t),s.id=48439,e.exports=s},99593:(e,r,a)=>{var t={"./american-roulette/resources/js/pages/show":[30164,6065,160,2922],"./baccarat/resources/js/pages/show":[26395,6065,160,576],"./blackjack/resources/js/pages/show":[19226,6065,160,7096],"./casino-holdem/resources/js/pages/show":[14832,6065,160,4330],"./crypto-prediction/resources/js/pages/show":[96954,6065,160,3031],"./dice-3d/resources/js/pages/show":[58393,6065,160,3621],"./dice/resources/js/pages/show":[3678,6065,160,6856],"./european-roulette/resources/js/pages/show":[31448,6065,160,6e3],"./heads-or-tails/resources/js/pages/show":[84429,6065,160,4196],"./horse-racing/resources/js/pages/show":[18053,6065,160,9236],"./keno/resources/js/pages/show":[1269,6065,160,6982],"./lucky-wheel/resources/js/pages/show":[6202,6065,160,7829],"./multiplayer-blackjack/resources/js/pages/show":[98880,6065,160,7946],"./multiplayer-roulette/resources/js/pages/show":[65308,6065,160,6],"./plinko/resources/js/pages/show":[36878,6065,160,6883],"./sic-bo/resources/js/pages/show":[94805,6065,160,6389],"./slots-3d/resources/js/pages/show":[56197,6065,160,2781],"./slots/resources/js/pages/show":[39779,6065,160,2607],"./video-poker/resources/js/pages/show":[26946,6065,160,3234]};function s(e){if(!a.o(t,e))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=t[e],s=r[0];return Promise.all(r.slice(1).map(a.e)).then((()=>a(s)))}s.keys=()=>Object.keys(t),s.id=99593,e.exports=s}}]);
//# sourceMappingURL=games.js.map
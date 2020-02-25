(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/s-ui/s-tab/index"],{"0e53":function(t,n,i){},"28b4":function(t,n,i){"use strict";var e=i("0e53"),a=i.n(e);a.a},ade6:function(t,n,i){"use strict";i.r(n);var e=i("fc22"),a=i.n(e);for(var u in e)"default"!==u&&function(t){i.d(n,t,function(){return e[t]})}(u);n["default"]=a.a},b128:function(t,n,i){"use strict";var e,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];i.d(n,"b",function(){return a}),i.d(n,"c",function(){return u}),i.d(n,"a",function(){return e})},e918:function(t,n,i){"use strict";i.r(n);var e=i("b128"),a=i("ade6");for(var u in a)"default"!==u&&function(t){i.d(n,t,function(){return a[t]})}(u);i("28b4");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);n["default"]=c.exports},fc22:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"s-tab",inject:["$tabs"],props:{title:{type:String,default:""}},computed:{isActive:function(){return this.$tabs.navList[this.$tabs.value].id===this.id}},data:function(){return{id:"s-tab-id-"+Math.random().toString(36).substr(2)}},created:function(){var t=this.id,n=this.title;this.$tabs.navList=this.$tabs.navList.concat({id:t,title:n})},beforeDestroy:function(){var t=this;this.$tabs.navList=this.$tabs.navList.filter(function(n){return n.id!==t.id})}};n.default=e}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/s-ui/s-tab/index-create-component',
    {
        'components/s-ui/s-tab/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("e918"))
        })
    },
    [['components/s-ui/s-tab/index-create-component']]
]);

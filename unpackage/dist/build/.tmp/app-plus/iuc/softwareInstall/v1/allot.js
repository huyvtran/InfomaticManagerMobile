(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["iuc/softwareInstall/v1/allot"],{"3d3d":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},6060:function(t,n,e){"use strict";e.r(n);var a=e("3d3d"),i=e("ac97");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);var u=e("2877"),l=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=l.exports},aa94:function(t,n,e){"use strict";(function(t){e("b319"),e("921b");a(e("66fd"));var n=a(e("6060"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},ac97:function(t,n,e){"use strict";e.r(n);var a=e("f0e3"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},f0e3:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return Promise.all([e.e("common/vendor"),e.e("iuc/softwareInstall/v1/StepInfo")]).then(e.bind(null,"604c"))},i="00000000-0000-0000-0000-000000000000",o=(e("84ac"),e("b6ae"),{components:{stepInfo:a},onLoad:function(t){this.id=t.id,this.getData()},methods:{submit:function(n,e){n||this.model.HandlerId!==i?n&&!confirm(e)||t.post("/api/installApp/v1/AssignForm",{ID:this.model.ID,HandlerId:this.model.HandlerId,ReviewOpinion:n||"同意"},function(n){t.navigateTo({url:"/iuc/softwareInstall/v1/list"})}):alert("必须选择用户才能分配工作。")},getData:function(){var n=this,e=this.id;e&&e!==i?t.post("/api/installApp/v1/GetAssignApplication",{id:e},function(t){n.users=t.users,n.model=t.data}):t.navigateTo({url:"/iuc/softwareInstall/v1/list"})},userChange:function(t){var n=this.users[t.detail.value];this.currentUser=n.RealName||"请选择执行者",this.model.HandlerId=n.ID||i}},data:function(){return{id:i,isloading:!1,model:{},users:[],currentUser:"请选择执行者"}}});n.default=o}).call(this,e("6e42")["default"])}},[["aa94","common/runtime","common/vendor"]]]);
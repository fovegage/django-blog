(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71f4cfe0"],{"81e2":function(t,e,s){"use strict";s("8d42")},"8c57":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-order"},[s("div",{staticClass:"container"},[s("div",{staticClass:"crumb"},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),s("el-breadcrumb-item",[t._v("售后列表")])],1)],1),s("div",{staticClass:"user-order-body"},[s("Side"),s("div",{staticClass:"user-order-content"},[s("div",{staticClass:"wrap"},[t._m(0),s("div",{staticClass:"order-category"},[s("h3",{class:{checked:""===t.orderSelect},on:{click:function(e){return t.filterOrder("")}}},[t._v("所有售后")]),s("h3",{class:{checked:"SUCCESS"===t.orderSelect},on:{click:function(e){return t.filterOrder("SUCCESS")}}},[t._v("售后完成")]),s("h3",{class:{checked:"PAYING"===t.orderSelect},on:{click:function(e){return t.filterOrder("PAYING")}}},[t._v("买家退货")]),s("h3",{class:{checked:"DELIVERY"===t.orderSelect},on:{click:function(e){return t.filterOrder("DELIVERY")}}},[t._v("卖家收货")]),s("h3",{class:{checked:"GOOD"===t.orderSelect},on:{click:function(e){return t.filterOrder("GOOD")}}},[t._v("售后拒绝")])]),s("div",{staticClass:"line"}),s("div",{staticClass:"order-list"},[s("ul",t._l(t.orderList,(function(e,r){return s("li",{key:r},[s("div",{staticClass:"list-header"},[s("p",{staticClass:"pay-status"},[t._v(t._s(t._f("getPayStatus")(e.status)))]),s("div",{staticClass:"pay-info"},[s("p",[t._v(t._s(t._f("formatCreateTime")(e.add_time))+" "),s("span",{staticClass:"sep"},[t._v("|")]),t._v(" "+t._s(e.signer_name)+" "),s("span",{staticClass:"sep"},[t._v("|")]),t._v(" 订单号："+t._s(e.order_sn)+" "),s("span",{staticClass:"sep"},[t._v("|")]),t._v(" 支付方式："+t._s(t._f("getPayType")(e.pay_type))+" ")]),s("p",[t._v("应付金额： "+t._s(e.order_mount)+"元")])])]),s("div",{staticClass:"list-body"},[s("div",{staticClass:"body-left"},[s("ul",t._l(e.goods,(function(e,r){return s("li",{key:r},[s("div",{staticClass:"left-img"},[s("a",{attrs:{href:""}},[s("img",{attrs:{src:e.goods.cover,alt:""}})])]),s("a",{attrs:{href:""}},[t._v(t._s(e.goods.classify))]),s("span",[t._v(t._s(e.goods.shop_price)+"元 × "+t._s(e.nums))])])})),0)]),s("div",{staticClass:"body-right"},[t.closeStatus?s("div",{staticClass:"list",on:{click:function(s){return t.goPay(e.order_sn,e.status)}}},[t._v(t._s(t._f("judgeStatus")(e.status))+" ")]):t._e(),s("div",{staticClass:"list",on:{click:function(s){return t.orderDetail(e.order_sn)}}},[t._v("订单详情")])])])])})),0)]),s("div",{staticClass:"order-page"},[s("div",{staticClass:"page"},[s("el-pagination",{attrs:{"page-size":t.pageSize,"pager-count":5,layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)])])])],1)])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-title"},[s("h1",[t._v("我的售后")])])}],i=(s("12c4"),s("7c3e"),s("06f5")),n=s.n(i),o=s("f412"),c=s("c466"),l={name:"order",components:{Side:o["a"]},data:function(){return{closeStatus:!0,orderList:[],orderSelect:"",total:10,pageSize:5,pageCount:10}},filters:{judgeStatus:function(t){return"PAYING"===t?"立即付款":"DELIVERY"===t?"催促发货":"GOOD"===t?"查看物流":"COMMENT"===t?"马上评价":"SUCCESS"===t?"申请退货":"超时关闭"},getPayStatus:function(t){return"PAYING"===t?"待付款":"DELIVERY"===t?"待发货":"GOOD"===t?"待收货":"COMMENT"===t?"待评价":"SUCCESS"===t?"已收货":"已关闭"},formatCreateTime:function(t){var e=new Date(t);return Object(c["a"])(e,"yyyy-MM-dd hh:mm:ss")},getPayType:function(t){return"alipay"===t?"支付宝":"微信支付"}},mounted:function(){this.getOrderList()},methods:{handleCurrentChange:function(t){var e=this;this.axios.get("/orders/",{params:{pageSize:this.pageSize,pageNum:t}}).then((function(t){e.orderList=t.data.list,e.total=t.data.total}))},filterOrder:function(t){var e=this;this.orderSelect=t,this.axios.get("/orders/",{params:{pageSize:this.pageSize,status:t}}).then((function(t){e.orderList=t.data.list,e.total=t.data.total}))},getOrderList:function(){var t=this;this.axios.get("/orders/",{params:{pageSize:this.pageSize}}).then((function(e){t.orderList=e.data.list,t.total=e.data.total}))},orderDetail:function(t){var e=this.$router.resolve({name:"orderDetail",query:{orderSn:t}});window.open(e.href,"_blank")},goPay:function(t,e){if("PAYING"===e){var s=this.$router.resolve({name:"pay",query:{orderSn:t}});window.open(s.href,"_blank")}else"SUCCESS"===e||"DELIVERY"===e&&n.a.success("催促成功，我们将优先为您发货")}}},d=l,u=(s("81e2"),s("4ac2")),f=Object(u["a"])(d,r,a,!1,null,null,null);e["default"]=f.exports},"8d42":function(t,e,s){}}]);
//# sourceMappingURL=chunk-71f4cfe0.f02d2483.js.map
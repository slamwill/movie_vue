(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{354:function(t,e,r){"use strict";r(15);var n={name:"CategoryVideob",props:["item"],data:function(){return{showTopBtn:!1,previewURL:"http://avi-jibamao.cdn.hinet.net/previews/",videoElement:null,paused:null,videos:[]}},computed:{},methods:{}},o=r(7),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"videos-list list-inline list-inline-linking video-item"},t._l(t.item,(function(e,n){return r("li",{key:n,staticClass:"record-item"},[r("nuxt-link",{attrs:{to:{name:"video-avkey",params:{avkey:e.avkey}}}},[r("div",{staticClass:"a-cover"},[r("div",{staticClass:"video-mouse"},[r("div",{class:e.avkey,style:{zIndex:0}},[e.origin_cover?r("img",{staticClass:"preview-img",attrs:{src:e.origin_cover,width:"100%"}}):r("img",{attrs:{src:t.previewURL+e.avkey+"/preview0s.png",width:"100%"}})])]),t._v(" "),e.new_tag?r("span",{staticClass:"video-tag"},[t._v("最新")]):t._e(),t._v(" "),r("div",{staticClass:"progress",staticStyle:{height:"3px","background-color":"transparent","--darkreader-inline-bgcolor":"transparent",display:"none"},attrs:{"data-darkreader-inline-bgcolor":""}},[r("div",{staticClass:"progress-bar progress-bar-danger",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),r("div",{staticClass:"video-bottom"}),t._v(" "),e.video_type?r("div",{staticClass:"av-mark av-right-bottom av-censored"},[t._v("有码")]):r("div",{staticClass:"av-mark av-right-bottom av-uncensored"},[t._v("无码")]),t._v(" "),r("div",{staticClass:"av-mark av-left-bottom av-release-date"},[t._v(" "+t._s(e.release_date))]),t._v(" "),r("div",{staticClass:"av-mark av-right-top av-duraction"},[t._v(" "+t._s(e.duration))])]),t._v(" "),r("a",{staticClass:"title"},[t._v(t._s(e.title))])]),t._v(" "),r("div",{staticClass:"actors-line"},[r("a",[t._v(t._s(e.name))])])],1)})),0)])}),[],!1,null,null,null);e.a=component.exports},404:function(t,e,r){"use strict";r.r(e);r(48);var n,o=r(2),l=(r(15),r(354)),v=r(95),c={watchQuery:["page"],components:{CategoryVideo:l.a},data:function(){return{videos:[],form:{currentPage:1,total:0,pageSize:0,loading:!1},showTopBtn:!1}},asyncData:(n=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,e.params,n=e.query,t.next=3,r.$axios.$get(v.default.url+"/api/united",{params:{page:n.page||1}});case 3:return o=t.sent,t.abrupt("return",{videos:o.data,form:{total:o.total,currentPage:o.current_page,pageSize:o.per_page}});case 5:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)}),methods:{pageNext:function(t){this.$router.push({query:{page:t}})}}},d=r(7),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row player-block"},[t._m(0),t._v(" "),r("category-video",{attrs:{item:t.videos}}),t._v(" "),r("center",[t.form.total>t.form.pageSize?r("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.form.pageSize,"current-page":t.form.currentPage,total:t.form.total},on:{"current-change":t.pageNext}}):t._e()],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"last-video-title preview"},[e("h2",[this._v("最新歐美")])])}],!1,null,null,null);e.default=component.exports}}]);
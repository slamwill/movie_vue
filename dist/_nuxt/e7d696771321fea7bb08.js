(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{400:function(e,t,o){"use strict";o.r(t);o(48);var r,n=o(2),l=(o(15),{watchQuery:["page"],data:function(){return{videos:[],form:{currentPage:1,total:0,pageSize:0,loading:!1},previewURL:"http://avi-jibamao.cdn.hinet.net/previews/",videoElement:null,paused:null,videoType:"",videoTypeCategory:{censored:{name:"有碼"},uncensored:{name:"無碼"},united:{name:"歐美"},cartoon:{name:"動畫"},self:{name:"自拍"}},showTopBtn:!1}},asyncData:(r=Object(n.a)(regeneratorRuntime.mark((function e(t){var o,r,n,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.app,r=t.params,n=t.query,l=t.videoType,console.log("1111111asyncData111"),e.next=4,o.$axios.$get("http://avtiger.1778mao.com:8092/api/"+(r.videoList||l),{params:{page:n.page||1}});case 4:return d=e.sent,console.log("1111111111"),console.log(r),console.log("2222222222"),e.abrupt("return",{videoType:r.videoList,videos:d.data,form:{total:d.total,currentPage:d.current_page,pageSize:d.per_page}});case 9:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)}),computed:{playing:function(){return!this.paused}},methods:{pageNext:function(e){this.$router.push({query:{page:e}})},updatePaused:function(e){this.videoElement=e.target,this.paused=e.target.paused},play:function(){this.videoElement.play()},pause:function(){this.videoElement.pause()},mouseover:function(e){document.getElementById(e).pause(),document.getElementById(e).load(),document.getElementById(e).play(),document.getElementsByClassName(e)[1].style.zIndex=1,document.getElementsByClassName(e)[0].style.zIndex=-1},mouseleave:function(e){document.getElementById(e).pause(),document.getElementsByClassName(e)[1].style.zIndex=-1,document.getElementsByClassName(e)[0].style.zIndex=1}},mounted:function(){}}),d=o(7),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"row player-block"},[o("div",{staticClass:"last-video-title preview"},[o("h2",[e._v("最新"+e._s(e.videoTypeCategory[this.videoType].name))])]),e._v(" "),o("ul",{staticClass:"videos-list list-inline list-inline-linking video-item"},e._l(e.videos,(function(t,r){return o("li",{key:r,staticClass:"record-item"},[o("nuxt-link",{attrs:{to:{name:"video-avkey",params:{avkey:t.avkey}}}},[o("div",{staticClass:"a-cover",on:{mouseover:function(o){return e.mouseover(t.avkey)},mouseleave:function(o){return e.mouseleave(t.avkey)}}},[o("div",{staticClass:"video-mouse"},[o("div",{class:t.avkey,style:{zIndex:0}},[o("img",{staticClass:"preview-img",attrs:{width:"100%",src:t.origin_cover}})]),e._v(" "),o("div",{staticClass:"preview-child preview-video",class:t.avkey,style:{zIndex:-1}},[o("video",{staticClass:"preview-video",attrs:{id:t.avkey,muted:"",preload:"auto",loop:""},domProps:{muted:!0},on:{canplay:e.updatePaused,playing:e.updatePaused,pause:e.updatePaused}},[o("source",{attrs:{src:e.previewURL+t.avkey+"/preview.mp4",type:"video/mp4"}})])])]),e._v(" "),o("div",{staticClass:"progress",staticStyle:{height:"3px","background-color":"transparent","--darkreader-inline-bgcolor":"transparent",display:"none"},attrs:{"data-darkreader-inline-bgcolor":""}},[o("div",{staticClass:"progress-bar progress-bar-danger",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}})]),e._v(" "),o("div",{staticClass:"av-mark av-right-top av-forever collection-videos-small",attrs:{"data-title":"極射 山中麗子","data-avkey":"011118_631",id:"favorite_videos-small",value:"favorite_videos-small","data-action":"add","data-placement":"left","data-toggle":"tooltip",title:"","data-original-title":"收藏影片"}},[o("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})]),e._v(" "),o("div",{staticClass:"video-bottom"}),e._v(" "),t.video_type?o("div",{staticClass:"av-mark av-right-bottom av-censored"},[e._v("有码")]):o("div",{staticClass:"av-mark av-right-bottom av-uncensored"},[e._v("无码")]),e._v(" "),o("div",{staticClass:"av-mark av-left-bottom av-release-date"},[e._v(" "+e._s(t.release_date))]),e._v(" "),o("div",{staticClass:"av-mark av-right-top av-duraction"},[e._v(" "+e._s(t.duration))])]),e._v(" "),o("a",{staticClass:"title"},[e._v(e._s(t.title))])]),e._v(" "),o("div",{staticClass:"actors-line"},[o("a",[e._v(e._s(t.name))])])],1)})),0),e._v(" "),o("center",[e.form.total>e.form.pageSize?o("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":e.form.pageSize,"current-page":e.form.currentPage,total:e.form.total},on:{"current-change":e.pageNext}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);
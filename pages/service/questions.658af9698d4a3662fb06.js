webpackJsonp([22],{BPIq:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("YQJt"),i=e("GtNg"),r=!1;var n=function(t){r||e("Nd3s")},c=e("VU/8")(s.a,i.a,!1,n,"data-v-8a763c6c",null);c.options.__file="pages/service/questions.vue",a.default=c.exports},GtNg:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"container"},[t._m(0),e("div",{attrs:{id:"bread-nav"}},[e("div",{staticClass:"brand-nav-box clearfix"},[e("div",{staticClass:"brand-nav-content"},[t._m(1),e("div",{staticClass:"brand-nav-list"},[e("ul",[e("li",[e("nuxt-link",{attrs:{target:"_blank",to:"/"}},[t._v("首页")])],1),e("li",[t._v(">")]),e("li",[e("nuxt-link",{attrs:{target:"_blank",to:"/service/contact"}},[t._v("服务中心")])],1),e("li",[t._v(">")]),e("li",[e("nuxt-link",{attrs:{to:"/service/questions"}},[t._v("常见问题")])],1)])])])])]),e("div",{attrs:{id:"questions_wrap"}},[e("div",{staticClass:"questions_box"},[e("div",{staticClass:"questions_list_box"},[e("ul",t._l(t.listData.list,function(a){return e("li",{key:a.articleId,staticClass:"questions_list"},[e("div",{staticClass:"questions_list_left"},[e("nuxt-link",{attrs:{target:"_blank",to:{name:"service-id",params:{category:a.articleCategoryId,id:a.articleId}}}},[e("img",{attrs:{src:a.articleImg.articleImgSrc,alt:a.articleImg.articleImgAlt}})])],1),e("div",{staticClass:"questions_list_right"},[e("div",{staticClass:"questions_list_title"},[e("nuxt-link",{attrs:{target:"_blank",to:{name:"service-id",params:{id:a.articleId,category:a.articleCategoryId}}}},[t._v(t._s(a.articleName))])],1),e("div",{staticClass:"questions_list_desc"},[t._v(t._s(t.getTxt(a.articleText)))]),e("div",{staticClass:"questions_list_bottom"},[e("div",{staticClass:"questions_list_tag_box"},[e("div",{staticClass:"questions_list_tag"},[e("a",{attrs:{href:"javascript:viod(0);"}},[t._v(t._s(a.labelList[0].articleLabelName))])]),e("div",{staticClass:"questions_list_tag"},[e("a",{attrs:{href:"javascript:viod(0);"}},[t._v(t._s(a.labelList[1].articleLabelName))])])]),e("div",{staticClass:"questions_list_time"},[e("p",[t._v(t._s(a.articleAddTime))])])])])])}),0)]),e("div",{staticClass:"questions_list_pagination_box"},[e("pagination",{attrs:{total:t.total,display:t.display,"current-page":t.current},on:{pagechange:t.pagechange}})],1)])])])},i=[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"common-banner"}},[a("div",{staticClass:"common-banner-container"},[a("div",{staticClass:"common-banner-img"},[a("img",{attrs:{src:e("g1ii")}})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"brand-nav-title"},[a("span",[this._v("当前位置:")])])}];s._withStripped=!0;var r={render:s,staticRenderFns:i};a.a=r},Jz2J:function(t,a,e){"use strict";var s=e("x+p/"),i=e("PtX1"),r=!1;var n=function(t){r||e("bQfa")},c=e("VU/8")(s.a,i.a,!1,n,"data-v-d2ad50da",null);c.options.__file="components/common/pagination.vue",a.a=c.exports},Nd3s:function(t,a){},PtX1:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("ul",{staticClass:"pagination"},[e("li",{class:{disabled:1==t.current}},[e("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.setCurrent(t.current-1)}}},[t._v(" "+t._s(t.prePage)+" ")])]),e("li",{class:{disabled:1==t.current}},[e("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.setCurrent(1)}}},[t._v(" "+t._s(t.homePage)+" ")])]),t._l(t.grouplist,function(a,s){return e("li",{key:s,class:{active:t.current==a.val}},[e("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.setCurrent(a.val)}}},[t._v(" "+t._s(a.text)+" ")])])}),e("li",{class:{disabled:t.current==t.page}},[e("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.setCurrent(t.page)}}},[t._v(" "+t._s(t.lastPage)+" ")])]),e("li",{class:{disabled:t.current==t.page}},[e("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.setCurrent(t.current+1)}}},[t._v(" "+t._s(t.nextPage))])])],2)])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};a.a=i},YQJt:function(t,a,e){"use strict";var s=e("Xxa5"),i=e.n(s),r=e("exGp"),n=e.n(r),c=e("mtWM"),l=e.n(c),o=e("Jz2J");a.a={data:function(){return{display:8,current:1}},components:{pagination:o.a},methods:{pagechange:function(t){var a=this;l.a.get(this.$store.state.wordpressAPI+"/article/getArticles/20/"+t+"/8").then(function(t){a.listData=t.data,a.total=t.data.total}).catch(function(t){console.log(t)})},getTxt:function(t){var a=t.replace(/<\/?.+?>/g,"").replace(/(^\s+)|(\s+$)/g,"").replace(/\s/g,"");return a=a.length<170?a:a.substring(0,170).concat("...")}},head:function(){return{title:this.metaData.navigationTitle,meta:[{name:"keywords",hid:"keywords",content:""+this.metaData.navigationKeyword},{name:"description",hid:"description",content:""+this.metaData.navigationDescription}]}},asyncData:function(){var t=n()(i.a.mark(function t(a){var e,s,r=a.store;a.params;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(r.state.wordpressAPI+"/NavigationMeta/get/18");case 2:return e=t.sent,t.next=5,l.a.get(r.state.wordpressAPI+"/article/getArticles/20/1/8");case 5:return s=t.sent,t.abrupt("return",{metaData:e.data,listData:s.data,total:s.data.total});case 7:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}()}},bQfa:function(t,a){},g1ii:function(t,a,e){t.exports=e.p+"img/banner.e47cec1.png"},"x+p/":function(t,a,e){"use strict";a.a={name:"pagination",data:function(){return{prePage:"<",nextPage:">",homePage:"<<",lastPage:">>",current:this.currentPage}},props:{total:{type:Number,default:0},display:{type:Number,default:8},currentPage:{type:Number,default:1},pagegroup:{type:Number,default:5,coerce:function(t){return(t=t>0?t:5)%2==1?t:t+1}}},computed:{page:function(){return Math.ceil(this.total/this.display)},grouplist:function(){var t=this.page,a=[],e=[],s=Math.floor(this.pagegroup/2),i=this.current;if(t<=this.pagegroup){for(;t--;)a.push({text:this.page-t,val:this.page-t});return a}for(;t--;)a.push(this.page-t);var r=a.indexOf(i);r<s&&(i=i+s-r),this.current>this.page-s&&(i=this.page-s),a=a.splice(i-s-1,this.pagegroup);do{var n=a.shift();e.push({text:n,val:n})}while(a.length);return this.page>this.pagegroup&&(this.current>s+1&&e.unshift({text:"...",val:e[0].val-1}),this.current<this.page-s&&e.push({text:"...",val:e[e.length-1].val+1})),e}},methods:{setCurrent:function(t){this.current!=t&&t>0&&t<this.page+1&&(this.current=t,this.$emit("pagechange",this.current))}}}}});
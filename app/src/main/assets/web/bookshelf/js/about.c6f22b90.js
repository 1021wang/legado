(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"04d1":function(t,e,r){var n=r("342f"),a=n.match(/firefox\/(\d+)/i);t.exports=!!a&&+a[1]},"0cb2":function(t,e,r){var n=r("e330"),a=r("7b0b"),i=Math.floor,o=n("".charAt),s=n("".replace),c=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,n,d,f){var v=r+t.length,h=n.length,p=l;return void 0!==d&&(d=a(d),p=u),s(f,p,(function(a,s){var u;switch(o(s,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,r);case"'":return c(e,v);case"<":u=d[c(s,1,-1)];break;default:var l=+s;if(0===l)return a;if(l>h){var f=i(l/10);return 0===f?a:f<=h?void 0===n[f-1]?o(s,1):n[f-1]+o(s,1):a}u=n[l-1]}return void 0===u?"":u}))}},"14c3":function(t,e,r){var n=r("da84"),a=r("c65b"),i=r("825a"),o=r("1626"),s=r("c6b6"),c=r("9263"),u=n.TypeError;t.exports=function(t,e){var r=t.exec;if(o(r)){var n=a(r,t,e);return null!==n&&i(n),n}if("RegExp"===s(t))return a(c,t,e);throw u("RegExp#exec called on incompatible receiver")}},"2c3e":function(t,e,r){var n=r("da84"),a=r("83ab"),i=r("9f7f").MISSED_STICKY,o=r("c6b6"),s=r("edd0"),c=r("69f3").get,u=RegExp.prototype,l=n.TypeError;a&&i&&s(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!c(this).sticky;throw l("Incompatible receiver, RegExp required")}}})},"44e7":function(t,e,r){var n=r("861d"),a=r("c6b6"),i=r("b622"),o=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},"4d63":function(t,e,r){var n=r("83ab"),a=r("da84"),i=r("e330"),o=r("94ca"),s=r("7156"),c=r("9112"),u=r("241c").f,l=r("3a9b"),d=r("44e7"),f=r("577e"),v=r("90d8"),h=r("9f7f"),p=r("aeb0"),g=r("cb2d"),b=r("d039"),m=r("1a2d"),x=r("69f3").enforce,w=r("2626"),C=r("b622"),A=r("fce3"),y=r("107c"),R=C("match"),I=a.RegExp,E=I.prototype,k=a.SyntaxError,M=i(E.exec),S=i("".charAt),D=i("".replace),T=i("".indexOf),$=i("".slice),B=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,_=/a/g,z=/a/g,F=new I(_)!==_,J=h.MISSED_STICKY,N=h.UNSUPPORTED_Y,O=n&&(!F||J||A||y||b((function(){return z[R]=!1,I(_)!=_||I(z)==z||"/a/i"!=I(_,"i")}))),P=function(t){for(var e,r=t.length,n=0,a="",i=!1;n<=r;n++)e=S(t,n),"\\"!==e?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),a+=e):a+="[\\s\\S]":a+=e+S(t,++n);return a},W=function(t){for(var e,r=t.length,n=0,a="",i=[],o={},s=!1,c=!1,u=0,l="";n<=r;n++){if(e=S(t,n),"\\"===e)e+=S(t,++n);else if("]"===e)s=!1;else if(!s)switch(!0){case"["===e:s=!0;break;case"("===e:M(B,$(t,n+1))&&(n+=2,c=!0),a+=e,u++;continue;case">"===e&&c:if(""===l||m(o,l))throw new k("Invalid capture group name");o[l]=!0,i[i.length]=[l,u],c=!1,l="";continue}c?l+=e:a+=e}return[a,i]};if(o("RegExp",O)){for(var H=function(t,e){var r,n,a,i,o,u,h=l(E,this),p=d(t),g=void 0===e,b=[],m=t;if(!h&&p&&g&&t.constructor===H)return t;if((p||l(E,t))&&(t=t.source,g&&(e=v(m))),t=void 0===t?"":f(t),e=void 0===e?"":f(e),m=t,A&&"dotAll"in _&&(n=!!e&&T(e,"s")>-1,n&&(e=D(e,/s/g,""))),r=e,J&&"sticky"in _&&(a=!!e&&T(e,"y")>-1,a&&N&&(e=D(e,/y/g,""))),y&&(i=W(t),t=i[0],b=i[1]),o=s(I(t,e),h?this:E,H),(n||a||b.length)&&(u=x(o),n&&(u.dotAll=!0,u.raw=H(P(t),r)),a&&(u.sticky=!0),b.length&&(u.groups=b)),t!==m)try{c(o,"source",""===m?"(?:)":m)}catch(w){}return o},U=u(I),Y=0;U.length>Y;)p(H,I,U[Y++]);E.constructor=H,H.prototype=E,g(a,"RegExp",H,{constructor:!0})}w("RegExp")},"4dae":function(t,e,r){var n=r("da84"),a=r("23cb"),i=r("07fa"),o=r("8418"),s=n.Array,c=Math.max;t.exports=function(t,e,r){for(var n=i(t),u=a(e,n),l=a(void 0===r?n:r,n),d=s(c(l-u,0)),f=0;u<l;u++,f++)o(d,f,t[u]);return d.length=f,d}},"4e82":function(t,e,r){"use strict";var n=r("23e7"),a=r("e330"),i=r("59ed"),o=r("7b0b"),s=r("07fa"),c=r("577e"),u=r("d039"),l=r("addb"),d=r("a640"),f=r("04d1"),v=r("d998"),h=r("2d00"),p=r("512c"),g=[],b=a(g.sort),m=a(g.push),x=u((function(){g.sort(void 0)})),w=u((function(){g.sort(null)})),C=d("sort"),A=!u((function(){if(h)return h<70;if(!(f&&f>3)){if(v)return!0;if(p)return p<603;var t,e,r,n,a="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)g.push({k:e+n,v:r})}for(g.sort((function(t,e){return e.v-t.v})),n=0;n<g.length;n++)e=g[n].k.charAt(0),a.charAt(a.length-1)!==e&&(a+=e);return"DGBEFHACIJK"!==a}})),y=x||!w||!C||!A,R=function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:c(e)>c(r)?1:-1}};n({target:"Array",proto:!0,forced:y},{sort:function(t){void 0!==t&&i(t);var e=o(this);if(A)return void 0===t?b(e):b(e,t);var r,n,a=[],c=s(e);for(n=0;n<c;n++)n in e&&m(a,e[n]);l(a,R(t)),r=a.length,n=0;while(n<r)e[n]=a[n++];while(n<c)delete e[n++];return e}})},"512c":function(t,e,r){var n=r("342f"),a=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!a&&+a[1]},5319:function(t,e,r){"use strict";var n=r("2ba4"),a=r("c65b"),i=r("e330"),o=r("d784"),s=r("d039"),c=r("825a"),u=r("1626"),l=r("5926"),d=r("50c4"),f=r("577e"),v=r("1d80"),h=r("8aa5"),p=r("dc4a"),g=r("0cb2"),b=r("14c3"),m=r("b622"),x=m("replace"),w=Math.max,C=Math.min,A=i([].concat),y=i([].push),R=i("".indexOf),I=i("".slice),E=function(t){return void 0===t?t:String(t)},k=function(){return"$0"==="a".replace(/./,"$0")}(),M=function(){return!!/./[x]&&""===/./[x]("a","$0")}(),S=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));o("replace",(function(t,e,r){var i=M?"$":"$0";return[function(t,r){var n=v(this),i=void 0==t?void 0:p(t,x);return i?a(i,t,n,r):a(e,f(n),t,r)},function(t,a){var o=c(this),s=f(t);if("string"==typeof a&&-1===R(a,i)&&-1===R(a,"$<")){var v=r(e,o,s,a);if(v.done)return v.value}var p=u(a);p||(a=f(a));var m=o.global;if(m){var x=o.unicode;o.lastIndex=0}var k=[];while(1){var M=b(o,s);if(null===M)break;if(y(k,M),!m)break;var S=f(M[0]);""===S&&(o.lastIndex=h(s,d(o.lastIndex),x))}for(var D="",T=0,$=0;$<k.length;$++){M=k[$];for(var B=f(M[0]),_=w(C(l(M.index),s.length),0),z=[],F=1;F<M.length;F++)y(z,E(M[F]));var J=M.groups;if(p){var N=A([B],z,_,s);void 0!==J&&y(N,J);var O=f(n(a,void 0,N))}else O=g(B,s,_,z,J,a);_>=T&&(D+=I(s,T,_)+O,T=_+B.length)}return D+I(s,T)}]}),!S||!k||M)},7156:function(t,e,r){var n=r("1626"),a=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var o,s;return i&&n(o=e.constructor)&&o!==r&&a(s=o.prototype)&&s!==r.prototype&&i(t,s),t}},"7b5b":function(t,e,r){},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){return 1},1)}))}},abcb:function(t,e,r){"use strict";r("eabe")},addb:function(t,e,r){var n=r("4dae"),a=Math.floor,i=function(t,e){var r=t.length,c=a(r/2);return r<8?o(t,e):s(t,i(n(t,0,c),e),i(n(t,c),e),e)},o=function(t,e){var r,n,a=t.length,i=1;while(i<a){n=i,r=t[i];while(n&&e(t[n-1],r)>0)t[n]=t[--n];n!==i++&&(t[n]=r)}return t},s=function(t,e,r,n){var a=e.length,i=r.length,o=0,s=0;while(o<a||s<i)t[o+s]=o<a&&s<i?n(e[o],r[s])<=0?e[o++]:r[s++]:o<a?e[o++]:r[s++];return t};t.exports=i},aeb0:function(t,e,r){var n=r("9bf2").f;t.exports=function(t,e,r){r in t||n(t,r,{configurable:!0,get:function(){return e[r]},set:function(t){e[r]=t}})}},c607:function(t,e,r){var n=r("da84"),a=r("83ab"),i=r("fce3"),o=r("c6b6"),s=r("edd0"),c=r("69f3").get,u=RegExp.prototype,l=n.TypeError;a&&i&&s(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!c(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})},d504:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-wrapper"},[n("div",{staticClass:"navigation-wrapper"},[t._m(0),n("div",{staticClass:"search-wrapper"},[n("el-input",{staticClass:"search-input",attrs:{size:"mini",placeholder:"搜索书籍"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),n("div",{staticClass:"bottom-wrapper"},[n("div",{staticClass:"recent-wrapper"},[n("div",{staticClass:"recent-title"},[t._v("最近阅读")]),n("div",{staticClass:"reading-recent"},[n("el-tag",{staticClass:"recent-book",class:{"no-point":""==t.readingRecent.url},attrs:{type:"尚无阅读记录"==t.readingRecent.name?"warning":"tip"},on:{click:function(e){return t.toDetail(t.readingRecent.url,t.readingRecent.name,t.readingRecent.author,t.readingRecent.chapterIndex)}}},[t._v(" "+t._s(t.readingRecent.name)+" ")])],1)]),n("div",{staticClass:"setting-wrapper"},[n("div",{staticClass:"setting-title"},[t._v("基本设定")]),n("div",{staticClass:"setting-item"},[n("el-tag",{staticClass:"setting-connect",class:{"no-point":t.newConnect},attrs:{type:t.connectType},on:{click:t.setIP}},[t._v(" "+t._s(t.connectStatus)+" ")])],1)])]),n("div",{staticClass:"bottom-icons"},[n("a",{attrs:{href:"https://github.com/gedoor/legado_web_bookshelf",target:"_blank"}},[n("div",{staticClass:"bottom-icon"},[n("img",{attrs:{src:r("fa39"),alt:""}})])])])]),n("div",{ref:"shelfWrapper",staticClass:"shelf-wrapper"},[n("div",{staticClass:"books-wrapper"},[n("div",{staticClass:"wrapper"},t._l(t.shelf,(function(e){return n("div",{key:e.noteUrl,staticClass:"book",on:{click:function(r){return t.toDetail(e.bookUrl,e.name,e.author,e.durChapterIndex)}}},[n("div",{staticClass:"cover-img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.getCover(e.coverUrl),expression:"getCover(book.coverUrl)"}],key:e.coverUrl,staticClass:"cover",attrs:{alt:""}})]),n("div",{staticClass:"info",on:{click:function(r){return t.toDetail(e.bookUrl,e.name,e.author,e.durChapterIndex)}}},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),n("div",{staticClass:"sub"},[n("div",{staticClass:"author"},[t._v(" "+t._s(e.author)+" ")]),n("div",{staticClass:"dot"},[t._v("•")]),n("div",{staticClass:"size"},[t._v("共"+t._s(e.totalChapterNum)+"章")]),n("div",{staticClass:"dot"},[t._v("•")]),n("div",{staticClass:"date"},[t._v(t._s(t.dateFormat(e.lastCheckTime)))])]),n("div",{staticClass:"dur-chapter"},[t._v("已读："+t._s(e.durChapterTitle))]),n("div",{staticClass:"last-chapter"},[t._v(" 最新："+t._s(e.latestChapterTitle)+" ")])])])})),0)])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navigation-title-wrapper"},[r("div",{staticClass:"navigation-title"},[t._v("阅读")]),r("div",{staticClass:"navigation-sub-title"},[t._v("清风不识字，何故乱翻书")])])}],i=(r("4e82"),r("e9c4"),r("ac1f"),r("00b4"),r("5319"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("99af"),r("7b5b"),r("b3f5")),o={data:function(){return{search:"",readingRecent:{name:"尚无阅读记录",author:"",url:"",chapterIndex:0}}},mounted:function(){var t=localStorage.getItem("readingRecent");null!=t&&(this.readingRecent=JSON.parse(t),"undefined"==typeof this.readingRecent.chapterIndex&&(this.readingRecent.chapterIndex=0)),this.loading=this.$loading({target:this.$refs.shelfWrapper,lock:!0,text:"正在获取书籍信息",spinner:"el-icon-loading",background:"rgb(247,247,247)"});var e=this;i["a"].get("/getBookshelf",{timeout:5e3}).then((function(t){e.loading.close(),e.$store.commit("setConnectType","success"),t.data.isSuccess?e.$store.commit("addBooks",t.data.data.sort((function(t,e){var r=t["durChapterTime"]||0,n=e["durChapterTime"]||0;return n-r}))):e.$message.error(t.data.errorMsg),e.$store.commit("setConnectStatus","已连接 "),e.$store.commit("setNewConnect",!1)})).catch((function(t){throw e.loading.close(),e.$store.commit("setConnectType","danger"),e.$store.commit("setConnectStatus","连接失败"),e.$message.error("后端连接失败"),e.$store.commit("setNewConnect",!1),t}))},methods:{setIP:function(){},toDetail:function(t,e,r,n){sessionStorage.setItem("bookUrl",t),sessionStorage.setItem("bookName",e),sessionStorage.setItem("bookAuthor",r),sessionStorage.setItem("chapterIndex",n),this.readingRecent={name:e,author:r,url:t,chapterIndex:n},localStorage.setItem("readingRecent",JSON.stringify(this.readingRecent)),this.$router.push({path:"/chapter"})},dateFormat:function(t){var e=(new Date).getTime(),r=parseInt((e-t)/1e3),n="";return Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[r]:("00"+e[r]).substr((""+e[r]).length)));return t},n=r<=30?"刚刚":r<60?r+"秒前":r<3600?parseInt(r/60)+"分钟前":r<86400?parseInt(r/3600)+"小时前":r<2592e3?parseInt(r/86400)+"天前":new Date(t).format("yyyy-MM-dd"),n},getCover:function(t){return/^data:/.test(t)?t:"../cover?path="+encodeURIComponent(t)}},computed:{shelf:function(){return this.$store.state.shelf},connectStatus:function(){return this.$store.state.connectStatus},connectType:function(){return this.$store.state.connectType},newConnect:function(){return this.$store.state.newConnect},showMenu:function(){return this.$store.state.miniInterface},navigationClass:function(){return!this.showMenu||this.showMenu&&this.showNavigation?{display:"block"}:{display:"none"}}}},s=o,c=(r("abcb"),r("2877")),u=Object(c["a"])(s,n,a,!1,null,"13d95d8c",null);e["default"]=u.exports},d784:function(t,e,r){"use strict";r("ac1f");var n=r("e330"),a=r("cb2d"),i=r("9263"),o=r("d039"),s=r("b622"),c=r("9112"),u=s("species"),l=RegExp.prototype;t.exports=function(t,e,r,d){var f=s(t),v=!o((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),h=v&&!o((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return e=!0,null},r[f](""),!e}));if(!v||!h||r){var p=n(/./[f]),g=e(f,""[t],(function(t,e,r,a,o){var s=n(t),c=e.exec;return c===i||c===l.exec?v&&!o?{done:!0,value:p(e,r,a)}:{done:!0,value:s(r,e,a)}:{done:!1}}));a(String.prototype,t,g[0]),a(l,f,g[1])}d&&c(l[f],"sham",!0)}},d998:function(t,e,r){var n=r("342f");t.exports=/MSIE|Trident/.test(n)},e9c4:function(t,e,r){var n=r("23e7"),a=r("d066"),i=r("2ba4"),o=r("c65b"),s=r("e330"),c=r("d039"),u=r("e8b5"),l=r("1626"),d=r("861d"),f=r("d9b5"),v=r("f36a"),h=r("4930"),p=a("JSON","stringify"),g=s(/./.exec),b=s("".charAt),m=s("".charCodeAt),x=s("".replace),w=s(1..toString),C=/[\uD800-\uDFFF]/g,A=/^[\uD800-\uDBFF]$/,y=/^[\uDC00-\uDFFF]$/,R=!h||c((function(){var t=a("Symbol")();return"[null]"!=p([t])||"{}"!=p({a:t})||"{}"!=p(Object(t))})),I=c((function(){return'"\\udf06\\ud834"'!==p("\udf06\ud834")||'"\\udead"'!==p("\udead")})),E=function(t,e){var r=v(arguments),n=e;if((d(e)||void 0!==t)&&!f(t))return u(e)||(e=function(t,e){if(l(n)&&(e=o(n,this,t,e)),!f(e))return e}),r[1]=e,i(p,null,r)},k=function(t,e,r){var n=b(r,e-1),a=b(r,e+1);return g(A,t)&&!g(y,a)||g(y,t)&&!g(A,n)?"\\u"+w(m(t,0),16):t};p&&n({target:"JSON",stat:!0,arity:3,forced:R||I},{stringify:function(t,e,r){var n=v(arguments),a=i(R?E:p,null,n);return I&&"string"==typeof a?x(a,C,k):a}})},eabe:function(t,e,r){},edd0:function(t,e,r){var n=r("13d2"),a=r("9bf2");t.exports=function(t,e,r){return r.get&&n(r.get,e,{getter:!0}),r.set&&n(r.set,e,{setter:!0}),a.f(t,e,r)}},fa39:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAECUlEQVRYR7WXTYhcRRDHq3pY9yKrYBQ8KBsjgvHgwRhiQBTjYZm4Xe8NusawhwS/o9GLoKhgBGPAgJd1NdGIXwtZTbRf9Rqzl6gHTVyDeIkIgnEOghAM6oKHzTJd0sO8Zaa338zb7NjwmJn++Ndv+lVVVyOsoM3Ozl69sLBAiHiDc26NUuoKv9w5d14p9aeI/DI4OMgjIyN/lJXFMhOttQ8BgBaR0TLzEXEGAKzW+lCv+V0BmLmGiLtF5M5eQrFxRPxaRCaI6LOi9YUAzPwGADxxMYYjayaJ6MkoZKyTmU8AwF19Mp7LfElEW0LNZTvAzIcBYFufjedy00T0QLt2B4AxZo9S6qX/yXhT1jn3cpqme3IbSwDM/DgAvNlu3Dm3Uyl1HAA2IOJ2EdleEu5Io9H4EBHPVCqVLSISRsMuInrLazUBpqamhoaGhr4TkRsDgLVpmtbzPmPMLQBwOwD4vvzxw8P5IyJztVrtVL4my7L1iPhTx7Yj/jw/P79pfHx8vgmQZdkLiPhK+O8GBgauqVarv5f819FpxpjLlVJ/hYMi8mKSJHubAMz8KwBcF1EYI6IjqwRIlFImonGWiNZhlmVVRDxWYGTVAMx8HwB8EtMXka1orT0gIo9GJrxNRLH+FW8IMx8EgEeW5QDEgx5gTkQ2Bk7yr9b60hVb6rKAmc8BwJWBne+x4P3XiWhtPwGstV9FzpSzHuBvALgsMHaaiDp2ZbUwWZZNIuKuQOcfD7AAAJeEcaq1Xr9ao+3rmdknnscCzQse4LdWEukYazQaa2q12vl+QTDztwCwOdCr+zA8iYi3RQwREdl+ADDz9QDwIwB0OLaInPJRcEhEHoyEyAmt9d39ALDW2lg1hYjv+lfgC4WJgkTxcJIkPcuqbpC+qgKATwvm7PYAGwDgdBeRZ4notYvZCWPMDqXUe13W3to8C6y10yJyv//u6zj/2R6ziPiRiBwt6xPMrBExFZEdRcYR8WOt9bb8MNoKAJ+3Jvtwed05d4dSKtz+c4h4VGsdrRWttZMici8AXFVix+4homNLBUmWZQcQMc/9x4mommXZ84i4t11MKbV5dHR06bxvH5uZmbnZOfdN6O0RmMNE1CxulgCstdeKyBcAcFPrVTyltZ4wxiSVSuXplkhda72zh9P1rClFZFOSJHMdAP5Hq3rxR6eH+IGIvIOuqFlr94nIc10WdRzxy6riAMJnr2nn3JlcME3TppMWNWvtfhF5pmB8WX0RvZgEEEtaYUUbM2KtfUdE/FUubNHipvBmZIxZp5TaDwBprlQGIHLqzSHiPq01x4B7Xk6Z2d8TfDwPlwFozfd1f90598Hi4uKrY2NjFwrzQVkP81nNi/byAWOMv8gOp2n6fhnt/wDqJrRWLmhIrwAAAABJRU5ErkJggg=="}}]);
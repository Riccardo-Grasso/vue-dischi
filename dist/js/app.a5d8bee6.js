(function(t){function e(e){for(var r,c,o=e[0],s=e[1],l=e[2],f=0,d=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"10b4":function(t,e,n){},"37d8":function(t,e,n){"use strict";n("d4cf")},"449d":function(t,e,n){"use strict";n("10b4")},5232:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main")],1)},i=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar d-flex align-items-center"},[r("img",{attrs:{src:n("93e4"),alt:"logo"}})])}],s={name:"Header",data:function(){return{}}},l=s,u=(n("cc4e"),n("2877")),f=Object(u["a"])(l,c,o,!1,null,"2720ca1b",null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main"},[n("div",{staticClass:"container pb-5"},[n("AlbumsContainer")],1)])},m=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-5"},[n("SearchBar"),n("div",{staticClass:"row row-cols-5 gy-4 gx-5 pt-5"},t._l(t.albumList,(function(t){return n("div",{key:t.id,staticClass:"col"},[n("AlbumCard",{attrs:{poster:t.poster,title:t.title,author:t.author,genre:t.genre,year:t.year}})],1)})),0),!0===t.loading?n("Loader"):t._e()],1)},v=[],g=n("bc3a"),h=n.n(g),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card align-items-center"},[n("img",{staticClass:"card-img-top",attrs:{src:t.poster,alt:"image"}}),n("div",{staticClass:"card-body"},[n("h3",{staticClass:"card-title text-center mb-3"},[t._v(t._s(t.title.toUpperCase()))]),n("div",{staticClass:"card-text text-center fs-5"},[t._v(t._s(t.author))]),n("div",{staticClass:"card-text text-center fs-6"},[t._v(t._s(t.year))])])])},y=[],x={name:"AlbumCard",props:{poster:String,title:String,author:String,genre:String,year:String}},C=x,O=(n("37d8"),Object(u["a"])(C,_,y,!1,null,null,null)),j=O.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loader"},[r("img",{attrs:{src:n("93e4"),alt:""}}),r("div",{staticClass:"fs-2 mt-3 loading-text"},[t._v("Loading...")])])}],k={name:"Loader"},E=k,F=(n("449d"),Object(u["a"])(E,w,S,!1,null,null,null)),$=F.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"input-group mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.textFilter,expression:"textFilter"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Filtra...","aria-label":"Recipient's username","aria-describedby":"searchButton"},domProps:{value:t.textFilter},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.activeFilter()},input:function(e){e.target.composing||(t.textFilter=e.target.value)}}}),n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"searchButton"},on:{click:function(e){return t.activeFilter()}}},[t._v(" Search ")])])])},A=[],L={name:"SearchBar",data:function(){return{textFilter:""}},methods:{activeFilter:function(){console.log(this.textFilter)}}},M=L,B=Object(u["a"])(M,P,A,!1,null,null,null),T=B.exports,H={name:"AlbumsContainer",components:{AlbumCard:j,Loader:$,SearchBar:T},data:function(){return{albumList:[],loading:!0}},mounted:function(){var t=this;h.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){console.log(e.data.response),t.albumList=e.data.response,setTimeout((function(){t.loading=!1}),800)}))}},J=H,N=(n("611e"),Object(u["a"])(J,b,v,!1,null,null,null)),R=N.exports,U={name:"Main",components:{AlbumsContainer:R}},q=U,z=(n("a94c"),Object(u["a"])(q,p,m,!1,null,"750572c1",null)),D=z.exports,G={name:"App",components:{Header:d,Main:D}},I=G,K=(n("5c0b"),Object(u["a"])(I,a,i,!1,null,null,null)),Q=K.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Q)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"611e":function(t,e,n){"use strict";n("eb3b")},"93e4":function(t,e,n){t.exports=n.p+"img/spotify-logo-png-7053.daf13776.png"},"9c0c":function(t,e,n){},a94c:function(t,e,n){"use strict";n("5232")},cc4e:function(t,e,n){"use strict";n("fccf")},d4cf:function(t,e,n){},eb3b:function(t,e,n){},fccf:function(t,e,n){}});
//# sourceMappingURL=app.a5d8bee6.js.map
(function(e){function t(t){for(var i,u,c=t[0],s=t[1],a=t[2],d=0,f=[];d<c.length;d++)u=c[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(i=!1)}i&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var i={},r={app:0},o=[];function u(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=i,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)u.d(n,i,function(t){return e[t]}.bind(null,i));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"088e":function(e,t,n){"use strict";var i=n("c414"),r=n.n(i);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"contextmenu",rawName:"v-contextmenu.dark",value:e.contextmenus,expression:"contextmenus",modifiers:{dark:!0}}],attrs:{id:"app"}},[e._v(" "+e._s(e.msg)+" ")])},o=[],u={name:"App",data:function(){return{msg:"在空白区域点击鼠标右键",switchState:!1}},methods:{contextmenus:function(){var e=this;return[{text:"删除",subText:"BACKSPACE",action:function(t){e.msg="你点击了删除",console.log(t)}},{text:"禁用菜单项",disable:!0},{divider:!0},{text:"多级菜单",children:[{text:"子菜单1"},{text:"子菜单2"},{text:"三级菜单",children:[{text:"子菜单1"},{text:"子菜单2"}]}]},{divider:!0},{text:"剪切",subText:"CTRL + X",action:function(){return e.msg="你点击了剪切"}},{text:"复制",subText:"CTRL + C",action:function(){return e.msg="你点击了复制"}},{text:"粘贴",subText:"CTRL + V",action:function(){return e.msg="你点击了粘贴"}}]}}},c=u,s=(n("5c0b"),n("2877")),a=Object(s["a"])(c,r,o,!1,null,null,null),l=a.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"status"}],staticClass:"v-contextmenu",style:{left:e.style.left,top:e.style.top},on:{contextmenu:function(e){e.preventDefault()}}},[n("ContextmenuContent",{attrs:{menus:e.menus,isDark:e.isDark,subMenuPosition:e.style.subMenuPosition,clickMenuItem:e.clickMenuItem}})],1)},f=[],m=(n("4de4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{class:["v-contextmenu-content",{dark:e.isDark}]},[e._l(e.menus,(function(t,i){var r;return[t.hide?e._e():n("li",{key:t.text||i,staticClass:"v-contextmenu-item",class:{divider:t.divider,disable:t.disable},on:{click:function(n){return n.stopPropagation(),e.clickMenuItem(t)}}},[t.divider?e._e():n("div",{staticClass:"v-contextmenu-item-content",class:{"has-sub-menu":t.children}},[n("span",{staticClass:"text"},[e._v(e._s(t.text))]),t.subText&&!t.children?n("span",{staticClass:"sub-text"},[e._v(e._s(t.subText))]):e._e(),t.children&&t.children.length?n("v-contextmenu-content",{staticClass:"sub-menu",style:(r={},r[e.subMenuPosition]="112.5%",r),attrs:{menus:t.children,clickMenuItem:e.clickMenuItem}}):e._e()],1)])]}))],2)}),v=[],p={name:"v-contextmenu-content",props:{menus:{type:Array,required:!0},isDark:{type:Boolean,default:!1},subMenuPosition:{type:String,default:"left"},clickMenuItem:{type:Function,required:!0}}},x=p,b=(n("088e"),Object(s["a"])(x,m,v,!1,null,"05164c34",null)),h=b.exports,y=170,g=30,_=5,k=11,C=120,w={name:"v-contextmenu",components:{ContextmenuContent:h},props:{axis:{type:Object,default:function(){return{x:0,y:0}}},el:{type:Object},menus:{type:Array,default:function(){return[{text:""}]}},isDark:{type:Boolean,default:!1},removeContextMenu:{type:Function,default:function(){return function(){}}}},data:function(){return{status:!1}},computed:{style:function(){var e=this.axis,t=e.x,n=e.y,i=this.menus.filter((function(e){return!e.divider&&!e.hide})).length,r=this.menus.filter((function(e){return e.divider})).length,o=y,u=i*g+r*k+2*_,c=y+C-10,s=document.body.clientWidth,a=document.body.clientHeight,l=s<=t+o?t-o:t,d=a<=n+u?n-u:n,f=s<=l+c?"right":"left";return{left:l+"px",top:d+"px",subMenuPosition:f}}},mounted:function(){var e=this;this.$nextTick((function(){return e.status=!0}))},beforeDestroy:function(){document.body.removeChild(this.$el)},methods:{clickMenuItem:function(e){e.disable||e.children||(this.status=!1,e.action&&e.action(this.el),this.removeContextMenu())}}},M=w,E=(n("f789"),Object(s["a"])(M,d,f,!1,null,null,null)),O=E.exports,L=i["a"].extend(O),P="__ctxmenu__",j=function(e){var t,n,i=e.el,r=e.event,o=e.binding;r.stopPropagation(),r.preventDefault();var u=o.value(i);if(u){var c=o.modifiers.dark,s=function e(){t&&(document.body.removeChild(t.$el),t=null),n&&(n.removeEventListener("contextmenu",a),n.removeEventListener("click",e),document.body.removeChild(n),n=null),i.classList.remove("contextmenu-active"),document.body.removeEventListener("scroll",e),window.removeEventListener("resize",e)},a=function(e){e.preventDefault(),s()};s(),n=document.createElement("div"),n.style="\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 9998;\n  ",document.body.appendChild(n),t=new L({el:document.createElement("div")}),t.axis={x:r.x,y:r.y},t.el=i,t.menus=u,t.isDark=c,t.removeContextMenu=s,document.body.appendChild(t.$el),i.classList.add("contextmenu-active"),n.addEventListener("contextmenu",a),n.addEventListener("click",s),document.body.addEventListener("scroll",s),window.addEventListener("resize",s)}},T={bind:function(e,t){e[P]=function(n){return j({el:e,event:n,binding:t})},e.addEventListener("contextmenu",e[P])},unbind:function(e){e&&e[P]&&(e.removeEventListener("contextmenu",e[P]),delete e[P])}},D={install:function(e){e.directive("contextmenu",T)}};i["a"].use(D),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),r=n.n(i);r.a},"9c0c":function(e,t,n){},b680:function(e,t,n){},c414:function(e,t,n){},f789:function(e,t,n){"use strict";var i=n("b680"),r=n.n(i);r.a}});
//# sourceMappingURL=app.26a897a0.js.map
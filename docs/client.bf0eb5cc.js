webpackJsonp([1],[,,function(e,t,n){"use strict";t.a={name:"demo1",data:function(){return{dynamicTags:this.$localStorage.get("dynamic_tags",["标签一",[{name:"标签二"}],["标签三","标签四"]]),inputVisible:!1,inputValue:""}},watch:{dynamicTags:{deep:!0,immediate:!0,handler:function(e){this.$localStorage.set("dynamic_tags",e)}}},methods:{handleClose:function(e){this.dynamicTags.splice(this.dynamicTags.indexOf(e),1)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick(function(){e.$refs.saveTagInput.$refs.input.focus()})},parseJSON:function(e){try{return new Function("return "+e)()}catch(t){return e}},handleInputConfirm:function(){var e=this.inputValue;e&&this.dynamicTags.push(this.parseJSON(e)),Object.assign(this,{inputVisible:!1,inputValue:""})}}}},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),r=n.n(a),i=n(6),o=n.n(i),u=n(10),s=n.n(u),l=n(11),c=n(13),f=n(17),p=n(21),v=(n.n(p),n(22)),h=(n.n(v),n(23)),g=(n.n(h),n(24));n.n(g);[r.a,s.a,o.a].forEach(function(e){return f.a.use(e)}),f.a.use(l.a),new f.a({el:"#app",render:function(e){return e(c.a)}})},,,,,,,function(e,t,n){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.namespace,a=void 0===n||n,o=t.prefix,u=Object(i.a)(function(e){return new r.a(e,o)});Object.defineProperties(e.prototype,{$localStorage:{get:function(){var e=a?this.$options.name:"";return u(e)}}})}var r=n(12),i=n(1);t.a=a,"undefined"!=typeof window&&window.Vue&&a(window.Vue)},function(e,t,n){"use strict";function a(e){return Array.isArray(e)?e:Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return u});var i=n(1),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"app";r(this,e),this.prefix=n+"_"+(t?t+"_":"")}return o(e,null,[{key:"parse",value:function(e){try{return JSON.parse(e)}catch(e){}}},{key:"update",value:function(e,t,n){for(var a=e;t.length>1;)e=e[t.shift()];return e[t.shift()]=n,a}}]),o(e,[{key:"split",value:function(e){var t=e.split(/\./),n=a(t),r=n[0],i=n.slice(1);return{target:this.prefix+r,route:i}}},{key:"get",value:function(t,n){var a=this.split(t),r=a.target,o=a.route,u=e.parse(localStorage.getItem(r));return Object(i.b)(u,o.join("."),n)}},{key:"set",value:function(t,n){var a=this.split(t),r=a.target,i=a.route,o=e.parse(localStorage.getItem(r)),u=i.length>1?e.update(o,i,n):n;localStorage.setItem(r,JSON.stringify(u))}},{key:"remove",value:function(e){var t=this.split(e),n=t.target;localStorage.removeItem(n)}},{key:"clear",value:function(){for(var e=0,t=localStorage.length;e<t;e++){var n=localStorage.key(e);n.startsWith(this.prefix)&&localStorage.removeItem(n)}}}]),e}()},function(e,t,n){"use strict";function a(e){n(14)}var r=n(2),i=n(16),o=n(15),u=a,s=o(r.a,i.a,!1,u,null,null);t.a=s.exports},function(e,t){},,function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h1",[e._v("Demo")]),e._v(" "),n("p",[e._v("\n    Add any key value to local storage (including json、array). Open the developer tool to see the storage changes. \n  ")]),e._v(" "),e._m(0),e._v(" "),e._l(e.dynamicTags,function(t,a){return n("el-tag",{key:a,attrs:{"disable-transitions":!1,closable:""},on:{close:function(n){e.handleClose(t)}}},[e._v("\n      "+e._s(t)+"\n  ")])}),e._v(" "),e.inputVisible?n("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):n("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v("\n      + New Tag\n  ")])],2)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{attrs:{href:"https://github.com/Army-U/vue-localstorage2/blob/master/examples/Demo.vue"}},[n("small",[e._v("Source Code")])])])}],i={render:a,staticRenderFns:r};t.a=i}],[3]);
//# sourceMappingURL=client.bf0eb5cc.js.map
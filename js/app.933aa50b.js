(function(t){function n(n){for(var o,a,c=n[0],u=n[1],s=n[2],d=0,f=[];d<c.length;d++)a=c[d],r[a]&&f.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(n);while(f.length)f.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],o=!0,c=1;c<e.length;c++){var u=e[c];0!==r[u]&&(o=!1)}o&&(i.splice(n--,1),t=a(a.s=e[0]))}return t}var o={},r={app:0},i=[];function a(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=o,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)a.d(e,o,function(n){return t[n]}.bind(null,o));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/develop-vechain-app-for-beginners/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var l=u;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("cd49")},"0665":function(t,n,e){"use strict";window.connex||(window.location.href="https://env.vechain.org/#/test/"+encodeURIComponent(window.location.href))},"38c8":function(t,n,e){},"6dcb":function(t,n,e){"use strict";(function(){function t(t){function n(t){return t.replace(/^[\s\uFEFF\xA0]+/g,"")}function e(t){for(var n=t.split("\n"),e=0;e<n.length;e++){if(""!==n[e].trim())break;n.splice(e--,1)}for(e=n.length-1;e>=0;e--){if(""!==n[e].trim())break;n.splice(e,1)}return n.join("\n")}return function(t){var o=e(t.innerHTML),r=o.split("\n"),i=r.reduce(function(t,e){return e.length>0&&n(e).length>0&&t>e.length-n(e).length?e.length-n(e).length:t},Number.POSITIVE_INFINITY);return r.map(function(t,n){return t.slice(i)}).join("\n")}(t)}if("function"===typeof window.addEventListener)for(var n=document.querySelectorAll("pre code"),e=0,o=n.length;e<o;e++){var r=n[e];r.hasAttribute("data-trim")&&"function"===typeof r.innerHTML.trim&&(r.innerHTML=t(r)),r.hasAttribute("data-noescape")||(r.innerHTML=r.innerHTML.replace(/</g,"&lt;").replace(/>/g,"&gt;")),r.addEventListener("focusout",function(t){window.hljs.highlightBlock(t.currentTarget)},!1)}})()},cd49:function(t,n,e){"use strict";e.r(n);e("0665");var o=e("1487"),r=e.n(o),i=e("4dd1"),a=e.n(i),c=(e("6dcb"),e("e08b"),e("4251"),e("d231"),e("104b"),e("729b"),e("fe3b"),e("84f0")),u=e.n(c);u.a.initialize({history:!0}),r.a.initHighlightingOnLoad(),r.a.registerLanguage("javascript",a.a);e("38c8");var s=e("2b0e"),l=e("5ee5"),d=e.n(l);new d.a({methods:{buttonAction:function(){var t=connex.vendor.sign("cert");t.request({purpose:"identification",payload:{type:"text",content:"我在Sync中！"}}).catch(function(t){console.error(t)})}}}).$mount("#first-seen"),new d.a({data:{number:"-",time:"-",score:0},methods:{buttonAction:function(){var t=this,n=connex.thor.block();n.get().then(function(n){t.number=n.number.toString(),t.time=new Date(1e3*n.timestamp).toLocaleString(),t.score=n.totalScore})}}}).$mount("#get-block");var f=e("9ab4"),p=e("109c"),h=void 0,b=new EventTarget,m=new Event("tick");(function(){return f["a"](h,void 0,void 0,function(){var t;return f["b"](this,function(n){switch(n.label){case 0:t=connex.thor.ticker(),n.label=1;case 1:return[4,t.next()];case 2:n.sent(),b.dispatchEvent(m),n.label=3;case 3:return[3,1];case 4:return[2]}})})})().catch(function(t){console.log("ticker loop error",t)}),new d.a({data:{buttonText:"Start",number:"-",time:"-",score:0},methods:{buttonAction:function(){"Start"===this.buttonText?(this.buttonText="Stop",this.tickerAction(),b.addEventListener(m.type,this.tickerAction)):(this.buttonText="Start",b.removeEventListener(m.type,this.tickerAction))},tickerAction:function(){var t=this;connex.thor.block().get().then(function(n){t.number=n.number.toString(),t.time=new Date(1e3*n.timestamp).toLocaleString(),p["a"].to(t.$data,.5,{score:n.totalScore})}).catch(function(t){console.log("tickerAction",t)})}},computed:{animatedScore:function(){return 0===this.score?"-":this.score.toFixed(0)}}}).$mount("#ticker");var g=e("901e"),v=e.n(g),y={constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"};new d.a({data:{addr:"-",amount:"-"},methods:{identAction:function(){var t=this,n=new Uint8Array(20);crypto.getRandomValues(n);for(var e="0x",o=0;o<n.length;o++)e+=("0"+n[o].toString(16)).slice(-2);var r=connex.vendor.sign("cert");r.request({purpose:"identification",payload:{type:"text",content:"Connex Intro is requesting your identification with random string, choose the wallet you want to link.\r\n\r\nRandom challenge: "+e}}).then(function(n){t.addr=n.annex.signer})},buttonAction:function(){var t=this,n=connex.thor.account("0x0000000000000000000000000000456E65726779").method(y);n.call(this.addr).then(function(n){t.amount=new v.a(n.decoded["0"]).dividedBy(1e18).dp(0).toString()})}}}).$mount("#balance-of");var w={constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"};new d.a({data:{amount:void 0,addr:void 0,txid:"-"},methods:{buttonAction:function(){var t=this,n=connex.thor.account("0x0000000000000000000000000000456E65726779").method(w),e=n.asClause(this.addr,new v.a(this.amount).multipliedBy(1e18).dp(0).toString()),o=connex.vendor.sign("tx");o.comment("Transfer token to "+this.addr),o.request([e]).then(function(n){t.txid=n.txid}).catch(function(t){console.log("transfer-action",t)})}}}).$mount("#transfer"),s["a"].config.productionTip=!1}});
//# sourceMappingURL=app.933aa50b.js.map
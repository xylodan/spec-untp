(()=>{"use strict";var e,a,t,c,f,r={},b={};function d(e){var a=b[e];if(void 0!==a)return a.exports;var t=b[e]={id:e,loaded:!1,exports:{}};return r[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=r,d.c=b,e=[],d.O=(a,t,c,f)=>{if(!t){var r=1/0;for(i=0;i<e.length;i++){t=e[i][0],c=e[i][1],f=e[i][2];for(var b=!0,o=0;o<t.length;o++)(!1&f||r>=f)&&Object.keys(d.O).every((e=>d.O[e](t[o])))?t.splice(o--,1):(b=!1,f<r&&(r=f));if(b){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,c,f]},d.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return d.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var f=Object.create(null);d.r(f);var r={};a=a||[null,t({}),t([]),t(t)];for(var b=2&c&&e;"object"==typeof b&&!~a.indexOf(b);b=t(b))Object.getOwnPropertyNames(b).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,d.d(f,r),f},d.d=(e,a)=>{for(var t in a)d.o(a,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((a,t)=>(d.f[t](e,a),a)),[])),d.u=e=>"assets/js/"+({49:"81a0d352",53:"935f2afb",129:"9a5e7696",708:"47aebe80",719:"445e7840",864:"9a3b9b79",895:"d33a9fa5",931:"093b54b2",1075:"1da5c89c",1660:"940a6c6b",1881:"2505769c",1895:"a2bbd68c",2106:"f0a5ab13",2682:"3551f6a5",3085:"1f391b9e",3166:"9dc67cb9",3618:"0f265e1c",3658:"40df0696",4124:"82e10b7f",4195:"c4f5d8e4",4291:"0ec70f04",4434:"f5f78f72",4685:"14e4995d",4897:"2512955b",5176:"4c33b76c",5326:"f8b0a265",5459:"e1c9fc2b",5569:"62737bf6",5793:"405b4c03",5796:"b9ae949c",5824:"2288f947",6152:"33629ac6",6449:"dfc5cb3f",6539:"1f60d0d4",6785:"bbfdce2e",7363:"583db3ef",7533:"f70bb399",7661:"958936f8",7918:"17896441",7980:"3d1a1f61",8155:"1e32532d",8448:"d0ec1786",8533:"e34db49c",8741:"65c00cee",9052:"8e33b65d",9460:"e74b677a",9514:"1be78505",9543:"4aa02d1e",9548:"2a91474c",9608:"376b54ac",9704:"a857e339",9869:"33b4f319"}[e]||e)+"."+{49:"e2a3143e",53:"9df3edae",129:"57ac1197",708:"60cb88d0",719:"34f6bf70",864:"48c63bcd",895:"16048894",931:"5d6ccbb2",1075:"c0b5f4e8",1660:"5145a377",1881:"ea790ca9",1895:"f05f549b",2106:"09ba4849",2682:"fe0c995c",3074:"7f9b131c",3085:"c2167060",3166:"b1e71916",3618:"5710659b",3658:"ebc7ce6b",3893:"f1a7019b",4124:"72d551a2",4195:"5b9b4135",4291:"4ff64f4e",4434:"93f6e3f0",4685:"ecb895e0",4897:"df7a31bd",5176:"bd60dbbf",5326:"24eb62aa",5459:"03b1a4d2",5569:"24e7f758",5793:"6b2a8b07",5796:"1c636d59",5824:"265d41f0",6152:"c0de38bc",6449:"d96abf50",6539:"786b67b5",6785:"65fdc6de",7363:"7943e5fa",7533:"754e24d8",7661:"133d1cb2",7918:"bf10f3e6",7980:"8a708e29",8155:"3561af37",8448:"a080c4b4",8533:"67013541",8741:"89e1038b",9052:"67e25257",9460:"ed018a41",9514:"90c181b9",9543:"2d3dc3e1",9548:"bbcd9b19",9608:"214983ec",9704:"655ffa0a",9869:"5bfa953f"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},f="spec-untp-website:",d.l=(e,a,t,r)=>{if(c[e])c[e].push(a);else{var b,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+t){b=u;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,d.nc&&b.setAttribute("nonce",d.nc),b.setAttribute("data-webpack",f+t),b.src=e),c[e]=[a];var l=(a,t)=>{b.onerror=b.onload=null,clearTimeout(s);var f=c[e];if(delete c[e],b.parentNode&&b.parentNode.removeChild(b),f&&f.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),o&&document.head.appendChild(b)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/spec-untp/",d.gca=function(e){return e={17896441:"7918","81a0d352":"49","935f2afb":"53","9a5e7696":"129","47aebe80":"708","445e7840":"719","9a3b9b79":"864",d33a9fa5:"895","093b54b2":"931","1da5c89c":"1075","940a6c6b":"1660","2505769c":"1881",a2bbd68c:"1895",f0a5ab13:"2106","3551f6a5":"2682","1f391b9e":"3085","9dc67cb9":"3166","0f265e1c":"3618","40df0696":"3658","82e10b7f":"4124",c4f5d8e4:"4195","0ec70f04":"4291",f5f78f72:"4434","14e4995d":"4685","2512955b":"4897","4c33b76c":"5176",f8b0a265:"5326",e1c9fc2b:"5459","62737bf6":"5569","405b4c03":"5793",b9ae949c:"5796","2288f947":"5824","33629ac6":"6152",dfc5cb3f:"6449","1f60d0d4":"6539",bbfdce2e:"6785","583db3ef":"7363",f70bb399:"7533","958936f8":"7661","3d1a1f61":"7980","1e32532d":"8155",d0ec1786:"8448",e34db49c:"8533","65c00cee":"8741","8e33b65d":"9052",e74b677a:"9460","1be78505":"9514","4aa02d1e":"9543","2a91474c":"9548","376b54ac":"9608",a857e339:"9704","33b4f319":"9869"}[e]||e,d.p+d.u(e)},(()=>{var e={1303:0,532:0};d.f.j=(a,t)=>{var c=d.o(e,a)?e[a]:void 0;if(0!==c)if(c)t.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((t,f)=>c=e[a]=[t,f]));t.push(c[2]=f);var r=d.p+d.u(a),b=new Error;d.l(r,(t=>{if(d.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var f=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;b.message="Loading chunk "+a+" failed.\n("+f+": "+r+")",b.name="ChunkLoadError",b.type=f,b.request=r,c[1](b)}}),"chunk-"+a,a)}},d.O.j=a=>0===e[a];var a=(a,t)=>{var c,f,r=t[0],b=t[1],o=t[2],n=0;if(r.some((a=>0!==e[a]))){for(c in b)d.o(b,c)&&(d.m[c]=b[c]);if(o)var i=o(d)}for(a&&a(t);n<r.length;n++)f=r[n],d.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return d.O(i)},t=self.webpackChunkspec_untp_website=self.webpackChunkspec_untp_website||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();
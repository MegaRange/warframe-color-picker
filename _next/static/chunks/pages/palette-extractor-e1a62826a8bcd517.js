(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[556],{4852:function(t,e,n){"use strict";n.r(e);var i=n(6767),r=n.n(i),a=n(7294),u=n(5893),h=function(t,e){var n=e.getContext("2d");if(n){e.width=t.width,e.height=t.height,n.drawImage(t,0,0,t.width,t.height);for(var i=t.height/18,a=t.width/5,u=[],h=0;h<18;h++)for(var s=0;s<5;s++){var o=Math.floor(a/2+a*s),f=Math.floor(i/2+i*h),c=r()(n.getImageData(o,f,1,1).data,"rgb").hex();u.push({hex:c,position:{x:s,y:h}})}return u}};e.default=function(){var t=(0,a.useRef)(null),e=(0,a.useState)(""),n=e[0],i=e[1],r=function(e){var n,r=null===(n=e.target.files)||void 0===n?void 0:n[0];if(r){var a=new Image;a.src=URL.createObjectURL(r),a.addEventListener("load",function(){t.current&&i(JSON.stringify(h(a,t.current)))})}};return(0,u.jsxs)("div",{style:{display:"flex"},children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("input",{type:"file",name:"paletteImage",onChange:function(t){return r(t)}}),(0,u.jsx)("canvas",{ref:t})]}),(0,u.jsx)("div",{children:(0,u.jsx)("textarea",{value:n,style:{height:"80vh",width:"300px"}})})]})}},6828:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/palette-extractor",function(){return n(4852)}])}},function(t){t.O(0,[774,888,179],function(){return t(t.s=6828)}),_N_E=t.O()}]);
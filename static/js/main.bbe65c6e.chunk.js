(this["webpackJsonproute-parser"]=this["webpackJsonproute-parser"]||[]).push([[0],{14:function(e,t,a){e.exports=a(38)},19:function(e,t,a){},20:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=(a(19),a(2)),s=(a(20),a(13)),i=a.n(s);var u=function(){var e,t=Object(n.useState)(["Loading"]),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),m=u[0],p=u[1],h=Object(n.useState)(0),b=Object(o.a)(h,2),g=b[0],E=b[1],d=Object(n.useState)(),f=Object(o.a)(d,2),w=f[0],v=f[1],S=Object(n.useState)(),O=Object(o.a)(S,2),k=O[0],y=O[1],j=Object(n.useState)(),N=Object(o.a)(j,2),x=N[0],A=N[1],C=Object(n.useState)(),F=Object(o.a)(C,2),I=F[0],z=F[1],D=function(e){switch(e.target.id){case"link":v(e.target.value);break;case"sheet":y(e.target.value);break;case"range":A(e.target.value);break;case"target":z(Number(e.target.value))}};return e=m?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"display"},r.a.createElement("img",{onClick:function(){var e;(e=g)>0&&E(e-1)},src:"https://github.com/luckyswims/route-parser/blob/master/public/left-arrow.png?raw=true",alt:"Previous Step"}),r.a.createElement("p",null,c[g]),r.a.createElement("img",{onClick:function(){var e;(e=g)<c.length-1&&E(e+1)},src:"https://github.com/luckyswims/route-parser/blob/master/public/right-arrow.png?raw=true",alt:"Next Step"})),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(I-1)}},r.a.createElement("label",{htmlFor:"target"},"Go to Step:"),r.a.createElement("input",{type:"text",id:"target",onChange:D}),r.a.createElement("input",{type:"submit"}))):r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.a.get("https://sheets.googleapis.com/v4/spreadsheets/".concat(w,"/values/").concat(k,"!").concat(x,"?key=AIzaSyByszzO7OEIsYazzKUA52ngaNKTEIspeDs")).then((function(e){console.log(e),l(e.data.values),p(!0)}))}},r.a.createElement("label",{htmlFor:"link"},"Google Sheet ID"),r.a.createElement("input",{type:"text",id:"link",onChange:D}),r.a.createElement("label",{htmlFor:"sheet"},"Sheet Name"),r.a.createElement("input",{type:"text",id:"sheet",placeholder:"Sheet1",onChange:D}),r.a.createElement("label",{htmlFor:"range"},"Range"),r.a.createElement("input",{type:"text",id:"range",placeholder:"A1:A100",onChange:D}),r.a.createElement("input",{type:"submit"})),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Route Parser")),r.a.createElement("main",null,e),r.a.createElement("div",null,"Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/roundicons",title:"Roundicons"},"Roundicons")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.bbe65c6e.chunk.js.map
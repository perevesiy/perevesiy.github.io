(this.webpackJsonpvbth=this.webpackJsonpvbth||[]).push([[0],{15:function(e,a,t){e.exports={app_header:"Header_app_header__LOTKg",active:"Header_active__2A0pf"}},2:function(e,a,t){e.exports={frame_wrapper:"Photophilter_frame_wrapper__3obKU",mainNav:"Photophilter_mainNav__yh7d6",uploadlink:"Photophilter_uploadlink__3Yw8M",frame_wrapper_overlay:"Photophilter_frame_wrapper_overlay__8io_l",opacity:"Photophilter_opacity__3qJpP",usable:"Photophilter_usable__3mWSb",removed:"Photophilter_removed__1QqQ_",overall:"Photophilter_overall__26Le9",active:"Photophilter_active__2yu7K",photocontrolls:"Photophilter_photocontrolls__1uLj7",backlink:"Photophilter_backlink__2xrU8",heading:"Photophilter_heading__62XQ1",start:"Photophilter_start__1SxrA"}},21:function(e,a,t){e.exports={frame_wrapper:"Mainapp_frame_wrapper__9FMcd",mainNav:"Mainapp_mainNav__2wZ9e"}},23:function(e,a,t){e.exports={frame_wrapper:"Boomerang_frame_wrapper__1Q8ed",mainNav:"Boomerang_mainNav__2W_kU"}},30:function(e,a,t){e.exports=t.p+"static/media/logo.dd79bc92.png"},32:function(e,a,t){e.exports={hello_wrapper:"Hellomessage_hello_wrapper__NI2Oq"}},36:function(e,a,t){e.exports=t.p+"static/media/overlay1.d3f17edf.png"},37:function(e,a,t){e.exports=t.p+"static/media/overlay2.cfd27743.png"},38:function(e,a,t){e.exports=t.p+"static/media/overlay3.4133c267.png"},39:function(e,a,t){e.exports=t.p+"static/media/overlay4.061367e0.png"},43:function(e,a,t){e.exports=t(70)},49:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(28),l=t.n(o),c=t(17),i={nav_array:[{link:"/"},{link:"appmenu"}]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return e},m=Object(c.a)({Navigation:s}),p=Object(c.b)(m),u=(t(49),t(15)),d=t.n(u),v=t(1),_=t(30),h=t.n(_),f=function(e){var a=Object(v.e)();n.a.useEffect((function(){t()}),[a]);var t=function(){var e=document.getElementById("header");"/"==window.location.pathname?e.className=e.className+" "+d.a.active:e.classList.remove(d.a.active)};return n.a.createElement("header",{className:d.a.app_header,id:"header"},n.a.createElement("img",{src:h.a,alt:"logo"}))},E=t(32),y=t.n(E),b=t(4),g=function(){return n.a.createElement("section",{className:y.a.hello_wrapper},n.a.createElement("h1",null,"Your Event Name"),n.a.createElement("p",null,"Your slogan here"),n.a.createElement(b.b,{to:"/appmenu",className:"main_btn"},"Lets start"))},w=t(21),S=t.n(w),N=function(){return n.a.createElement("section",null,n.a.createElement("div",{className:S.a.frame_wrapper}),n.a.createElement("h3",null,"Choose an experience"),n.a.createElement("nav",{className:S.a.mainNav},n.a.createElement(b.b,{to:"/photophilter"},"Photo"),n.a.createElement(b.b,{to:"/boomerangphilter"},"Boomerang")))},k=t(12),L=t.n(k),q=t(22),x=t(24),C=t(2),O=t.n(C),P=t(33),j=t(34),B=t(42),F=t(41),U=t(35),M=t.n(U),R=t(9),T=t.n(R),A=t(36),I=t.n(A),Q=t(37),W=t.n(Q),Y=t(38),H=t.n(Y),J=t(39),K=t.n(J),D=function(e){document.getElementById("frame_wrapper_overlay").setAttribute("style",'background: url("'+e.target.getAttribute("src")+'");    background-repeat: no-repeat; background-size: cover; background-position: center center;')},z=function(e){Object(B.a)(t,e);var a=Object(F.a)(t);function t(){return Object(P.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var e={dots:!1,infinite:!1,speed:500,slidesToShow:3,slidesToScroll:1};return n.a.createElement("div",{className:T.a.slider_wrapper},n.a.createElement(M.a,e,n.a.createElement("div",{className:T.a.slide_item},n.a.createElement("img",{onClick:D,src:I.a,alt:"overlay1"})),n.a.createElement("div",{className:T.a.slide_item},n.a.createElement("img",{onClick:D,src:W.a,alt:"overlay2"})),n.a.createElement("div",{className:T.a.slide_item},n.a.createElement("img",{onClick:D,src:H.a,alt:"overlay3"})),n.a.createElement("div",{className:T.a.slide_item},n.a.createElement("img",{onClick:D,src:K.a,alt:"overlay4"}))))}}]),t}(r.Component),X=t(40),Z=t.n(X),$=function(){var e=Object(r.useState)({preview:"",raw:""}),a=Object(x.a)(e,2),t=a[0],o=a[1],l=n.a.useRef(null),c=n.a.useState(null),i=Object(x.a)(c,2),s=i[0],m=i[1],p=n.a.useCallback((function(){var e=l.current.getScreenshot({width:275,height:275});m(e),document.querySelector("video").classList.add(O.a.active),document.querySelector("#cap-r").classList.remove("active"),document.querySelector("#cap-p").classList.add("active"),document.querySelector("#savephoto").classList.add("active")}),[l,m]),u=function(){var e=Object(q.a)(L.a.mark((function e(a){var r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),(r=new FormData).append("image",t.raw),e.next=5,fetch("/photophilter",{method:"POST",headers:{"Content-Type":"multipart/form-data"},body:r});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement("section",null,n.a.createElement("div",{className:O.a.frame_wrapper},t.preview?n.a.createElement("img",{src:t.preview,id:"firstprev",className:O.a.overall,alt:"dummy",width:"100%"}):"",n.a.createElement("div",{className:O.a.frame_wrapper_overlay,id:"frame_wrapper_overlay"}),n.a.createElement(Z.a,{audio:!1,ref:l,videoConstraints:{width:375,height:375,facingMode:"user"},screenshotFormat:"image/jpeg"}),s&&n.a.createElement("img",{src:s})),n.a.createElement("h3",{className:O.a.heading},"Choose a frame"),n.a.createElement(b.b,{to:"/appmenu",className:O.a.backlink},"Back"),n.a.createElement(z,null),n.a.createElement("input",{type:"file",id:"upload-button",style:{display:"none"},onChange:function(e){e.target.files.length&&o({preview:URL.createObjectURL(e.target.files[0]),raw:e.target.files[0]}),document.querySelector("video").classList.remove(O.a.opacity),document.querySelector("#firstprev")&&document.querySelector("#firstprev").classList.add(O.a.overall),document.querySelector("#cap-p").classList.remove(O.a.usable),document.querySelector("#cap-r").classList.remove(O.a.usable),document.querySelector("#start").classList.remove(O.a.removed),document.querySelector("#savephoto").classList.add("active")}}),n.a.createElement("button",{onClick:function(){document.querySelector("video").classList.add(O.a.opacity),document.querySelector("#firstprev")&&document.querySelector("#firstprev").classList.remove(O.a.overall),document.querySelector("#cap-p").classList.add(O.a.usable),document.querySelector("#cap-r").classList.add(O.a.usable),document.querySelector("#start").classList.add(O.a.removed)},className:O.a.start,id:"start"},"Start"),n.a.createElement("div",{className:O.a.photocontrolls},n.a.createElement("button",{onClick:p,id:"cap-p"},"Capture photo"),n.a.createElement("button",{onClick:function(){document.querySelector("video").classList.remove(O.a.active),document.querySelector("#cap-r").classList.add("active"),document.querySelector("#cap-p").classList.remove("active"),document.querySelector("#savephoto").classList.remove("active")},className:"active",id:"cap-r"},"Retake photo"),n.a.createElement("label",{htmlFor:"upload-button"},n.a.createElement("h5",{className:O.a.uploadlink},"Upload your photo"))),n.a.createElement("button",{id:"savephoto",onClick:u},"Save"))},G=t(23),V=t.n(G),ee=function(){return n.a.createElement("section",null,n.a.createElement("div",{className:V.a.frame_wrapper}),n.a.createElement("h3",null,"Choose a frame"),n.a.createElement("nav",{className:V.a.mainNav},n.a.createElement(b.b,{to:"/appmenu"},"Return to menu")))},ae=function(e){return n.a.createElement("div",null,n.a.createElement("form",{id:"form"},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"to_name"},"to_name"),n.a.createElement("input",{type:"text",name:"to_name",id:"to_name"})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"from_name"},"from_name"),n.a.createElement("input",{type:"text",name:"from_name",id:"from_name"})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"message"},"message"),n.a.createElement("input",{type:"text",name:"message",id:"message"})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"reply_to"},"reply_to"),n.a.createElement("input",{type:"text",name:"reply_to",id:"reply_to"})),n.a.createElement("input",{type:"submit",id:"button",value:"Send Email"})))},te=function(e){return n.a.createElement("div",{className:"app_wrapper"},n.a.createElement(f,{state:e.appState.Navigation}),n.a.createElement("main",null,n.a.createElement(v.a,{exact:!0,path:"/",component:g}),n.a.createElement(v.a,{path:"/appmenu",component:N}),n.a.createElement(v.a,{path:"/photophilter",component:$}),n.a.createElement(v.a,{path:"/boomerangphilter",component:ee})),n.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=function(e){l.a.render(n.a.createElement(b.a,null,n.a.createElement(te,{appState:p.getState(),dispatch:p.dispatch.bind(p)})),document.getElementById("root"))};re(p.getState()),p.subscribe((function(){p.getState();re()})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports={slider_wrapper:"Overlayslider_slider_wrapper__3Bu0Y",slide_item:"Overlayslider_slide_item__1svCc"}}},[[43,1,2]]]);
//# sourceMappingURL=main.3fe6c92d.chunk.js.map
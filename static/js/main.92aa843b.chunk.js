(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e){e.exports=JSON.parse('[{"id":1,"name":"My Tech Blog","image":"https://raw.githubusercontent.com/tlor0026/Tong-Lor/main/src/images/Capture.JPG","github":"https://github.com/tlor0026/tongs-tech-blog","deploy":"https://hidden-atoll-44594.herokuapp.com/","technologies":"JavaScript, Handlebars, CSS"},{"id":2,"name":"Pour Me Another","image":"https://raw.githubusercontent.com/tlor0026/Tong-Lor/main/src/images/tappthat_screenshot.png","github":"https://github.com/tlor0026/pour-me-another","deploy":"https://pour-me-another.herokuapp.com/","technologies":"JavaScript, Handlebars, CSS"},{"id":3,"name":"Dogs Dogs Dogs","image":"https://raw.githubusercontent.com/tlor0026/Tong-Lor/main/src/images/landing-page.png","github":"https://github.com/tlor0026/dogs-dogs-dogs","deploy":"https://taylorstrubhar.github.io/dogs-dogs-dogs/","technologies":"JavaScript, HTML, CSS"},{"id":4,"name":"Eat And Go","image":"https://raw.githubusercontent.com/tlor0026/Tong-Lor/main/src/images/eat-and-go.jpg","github":"https://github.com/tlor0026/eat-and-go","deploy":"https://eat-and-go.herokuapp.com/","technologies":"JavaScript, HTML, CSS"}]')},28:function(e,t,a){},29:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(17),o=a.n(c),r=(a(28),a.p,a(29),a(18)),l=a(19),i=a(20),d=a(23),j=a(7),h=a(2),b=a(21),p=a(0),g={display:"flex",flexDirection:"column",padding:"10px"},u={backgroundColor:"grey",padding:"10px"},m={color:"white"};var x=function(e){return Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{className:"cardContent",children:[Object(p.jsx)("h2",{className:"projectTitle",id:"projectTitle",style:u,children:e.name}),Object(p.jsx)("div",{className:"img-container",children:Object(p.jsx)("img",{class:"projectImage",alt:e.name,src:e.image})}),Object(p.jsxs)("p",{className:"projectInfo",id:"projectInfo",style:g,children:[Object(p.jsx)("button",{class:"btn btn-dark",children:Object(p.jsx)("a",{href:e.deploy,style:m,children:"Deployed Application"})}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{class:"btn btn-dark",children:Object(p.jsx)("a",{href:e.github,style:m,children:"Application Repository"})})]}),Object(p.jsxs)("p",{className:"technologies",children:[Object(p.jsx)("h4",{children:"Techologies Used: "}),e.technologies]})]})})},O={padding:"10px"};function f(e){return Object(p.jsx)("div",{className:"wrapper",style:O,children:e.children})}var v=function(){return Object(p.jsx)("section",{children:Object(p.jsx)(f,{id:"project-data",children:b.map((function(e){return Object(p.jsx)(x,{image:e.image,name:e.name,github:e.github,deploy:e.deploy,technologies:e.technologies},e.id)}))})})},y=a.p+"static/media/Tong.adfa2f98.jpg",k={padding:"20px"},w={color:"white"};var S=function(){return Object(p.jsxs)("div",{class:"jumbotron",children:[Object(p.jsx)("h1",{class:"display-4",children:"About Me"}),Object(p.jsx)("img",{class:"headshot",src:y,width:"420px",height:"800px",alt:"headshot",style:k}),Object(p.jsx)("p",{class:"lead",children:"Welcome to my portfolio. I've been in the IT field for about 7 years now and decided to transition into software development/programing. Life is all about learning and being dedicated to building yourself up to new and better things. I've just completed my Coding boot camp with the University of Minnesota that went through a full stack course. This includes front and back end components, the user of server and 3rd party API's, React, Javascript, databases along with many other things. Im looking forward in life to more things to come!"}),Object(p.jsx)("hr",{class:"my-4"}),Object(p.jsx)("p",{}),Object(p.jsx)("p",{class:"lead",children:Object(p.jsx)("button",{type:"button",class:"btn btn-dark",children:Object(p.jsx)("a",{href:"https://docs.google.com/document/d/0B_KPR1M86f-gajJ1WGV5Y2ZYakpnZC1XZHJyVzFwNlMtNFNV/edit?resourcekey=0-DZ-GmcLnOYbopvSUt7rfDw",style:w,children:"View Full Resume"})})})]})},N=a(10),L=a(13),C=a(15);var T={backgroundColor:"black",padding:"20px"},M={color:"white"},I={padding:"10px"},A={backgroundColor:"black",color:"white"};var D=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(C.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),o=Object(C.a)(c,2),r=o[0],l=o[1],i=a.name,d=a.email,j=a.message;function h(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);l(t?"":"Please enter a valid email.")}else e.target.value.length?l():l("".concat(e.target.name," is required."));r||n(Object(L.a)(Object(L.a)({},a),{},Object(N.a)({},e.target.name,e.target.value)))}return Object(p.jsxs)("div",{class:"contact",style:I,children:[Object(p.jsx)("h1",{style:T,children:"Contact Me"}),Object(p.jsxs)("form",{children:[Object(p.jsxs)("div",{class:"form-group",style:I,children:[Object(p.jsx)("label",{htmlFor:"name",children:"Your name:"}),Object(p.jsx)("input",{type:"text",class:"form-control",id:"name",placeholder:"Leave your name here...",defaultValue:i,onBlur:h})]}),Object(p.jsxs)("div",{class:"form-group",style:I,children:[Object(p.jsx)("label",{htmlFor:"email",children:"Your email:"}),Object(p.jsx)("textarea",{name:"email",id:"email",placeholder:"Enter your email here...",class:"form-control",defaultValue:d,onBlur:h})]}),Object(p.jsxs)("div",{class:"form-group",style:I,children:[Object(p.jsx)("label",{htmlFor:"message",children:"Your message:"}),Object(p.jsx)("textarea",{name:"message",id:"message",placeholder:"Enter your message here...",class:"form-control",defaultValue:j,onBlur:h})]}),r&&Object(p.jsxs)("div",{style:A,children:[Object(p.jsx)("h3",{children:"Form Errors:"}),Object(p.jsx)("p",{class:"error",children:r})]}),Object(p.jsx)("button",{class:"btn btn-dark",style:M,onSubmit:function(e){e.preventDefault()},children:"Submit Message"})]}),Object(p.jsx)("p",{style:I,children:"Please feel free to contact me with any inquiries you may have. "}),Object(p.jsxs)("h5",{children:["Call/Text me at ",Object(p.jsx)("a",{href:"tel:651.235.2653",style:M,children:"651-235-2653"})]}),Object(p.jsxs)("h5",{children:["Email me at ",Object(p.jsx)("a",{href:"mailto:tlor0026@gmail.com",style:M,children:"tlor0026@gmail.com"})]})]})},F=(a(31),{color:"white"}),J={width:"100%"};var V=function(e){return Object(p.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark",style:J,children:[Object(p.jsx)("a",{class:"navbar-brand",style:F,href:"#",children:"Tong Lor"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{class:"navbar-toggler-icon"})}),Object(p.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(p.jsxs)("div",{class:"navbar-nav",children:[Object(p.jsx)(j.b,{to:"/about",children:Object(p.jsx)("a",{class:"nav-link",style:F,children:"About Me"})}),Object(p.jsx)(j.b,{to:"/portfolio",children:Object(p.jsx)("a",{class:"nav-link",style:F,children:"Portfolio"})}),Object(p.jsx)(j.b,{to:"/resume",children:Object(p.jsx)("a",{class:"nav-link",style:F,children:"Resume"})}),Object(p.jsx)(j.b,{to:"/contact",children:Object(p.jsx)("a",{class:"nav-link",style:F,children:"Contact"})})]})})]})},B={color:"white",padding:"20px"},P={padding:"10px"},E={backgroundColor:"grey",padding:"20px"};var Z=function(){return Object(p.jsxs)("section",{class:"mb-4",style:P,children:[Object(p.jsx)("h2",{className:"skills",style:E,children:"FRONT END SKILLS"}),Object(p.jsx)("p",{children:"HTML"}),Object(p.jsx)("p",{children:"CSS"}),Object(p.jsx)("p",{children:"jQuery"}),Object(p.jsx)("p",{children:"IndexedDB"}),Object(p.jsx)("h2",{className:"skills",style:E,children:"BACK END SKILLS"}),Object(p.jsx)("p",{children:"Express.js"}),Object(p.jsx)("p",{children:"SQL (mySQL, sequelize)"}),Object(p.jsx)("p",{children:"noSQL (mongoDB, mongoose)"}),Object(p.jsx)("p",{children:"APIs (RESTful, server-side, third-party)"}),Object(p.jsx)("button",{type:"button",class:"btn btn-dark",children:Object(p.jsx)("a",{href:"https://docs.google.com/document/d/0B_KPR1M86f-gajJ1WGV5Y2ZYakpnZC1XZHJyVzFwNlMtNFNV/edit?resourcekey=0-DZ-GmcLnOYbopvSUt7rfDw",style:B,children:"View Full Resume"})})]})},R=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(j.a,{children:[Object(p.jsx)("div",{className:"nav",children:Object(p.jsx)(V,{})}),Object(p.jsxs)("div",{className:"routes",children:[Object(p.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(h.a,{to:"/about"})}}),Object(p.jsx)(h.b,{path:"/portfolio",component:v}),Object(p.jsx)(h.b,{path:"/about",component:S}),Object(p.jsx)(h.b,{path:"/contact",component:D}),Object(p.jsx)(h.b,{path:"/resume",component:Z})]})]})}}]),a}(s.Component),Y=R,G={width:"75px",height:"75px",padding:"10px"},H={padding:"10px",fontWeight:"bold"};var _=function(){return Object(p.jsxs)("div",{class:"footer",id:"footer",children:[Object(p.jsx)("a",{href:"https://www.linkedin.com/in/tong-lor-360220238/",children:Object(p.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png",alt:"LinkedIn",style:G})}),Object(p.jsx)("p",{style:H,children:"\xa9 Nou Vue 2022"}),Object(p.jsx)("a",{href:"https://github.com/tlor0026/Tong-Lor",children:Object(p.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/25/25231.png",alt:"Github",style:G})})]})};var z=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(Y,{}),Object(p.jsx)(_,{})]})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),s(e),n(e),c(e),o(e)}))};o.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(z,{})}),document.getElementById("root")),K()}},[[40,1,2]]]);
//# sourceMappingURL=main.92aa843b.chunk.js.map
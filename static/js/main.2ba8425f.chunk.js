(this["webpackJsonpnimishagrawal.in"]=this["webpackJsonpnimishagrawal.in"]||[]).push([[0],{35:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t(1),n=t.n(s),r=t(26),l=t.n(r),i=t(8),o=(t(35),t(36),t(37),t(2)),m=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("header",{id:"header",className:"border-bottom",children:Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-transparent",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("a",{className:"navbar-brand fw-bold fst-italic fs-2",href:"/",onClick:function(e){return e.preventDefault()},children:"Nimish Agrawal"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03",children:Object(c.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(i.b,{exact:!0,to:"/",activeClassName:"activeRoute",className:"nav-link","aria-current":"page",children:"Home"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(i.b,{to:"/bio",activeClassName:"activeRoute",className:"nav-link","aria-current":"page",children:"BIO"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(i.b,{to:"/books",activeClassName:"activeRoute",className:"nav-link","aria-current":"page",children:"Books"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(i.b,{to:"/blog",activeClassName:"activeRoute",className:"nav-link","aria-current":"page",children:"Blog"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(i.b,{to:"/gallary",activeClassName:"activeRoute",className:"nav-link","aria-current":"page",children:"Gallary"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(i.b,{to:"/contact",activeClassName:"activeRoute",className:"nav-link","aria-current":"page",children:"Contact Us"})})]})})]})})})})},j=t.p+"static/media/whatsapp.5b259539.webp",b=t.p+"static/media/fb.776fc3f2.webp",d=t.p+"static/media/insta.6b88b90f.webp",h=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{id:"home-content",className:"position-relative d-grid align-items-center vh-100",children:Object(c.jsxs)("ul",{className:"social-icons list-inline position-absolute align-middle",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://wa.me/919826156540?text=Hello",target:"_blank",rel:"noreferrer",className:"shadow-lg",children:Object(c.jsx)("img",{src:j,alt:"whatsapp",className:"img-fluid"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"http://www.facebook.com/nimish.agrawal.334",target:"_blank",rel:"noreferrer",className:"shadow-lg",children:Object(c.jsx)("img",{src:b,alt:"facebook",className:"img-fluid"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://api.instagram.com/v1/users/ajay.dewangan.33821",target:"_blank",rel:"noreferrer",className:"shadow-lg",children:Object(c.jsx)("img",{src:d,alt:"instagram",className:"img-fluid"})})})]})})})},g=t.p+"static/media/bio.a8e7f850.jpg",x=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{id:"bio-content",className:"position-relative vh-100",children:Object(c.jsx)("img",{src:g,alt:"Bio",title:"Bio",className:"img-fluid"})})})},u=t(11),p=t(16),O=t(29),v=t(28),f=t.n(v),N=function(){var e=Object(s.useState)({name:"",email:"",subject:"",message:""}),a=Object(O.a)(e,2),t=a[0],n=a[1],r=function(e){var a=e.target,t=a.name,c=a.value;n((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(u.a)({},t,c))}))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{id:"contact",className:"position-relative vh-100",children:Object(c.jsx)("div",{className:"container py-4 text-md-center text-lg-center",children:Object(c.jsxs)("div",{className:"contacts-main w-75 mx-auto px-md-5 px-lg-5",children:[Object(c.jsx)("div",{className:"title-section",children:Object(c.jsx)("h1",{className:"mb-md-5 mb-4 fw-bold text-sm-center",children:"Want to get in touch?"})}),Object(c.jsx)("span",{id:"alert-message"}),Object(c.jsxs)("form",{id:"contact-form",method:"POST",onSubmit:function(e){e.preventDefault(),f()({method:"post",url:"https://nishantnextworld.com/api/mail/send-mail.php",data:t}).then((function(e){console.log(e.data),"success"===e.data.status?(alert("Message Sent."),n({name:"",email:"",subject:"",message:""})):"fail"===e.data.status&&(alert("Message failed to send."),document.getElementById("alert-message").innerHTML=e.data.error)})),alert("Hi ".concat(t.name," you'r email is ").concat(t.email," and Message: ").concat(t.message))},children:[Object(c.jsx)("div",{className:"form-group my-3",children:Object(c.jsx)("input",{type:"text",name:"name",onChange:r,value:t.name,className:"form-control form-control-lg shadow-none border border-secondary p-3",placeholder:"Enter your name",required:""})}),Object(c.jsx)("div",{className:"form-group my-3",children:Object(c.jsx)("input",{type:"email",name:"email",onChange:r,value:t.email,className:"form-control form-control-lg shadow-none border border-secondary",placeholder:"Enter your mail"})}),Object(c.jsx)("div",{className:"form-group my-3",children:Object(c.jsx)("input",{type:"text",name:"subject",onChange:r,value:t.subject,className:"form-control form-control-lg shadow-none border border-secondary",placeholder:"Subject"})}),Object(c.jsx)("div",{className:"form-group my-3",children:Object(c.jsx)("textarea",{name:"message",onChange:r,value:t.message,className:"form-control form-control-lg shadow-none border border-secondary",placeholder:"Enter your message",rows:"5"})}),Object(c.jsx)("div",{className:"text-end",children:Object(c.jsx)("button",{className:"btn-primary btn px-5",children:"Send"})})]})]})})})})},w=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{id:"books-content",className:"position-relative d-grid align-items-center vh-100"})})};t(61);var y=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m,{}),Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",component:h}),Object(c.jsx)(o.a,{exact:!0,path:"/bio",component:x}),Object(c.jsx)(o.a,{exact:!0,path:"/books",component:w}),Object(c.jsx)(o.a,{exact:!0,path:"/contact",component:N}),Object(c.jsx)(o.a,{exact:!0,path:"/blog",component:w}),Object(c.jsx)(o.a,{exact:!0,path:"/gallary",component:w}),Object(c.jsx)(o.a,{component:h})]})]})};l.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(i.a,{children:Object(c.jsx)(y,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.2ba8425f.chunk.js.map
(this["webpackJsonpyuliiashkarban.github.io"]=this["webpackJsonpyuliiashkarban.github.io"]||[]).push([[0],{21:function(e,a,t){e.exports=t(32)},26:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(18),l=t.n(r),c=(t(26),t(1)),o=t(3),s=Object(o.a)();var m=function(){return i.a.createElement("div",{className:"dashboard"},i.a.createElement("div",{className:"photo"},i.a.createElement("img",{src:"./profile_photo.jpg",alt:"profile"})),i.a.createElement("div",{className:"short-info"},i.a.createElement("p",null,"Hi,")," My name is Yuliia and I am really happy you are here.",i.a.createElement("p",null,"I am a student with a creative soul, who has a huge dream to succeed in graphic design industry. And here you\u2019ll find everything you need to know about me and my steps I made to gain what I want. My portfolio, my thoughts and some inspiration you will find here."),"So, prepare your tea, sweets and be ready to learn something about me."),i.a.createElement("div",{className:"portfolio-best-description"},"This is short description about my portfolio"),i.a.createElement("div",{className:"portfolio-best"},"Some portfolio photoes goes here"))};var d=function(){return i.a.createElement("div",{className:"content-container"},i.a.createElement(m,null))};var p=function(){return i.a.createElement("div",{className:"content-container "},i.a.createElement("p",null,"About Page"))},u=t(6),g=t(10),f=t(8),h=t(7),E={categories:[{name:"Vector",items:[{id:"1",fileName:"Screenshot_2020-05-21_at_14.12.46.png",name:"Burger",description:"Illustrator"},{id:"2",fileName:"Screenshot_2020-05-21_at_14.13.28.png",name:"Deer",description:"Illustrator"},{id:"3",fileName:"Screenshot_2020-05-21_at_14.13.48.png",name:"Drinks",description:"Illustrator"},{id:"4",fileName:"Screenshot_2020-05-21_at_14.14.10.png",name:"Honey",description:"Illustrator"},{id:"5",fileName:"Screenshot_2020-05-21_at_14.14.34.png",name:"Flowers",description:"Illustrator"},{id:"6",fileName:"Screenshot_2020-05-21_at_14.14.51.png",name:"Watermelon",description:"Illustrator"}]},{name:"Procreate",items:[{id:"7",fileName:"Procreate_girl's_power.jpeg",name:"",description:""},{id:"8",fileName:"Procreate_leaves.jpg",name:"",description:""},{id:"10",fileName:"Procreate_little_monster.jpg",name:"",description:""}]},{name:"Post Cards",items:[{id:"11",fileName:"Hand_Drawing(card)_bear.jpeg",name:"",description:""},{id:"12",fileName:"Hand_Drawing(card)_girl.jpeg",name:"",description:""},{id:"13",fileName:"Hand_Drawing(card)_heart.jpeg",name:"",description:""},{id:"15",fileName:"Hand_Drawing(card)_pug.jpeg",name:"",description:""},{id:"16",fileName:"Hand_Drawing(card)_rex.jpeg",name:"",description:""},{id:"17",fileName:"Hand_Drawing(card)_taco.jpeg",name:"",description:""}]},{name:"Acrylic",items:[{id:"18",fileName:"Hand_Drawing(acrylic_paint)_crazy_guy.jpeg",name:"",description:""},{id:"19",fileName:"Hand_Drawing(acrylic_paint)_darth_vader.jpeg",name:"",description:""},{id:"20",fileName:"Hand_Drawing(acrylic_paint)_flower.jpeg",name:"",description:""},{id:"23",fileName:"Hand_Drawing(acrylic_paint)_giraffe.jpeg",name:"",description:""},{id:"24",fileName:"Hand_Drawing(acrylic_paint)_mountains.jpeg",name:"",description:""},{id:"25",fileName:"Hand_Drawing(acrylic_paint)_peonies.jpeg",name:"",description:""},{id:"26",fileName:"Hand_Drawing(acrylic_paint)_pulp_fiction.jpeg",name:"",description:""},{id:"27",fileName:"Hand_Drawing(acrylic_paint)_steam_pug.jpeg",name:"",description:""},{id:"28",fileName:"Hand_Drawing(acrylic_paint)_sunset.jpeg",name:"",description:""}]},{name:"Pastel & Pencils",items:[{id:"30",fileName:"Hand_Drawing(pastel)_composition.jpeg",name:"",description:""},{id:"31",fileName:"Hand_Drawing(pastel)_griffin.jpeg",name:"",description:""},{id:"32",fileName:"Hand_drawing(pencils)_squirrels.jpeg",name:"",description:""}]},{name:"Liner",items:[{id:"33",fileName:"Hand_Drawing(liner)_iris_1.jpeg",name:"",description:""},{id:"34",fileName:"Hand_Drawing(liner)_iris_2.jpeg",name:"",description:""},{id:"35",fileName:"Hand_Drawing(liner)_iris_3.jpeg",name:"",description:""}]}]},_=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).close=function(){document.body.classList.remove("no-scroll"),n.setState({selectedImageId:null})},n.handleOnTouchStart=function(e){e.preventDefault()},n.componentDidUpdate=function(e,a){a&&a.selectedImageId!==n.props.selectedImageId&&n.setState({selectedImageId:n.props.selectedImageId})},n.render=function(){if(null==n.state.selectedImageId)return null;var e=E.categories.map((function(e){return e.items})),a=[].concat.apply([],e).filter((function(e){return e.id===n.state.selectedImageId}))[0],t="/portfolio/".concat(a.fileName);return document.body.classList.add("no-scroll"),i.a.createElement("div",{className:"image-overflow",onClick:n.close,onTouchStart:n.handleOnTouchStart,style:{top:"".concat(window.pageYOffset,"px")}},i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:t,alt:""}),""!=a.name&&i.a.createElement("h2",null,a.name),""!=a.description&&i.a.createElement("p",null,a.description)))},n.state={selectedImageId:null},n}return t}(n.Component),v=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).render=function(){var e="/portfolio/thumbnails/".concat(n.state.fileName);return i.a.createElement("div",{className:"thumbnail",onClick:function(){return n.props.onImageSelected(n.state.id)}},i.a.createElement("img",{src:e,alt:""}))},n.state={fileName:e.item.fileName,id:e.item.id},n}return t}(n.Component),N=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).handleClick=function(){n.setState({collapsed:!n.state.collapsed})},n.render=function(e){return i.a.createElement("div",{className:"portfolioCategory"},i.a.createElement("button",{type:"button",className:"collapsible",onClick:n.handleClick},n.props.category.name),i.a.createElement("div",{className:"collapse ".concat(n.state.collapsed?"":"in")},i.a.createElement("div",{className:"portfolioImages"},n.props.category.items.map((function(e,a){return i.a.createElement(v,{key:a,item:e,onImageSelected:this.props.onImageSelected})}),Object(g.a)(n)))))},n.state={collapsed:!1},n}return t}(n.Component),b=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).handleImageSelected=function(e){if(null==e||void 0==e)throw"Id can not be null or undefined.";n.setState({selectedImageId:e})},n.render=function(){return i.a.createElement("div",{className:"content-container"},E.categories.map((function(e,a){return i.a.createElement(N,{key:a,name:e.name,category:e,onImageSelected:this.handleImageSelected.bind(this)})}),Object(g.a)(n)),i.a.createElement(_,{selectedImageId:n.state.selectedImageId}))},n.state={},n}return t}(n.Component),y=t(20),w=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=Object(y.a)({},n.state);a[e.target.id]=e.target.value,n.setState(a),"message"===e.target.id&&n.adjustTextAreaHeight(e)},n.adjustTextAreaHeight=function(e){e.target.style.height="1px",e.target.style.height=e.target.scrollHeight-20+"px"},n.handleSubmit=function(e){e.preventDefault(),console.warn("TODO: Validate inputs"),n.sendEmail(e.target)},n.sendEmail=function(e){var a=new FormData(e),t=new XMLHttpRequest;t.open(e.method,e.action),t.setRequestHeader("Accept","application/json"),t.onreadystatechange=function(){t.readyState===XMLHttpRequest.DONE&&(200===t.status?(n.setState({name:"",email:"",message:""}),console.warn("TODO: Show info: Email succesfully sent.")):(console.error("An error occured while sending email: "+t.responseText),console.warn("TODO: Show error: Error while sending email.")))},t.send(a)},n.onWrapperClicked=function(){document.getElementById("message").focus()},n.render=function(){return i.a.createElement("form",{className:"contact-form",onSubmit:n.handleSubmit,action:"https://formspree.io/mlepjjkd",method:"POST"},i.a.createElement("input",{type:"text",id:"name",name:"name",placeholder:"Name",onChange:n.handleChange,value:n.state.name}),i.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Email",onChange:n.handleChange,value:n.state.email}),i.a.createElement("div",{className:"textarea-wrapper",onClick:n.onWrapperClicked},i.a.createElement("textarea",{id:"message",name:"message",placeholder:"Message",onChange:n.handleChange,value:n.state.message})),i.a.createElement("input",{type:"submit",value:"Send",className:"button"}))},n.state={name:"",email:"",message:""},n}return t}(n.Component);var j=function(){return i.a.createElement("div",{className:"content-container contact-page"},i.a.createElement("div",{className:"contact-me-header"},i.a.createElement("p",null,"Contact me")),i.a.createElement(w,null),i.a.createElement("div",{className:"contact-me-links"},i.a.createElement("div",{className:"link"},i.a.createElement("img",{src:"icons/instagram.svg",alt:"instagram-icon",className:"icon"}),i.a.createElement("a",{href:"https://www.instagram.com/_jujulia__"},"Instagram")),i.a.createElement("div",{className:"link"},i.a.createElement("img",{src:"icons/facebook.svg",alt:"facebook-icon",className:"icon"}),i.a.createElement("a",{href:"https://www.facebook.com/yuliia.shkarban"},"Facebook")),i.a.createElement("div",{className:"link"},i.a.createElement("img",{src:"icons/linkedin.svg",alt:"linkedin-icon",className:"icon"}),i.a.createElement("a",{href:"https://www.linkedin.com/in/yuliia-shkarban-25857018a/"},"LinkedIn")),i.a.createElement("div",{className:"link"},i.a.createElement("img",{src:"icons/phone.svg",alt:"phone-icon",className:"icon"}),i.a.createElement("a",{href:"tel:+48578003732"},"+48 578 003 732")),i.a.createElement("div",{className:"link"},i.a.createElement("img",{src:"icons/email.svg",alt:"email-icon",className:"icon"}),i.a.createElement("a",{href:"mailto:shkarban.yuliia@gmail.com"},"shkarban.yuliia@gmail.com"),i.a.createElement("p",null))))},I=t(11);var k=function(){return i.a.createElement("div",{className:"menubar"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(I.a,{to:"/"},"home")),i.a.createElement("li",null,"\u2022"),i.a.createElement("li",null,i.a.createElement(I.a,{to:"/about"},"about")),i.a.createElement("li",null,"\u2022"),i.a.createElement("li",null,i.a.createElement(I.a,{to:"/portfolio"},"portfolio")),i.a.createElement("li",null,"\u2022"),i.a.createElement("li",null,i.a.createElement(I.a,{to:"/contact"},"contact"))))};var S=function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," Yuliia Shkarban. All rights reserved."),i.a.createElement("p",null,"Made by ",i.a.createElement("a",{href:"https://github.com/Kurdiumov"},"Rostyslav Kurdiumov.")))},D=function(){return i.a.createElement(c.b,{history:s},i.a.createElement("div",{className:"app"},i.a.createElement(k,null),i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/",component:d,exact:!0}),i.a.createElement(c.a,{path:"/home",component:d,exact:!0}),i.a.createElement(c.a,{path:"/about",component:p,exact:!0}),i.a.createElement(c.a,{path:"/portfolio",component:b,exact:!0}),i.a.createElement(c.a,{path:"/contact",component:j,exact:!0})),i.a.createElement(S,null)))};l.a.render(i.a.createElement(D,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ae7c8941.chunk.js.map
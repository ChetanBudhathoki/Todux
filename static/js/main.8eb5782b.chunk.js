(this.webpackJsonptodux=this.webpackJsonptodux||[]).push([[0],{21:function(n,e,t){},30:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var i,o,r,d=t(0),c=t.n(d),a=t(7),l=t.n(a),s=(t(21),t(3)),u=t(5),b=t(2),h=t(13),p=t(1),x=u.a.div(i||(i=Object(s.a)(["\n  /* border: 2px solid red; */\n  height: 20vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n\n  .display {\n    /* border: 2px solid green; */\n    /* height:100%; */\n    width:100%;\n    display:flex;\n    /* flex-direction:column; */\n    align-content:center;\n    justify-content:center;\n  }\n  input{\n    border: 2px solid grey;\n    height:41px;\n    width:38%;\n    border-radius:18px;\n    text-align:center;\n  }\n  #submitt{\n    /* border:2px solid red; */\n    width:11%;\n    padding:0;\n    margin:0;\n    vertical-align:middle;\n  }\n  button{\n    height:37px;\n    width:120px;\n    border:none;\n    border-radius:25px;\n    background-color:grey;\n    color:white;\n    margin:5px;\n  }\n  button:hover{\n    background-color:whitesmoke;\n    transition-duration:0.2s;\n    color:black;\n    cursor: pointer;\n    border:1px solid grey;\n  }\n  textarea:focus, input:focus{\n    outline: none;\n}\n\n@media only screen and (max-width:667px){\n  input{\n    width:70%;\n    border-radius:0px;\n  }\n  #submitt{\n    width:28%;\n    margin-left:1em;\n  }\n}\n"]))),g=function(){var n=Object(b.c)((function(n){return n.stateview})),e="",t=Object(b.b)();return Object(p.jsxs)(x,{children:[Object(p.jsxs)("div",{className:"display",children:[Object(p.jsx)("input",{onChange:function(n){n.preventDefault(),e=n.target.value,console.log(e)},type:"text"}),"home"===n?Object(p.jsx)("button",{id:"submitt",onClick:function(){t({type:"add",payload:{title:e,isdone:!1,id:Object(h.uuid)()}})},children:"Submitt"}):""]}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{onClick:"all"===n?function(n){n.preventDefault(),t({type:"home"})}:function(n){n.preventDefault(),t({type:"all"})},children:"all"===n?"Home":"All"}),Object(p.jsx)("button",{onClick:function(n){n.preventDefault(),t({type:"remaining"})},children:"Remaining"})]})]})},j=u.a.div(o||(o=Object(s.a)(["\n  /* margin-top:50px; */\n  /* border: 2px solid orange; */\n  text-align: center;\n  background-color:wheat;\n  width:65%;\n  /* border-radius:18px; */\n  margin:0 auto;\n  margin-bottom:10px;\n  /* justify-content:center; */\n\n  .item {\n    display: inline-block;\n    /* border: 1px solid whitesmoke; */\n    border-radius:14px;\n    width: 55%;\n    height: 40px;\n    color:black;\n    /* text-decoration: line-through; */\n  }\n  button {\n    height: 35px;\n    width: 13%;\n    /* border-radius:25px; */\n    margin-left: 10px;\n    vertical-align:middle;\n    margin-top:7px;\n    border:none;\n    background-color:rgba(0,128,128,0.7);\n    opacity:0.7;\n    color:black;\n  }\n  button:hover{\n    cursor: pointer;\n    /* border:1px solid blue; */\n    background-color:ghostwhite;\n    transition-duration:0.3s;\n  }\n  #delete{\n    color:black;\n    background-color:#ffb686;\n  }\n\n  @media only screen and (max-width:667px){\n    width:100%;\n     .item{\n       width:60%;\n       /* border:solid; */\n       text-overflow:ellipsis;\n     }\n     \n     button{\n       /* width:20%; */\n     }\n  }\n"]))),m=function(n){var e=n.title,t=n.id,i=n.isdone,o=Object(b.b)();return Object(p.jsxs)(j,{children:[i?Object(p.jsx)("div",{style:{textDecoration:"line-through"},className:"item",children:e}):Object(p.jsx)("div",{className:"item",children:e}),Object(p.jsx)("button",{id:"delete",onClick:function(n){var e;n.preventDefault(),o((e={id:t},console.log(e),{type:"delete",payload:e}))},children:"Delete"}),Object(p.jsx)("button",{onClick:function(n){n.preventDefault(),o({type:"isdone",payload:{id:t}})},children:"Done"})]})},f=u.a.div(r||(r=Object(s.a)(["\n  /* margin-top:50px; */\n  \n  text-align: center;\n  background-color:wheat;\n  width:65%;\n  margin:0 auto;\n  margin-bottom:2px;\n\n  .item {\n    display: inline-block;\n    color:black;\n    /* width: 500px; */\n    height: 40px;\n    /* border: 1px solid whitesmoke; */\n    border-radius:14px;\n    /* text-decoration: line-through; */\n  }\n  button {\n    height: 35px;\n    width: 70px;\n    margin-left: 10px;\n  }\n\n  @media only screen and (max-width:767px){\n    width:100%;\n  }\n"]))),v=function(n){var e=n.title;n.id,n.isdone;return Object(p.jsx)(f,{children:Object(p.jsx)("div",{className:"item",children:e})})},O=function(){var n=Object(b.c)((function(n){return n.todos})),e=Object(b.c)((function(n){return n.stateview}));return console.log(typeof e),console.log(n),Object(p.jsx)("div",{className:"todoitemslist",children:"home"===e?n.map((function(e){return Object(p.jsx)(m,{todos:n,title:e.title,id:e.id,isdone:e.isdone},e.id)})):"remaining"===e?n.map((function(e){return e.isdone?"":Object(p.jsx)(v,{todos:n,title:e.title,id:e.id,isdone:e.isdone},e.id)})):n.map((function(e){return Object(p.jsx)(v,{todos:n,title:e.title,id:e.id,isdone:e.isdone},e.id)}))})};t(30);var w=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(g,{}),Object(p.jsx)(O,{})]})},y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,r=e.getLCP,d=e.getTTFB;t(n),i(n),o(n),r(n),d(n)}))},k=t(8),D=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"home",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"all":return"all";case"remaining":return"remaining";case"home":return"home";default:return n}},_=t(9),N=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"add":var t=[e.payload].concat(Object(_.a)(n));return t;case"delete":var i=Object(_.a)(n),o=i.filter((function(n){return n.id!==e.payload.id}));return o;case"isdone":var r=Object(_.a)(n);return r.forEach((function(n){if(n.id===e.payload.id){var t=n.isdone;n.isdone=!t}})),r;default:return n}},E=Object(k.a)({stateview:D,todos:N}),C=Object(k.b)(E,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(b.a,{store:C,children:Object(p.jsx)(w,{})})}),document.getElementById("root")),y()}},[[32,1,2]]]);
//# sourceMappingURL=main.8eb5782b.chunk.js.map
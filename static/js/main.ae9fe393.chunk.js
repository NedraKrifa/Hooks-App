(this["webpackJsonpHooks-App"]=this["webpackJsonpHooks-App"]||[]).push([[0],{17:function(e,t,n){e.exports=n(29)},22:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),c=n.n(l),o=(n(22),n(6)),m=n(1),i=r.a.createContext(),s=function(){return r.a.createElement(i.Consumer,null,(function(e){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home_title"},e.userName," Blog"),r.a.createElement("div",{className:"home_description"},"I am an embedded telecommunication engineer student and a Full-stack JavaScript intern. I am interested in web technologies especially react and react native with a pang of great hunger for knowledge, with a dream to control the force and becoming a react Jedi."))}))},u=function(){return r.a.createElement(i.Consumer,null,(function(e){return r.a.createElement("div",{className:"compte"},r.a.createElement("div",null,"Change Your Username"),r.a.createElement("input",{type:"text",placeholder:"username...",value:e.userName,onChange:function(t){return e.changeUserNameHandle(t)}}))}))},d=function(){return r.a.createElement(i.Consumer,null,(function(e){return r.a.createElement("div",{className:"theme_toggler",onClick:function(){return e.setThemeMode()}},r.a.createElement("span",null,e.theme.toUpperCase()))}))},h=function(){return r.a.createElement("div",{className:"navbar_style"},r.a.createElement(o.b,{className:"link_style",to:"/"},"ABOUT"),r.a.createElement(o.b,{className:"link_style",to:"/"},"BLOG"),r.a.createElement(o.b,{className:"link_style",to:"/"},"VIDEOS"),r.a.createElement(o.b,{className:"link_style",to:"/compte"},"COMPTE"),r.a.createElement(o.b,{className:"link_style",to:"/"},"CONTACT"),r.a.createElement(d,null))},E=n(12),f=function(e){var t=Object(a.useState)("User"),n=Object(E.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)("light"),m=Object(E.a)(o,2),s=m[0],u=m[1];Object(a.useEffect)((function(){document.title="Hello,".concat(l)}),[l]);return r.a.createElement(i.Provider,{value:{userName:l,changeUserNameHandle:function(e){c(e.target.value)},theme:s,setThemeMode:function(){u("light"===s?"dark":"light")}}},e.children)};n(28);var p=function(){return r.a.createElement(o.a,null,r.a.createElement(f,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(s,null)}}),r.a.createElement(m.a,{exact:!0,path:"/compte",render:function(e){return r.a.createElement(u,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.ae9fe393.chunk.js.map
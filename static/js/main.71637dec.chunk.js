(this["webpackJsonplogin-system"]=this["webpackJsonplogin-system"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),l=n.n(i),c=n(8),o=n.n(c),s=(n(30),n(12)),r=n(13),d=n(15),u=n(14),b=n(47),j=n(48),m=n(9),h=(n(31),n(5)),p=function(e){e.backgroundColor;var t=e.name,n=e.title,i=(e.size,e.id),l=e.maxLength,c=e.minLength,o=e.placeholder,s=e.type,r=e.onChange,d=e.value,u=e.clearInput,b=(Object(m.a)(e,["backgroundColor","name","title","size","id","maxLength","minLength","placeholder","type","onChange","value","clearInput"]),h.isMobile?"mobiletextbox":"textbox");return Object(a.jsxs)("div",{className:"".concat(b?"mobiletextbox":"textbox"),children:[Object(a.jsx)("label",{htmlFor:i,children:n}),Object(a.jsx)("input",{name:t,onChange:r,placeholder:o,id:i,maxLength:l,minLength:c,type:s,value:u?"":d})]})};p.defaultProps={backgroundColor:null,size:"small",maxLength:30,minLength:0,placeholder:"",type:"text"};var x=p,O=n(21),g=(n(33),function(e){var t=e.to,n=e.className,i=e.buttonText,l=Object(m.a)(e,["to","className","buttonText"]);return void 0===t&&(t="/emptyLink"),Object(a.jsxs)("button",Object(O.a)(Object(O.a)({"data-testid":"ucpButton",type:"button",className:n},l),{},{children:[i,"\u200b"]}))});g.defaultProps={size:"UCPDefault",onClick:void 0};var f=g,v=(n(34),{username:"",password:"",usernameError:"",passwordError:""}),C=(l.a.Component,n(24)),y=(n(35),h.isMobile?"MobileDropdown":"Dropdown"),N=function(e){var t=e.options,n=e.placeholder;e.styles,Object(m.a)(e,["options","placeholder","styles"]);return Object(a.jsx)(C.a,{className:y,options:t,placeholder:n})},L=N;N.defaultProps={options:[{value:"computing",label:"BSc (Hons) Computing and Information Systems"},{value:"criminoloy",label:"BA (Hons) Crimonology"},{value:"digitalArts",label:"FDA Digital Arts"}]};n(39);var k=n(11),T=n(51),A=n(49);n(40);var S=function(){var e=Object(i.useState)(!0),t=Object(k.a)(e,2),n=t[0],l=t[1];return n?Object(a.jsx)(T.a,{className:"Alert",onClose:function(){return l(!1)},dismissible:!0,children:Object(a.jsx)(T.a.Heading,{children:"Please request grades for the folowing GCSE / Level qualifiactions:"})}):n?Object(a.jsx)(A.a,{onClick:function(){return l(!0)},children:"Show Alert"}):Object(a.jsx)("span",{})},B=function(e){var t=[{label:"A*",id:"a*",value:"A*"},{label:"A",id:"a",value:"A"},{label:"B",id:"b",value:"B"},{label:"C",id:"c",value:"C"},{label:"D",id:"d",value:"D"},{label:"E",id:"e",value:"E"},{label:"F",id:"f",value:"F"},{label:"G",id:"g",value:"G"},{label:"N/A",id:"na",value:"N/A"}];var n=h.isMobile?"MobileTextArea":"DesktopTextArea",i=h.isMobile?"mobile-form-right":"form-right",l=h.isMobile?"mobile-form-container":"form-container";return Object(a.jsxs)("div",{className:l,children:[Object(a.jsxs)("div",{className:"form-background",children:[Object(a.jsx)("h3",{className:"form-title",children:"Applicant Qualifications & Experience"}),Object(a.jsx)(S,{}),Object(a.jsxs)("div",{class:i,children:[Object(a.jsx)("p",{children:"GCSE English Language"}),Object(a.jsx)(L,{placeholder:"Select Grade",options:t}),Object(a.jsx)("p",{children:"GCSE English Literature"}),Object(a.jsx)(L,{placeholder:"Select Grade",options:t}),Object(a.jsx)("p",{children:"GCSE English Mathematics"}),Object(a.jsx)(L,{placeholder:"Select Grade",options:t}),Object(a.jsx)("p",{children:"GCSE Science / Additional Science"}),Object(a.jsx)(L,{placeholder:"Select Grade",options:t}),Object(a.jsx)("p",{children:"L2 Qualifications"}),Object(a.jsx)("textarea",{className:n,name:"l2qualificaitons",placeholder:"Enter level 2 qualifications",rows:6,cols:45})]})]}),Object(a.jsx)("div",{children:"staff"===e.userType?Object(a.jsxs)(b.a,{id:"buttonRow",children:[Object(a.jsx)(j.a,{className:"centered-buttons",children:Object(a.jsx)(f,{primary:"True",className:"mediumbutton",buttonText:"Go Back"})}),Object(a.jsx)(j.a,{className:"centered-buttons",children:Object(a.jsx)("div",{id:"confirmButton",hidden:!0,children:Object(a.jsx)(f,{primary:"True",className:"mediumbutton",buttonText:"Confirm and Go"})})})]}):Object(a.jsxs)(b.a,{id:"buttonRow",children:[Object(a.jsx)(j.a,{className:"centered-buttons",children:Object(a.jsx)("div",{id:"confirmButton",hidden:!0,children:Object(a.jsx)(f,{primary:"True",className:"mediumbutton",buttonText:"Apply Now"})})}),Object(a.jsx)(j.a,{className:"centered-buttons",children:Object(a.jsx)("div",{id:"confirmButton1",hidden:!0,children:Object(a.jsx)(f,{primary:"True",className:"mediumbutton",buttonText:"Request Call Back"})})}),Object(a.jsx)(j.a,{className:"centered-buttons",children:Object(a.jsx)("div",{id:"confirmButton2",hidden:!0,children:Object(a.jsx)(f,{primary:"True",className:"mediumbutton",buttonText:"Request Video Call Back"})})})]})})]})},E=(n(41),n(42),function(e){var t=e.name,n=e.options,i=e.heading,l=e.subtitle,c=e.oc,o=e.value,s=e.onChange,r=(e.checked,Object(m.a)(e,["name","options","heading","subtitle","oc","value","onChange","checked"]),n.map((function(e){return Object(a.jsxs)("div",{className:"radio-group",children:[Object(a.jsx)("input",{name:t,type:"radio",id:e.id,checked:o===e.value,value:e.value,onChange:s,onClick:c?function(t){return c(e.value)}:""}),Object(a.jsx)("label",{htmlFor:e.id,children:e.label})]})})));return Object(a.jsxs)("div",{className:"radio-buttons",children:[Object(a.jsx)("h4",{children:i}),Object(a.jsx)("p",{children:l}),r]})});E.defaultProps={heading:null,subtitle:null,oc:null};n(43);var w=n(6),G=n.n(w);x.propTypes={backgroundColor:G.a.string,title:G.a.string,size:G.a.oneOf(["small","medium","large"]),maxLength:G.a.number,minLength:G.a.number,placeholder:G.a.string,type:G.a.oneOf(["text","password","email","tel","number","date"])},x.defaultProps={backgroundColor:null,size:"small",maxLength:30,minLength:0,placeholder:"",type:"text"};var P=n.p+"static/media/UCPLogo.02274764.png",M=(n(44),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.call(this)}return Object(r.a)(n,[{key:"render",value:function(){var e=h.isMobile?"MobileUCPLogoBlue":"UCPLogoBlue";return Object(a.jsx)("header",{children:Object(a.jsx)("img",{"data-testid":"ucpLogoHeader",src:P,className:e,alt:"UCP official logo"})})}}]),n}(l.a.Component)),D=n(50);var F=function(){return Object(a.jsxs)(D.a,{children:[Object(a.jsx)(M,{}),Object(a.jsx)(B,{})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),l(e),c(e)}))};o.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),q()}},[[45,1,2]]]);
//# sourceMappingURL=main.71637dec.chunk.js.map
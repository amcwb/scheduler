(this.webpackJsonpscheduler=this.webpackJsonpscheduler||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),n=a(8),l=a.n(n),s=(a(13),a(6),a(2)),d=a(4);function r(e,t){var a=i.a.useState((function(){var a=window.localStorage.getItem(t);return null!==a?JSON.parse(a):e})),c=Object(d.a)(a,2),n=c[0],l=c[1];return i.a.useEffect((function(){window.localStorage.setItem(t,JSON.stringify(n))}),[t,n]),[n,l]}var o=a(7),j=a.n(o),u=a(3),b=a.n(u),O=a(0);function m(e){var t=r(e,e.id),a=Object(d.a)(t,2),i=a[0],n=a[1],l=Object(c.useState)(!1),o=Object(d.a)(l,2),u=o[0],m=o[1];return Object(O.jsxs)("div",{className:"Schedule",children:[Object(O.jsxs)("div",{className:"Info",onClick:function(){m(!u)},children:[Object(O.jsxs)("div",{className:"MainBar",children:[Object(O.jsx)("div",{className:"Title",children:i.title}),Object(O.jsx)("div",{className:"Countdown",children:Object(O.jsx)(j.a,{date:i.date,fromNow:!0,withTitle:!0})})]}),Object(O.jsxs)("div",{className:"InfoBar",children:[Object(O.jsx)("div",{className:"Date",children:Object(O.jsx)(j.a,{date:i.date,local:!0})}),Object(O.jsx)("div",{className:"Description",children:i.description})]})]}),u?Object(O.jsxs)("div",{className:"EditSection",children:[Object(O.jsxs)("div",{className:"Field",children:[Object(O.jsx)("label",{htmlFor:"title",className:"FieldTitle",children:"Title"}),Object(O.jsx)("input",{type:"text",className:"FieldInput",defaultValue:i.title,onChange:function(e){n(Object(s.a)(Object(s.a)({},i),{},{title:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"Field",children:[Object(O.jsx)("label",{htmlFor:"description",className:"FieldTitle",children:"Description"}),Object(O.jsx)("textarea",{rows:10,className:"FieldInput",defaultValue:i.description,onChange:function(e){n(Object(s.a)(Object(s.a)({},i),{},{description:e.target.value}))}})]}),Object(O.jsxs)("div",{className:"Field",children:[Object(O.jsx)("label",{htmlFor:"date",className:"FieldTitle",children:"Date and time"}),Object(O.jsx)("input",{type:"date",className:"FieldInput",defaultValue:b()(i.date).format("YYYY-MM-DD"),onChange:function(e){console.log(i.date,e.target.value),e.target.value&&n(Object(s.a)(Object(s.a)({},i),{},{date:b()(e.target.value+" "+b()(i.date).format("HH:MM:SS")).toISOString()}))}}),Object(O.jsx)("input",{type:"time",className:"FieldInput",defaultValue:b()(i.date).format("HH:MM:SS"),onChange:function(e){console.log(i.date,e.target.value),e.target.value&&n(Object(s.a)(Object(s.a)({},i),{},{date:b()(b()(i.date).format("YYYY/MM/DD")+" "+e.target.value).toISOString()}))}})]}),Object(O.jsxs)("div",{className:"Field",children:[Object(O.jsx)("label",{className:"FieldTitle",children:"Danger zone"}),Object(O.jsx)("button",{className:"FieldInput FieldInput--red",onClick:function(){e.onDelete&&e.onDelete(i.id)},children:"Delete"})]})]}):null]})}var h=a(18);function v(){var e=r({orderBy:"endDate",ids:["a"]},"index"),t=Object(d.a)(e,2),a=t[0],i=t[1],n=function(e){i({orderBy:a.orderBy,ids:a.ids.filter((function(t){return t!==e}))}),localStorage.removeItem(e)},l=a.ids.map((function(e){var t=JSON.parse(localStorage.getItem(e));return Object(c.createElement)(m,Object(s.a)(Object(s.a)({},t),{},{onDelete:n,key:t.id}))}));return console.log(l),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:l}),Object(O.jsx)("div",{className:"AddButton",onClick:function(){var e=Object(h.a)();localStorage.setItem(e,JSON.stringify({id:e,title:"My new event",description:"Put something here, or keep it empty",date:b()(Date.now()).toISOString()})),i({orderBy:a.orderBy,ids:a.ids.concat([e])})},children:"+"})]})}var x=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("header",{children:Object(O.jsxs)("div",{className:"Header",children:[Object(O.jsx)("div",{className:"Main",children:"Scheduler"}),Object(O.jsx)("div",{className:"Description",children:"Define a list of times to look forward to!"})]})}),Object(O.jsx)("div",{children:Object(O.jsx)(v,{})})]})};l.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root"))},6:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.e4246078.chunk.js.map
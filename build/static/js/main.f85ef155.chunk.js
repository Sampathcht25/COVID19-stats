(this["webpackJsonpcovid19-stats"]=this["webpackJsonpcovid19-stats"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(31),s=a.n(r),o=(a(44),a(45),a(7)),i=a.n(o),l=a(11),j=a(15),d=a(20),u=a.n(d),h=a(85),b=a(94),x=a(86),f=a(87),O=a(16),m=a.n(O),p="https://covid19.mathdro.id/api",v=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p,void 0!==t&&(a="".concat(p,"/countries/").concat(t)),e.next=5,m.a.get(a).then((function(e){n=e.data}),(function(e){console.log(e)}));case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://disease.sh/v3/covid-19/countries");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),y=(a.p,a(2)),N=function(){var e,t,a,c=Object(n.useState)(null),r=Object(j.a)(c,2),s=r[0],o=r[1],d=Object(n.useState)(null),O=Object(j.a)(d,2),m=(O[0],O[1]);return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(void 0);case 2:return t=e.sent,e.next=5,g();case 5:a=e.sent,m(a),o(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o,m]),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(h.a,{container:!0,spacing:3,justify:"center",children:[Object(y.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:"infect",children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(f.a,{color:"textSecondary",gutterBottom:!0,children:"Covid cases"}),Object(y.jsx)(f.a,{variant:"h5",children:Object(y.jsx)(u.a,{start:0,end:s&&(null===(e=s.confirmed)||void 0===e?void 0:e.value),duration:2.8,separator:","})}),Object(y.jsx)(f.a,{color:"textSecondary",children:new Date(s&&s.lastUpdate).toDateString()}),Object(y.jsx)(f.a,{variant:"body2",children:"Number of active cases"})]})}),Object(y.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:"recover-case",children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(f.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(y.jsx)(f.a,{variant:"h5",children:Object(y.jsx)(u.a,{start:0,end:s&&(null===(t=s.recovered)||void 0===t?void 0:t.value),duration:2.8,separator:","})}),Object(y.jsx)(f.a,{color:"textSecondary",children:new Date(s&&s.lastUpdate).toDateString()}),Object(y.jsx)(f.a,{variant:"body2",children:"Number of recovery cases"})]})}),Object(y.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:"deaths",children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(f.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(y.jsx)(f.a,{variant:"h5",children:Object(y.jsx)(u.a,{start:0,end:s&&(null===(a=s.deaths)||void 0===a?void 0:a.value),duration:2.8,separator:","})}),Object(y.jsx)(f.a,{color:"textSecondary",children:new Date(s&&s.lastUpdate).toDateString()}),Object(y.jsx)(f.a,{variant:"body2",children:"Number of death cases"})]})})]})})},S=a(88),w=a(89),D=a(90),F=a(91),I=a(92),C=a(93),T=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(y.jsx)(h.a,{container:!0,spacing:3,justify:"center",children:Object(y.jsx)(S.a,{className:"table-container",children:Object(y.jsxs)(w.a,{children:[Object(y.jsx)(D.a,{children:Object(y.jsx)(F.a,{children:["S.No","Country","Total Cases","Today Cases","Today Deaths","Total Deaths","Total Recovered","Active Cases","Population"].map((function(e){return Object(y.jsx)(I.a,{children:e})}))})}),Object(y.jsx)(C.a,{children:a&&a.sort((function(e,t){return t.cases-e.cases})).map((function(e,t){return Object(y.jsxs)(F.a,{hover:!0,children:[Object(y.jsx)(I.a,{align:"left",children:t+1}),Object(y.jsx)(I.a,{align:"left",children:e.country}),Object(y.jsx)(I.a,{align:"left",children:Intl.NumberFormat().format(e.cases)}),Object(y.jsx)(I.a,{align:"left",children:Intl.NumberFormat().format(e.todayCases)}),Object(y.jsx)(I.a,{align:"left",children:Intl.NumberFormat().format(e.todayDeaths)}),Object(y.jsx)(I.a,{align:"left",children:Intl.NumberFormat().format(e.deaths)}),Object(y.jsx)(I.a,{align:"left",children:Intl.NumberFormat().format(e.recovered)}),Object(y.jsx)(I.a,{align:"left",children:Intl.NumberFormat().format(e.active)}),Object(y.jsx)(I.a,{align:"left",children:Intl.NumberFormat().format(e.population)})]})}))})]})})})};var k=function(){return Object(y.jsxs)("div",{className:"",children:[Object(y.jsx)("div",{className:"App",children:Object(y.jsx)("header",{className:"App-header",children:Object(y.jsx)("h1",{className:"header",children:"COVID-19 INFO"})})}),Object(y.jsx)(N,{}),Object(y.jsx)(T,{}),Object(y.jsx)("footer",{children:"| @sam_cht25 | Email: Sampath.cht25@gmail.com |"})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,95)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(k,{})}),document.getElementById("root")),B()}},[[72,1,2]]]);
//# sourceMappingURL=main.f85ef155.chunk.js.map
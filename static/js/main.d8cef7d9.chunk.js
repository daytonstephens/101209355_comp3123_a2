(this.webpackJsonp101209355_comp3123_a2=this.webpackJsonp101209355_comp3123_a2||[]).push([[0],{20:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t(2),r=t.n(c),i=t(13),s=t.n(i),o=(t(20),t(4)),d=t(14),h=t.n(d),u="8d4473d8a435911b0fb19182f26ff2f8",p="https://api.openweathermap.org/data/2.5/";var m=function(){var e,a=Object(c.useState)(""),t=Object(o.a)(a,2),r=t[0],i=t[1],s=Object(c.useState)({}),d=Object(o.a)(s,2),m=d[0],l=d[1];return Object(n.jsx)("div",{className:"undefined"!=typeof m.main?"Rain"===m.weather[0].main?"app rain":"Drizzle"===m.weather[0].main?"app drizzle":"Thunder"===m.weather[0].main?"app thunder":"Clear"===m.weather[0].main?"app clear":"Snow"===m.weather[0].main?"app snow":"Clouds"===m.weather[0].main?"app clouds":"app":"app",children:Object(n.jsxs)("main",{children:[Object(n.jsx)("div",{className:"search-box",children:Object(n.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return i(e.target.value)},value:r,onKeyPress:function(e){"Enter"===e.key&&h.a.get("".concat(p,"weather?q=").concat(r,"&units=metric&APPID=").concat(u)).then((function(e){console.log(e.data),l(e.data),i("")}))}})}),"undefined"!=typeof m.main?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"location-box",children:[Object(n.jsxs)("div",{className:"location",children:[m.name,", ",m.sys.country]}),Object(n.jsx)("div",{className:"date",children:function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date)})]}),Object(n.jsxs)("div",{className:"weather-box",children:[Object(n.jsxs)("div",{className:"temp",children:[Object(n.jsx)("img",{id:"weatherIcon",src:"http://openweathermap.org/img/wn/".concat(m.weather[0].icon,"@2x.png"),alt:"Current Weather Icon"}),Math.round(m.main.temp),"\xb0C"]}),Object(n.jsx)("div",{className:"weather",children:(e=m.weather[0].description,e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})))}),Object(n.jsxs)("div",{className:"minAndMax",children:["Min: ",m.main.temp_min,"\xb0C\xa0\xa0\xa0 Max: ",m.main.temp_max,"\xb0C\xa0\xa0\xa0 Humidty: ",m.main.humidity,"%\xa0\xa0\xa0 Wind: ",m.wind.speed," km/h\xa0\xa0\xa0"]})]})]}):""]})})},l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,i=a.getTTFB;t(e),n(e),c(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),l()}},[[38,1,2]]]);
//# sourceMappingURL=main.d8cef7d9.chunk.js.map
(()=>{"use strict";function e(){const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","hero-text"),t.innerHTML="From family, to families",e.appendChild(t)}function t(){document.querySelector("#hero-text").remove()}function n(){document.querySelector("#menu").remove()}function c(){document.querySelector("#contact").remove()}document.body.onload=()=>{!function(){const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("h1"),c=document.createElement("nav"),o=document.createElement("ul"),r=document.createElement("li"),d=document.createElement("li"),u=document.createElement("li"),i=document.createElement("div");n.innerHTML="Mario Brothers",r.innerHTML="Home",r.setAttribute("class","home"),d.innerHTML="Menu",d.setAttribute("class","menu"),u.innerHTML="Contact",u.setAttribute("class","contact"),i.setAttribute("id","header"),t.appendChild(n),i.appendChild(t),t.insertAdjacentElement("afterend",c),c.appendChild(o),o.appendChild(r),o.appendChild(d),o.appendChild(u),e.appendChild(i)}(),e()},window.onclick=function(o){o.target.classList.contains("home")?(document.querySelector("#menu")?n():document.querySelector("#contact")&&c(),null==document.querySelector("#hero-text")&&e()):o.target.classList.contains("menu")?(document.querySelector("#hero-text")?t():document.querySelector("#contact")&&c(),null==document.querySelector("#menu")&&function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),c=document.createElement("div");t.setAttribute("id","menu"),n.setAttribute("class","image"),c.setAttribute("class","text"),c.innerHTML="Mario's Pizza",t.appendChild(n),t.appendChild(c),e.appendChild(t)}()):o.target.classList.contains("contact")&&(document.querySelector("#hero-text")?t():document.querySelector("#menu")&&n(),null==document.querySelector("#contact")&&function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div");t.setAttribute("id","contact"),n.setAttribute("class","icon-one"),c.setAttribute("class","icon-two"),o.innerHTML="123-456-789",r.innerHTML="email@email.com",e.appendChild(t),t.appendChild(n),t.appendChild(c),n.insertAdjacentElement("afterend",o),c.insertAdjacentElement("afterend",r)}())}})();
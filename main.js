(()=>{"use strict";function e(e,t,a){let i=document.createElement(e);return i.textContent=a,""!=t&&i.classList.add(t),i}function t(e,t){let a=document.createElement("img");return a.classList.add(e),a.src=t,a}function a(e){document.getElementsByClassName("active")[0].classList.toggle("active"),e.target.classList.toggle("active")}class i{constructor(e,t){this.title=e,this.data=t}}const n=()=>{let a=document.getElementsByClassName("container")[0];a.innerHTML="";let i=e("div","home",""),n=e("div","card",""),r=e("hr","","");return l().filter((e=>"first-group"==e.type)).forEach((t=>{let a=e("p",t.class,t.text);n.appendChild(a)})),n.appendChild(r),l().filter((e=>"second-group"==e.type)).forEach((t=>{let a=e("p",t.class,t.text);n.appendChild(a)})),n.appendChild(t("chef","/../dist/img/chef.jpg")),i.appendChild(n),a.appendChild(n),i},l=()=>[{text:"Bienvenidos",class:"secondary-text",type:"first-group"},{text:"La Pizzeria",class:"Minimizado"},{text:"Placer en cada bocado",class:"third-text",type:"second-group"}];(()=>{let t=e("nav","navbar"),a=e("div","Logo","La Pizzeria");a.id="Logo";let n=e("ul","nav");(()=>{const e=new i("Home","1"),t=new i("Menu","2"),a=new i("Contact","3");let n=[];return n.push(e),n.push(t),n.push(a),n})().forEach((t=>{let a=e("li","nav-item",t.title);"Home"==t.title&&a.classList.add("active"),a.id=t.title,a.setAttribute("data-index",t.data),n.appendChild(a)})),t.appendChild(a),t.appendChild(n),document.getElementById("header").appendChild(t)})(),n(),document.getElementById("content").appendChild((()=>{let t=document.createElement("div");return t.classList.add("footer"),[{text:"Developed by Bryan Montero",class:"footer-text"}].forEach((a=>{let i=e("p",a.class,a.text);t.appendChild(i)})),t})()),document.getElementById("Menu").addEventListener("click",(i=>{(()=>{let a=document.getElementsByClassName("container")[0];a.innerHTML="";let i=e("div","container",""),n=e("div","menu","");n.appendChild(t("menu-banner","../dist/img/header1.jpg"));let l=[{text:"Gourmet",class:"secondary-text"},{text:"Classics",class:"secondary-text"}],r=e("hr","",""),s=e("p",l[0].class,l[0].text);n.appendChild(s),n.appendChild(r);let o=document.createElement("div");o.classList.add("menu-dishes"),[{text:"Tartufo",ingredients:"Truffle Cream | Goat Cheese | Special Hot Honey | Basil | Extra Virgin Olive Oil",type:"gourmet"},{text:"Bufala D.O.P",ingredients:"San Marzano Tomato Sauce | Mozzarella Di Buffala D.O.P | Basil | Extra Virgin Olive Oil",type:"gourmet"},{text:"Proscioutto",ingredients:"San Marzano Tomato Sauce | Fresh Mozzarella | Prosciutto Di Parama D.O.P | Rucola | Extra Virgin Olive Oil",type:"gourmet"},{text:"Tonno",ingredients:"Mozzarella Di Buffala D.O.P | Tuna | Cocktail Tomatoes | Basil | Parmigiano Reggiano D.O.P | Extra Virgin Olive Oil",type:"gourmet"},{text:"Marinara",ingredients:"San Marzano Tomato Sauce | Garlic | Oregano | Extra Virgin Olive Oi",type:"classic"},{text:"Margherita",ingredients:"San Marzano Tomato Sauce | Fresh Mozzarella | Basil | Parmigiano Reggiano D.O.P | Extra Virgin Olive Oil",type:"classic"},{text:"Bianca",ingredients:"Fresh Mozzarella | Basil | Parmigiano Reggiano D.O.P | Extra Virgin Olive Oil",type:"classic"},{text:"Diavola",ingredients:"San Marzano Tomato Sauce | Fresh Mozzarella | Spicy Sopressata Salami | Basil | Special Hot Honey | Extra Virgin Olive Oil",type:"classic"}].filter((e=>"gourmet"==e.type)).forEach((t=>{let a=e("div","menu-dish"),i=e("h2","dish-name",t.text),n=e("label","dish-ingredients",t.ingredients);a.appendChild(i),a.appendChild(n),o.appendChild(a)})),n.appendChild(o),n.appendChild(t("menu-banner","../dist/img/header2.jpg"));let d=e("hr","",""),c=e("p",l[1].class,l[1].text);n.appendChild(c),n.appendChild(d);let p=e("div","menu-dishes");[{text:"Tartufo",ingredients:"Truffle Cream | Goat Cheese | Special Hot Honey | Basil | Extra Virgin Olive Oil",type:"gourmet"},{text:"Bufala D.O.P",ingredients:"San Marzano Tomato Sauce | Mozzarella Di Buffala D.O.P | Basil | Extra Virgin Olive Oil",type:"gourmet"},{text:"Proscioutto",ingredients:"San Marzano Tomato Sauce | Fresh Mozzarella | Prosciutto Di Parama D.O.P | Rucola | Extra Virgin Olive Oil",type:"gourmet"},{text:"Tonno",ingredients:"Mozzarella Di Buffala D.O.P | Tuna | Cocktail Tomatoes | Basil | Parmigiano Reggiano D.O.P | Extra Virgin Olive Oil",type:"gourmet"},{text:"Marinara",ingredients:"San Marzano Tomato Sauce | Garlic | Oregano | Extra Virgin Olive Oi",type:"classic"},{text:"Margherita",ingredients:"San Marzano Tomato Sauce | Fresh Mozzarella | Basil | Parmigiano Reggiano D.O.P | Extra Virgin Olive Oil",type:"classic"},{text:"Bianca",ingredients:"Fresh Mozzarella | Basil | Parmigiano Reggiano D.O.P | Extra Virgin Olive Oil",type:"classic"},{text:"Diavola",ingredients:"San Marzano Tomato Sauce | Fresh Mozzarella | Spicy Sopressata Salami | Basil | Special Hot Honey | Extra Virgin Olive Oil",type:"classic"}].filter((e=>"classic"==e.type)).forEach((t=>{let a=e("div","menu-dish",""),i=e("h2","dish-name",t.text),n=e("label","dish-ingredients",t.ingredients);a.appendChild(i),a.appendChild(n),p.appendChild(a)})),n.appendChild(p),i.appendChild(n),a.appendChild(n)})(),a(i)})),document.getElementById("Logo").addEventListener("click",(e=>n())),document.getElementById("Home").addEventListener("click",(e=>{n(),a(e)})),document.getElementById("Contact").addEventListener("click",(t=>{(()=>{let t=document.getElementsByClassName("container")[0];t.innerHTML="";let a=e("div","home"),i=e("div","card");[{text:"About Us",class:"secondary-text",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto ad deserunt id, nisi possimus animi impedit perferendis."},{text:"Email",class:"secondary-text",content:"restaurant@notemail.com"},{text:"Address",class:"secondary-text",content:"9694 Railroad Street, Maryville, TN 37803"},{text:"Phone",class:"secondary-text",content:"+1 888 9878"}].forEach((t=>{let a=e("hr"),n=e("p",t.class,t.text),l=e("label","",t.content);i.appendChild(n),i.appendChild(a),i.appendChild(l)})),a.appendChild(i),t.appendChild(i)})(),a(t)}))})();
(()=>{"use strict";class e{constructor(e,t){this.title=e,this.data=t}}const t=()=>{let e=document.getElementsByClassName("container")[0];e.innerHTML="";let t=document.createElement("div");t.classList.add("home");let d=document.createElement("div");d.classList.add("card");let l=document.createElement("hr");return a().forEach((e=>{let t=document.createElement("p");t.classList.add(e.class),t.textContent=e.text,d.appendChild(t)})),d.appendChild(l),n().forEach((e=>{let t=document.createElement("p");t.classList.add(e.class),t.textContent=e.text,d.appendChild(t)})),d.appendChild(i()),t.appendChild(d),e.appendChild(d),t},a=()=>[{text:"Bienvenidos",class:"secondary-text"},{text:"La Pizzeria",class:"Minimizado"}],n=()=>[{text:"Placer en cada bocado",class:"third-text"}],i=()=>{let e=document.createElement("img");return e.classList.add("chef"),e.src="https://media.gettyimages.com/photos/chef-with-delicious-pizza-picture-id154926593?s=612x612",e},d=()=>[{text:"Gourmet",class:"secondary-text"},{text:"Classics",class:"secondary-text"}],l=()=>[{text:"Tartufo",ingredients:"Truffle Cream | Goat Cheese | Special Hot Honey | Basil | Extra Virgin Olive Oil",type:"gourmet"},{text:"Bufala D.O.P",ingredients:"San Marzano Tomato Sauce | Mozzarella Di Buffala D.O.P | Basil | Extra Virgin Olive Oil",type:"gourmet"},{text:"Proscioutto",ingredients:"San Marzano Tomato Sauce | Fresh Mozzarella | Prosciutto Di Parama D.O.P | Rucola | Extra Virgin Olive Oil",type:"gourmet"},{text:"Tonno",ingredients:"Mozzarella Di Buffala D.O.P | Tuna | Cocktail Tomatoes | Basil | Parmigiano Reggiano D.O.P | Extra Virgin Olive Oil",type:"gourmet"},{text:"Marinara",ingredients:"San Marzano Tomato Sauce | Garlic | Oregano | Extra Virgin Olive Oi",type:"classic"},{text:"Margherita",ingredients:"San Marzano Tomato Sauce | Fresh Mozzarella | Basil | Parmigiano Reggiano D.O.P | Extra Virgin Olive Oil",type:"classic"},{text:"Bianca",ingredients:"Fresh Mozzarella | Basil | Parmigiano Reggiano D.O.P | Extra Virgin Olive Oil",type:"classic"},{text:"Diavola",ingredients:"San Marzano Tomato Sauce | Fresh Mozzarella | Spicy Sopressata Salami | Basil | Special Hot Honey | Extra Virgin Olive Oil",type:"classic"}];(()=>{let t=document.createElement("nav");t.classList.add("navbar");let a=document.createElement("div");a.textContent="La Pizzeria",a.id="Logo",a.classList.add("Logo");let n=document.createElement("ul");n.classList.add("nav"),(()=>{const t=new e("Menu","1"),a=new e("About","2"),n=new e("Contact","3");let i=[];return i.push(t),i.push(a),i.push(n),i})().forEach((e=>{let t=document.createElement("li");t.classList.add("nav-item"),t.textContent=e.title,t.id=e.title,t.setAttribute("data-index",e.data),n.appendChild(t)})),t.appendChild(a),t.appendChild(n),document.getElementById("header").appendChild(t)})(),t(),document.getElementById("content").appendChild((()=>{let e=document.createElement("div");return e.classList.add("footer"),[{text:"Developed by Bryan Montero",class:"footer-text"}].forEach((t=>{let a=document.createElement("p");a.classList.add(t.class),a.textContent=t.text,e.appendChild(a)})),e})()),document.getElementById("Menu").addEventListener("click",(e=>(()=>{let e=document.getElementsByClassName("container")[0];e.innerHTML="";let t=document.createElement("div");t.classList.add("container");let a=(()=>{let e=document.createElement("img");return e.classList.add("menu-banner"),e.src="http://www.pcspaddockrestaurant.com/wp-content/uploads/2017/12/pizza-header.jpg",e})(),n=document.createElement("div");n.classList.add("menu"),n.appendChild(a);let i=d(),s=document.createElement("hr"),c=document.createElement("p");c.classList.add(i[0].class),c.textContent=i[0].text,n.appendChild(c),n.appendChild(s);let r=document.createElement("div");r.classList.add("menu-dishes"),l().filter((e=>"gourmet"==e.type)).forEach((e=>{let t=document.createElement("div");t.classList.add("menu-dish");let a=document.createElement("h2");a.classList.add("dish-name"),a.textContent=e.text;let n=document.createElement("label");n.classList.add("dish-ingredients"),n.textContent=e.ingredients,t.appendChild(a),t.appendChild(n),r.appendChild(t)})),n.appendChild(r);let o=(()=>{let e=document.createElement("img");return e.classList.add("menu-banner"),e.src="https://www.systemoneservices.com/wp-content/uploads/2020/02/Pizza-Employee-Spotlight-Header.jpg",e})();n.appendChild(o);let m=document.createElement("hr"),p=document.createElement("p");p.classList.add(i[1].class),p.textContent=i[1].text,n.appendChild(p),n.appendChild(m);let u=document.createElement("div");return u.classList.add("menu-dishes"),l().filter((e=>"classic"==e.type)).forEach((e=>{let t=document.createElement("div");t.classList.add("menu-dish");let a=document.createElement("h2");a.classList.add("dish-name"),a.textContent=e.text;let n=document.createElement("label");n.classList.add("dish-ingredients"),n.textContent=e.ingredients,t.appendChild(a),t.appendChild(n),u.appendChild(t)})),n.appendChild(u),t.appendChild(n),e.appendChild(n),t})())),document.getElementById("Logo").addEventListener("click",(e=>t()))})();
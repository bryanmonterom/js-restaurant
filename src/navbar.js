  class NavbarItem{
    constructor(title, data){
        this.title = title;
        this.data = data
    }
  }

  const buildNavItems = ()=>{

    const menu = new NavbarItem('Home','1');
    const about = new NavbarItem('Menu','2');
    const Contact = new NavbarItem('Contact','3');
    let navitems = [];

    navitems.push(menu);
    navitems.push(about);
    navitems.push(Contact);
     return navitems;
  }



  export const navigationbar = ()=>{


    let nav = document.createElement('nav')
    nav.classList.add('navbar')

    let div = document.createElement('div');
    div.textContent = "La Pizzeria"
    div.id = "Logo"
    div.classList.add("Logo");
    

    let ul = document.createElement("ul");
    ul.classList.add('nav')
    

    buildNavItems().forEach(element => {
        let navbarItem = document.createElement('li');
        navbarItem.classList.add('nav-item');
        navbarItem.textContent = element.title; 
        navbarItem.id = element.title; 
        navbarItem.setAttribute("data-index",element.data); 
        ul.appendChild(navbarItem)
    });
    nav.appendChild(div);
    nav.appendChild(ul);
    document.getElementById('header').appendChild(nav)
    return nav;
  }


  const paragraphs_footer = ()=>{
    let paragraph = [{text:"Developed by Bryan Montero",class:"footer-text"}];
    return paragraph;
}
  
export const footer = ()=>{
    let div = document.createElement('div');
    div.classList.add('footer')

    paragraphs_footer().forEach(element => {
        let p = document.createElement('p');
        p.classList.add(element.class);
        p.textContent= element.text;
        div.appendChild(p);
    });
    return div;
}

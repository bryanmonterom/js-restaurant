  class NavbarItem{
    constructor(title, data){
        this.title = title;
        this.data = data
    }
  }

  const buildNavItems = ()=>{

    const menu = new NavbarItem('Menu','1');
    const about = new NavbarItem('About','2');
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
    div.classList.add("Logo");

    let ul = document.createElement("ul");
    ul.classList.add('nav')
    

    buildNavItems().forEach(element => {
        let navbarItem = document.createElement('li');
        navbarItem.classList.add('nav-item');
        navbarItem.textContent = element.title; 
        navbarItem.setAttribute = ("data-index",element.data); 
        ul.appendChild(navbarItem)
    });
    nav.appendChild(div);
    nav.appendChild(ul);
    return nav;
  }
  
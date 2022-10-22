import { createElement } from './utilities'


class NavbarItem {
  constructor(title, data) {
    this.title = title;
    this.data = data
  }
}

const buildNavItems = () => {

  const menu = new NavbarItem('Home', '1');
  const about = new NavbarItem('Menu', '2');
  const Contact = new NavbarItem('Contact', '3');
  let navitems = [];

  navitems.push(menu);
  navitems.push(about);
  navitems.push(Contact);
  return navitems;
}



export const navigationbar = () => {


  let nav = createElement('nav', 'navbar')

  let div = createElement('div', 'Logo', 'La Pizzeria');
  div.id = "Logo"


  let ul = createElement("ul", 'nav');


  buildNavItems().forEach(element => {
    let navbarItem = createElement('li', 'nav-item', element.title);
    if(element.title == "Home"){
      navbarItem.classList.add('active');
    }
    navbarItem.id = element.title;
    navbarItem.setAttribute("data-index", element.data);
    ul.appendChild(navbarItem)
  });
  nav.appendChild(div);
  nav.appendChild(ul);
  document.getElementById('header').appendChild(nav)
  return nav;
}


const paragraphs_footer = () => {
  let paragraph = [{ text: "Developed by Bryan Montero", class: "footer-text" }];
  return paragraph;
}

export const footer = () => {
  let div = document.createElement('div');
  div.classList.add('footer')

  paragraphs_footer().forEach(element => {
    let p = createElement('p', element.class, element.text);
    div.appendChild(p);
  });
  return div;
}

import { createElement } from './utilities'

export const containerHome = () => {
    let container = document.getElementsByClassName('container')[0];
    container.innerHTML = '';

    let div = createElement('div', 'home', '')
    let card = createElement('div', 'card', '');
    let line = createElement('hr', '', '');

    paragraphs().filter(a => a.type == "first-group").forEach(element => {
        let p = createElement('p', element.class, element.text)
        card.appendChild(p);
    });
    card.appendChild(line);

    paragraphs().filter(a => a.type == "second-group").forEach(element => {
        let p = createElement('p', element.class, element.text)
        card.appendChild(p);
    });

    card.appendChild(image());
    div.appendChild(card);
    container.appendChild(card)

    return div;
}



const paragraphs = () => {
    let paragraph = [{ text: "Bienvenidos", class: "secondary-text", type: "first-group" }, { text: "La Pizzeria", class: "Minimizado" }, { text: "Placer en cada bocado", class: "third-text", type: "second-group" }];
    return paragraph;
}


const image = () => {
    let img = document.createElement('img');
    img.classList.add('chef')
    img.src = "../img/chef.jpg"
    return img;
}


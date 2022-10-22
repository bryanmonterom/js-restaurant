import { createElement } from './utilities'

export const containerContact = () => {

    let container = document.getElementsByClassName('container')[0];
    container.innerHTML = '';


    let div = createElement('div','home');
    let card =createElement('div','card');

    paragraphs().forEach(element => {
        let line = createElement('hr')
        let p = createElement('p',element.class,element.text);

        let label = createElement('label','',element.content);
        card.appendChild(p);
        card.appendChild(line);
        card.appendChild(label);

    });

    div.appendChild(card);
    container.appendChild(card)

}

const paragraphs = () => {
    let paragraph = [{ text: "About Us", class: "secondary-text", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto ad deserunt id, nisi possimus animi impedit perferendis." },
    { text: "Email", class: "secondary-text", content: "restaurant@notemail.com" },
    { text: "Address", class: "secondary-text", content: "9694 Railroad Street, Maryville, TN 37803" },
    { text: "Phone", class: "secondary-text", content: "+1 888 9878" }];
    return paragraph;
}




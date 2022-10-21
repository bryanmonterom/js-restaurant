export const container = ()=>{
    let div = document.createElement('div');
    div.classList.add('container')

    let card = document.createElement('div');
    card.classList.add('card')
    let line = document.createElement('hr')

    paragraphs().forEach(element => {
        let p = document.createElement('p');
        p.classList.add(element.class);
        p.textContent= element.text;
        card.appendChild(p);
    });
    card.appendChild(line);

    paragraphs_second().forEach(element => {
        let p = document.createElement('p');
        p.classList.add(element.class);
        p.textContent= element.text;
        card.appendChild(p);
    });
    div.appendChild(card);

    return div;
}

const paragraphs = ()=>{
    let paragraph = [{text:"Bienvenidos",class:"secondary-text"},{text:"La Pizzeria",class:"Minimizado"}/*,{text:"Placer en cada bocado",class:"golden"}*/];
    return paragraph;
}

const paragraphs_second = ()=>{
    let paragraph = [{text:"Placer en cada bocado",class:"golden"}];
    return paragraph;
}


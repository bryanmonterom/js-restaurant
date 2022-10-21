export const container = ()=>{
    let div = document.createElement('div');
    div.classList.add('container-home')

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
    
    card.appendChild(image());

    div.appendChild(card);



    return div;
}

const paragraphs = ()=>{
    let paragraph = [{text:"Bienvenidos",class:"secondary-text"},{text:"La Pizzeria",class:"Minimizado"}/*,{text:"Placer en cada bocado",class:"golden"}*/];
    return paragraph;
}

const paragraphs_second = ()=>{
    let paragraph = [{text:"Placer en cada bocado",class:"third-text"}];
    return paragraph;
}

const paragraphs_footer = ()=>{
    let paragraph = [{text:"Developed by Bryan Montero",class:"footer-text"}];
    return paragraph;
}

const image = ()=>{
    let img = document.createElement('img');
    img.src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX9330771.jpg"
    return img;
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
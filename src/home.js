export const containerHome = ()=>{
    let container = document.getElementsByClassName('container')[0];
    container.innerHTML = '';
    let div = document.createElement('div');
    div.classList.add('home')


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
    
    container.appendChild(card)


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



const image = ()=>{
    let img = document.createElement('img');
    img.classList.add('chef')
    img.src="https://media.gettyimages.com/photos/chef-with-delicious-pizza-picture-id154926593?s=612x612"
    return img;
}


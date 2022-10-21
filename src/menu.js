import {createElement} from './utilities'


const imageHeaderFirst = () => {
    let img = document.createElement('img');
    img.classList.add('menu-banner');
    img.src = "../img/header1.jpg"
    return img;
}


const imageHeaderSecond = () => {
    let img = document.createElement('img');
    img.classList.add('menu-banner');
    img.src = "../img/header2.jpg"
    return img;
}





export const containerMenu = () => {

    let container = document.getElementsByClassName('container')[0];
    container.innerHTML = '';
    let div = document.createElement('div');
    div.classList.add('container')

    let img = imageHeaderFirst();
    let card = document.createElement('div');

    card.classList.add('menu')

    card.appendChild(img);

    let paragraph = paragraphs();

    let line = document.createElement('hr')

    let p1 = document.createElement('p');
    p1.classList.add(paragraph[0].class);
    p1.textContent = paragraph[0].text;
    card.appendChild(p1);
    card.appendChild(line);


    let gourmetdiv = document.createElement('div');
    gourmetdiv.classList.add('menu-dishes');
    menu().filter(a=> a.type == "gourmet").forEach(element => {
        let div = document.createElement('div')
        div.classList.add("menu-dish");

        let h2 = document.createElement('h2');
        h2.classList.add("dish-name");
        h2.textContent= element.text;

        let label = document.createElement('label');
        label.classList.add("dish-ingredients");
        label.textContent = element.ingredients
        div.appendChild(h2);
        div.appendChild(label);
        gourmetdiv.appendChild(div);
    });

    card.appendChild(gourmetdiv);

    let img2 = imageHeaderSecond();

    card.appendChild(img2);


    let line2 = document.createElement('hr')

    let p2 = document.createElement('p');
    p2.classList.add(paragraph[1].class);
    p2.textContent = paragraph[1].text;
    card.appendChild(p2);
    card.appendChild(line2);


    let classicdiv = document.createElement('div');
    classicdiv.classList.add('menu-dishes');
    menu().filter(a=> a.type == "classic").forEach(element => {
        let div = document.createElement('div')
        div.classList.add("menu-dish");

        let h2 = document.createElement('h2');
        h2.classList.add("dish-name");
        h2.textContent= element.text;

        let label = document.createElement('label');
        label.classList.add("dish-ingredients");
        label.textContent = element.ingredients
        div.appendChild(h2);
        div.appendChild(label);
        classicdiv.appendChild(div);
    });


    card.appendChild(classicdiv);

    div.appendChild(card);

    container.appendChild(card)
    return div;
}

const paragraphs = () => {
    let paragraph = [{ text: "Gourmet", class: "secondary-text" }, { text: "Classics", class: "secondary-text" }/*,{text:"Placer en cada bocado",class:"golden"}*/];
    return paragraph;
}


const menu = () => {
    let paragraph = [
        { text: "Tartufo", ingredients: "Truffle Cream | Goat Cheese | Special Hot Honey | Basil | Extra Virgin Olive Oil", type:"gourmet" }, 
        { text: "Bufala D.O.P", ingredients: "San Marzano Tomato Sauce | Mozzarella Di Buffala D.O.P | Basil | Extra Virgin Olive Oil" , type:"gourmet"},
        { text: "Proscioutto", ingredients: "San Marzano Tomato Sauce | Fresh Mozzarella | Prosciutto Di Parama D.O.P | Rucola | Extra Virgin Olive Oil" , type:"gourmet"},
        { text: "Tonno", ingredients: "Mozzarella Di Buffala D.O.P | Tuna | Cocktail Tomatoes | Basil | Parmigiano Reggiano D.O.P | Extra Virgin Olive Oil", type:"gourmet" },
        { text: "Marinara", ingredients: "San Marzano Tomato Sauce | Garlic | Oregano | Extra Virgin Olive Oi", type:"classic" },
        { text: "Margherita", ingredients: "San Marzano Tomato Sauce | Fresh Mozzarella | Basil | Parmigiano Reggiano D.O.P | Extra Virgin Olive Oil", type:"classic" },
        { text: "Bianca", ingredients: "Fresh Mozzarella | Basil | Parmigiano Reggiano D.O.P | Extra Virgin Olive Oil", type:"classic" },
        { text: "Diavola", ingredients: "San Marzano Tomato Sauce | Fresh Mozzarella | Spicy Sopressata Salami | Basil | Special Hot Honey | Extra Virgin Olive Oil", type:"classic" },






    ];
    return paragraph;
}


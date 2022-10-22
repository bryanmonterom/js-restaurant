import {createElement,createImages} from './utilities'

export const containerMenu = () => {

    let container = document.getElementsByClassName('container')[0];
    container.innerHTML = '';
    let div = createElement('div','container','') 
    let card = createElement('div','menu','')
    card.appendChild(createImages('menu-banner','../dist/img/header1.jpg'));
    let paragraph = paragraphs();
    let line = createElement('hr','','')
    let p1 = createElement('p',paragraph[0].class,paragraph[0].text);
    card.appendChild(p1);
    card.appendChild(line);
    let gourmetdiv = document.createElement('div');
    gourmetdiv.classList.add('menu-dishes');
    menu().filter(a=> a.type == "gourmet").forEach(element => {
        let div = createElement('div',"menu-dish")
        let h2 = createElement('h2','dish-name',element.text);
        let label = createElement('label','dish-ingredients',element.ingredients);
        div.appendChild(h2);
        div.appendChild(label);
        gourmetdiv.appendChild(div);
    });

    card.appendChild(gourmetdiv);


    card.appendChild(createImages('menu-banner','../dist/img/header2.jpg'));


    let line2 = createElement('hr','','')

    let p2 = createElement('p',paragraph[1].class,paragraph[1].text);
    card.appendChild(p2);
    card.appendChild(line2);


    let classicdiv = createElement('div','menu-dishes');
    menu().filter(a=> a.type == "classic").forEach(element => {
        
        let div = createElement('div',"menu-dish",'')
        let h2 = createElement('h2',"dish-name",element.text);
   

        let label = createElement('label','dish-ingredients',element.ingredients);
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
    let paragraph = [{ text: "Gourmet", class: "secondary-text" }, { text: "Classics", class: "secondary-text" }];
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


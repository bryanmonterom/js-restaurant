export const containerContact = () => {

    let container = document.getElementsByClassName('container')[0];
    container.innerHTML = '';
    let div = document.createElement('div');
    div.classList.add('home')


    let card = document.createElement('div');
    card.classList.add('card')

    paragraphs().forEach(element => {
    let line = document.createElement('hr')

        let p = document.createElement('p');
        p.classList.add(element.class);
        p.textContent= element.text;

        let label = document.createElement('label');
        label.textContent= element.content;

        card.appendChild(p);

    card.appendChild(line);

        card.appendChild(label);

    });

    div.appendChild(card);
    
    container.appendChild(card)

}

const paragraphs = () => {
    let paragraph = [{ text: "About Us", class: "secondary-text", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto ad deserunt id, nisi possimus animi impedit perferendis." }, 
    
   
 
    { text: "Email", class: "secondary-text", content:"restaurant@notemail.com" }, { text: "Address", class: "secondary-text", content:"9694 Railroad Street, Maryville, TN 37803" },
     { text: "Phone", class: "secondary-text", content:"+1 888 9878" }];
    return paragraph;
}




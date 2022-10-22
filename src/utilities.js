export function createElement(element, className,text){
    let elementtoCreate = document.createElement(element);
    elementtoCreate.textContent = text
    if(className != ''){
        elementtoCreate.classList.add(className)
    }
    console.log(elementtoCreate);
    return elementtoCreate;
}

export function createImages(className, src){
    let img = document.createElement('img');
    img.classList.add(className);
    img.src = src
    return img;
}

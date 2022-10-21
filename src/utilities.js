export function createElement(element, className,text){
    let elementtoCreate = document.createElement(element);
    elementtoCreate.textContent = text
    if(className != ''){
        elementtoCreate.classList.add(className)
    }
    console.log(elementtoCreate);
    return elementtoCreate;
}
import { navigationbar, footer } from './navbar'
import { containerHome } from './home'
import { containerMenu } from './menu'
import { containerContact } from './contact'
import { setActive } from './utilities'







function render() {

    navigationbar();
    containerHome();
    // document.getElementById('content').appendChild(containerHome());
    document.getElementById('content').appendChild(footer());

}

render();

document.getElementById('Menu').addEventListener('click', (e) => {
    containerMenu(e);
    setActive(e)
})
document.getElementById('Logo').addEventListener('click', (e) => containerHome(e))
document.getElementById('Home').addEventListener('click', (e) => { 
    containerHome(e); 
    setActive(e) 
})
document.getElementById('Contact').addEventListener('click', (e) => { 
    containerContact(e); 
    setActive(e) 
})





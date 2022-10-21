import {navigationbar} from './navbar'
import {container,footer} from './home'


document.getElementById('content').appendChild(navigationbar());
console.log(container())
document.getElementById('content').appendChild(container());
document.getElementById('content').appendChild(footer());


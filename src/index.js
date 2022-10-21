import {navigationbar} from './navbar'
import {container} from './home'


document.getElementById('content').appendChild(navigationbar());
console.log(container())
document.getElementById('content').appendChild(container());

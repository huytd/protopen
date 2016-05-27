import './index.html'
import './main.scss'

(() => {
	let welcome = `Hello, today is ${(new Date()).toLocaleDateString()}`
	console.log(welcome)
	console.log('Everything is up! Let\'s prototyping');
})();
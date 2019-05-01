import '@babel/polyfill'
import './global.scss'
import Main from './Main.svelte'

const main = new Main({
  target: document.body
})

// useful for debugging
window.main = main

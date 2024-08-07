import '../styles/styles.css'
import ClientArea from './modules/ClientArea'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

let mobileMenu = new MobileMenu()
new ClientArea()
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75)
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60)
let modal

new StickyHeader()

document.querySelectorAll('.open-modal').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()
    if (typeof modal == 'undefined') {
      import('./modules/Modal')
        .then(x => {
          console.log(x)
          modal = new x.default()
          setTimeout(() => modal.openTheModal(), 20)
        })
        .catch(() => console.log('There was a problem.'))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}

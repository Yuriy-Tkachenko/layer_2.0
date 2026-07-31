const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.site-nav')

function setMenu(open) {
  if (!menuToggle || !navigation) return
  menuToggle.setAttribute('aria-expanded', String(open))
  navigation.classList.toggle('is-open', open)
}

menuToggle?.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true')
})

navigation?.addEventListener('click', event => {
  if (event.target instanceof HTMLAnchorElement) setMenu(false)
})

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setMenu(false)
})

document.addEventListener('click', event => {
  if (!navigation?.classList.contains('is-open')) return
  if (event.target instanceof Node && !navigation.contains(event.target) && !menuToggle?.contains(event.target)) setMenu(false)
})

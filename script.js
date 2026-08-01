const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.site-nav')
const contactForm = document.querySelector('#contact-form')
const directionToggles = document.querySelectorAll('.direction-item__toggle')

if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
window.scrollTo(0, 0)

window.addEventListener('pageshow', () => {
  requestAnimationFrame(() => window.scrollTo(0, 0))
})

window.addEventListener('load', () => window.scrollTo(0, 0), { once: true })

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

directionToggles.forEach(toggle => {
  const panel = document.getElementById(toggle.getAttribute('aria-controls') || '')
  if (panel) {
    panel.setAttribute('aria-hidden', 'true')
    panel.inert = true
  }

  toggle.addEventListener('click', () => {
    const willOpen = toggle.getAttribute('aria-expanded') !== 'true'
    toggle.setAttribute('aria-expanded', String(willOpen))
    if (panel) {
      panel.setAttribute('aria-hidden', String(!willOpen))
      panel.inert = !willOpen
    }
  })
})

contactForm?.addEventListener('submit', event => {
  event.preventDefault()
  const status = contactForm.querySelector('.form-status')
  const submitButton = contactForm.querySelector('button[type="submit"]')
  const formData = new FormData(contactForm)
  const contactMethod = formData.get('contact-method')
  const methodNames = { phone: 'по телефону', whatsapp: 'в WhatsApp', telegram: 'в Telegram', max: 'в MAX' }
  if (status) status.textContent = `Спасибо. Обращение подготовлено — свяжусь с вами ${methodNames[contactMethod] || 'указанным способом'}. Для срочной связи звоните +7 994 144-13-49.`
  if (submitButton instanceof HTMLButtonElement) submitButton.disabled = true
})

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

if (!reducedMotion.matches) {
  const sections = document.querySelectorAll('.section, .warning-band, .contact-section')
  const revealSelectors = [
    '.section-intro',
    '.experience__photo-note',
    '.experience__copy',
    '.experience__facts',
    '.directions__list',
    '.warning-band__inner > div',
    '.process__content',
    '.practice__content',
    '.reviews__content',
    '.related__content',
    '.faq__content',
    '.contact-section__intro',
    '.contact-form',
    '.contact-links',
    '.footer-credentials',
    '.footer-bottom'
  ]
  const staggerSelectors = [
    '.number-list li',
    '.process__steps li',
    '.case-grid article',
    '.review-grid blockquote',
    '.related li',
    '.faq details'
  ]

  sections.forEach(section => section.classList.add('reveal-section'))

  document.querySelectorAll(revealSelectors.join(',')).forEach((element, index) => {
    element.classList.add('reveal-item')
    element.dataset.reveal = index % 2 ? 'right' : 'left'
  })

  staggerSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add('reveal-item')
      element.dataset.reveal = 'scale'
      element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 90}ms`)
    })
  })

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      revealObserver.unobserve(entry.target)
    })
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })

  document.querySelectorAll('.reveal-item, .reveal-section').forEach(element => revealObserver.observe(element))

  let frameRequested = false

  function updateBackdropMotion() {
    const scrollTop = window.scrollY
    const experience = document.querySelector('.experience')
    document.documentElement.style.setProperty('--hero-drift', `${Math.min(scrollTop * 0.055, 34)}px`)

    if (experience) {
      const rect = experience.getBoundingClientRect()
      const drift = Math.max(-32, Math.min(32, rect.top * -0.035))
      document.documentElement.style.setProperty('--experience-drift', `${drift}px`)
    }

    frameRequested = false
  }

  window.addEventListener('scroll', () => {
    if (frameRequested) return
    frameRequested = true
    requestAnimationFrame(updateBackdropMotion)
  }, { passive: true })

  updateBackdropMotion()
}

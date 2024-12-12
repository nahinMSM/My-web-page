window.addEventListener('scroll', () => {
  const header = document.querySelector('.header')
  const logo = document.querySelector('.logo')
  const img = logo.querySelector('img')
  const scrollUpBtn = document.querySelector('.scroll-up-btn')

  if (window.scrollY > 20) {
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }

  if (window.scrollY > 20) {
    logo.classList.add('inner-shadow')
    img.setAttribute('src', '/src/imagens/logo_blue.png')
  } else {
    logo.classList.remove('inner-shadow')
    img.setAttribute('src', '/src/imagens/logo_whit.png')
  }

  if (window.scrollY > 500) {
    scrollUpBtn.classList.add('show')
  } else {
    scrollUpBtn.classList.remove('show')
  }
})
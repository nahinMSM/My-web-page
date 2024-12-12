const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('section');

activateMenu = () => {
  let currentSectionIndex = -1;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSectionIndex = index;
    }
  });

  menuItems.forEach(item => item.classList.remove('active'));
  if (currentSectionIndex > 0) menuItems[currentSectionIndex - 1].classList.add('active');
}

window.addEventListener('scroll', activateMenu);

menuItems.forEach(item => item.addEventListener('click', (e) => {
  e.preventDefault();
  const targetSection = document.getElementById(item.getAttribute('href').slice(1));
  window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
  menuItems.forEach(i => i.classList.remove('active'));
  item.classList.add('active');
}));

activateMenu();

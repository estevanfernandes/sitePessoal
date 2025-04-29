
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
});

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

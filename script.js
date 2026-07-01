const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 12) {
    header.style.boxShadow = '0 12px 40px rgba(7, 26, 51, 0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
});

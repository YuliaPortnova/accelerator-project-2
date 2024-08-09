const openButton = document.querySelector('.page-header__burger-button');
const header = document.querySelector('.page-header');
const links = header.querySelectorAll('.page-header__link');

openButton.addEventListener('click', () => {
  header.classList.toggle('is-open');

  if (header.classList.contains('is-open')) {
    document.body.setAttribute('style', 'overflow: hidden');
  } else document.body.removeAttribute('style');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
    document.body.removeAttribute('style');
  })
});

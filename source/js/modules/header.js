const openButton = document.querySelector('.page-header__burger-button');
const header = document.querySelector('.page-header');
const links = header.querySelectorAll('.page-header__link');
const firstTabButton = header.querySelector('.page-header__burger-button');

let onDocumentFocus;

const openMenu = () => {
  header.classList.add('is-open');
  document.body.setAttribute('style', 'overflow: hidden');
  onDocumentFocus = (event) => {
    if (!header.contains( event.target ) ) {
      event.stopPropagation();
      firstTabButton.focus();
    }
  };
  document.addEventListener('focus', onDocumentFocus, true);
};

const closeMenu = () => {
  document.body.removeAttribute('style');
  header.classList.remove('is-open');
  document.removeEventListener('focus', onDocumentFocus, true);
};

openButton.addEventListener('click', () => {
  if (header.classList.contains('is-open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

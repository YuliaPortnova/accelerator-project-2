const openButton = document.querySelector('.page-header__burger-button');
const header = document.querySelector('.page-header');
const links = header.querySelectorAll('.page-header__link');
const menu = header.querySelector('.page-header__nav');

const closeMenu = () => {
  document.body.setAttribute('style', 'overflow: hidden');
  header.classList.remove('is-open');
};

const openMenu = () => {
  header.classList.add('is-open');
  document.body.removeAttribute('style');
};

openButton.addEventListener('click', () => {
  if (header.classList.contains('is-open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

const onMenuFocusIn = () => {
  if (document.body.clientWidth <= 768) {
    openMenu();
  }
};

const onMenuFocusOut = () => {
  if (document.body.clientWidth <= 768) {
    closeMenu();
  }
  menu.removeEventListener('focusin', onMenuFocusIn);
  menu.removeEventListener('focusout', onMenuFocusOut);
};

links.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
    document.body.removeAttribute('style');
  });
  link.addEventListener('focus', () => {
    menu.addEventListener('focusin', onMenuFocusIn);
    menu.addEventListener('focusout', onMenuFocusOut);
  });
});

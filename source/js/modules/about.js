const title = document.querySelector('.about h2');
if (title) {
  title.classList.add('title');
  title.dataset.title = title.textContent;
}

const buttonMenu = document.body.querySelector('.js_sidebar');
const appContainer = document.body.querySelector('.app__container');

buttonMenu.addEventListener('click', function() {
  appContainer.classList.toggle('show-sidebar')
});
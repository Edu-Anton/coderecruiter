/*
Aparición y desaparición del sidebar fuera de la pantalla
*/
const buttonMenu = document.body.querySelector(".js_sidebar");
const appContainer = document.body.querySelector(".app__main");

export const sidebarToggle = buttonMenu.addEventListener("click", function() {
  appContainer.classList.toggle("show-sidebar");
});

// const buttonMenu = document.body.querySelector('.js_sidebar');
// const appContainer = document.body.querySelector('.app__container');

// buttonMenu.addEventListener('click', function() {
//   appContainer.classList.toggle('show-sidebar')
// });


/*
Giro de la tarjeta de developer
*/
// const cardGroup = document.querySelector(".card__group");
// const arrowRight = document.querySelector(".card__arrow--right");

// export const cardTurn = cardGroup.addEventListener("click", function(e) {
//   e.stopPropagation()
//   console.log(e)
//   if (e.target.id == "card__arrow--right") {
//     let card = e.path[2]
//     card.classList.toggle("js_card__rotate");
//   }
// });

export function prueba (){
  alert('hola desde')
}
import {developers} from './db.js'
import {Developer} from './developer.js'
import {renderAllCards, renderCard} from './render.js'

// SEPARAR SOLO PARA LAS TARJETAS
const buttonMenu = document.body.querySelector(".js_sidebar");
const appContainer = document.body.querySelector(".app__main");

buttonMenu.addEventListener("click", function() {
  appContainer.classList.toggle("show-sidebar");
});

const arrowRight = document.querySelector(".card__arrow--right");
// const card = document.querySelector(".card");

const cardGroup = document.querySelector(".card__group");

cardGroup.addEventListener("click", function(e) {
  // e.preventDefault();
  e.stopPropagation()
  console.log(e)
  if (e.target.id == "card__arrow--right") {
    let card = e.path[2]
    card.classList.toggle("js_card__rotate");
  }
});



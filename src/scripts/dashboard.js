import {Developer} from './model/Developer.js'
import {renderAllCards, renderCard} from './view/render'
import {cardTurn, prueba} from './controller/events.js'
prueba()

let devjob = {job: "React Developer"}
let jobname = "Angular developer"

const cardGroup = document.querySelector(".card__group");
const arrowRight = document.querySelector(".card__arrow--right");


cardGroup.addEventListener("click", function(e) {
  e.stopPropagation()
  console.log(e)
  if (e.target.id == "card__arrow--right") {
    let card = e.path[2]
    card.classList.toggle("js_card__rotate");
  }

  if (e.target.id.substr(0, 2) == "id"){
    let param = e.target.id.substr(3)
    location.href = `http://localhost:1234/perfil.html?id=${param}`;
  }
});




function myFunction() {
  alert('funciono')
  location.href = "https://www.w3schools.com";
}

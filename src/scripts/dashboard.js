import {Developer} from './model/Developer.js'
// import {renderAllCards, renderCard} from './view/render'
// import {cardTurn, prueba} from './controller/events.js'
import imgEdu from '../img/eduardo.jpg'



let devjob = {job: "React Developer"}
let jobname = "Angular developer"

// console.log(__dirname + '/../..')
// console.log(__filename)
// console.log(imgEdu)
// let path = __filename + imgEdu
// console.log(path)

const getDevelopers = fetch('http://localhost:3000/devs')
  .then(res => res.json())
  .then(data => {
    console.log("data getDevelopers", data)
    data.forEach((dev, index) => {
      renderCard(dev, index)
    });
})

let renderCard = (dev, index) => {
  console.log('probando', dev)
  let card = document.createElement('div')
  card.className = "card__container"
  let attr = document.createAttribute("data-index")
  attr.value = index + 1
  card.setAttributeNode(attr)
  card.innerHTML = cardComponent(dev, index)
  const cardGroup = document.querySelector('.card__group'); // Revisar esta línea
  cardGroup.appendChild(card)  
}

let cardComponent = (user, index) => {  // al momento de ejecutar el card component solo recibe un argumento
  return `
    <div class="card">
    <div class="card__side card__front">
      <i class="fas fa-arrow-right card__arrow--right" id="card__arrow--right"></i>
      <figure>
        <img class="card__img" src="${imgEdu}" alt="">
      </figure>
      <p class="card__name">${user.name} ${user.lastName}</p>
      <p class="card__job">${user.specialty}</p>
      <p class="card__phone"><i class="fas fa-phone-volume"></i> ${user.phone}</p>
      <hr class="card__line">
      <div class="card__social">

        <a href="#"><i class="fab fa-facebook-square"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-github-alt"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-codepen"></i></a>
      </div>
    </div>
    <div class="card__side card__back">
      <p>${user.shortDescription}</p>
      <a id="id-${index +1}" class="card__btn"  href="./perfil.html?id=${index+1}">Ver perfil</a>
    </div>
  </div>
  `
}





/**
 * eventos
*/


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

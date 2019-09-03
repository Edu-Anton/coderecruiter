import {developers} from './db.js';
import {cardGroup} from './global.js';
// import connors from "./img/connors.png";
// import connors from '../img/connors.png'
// import('/perfil.pug')

const renderAllCards = (() => {
  developers.forEach((developer, index) => {
    renderCard(developer, index)
  })
  // console.log(developers)
})()

function renderCard (dev, index) {
  console.log(dev)
  let card = document.createElement('div')
  card.className = "card__container"
  let attr = document.createAttribute("data-index")
  attr.value = index
  card.setAttributeNode(attr)
  card.innerHTML = `
      <div class="card">
        <div class="card__side card__front">
          <i class="fas fa-arrow-right card__arrow--right" id="card__arrow--right"></i>
          <figure>
            <img class="card__img" src="./connors.png" alt="">
          </figure>
          <p class="card__name">${dev.name} ${dev.lastName}</p>
          <p class="card__job">${dev.specialty}</p>
          <p class="card__phone"><i class="fas fa-phone-volume"></i> ${dev.phone}</p>
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
          <p>${dev.shortDescription}</p>
          <a class="card__btn" href="perfil.html">Ver perfil</a>
        </div>
      </div>
  `
  cardGroup.appendChild(card) 
  
}
// console.log(appMain)
export {renderAllCards, renderCard}
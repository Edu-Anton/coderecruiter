

// import {cardGroup} from './global.js';
// import connors from "./img/connors.png";
// import connors from '../img/connors.png'
// import('/perfil.pug')


const findAll = fetch('http://localhost:3000/devs')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    renderAllCards(data)
  })

const getDev = fetch('http://localhost:3000/devs/1')
  .then(res => res.json())
  .then(data => {
    
  })

function renderAllCards (findAll) {
  findAll.forEach((developer, index) => {
    renderCard(developer, index)
  })
}

function renderCard (dev, index) {
  // console.log(dev)
  let card = document.createElement('div')
  card.className = "card__container"
  let attr = document.createAttribute("data-index")
  attr.value = index + 1
  card.setAttributeNode(attr)
  card.innerHTML = `
      <div class="card">
        <div class="card__side card__front">
          <i class="fas fa-arrow-right card__arrow--right" id="card__arrow--right"></i>
          <figure>
            <img class="card__img" src="eduardo" alt="">
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
          <a id="id-${index +1}" class="card__btn"  href="#">Ver perfil</a>
        </div>
      </div>
  `
  const cardGroup = document.querySelector('.card__group');
  cardGroup.appendChild(card) 
  
}
// console.log(appMain)
export {renderAllCards, renderCard}
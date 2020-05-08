const cardTemplate = `
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

// export default cardTemplate
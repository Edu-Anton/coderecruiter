
var ref = location.search;
ref = ref.substr(4)

const find = fetch(`http://localhost:3000/devs/${ref}`)
  .then(res => res.json())
  .then(datos => {
    // console.log(datos)
    proces(datos)
    return datos
  })


function proces(par){
  
  let perfil = document.getElementById('perfil')
  perfil.innerHTML = `
    <span class="txt--sm">Dashboard &gt;</span>
    <span class="txt--sm txt--primary"> Perfil</span>
    <div class="perfil__header">
      <figure class="perfil__figure">
        <img class="perfil__img" src="/eduardo.jpg" alt="">
      </figure>
      <div class="perfil__header__content">
        <h1 class="perfil__title">${par.name} ${par.lastName}</h1>
        <p class="perfil__subtitle">${par.specialty} </p>
        <p class="perfil__subtitle"> <i class="fas fa-phone-volume" aria-hidden="true"> </i> ${par.phone}</p>
        <div class="perfil__social">
          <i class="fab fa-facebook-square" aria-hidden="true"></i>
          <i class="fab fa-twitter" aria-hidden="true"></i>
          <i class="fab fa-github-alt" aria-hidden="true"></i>
          <i class="fab fa-linkedin" aria-hidden="true"></i>
          <i class="fab fa-codepen" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <p>Hola mi nombre es ${par.name} ${par.lastName}, soy full stack developer. Mis hobbies son escribir codigo mantenible y crear proyectos retadores, me gusta todo lo referente a interfaz de usuario, programación y crear productos con una gran experiencia de usuario. Cuento con experiencia en desarrollos responsive, pwa, y sistemas basados en spa. Tengo una diplomatura en ciencias politicas pero me dedico a la programacion porque me parecio algo muy interesante y lo quise aprender para complementar mis conocimientos ya que en el mundo actual todo se basa en tecnología.</p>
  </div>
  `
} 


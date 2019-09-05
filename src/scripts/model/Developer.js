export class Developer {
  constructor(
      name, 
      lastName,
      gender,
      specialty,
      phone = "777-777777",
      address = "Calle 3 Mz A - Lima",
      password = "1234",
  ){
    this.name = name;
    this.lastName = lastName;
    this.specialty = specialty;
    this.gender = gender;
    this.phone = phone;
    this.address = address;
    this.password = password;
    this.user = this.user()
    this.mail = this.mimail()
    this.shortDescription = this.shortDescription()
    this.description = this.description()
    this.facebook = this.facebook() 
    this.twitter = this.twitter() 
    this.github = this.github() 
    this.linkedin = this.linkedin() 
    this.codepen = this.codepen() 
  }

  user() {
    return this.name
  }

  mimail() {
    let lower = this.name
    lower = lower.toLowerCase()
    lower = `${lower}@codigo.com`
    return lower

  }

  shortDescription() {
    return `Hola Mi nombre es ${this.name} ${this.lastName}, soy full stack developer y si quieres saber más sobre mis habilidades te invito a ver mi perfil.`
  }

  description() {
    return `Hola Mi nombre es ${this.name} ${this.lastName}, soy full stack developer. Mis hobbies son escribir codigo mantenible y crear proyectos retadores, me gusta todo lo referente a interfaz de usuario, programacion y crear productos con una gran experiencia de usuario. Cuento con experiencia en desarrollos responsive, pwa, y sistemas basados en spa. Tengo una diplomatura en ciencias politicas pero me dedico a la programacion porque me parecio algo muy interesante y lo quise aprender para complementar mis conocimientos ya que en el mundo actual todo se basa en tecnologia.`
  }

  facebook() {
    return `http://facebook.com/${this.name}.${this.lastName}.654321`
  }
  
  twitter() {
    return `https://twitter.com/${this.name}.${this.lastName}`
  }
  
  github() {
    return `https://github.com/${this.name}_${this.lastName}`
  }
  
  linkedin() {
    return `http://facebook.com/${this.name}.${this.lastName}.654321`
  }

  codepen() {
    return `https://codepen.io/${this.name}.${this.lastName}/pen`
  }

};


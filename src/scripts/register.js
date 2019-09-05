import {Developer} from './model/Developer'

let formRegister = document.getElementById('form_register')
let regName = document.getElementById('reg_name')

formRegister.addEventListener('submit', (e) => {
  e.preventDefault();
  addDeveloper();
  alert('prueba')
})

regName.addEventListener('keypress', (e)=>{
  e.preventDefault()
  if(e.which === 13) {
    chargeForm()
  }
})

function chargeForm(){
  let register = addDeveloper()
  
  document.getElementById('reg_user').value = register.user
  document.getElementById('reg_mail').value = register.mail
  document.getElementById('reg_password').value = register.password
  document.getElementById('description').value = register.description
  document.getElementById('reg_facebook').value = register.facebook
  document.getElementById('reg_twitter').value = register.twitter
  document.getElementById('reg_github').value = register.github
  document.getElementById('reg_linkedin').value = register.linkedin
  document.getElementById('reg_codepen').value = register.codepen
}

function addDeveloper(){

  let gender
  let specialty

  let name = document.getElementById('reg_name').value
  let lastName = document.getElementById('reg_lastname').value
  let phone = document.getElementById('reg_phone').value

  let male = document.getElementById('male')
  let female = document.getElementById('female')
  if (male.checked) {
    gender = male.value
  } else if (female.checked) {
    gender = female.value
  }
  
  let job = document.getElementById('specialty')
  if (job.value != "") {
    specialty = document.getElementById('specialty')
  }

  let newDev = new Developer(name, lastName, gender, specialty) 
  
  console.log(newDev)
  return newDev

}
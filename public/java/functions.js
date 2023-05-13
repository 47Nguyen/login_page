const showHide = document.querySelector(".hide-show")
const Password = document.querySelector(".pass_info input")
const username = document.querySelector(".input_info input")
const form = document.querySelector('form')
const email = document.querySelector('.email input')
const address = document.getElementById("address")
const error = document.getElementById('error')
const errorPassword = document.getElementById('errorPassword')
const valid = document.getElementById("valid")
const valid2 = document.getElementById("valid2")
var state = false

form.addEventListener('submit', (e)=>{
    let messages = []
    let messages2 = []
    let validMessage = []
    let validMessage2 = []
    
    if (email.value === ''){
        messages.push('Email is required')
    }
    else{
        validMessage.push("Email is valid")
    }
    
    if (username.value.length <= 6){
        e.preventDefault()
        messages2.push("Username doesn't meet requirement")
    }
    else{
        validMessage.push("Username is valid")
    }

    if (Password.value.length <=8 ){
        e.preventDefault()
        messages.push("Password is too short" )
    }
    else{
        validMessage2.push("Password is valid")
    }
    if (Password.value.length >=20){
        e.preventDefault()
        messages.push("Password is too long")
    }

    if (address.value === ''){
        e.preventDefault()
        messages2.push("Address is empty")
    }
    else{
        validMessage.push("Valid Address")
    }

    if (messages.length > 0 ){
        errorPassword.innerHTML = messages.join(' and ')
    }
    if (messages.length > 0 ){
        e.preventDefault()
        error.innerHTML = messages2.join(" and ")
    }  
    if (messages.length > 0 ){
        valid.innerHTML = validMessage.join(" and ")
    }  
    if (messages.length > 0 ){
        valid2.innerHTML = validMessage2.join(" and ")
    }  
})


function checkUsername(){
    let letter2 = document.getElementById("username")
    var lowercaseletters=/[a-z]/g
    if (username.value.match(lowercaseletters)){
      letter2.classList.add('valid')
         } else{
      letter2.classList.add('invalid')
      }
      var upcaseletters=/[A-Z]/g
    if (username.value.match(upcaseletters)){
      letter2.classList.add('invalid')
         }
     if (username.value.length >=8 && username.value.length <=15){
        letter2.classList.add('valid')
        letter2.classList.remove('invalid')
    }else{
        letter2.classList.remove('valid')
        letter2.classList.add('invalid') 
    } 
            
}

function checkPassword(){
    let letter = document.getElementById("password")
    var lowercaseletters=/[a-z]/g
    if (Password.value.match(lowercaseletters)){
      letter.classList.remove('invalid')
      letter.classList.add('valid')
         } else{
      letter.classList.remove('valid')
      letter.classList.add('invalid')
      }
    var upcaseletters=/[A-Z]/g
    if (Password.value.match(upcaseletters)){
      letter.classList.remove('invalid')
      letter.classList.add('valid')
         } else{
      letter.classList.remove('valid')
      letter.classList.add('invalid')
      }
    var numbers=/[0-9]/g
    if (Password.value.match(numbers)){
      letter.classList.remove('invalid')
      letter.classList.add('valid')
         } else{
      letter.classList.remove('valid')
      letter.classList.add('invalid')
      }
    var pattern = /[!@#$%^&*]/g
    if (Password.value.match(pattern)){
    letter.classList.remove('invalid')
      letter.classList.add('valid')
         } else{
      letter.classList.remove('valid')
      letter.classList.add('invalid')
    }
    if (Password.value.length >=8 && Password.value.length <=20){
        letter.classList.add('valid')
        letter.classList.remove('invalid')
    }else{
        letter.classList.remove('valid')
        letter.classList.add('invalid') 
    } 
    
}






function toggle(){
    if (state){
        Password.setAttribute("type", "password");
        state = false
    }
    else{
        Password.setAttribute("type", "text")
        state = true
    }
}






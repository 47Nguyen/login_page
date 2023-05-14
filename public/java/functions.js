const showHide = document.querySelector(".hide-show")
const Password = document.querySelector(".pass_info input")
const username = document.querySelector(".input_info input")
const email = document.querySelector('.email input')
const address = document.getElementById("address")
const error = document.getElementById('error')
const errorPassword = document.getElementById('errorPassword')
const valid = document.getElementById("valid")
const valid2 = document.getElementById("valid2")
const form = document.querySelector('form')
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
    
    if (username.value.length >= 8 && username.value.length <= 15 && username.value.search(/[a-z]/) >= 0 && username.value.search(/[A-Z]/) >= 0){
        validMessage.push("Username is valid")
    }
    else{
        e.preventDefault()
        messages2.push("Username doesn't meet requirement")
    } 
    if (Password.value.search(/[!@#$%^&*]/)>= 0 && Password.value.search(/[0-9]/) >= 0 && Password.value.search(/[a-z]/) >= 0 && Password.value.search(/[A-Z]/) >= 0 && Password.value.length >=8 && Password.value.length <=20){
        validMessage2.push("Password is valid")
    }
    else{
        e.preventDefault()
        messages.push("Password requirements are 1 uppercase letter, 1 number and 1 special symbol" )
    } 

    if (address.value === ""){
        e.preventDefault()
        messages2.push("Address is empty")
    }
    else{
        validMessage2.push("Valid Address")
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






const showHide = document.querySelector(".hide-show")
const Password = document.querySelector(".pass_info input")
const username = document.querySelector(".input_info input")
const form = document.querySelector('form')
const email = document.querySelector('.email input')
const error = document.getElementById('error')
const errorPassword = document.getElementById('errorPassword')
var letter=document.getElementByName('letter');
var capital=document.getElementsByName('number')
var state = false


form.addEventListener('submit', (e)=>{
    let messages = []
    let messages2 = []
    if (email.value === ''){
        messages.push('Email is required')
    }
    
    if (username.value.length <= 6){
        messages2.push("Username need to be between 6 and 12")
    }

    if (Password.value.length <= 6 ){
        messages.push('Password is too short')
    }


    if (messages.length > 0 ){
        errorPassword.innerHTML = messages.join(' and ')
    }
    if (messages.length > 0 ){
        e.preventDefault()
        error.innerHTML = messages2.join(' ')
    }
})



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


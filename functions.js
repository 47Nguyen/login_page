const showHide = document.querySelector(".hide-show")
const Password = document.querySelector(".pass_info input")
const username = document.querySelector(".input_info input")
const form = document.querySelector('form')
const email = document.querySelector('.email input')
const error = document.getElementById('error')
const errorPassword = document.getElementById('errorPassword')
var state = false


form.addEventListener('submit', (e)=>{
    let messages = []
    if (email.value === ''){
        messages.push('Email is required')
    }

    if (Password.value.length <= 6 ){
        messages.push('Password is too short')
    }

    if (messages.length > 0 ){
        e.preventDefault()
        errorPassword.innerHTML = messages.join(' and ')
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


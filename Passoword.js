var  myInput=document.getElementByName('passord');
var letter=document.getElementByName('letter');
var capital=document.getElementsByName('number')
myInput.onlkeyup=function{
  var lowecaseletters=/[a-z]/g
  if (myInput.value.match(lowecaseletters)){
    letter.classList.remove('invalid')
    letter.classList.add('valid')
       } else{
    letter.classList.remove('valid')
    letter.classList.add('invalid')
    }
  var upcaseletters=/[A-Z]/g
  if (myInput.value.match(upcaseletters)){
    letter.classList.remove('invalid')
    letter.classList.add('valid')
       } else{
    letter.classList.remove('valid')
    letter.classList.add('invalid')
    }
  var numbers=/[0-9]/g
  if (myInput.value.match(numbers)){
    letter.classList.remove('invalid')
    letter.classList.add('valid')
       } else{
    letter.classList.remove('valid')
    letter.classList.add('invalid')
    }
  if (myInput.value.length>=8){letter.classList.remove('invalid')
    letter.classList.add('valid')
       } else{
    letter.classList.remove('valid')
    letter.classList.add('invalid')
    }
  }
  

'use strict'

var userName = prompt('what is your name?')
  alert('Greetings ' + userName + '!')
  
var question1 = prompt("Is my name Jacob?");

    if (question1.toLowerCase() == 'yes') {
      console.log('correct!')
      alert('correct!')  
    } else {
      console.log('try again')
      alert('try again')
    } 
      
var question2 = prompt('am I a hairdresser?')
    if (question2.toLowerCase() == 'yes') {
       console.log('correct!')
       alert('correct!')
     } else {
      console.log('try again')
      alert('try again')
     }


var  question3 = prompt('have I ever been an apprentice?')
     if (question3.toLowerCase() == 'yes') {
       console.log('correct!')
       alert('correct!')
      } else {
        console.log('try again')
        alert('try again')
     }

var question4 = prompt('Am I from a small town?')
     if (question4.toLowerCase() == 'yes') {
       console.log('correct!')
       alert('correct!')
       } else {
        console.log('try again')
        alert('try again')
     }

var question5 = prompt('Do I want to be a Software Developer?')
     if (question5.toLowerCase() == 'yes'){
       console.log('correct!')
     }  else {
       console.log('try again')
       alert('try again')
     }

alert('thanks for playing' + userName  + 'have a wonderful life')

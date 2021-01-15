'use strict'

function myPage(){
var score = 0
var userName = prompt('what is your name?')
  alert('Greetings ' + userName + '!')
  
var question1 = prompt("Is my name Jacob?");

    if (question1.toLowerCase() == 'yes') {
      console.log('correct!')
      alert('correct!') 
      score++ 
    } else {
      console.log('try again')
      alert('try again')
    } 
      
var question2 = prompt('am I a hairdresser?')
    if (question2.toLowerCase() == 'yes') {
       console.log('correct!')
       alert('correct!')
          score++

     } else {
      console.log('try again')
      alert('try again')
     }


var  question3 = prompt('have I ever been an apprentice?')
     if (question3.toLowerCase() == 'yes') {
       console.log('correct!')
       score++
       alert('correct!')
      } else {
        console.log('try again')
        alert('try again')
     }

var question4 = prompt('Am I from a small town?')
     if (question4.toLowerCase() == 'yes') {
       console.log('correct!')
       score++
       alert('correct!')
       } else {
        console.log('try again')
        alert('try again')
     }

var question5 = prompt('Do I want to be a Software Developer?')
     if (question5.toLowerCase() == 'yes'){
       console.log('correct!')
       score++
     }  else {
       console.log('try again')
       alert('try again')
     }



var myAnswer = '7';
var i = 0
while ( i < 4 && question6 != myAnswer) {
  var question6 = prompt('Guess a number between 1 and 10')
  if (question6 > myAnswer) {
    alert('too high! try again')
  }
  if(question6 < myAnswer) {
    alert('too low! try again')
  }
  if (question6 === myAnswer){
    alert('correct!')
    score++
  }
  else if (i === 3){
    alert('too slow, the answer is 7')
  }
  i++
}
var arrayOfAnswers = ['practical magic', 'avatar' , 'lord of the rings' , 'bennie and june']
var correctAnswer = false
for(var j = 0; j < 6; j++) {
  var question7 = prompt('can you guess one of my top 4 favorite movies?')
  for(var k = 0; k < arrayOfAnswers.length; k++) {
    if (question7 === arrayOfAnswers[k]){
      alert('correct!') 
      correctAnswer = true
    }
  }
  if (correctAnswer === true){
    break
  }
}
alert('the correct answers were practical magic, avatar, lord of the rings, or Bennie and June')

score++



alert(' thanks for playing ' + userName  + ' you got ' + score + ' have a wonderful life')
 
myPage();
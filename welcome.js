let errorP = document.getElementById('error')
console.log(errorP)
function purchase() {
  console.log('button clicked')
  errorP.textContent = "Opps, something went wrong"
}

let age = 22

if (age < 21) {
  console.log("You can not enter the club")
} else{
  console.log("WELCOME")
}

let personAge = 100

if (personAge < 100){
  console.log("Not elegible")
} else if (personAge === 100){
  console.log("Here is your card")
} else{
  console.log("Not elegible, you have one")
}

let firstCard = 10
let secondCard =4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-id")
let sumId = document.getElementById("sum-id")
let cardId = document.getElementById("card-id")

function startgame(){
  
  cardId.textContent = "Cards: " +  firstCard + " "+ secondCard
  sumId.textContent = "Sum: " + sum
  
  if (sum <= 20){
   
    message = "No card"
    
  } else if (sum === 21){
   
    message = "Has black jack"
    hasBlackJack = true
  } else{
   
    message = "Out of game"
    isAlive = false
  }
  messageEl.textContent = message
  
 
}

function newCard() {
  let newcard = 4
  sum += newcard

  startgame()
}

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
let secondCard =11
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true
let message = ""

if (sum <= 20){
  console.log("Do you want to draw a new card")
  message = "No card"
  console.log(message)
} else if (sum === 21){
  console.log("Whoo you got a black card")
  message = "Has black jack"
  console.log(message)
} else{
  console.log("You are out of the game")
  message = "Ou of game"
  console.log(message)
}
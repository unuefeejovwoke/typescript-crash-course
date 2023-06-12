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

// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let cards = [] //[firstCard, secondCard]
let sum = 0 //firstCard + secondCard
let hasBlackJack = false
let isAlive = false //set to false
let message = ""
let messageEl = document.getElementById("message-id")
let sumId = document.getElementById("sum-id")
let cardId = document.getElementById("card-id")

let player =  {
  name : 'Joks',
  chips : '145',
}


let playerEl = document.getElementById("player-id")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {

  let randomcard = Math.floor(Math.random() * 13) + 1
  if ( randomcard ===1){
    return randomcard = 10
  } else if (randomcard > 10) {
    return randomcard = 11
  } else {
    return randomcard
  }
  

}

function startgame(){
  isAlive = true
  firstCard = getRandomCard()
  secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard

  renderGame()
}

function renderGame(){
  
  
  cardId.textContent = "Cards: "
  for (let i=0; i < cards.length; i ++){ 
    cardId.textContent += cards[i] + " "  
  }
  sumId.textContent = "Sum: " + sum
  
  if (sum <= 20){
   
    message = "Do you want to draw a new card"
    
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

  if ( isAlive === true && hasBlackJack === false){
    let newcard = getRandomCard()
    sum += newcard
    cards.push(newcard)
    console.log(cards)
  
    renderGame()
  }
  
}

let featuredposts = ['linkedln', 'instagram', 'youtube']

featuredposts.push('twitter')
console.log(featuredposts)

featuredposts.pop()
console.log(featuredposts)

for (let count = 10; count < 101; count +=10){
  console.log(count)
}

for (let i =0; i < featuredposts.length; i +=1){
    console.log(featuredposts[i])
}

let steps = [4, 6, 8, 10]

for (let step = 0; step < steps.length; step += 1){
  console.log(steps[step])
}

// let sentenceId = ['Hello', 'my', 'name', 'is' ,'ejoke']

// let greetingId = document.getElementById('sentence')

// for (let i = 0; i < sentenceId.length; i++){
//   greetingId.textContent += sentenceId[i] + ' '
// }



let player1Time =102
let player2Time = 107

function Fastestplayer() {
  if ( player1Time < player2Time){
    return player1Time
  } else if( player2Time < player1Time){
    return player2Time
  } else {
    return player1Time
  }
}

let fastestRace = Fastestplayer()
console.log(fastestRace)

function Totalrace() {
  return player1Time + player2Time
}

let raceTotal = Totalrace()
console.log(raceTotal)


// use && for and then || for or operations
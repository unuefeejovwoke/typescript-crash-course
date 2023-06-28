let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum){
    maximum = parseInt(prompt("Please enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) +1;
console.log(targetNum)

let guess = prompt("Enter your number OR type 'q' to quit")
let attempts = 1;

while (parseInt(guess) !== targetNum){
    if (guess === 'q') break;
    guess = parseInt(guess)
    
    if (guess > targetNum){
        guess = prompt("Too high, enter a new guess")
        attempts++;
    } else if( guess< targetNum){
        guess = prompt("Too low, enter a new guess")
        attempts++;
    } else{
        guess = prompt("Invlaid guess. Please enter a number or 'q' to quit")
    }
}

if (guess === "q"){
    console.log("OK, YOU QUIT")
} else{
    console.log("CONGRATS YOU WIN")
    console.log(`You got it, It took you ${attempts} guesses` )
}

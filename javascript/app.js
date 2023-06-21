random = Math.random()

if (random < 0.5){
    console.log(`Your number is ${random} and is lesser than 0.5`)
}
console.log(`Your is the number: ${random}`)

password = prompt("Please enter password")

if (password.length >= 6){
    if (password.indexOf(' ') === -1){
        console.log("Valid Password")
    } else{
        console.log("Password must not include spaces!")
    }
} else{
    console.log("Password must be more than 6 characters")
}
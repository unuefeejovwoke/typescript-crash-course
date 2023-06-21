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

const day =2;

switch(day){
    case 1:
        console.log("MONDAY")
        break
    case 2:
        console.log("TUESDAY")
        break
    case 3:
        console.log('WEDNESDAY')
        break
    case 4:
        console.log("THURSDAY")
        break
    case 5:
        console.log('FRIDAY')
        break
    case 6:
    case 7:
        console.log("WEEKEND")
        break
    default:
        console.log("I DON'T KNOW!")
}
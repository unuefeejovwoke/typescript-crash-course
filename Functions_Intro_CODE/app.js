function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

//function assignment 2
// DEFINE YOUR FUNCTION:
function rant(message) {
    for (let i = 0; i < 3; i++) {
      console.log(message.toUpperCase());
    }
  }
  
  function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
      console.log("Snake Eyes!");
    } else {
      console.log("Not Snake Eyes!");
    }
  }
  function capitalize(str) {
    if (str.length === 0) {
      return str; // Return an empty string if the input is empty
    } else {
      const firstLetter = str.charAt(0).toUpperCase(); // Get the first letter and capitalize it
      const restOfStr = str.slice(1); // Get the rest of the string after the first letter
      return firstLetter + restOfStr; // Concatenate the capitalized first letter with the rest of the string
    }
  }
  function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  function returnDay(num) {
    const daysOfWeek = [
      null, // Index 0 is null to handle numbers outside the valid range
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
  
    if (num >= 1 && num <= 7) {
      return daysOfWeek[num];
    } else {
      return null;
    }
  }
  
  totalEggs = 0;

  function Eggs(){
    totalEggs = 8;
  }

  console.log(totalEggs)
  Eggs()
  console.log(totalEggs)

  let animal = "Giant Pacific Octopus";
  function observe(){
      let animal = "Pajama Squid";
      console.log(animal);
  }
  observe();

  //task 2
let deadlyAnimal = "Blue-Ringed Octopus";
 
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
}
 
handleAnimal();
console.log(deadlyAnimal)



// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()


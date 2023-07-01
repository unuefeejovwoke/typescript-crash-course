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


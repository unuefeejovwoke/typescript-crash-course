// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

//FIRST ASSIGNMENT
const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter'];

// Remove the first element, "The Moon", from the planets array
planets.shift();

// Add "Saturn" at the very end of the planets array
planets.push("Saturn");

// Add "Mercury" as the first element in the planets array
planets.unshift("Mercury");

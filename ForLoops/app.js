// ======================================
// WITHOUT ANY LOOPS...LOTS OF REPETITION
// ======================================
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// ======================================
// OUR FIRST FOR LOOP
// ======================================

for (let num = 1; num <= 10; num += 1) {
    console.log(num);
}

// ======================================
// MORE EXAMPLES OF FOR LOOPS!
// ======================================
//odd nums
// for (let i = 1; i <= 20; i += 2) {
//     console.log(i)
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }

// DO NOT RUN THIS LOOP
// INFINITE LOOP!! BAD!!
// ================================
// ================================
// for (let i = 20; i >= 0; i++) {
//     console.log(i)
// }
// ================================
// ================================


let animals = [
    "cat",
    "dog",
    "elephant",
    "lion",
    "giraffe",
    "tiger",
    "bear",
    "monkey",
    "penguin",
    "zebra",
    "kangaroo",
    "hippopotamus",
    "snake",
    "turtle",
    "dolphin",
    "ostrich",
    "koala",
    "rhinoceros",
    "panda",
    "crocodile"
  ];

  
//   for (let i =0; i < animals.length; i ++){
//     console.log(animals[i])
//   }

for (let i = animals.length - 1; i >= 0; i --){
    console.log(animals[i])
  }

seatingAnimals = [
    ["koala",
    "rhinoceros",
    "panda",
    "crocodile"],
    ["hippopotamus",
    "snake",
    "turtle",
    "dolphin",],
    ["elephant",
    "lion",
    "giraffe",
    "tiger",]

]

for (let i = 0; i< seatingAnimals.length; i ++){
    row = seatingAnimals[i];

    console.log(`ROW #${i + 1}`)
    for(let j =0; j< row.length; j++){
        console.log(row[j])
    }
}


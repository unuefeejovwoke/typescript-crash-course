const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;

// methods assignment
// Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, area and perimeter 

// area should accept the length of a side (all sides are the same in a square) and then return the side squared. 

// perimeter should accept the length of a side and return that side multiplied by 4.

// square.area(10) //100
// square.perimeter(10) //40
const square = {
    area(side){
        return side * side
    },
    perimeter(side){
        return side * 4
    },
}

square.area(10)
square.perimeter(10)

// Define an object called hen.  It should have three properties:

// name should be set to 'Helen'

// eggCount should be set to 0

// layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // 2

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg(eggCount) {
        this.eggCount++;
        return "EGG";
    }
};
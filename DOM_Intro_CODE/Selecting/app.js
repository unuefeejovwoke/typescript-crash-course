// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }
// replace images

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}

// getbyid assignment
// Write your code in here:
const image = document.getElementById('unicorn');
const heading = document.getElementById('mainheading')

//get element by queryselector assignment
// Your code goes in here!
const doneTodos = document.querySelectorAll('.done');
const checkbox = document.querySelector('input[type=checkbox]')

// Get the container div element
const container = document.getElementById('container');


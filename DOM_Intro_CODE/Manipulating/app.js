const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


//queryselector assigment
// YOUR CODE GOES IN HERE:
const span = document.querySelector('b');
span.innerHTML = "Disgusting";

// The url you need: 'https://devsprouthosting.com/images/chicken.jpg'

const imageElement = document.querySelector('img');

        // Change the source attribute using setAttribute()
imageElement.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');

        // Change the alt text attribute using setAttribute()
imageElement.setAttribute('alt', 'chicken');

const text = document.getElementById("container");
text.style.textAlign = 'center';

const img = document.querySelector("img");
img.style.width = "150px";
img.style.borderRadius = "50%";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spans = document.querySelectorAll('h1 span');

// Iterate over spans and assign colors
spans.forEach((span, index) => {
  span.style.color = colors[index]; // Assign color based on index
});

// WRITE YOUR CODE IN HERE:

// Get all <li> elements
const listItems = document.querySelectorAll('li');

// Iterate over list items and toggle the 'highlight' class
listItems.forEach(li => {
  li.classList.toggle('highlight');
});


// Create and append 100 new button elements
for (let i = 0; i < 100; i++) {
    const button = document.createElement('button');
    button.textContent = `Button ${i + 1}`; // Set button text
    container.appendChild(button); // Append button to container
  }
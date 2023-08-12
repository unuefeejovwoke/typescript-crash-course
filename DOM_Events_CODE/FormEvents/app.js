

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}


var form = document.getElementById('grocery-form');
var productList = document.getElementById('list');

// Listen for the form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values
    var productName = document.getElementById('product').value;
    var quantity = document.getElementById('qty').value;

    // Create a new list item
    var listItem = document.createElement('li');
    listItem.textContent = quantity + ' ' + productName;

    // Append the new list item to the list
    productList.appendChild(listItem);

    // Reset the input values
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
});

const input = document.getElementById('username');
const h1 = document.getElementById('h1');

input.addEventListener('input', (e) =>{
    
    if( input.value.trim() === ''){
        h1.innerHTML = "Enter Your Username";
    } else{
        h1.innerHTML = "Welcome," + " " + input.value;
   
    }
    
})

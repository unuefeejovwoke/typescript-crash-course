let coundId = document.getElementById('counter-id')

let count = 0

function increment() {
    count = count +1 
    coundId.innerText = count
}

// Function to save the counter and display the last stored count
function saveCounter() {
    const lastCount = count;
    document.getElementById("lastCount").textContent = lastCount;
    count = 0; // Reset the counter to 0
    document.getElementById("counter-id").textContent = count;
  }

  // Function to clear the counter
  function clearCounter() {
    count = 0;
    document.getElementById("counter-id").textContent = count;
  }
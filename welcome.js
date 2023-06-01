let errorP = document.getElementById('error')
console.log(errorP)
function purchase() {
  console.log('button clicked')
  errorP.textContent = "Opps, something went wrong"
}
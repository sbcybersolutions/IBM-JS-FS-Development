let count = 0; //Initialize count to zero

function increaseCount(){
    count++; // Increment count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML page

}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function resetCount() {
    count = 0; // Reset count to zero
    displayCount(); // Update the display
    alert("Follower count has been reset"); // Show alert message
}
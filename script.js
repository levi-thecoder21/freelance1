// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
  // Check if the button with id "subbtn" exists on the page
  var subButton = document.getElementById("subbtn");
  if (subButton) {
      // Add the event listener to the "subbtn" button
      subButton.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent form submission
          
          // Ensure the message element exists and set the message
          var message = document.getElementById("message");
          if (message) {
              message.innerText = "Thanks for subscribing!";
              
              // Clear the message after 5 seconds
              setTimeout(function() {
                  message.innerText = "";
              }, 5000);
          } else {
              console.error("Message element not found.");
          }
      });
  } else {
      console.error("Subscribe button not found.");
  }
});

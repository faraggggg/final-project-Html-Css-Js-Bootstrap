console.log("sub.js is loaded!");

document.getElementById("subscribeBtn").addEventListener("click", function () {
  console.log("Button clicked");
  document.getElementById("subscriptionMessage").style.display = "block";
});

console.log("JavaScript loaded");  

document.getElementById("sendBtn").addEventListener("click", function () {
  console.log("Button clicked");  
  document.getElementById("confirmationMessage").style.display = "block";
});



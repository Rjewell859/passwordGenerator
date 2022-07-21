// Assignment code here


function generatePassword(){
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var length = window.prompt("Enter a number between 8-128 for password length:");
  if (length > 128) {
    window.alert("Password must be under 129 characters long.");
  }
  else if (length < 8) {
    window.alert("Password must be over 8 characters long.");
  }
  else {
    window.alert("Next step.");
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

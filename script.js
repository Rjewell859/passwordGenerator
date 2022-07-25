function generatePassword() {

  // Arrays to store numbers, lower and upper case letters, and special characters.

  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", ",", "<", ".", "?", "/"];

  // Array to hold all chosen characters.

  var passwordArray = [];

  // String to contain the password as it is built.

  var buildPassword = "";

  // Prompt to set user specified password length. 

  var length = window.prompt("Enter a number between 8-128 for password length:");

  // Ensures user cannot continue if a number outside of the range is entered.

  if (length > 128) {
    window.alert("Password must be under 129 characters long.");
  } else if (length < 8) {
    window.alert("Password must be over 8 characters long.");
  } else {

    // Series of if statements to select users choice of characters and store it in the passsword array.

    if (window.confirm("Would you like numbers?")) {
      passwordArray = passwordArray.concat(numbers);
    }
    if (window.confirm("Would you like lower-case letters?")) {
      passwordArray = passwordArray.concat(lowerCase);
    }
    if (window.confirm("Would you like upper-case letters?")) {
      passwordArray = passwordArray.concat(upperCase);
    }
    if (window.confirm("Would you like special characters?")) {
      passwordArray = passwordArray.concat(special);
    }
    if (passwordArray.length == 0) {
      window.alert("You have selected zero characters, restarting...");
      generatePassword();
    }

    // This for loop creates the password, it will continue to iterate until reaching the specified password length. Each time it goes around it finds a random number
    // within the range of the password array, rounds it down, and uses that number as an index
    // in the array to then concatenate the character to buildPassword.

    for (var i = 0; i < length; i++) {
      var index = Math.floor(Math.random() * (passwordArray.length))
      buildPassword = buildPassword.concat(passwordArray[index]);
    }
    return buildPassword;
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
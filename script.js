// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt ("What is the length of the password?")
  console.log (passwordLength)
  // Check if password length is between 8 and 128 characters
  
  // Ask user what kind of characters they want (lowercase, uppercase, numeric, special)
  // There should be at least one character type selected

  // Create random password using aforementioned criteria
  // return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

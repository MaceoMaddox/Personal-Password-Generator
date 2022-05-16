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
  var lowerChars = "abcdefghijklmnopqrstuvwxyz"
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var passwordLength = prompt ("What is the length of the password?")
  console.log (passwordLength)
  // Check if password length is between 8 and 128 characters
  if (passwordLength < 8) {
    alert ("Password too short")
    return "Password too short"
  }
  
  if (passwordLength > 128) {
    alert ("Password too long")
    return "Password too long"
  }
  // Ask user what kind of characters they want (lowercase, uppercase, numeric, special)
  var hasLower = confirm ("Do you want lowercase characters?")

  console.log (hasLower)
  var chosenCharacters = ""
  if (hasLower) {
  chosenCharacters = chosenCharacters + lowerChars
  }
  
  var hasUpper = confirm ("Do you want uppercase characters?")

  console.log (hasUpper)
  if (hasUpper) {
    chosenCharacters = chosenCharacters + upperChars
    }
  // There should be at least one character type selected
  var password = "example"
  // Create random password using aforementioned criteria
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

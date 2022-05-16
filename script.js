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
  var numbers = "123456789"
  var special = "~!@#$%&*_-+"

  // Check if password length is between 8 and 128 characters

  var passwordLength = prompt ("What is the length of the password?")
  console.log (passwordLength)

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
  var chosenCharacters = ""
  if (hasUpper) {
    chosenCharacters = chosenCharacters + upperChars
  }
  
  var hasNumbers = confirm ("Do you want numbers?")

  console.log (hasNumbers)
  var numbers = ""
  if (hasNumbers) {
    chosenCharacters = chosenCharacters + numbers
  }

  var hasSpecial = confirm ("Do you want special characters?")

  console.log (hasSpecial)
  var numbers = ""
  if (hasSpecial) {
    chosenCharacters = chosenCharacters + special
  }
  
 // There should be at least one character type selected

  var password = chosenCharacters

  // Create random password using aforementioned criteria

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

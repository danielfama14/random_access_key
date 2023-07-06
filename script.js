// Assignment code here


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

// Generates prompt for password lenght
function generatePassword() {
  var length = prompt("Enter the lenght of the password (between 8 and 128 characters):");
  length = parseInt(length);
  
  // Determines lenght parameters
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  }

  // Prompt for types of character
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  // Determines that at least one of each type of character is used
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
    alert("You must select at least one character type.");
    return "";
  }

  // Determine characters for each type/variable set
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// links selected character sets
var selectedChars = "";
if (includeLowercase) {
  selectedChars += lowercaseChars;
}
if (includeUppercase) {
  selectedChars += uppercaseChars;
}
if (includeNumeric) {
  selectedChars += numericChars;
}
if (includeSpecialChars) {
  selectedChars += specialChars;
}

// Generates random password
var password = "";
for (var i = 0; i < length; i++) {
  var randomIndex = Math.floor(Math.random() * selectedChars.length);
  password += selectedChars[randomIndex];
}

return password;
}



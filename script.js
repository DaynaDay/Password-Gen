var specChar = "Special Characher";
var numChar = "Character Length";
var lowChar = "Lowercase Character";
var upChar = "Uppercase Character";

var charType = ["specChar", "numChar", "lowChar", "upChar"];

var generateBtn = document.querySelector("#generate");

prompt ="Would you like to use special charachers?";

if (specChar {
  return "Choose!";
}
else {
  return "Try again";
}
// make this whole function equalt o if its less than 7 and greater than 128 it shouldnt work.

prompt = "How long do you want your password to be! (Between 8-128)";
if (numChar < 128) {
  return  "Perfect!";
}

if else (numChar > 7){
  return "Try again";
}


prompt = "Would you like to use lowercase characters?";

if (lowChar) {
  return "Yes Please!";
}
else {
  return "Next";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

// function copyToClipboard() {
//   // BONUS 
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

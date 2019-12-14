var specChar = document.querySelector( "!@#%^&*");
var numChar = document.querySelector("Character Length");
var lowChar = document.querySelector("abcdefghijklmnopqrstuvwxyz");
var upChar = document.querySelector("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

var charType = ["specChar", "numChar", "lowChar", "upChar"];

var generateBtn = document.querySelector("#generate");

var specChar = prompt ("Would you like to use special charachers?");

 {
if {
  var specChar = ",@,#,$,%.^,&,*".split(" ");
  return "Choose from !,@,#,$,%.^,&,*.";
}
else {
  return "Try again";
}}

// make this whole function equalt o if its less than 7 and greater than 128 it shouldnt work.

prompt = "How long do you want your password to be! (Between 8-128)";
if (numChar < 129) {
  return  "Perfect!";
}

if else (numChar > 7){
  return "Try again";
}

// combine the prompts for lower and uppercase letters ...look into while statements.
prompt = "Would you like to use lowercase characters?";

if (lowChar) {
  return "Yes Please!";
}
else {
  return "Next";
}


// Write password to the #password input

// var specChar = document.querySelector( "!@#%^&*");
// var numChar = document.querySelector("Character Length");
// var lowChar = document.querySelector("abcdefghijklmnopqrstuvwxyz");
// var upChar = document.querySelector("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

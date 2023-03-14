var charLength = 8;
var choiceArr = [];

var specialChar =['&','@','#','!','%','^','^','*','(',')','~','.',',','?','{','}','[',']'];
var lowerCass = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];



var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // I would generatePassword based on the prompts
}

function getPrompts(){
  charlength = parseInt(prompt("How many character would you like for your password? (8 -128 characters"));

  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
      alert("Character length has to be a number, 8 - 128 digits. Please try again.");
      return false;
  }

  (confirm("Would you perfer lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCass);
  }
  if (confirm("would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCase)
}
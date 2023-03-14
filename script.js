var charLength = 8;
var choiceArr = [];

var lowerCass = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCass = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specialChar =['&','@','#','!','%','^','^','*','(',')','~','.',',','?','{','}','[',']'];



var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var accuratePrompts = getPrompts();  //either true or false
    var passwordText = document.querySelector("#password");
    
    if (accuratePrompts) {
      var nwPassword = generatePassword();
      passwordText.value = nwPassword;
     } else {
      passwordText.value = "";

     }
}
    

function generatePassword() {
  //will generatePassword based on prompts
  // The for loop below is created to allow the user to enter any number of characters for their password that more than 8 and less than 128.
  var password = "";
  for(var i = 0; i < charLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts(){
  choiceArr =[];

  charLength = parseInt(prompt("How many characters would you like for your password? (8 -128 characters"));

  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
      alert("Character length has to be a number, 8 - 128 digits. Please try again.");
      return false;
  }

  if (confirm("would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCass);

  }
   if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCass);

   }

   if (confirm("would you like special character in your password?")) {
    choiceArr = choiceArr.concat(specialChar);
   }

   if (confirm("would you like numbers in your password")) {
    choiceArr = choiceArr.concat(numbers);

   }
   return true;

}  

 

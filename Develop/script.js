// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = finalPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//DOM Elements
var lengthEL = prompt("Length of password?")
var uppercaseEL = confirm("Include Uppercase Letters?")
var lowercaseEL = confirm("Include lowercase letters?")
var numbersEL = confirm("Include Numbers?")
var symbolsEL = confirm("Include Symbols?")

var resultEL = document.getElementById('result')
var generateEL = document.getElementById('generate')
var clipboardEL = document.getElementById('clipboard')

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

//generate event listen

generateEL.addEventListener("click", () => {
  var length = parseInt(lengthEl.value);
  var hasLower = lowercaseEL.checked;
  var hasUpper = uppercaseEL.checked;
  var hasNumber = numbersEL.checked;
  var hasSymbol = symbolsEL.checked;

  resultEL.innertext = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

//generate password function
function generatePassword(lower, upper, number, symbol, length) {

  var generatedPassword = '';
  var typesCount =lower + upper + number + symbol;
  var typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item =>Object.values(item)[0]);

  if(typesCount === 0) {
    return '';
  }

  for(let i =0; i < length; i += typesCount) {
    typesArray.forEach(type => {
      var funcName = Object.keys(type)[0]

      generatedPasword += radnomFunc [funcName]
    });
  
  }

  var finalPassword = generatedPassword.slice(0, length);
  document.getElementById("#password").innerHTML = finalPassword;
}

//generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>?,.'
    return symbols[Math.floor(Math.random) * symbols.length];
  
}
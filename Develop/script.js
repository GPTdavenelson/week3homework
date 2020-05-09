// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//DOM Elements
var resultEL = document.getElementById('result')
var lengthEL = document.getElementById('length')
var uppercaseEL = document.getElementById('uppercase')
var lowercaseEL = document.getElementById('lowercase')
var numbersEL = document.getElementById('numbers')
var symbolsEL = document.getElementById('symbols')
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
  var = hasLower = lowercaseEL.checked;
  var = hasUpper = uppercaseEL.checked;
  var = hasNumber = numbersEL.checked;
  var = hasSymbol = symbolsEL.checked;

  resultEL.innertext = generatePasswork(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

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
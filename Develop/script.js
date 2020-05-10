var lengthEL = document.getElementById('length');
var uppercaseEL = document.getElementById('uppercase');
var lowercaseEL = document.getElementById('lowercase');
var numbersEL = document.getElementById('numbers');
var symbolsEL = document.getElementById('symbols');
var resultEL = document.getElementById('password');
var generateEL = document.getElementById('generate');

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEL.addEventListener("click", () => {
  var length = parseInt(lengthEL.value);
  var hasLower = lowercaseEL.checked;
  var hasUpper = uppercaseEL.checked;
  var hasNumber = numbersEL.checked;
  var hasSymbol = symbolsEL.checked;

  resultEL.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

});

function generatePassword(lower, upper, number, symbol, length) {

  let generatedPassword = '';
  var typesCount = lower + upper + number + symbol;
  var typesArray = [{lower}, {upper}, {number}, {symbol}].filter 
  (
    item => Object.values(item)[0]
  );

 if(typesCount === 0) {
    return '';
  }

  for(let i =0; i < length; i += 1) {
    typesArray.forEach(type => {
      var funcName = Object.keys(type)[0];

      generatedPassword += randomFunc[funcName]();
    });
  }
  var finalPassword = generatedPassword.slice(0, length);

  return finalPassword
}

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
    return symbols[Math.floor(Math.random() * symbols.length)];
  
}
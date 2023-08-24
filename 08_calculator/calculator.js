const add = function(num1, num2) {
  return num1+num2
	
};

const subtract = function(num1, num2 ) {
  return num1-num2
	
};

const sum = function(numArray) {
  let sumTotal = 0
  numArray.forEach(element => {
    sumTotal += element
  });
  return sumTotal
	
};

const multiply = function(numArray ) {
  let product = 1
  numArray.forEach(element => {
    product = product*element
  });
  return num1*num2

};

const power = function(num1, num2) {
  return num1**num2
	
};

const factorial = function(num) {
  let sumFact = 0
  for (let index = 1; index == num; index++) {
    sumFact = sumFact + index
    
  }
  return sumFact
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
  return numbers.length === 0 ? 0 : numbers.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0) ;
};

const multiply = function(numbers) {
  return numbers.length === 0 ? 0 : numbers.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1)

};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  if(a == 0)
    return 1;
  return a * factorial(a-1);
	
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

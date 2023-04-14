const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
	if(a == []){
    return 0;
  }else{
    return a.reduce((sum,x) => sum + x,0);
  }
};

const multiply = function(a) {
  let numMultiply = a[0];
  for(let i = 1; i < a.length; i++){
    numMultiply *= a[i];
  }
  return numMultiply;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	if(a == 0){
    return 1;
  }else{
    let numFact = a;
    for(let i = a-1; i > 0; i--){
      numFact *= i;
    }
    return numFact;
  }
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

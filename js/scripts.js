var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// var calculateBMI = function(weight, height) {
//   return weight / (height * height) ;
// }
//
// var test;
// var weight = parseInt(prompt("Weight in kg:"));
// var height = parseInt(prompt("Height in m:"));
//
// alert(calculateBMI(weight, height));

var convertTemp = function(tempC) {
  return tempC * 1.8 + 32
};

var userTemp = parseInt(prompt("Enter a temperture in Celsius"));

alert(convertTemp(userTemp));

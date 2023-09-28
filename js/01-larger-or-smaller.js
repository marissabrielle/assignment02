// ENTER TWO INT WITH 2 DIFFERENT PROMPTS
let num1 = prompt('Enter first number')
let num2 = prompt('Enter second number')

// CHECK FOR LARGER NUMBER
if (num1 > num2) {
    document.write(num1 + ' is larger than ' + num2)
  } 
  
  else if (num1 < num2) {
    document.write(num2 + ' is larger than ' + num1)
  } 
  
  else {

    document.write(num1 + ' is equal to ' + num2)
  }
/* Homework 3
   Exercise 3 JavaScript code
*/

console.log("Mihir's Output from Homework 3 Exercise 3");
let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("Enter the second number"));
if (num1 > 0 && num2 > 0) {
   console.log(`Addition = ${num1+num2}`);
   console.log(`Subtraction = ${num1-num2}`);
   console.log(`Multiplication = ${num1*num2}`);
   console.log(`Division = ${num1/num2}`);
   console.log(`Modulo = ${num1%num2}`);
} else {
   console.log("Invalid Input");
}

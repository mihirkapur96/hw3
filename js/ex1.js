/* Homework 3
   Exercise 1 JavaScript Code
*/

console.log("Mihir's Output from Homework 3 Exercise 1");
let name = prompt("Enter your name:");
   console.log(`Hello, ${name}`);
let units = Number(prompt("Enter number of units completed"));
if (30>=units && units>0) {
   console.log("Your Grade Standing is Freshman");
} else if (60>=units && units>=31) {
   console.log("Your Grade Standing is Sophomore");
} else if (90>=units && units>=61) {
   console.log("Your Grade Standing is Junior");
} else {
   console.log("Your Grade Standing is Senior");
}
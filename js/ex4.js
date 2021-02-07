/* Homework 3
   Exercise 4 JavaScript code
*/

console.log("Mihir's Output from Homework 3 Exercise 4");
let test = ""
for (let i=1 ; i <= 3; i++) {
   test= prompt("Enter the Password");
   if( test == "secret") {
      console.log (`You have entered the correct password after ${i} attempts`);
      break;
   } else if ( test !== "secret"){
      console.log (" Enter the Password again");
   }

   if (i == 3) {
      console.log (`Your Account is locked! You failed to enter the correct password ${i} attempts`);
   }
}


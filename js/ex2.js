/* Homework 3
   Exercise 2 JavaScript code
*/

console.log("Mihir's Output from Homework 3 Exercise 2");
let day= prompt("Enter the day");
switch (day) {
case "sun" :
   console.log("You entered: Sunday");
   console.log("The following day is: Monday");
   break;
case "mon" :
   console.log("You entered: Monday");
   console.log("The following day is: Tuesday");
   break;
case "tue" :
   console.log("You entered: Tuesday");
   console.log("The following day is: Wednesday");
   break;
case "wed" :
   console.log("You entered: Wednesday");
   console.log("The following day is: Thursday");
   break;
case "thu" :
   console.log("You entered: Thursday");
   console.log("The following day is: Friday");
   break;
case "fri" :
   console.log("You entered: Friday");
   console.log("The following day is: Saturday");
   break;
case "sat" :
   console.log("You entered: Saturday");
   console.log("The following day is: Sunday");
   break;
   default:
      console.log("Not a valid day type");
}
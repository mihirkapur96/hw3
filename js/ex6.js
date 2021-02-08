/* Homework 3
   Exercise 6 JavaScript code
*/

console.log("Mihir's Output from Homework 3 Exercise 6");
let hours = Number(prompt("Enter the hour value"));
let minutes = Number(prompt("Enter the minutes value"));
let seconds = Number(prompt("Enter the seconds value"));

// validation
if (hours >= 24 ) {
   console.log("Invalid Hour Input");
}
if (minutes > 60){
   console.log ("Invalid Minutes Input");
}
if (seconds > 60){
   console.log ("Invalid Seconds Input");
}
// after validation
if (hours <= 23 && minutes <= 59 && seconds <= 59) {
   console.log(`Time input:${hours}:${minutes}:${seconds}`);
   seconds++;
   if (seconds==60) {
      seconds = 0;
      minutes++;
   }

   if (minutes == 60) {
      minutes = 0;
      hours++;
   }

   if (hours == 24) {
      hours = 0;
   }
   console.log(`One second later:${hours}h:${minutes}m:${seconds}s`);
}
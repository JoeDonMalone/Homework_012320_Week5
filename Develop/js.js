// 
// 
// 
// 
// 
// 
// 


var currentDate = $("#currentDay")
// var currentDate = document.querySelector("#currentDay")
currentDate.text(moment().format("dddd, MMMM Do YYYY"))
// currentDate.textContent = moment().format("dddd, MMMM Do YYYY")
// console.log(currentDate)
// = 
// nineHourViewTime = moment().subtract(9, 'hours').toDate()
var now = moment().toDate()
var fourHoursBack = moment().subtract(4, 'hours').toDate()
var fourHoursForward = moment().add(4, 'hours').toDate()
console.log(fourHoursBack);
console.log(now);
console.log(fourHoursForward);

// set Local Storage
//Create the content layout for the page - Complete
//Create the script necessary to dynamically add more rows, via jQuery 3 past, 1 current, 3 future
// assign colors based off of time (if hour-of-day >past: Gray, if(HOD)==present: red else==future: green, )
// It does not need to be a dynamic calendar whos rows scroll by as the clock ticks. Simply when the page opens, it needs to:
//  1) Compare the current time, 
//  2) Determine color of the row based off of time of day
//  3) set the values of the middle rows, according to their {hourOfDayTask":Description}

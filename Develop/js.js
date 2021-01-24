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
var threeHoursBack = moment().subtract(3, 'hours').toDate()
var threeHoursForward = moment().add(3, 'hours').toDate()
console.log(threeHoursBack);
console.log(now);
console.log(threeHoursForward);
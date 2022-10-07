$(document).ready(function() {
var formattedCurrentDayName = moment().format('dddd')
var formattedCurrentDay = moment().format('MMM Do YYYY, h:mm a');
var formattedHour = moment().format('h');
var hourArr = $('.hourNumbers');
$('#currentDay').text(formattedCurrentDayName);
$('#currentDate').text(formattedCurrentDay);
console.log(formattedHour);
console.log( $('.hourNumbers')[0].innerHTML);

for (let i = 0; i < hourArr.length; i++) {


if (formattedHour == hourArr[i].innerHTML) {
$(`.textInput${[i]}`).addClass('present');
} 
else if (formattedHour > hourArr[i].innerHTML) {
$(`.textInput${[i]}`).addClass('past');
}
else if (formattedHour < hourArr[i].innerHTML) {
$(`.textInput${[i]}`).addClass('future');
}

}
























});
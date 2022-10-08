$(document).ready(function() {
var formattedCurrentDayName = moment().format('dddd')
var formattedCurrentDay = moment().format('MMM Do YYYY, h:mm a');
var formattedHour = moment().format('H');
$('#currentDay').text(formattedCurrentDayName);
$('#currentDate').text(formattedCurrentDay);



for (let i = 0; i < $('.textInput').length; i++) {
if ($('.textInput').eq(i).data('value') > formattedHour) {
($('.textInput')).eq(i).addClass('future')
}
else if ($('.textInput').eq(i).data('value') < formattedHour) {
($('.textInput')).eq(i).addClass('past')
}
else if ($('.textInput').eq(i).data('value') == formattedHour) {
($('.textInput')).eq(i).addClass('present')
}
}





 












$('.saveBtn').click(function () {
$('.textInput').append(localStorage.getItem('timeLog'));
// inputStorageArr.push(timeLog);
// localStorage.setItem("timeLog", JSON.stringify(timeLog));
// console.log(timeLog);
});





localStorage.getItem('Key').append($(this.siblings('.textInput')));

});
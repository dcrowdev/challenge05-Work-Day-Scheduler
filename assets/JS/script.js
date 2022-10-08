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
var time = $(this).attr('id');
var value = $(this).siblings('.textInput').val();
if(value) {
localStorage.setItem(time, value);
}
});


$('.textInput9').val(localStorage.getItem("9"));
$('.textInput10').val(localStorage.getItem("10"));
$('.textInput11').val(localStorage.getItem("11"));
$('.textInput12').val(localStorage.getItem("12"));
$('.textInput13').val(localStorage.getItem("13"));
$('.textInput14').val(localStorage.getItem("14"));
$('.textInput15').val(localStorage.getItem("15"));
$('.textInput16').val(localStorage.getItem("16"));
$('.textInput17').val(localStorage.getItem("17"));

});
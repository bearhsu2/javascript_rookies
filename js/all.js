var thisMonth = 7;
var myMonth = 11;

var isBirthday = thisMonth == myMonth;
document.getElementById('birthdayId').textContent = isBirthday;


var totalPeople = 2;
var nowPeople = 1;

var notAllArrived = totalPeople != nowPeople;
document.getElementById('peopleId').textContent = notAllArrived;

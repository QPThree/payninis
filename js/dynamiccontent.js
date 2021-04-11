var userName = prompt("Who is hungry?");

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting='Good Evening, '+userName;
} else if (hourNow > 12){
    greeting = 'Good Afternoon,' +userName;
} else if (hourNow > 0){
    greeting = 'Good Morning, ' +userName;
} else {
    greeting = 'Welcome,'  +userName;
}
document.write('<h3>' + greeting + '</h3>')


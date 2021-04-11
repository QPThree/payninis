//variables declared
var userName = prompt("Who is hungry?");
var today = new Date();
var hourNow = today.getHours();
var day = today.getDay();
var greeting;
var meal;
var ad;

var specialmeallist = ['Pizza', 'Wings', 'Tacos', 'Margaritas', 'Reuben', 'Pancakes', 'Ice Cream Sunday'];

//determins greeting
if (hourNow > 18) {
    greeting='Good Evening, '+userName;
} else if (hourNow > 12){
    greeting = 'Good Afternoon,' +userName;
} else if (hourNow > 0){
    greeting = 'Good Morning, ' +userName;
} else {
    greeting = 'Welcome,'  +userName;
}

if (hourNow > 16){
    meal = 0;
} else if (hourNow > 11){
    meal = 1;
} else if (hourNow > 4){
    meal = 2;
}

//switch will 1. find what time it is, 2. calculate which menu would be adequate for that time, and 3. return
// a printed ad for that menu

switch (meal) {
    case 0:
        ad = 'You should check out our dinner menu!';
        break;
    case 1:
        ad = 'You should check out our lunch menu!';
        break;
    case 2:
        ad = 'You should check out our breakfast menu!';
        break;
}

//finds greeting id in HTML and assigns greeting
e =document.getElementById('greeting');
e.innerHTML = greeting+ '<br>'+ad;


//Prints special for the day
var specialmeal;
specialmeal = specialmeallist[day];

switch (day){
    case 0:
        day = 'Sunday';
        //specialmeal = 'Wings';
        break;
    case 1:
        day = 'Monday';
        specialmeal = 'pizza';
        break;
    case 2:
        day = 'Tuesday';
        specialmeal = 'pizza';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

specialid = document.getElementById('special');
specialid.innerHTML = day+'s Special is: '+specialmeal;


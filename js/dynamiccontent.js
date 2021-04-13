var today = new Date();

//will give greeting to user with their entered name
function giveGreeting(){
// variables
    var userName = prompt("Who is hungry?", "Hungry Person");
    var hourNow = today.getHours();
    var greeting;
    

    if (hourNow > 18) {
        greeting='<h3 id=\'greeting\'>Good Evening, '+userName+'</h3>';
    } else if (hourNow > 12){
        greeting = '<h3 id=\'greeting\'>Good Afternoon,'+userName+'</h3>';
    } else if (hourNow > 0){
        greeting = '<h3 id=\'greeting\'>Good Morning, '+userName+'</h3>';
    } else {
        greeting = '<h3 id=\'greeting\'>Welcome, '+userName+'</h3>';
    }

    return greeting;
}




///stuff for special of the day function
function getSpecial(){
    
    var hourNow = today.getHours();
    var ad;
    var meal;
    var day = today.getDay();
    var specialmeallist = ['Pizza', 'Wings', 'Tacos', 'Margaritas', 'Reuben', 'Pancakes', 'Ice Cream Sunday'];
    var specialmeal;
    specialmeal = specialmeallist[day];
    
    if (hourNow > 16){
        meal = 0;
    } else if (hourNow > 11){
        meal = 1;
    } else if (hourNow > 4){
        meal = 2;
    }
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
    switch (day){
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
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

    return '<h3 id=\'special\'>'+day+'s Special is: '+specialmeal+'</h3>';

}   



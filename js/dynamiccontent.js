

// giveGreeting function will 
//1. Prompt user for their name
//2. Personalize the greeting with name entered by user.  'hungry person' as default
//3. Get time of day, and give greeting dependant on the current
//4. Return greeting to be used in html as an h3 tag
function giveGreeting(){

    var today = new Date();
    var userName = prompt("Who is hungry?", "Hungry Person");
    var hourNow = today.getHours();
    var greeting;
    
    if (hourNow > 18) {
        greeting='<h3 id=\'greeting\'>Good Evening, '+userName+'<br> You should check out our dinner menu!</h3>';
    } else if (hourNow > 12){
        greeting = '<h3 id=\'greeting\'>Good Afternoon,'+userName+'<br> You should check out our lunch menu!</h3>';
    } else if (hourNow > 0){
        greeting = '<h3 id=\'greeting\'>Good Morning, '+userName+'<br> You should check out our breakfast menu!</h3>';
    } else {
        greeting = '<h3 id=\'greeting\'>Welcome, '+userName+'</h3>';
    }

    return greeting;
}

//getSpecial function will
//1. Tell users what the days special is
//2. Special will be stored in an array and change each day
//3. 
function getSpecial(){
    var today = new Date();
    var day = today.getDay();
    var specialmeallist = ['Pizza', 'Wings', 'Tacos', 'Margaritas', 'Reuben', 'Pancakes', 'Ice Cream Sunday'];
    var specialmeal;
    specialmeal = specialmeallist[day];
    
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



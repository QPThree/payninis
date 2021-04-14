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
    var specialmeal = specialmeallist[day];
    
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

//Quiz to access secret Menu
//User is given an alert taht quiz is beginning
//5 questions will be asked, if less than 4 are correct,user doesn't pass
//4 Correct answers will open our secret menu
function promptQuiz(){

    alert("Welcome to our Weekly Quiz!.  Pass the test to access our best deals!.  4 Correct gets you the secret menu.");
    
    var correct = 0;
    var answer;

    while(correct < 4){
        correct = 0;
        answer = prompt("How many Super Bowls has Tom brady won?", "Hint: a lot");
        if (answer == '7'){
            correct = correct + 1;
            console.log(correct);
        }
        answer = prompt("Who's the current governor of Vermont?");
        if (answer == 'Phil Scott'){
            correct = correct + 1;
            console.log(correct);
        }
        answer = prompt("What year was Reagan born?");
        if (answer == '1911'){
            correct = correct + 1;
            console.log(correct);
        }
        answer = prompt("How many states were in the US in 1911?");
        if (answer == '46'){
            correct = correct + 1;
            console.log(correct);
        }
        
        answer = prompt("Go to the source for this answer");
        if (answer == 'sike'){
            correct = correct + 1;
            console.log(correct);
        }
        if (correct < 4){
            alert("Back to the beginning!");
        }
    }
    alert('Congratulations! Here is our special menu!  Go Pats.');
    window.open("https://www.applebees.com/en/menu");
}

//User rating
//User will submit number 1-5
//Rating will display that number for 'stars'
function userRating(){
    var element = document.getElementById("ratingstars");
    var rating = prompt("How would you rate us?  Type in an integer up to 5!")
    while (rating != '1' && rating!= '2' && rating!= '3' && rating != '4' && rating != '5'){
        rating = prompt("Must be number between 1 and 5");
    }
    for (i = 0; i < rating; i++){
        element.innerHTML = element.innerHTML + "<img src=images/star.png height = 50 width = 50>"+(i+1);
    }

}
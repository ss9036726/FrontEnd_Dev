var greetings = "";

// Conditional And Comparision 

//var highScore = 400;
//
//var myScore = 400;

//if (myScore < highScore) {
//    greetings = "OOPS! You just missed the High Score. AHHHHH!";
//} else if (myScore == highScore) {
//    greetings = "You just matched the High Score.";
//} else { 
//    greetings = "HURRAY! You just got a High Score.";
//}


// Switch and case in javaScript

//switch(new Date().getDay()){
//    case 0:
//        greetings = "I don't move on Sunday";
//        break;
//    case 1:
//        greetings = "Monday : Go to Work";
//        break;
//    case 2:
//        greetings = "Tuesday : Chill out with Family";
//        break;
//    case 3:
//        greetings = "Wednesday : Focus on learning";
//        break;
//    case 4:
//        greetings = "Thursday : Analyze the outcome";
//        break;
//    case 5:
//        greetings = "Friday : Last day of work";
//        break;
//    case 6:
//        greetings = "Saturday : Party Night";
//        break;
//}

// For Loop in Java Script

var harley = ["Street750","StreetBob","FatBoy","StreatGuide","Iron883"]

var i;

for (i = 0; i < harley.length;i++) {
    greetings += harley[i] + "<br>" ;
}

document.getElementById("test").innerHTML = greetings;
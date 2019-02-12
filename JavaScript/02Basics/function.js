// Functions in JavaScript 

// "use strict";

// function highScore(currentScore){
//     var newHighScore = 2 * currentScore;
//     return newHighScore;
// }

// console.log(highScore(4));


// var newHighScore = function(currentScore){
//     var newHighScore = 2 * currentScore;
//     return newHighScore;
// }

// console.log(newHighScore(10));


// var csGo = function(currentScore){
//     return{
//         console.log(this),
//         console.log(2 * currentScore)
//     }
// }(15);


var Harley = {
    name : 'Street750',
    color : 'Blue',

    getBugdetForCustomStuff : function(a){
        return ("You need to lower budget",
        console.log(this.name))
    },
    shoutOut : [
        { Kelvin : "A cool black Monster  with 750cc"},
        { sam: "Heavy Bike with full Power"}
    ]
}

Harley.getBugdetForCustomStuff(8000);
Harley.shoutOut;
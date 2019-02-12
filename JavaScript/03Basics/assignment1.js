let calculatePercentage = function(currentMarks,totalMarks){
    let result = (currentMarks / totalMarks)*100;
    
    if(result >= 90){
        console.log("Your grade is A+");
    } else if(result >= 80 ){
        console.log("Your grade is A");
    } else if(result >= 70){
        console.log("Your grade is B+");
    } else if(result >= 60){
        console.log("Your grade is B");
    } else if(result >= 50){
        console.log("Your grade is C");
    } else if(result >= 45){
        console.log("Your grade is D");
    } else if(result >= 35){
        console.log("Your grade is P");
    } else {
        console.log("Your are fail in current Examination.");
    }
}

calculatePercentage(428,500);


// String Functions

var sampleString = 'Let\'s start our Journey with JavaScript';

console.log(sampleString.indexOf('start'));
console.log(sampleString.lastIndexOf('statr'));
console.log(sampleString.slice(3,10));

// substring(start,end) --> substring() cannot accept negative indexes.
// substr(start,length) --> second parameter specifies the length of the extracted part.

console.log(sampleString.replace('Journey','Adventure'));
console.log(sampleString.toLowerCase());
console.log(sampleString.toUpperCase());


var name1 = 'John';
var name2 = new String('John');

if(name1 == name2){
    console.log("Result is true");
} else {
    console.log("Result is not true");
}

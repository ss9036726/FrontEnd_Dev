"use strict";

const numbers = ['one','two','three','four','five','six'];

// numbers[2] = 'Something';
// console.log(numbers);

//Start Operations 

// Shift is used to delete the first value or shift the first value in the array 

numbers.shift();
console.log(numbers);

// Unshift is used to add the value in the front of the array 

numbers.unshift('Something');
console.log(numbers);


// End Operations

// Pop is used to delete the last value in the array 

numbers.pop();
console.log(numbers);

// push is used to add the value in the last position of an array 

numbers.push("Seven");
console.log(numbers);

// Middle Operations

// splice is used to delete the element in the specific position it consist three parameter one is position , second is how many value to be deleted and which value to be inseted at that point

numbers.splice(2,1,'SomeThing');
console.log(numbers);

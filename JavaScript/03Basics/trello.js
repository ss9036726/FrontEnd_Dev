// Example 

// console.log("Days :- ");

// const days = ['Mon','Tue','Wed','Thr','Fri','Sat'];

// // For Each loop is JavaScript

// days.forEach(function(day,index){
//     console.log(`Day Start with ${index+1} -- ${day}`);
// });

// // First Assignment

// console.log("\n Months :- ")

// const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// months.forEach(function(month,index){
//     console.log(`${index+1} is : ${month}`);
// });


// // Second Assignment

// console.log("\n A Simple TODO List is :- ")

// const todos = ['Watching movies','Listening Songs','Study','Travelling','Exploring the new Things'];

// todos.forEach(function(todo,index){
//     console.log(`${index+1} is  ${todo}`);
// })


const myTodos = [];

myTodos.push('Watching movie');
myTodos.push('Do College Work');
myTodos.push('Listening Songs');

myTodos.forEach(function(todo , index){
    console.log(`Your task no. ${index+1} is : ${todo}`);
    console.log("\n");
});

const Todos = [];

Todos.push('Watching movie');
Todos.push('Do College Work');
Todos.push('Listening Songs');

for(index = 0 ; index < Todos.length;index++){
    console.log(Todos[index]);
}

Todos.unshift('Watching movie');
Todos.unshift('Do College Work');
Todos.unshift('Listening Songs');

for(index = 0 ; index < Todos.length;index++){
    console.log(Todos[index]);
}




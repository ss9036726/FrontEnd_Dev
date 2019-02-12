// Normal Fuction in JavaScript 

const sayHello = function(name){
    return "Hey There " + name + "!";
}

console.log(sayHello("Shubham"));

//Simple Arrow Function in Java Script 

const sayHey = (name) =>  `Hey There ${name}!`;

console.log(sayHey('Shubham'));

const myTodos = [{
    title: 'Buy Bread',
    isDone: true,
},{
    title: 'Go to Gym',
    isDone: false,
},{
    title: 'Record Youtube Videos',
    isDone: true,
}]

const findTodo = (myTodos,title) => {
    const titleFind = myTodos.find((todo) =>todo.title.toLowerCase() === title.toLowerCase());
    return titleFind;
}

let printFind = findTodo(myTodos,'Go To Gym');

console.log(printFind);

const thingsDone = myTodos.filter((todo) => todo.isDone === true)

console.log(thingsDone);
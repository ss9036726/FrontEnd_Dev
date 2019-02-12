const myTodos = ['Buy Bread','Go to Gym','Record youtube videos'];
console.log(myTodos.indexOf('Buy Bread'));


const newTodo = [{
    title: 'Buy Bread',
    toDone: false,
},{
    title: 'Go to Gym',
    toDone: false,
},{
    title: 'Record youtube videos',
    toDone: true,
}];

const index = newTodo.findIndex(function(todo,index){
    console.log(todo);
    return todo.title === 'Go to Gym';
});

console.log(index);

// Method One 

const findTodo = function(myTodos, title){
    const index = myTodos.findIndex(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase();
    })
    return myTodos[index];
}

console.log(findTodo(newTodo,'Buy bread'));

// Method Two 

const findTodos = function(myTodos, title){
    const findTitle = myTodos.find(function(todo,index){
        return todo.title.toLowerCase() === title.toLowerCase();
    });
    return findTitle;
}

let printMe = findTodos(newTodo,'Go to Gym');
console.log(printMe);
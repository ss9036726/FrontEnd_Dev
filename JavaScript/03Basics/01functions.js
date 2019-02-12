// let sayHello = function(){
//     console.log("Greetings Message for user");
//     console.log("Hello User");
// }

// sayHello();

let sayHello = function(name){
    console.log(`Greetings message for ${name}`);
    console.log(`Hey ${name}`);
}

sayHello('Shubham');


let fullName = function(firstName,lastName){
    console.log('\n');
    console.log("Welcome to my Blog");
    console.log(`Happy to see you, ${firstName}  ${lastName}`);
    console.log('\n');
}

fullName('Shubham','Sharma');

let myAdder = function(num1,num2){
    return num1+num2;
}

console.log(myAdder(10,20));

let myMultiplier = function(num1,num2){
    return num1*num2;
}

console.log(myMultiplier(10,20));
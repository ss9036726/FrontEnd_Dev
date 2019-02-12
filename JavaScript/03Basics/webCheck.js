let userEmail = 'shubham123';
let password = '123456789';

let userCheck = function(myString){
    if((myString.includes(123)) && (myString.length >= 6)){
        return true;
    }
    return false;
}

let passCheck = function(pass){
    if((pass.includes(1234)) && (pass.length >= 8)){
        return true;
    } 
    return false;
}

console.log(userCheck(userEmail));
console.log(passCheck(password));

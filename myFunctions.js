"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(6);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hello I am converting It to upper case");
function signUpUser(name, email, isPaid) {
    console.log(name);
    console.log(email);
    console.log(isPaid);
}
signUpUser("hello", "bye@gmail.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("hello", "bye@gmail.com");

// Kiểu number
var age = 47;
var PI = 3.14;
console.log('Age: ', age);
console.log('PI: ', PI);
// Kiểu string
var name = 'Dien';
console.log('Name: ', name);
// Kiểu boolean
var flag = true;
console.log("Flag: ", flag);
// Kiểu any
var data = 5;
console.log('Data: ', data);
// Kiểu unknown
var result = 'hi';
console.log('Result: ', result);
// Kiểu array
var arr = [1, 2];
console.log('Array: ', arr);
// Kiểu tuple
var pair = ['one', 1];
console.log('Pair: ', pair);
// Kiểu enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
})(Role || (Role = {}));
;
console.log('Role: ', Role.User);
// Kiểu object
var o = { a: 'sv1', b: 2 };
console.log('Object: ', o);
// Kiểu function
function f(x) {
    return "abc and ".concat(x);
}
console.log(f(19));
var func_great = function (name, age) {
    return "Welcome to ".concat(name, ", age ").concat(age);
};
console.log(func_great('Dien', 20));
// Kiểu null và undefined
var v = undefined;
var n = null;
console.log('v: ', v);
console.log('n: ', n);

// Kiểu number
let age: number = 47;
let PI: number = 3.14;

console.log('Age: ',age);
console.log('PI: ',PI);

// Kiểu string
let name: string = 'Dien';

console.log('Name: ',name);

// Kiểu boolean
let flag: boolean = true;

console.log("Flag: ",flag);

// Kiểu any
let data: any = 5;

console.log('Data: ', data);

// Kiểu unknown
let result: unknown = 'hi';

console.log('Result: ', result);

// Kiểu array
let arr: number[] = [1,2];

console.log('Array: ',arr);

// Kiểu tuple
let pair: [string,number] = ['one',1];

console.log('Pair: ',pair);

// Kiểu enum
enum Role {Admin, User};

console.log('Role: ', Role.User);

// Kiểu object
let o: {a: string, b: number} = {a: 'sv1', b: 2};

console.log('Object: ',o);

// Kiểu function
function f(x: number):string{
    return `abc and ${x}`;
}

console.log(f(19));

const func_great=(name: string, age: number) => {
    return `Welcome to ${name}, age ${age}`;
}

console.log(func_great('Dien', 20));

// Kiểu null và undefined
let v: undefined = undefined
let n: null = null

console.log('v: ',v);
console.log('n: ',n);


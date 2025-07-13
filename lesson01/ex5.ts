// Hàm và kiểu trả về, tham số
// 1. Hàm có khai báo tham số và kiểu trả về

function multiply(a: number, b: number): number {
    return a*b
}

// 2. Hàm kiểu void (Hàm không định kiểu, hàm không có giá trị trả về)

function printHello(name: string):void {
    console.log('Hello ',name)
}

// 3. Hàm kiểu never

function throwError(message: string):never {
    throw new Error(message);
}

// 4. Hàm nặc danh / arrow function

const sum = (a: number, b: number): number => {
    return a+b;
}

// 5. Hàm có tham số tùy chọn và mặc định

function greet(name: string, title?: string): string {
    return `Hello ${title ?? ''} ${name}`;
}

function multiply1(a:  number, b: number = 2): number {
    return a*b;
}

// 6. Hàm sử dụng rest parameters
function total(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// 7. Khai báo kiểu cho hàm (function type)
let devide: (x: number, y: number) => number;

devide = function (a, b) {
    return a/b;
}

// 8. Hàm sử dụng type alias hoặc interface
type MathFunc = (a: number, b: number) => number;

const subtract: MathFunc = (x, y) => x - y;

interface MathOp {
    (a: number, b: number): number;
}

// 9. Hàm generic - kiểu dữ liệu động
function identity<T> (arg: T) {
    return arg;
}

let output1 = identity<string>('hello');
let output2 = identity<number>(123);

// Chu vi hinh chu nhat
function chuvi(a: number, b: number): number {
    return (a+b)*2;
}

// Viết hàm nhận 1 mảng và trả về giá trị lớn nhất
function maxValue(...numbers: number[]): number {
    return numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
}

// Viết generic function đảo ngược mảng bất kỳ
function reverseArray<T> (arr: T[]): T[] {
    return arr.slice().reverse();
}
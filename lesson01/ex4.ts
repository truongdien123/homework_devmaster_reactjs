// Các kiểu dữ liệu nâng cao
// Union type
let value:string | number
value = 'Truong Dien'
console.log('string: ', value);
value = 1234
console.log('number: ',value);

// Alias - Bí danh (Định danh kiểu)
type UserId = string | number
let id1:UserId = 'Dien'
let id2:UserId = 123
console.log('User id 1:', id1);
console.log('User id 2:', id2);

// interface
interface Person{
    name: string;
    age: number;
    email?: string //thuộc tính tùy chọn
}
let user1: Person = {
    name: 'Dien',
    age: 10
}

let user2: Person = {
    name: 'Hoan',
    age: 20,
    email: 'dincabcs@gmail.com'
}

console.log('User 1: ', user1);
console.log('User 2: ', user2);

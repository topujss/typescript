"use strict";
/**
 * @description TypeScript type learn
 */
// let fullName: string = 'John Doe';
// let age: number = 20;
// let isAdmin: boolean = false;
// let sentence = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next year. I'm ${
//   isAdmin ? 'an' : 'not an'
// } admin.`;
// age = 21;
// console.log(sentence);
/**
 * @description TypeScript union type learn
 */
// let devs: boolean | number | string;
// devs = 'true';
// console.log(devs);
/**
 * @description TypeScript function learn
 * to use optional parameter, give it a default value
 * use void type when a function returns nothing like console.log
 * use never type when a function never completes like throwing error and infinite loop
 */
// const voidLearn = (name: string, age: number): void => {
//   console.log(`My name is ${name}, I'm ${age} years old.`);
// };
// myAge('work', 29);
// const neverLearn = (name: string, age: number): never => {
//   while (true) {
//     console.log(`My name is ${name}, I'm ${age} years old.`);
//   }
// };
/**
 * @desc TypeScript array and tuple array learn
 * can't push different type of data type in array
 */
// const car: string[] = ['Audi', 'Mercedes', 'Toyota', 'Honda'];
// car.push(30);
// console.log(car);
// tuple
// const devs: [string, number, boolean] = ['John Doe', 20, true];
// console.log(devs);
/**
 * @desc TypeScript object learn
 * @optional use ? to make a property optional
 * @readonly to make a property not assignable
 * @separateType use when there is lots of properties in the object
 */
// type Car = {
//   brand: string;
//   model: string;
//   year?: number;
//   isUsed?: boolean;
// };
// interface CarInterface {
//   brand: string;
//   model: string;
//   year?: number;
//   isUsed?: boolean;
// }
// const myCar: CarInterface = {
//   brand: 'Audi',
//   model: 'A4',
//   year: 2020,
// };
// myCar.year = 2022;
// console.log(myCar.year);
/**
 * @desc TypeScript enum learn
 */
var skills;
(function (skills) {
    skills["MERN"] = "MERN stack";
    skills["GO"] = "GO stack";
    skills["PYTHON"] = "PYTHON stack";
    skills["RUBY"] = "RUBY stack";
})(skills || (skills = {}));
const skill = skills.RUBY;
console.log(skill);
// type narrowing
const info = (val) => {
    if (typeof val === 'string') {
        return val.toUpperCase();
    }
    return val + 482;
};
console.log(info('my work is good'));

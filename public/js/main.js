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
 * @Union in TypeScript learn
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
// enum skills {
//   MERN = 'MERN stack',
//   GO = 'GO stack',
//   PYTHON = 'PYTHON stack',
//   RUBY = 'RUBY stack',
// }
// const skill = skills.RUBY;
// console.log(skill);
// // type narrowing
// const info = (val: string | number) => {
//   if (typeof val === 'string') {
//     return val.toUpperCase();
//   }
//   return val + 482;
// };
// console.log(info('my work is good'));
/**
 * @desc TypeScript generic type learn
 * @genericType use when you don't know what type of data will be passed in the function
 */
// const genericLearn = <generic>(val: generic): generic => {
//   return val;
// };
// genericLearn('John Doe');
/**
 * @class in TypeScript learn
 * @public anyone can, default
 * @protected inside the class and it's child class
 * @private only inside the person class
 */
// abstract class Person {
//   public name: string;
//   private age: number;
//   protected isAdmin: boolean;
//   constructor(name: string, age: number, isAdmin: boolean) {
//     this.name = name;
//     this.age = age;
//     this.isAdmin = isAdmin;
//   }
//   protected showInfo(): void {
//     console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
//   }
// }
// class Member extends Person {
//   constructor(name: string, age: number, isAdmin: boolean) {
//     super(name, age, isAdmin);
//   }
//   public showInformation(): string {
//     return `${this.name} is ${this.isAdmin} years old.`;
//   }
// }
// const person = new Person('John Doe', 20, true);
// console.log(person);
// console.log(person.showInfo());
// to stop from using instance of a class
// abstract class Car {}
// const car = new Car();
/**
 * @interface in TypeScript learn
 * it can return function too
 */
// interface User {
//   name: string;
//   age: number;
//   isAdmin: boolean;
//   skill: string[];
//   ageCount(): void;
// }
// interface Apps {
//   open(): void;
//   error(): never;
// }
// abstract class online implements User, Apps {
//   public name: string = 'asha';
//   public age: number = 20;
//   public isAdmin: boolean = true;
//   public skill: string[] = ['MERN', 'GO', 'PYTHON'];
//   public ageCount(): void {
//     console.log(this.age);
//   }
//   public open(): void {
//     console.log('open');
//   }
//   public error(): never {
//     throw new Error('error');
//   }
// }
// end of class

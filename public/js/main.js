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
class online {
    constructor() {
        this.name = 'asha';
        this.age = 20;
        this.isAdmin = true;
        this.skill = ['MERN', 'GO', 'PYTHON'];
    }
    ageCount() {
        console.log(this.age);
    }
    open() {
        console.log('open');
    }
    error() {
        throw new Error('error');
    }
}
// end of class

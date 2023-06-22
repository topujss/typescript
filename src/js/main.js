"use strict";
/** Basic to know before
 * => when there is config file just command in terminal: tsc -w
 * => never use 'any' type unless needed cuz it's like javascript type.
 * => when using typeScript always use explicit type not implicit.
 */
class Road {
    constructor() {
        this.name = 'salaman st';
        this.money = 84224;
        this.dirt = 84;
        this.isOpen = true;
    }
    work() { }
    path() {
        return false;
    }
    drain() {
        return 'working';
    }
}
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

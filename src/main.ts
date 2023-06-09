/** Basic to know before
 * => when there is config file just command in terminal: tsc -w
 * => never use 'any' type unless needed cuz it's like javascript type.
 * => when using typeScript always use explicit type not implicit.
 */

/**
 * @desc TypeScript type learn
 */
// let fullname: string = `toquir ahmed topu`;
// let age: number = 30;
// let skill: string = 'software developer';
// let isSkilled: boolean = false;

// const sentence = `My name is ${fullname} and i am ${age} years old. I am a ${skill}. I am a ${
//   isSkilled ? 'skill' : 'exploration'
// } person.`;
// console.log(sentence);

/**
 * @Union dataType learn in TypeScript learn
 */
// let devs: string | boolean;
// devs = 'work';
// console.log(devs);

/**
 * @void_and_never_Function_learn in TypeScript
 * - to use optional parameter, give it a default value
 * - use void when nothing returns ex: console.log
 * - use never when never completes ex: throwing error and infinite loop
 */
// const voidLearn = (name: string, age: number): void => {
//   console.log(`My name is ${name}, I'm ${age} years old.`);
// };
// voidLearn('toquir ahmed topu', 30);

// const neverLearn = (name: string, age: number): never => {
//   throw new Error('Nothing implemented yet');

//   while (true) {
//     console.log(`My name is ${name}, I'm ${age} years old.`);
//   }
// };

/**
 * @array_and_tuple learn in TypeScript
 * - can't push other than declared type in array
 * - array destructure: let [val1, val2] = arrayName
 * - to swap variables type has to be same: [val1, val2] = [val2, val1]
 * - can spread too: let [val1, ...rest] = arrayName
 */
// const car: (string | number)[] = ['Audi', 'Mercedes', 'Toyota', 'Honda'];
// car.push('bmw');
// console.log(car);

// const devs: [string, number, boolean] = ['toquir ahmed', 84, true];
// let [first, ...rest] = devs;
// first = 'toquir ahmed topu';
// rest[0] = 42;
// console.log(rest);

/**
 * @object learn in TypeScript
 * - use ? when unsure about that value in type
 * - readonly can't write data
 * - `type alias` use when there is lots of properties in the object
 */
// const object: { readonly name: string; age: number; isLogin?: boolean } = {
//   name: 'toquir ahmed',
//   age: 42,
//   isLogin: true,
// };
// object.isLogin = false;
// console.log(object);

// type Car = {
//   readonly brand: string;
//   model: string;
//   year?: number;
//   isUsed?: boolean;
//   car: {};
// };
// interface CarInterface {
//   brand: string;
//   model: string;
//   year?: number;
//   isUsed?: boolean;
//   car: {
//     name: string;
//     age: number;
//   };
// }
// const myCar: CarInterface = {
//   brand: 'Audi',
//   model: 'A4',
//   year: 2020,
//   car: {
//     name: 'bmw',
//     age: 28,
//   },
// };
// myCar.year = 2022;
// console.log(myCar);

/**
 * @enum_and_type_narrowing learn in TypeScript
 */
// enum skills {
//   MERN = 'MERN stack',
//   GO = 'GO stack',
//   PYTHON = 'PYTHON stack',
//   RUBY = 'RUBY stack',
// }
// const skill = skills.MERN || skills.GO;
// console.log(skill);

// type narrowing
// const info = (val: number | string) => {
//   if (typeof val === 'string') return val.charAt(0);
//   return val / 482;
// };
// console.log(info('844'));

/**
 * @Generic type learn in TypeScript
 * @genericType use when you don't know what type of data will be passed in the function
 */
// const genericLearn = <G>(val: Array<G>): Array<G> => {
//   return val;
// };
// console.log(genericLearn([true]));

/** 2nd part
 * @class in TypeScript learn
 * @public anyone can use, default
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

// class Car {
//   make: string;
//   model: string;
//   private year: number;
//   protected isSold: boolean;

//   constructor(make: string, model: string, year: number, isSold: boolean) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.isSold = isSold;
//   }
// }
// const car = new Car('bmw', 'm3', 2022, true);

// class Dealer extends Car {
//   constructor(make: string, model: string, year: number, issold: boolean) {
//     super(make, model, year, issold);
//   }

//   protected dealer(): string {
//     return 'im from dealer extends car class';
//   }
// }

// const dealer = new Dealer('bmw', 'm3', 2933, false);
// console.log(dealer.dealer());

/**
 * @interface in TypeScript learn
 * - it can return function too
 */
interface RoadInterface {
  name: string;
  money: number;
  dirt: number;
  isOpen: boolean;
  work(): void;
}

interface SideInterface {
  path(): boolean;
  drain(): string;
}

class Road implements RoadInterface, SideInterface {
  public name: string = 'salaman st';
  public money: number = 84224;
  public dirt: number = 84;
  public isOpen: boolean = true;

  work(): void {}
  path(): boolean {
    return false;
  }
  drain(): string {
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

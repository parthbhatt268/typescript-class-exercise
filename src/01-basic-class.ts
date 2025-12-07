/**
 * Exercise 01: Basic Class
 * – Create a `Person` class with:
 *    • Properties: `name: string`, `age: number`
 *    • A constructor to initialize those props
 *    • A method `greet()` that returns a string:
 *       "Hi, I'm {name} and I'm {age} years old."
 *
 * Then, below the class definition, instantiate a `Person`
 * and `console.log` the output of `greet()` so you can
 * see it in your terminal.
 */

export default class Person {
  public name: string;
  public age: number;
  public readonly createdAt: Date; // ⬅️ new readonly field

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.createdAt = new Date(); // ⬅️ can assign here ONLY HERE, CANNOT BE RE-ASSIGNED LATER
  }

  greet(): string {
    return `Hi I am ${this.name} and my age is ${this.age}`;
  }
}

// Using this class we will create its instances

const demo = new Person("Alice", 20);
console.log(demo.greet());
console.log("Created at:", demo.createdAt);

// This would be an error now:
// demo.createdAt = new Date(); // ❌ Cannot assign to 'createdAt' because it is a read-only property.

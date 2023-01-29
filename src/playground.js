////////// 033 ES6 Spread Syntaks for Arrays

// const fruits = ["Apple", "Banana", "Orange"];
// const vegetables = ["Cucunber", "Radish"];

// console.log([...fruits, ...vegetables]);

////////// 046 JavaScript Objects, Properties, and Methods

// const developer = {
//   salary: 100000,
//   experience: 4.5,
//   techStack: ["Vue", "HTML", "CSS"],
//   lookingForWork: true,
//   doubleSalary() {
//     this.salary = this.salary * 2;
//     this.lookingForWork = false;
//   },
// };

// console.log(developer);
// developer.doubleSalary();
// console.log(developer);

////////// 054 Multiple Describe Blocks

// export const evenOrOdd = (number) => {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };

// export const multiply = (num1, num2) => num1 * num2;

////////// test

// playground.test.js

// import { evenOrOdd, multiply } from "@/playground.js";

// describe("basic math", () => {
//   it("adds two numbers", () => {
//     expect(1 + 1).toBe(2);
//   });
// });

// describe("evenOrOdd function", () => {
//   describe("when number is even", () => {
//     it("indicates the number is even", () => {
//       expect(evenOrOdd(4)).toBe("Even");
//     });
//   });
//   describe("when number is even", () => {
//     it("indicates the number is odd", () => {
//       expect(evenOrOdd(3)).toBe("Odd");
//     });
//   });
// });

// describe("multiply", () => {
//   it("multiplies two numbers together", () => {
//     expect(multiply(2, 3)).toBe(6);
//   });
// });

////////// test

////////// 075 The ES6 map Method on an Array

// const numbers = [1, 2, 3, 4, 5];
// const names = ["BOBBY", "SALLY", "DEBBIE"];

// brand new array

// const squares = numbers.map((number) => number * number);
// console.log(squares);

// console.log(
//   names.map((name) => {
//     return name.toLocaleLowerCase();
//   })
// );

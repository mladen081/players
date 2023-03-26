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

////////// 109 ES6 Review: Dynamic Object Keys

// const favoriteFood = "sushi";

// const favoriteFoodMeat = "pig";

// const goodFoods = {
//   [favoriteFood]: true,
//   [favoriteFoodMeat]: false,
// };

// console.log(goodFoods);

////////// 135 The setTimeout and setInterval and clearInterval Functions

// setTimeout(() => {
//   console.log("I will print 2 seconds after the program starts!!! :)");
// }, 2000);

// const interval = setInterval(() => {
//   console.log("I will print every 2 seconds :)");
// }, 2000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 10000);

////////// 220 Install Axios NPM Package

// const axios = require("axios");

// url = "https://test-api-hz1d.onrender.com/books";

// const fetchJobsV1 = () => {
//   axios.get(url).then((response) => {
//     console.log(response.data);
//   });
// };

// const fetchJobsV2 = async () => {
//   response = await axios.get(url);
//   console.log(response.data);
// };

// fetchJobsV2();

////////// 235 The slice Method

// const a = ["Tuna", "Salmon", "Yellowtail", "Eel", "Shrimp", "Octopus", "Uni"];

// const b = a.slice(3);

// console.log("    Niz a: " + a + "\n");

// console.log("    Niz b: " + b);

////////// 313 Sets

// Arrays - order // Objects - association // Set uniqueness

// const numbers = new Set();
// numbers.add(5);
// numbers.add(10);
// numbers.add(15);
// numbers.add(5);
// numbers.add(25);
// console.log(numbers);

////////// 324 filter Method on an Array

// const numbers = [1, 3, 5, 7, 2, 9, 11, 6];

// console.log(numbers.filter((number) => number > 6));

// const jobs = [
//   { title: "Angular Developer", organization: "Microsoft" },
//   { title: "Programmer", organization: "Google" },
//   { title: "Developer", organization: "Microsoft" },
// ];

// console.log(jobs.filter((job) => job.organization === "Microsoft"));

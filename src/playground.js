////////// 033 ES6 Spread Syntaks for Arrays

// const fruits = ["Apple", "Banana", "Orange"];
// const vegetables = ["Cucunber", "Radish"];

// console.log([...fruits, ...vegetables]);

////////// 046 JavaScript Objects, Properties, and Methods

const developer = {
  salary: 100000,
  experience: 4.5,
  techStack: ["Vue", "HTML", "CSS"],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2;
    this.lookingForWork = false;
  },
};

console.log(developer);
developer.doubleSalary();
console.log(developer);

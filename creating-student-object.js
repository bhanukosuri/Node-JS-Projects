const productOfTwo = (a, b) => a * b;

console.log(productOfTwo(3, 5));

const student = {
  name: "Bhanu",
  age: 33,
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

console.log(student);

student.greet();

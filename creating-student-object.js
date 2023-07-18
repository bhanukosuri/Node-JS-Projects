class Student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }

  setPlacementAge(minPlacementAge) {
    return (minMarks) => {
      if (this.age > minPlacementAge && this.marks > minMarks) {
        console.log(this.name + " is ready for placements");
      } else {
        console.log(this.name + " is not ready for the placements");
      }
    };
  }
}

const Bhanu = new Student("Bhanu", 33, 70);
const Prakash = new Student("Prakash", 20, 35);

Bhanu.setPlacementAge(24)(60);
Prakash.setPlacementAge(24)(60);

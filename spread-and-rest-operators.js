// Spread Operator - copying data
const obj1 = { key1: 1 };

const obj2 = { ...obj1 };

if (obj2 === obj1) {
  console.log("same objects");
} else {
  console.log("different objects");
}

// Spread Operator - copying and editing data

const obj3 = { key1: 1, key2: 2 };

const obj4 = { ...obj3, key1: 1000 };

console.log(obj3);

console.log(obj4);

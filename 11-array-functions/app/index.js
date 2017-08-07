let isPassing = (value) => {
  return value >= 60;
};

let scores = [33, 42, 53, 85, 18, 57, 86, 92, 75];

// filter method
// Type: 1
let result = scores.filter(isPassing);
console.log(result);  // [85, 86, 92, 75]

// Type: 2
let resultB = scores.filter(element => element >= 60);
console.log(resultB);  // [85, 86, 92, 75]

// find method
let resultC = scores.find(element => element >= 60);
console.log(resultC); // 85

// forEach method will just loop through all the array elements
scores.forEach(element => {
  console.log(element);
});

// You can use reduce(), some(), keys(), values() etc. methods as well.
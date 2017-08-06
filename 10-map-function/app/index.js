let points = [1, 2, 3];
let pointsA = [1, 2, 3];
let pointsB = [1, 2, 3];
let pointsC = [1, 2, 3];

// Type: 1
let addOne = function(elem) {
  return elem + 1;
};
points = points.map(addOne);
console.log(points);  // [2, 3, 4]

// Type: 2
let addOneA = (elem) => {
  return elem + 1;
};
pointsA = pointsA.map(addOneA);
console.log(pointsA);  // [2, 3, 4]

// Type: 3
pointsB = pointsB.map(element => {
  return element + 1;
});
console.log(pointsB);  // [2, 3, 4]

// Type: 4
pointsC = pointsC.map(element => element + 1 );
console.log(pointsC);  // [2, 3, 4]

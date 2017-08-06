function run(...b) {
  let a = [1, 2, 3, ...b];
  return a;
};

console.log(run(4, 5, 6)); // 1, 2, 3, 4, 5, 6
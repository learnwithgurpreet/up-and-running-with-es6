function run() {
  // Initial value of myArray
  const myArray = [1, 2];
  console.log(myArray);  // 1, 2

  // myArray = [1];  // This code will gives you error, since variables declared with `cost` keyword can't overwritten with assignment (=) operator

  myArray.push(3);  // You can push new values into your existing array
  console.log(myArray)  // 1, 2, 3
  
};

run()
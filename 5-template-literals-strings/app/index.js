function run() {
  // ES5 example
  var a = 'Hello';
  var b = 'World';
  var c = a + ' ' + b;
  console.log(c);  // Hello World

  // ES6 example
  let d = `Hello ${b}`;
  let e = `${a} World`;
  console.log(d);  // Hello World
  console.log(e);  // Hello World
  
};

run()
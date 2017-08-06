// Note: To run this code, I have to remove babel preset from package.json file.

this.a = 10;
let print = function () {
  // Normal example of which shows local scope of `this` object.
  this.a = 20;
  console.log('this.a', this.a);  // this.a 20
};

print();

let printES6Arrow = () => {
  // ES6 based arrow functions are anonymous and they don't bind their own `this`. It uses its parent `this` object.
  console.log('this.a from printES6Arrow method', this.a);  // this.a from printES6Arrow method 10
};

printES6Arrow();
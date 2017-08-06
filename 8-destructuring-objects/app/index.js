function run() {
  let magic = true;
  let power = 9;

  console.log(magic, power);  // true 9

  let ranger = {magic: false, power: 10};
  ({magic, power} = ranger);

  console.log(magic, power);  // false 10
};

run();
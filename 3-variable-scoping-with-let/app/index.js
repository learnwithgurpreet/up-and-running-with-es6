function run() {
  // Initial value of b
  let b = 2;
  console.log(b);  // 2

  {
    // Here, b is private within this block
    let b = 3;
    console.log(b);  // 3
  }

  console.log(b)  // 2
};

run()
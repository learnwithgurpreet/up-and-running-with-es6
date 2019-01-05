// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X) {
  var output = '',
    space = ' ',
    pattern = '#';
  for(var loop = X; loop > 0; loop--) {
    if(loop === 1) {
      output += space.repeat(loop-1).concat(pattern.repeat(X-(loop-1)));
    } else {
      output += space.repeat(loop-1).concat(pattern.repeat(X-(loop-1))) + '\n';
    } 
  }
  return output;
}

// console.log(solution(10));
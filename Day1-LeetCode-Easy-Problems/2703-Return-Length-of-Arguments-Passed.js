// 2703. Return Length of Arguments Passed - https://leetcode.com/problems/return-length-of-arguments-passed/

var argumentsLength = function (...args) {
  return args.length;
};

console.log(argumentsLength({}, null, "3"));
console.log(argumentsLength(5));

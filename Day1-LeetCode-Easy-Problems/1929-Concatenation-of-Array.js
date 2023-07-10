// 1929. Concatenation of Array - https://leetcode.com/problems/concatenation-of-array/

// Approach 1: Using [...] is spread syntax - allowing iterable to be expanded in places where zero or more elements (for array literals) are expected.

function getConcatenation(nums) {
  return [...nums, ...nums];
}

console.log(getConcatenation([1, 2, 1]));

// Approach 2: using concat function

function getConcatenation1(nums) {
  return nums.concat(nums);
}

console.log(getConcatenation1([1, 2, 1]));

// Approch 3: Using push() and leveraging spread syntax

function getConcatenation2(nums) {
  nums.push(...nums);
  return nums;
}

console.log(getConcatenation2([1, 2, 1]));

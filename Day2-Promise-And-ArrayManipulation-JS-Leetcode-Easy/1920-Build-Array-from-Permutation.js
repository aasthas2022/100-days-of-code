// 1920. Build Array from Permutation - https://leetcode.com/problems/build-array-from-permutation/

// Approach 1: Using for and push()
function buildArray1(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[nums[i]]);
  }
  return result;
}

console.log(buildArray1([0, 2, 1, 5, 3, 4]));

// Approach 2: Using for (slight modification of 1) and push()
function buildArray2(nums) {
  let result = [];
  for (value in nums) {
    result.push(nums[nums[value]]);
  }
  return result;
}

console.log(buildArray2([0, 2, 1, 5, 3, 4]));

// Approach 3: Using for (slight modification of 1) and without using push()
function buildArray3(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = nums[nums[i]];
  }
  return result;
}

console.log(buildArray3([0, 2, 1, 5, 3, 4]));

// Approach 4: Using map(), Ref : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
function buildArray4(nums) {
  return nums.map((_, i) => nums[nums[i]]);
}

console.log(buildArray4([0, 2, 1, 5, 3, 4]));

// Approach 5: using from(), Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
function buildArray5(nums) {
  return Array.from(nums, (_, i) => nums[nums[i]]);
}

console.log(buildArray5([0, 2, 1, 5, 3, 4]));

// Approach 6: Using forEach()
function buildArray6(nums) {
  nums.forEach((elem, i) => (nums[i] = nums[nums[i]]));
  return nums;
}

console.log(buildArray6([0, 2, 1, 5, 3, 4]));

// Approach 7: Using reduce()  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
function buildArray7(nums) {
  return nums.reduce((acc, _, i) => {
    acc[i] = nums[nums[i]];
    return acc;
  }, []);
}

console.log(buildArray7([0, 2, 1, 5, 3, 4]));

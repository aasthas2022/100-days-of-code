// 1. Two Sum - https://leetcode.com/problems/two-sum/

// Approach 1 : Brute Force approach - Using 2 for loop
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([3, 2, 3], 6));

// Approach 2: Slightly optimized version of approach 1

function twoSum2(nums, target) {
  var numNeeded = {};
  for (let i = 0; i < nums.length; i++) {
    if (numNeeded[nums[i]] !== undefined) {
      return [numNeeded[nums[i]], i];
    } else {
      numNeeded[target - nums[i]] = i;
    }
  }
  return [];
}

console.log(twoSum2([2, 7, 11, 15], 9));

// Approach 3: using some() - Ref : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

function twoSum3(nums, target) {
  let result = [];
  nums.some((num1, i) => {
    return nums.slice(i + 1).some((num2, j) => {
      if (num1 + num2 === target) {
        result = [i, i + j + 1];
        return true;
      }
    });
  });

  return result;
}

console.log(twoSum3([2, 11, 7, 15], 9));

// New learning from approach 3: some() method returns true if at least one element in the array satisfies the provided testing function. It stops iterating over the array as soon as it finds the first element that satisfies the function. If no elements satisfy the function, it returns false.

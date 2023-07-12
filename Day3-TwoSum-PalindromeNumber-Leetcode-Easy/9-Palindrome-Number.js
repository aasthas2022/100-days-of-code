// 9. Palindrome Number : https://leetcode.com/problems/palindrome-number/

// Approach 1: Using reversing logic by converting int to string and using split(), reverse() and join()
function isPalindrome(x) {
  var reverseX = x.toString().split("").reverse().join("");
  if (x == reverseX) {
    return true;
  }
  return false;
}

console.log(isPalindrome(121));

// Approach 2: Using every(), ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
function isPalindrome2(x) {
  var xAsArray = x.toString().split("");
  return xAsArray.every(
    (val, index) => val == xAsArray[xAsArray.length - index - 1]
  );
}

console.log(isPalindrome2(121));

// Approach 3: Using for loop
function isPalindrome3(x) {
  const xAsArray = x.toString().split("");
  for (let i = 0; i < xAsArray.length / 2; i++) {
    if (xAsArray[i] !== xAsArray[xAsArray.length - 1 - i]) return false;
  }
  return true;
}

console.log(isPalindrome3(121));

// Approach 4: Using while loop
function isPalindrome4(x) {
  let xAsString = x.toString();
  let reversedX = "";
  let i = xAsString.length;
  while (i > 0) {
    reversedX += xAsString[--i];
  }
  return xAsString === reversedX;
}

console.log(isPalindrome4(121));

// Approach 5: Using reduce()
function isPalindrome5(x) {
  const xAsString = x.toString();
  return xAsString === xAsString.split("").reduce((acc, val) => val + acc, "");
}

console.log(isPalindrome5(121));

// Approach 6: Using recursion:
function isPalindrome6(x) {
  const xAsString = x.toxAsStringing();
  if (xAsString.length <= 1) return true;
  if (xAsString[0] !== xAsString[xAsString.length - 1]) return false;
  return isPalindrome6(xAsString.slice(1, xAsString.length - 1));
}

console.log(isPalindrome5(121));

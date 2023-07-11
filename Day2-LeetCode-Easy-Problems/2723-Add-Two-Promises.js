// 2723. Add Two Promises - https://leetcode.com/problems/add-two-promises/

// Approach 1: using then() -Simple chaining of promises

var addTwoPromises1 = async function (promise1, promise2) {
  return promise1.then((value1) => {
    return promise2.then((value2) => {
      return value1 + value2;
    });
  });
};

addTwoPromises1(Promise.resolve(2), Promise.resolve(2)).then(console.log);

// Approach 2: allSettled(), Ref used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

var addTwoPromises2 = async function (promise1, promise2) {
    let sum = 0;
    await Promise.allSettled([promise1, promise2]).then((values) =>
      values.forEach((val) => {
        val.status === "fulfilled" ? (sum = sum + val.value) : 0;
      })
    );
    return sum;
  };
  
  addTwoPromises2(Promise.resolve(2), Promise.resolve(2)).then(console.log);
  

// Approach 3 : Used promise.all(), Ref used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

var addTwoPromises3 = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then((values) => {
    return values[0] + values[1];
  });
};

addTwoPromises3(Promise.resolve(2), Promise.resolve(2)).then(console.log);

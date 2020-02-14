// # JAVASCRIPT ALGORITHMS AND DATA STRUCTURES CERTIFICATIONS (300 hours)
// ## Basic JavaScript (110 Exercises)
// - Use Recursion to Create a Countdown
// e.g.
function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}

console.log(countup(5)); // [1, 2, 3, 4, 5]

// - Function countdown:

function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
console.log("Function Countdown: " + countdown(5)); // [5, 4, 3, 2, 1]

// FIXME: Use Recursion to Create a Range of Numbers:

function rangeOfNumbers(startNum, endNum) {
    if (startNum <= endNum) {
        let result = rangeOfNumbers(startNum + 1, endNum);
        result.unshift(startNum);
        return result;
    } else {
        return [];
    }
};

console.log("Function rangeOfNumbers: " + rangeOfNumbers(1, 5));
console.log("Function rangeOfNumbers: " + rangeOfNumbers(6, 9));
console.log("Function rangeOfNumbers: " + rangeOfNumbers(4, 4));

// TODO: Repeat the exercises using: ternary operator, higer order functions like 'splice(0,0,n)', '[].concat(n-1)', '[n, ...function()]'


// ## ES6

// - Use Destructuring Assignment to Assign to Extract Values from Objects:
// Consider the following ES5 code:
const user = { name: 'John Doe', age:34};

const userName = user.name; // name = 'John Doe'
const userAge = user.age; // age = 34

// Here's an equivalent assignment statement using the ES6 destructuring syntax:
const {nameUser, ageUser} = user; // (!) nameUser and ageUser => undefined ???
// TODO: (node:3687) [DEP0016] DeprecationWarning: 'GLOBAL' is deprecated, use 'global'

// - Promise:
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;

    if(responseFromServer){
        resolve("We got the data");
    }else{
        reject("Data not received");
    }
});

makeServerRequest.then(result =>{
    console.log(result);
});

makeServerRequest.catch(error =>{
    console.log(error);
});
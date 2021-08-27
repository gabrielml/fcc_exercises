const convertHTML = require('./src/convertHtmlEntities');
const sumFibs = require('./src/sumAllOddFibonacciNumbers');
const sumPrimes = require('./src/sumAllPrimes');
const fearNotLetter = require('./src/missingLetter');
const smallestCommonsLib = require('./src/smallestCommonMultiple');
const dropElements = require('./src/dropIt');
const steamrollArray = require('./src/steamroller')

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

//console.log(countup(5)); // [1, 2, 3, 4, 5]

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
//console.log("Function Countdown: " + countdown(5)); // [5, 4, 3, 2, 1]

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

// console.log("Function rangeOfNumbers: " + rangeOfNumbers(1, 5));
// console.log("Function rangeOfNumbers: " + rangeOfNumbers(6, 9));
// console.log("Function rangeOfNumbers: " + rangeOfNumbers(4, 4));

// TODO: Repeat the exercises using: ternary operator, higer order functions like 'splice(0,0,n)', '[].concat(n-1)', '[n, ...function()]'

// ## ES6

// - Use Destructuring Assignment to Assign to Extract Values from Objects:
// Consider the following ES5 code:
const user = { name: 'John Doe', age: 34 };

const userName = user.name; // name = 'John Doe'
const userAge = user.age; // age = 34

// Here's an equivalent assignment statement using the ES6 destructuring syntax:
const { nameUser, ageUser } = user; // (!) nameUser and ageUser => undefined ???
// TODO: (node:3687) [DEP0016] DeprecationWarning: 'GLOBAL' is deprecated, use 'global'

// - Promise:
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    //    console.log(result);
});

makeServerRequest.catch(error => {
    //    console.log(error);
});

// ## Intermediate Algorithm Scripting.
// 6/21 Pig Latin:
function translatePigLatin(str) {
    // Variables:
    let regEx = /([aeiou])/i; // () matched results are included in the array. Use in split() method.
    let vowelPosition;
    let suffixOne = "ay";
    let suffixTwo = "way";
    let finalStr = "";

    // Find vowel position:
    vowelPosition = str.search(regEx);
    // Case a: If word not contain vowel = str + "ay":
    if (vowelPosition === -1) {
        return str.concat(suffixOne);
    } else if (vowelPosition === 0) {
        return str.concat(suffixTwo);
    } else {
        let splitWord = str.split(regEx)
        for (let index = 1; index < splitWord.length; index++) {
            finalStr += splitWord[index];
        }
        finalStr += splitWord[0] + suffixOne;
        return finalStr;
    }
}

translatePigLatin("consonant");
translatePigLatin("california");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("eight");
//console.log(translatePigLatin("schwartz"));
//console.log(translatePigLatin("rhythm"));


// 7/21 Search and Replace:
function myReplace(str, before, after) {
    let regEx = /^[A-Z]/;

    if (before.search(regEx) === 0 && after.search(regEx) === -1) {
        after = after.replace(/^\w/, firstLetter => firstLetter.toUpperCase());
    }
    return str.replace(before, after);
}

// console.log("1: " + myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// console.log("2: " + myReplace("Let us go to the store", "store", "male"));
// console.log("3: " + myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// console.log("4: " + myReplace("This has a spellngi error", "spellngi", "spelling"));
// console.log("5: " + myReplace("His name is Tom", "Tom", "john"));
// console.log("6: " + myReplace("Let us get back to more Coding", "Coding", "algorithms"));

// 8/21 DNA Pairing
//console.log("\n *** 8/21 DNA Pairing *** \n");

function pairElement(str) {
    // Variables:
    let originalStrand = [];
    let pairingStrand = [];
    let dnaStrand = [];

    // 1. Turn a String into an array of strings:
    originalStrand = str.split('');

    // 2. Create pairingStrand Array:
    for (let i = 0; i < originalStrand.length; i++) {
        switch (originalStrand[i]) {
            case 'G':
                pairingStrand.push("C");
                break;
            case 'C':
                pairingStrand.push("G");
                break;
            case 'A':
                pairingStrand.push("T");
                break;
            case 'T':
                pairingStrand.push("A");
                break;
            default:
                //console.log(`Sorry, there is no pairing element for ${originalStrand[i]}`);
                break;
        }
    }
    // 3. Create the definitive dnaStrand
    for (let index = 0; index < originalStrand.length; index++) {
        dnaStrand.push([originalStrand[index], pairingStrand[index]]);
    }

    return dnaStrand;
}

pairElement("GCG");

// #9/21 Missing letters:
console.log("Exercise #9/21 Missing letters: " + fearNotLetter("jkln"));

// Exercise #11/21 Convert HTML Entities:
convertHTML("Dolce & Gabbana");

// Exercise #12/21 Sum All Odd Fibonacci Numbers:
sumFibs(0);

// Exercise #13/21 Sum All Primes:
sumPrimes(10);

// Exercise #14/21 Smallest Common Multiple:
console.log("Exercise #14/21 Smallest Common Multiple: " + smallestCommonsLib.smallestCommons([23, 18]));

// Exercise #15/21 Drop it:
console.log("Exercise #15/21 Drop it: " + dropElements([1, 2, 3], function (n) {
            return n < 3;
        })
);

// Exercise #16/21 Steamroller
console.log("Exercise #16/21 Steamroller: " + steamrollArray([[["a"]],[["b"]]]));






/************************** TEST ZONE *************************************************************/
//2. Do the below programs in arrow functions:
//a. Print odd numbers in an array.
//Arrow function:
let oddarr = [];
const res = arr => {
    arr.forEach(item => {
        if (item % 2 !== 0) {
            oddarr.push(item);
        }
    });
    return oddarr;
};
var result = res([1, 2, 3, 4]);
console.log(result);

//***************************************************************************************** */

//b. Convert all the strings to title caps in a string array.
//Arrow function:
let titlArray = [];
const titleCaps = arrinput => {
    for (let i = 0; i < arrinput.length; i++) {
        if (arrinput[i] === null || arrinput[i] === '') {
            return false;
        } else {
            arrinput[i] = arrinput[i].toString();
            titlArray.push(arrinput[i].replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
        }
    }
    return titlArray;
};

const result = titleCaps(["priya", "raja", "magi", "yogi", "yogesh"]);
console.log(result);

//****************************************************************************************** */

//c. Sum of all numbers in an array.
//Arrow Function:
const sumArray = arrinput => {
    let sumvalue = 0;
    for (let i = 0; i < arrinput.length; i++) {
        sumvalue += arrinput[i];
    }
    console.log(sumvalue);
    return sumvalue;
};

const result = sumArray([1, 2, 3, 4, 5]);


//*************************************************************************** */

//d. Return all the prime numbers in an array.
//Arrow Function:
const isPrime = num => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const getPrimeNumbers = (() => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return array.filter(num => isPrime(num));
})();

console.log(getPrimeNumbers);

//***************************************************************************** */

//e. Return all the palindrome in an array:
//Arrow Function:
const findPalindromes = (() => {
    const arr = ["level", "hello", "noon", "radar", "open"];
    return arr.filter(word => word === word.split('').reverse().join(''));
})();

console.log("Palindromes in the array:", findPalindromes);
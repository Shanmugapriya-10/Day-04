//1. Do the below programs in anonymous function & IIFE.

//a. Print odd numbers in an array.
//anonymous function:
var oddarr=[];
var res = function (arr) {
    for (let i=0; i<arr.length;i++)
    {
        if(arr[i] % 2 != 0)
        {
            oddarr.push(arr[i]);
        }        
    }
    return oddarr;
}
var result = res([1,2,3,4]);
console.log(result);
//IIFE:
var oddarr=[];
var result = (function oddnumber(a) {
    for (let i=0; i<a.length;i++)
    {
        if(a[i] % 2 != 0)
        {
            oddarr.push(a[i]);
        }        
    }
    return oddarr;
}) ([1,2,3,4])
console.log(result);

//***************************************************************

//b. Convert all the strings to title caps in a string array.
//anonymous function:
var titlArray = [];
var titleCaps = function (arrinput){

for (let i=0; i<arrinput.length;i++)
{
if ((arrinput[i]===null) || (arrinput[i]===''))
    return false;
else
arrinput[i] = arrinput[i].toString();

 titlArray.push(arrinput[i].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}));
   
}
return titlArray
}
var result = titleCaps(["priya","raja","magi","yogi","yogesh"]);
console.log(result);

//IIFE:
var titlArray = [];
var titleCaps = (function (arrinput){

for (let i=0; i<arrinput.length;i++)
{
if ((arrinput[i]===null) || (arrinput[i]===''))
    return false;
else
arrinput[i] = arrinput[i].toString();

 titlArray.push(arrinput[i].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}));
   
}
return titlArray;
}) (["priya","raja","magi","yogi","yogesh"]);
console.log(titleCaps);

//************************************************************************************* */

//c. Sum of all numbers in an array.

//anonymous function:
var sumArray = function (arrinput){
    var sumvalue = 0;
    for (let i=0; i<arrinput.length;i++)
    {
        sumvalue = sumvalue + arrinput[i];
    }
    console.log(sumvalue);
    return sumvalue;
}
var result = sumArray([1,2,3,4,5]);

//IIFE:
var sumArray = (function (arrinput){
    var sumvalue = 0;
    for (let i=0; i<arrinput.length;i++)
    {
        sumvalue = sumvalue + arrinput[i];
    }
    console.log(sumvalue);
    return sumvalue;
}) ([1,2,3,4,5])

console.log(sumArray);

//************************************************************************************* */

//d. Return all the prime numbers in an array.

//anonymous function:
var isPrime = function (num) {
    if (num <=1) {
        return false;
    }
    for (let i = 2; i<= Math.sqrt(num); i++)
    {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}
var getPrimeNubers = function (array)
{
    return array.filter(num => isPrime(num));
}
const numbers = [1,2,3,4,5,6,7,8,9,10];
const primeNumbers = getPrimeNubers(numbers);
console.log("primeNumbers:", primeNumbers);

//IIFE:
var isPrime = function (num) {
    if (num <=1) {
        return false;
    }
    for (let i = 2; i<= Math.sqrt(num); i++)
    {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}
var getPrimeNubers = (function (array)
{
    return array.filter(num => isPrime(num));
}) ([1,2,3,4,5,6,7,8,9,10]);
console.log(getPrimeNubers);
console.log("primeNumbers:", primeNumbers);

//*************************************************************************************** */

//e. Return all the palindrome in an array:
//anonymous function:
var findPalindromes = function (arr) {
    return arr.filter(word => word === word.split('').reverse().join(''));
}
const wordsArray = ["level", "hello", "noon", "radar", "open"];
const palindromes = findPalindromes(wordsArray);
console.log("Palindromes in the array:", palindromes);

//IIFE:
var findPalindromes = (function (arr) {
    return arr.filter(word => word === word.split('').reverse().join(''));
}) (["level", "hello", "noon", "radar", "open"]);

console.log("Palindromes in the array:", findPalindromes);

//******************************************************************************************* */
//f. Return median of two sorted arrays of the same size:
//anonymous function:
var findMedianSortedArrays = function (nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = mergedArray.length;
    
    if (length % 2 === 0) {
        const midIndex = length / 2;
        return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    } else {
        const midIndex = Math.floor(length / 2);
        return mergedArray[midIndex];
    }
}
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);
console.log("Median:", median);

//IIFE:
var findMedianSortedArrays = (function (nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = mergedArray.length;
    
    if (length % 2 === 0) {
        const midIndex = length / 2;
        return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    } else {
        const midIndex = Math.floor(length / 2);
        return mergedArray[midIndex];
    }
}) ([1, 3, 5], [2, 4, 6])
console.log("Median:", findMedianSortedArrays);

//*********************************************************************************** */

//g. Remove duplicates from an array
//anonymous function:
var removeDuplicatesWithSet = function (arr) {
    return [...new Set(arr)];
}

var uniqueArray = removeDuplicatesWithSet([1, 2, 2, 3, 4, 4, 5]);
console.log("Array with duplicates removed:", uniqueArray);

//IIFE:
var removeDuplicatesWithSet = (function (arr) {
    return [...new Set(arr)];
}) ([1, 2, 2, 3, 4, 4, 5]);

console.log("Array with duplicates removed:", removeDuplicatesWithSet);

//************************************************************************************* */

//h. Rotate an array by k times:
//anonymous function:
var rotateArray = function (arr, k) {
    const n = arr.length;
    const rotations = k % n;
    const rotatedArray = [...arr.slice(rotations), ...arr.slice(0, rotations)];    
    return rotatedArray;
};
const originalArray = [1, 2, 3, 4, 5];
const rotations = 2;
const rotatedArray = rotateArray(originalArray, rotations);
console.log("Rotated array:", rotatedArray);

//IIFE:
var rotateArray = (function (arr, k) {
    const n = arr.length;
    const rotations = k % n;
    const rotatedArray = [...arr.slice(rotations), ...arr.slice(0, rotations)];    
    return rotatedArray;
}) ([1, 2, 3, 4, 5], 2);

console.log("Rotated array:", rotateArray); 

//************************************************************************************************ */
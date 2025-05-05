let arr = ["apples", "banana", "grapes", "orange", "peer"];
console.log(arr);
console.log(arr.indexOf("apples"));
console.log(arr.lastIndexOf("grapes"));
console.log(arr.includes("orange"));


let arr1 = [1,2,3,4,5,6];
let val = arr1.find(function (x) {
    return x % 2 === 0 && x % 3 === 0;
});
console.log(val);

let arr2 = [1,12,3,4,5,6];
let val1 = arr1.findIndex(function (x) {
    return x % 2 === 0 && x % 3 === 0;
});
console.log(val1);


let arr3 = [1,23,4851,-2,34,56,-45];
let val2 = arr3.find(function (x) {
    return x < 0;
});
console.log(val2);


let arr4 = [1,23,118,345,28];
let val3 = arr4.find(function (x) {
    return x >= 100;
});
console.log(val3);



// push pop operations
let arr5 = ["apple","banana","grapes","oranges","water-melon"];
arr5.push("red");
console.log(arr5);
arr5.pop();
console.log(arr5);

// unshift => used to add element in the front of the array
arr5.unshift("green","pink");
console.log(arr5);
arr5.shift();
arr5.shift();
console.log(arr5);

// splice method
let arr6 = ["apple","banana","grapes","oranges","water-melon"];
let arr10 = arr6.splice(2,3);
console.log(arr10);

// reverse method
let reversed = ["1","2","3","4","5"];
let rev = reversed.reverse();
console.log(rev);
let str = arr5.join("-");
console.log(str, "," , typeof str);


let word = `She sells seashells by the seashore, the shells she sells are seashells, I'm sure. For if she sells seashells on the seashore, then I'm sure she sells seashore shells`

let arr12 = word.split(" ");
arr12 = arr12.reverse();
word = arr12.join(" ");
console.log(arr12);
console.log(word);


let arr16 = [1,2,3];
let arr17 = [4,5,6];
let arr18 = [7,8,9];

let mixed = arr16.concat(arr17).concat(arr18);
console.log(mixed);


let numbers = [1,7,3,5,9];
console.log(numbers.sort());

let words = ["a","c","e","b","d",];
console.log(words.sort());

let numbers1 = [21,21,514,441,126,243,8,88,888,8888,7,9];

let sorted = numbers1.sort((num1,num2)=>{
    return num1-num2;
});

console.log(sorted);



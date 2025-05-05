let str = "apple";
console.log(str);
console.log(str.length,str);

for (i = 0; i <= str.length; i++) {
    console.log(str[i]);
}
// 
// SLICE => it is used to create new string from existing string
// in slice last index value is ignored.
// -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
//   J  A  V  A  S  C  R  I  P  T
//   0  1  2  3  4  5  6  7  8  9

// slice always checks from left to right either it is +ve or -ve index

let str1 = "javascript";
console.log(str1.slice(0,6));
console.log(str1.slice(6,11));
console.log(str1.slice(-9,-2))

// SUBSTRING : it is similar to slice fun.. but here we not use neg.index, if we use neg.index that value it consider as zero

let var2 = "javascript";
console.log(var2.substring(1,5));
console.log(var2.substring(5,-5));

// SUBSTR => (index value, no.of characters)
console.log("---------");

let var3 = "javascript";
console.log(var3.substr(3,5));
console.log(var3.substr(-8,5));


// INDEX OF => it is used to find index value of searches string
// index of ("string",index value)
console.log("----------------");

console.log(var3.indexOf("j"));
console.log(var3.indexOf("c"));

console.log(var3.lastIndexOf("t"));

// replace , replace All
console.log(str1.replace("a","s"));
console.log(str1.replaceAll("a","s"));

console.log("---------------------");

let string = `" she sells "seashells"
by the 'seashore',
The 'shells' she sells
are surely seashells.
So if she sells shells on the seashore,
I'm sure she sells seashore shells. `;

// let sliced = str5.split("sells");
// console.log(sliced);

// console.log(string);
let str6 = string.slice(0,96);
console.log(str6);

let string2 = string.slice(0,96);
console.log(string2);

string2 = string2.replace("sells","tony");
console.log(string2);

console.log("----------------");

string += string2;
console.log(string2);

console.log(string.startsWith("she"));
console.log(string.endsWith("shells. "));
console.log(string2.includes("tony"));

console.log(str.padStart(100, " mango"));
console.log(str);

console.log(str.padEnd(100, " guava"));
console.log(str);

let array = string.split("");
console.log(array);

let array1 = string.split(" ");
console.log(array1);


let word = "          hi this is tony stark form avengers       ";
let result = word.trim();
console.log(result);

let word1 = "Hi i am Captain America";
console.log(word1.toLowerCase());

let word2 = "this is hulk the greatest avenger";
console.log(word2.toUpperCase());





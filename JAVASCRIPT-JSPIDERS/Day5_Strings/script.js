// string => string is a collection of characters or sequence of characters.

// by using literals
// by using string literals
// by using template literals


// WAY 1
// 1. by using literals
// we cannot give multiple double quotes within double quotes, but we can use ,multiple single quotes
// we cannot write multiline string over Here
// we cannot perform string interpolation.

let str = "hi i am tony stark 'multi billonarie' and super hero";
console.log(str);

let str1 = 'hi i am captain america "avenger" and also a super solider';
console.log(str1);

let str3 = 'we cannot write multiline string statements';
console.log(str3);


// WAY 2
// we cannot give multiple double quotes within double quotes, but we can use ,multiple single quotes
// we cannot write multiline string over Here
// we cannot perform string interpolation.

let str4 = ("we can create string by constructor");
console.log(str4);

let str5 = ("we can also use 'single quotes ' between double quotes");
console.log(str5);

let  str6 = ("we cannot 'perform' multiple string over here");
console.log(str6);

// WAY 3
// by uSing template literals
// 1. it is performed by using backticks
// 2. we can give multiline string.
// 3. we can give multiple single quotes and multiple double quotes.
// 4. we can perform string interpolation
// string interpolation in javascript is a process in which and expression is inserted or placed in the string.
// By using string interpolation in javascript we can use variables and mathematical expressions and calculations can also be done.

let str7 = `twinkle twinkle 'little" star
how i wonder what you are`;

console.log(str7);

let num1 = 50;
let num2 = 34;
console.log(`the addition is ${num1} and ${num2} is ${num1+num2}`);

let car = (prompt("Enter car name : "))
let color = (prompt("Enter car color : "))
document.getElementById("car").innerHTML = `the car 
<span style= 'color:${color}'>${car}</span>
color is 
<span style='color:${color}'>${color}</span>`;

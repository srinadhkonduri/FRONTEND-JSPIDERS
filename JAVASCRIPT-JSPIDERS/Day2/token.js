// declaration and initialization

var num1 = 50;
console.log(num1);

let num2 = 20;
console.log(num2);


const num3 = 30;
console.log(num3);


var a;
a = -400;
console.log(a);


let b;
b = -500;
console.log(b);


const c = 900;
console.log(c);


// re declaration
var d = 20;
var d = 23;
console.log(d);
// re declaration not possible for let and const

// re - initialization
var e = 34;
e = 23;
console.log(e);

let f = 45;
f = 66;
console.log(f);

// const g = 78;
// g = 99;
// console.log(g);



// hosting => using the variable, before its declaration is called hoisting, in 
// js hoisting is perform by using var variable.

// console.log(s);
// var s = 40;

// console.log(b);
// let b = 100;

// console.log(c);
// const = c = 100;


// function scope, block scope
{
    var p = 8919;
}
console.log(p);


// {
//     let q = 4054;
// }
// console.log(q);



function fun(){
    var bb = 2333;
    console.log(bb);
    
}

fun();


function fun1(){
    let cc = 1234;
    console.log(cc);
    
}
fun1();


function fun2(){
    const dd = 678;
    console.log(dd);
    
}

fun2();

if(true){
    let name = "alice"
    const age = 25;
    console.log(name + " " + age);
    
}

for (let i = 0; i <= 3; i++) {
    console.log("inside block : " + i);
}






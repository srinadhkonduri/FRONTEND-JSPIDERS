// taking input form the user 
// confirm => the confirm() is used to collect the boolean type input from the user the confirm() belongs to window object so there is no need to specify window object.

// if you click ok in console => true.
// if you click cancel in console => false


// var val = confirm("had break fast ? ")
// console.log(val);


// const val1 = String(prompt("enter your name : "));
// console.log(val1);
// const val2 = Number(prompt("enter your mobile number : "));
// console.log(val2);
// const val3 = String(prompt("enter your gmail : "))
// console.log(val3);
// const val4 = String(prompt("Enter your address : "))
// console.log(val4);
// const val5 = String(prompt("enter your profession : "))
// console.log(val5);

// console.table([{"name : " :  val1},{"mobile : " : val2},
//     {"gmail :" : val3},{"address :" : val4}, {"job : " : val5}])


// document.getElementById("name").innerHTML = val1;
// document.getElementById("mobile").innerHTML = val2;
// document.getElementById("gmail").innerHTML = val3;
// document.getElementById("address").innerHTML = val4;
// document.getElementById("job").innerHTML= val5;   



//operators
let num1 = 2;
let num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1**num2);


// assignment operators (+=,-=,*=,/=,%=,**)
console.log("----------------------");

num1 += num2;
console.log(num1);
console.log(num2);

num1 -= num2;
console.log(num1);
console.log(num2);

num1 /= num2;
console.log(num1);
console.log(num2);

num1 *= num2;
console.log(num1);
console.log(num2);

num1 %= num2;
console.log(num1);
console.log(num2);


// Comparision operators (== , === , > , < , != , >= , <=)
let num3 = 10;
let num4 = "20";
console.log("-----------------");

console.log(num3==num4);

console.log(num1>num2);
console.log(num3===num4);
console.log(num3 != num4);
console.log(num3 >= num4);

console.log(num3 <= num4);

console.log("------------------");

// logical operators (&& , || , !, ^)
console.log(num3 > num2 && num3 <= num1);

console.log(num1<<2); // doubles every time
console.log(50 >> 2); // divides every time by half

console.log("------------------");

// increment and decrement operators

let num5 = 40;
console.log(num5++); // num = 40
console.log(++num5); // 1+1+40

console.log(num5--); // 42
console.log(--num5); // 1-1-42
let num11 = Number(prompt("Enter the num 1 : "))
let num22 = Number(prompt("Enter the num 2 : "))
let sum = (num11+num22);
let sub = num11-num22;
let mul = num11*num22;
let div = num11/num22;
let mod = num11%num22;
document.getElementById("sum").innerHTML = sum;
document.getElementById("sub").innerHTML = sub;
document.getElementById("mul").innerHTML= mul;
document.getElementById("div").innerHTML = div;
document.getElementById("mod").innerHTML= mod;
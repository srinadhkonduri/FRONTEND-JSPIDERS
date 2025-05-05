// // Normal arrow function.
// let function1=()=>{
//     console.log("this is a arrow function");
// }
// function1();

// // one statement
// let function2=()=>console.log("this is a single statement");
// function2();


// // function with parameter

// let addNum=(num1,num2)=>{
//     console.log(num1+num2);
// }
// addNum(10,10)

// // function with one parameter
// let areaOfCircle=r=>{
//     console.log(3.16*r*r);
// }

// areaOfCircle(12);

// // function with return keyword
// let areaOfTriangle=(base,height)=>{
//     return 0.5*base*height;
// }
// console.log(areaOfTriangle(10,15));


// EMI CALCULATOR
let p = Number(prompt("Enter the loan amount: "));
let t = Number(prompt("Enter the tenure (in years): "));
let r = Number(prompt("Enter the rate of interest: "));

let amountToBePaid = (p, t, r) => {
    console.log(`The amount taken from bank: ${p}`);
    console.log(`The time is: ${t} years`);
    console.log(`The rate of interest: ${r}%`);

    let interestAmount = (p * t * r) / 100;
    console.log(`In the end, the interest amount to be paid is: ${interestAmount}`);

    // let totalAmount = p + interestAmount;
    return Number(p)+interestAmount;
}

let totalAmountToBePaid = amountToBePaid(p, t, r);
console.log(`Total amount to be paid: ${totalAmountToBePaid}`);

let monthlyEmi = totalAmountToBePaid / (t * 12);
console.log(`Monthly EMI: ${monthlyEmi}`);




// function is a block of code which is used to perform a particular task

// 1. Named function
// 2. Anonymous function
// 3. arrow function
// 4. IIFE
// 5. higher order function or call back function
// 6. nested function

// NAMED FUNCTION

// function wedding(){
//     console.log("bachelor life is best");
    
// }
// wedding()

// // FUNCTION WITH PARAMETERS
// function addition(a,b){
//     console.log(`the addition of ${a} and ${b} is ${a+b}`);
// }
// addition(1,2);

// // PARAMETERS WITH RETURN TYPE.
// function addition1(a,b){
//     return `the addition of ${a} and ${b} is ${a+b}`;
// }
// addition1(a=11,b=23);
// console.log(`the addition is ${a} and ${b} is ${a+b}`);


// function principal() {
//     let amount = prompt("Enter the amount:");
//     console.log("amount :" + amount);
    
//     return parseFloat(amount);
// }

// function time() {
//     let t = prompt("Enter time:");
//     console.log("time :" + t);
    
//     return parseFloat(t);
// }

// function rate() {
//     let r = prompt("Enter interest rate:");
//     console.log("rate : " + r);
    
//     return parseFloat(r);
// }

// let p = principal();
// let t = time();
// let r = rate();

// let simpleInterest = (p * r * t) / 100;

// console.log("Simple Interest is: " + simpleInterest.toFixed(2) + " per month");


function fizzbuzz(num){
    for (let i = 0;i <= 100; i++){
        if(num % 3 == 0 && num % 5 == 0){
            return "FIZZBUZZ"
        }
        else if(num % 3 == 0){
            return "fizz"
        }
        else if(num % 5 == 0){
            return "buzz"
        }
        else{
            return "not divisible by i " + num;
            
        }
    }
    setTimeout(fizzbuzz, 1000);
}

for(i = 0; i <= 100; i++){
    document.writeln(`<h3>${i} is ${fizzbuzz(i)}
    </h3>`)
    console.log(`${i} is ${fizzbuzz(i)}`);
    
} 
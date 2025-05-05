// // IIFE
// (function(){
//     console.log("this is IIFE");

// })();

// console.log("this is a semicolon");

// (()=>{
//     console.log("this is IIFE");
// })();

// (function(num1,num2){
//     console.log(num1+num2);
// })(4,8);

// let addedVal = (function(num1,num2){
//     return (num1+num2);
// })(4,8);

// console.log(addedVal);

// var val = function(num1,num2){
//     return (num1+num2);
// }
// console.log(val);

// square area
let addNum = (l) => {
    return l * l;
    
};
// let square = addNum(50);



// circle area
let circleArea = (r)=>{
    return 3.14*r*r;
}
// let circle = circleArea(2);

// triangle area
let tri = (base,height)=>{
    return 0.5*base*base;
}
// let triangle = tri(25,15.5)

// rectangle area
let rectAngleArea = (length,breadth)=>{
    return length*breadth;
}
// let rectanlge = rectAngleArea(25,10)

let result =()=>{
    console.log((addNum)- (circleArea(2)-rectAngleArea(10,25)-tri(10,15.5)));
}

console.log(result());



// function higherOrderFunction(clBack,ClBack2){
//     console.log("this is HOF");
//     clBack();
//     ClBack2();
// }

// function callBackFunction1(){
//     console.log("this is a call back function1 ");
// }

// function callBackFunction2(){
//     console.log('====================================');
//     console.log("this is a call back function2 ");
//     console
    
//     .log('====================================');
// }

// higherOrderFunction(callBackFunction1,callBackFunction2);

// let res =(callBackFunction1,callBackFunction2)=>{
//     console.log("This is a hof");
//     func1();
//     func2();
// }

// let func1 = ()=>{
//     console.log('====================================');
//     console.log("this is a call function 1");
//     console.log('====================================');
// }

// let func2 =()=>{
//     console.log('====================================');
//     console.log("this is call back function 2");
//     console.log('====================================');
// }

// res(func1,func2);


// var higherOrder = function(callBack){
//     console.log("this is a higher order function");
//     callBack();
// }

// higherOrder(function(){
//     console.log("this is a call back function");
    
// })


var higherOrder1 = function(callBack, callBack2) {
    console.log("this is a higher order function");
    callBack();
    callBack2();
}

higherOrder1(
    function() {
        console.log("this is a call back function");
    },
    () => {
        console.log("this is arrow call back function");
    }
);

// NESTED FUNCTION
function nestedFunction(){
    console.log("this is a nested function");
    function child(){
        console.log("this is a child function");
        
    }
    child();
}
nestedFunction();


function parent(){
    console.log("this is a parent function");
    function child(){
        console.log("this is a child function");
    }
    return child; // by using return we can child function multiple times.
}
let res = parent();
res();
res();
res();


function outerFunction(){
    var num1 = 45;
    var num2 = 55;
    function innerFunction(){
        console.log(num1+num2);
    }
    return  innerFunction;
}
let result = outerFunction();
result();

function Big1(){
    var num1 = 50;
    function Big2(){
        var num2 = 50;
        function Big3(){
            console.log(num1+num2);
        }
        Big3();
    }
    Big2();
}
Big1();
var str = "this is a string";
console.log(str,"--->",typeof(str));
var num = 20;
console.log(num,"--->",typeof(num));

var res = null;
console.log(res,"--->",typeof(res));

var res1 = NaN;
console.log(res1,"--->",typeof(res1));

var res2 = 100.5;
console.log(res2,"--->",typeof(res2))


// boolean data type
var bool = false;
console.log(bool,"",typeof bool);

var value = "123gkmle1304";
console.log(value,"",typeof(value));

var obj = null;
console.log(obj,"",typeof(obj));

var und = undefined;
console.log(und,"",typeof(und));


var bigNum = BigInt(567854356785432567586345678966578976n);
console.log(bigNum,"",typeof bigNum);

var sym1 = Symbol("this is a symbol");
console.log(sym1,"",typeof(sym));

var sym2 = Symbol("this is a symbol");
console.log(sym2,"",typeof(sym2));

console.log(sym1==sym2);


// IMPLICIT TYPE CASTING : data conversion happening without using any external forces.

var str = "10"
var num = 10;
console.log(str+num,"",typeof(num));
console.log(str-num,"",typeof num);
console.log(str*num,"",typeof(num));
console.log(str/num,"",typeof(num));
console.log(str%num,"",typeof(num));
console.log(str**num,"",typeof(num));


console.log(str == num);
console.log(str === num);



var num1 = Number(str);
console.log(num1, "", typeof(num1));


var str = "101.45";
var num2 = parseFloat(str);
var num3 = parseInt(str);
console.log(num2, "", typeof(num2));

console.log(num3, "", typeof(num3));


var number = 45;

var str5 = String(number);
console.log(str5, "", typeof(str5));


var bool = Boolean(number);
console.log(bool, "", typeof(bool));






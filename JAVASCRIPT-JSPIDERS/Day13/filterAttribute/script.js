// filter is used to filter the values based on the conditions given.
let arr = [12,13,45,67,1,4,8,67,43,89,99,10,30,49,77];

let value = arr.filter(function(v){
        return v;
    }
)
console.log(value);

let arr1 = ["red","blue","green","orange","white","purple"]
let result = arr1.filter(function(v)
    {   
        return arr1.length >= 4;
    }
)
console.log(result);


// REDUCE METHOD => HIGHER ORDER FUNCTION
let arr2 = [12,45,56];
let added = arr2.reduce(function(total,number) {
    return total + number;
})
console.log(added);
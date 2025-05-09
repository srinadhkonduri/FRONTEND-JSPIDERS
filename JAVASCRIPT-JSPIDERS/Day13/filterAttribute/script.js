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

// for in loop
for(i in arr1){
    console.log(i);
}
// for of loop
for (i of arr1) {
    console.log(i);
}

// VALUES ATTRIBUTE => returns only the values
let arr3 = arr1.values();
for (const i of arr3) {
    console.log(i);
}

// ENTRIES => RETURNS BOTH INDEX AND VALUES
let arr4 = arr1.entries(); 
for (const i of arr4) {
    console.log(i);
}

// KEYS => RETURNS ONLY THE INDEX VALUES
let arr5 = arr1.keys();
for (const i of arr5) {
    console.log(i);
}

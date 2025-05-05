let studentDel = ["sai","Tony","A",15,"sai@gamil.com",true];
console.log(studentDel[0]);
console.log(studentDel[2]);
console.log(studentDel[studentDel.length-1]);

for (i = 0; i < studentDel.length;i++){
    console.log(studentDel[i]);
}


let color = [];
color[0] = "red";
color[1] = "blue";
color[2] = "white";
color[5] = "green";
color[11] = "purple";
console.log(color);

// creating an array by using constructor

let employee = new Array("sai","kumar","tcs45","male",26);
console.log(employee);

let emp = Array("sai","kiran","tcs45","male",26);
console.log(emp);

let str = "apple mango grapes";
let arr = str.split(", ");
console.log(arr);
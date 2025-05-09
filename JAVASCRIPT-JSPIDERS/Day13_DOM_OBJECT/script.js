// const { Collapse } = require("bootstrap");

document.title="facebook";
// let allDiv = document.getElementsByClassName("container");
// console.log(allDiv);

// for (let index = 0; index <= allDiv.length-1; index++) {
//     allDiv[index].innerHTML = `this is div${index+1}`;
// }

// // let ele = document.getElementByTagName("class");
// // console.log(ele);
// // for (let index = 0; index < ele.length; index++) {
// //     ele[index].innerHTML = `div ${index+1}`;
// // }

// let ele1 = document.getElementsByName("elements");
// for (let index = 0; index < ele1.length; index++) {
//     ele1[index].innerHTML = `ele ${index + 1}`;

// }

document.querySelector("span").innerHTML = "this is a span tag";

document.querySelector(".heading").innerHTML = "this is a heading tag";

document.querySelector("#container").innerHTML="this is a id selector";

let allH1 = document.querySelectorAll("h1");
allH1[0].innerHTML = "this is 1st h1";
allH1[1].innerHTML = "this is 2nd h1";

let spanTag = document.querySelectorAll(".text");
spanTag[0].innerHTML = "this is a span tag";
spanTag[1].innerHTML = "this is a 2nd span tag";

// let val1 = prompt("Width for #rec:");
// let val2 = prompt("Height for #rec:");
// let val3 = prompt("Color for #rec:");
// let val4 = prompt("Border Radius for #rec:");

// let res = document.querySelectorAll("#rec");
// res[0].style.width = val1;
// res[0].style.height = val2;
// res[0].style.backgroundColor = val3;
// res[0].style.borderRadius = val4;
// console.log(res);

// let val5 = prompt("Width for .cir:");
// let val6 = prompt("Height for .cir:");
// let val7 = prompt("Color for .cir:");
// let val8 = prompt("Border Radius for .cir:");

// let res1 = document.querySelectorAll(".cir");
// res1[0].style.width = val5;
// res1[0].style.height = val6;
// res1[0].style.backgroundColor = val7;
// res1[0].style.borderRadius = val8;
// console.log(res1);

document.body.style.backgroundImage = "linear-gradient(75deg,red,blue,orange,pink,purple)";   

let allForms = document.forms;
allForms[0].elements[0].type = "radio";
allForms[0].elements[1].type = "checkbox";
allForms[0].elements[2].type = "range";

allForms[1].elements[0].type = "email"
allForms[1].elements[0].placeHolder = "enter email"
allForms[1].elements[0].placeholder = "enter email";
allForms[1].elements[1].type = "password"
allForms[1].elements[1].placeholder = "enter password";
allForms[1].elements[2].type = "submit";
allForms[1].action = "https://www.facebook.com";

// let allAnchors = document.anchors;
// allAnchors[0].innerHTML = "facebook";
// allAnchors[0].href = "https://www.facebook.com";

// allAnchors[1].innerHTML = "instagram";
// allAnchors[1].href = "https://www.instagram.com";

let img = document.images;
for (let i = 0; i < img.length-1; i++) {
    img[i].src = `./${i + 1}.jpg`; // assuming images are named 1.jpg, 2.jpg, etc.
    img[i].style.width = "200px";
}

// let headingTag = document.createElement("h1");
// console.log(headingTag);
// document.body.appendChild(headingTag);
// headingTag.innerHTML="this is a heading tag";

// let container1 = document.createElement("div");
// document.body.appendChild(container1);
// container1.style.width="300px";
// container1.style.height="300px";
// container1.style.backgroundColor="blue";


// let container2 = document.createElement("div");
// container1.appendChild(container2);
// container2.style.width="150px";
// container2.style.height="150px";
// container2.style.backgroundColor="green";
// container2.style.marginLeft="72px";
// container2.style.marginBottom="45px";


let tab = document.createElement("table");
tab.border = "1";
tab.style.borderCollapse = "collapse";
let labels = ["name","roll","address","phone","city"];
let values = ["tony","1","Stark","1234567890","hyderabad"];
for (i = 0; i < values.length; i++){
    let row = tab.insertRow();

    let cell1 = row.insertCell();
    let cell2 = row.insertCell();

    cell1.innerHTML = labels[i];
    cell2.innerHTML = values[i];
}
document.body.appendChild(tab);


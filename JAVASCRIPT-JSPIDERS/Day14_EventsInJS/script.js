// function fun(){
//     // taking input
//     let userName = document.getElementById("inp").value;
//     // printing output
//     document.getElementById("name").innerHTML= userName;
// }

// function bgColour() {
//     let colour = document.querySelector("#color").value;
//     console.log(colour);
    
//     document.body.style.backgroundColor = colour;
// }

// function passwordLen() {
//     let val = document.getElementById("pass").value;
//     val = val.length;
//     if (val == 0) {
//         document.getElementById("state").innerHTML = "";
//     }
//     else if (val > 0 &&  val <= 5) {
//         document.getElementById("state").innerHTML = "weak password";
//         document.getElementById("state").style.color = "red";
//     }
//     else if (val >= 6 && val <= 10) {
//         document.getElementById("state").innerHTML = "avg password";
//         document.getElementById("state").style.color = "blue";
//     }
//     else if (val >= 11 && val <= 15){
//         document.getElementById("state").innerHTML = "good password";
//         document.getElementById("state").style.color = "orange";
//     }
//     else if (val >= 15) {
//         document.getElementById("state").innerHTML = "super strong password";
//         document.getElementById("state").style.color = "green";
//     }
// }

// function visiblePassword() {
//     document.getElementById("inp").type = "text";
//     document.querySelector("img").src = "./bmw-x4-alpine-white (1).jpg";
// }

// function hidePass(){
//     document.getElementById("inp").type = "password";
//     document.querySelector("img").src = "./rocket_image-removebg-preview.jpg";
// }

// function jumpChar() {
//     document.querySelector("marquee").style.transform = "translate(0px,-300px)";
//     document.querySelector("marquee").style.transition = "all 0.2s";
// }

// function backDownChar() {
//     document.querySelector("marquee").style.transform="translate(0px,0px)";
// }

// EVENT 7
// let num = 0;
// function fun(){
//     num++;
//     if (num == 0) {
//         document.getElementById("container").style.backgroundImage = `url(./1.jpg)`;
//     }
//     else if (num == 1) {
//         document.getElementById("container").style.backgroundImage = `url(./2.jpg)`;
//     }
//     else if (num == 2){
//         document.getElementById("container").style.backgroundImage = `url(./3.jpg)`;
//     }
//     else if (num == 3) {
//         document.getElementById("container").style.backgroundImage = `url(./4.jpg)`;
//         num = -1;
//     }
// }


function fun(){
    document.body.style.backgroundColor = "red";
}

function fun() {
    let valFromUser = document.getElementById("colour").value;
    document.body.style.backgroundColor = valFromUser;
}
// // console.log(Math.PI); // 3.141592653589793
// // console.log(Math.round(3.6)); // 4
// // console.log(Math.round(3.4)); // 3
// // console.log(Math.ceil(3.4)); // 4
// // console.log(Math.floor(3.4)); // 3
// // console.log(Math.abs(-3.4)); // 3.4
// // console.log(Math.sqrt(16)); // 4
// // console.log(Math.pow(2, 3)); // 8
// // console.log(Math.random()); // Random number between 0 and 1
// // console.log(Math.random() * 10); // Random number between 0 and 10
// // console.log(Math.random() * 100); // Random number between 1 and 10
// // console.log(Math.trunc(3.4)); // 3


// // Get references to elements
// const otpInput = document.getElementById("otp");
// const generateBtn = document.getElementById("gen");
// const submitBtn = document.getElementById("sub");
// const otpDisplay = document.getElementById("otpNumber");
// const closeBtn = document.getElementById("close");
// const otpContainer = document.querySelector(".otpContainer");

// let currentOTP = "";

// // Function to generate a random 6-digit OTP
// function generateOTP() {
//     currentOTP = Math.floor(100000 + Math.random() * 900000).toString();
//     otpDisplay.textContent = `Your OTP is: ${currentOTP}`;
//     otpContainer.style.display = "block";
// }

// // Function to validate OTP
// function validateOTP() {
//     if (otpInput.value === currentOTP) {
//         alert("OTP Verified Successfully!");
//     } else {
//         alert("Incorrect OTP. Please try again.");
//     }
// }

// // Function to close OTP container
// function closeOTPDisplay() {
//     otpContainer.style.display = "none";
// }

// // Add event listeners
// generateBtn.addEventListener("click", generateOTP);
// submitBtn.addEventListener("click", validateOTP);
// closeBtn.addEventListener("click", closeOTPDisplay);

// // Hide OTP container initially
// otpContainer.style.display = "none";




// ORIGINAL CODE FOR THE HTML FILE


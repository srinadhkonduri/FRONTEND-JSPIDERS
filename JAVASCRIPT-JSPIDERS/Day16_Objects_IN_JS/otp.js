function otpContainerClose() {
    document.getElementById("otpcontainer").style.display = "none"
}
var otp;
function generateOtp() {
    document.getElementById("otpcontainer").style.display = "flex"
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var num3 = Math.floor(Math.random() * 10);
    var num4 = Math.floor(Math.random() * 10);
    otp = `${ num1 }${ num2 }${ num3 }${ num4 }`;
    document.getElementById("otpNumber").innerHTML = otp;
}

function checkotp() {
    var userVal = document.getElementById("otp").value
    if (userVal == otp) {
        document.querySelector("form").action = "http://tesla.com"
        document.getElementById("sub").type = "submit"
    }
    else {
        document.getElementById("status").innerHTML = "please enter valid otp"
    }

}
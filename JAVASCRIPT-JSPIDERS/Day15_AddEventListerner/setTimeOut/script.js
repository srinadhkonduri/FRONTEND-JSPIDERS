var arr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
var num = 0;
function changeImage() {
    num++;
    if (num <= arr.length) {
        document.getElementById("container").style.backgroundImage = `url(./${arr[num]})`;
    }
    else {
        num = 0;
        document.getElementById("container").style.backgroundImage = `url(./${arr[num]})`;
    }
}
// setInterval(changeImage, 2000);

function rightImage(){
    num++;
    if (num <= arr.length-1) {
        document.getElementById("container").style.backgroundImage = `url(./${arr[num]})`;
    }
    else {
        num = 0;
        document.getElementById("container").style.backgroundImage = `url(./${arr[num]})`;
    }
}

function leftImage() {
    num--;
    if (num >= 0) {
        document.getElementById("container").style.backgroundImage = `url(./${arr[num]})`;
    }
    else {
        num = arr.length-1;
        document.getElementById("container").style.backgroundImage = `url(./${arr[num]})`;
    }
}
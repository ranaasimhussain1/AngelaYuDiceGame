let btn = document.getElementById("re");
let display = document.getElementById("display")
let output = document.getElementById("output")
let img1 = document.getElementById("i1");
let img2 = document.getElementById("i2");

btn.addEventListener("click", () => {
    let x = Math.floor((Math.random() * 6) + 1);

    let y = Math.floor((Math.random() * 6) + 1);
    let source1 = "dice" + x + ".png";
    let source2 = "dice" + y + ".png";
    display.innerHTML = "first is  " + x + "second is" + y;
    img1.src = source1;
    img2.src = source2;
    if (x > y) {
        output.innerHTML = "Player 1 Wins"
    } else if (y > x) {
        output.innerHTML = "Player 2 Wins"
    } else {
        output.innerHTML = "Draw"
    }
})
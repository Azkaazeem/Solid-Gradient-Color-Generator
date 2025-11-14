const themeSwitch = document.getElementById("themeSwitch");
const body = document.body;

themeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

let btn = document.querySelector("#generateBtn");
let gradientBtn = document.querySelector("#generategradientBtn");

// console.log (btn);


// --------------------------   FOR SOLID COLOR    -------------------------------
btn.addEventListener("click", function () {
    console.log("Btn is clicked....");
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.getElementById("colorBox");
    div.style.backgroundColor = randomColor;

    console.log("Color Updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let rgb = `rgb(${red}, ${green}, ${blue})`;
    return rgb;
}


// --------------------------   FOR GRADIENT COLOR    -------------------------------

gradientBtn.addEventListener("click", function () {
    console.log("Btn is clicked....");
    let h3_2 = document.querySelector("h3");
    let gradientRandomColor = getGradientRandomColor();
    h3_2.innerText = gradientRandomColor;
    h3_2.classList.add("fontChanges");

    let div2 = document.getElementById("GradientColorBox");
    div2.style.background = gradientRandomColor;

    console.log("Color Updated");
});




function getGradientRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let red2 = Math.floor(Math.random() * 255);
    let green2 = Math.floor(Math.random() * 255);
    let blue2 = Math.floor(Math.random() * 255);

    let grgb = `linear-gradient(to left, rgb(${red}, ${green}, ${blue}), rgb(${red2}, ${green2}, ${blue2}))`;
    return grgb;
}

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

const colorPicker = document.getElementById("colorPicker");

const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");

function updateFromSliders() {
    redNum.value = red.value;
    greenNum.value = green.value;
    blueNum.value = blue.value;
    updateColor();
}

function updateFromNumbers() {
    red.value = redNum.value;
    green.value = greenNum.value;
    blue.value = blueNum.value;
    updateColor();
}

function updateFromPicker() {
    const hex = colorPicker.value;

    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    red.value = redNum.value = r;
    green.value = greenNum.value = g;
    blue.value = blueNum.value = b;

    updateColor();
}

function updateColor() {
    const r = parseInt(red.value) || 0;
    const g = parseInt(green.value) || 0;
    const b = parseInt(blue.value) || 0;

    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
    rgbValue.textContent = rgb;

    const hex =
        "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    hexValue.textContent = hex.toUpperCase();
    colorPicker.value = hex;
}

// Eventos
red.addEventListener("input", updateFromSliders);
green.addEventListener("input", updateFromSliders);
blue.addEventListener("input", updateFromSliders);

redNum.addEventListener("input", updateFromNumbers);
greenNum.addEventListener("input", updateFromNumbers);
blueNum.addEventListener("input", updateFromNumbers);

colorPicker.addEventListener("input", updateFromPicker);

// Inicial
updateFromSliders();

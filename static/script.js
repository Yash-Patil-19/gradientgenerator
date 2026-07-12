const css = document.querySelector("#HEXCODE");
const color1 = document.querySelector("#COLOR1");
const color2 = document.querySelector("#COLOR2");
const body = document.getElementById("BG");

function colorpick() {

    body.style.background =
        "linear-gradient(to right,"
        + color1.value + ","
        + color2.value + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorpick);
color2.addEventListener("input", colorpick);

css.addEventListener("click", copy);

function copy() {

    navigator.clipboard.writeText(css.textContent);

    alert("Copied: " + css.textContent);

}

colorpick();
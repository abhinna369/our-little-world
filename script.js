const messages = [
  "Hi Chuiimuii... ❤️",
  "Today I want to take uuu on a journey...",
  "Not through a website...",
  "But through my heart...",
  "Take my hand... Let's begin our little world. ✨"
];

const typing = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");

let line = 0;
let char = 0;

startBtn.style.display = "none";

function typeWriter() {

    if (line >= messages.length) {
        startBtn.style.display = "inline-block";
        return;
    }

    if (char < messages[line].length) {
        typing.innerHTML += messages[line].charAt(char);
        char++;
        setTimeout(typeWriter, 45);
    } else {
        typing.innerHTML += "<br><br>";
        line++;
        char = 0;
        setTimeout(typeWriter, 700);
    }
}

window.onload = () => {
    setTimeout(typeWriter, 800);
};

const intro = document.getElementById("intro");
const beach = document.getElementById("beach");

startBtn.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.classList.add("hidden");

        beach.classList.remove("hidden");

        beach.style.opacity = "0";

        setTimeout(() => {
            beach.style.opacity = "1";
        }, 100);

    }, 1200);

});

const shell = document.querySelector(".shell");
const memory = document.getElementById("memory");
const continueBtn = document.getElementById("continueBtn");

shell.addEventListener("click", () => {

    memory.classList.remove("hidden");

    continueBtn.style.display = "inline-block";

    shell.style.transform = "scale(1.2)";
});

continueBtn.addEventListener("click", () => {

    alert("🌧️ Rain Chapter is coming in the next update ❤️");

});

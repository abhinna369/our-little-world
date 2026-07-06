const text = [
  "Hi Chuiimuii... ❤️",
  "Today I want to take uuu on a journey...",
  "Not through a website...",
  "But through my heart...",
  "Take my hand... Let's begin our little world. ✨"
];

const typing = document.getElementById("typing");
const button = document.getElementById("startBtn");

button.style.display = "none";

let line = 0;
let char = 0;

function typeWriter() {

  if (line >= text.length) {
    button.style.display = "inline-block";
    return;
  }

  if (char < text[line].length) {
    typing.innerHTML += text[line].charAt(char);
    char++;
    setTimeout(typeWriter, 50);
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

button.addEventListener("click", () => {
  alert("🌊 Welcome! In the next part, our Beach Journey begins...");
});

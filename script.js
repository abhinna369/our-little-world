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
let character = 0;

startBtn.style.display = "none";

function typeWriter(){

    if(line >= messages.length){
        startBtn.style.display = "inline-block";
        return;
    }

    if(character < messages[line].length){

        typing.innerHTML += messages[line].charAt(character);

        character++;

        setTimeout(typeWriter,45);

    }else{

        typing.innerHTML += "<br><br>";

        line++;

        character = 0;

        setTimeout(typeWriter,700);

    }

}

window.onload=function(){

    setTimeout(typeWriter,800);

};

const intro=document.getElementById("intro");
const beach=document.getElementById("beach");

startBtn.onclick=function(){

    intro.style.opacity="0";

    setTimeout(function(){

        intro.classList.add("hidden");

        beach.classList.add("active");

    },1000);

};

const shell=document.querySelector(".shell");

const memory=document.getElementById("memory");

const continueBtn=document.getElementById("continueBtn");

shell.onclick=function(){

    memory.classList.add("show");

    continueBtn.style.display="inline-block";

};

continueBtn.onclick=function(){

    alert("🌧️ Rain Journey Coming Soon ❤️");

};

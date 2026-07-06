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

// Sections
const intro=document.getElementById("intro");
const beach=document.getElementById("beach");
const rain=document.getElementById("rain");

// Intro → Beach
startBtn.onclick=function(){

    intro.style.opacity="0";

    setTimeout(function(){

        intro.classList.add("hidden");

        beach.classList.remove("hidden");
        beach.style.opacity="1";

    },1000);

};

// Beach Elements
const shell=document.querySelector(".shell");
const memory=document.getElementById("memory");
const continueBtn=document.getElementById("continueBtn");

continueBtn.style.display="none";

shell.onclick=function(){

    shell.style.transform="scale(1.2)";

    memory.style.opacity="1";

    continueBtn.style.display="inline-block";

};

// Beach → Rain
continueBtn.onclick=function(){

    beach.style.opacity="0";

    setTimeout(function(){

        beach.classList.add("hidden");

        rain.classList.remove("hidden");
        rain.style.opacity="1";

    },1000);

};

// Rain Elements
const umbrella=document.querySelector(".umbrella");
const rainMemory=document.getElementById("rainMemory");
const mountainBtn=document.getElementById("mountainBtn");

rainMemory.style.display="none";
mountainBtn.style.display="none";

umbrella.onclick=function(){

    umbrella.style.transform="scale(1.2)";

    rainMemory.style.display="block";

    setTimeout(function(){

        mountainBtn.style.display="inline-block";

    },600);

};

mountainBtn.onclick=function(){

    alert("⛰️ Mountain Chapter is coming next ❤️");

};

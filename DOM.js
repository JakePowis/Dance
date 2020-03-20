// TO DO

//MUSIC
//Splash Scrren
//Text & Animation



let container = document.getElementById("container");
let object = document.getElementById("object");
let image = document.getElementById("image");
let title = document.getElementById("title")

let currentImg = 1;
let k = 0;
let text = ""


function randomColor() {

    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;

}

function dance() {

    if (currentImg == 1) {
        image.src = "https://i.ibb.co/TPzcMB4/Hedgehog1.png"
        currentImg = 2
        container.style.background = randomColor()
        console.log("left")
        } else {
        image.src = "https://i.ibb.co/ZhPYwzg/Hedgehog1.png"
        currentImg = 1
        container.style.background = randomColor()
        console.log("right")
        }
}

function startDancing(moves, time){
    let currentCountdown = moves;
    intervalID= setInterval(()=>{
        dance()
        currentCountdown--;
        if(currentCountdown < 0)
        {
            currentCountdown = 0;
            clearInterval(intervalID);
        }
    },time)
}

let strArr = ["Yeah Boi", "Lets Get Funky", "DAB DAB DAB", "Jazz Hands", "Oh Ohh Ohhhh", "Feel Da Rythem", "Bust A Move", "Banging Tune"]

var snd = new Audio("Techno.wav"); // buffers automatically when created




container.addEventListener("click", (e) => {
//on click event
console.log("click")
let randMove = parseInt((Math.random()*8) + 3) // random number of dances
let randTime = parseInt((Math.random()*600) + 100) //random time of dance
snd.play();

title.classList.add("pulse")
randPhrase = parseInt(Math.random()*strArr.length)

text = strArr[randPhrase]
title.textContent = text
title.style.color = randomColor();
startDancing(randMove, randTime)


})




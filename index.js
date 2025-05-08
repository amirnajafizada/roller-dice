
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomeImg1 = "images/dice" + randomNumber1 + ".png";
var randomImg2 = "images/dice" + randomNumber2 + ".png";

var img1 = document.querySelector(".img1")
img1.setAttribute("src",randomeImg1)

var img2 = document.querySelector(".img2");
img2.setAttribute("src", randomImg2)

if (randomeImg1 === randomImg2) {
    document.querySelector("h1").innerHTML = "Draw!"
} else if (randomeImg1 > randomImg2) {
    document.querySelector("h1").innerHTML = "Player one won!"
}else if (randomeImg1 < randomImg2) {
    document.querySelector("h1").innerHTML = "Player two won!"
} else {
    console.log("Fuck off!")
}
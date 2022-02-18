//play buttons
const booBtn = document.getElementById('booBtn');
const applauseBtn = document.getElementById('applauseBtn');
const gaspBtn = document.getElementById('gaspBtn');
const tadaBtn = document.getElementById('tadaBtn');
const victoryBtn = document.getElementById('victoryBtn');
const wrongBtn = document.getElementById('wrongBtn');

// console.log(boo) test yaptık

//sound
const sound = document.getElementById('sound');
// console.log(sound);

//image
const image = document.getElementById('image');
// console.log(image);

booBtn.onclick = function() {
    sound.src = "./sounds/boo.mp3";
    image.src = "./images/booing.gif";
    document.body.style.backgroundColor = "AntiqueWhite";
    sound.play();
}
applauseBtn.onclick = function() {
    sound.src = "./sounds/applause.mp3";
    image.src = "./images/applause.gif";
    document.body.style.backgroundColor = "AntiqueWhite";
    sound.play();
}
gaspBtn.onclick = function() {
    sound.src = "./sounds/gasp.mp3";
    image.src = "./images/giphy.gif";
    document.body.style.backgroundColor = "AntiqueWhite";
    sound.play();
}
tadaBtn.onclick = function() {
    sound.src = "./sounds/tada.mp3";
    image.src = "./images/tada.gif";
    document.body.style.backgroundColor = "AntiqueWhite";
    sound.play();
}
victoryBtn.onclick = function() {
    sound.src = "./sounds/victory.mp3";
    image.src = "./images/victory.gif";
    document.body.style.backgroundColor = "AntiqueWhite";
    sound.play();
}
wrongBtn.onclick = function() {
    sound.src = "./sounds/wrong.mp3";
    image.src = "./images/wrong.gif";
    document.body.style.backgroundColor = "AntiqueWhite";
    sound.play();
}

sound.onended = function() {
    image.src = "./images/sound.png";
    document.body.style.backgroundColor = "coral";
}
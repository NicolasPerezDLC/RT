
let startButton = document.getElementById('start')
let playScreen = document.getElementById('play')
let gameScreen = document.getElementById('game')
let resetButton = document.getElementById('reset');

startButton.onclick = () =>{
  playScreen.style.visibility = "hidden";
  gameScreen.style.visibility = "visible";
}

resetButton.onclick = () =>{
    playScreen.style.visibility = "visible";
    gameScreen.style.visibility = "hidden";
}
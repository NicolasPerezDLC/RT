
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

// --------------------------------- timer --------------------------------- //

let timerThree = document.getElementById('three')
let timerTwo = document.getElementById('two')
let timerOne = document.getElementById('one')

let count = 3;
function timer() {
    if (count > 0) {
        console.log(count);
        count--;
        setTimeout(timer, 700);
    }
    else {
        timerThree.style.visibility = "hidden"
        timerTwo.style.visibility = "visible"  
    }
}
timer();

let countTwo = 3;
function timer2() {
    if (countTwo > 0) {
        console.log(countTwo);
        countTwo--;
        setTimeout(timer2, 1200);
    }
    else {
        timerTwo.style.visibility = "hidden"
        timerOne.style.visibility = "visible"  
    }
}
timer2();

let countThree = 3;
function timer3() {
    if (countThree > 0) {
        console.log(countThree);
        countThree--;
        setTimeout(timer3, 1700);
    }
    else {
        timerOne.style.visibility = "hidden"
    }
}
timer3();
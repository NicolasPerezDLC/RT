
let startButton = document.getElementById('start')
let playScreen = document.getElementById('play')
let gameScreen = document.getElementById('game')
let resetButton = document.getElementById('reset');

startButton.onclick = () => {
    playScreen.style.visibility = "hidden";
    gameScreen.style.visibility = "visible";
    spawnTarget.style.visibility = "visible";
   
    //   ----------- //
    
    // setTimeout(timer(), 700);
    // setTimeout(timer2(), 1200);
    // setTimeout(timer3(), 1700);
}

// resetButton.onclick = () => {
    playScreen.style.visibility = "visible";
    gameScreen.style.visibility = "hidden";
    spawnTarget.style.visibility = "hidden";
    
    // -------------//
    
    // clearTimeout(setTimeout(timer, 700))
    // clearTimeout(setTimeout(timer2, 1200));
    // clearTimeout(setTimeout(timer3, 1700));

// }

// --------------------------------- 3,2,1 timer i tired doing it worked can be better with a for loop --------------------------------- //

// let timerThree = document.getElementById('three')
// let timerTwo = document.getElementById('two')
// let timerOne = document.getElementById('one')

// function timer() {
//     let count = 3;
//     if (count > 0) {
//         console.log(count);
//         count--;
//     }
//     else {
//         timerThree.style.visibility = "hidden"
//         timerTwo.style.visibility = "visible"
//     }
// }

// function timer2() {
//     let countTwo = 3;
//     if (countTwo > 0) {
//         console.log(countTwo);
//         countTwo--;
//     }
//     else {
//         timerTwo.style.visibility = "hidden"
//         timerOne.style.visibility = "visible"
//     }
// }

// function timer3() {
//     let countThree = 3;
//     if (countThree > 0) {
//         console.log(countThree);
//         countThree--;
//     }
//     else {
//         timerOne.style.visibility = "hidden"
//     }
// }

// ------------------------------------------ Game --------------------------- //

function generateBall () {
    for (let index = 0; index < 10; index++) {
        let x= Math.floor((Math.random()*5)+1);
        console.log(x);
        document.getElementById('redBall').innerHTML+='<img src="https://www.pngkit.com/png/full/123-1231528_red-ball-png-big-red-dot.png" style="width:200px;" '
        
    }
}

// my attempt to generate a target ^ //

function generate() {

    createCanvas(640,360);

    for (let i = 0; i < 50; i++) {
    let x = Math.floor(Math.random(width));
    let y = Math.floor(Math.random(height));
    let r = 48;
    fill(255, 0, 150); 
    ellipse(x, y, r*2, r*2);
    }
}

// a tutorial I watched by code train ^ didnt work //


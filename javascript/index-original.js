'use strict';


const door1 = document.getElementById("door-1");
const door2 = document.getElementById("door-2");
const door3 = document.getElementById("door-3");

let correctAnswer = (Math.floor(Math.random() * 3)) + 1;
let revealedDoor = 0;
let firstChoice = 0;
let roundInProgress = 1;
let totalTries = 0;
let totalWins = 0;


function resetGame() {
    document.getElementById("door-1").style.borderColor = "teal";
    document.getElementById("door-2").style.borderColor = "teal";
    document.getElementById("door-3").style.borderColor = "teal";
    correctAnswer = (Math.floor(Math.random() * 3)) + 1;
    revealedDoor = 0;
    firstChoice = 0;
    console.log(correctAnswer);
    door1.classList.remove("clicker");
    door2.classList.remove("clicker");
    door3.classList.remove("clicker");
    roundInProgress = 1;
    document.getElementById("reset-button").style.visibility = "hidden";
    document.getElementById("round2button").style.visibility = "hidden";
}

function guessedCorrectly() {
    document.getElementById("round-info").innerText = "You got it!";
    document.getElementById("reset-button").style.visibility = "visible";
}

function round2() {
    let randomTwoNumbers;
    // Choice was #1 and answer is #1, so revealed door needs to be randomized between #2 and #3.
    if ((firstChoice === 1) & (correctAnswer === 1)) {
        randomTwoNumbers = (Math.floor(Math.random() * 2));
        if (randomTwoNumbers === 0) {
            revealedDoor = 2;
        } else {
            (randomTwoNumbers === 1)
            revealedDoor = 3;
        }
    }

    // Choice was #1 and answer is #2, so revealed door needs to be #3.
    if ((firstChoice === 1) & (correctAnswer === 2)) {
        revealedDoor = 3;
    }

    // Choice was #1 and answer is #3, so revealed door needs to be #2.
    if ((firstChoice === 1) & (correctAnswer === 3)) {
        revealedDoor = 2;
    }

    // Choice was #2 and answer is #2, so revealed door needs to be randomized between #1 and #3.
    if ((firstChoice === 2) & (correctAnswer === 2)) {
        randomTwoNumbers = (Math.floor(Math.random() * 2));
        if (randomTwoNumbers === 0) {
            revealedDoor = 1;
        } else {
            (randomTwoNumbers === 1)
            revealedDoor = 3;
        }
    }

    // Choice was #2 and answer is #1, so revealed door needs to be #3.
    if ((firstChoice === 2) & (correctAnswer === 1)) {
        revealedDoor = 3;
    }

    // Choice was #2 and answer is #3, so revealed door needs to be #1.
    if ((firstChoice === 2) & (correctAnswer === 3)) {
        revealedDoor = 1;
    }

    // Choice was #3 and answer is #3, so revealed door needs to be randomized between #1 and #2.
    if ((firstChoice === 3) & (correctAnswer === 3)) {
        randomTwoNumbers = (Math.floor(Math.random() * 2));
        if (randomTwoNumbers === 0) {
            revealedDoor = 1;
        } else {
            (randomTwoNumbers === 1)
            revealedDoor = 2;
        }
    }

    // Choice was #3 and answer is #1, so revealed door needs to be #2.
    if ((firstChoice === 3) & (correctAnswer === 1)) {
        revealedDoor = 2;
    }

    // Choice was #3 and answer is #2, so revealed door needs to be #1.
    if ((firstChoice === 2) & (correctAnswer === 3)) {
        revealedDoor = 1;
    }


//         let x = document.getElementById("door-1-back");
//         console.log(x)
//         if (correctAnswer === firstChoice) {
//             x.style.backgroundColor = "gold";

let doorToBeRevealed = `door${revealedDoor}`;
let showRevealedDoor = document.getElementById(`door-${revealedDoor}-back`);
showRevealedDoor.style.backgroundColor = "gray";
doorToBeRevealed.classList.add("clicker");

document.getElementById(`door-${revealedDoor}-inner`).style.transform = "rotateY(180deg)";

}


function choose1() {
    firstChoice = 1;
    document.getElementById("door-1-front").style.backgroundColor = "rgb(1, 97, 97)";
    document.getElementById("round-info").innerText = "You have chosen option #1. Click the button to reveal one of the other options.";
    document.getElementById("round2button").style.visibility = "visible";
    roundInProgress = 2;
}

function choose2() {
    firstChoice = 2;
    document.getElementById("door-2-front").style.backgroundColor = "rgb(1, 97, 97)";
    document.getElementById("round-info").innerText = "You have chosen option #2. Click the button to reveal one of the other options.";
    document.getElementById("round2button").style.visibility = "visible";
    roundInProgress = 2;
}

function choose3() {
    firstChoice = 3;
    document.getElementById("door-3-front").style.backgroundColor = "rgb(1, 97, 97)";
    document.getElementById("round-info").innerText = "You have chosen option #3. Click the button to reveal one of the other options.";
    document.getElementById("round2button").style.visibility = "visible";
    roundInProgress = 2;
}

// function flip1() {
//     if (roundInProgress === 1) {
//         firstChoice = 1;
//         door1.classList.add("clicker");
//         let x = document.getElementById("door-1-back");
//         console.log(x)
//         if (correctAnswer === firstChoice) {
//             x.style.backgroundColor = "gold";
//             guessedCorrectly();
//         } else {
//             x.style.backgroundColor = "gray";
//         }
//         roundInProgress = 2;
//         document.getElementById("round2button").style.visibility = "visible";
//     }
// }

// function flip2() {
//     if (roundInProgress === 1) {
//         firstChoice = 2;
//         door2.classList.add("clicker");
//         let x = document.getElementById("door-2-back");
//         console.log(x)
//         if (correctAnswer === firstChoice) {
//             x.style.backgroundColor = "gold";
//             guessedCorrectly();
//         } else {
//             x.style.backgroundColor = "gray";
//         }
//         roundInProgress = 2;
//         document.getElementById("round2button").style.visibility = "visible";
//     }
// }

// function flip3() {
//     if (roundInProgress === 1) {
//         firstChoice = 3;
//         door3.classList.add("clicker");
//         let x = document.getElementById("door-3-back");
//         console.log(x)
//         if (correctAnswer === firstChoice) {
//             x.style.backgroundColor = "gold";
//             guessedCorrectly();
//         } else {
//             x.style.backgroundColor = "gray";
//         }
//         roundInProgress = 2;
//         document.getElementById("round2button").style.visibility = "visible";
//     }
// }
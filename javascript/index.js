'use strict';


let correctAnswer = (Math.floor(Math.random() * 3)) + 1;
let revealedDoor = 0;
let firstChoice = 0;
let roundInProgress = 1;
let totalTries = 0;
let totalKeepTries = 0;
let totalChangeTries = 0;
let totalWins = 0;
let totalKeepWins = 0;
let totalChangeWins = 0;
document.getElementById("total-wins").innerText = `Total Plays: ${totalTries} Total Wins: ${totalWins}`;

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
    document.getElementById("keep-button").style.visibility = "hidden";
    document.getElementById("change-button").style.visibility = "hidden";

    document.getElementById("door-1-back").style.backgroundColor = "gray";
    document.getElementById("door-2-back").style.backgroundColor = "gray";
    document.getElementById("door-3-back").style.backgroundColor = "gray";
}

function guessedCorrectly() {
    document.getElementById("round-info").innerText = "You got it!";
    document.getElementById("reset-button").style.visibility = "visible";
}


function round3Keep() {
    if (firstChoice === correctAnswer) {
        // Correct choice!
        document.getElementById("round-info").innerText = `You kept your choice and won!`;
        totalTries++;
        totalKeepTries++;
        totalWins++;
        totalKeepWins++;
    } else {
        // Incorrect choice!
        document.getElementById("round-info").innerText = `You kept your choice and lost!`;
        totalTries++;
        totalKeepTries++;
    }

    document.getElementById("total-wins").innerText = `Total Plays: ${totalTries} Total Wins: ${totalWins}`;
    document.getElementById("reset-button").style.visibility = "visible";
    document.getElementById("keep-button").style.visibility = "hidden";
    document.getElementById("change-button").style.visibility = "hidden";
}

function round3Change() {
    if (firstChoice === correctAnswer) {
        // Incorrect choice, because it means the user switched.
        document.getElementById("round-info").innerText = `You changed your choice and lost!`;
        totalTries++;
        totalChangeTries++;
    } else {
        // Correct choice!
        document.getElementById("round-info").innerText = `You changed your choice and won!`;
        totalTries++;
        totalChangeTries++;
        totalWins++;
        totalChangeWins++;
    }


    document.getElementById("reset-button").style.visibility = "visible";
    document.getElementById("keep-button").style.visibility = "hidden";
    document.getElementById("change-button").style.visibility = "hidden";
    resetGame();
}


function round2() {
    if (roundInProgress === 2) {
        let randomTwoNumbers;
        // Choice was #1 and answer is #1, so revealed door needs to be randomized between #2 and #3.
        if ((firstChoice === 1) & (correctAnswer === 1)) {
            randomTwoNumbers = (Math.floor(Math.random() * 2));
            if (randomTwoNumbers === 0) {
                revealedDoor = 2;
            } else {
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
                revealedDoor = 2;
            }
        }

        // Choice was #3 and answer is #1, so revealed door needs to be #2.
        if ((firstChoice === 3) & (correctAnswer === 1)) {
            revealedDoor = 2;
        }

        // Choice was #3 and answer is #2, so revealed door needs to be #1.
        if ((firstChoice === 3) & (correctAnswer === 2)) {
            revealedDoor = 1;
        }


        if (revealedDoor === 1) {
            document.getElementById("door-1").classList.add("clicker");
        } else if (revealedDoor === 2) {
            document.getElementById("door-2").classList.add("clicker");
        } else if (revealedDoor === 3) {
            document.getElementById("door-3").classList.add("clicker");
        }

        console.log(`player choice is ${firstChoice}, revealed door is ${revealedDoor}, winning door is ${correctAnswer}.`)
        document.getElementById("round-info").innerText = `Door #${revealedDoor} has been revealed to be empty. Do you want to stick with your original choice of ${firstChoice} or choose the other door? Click your choice now.`;
        document.getElementById("round2button").style.visibility = "hidden";
        document.getElementById("keep-button").style.visibility = "visible";
        document.getElementById("change-button").style.visibility = "visible";

        document.getElementById(`door-${revealedDoor}-inner`).style.transform = "rotateY(180deg)";
        roundInProgress = 3;

    }

}


function choose1() {
    if (roundInProgress === 1) {
        firstChoice = 1;
        document.getElementById("door-1-front").style.backgroundColor = "rgb(1, 97, 97)";
        document.getElementById("round-info").innerText = "You have chosen option #1. Click the button to reveal one of the other options.";
        document.getElementById("round2button").style.visibility = "visible";
        roundInProgress = 2;
    } else if (roundInProgress === 3) {
        round3();
        if (correctAnswer === 1) {
            // Correct!

        }
    }
}

function choose2() {
    if (roundInProgress === 1) {
        firstChoice = 2;
        document.getElementById("door-2-front").style.backgroundColor = "rgb(1, 97, 97)";
        document.getElementById("round-info").innerText = "You have chosen option #2. Click the button to reveal one of the other options.";
        document.getElementById("round2button").style.visibility = "visible";
        roundInProgress = 2;
    } else if (roundInProgress === 3) {
        round3();
    }
}

function choose3() {
    if (roundInProgress === 1) {
        firstChoice = 3;
        document.getElementById("door-3-front").style.backgroundColor = "rgb(1, 97, 97)";
        document.getElementById("round-info").innerText = "You have chosen option #3. Click the button to reveal one of the other options.";
        document.getElementById("round2button").style.visibility = "visible";
        roundInProgress = 2;
    } else if (roundInProgress === 3) {
        round3();
    }
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
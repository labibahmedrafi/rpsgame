let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgBox = document.querySelector("#msg");

const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#computer-score");

const genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
} // modular method, we can use this further just calling the funx name.

const drawGame = () => {
    // console.log("This is a Draw game.");
    msgBox.innerText = "This is a Draw game.";
    msgBox.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoise, compChoise) => {
    if(userWin) {
        userScore++;
        userScoreBoard.innerText = userScore;
        // console.log("You Win!!!");
        msgBox.innerText = `You Win!!! Your ${userChoise} beats ${compChoise}`;
        msgBox.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreBoard.innerText = compScore;
        // console.log("You Lose!!!");
        msgBox.innerText = `You Lose!!! ${compChoise} beats Your ${userChoise}`;
        msgBox.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("User choice is: ", userChoice);
    // computer choice
    const compChoice = genComChoice();
    // console.log("Computer choice is: ", compChoice);

    if(userChoice === compChoice) {
        // draw game;
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // paper, scissor
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            // paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // user choice and it print the id of the rock,paper,scissor.
    // console.log("Choice was Clicked!!!", userChoice);
    playGame(userChoice);
    });
});
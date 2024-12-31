let userScore = 0;
let computerScore = 0;
let totalDraw = 0;

const user = document.getElementById("user");
const computer = document.getElementById("computer");
const draw = document.getElementById("draw");
const msg = document.querySelector("#msg");
const reset = document.getElementById("reset");
const choices = document.querySelectorAll(".choice");

reset.style.display = "none"; // Initially hide the reset button

const generateCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game Draw.";
    msg.style.backgroundColor = "#432818";
    totalDraw++;
    draw.innerText = totalDraw;
    toggleResetButton();
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#44AF69";
        userScore++;
        user.innerText = userScore;
    } else {
        msg.innerText = `You Lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#6F1D1B";
        computerScore++;
        computer.innerText = computerScore;
    }
    toggleResetButton();
};

const resetGame = () => {
    userScore = 0;
    computerScore = 0;
    totalDraw = 0;
    draw.innerText = totalDraw;
    user.innerText = userScore;
    computer.innerText = computerScore;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#432818";
    toggleResetButton();
};

const toggleResetButton = () => {
    if (userScore === 0 && computerScore === 0 && totalDraw === 0) {
        reset.style.display = "none";
    } else {
        reset.style.display = "block";
    }
};

const playGame = (userChoice) => {
    console.log("user choice =>", userChoice);
    const compChoice = generateCompChoice();
    console.log("computer choice =>", compChoice);

    if (userChoice === compChoice) {
        drawGame();
        return;
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
           if(compChoice == "Paper"){
            userWin = false;
           }
           else{
            userWin = true;
           }
        }
        else if(userChoice == "Paper"){
            if(compChoice == "Scissors"){
                userWin = false;
            }
            else{
                userWin = true;
            }
            
        }
        else{
            if(compChoice == "Rock"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice, "was clicked.");
        playGame(userChoice);
    });
});

reset.addEventListener("click", resetGame);

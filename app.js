let userScore =0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const computerScore = document.querySelector("#Computer-score");

const gencomChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () =>{
    msg.innerText = "Game was Draw . Play Again";
    msg.style.backgroundColor ="#081b31";
}

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        computerScore.innerText = compScore;
        msg.innerText = `You loose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice) =>{
    const compChoice = gencomChoice();
    if(userChoice === compChoice){
        // draw function
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock ,paper
            userWin =compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
     
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    })
})


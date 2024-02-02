let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");

const Draw = () =>{
    console.log("Match Draw , Play again !");
    msg.innerText = "Match Draw , Play again !";
    msg.style.backgroundColor ="darksalmon";
}

const showWinner = (userWin,compChoice,userChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
        msg.style.color = "white";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lost ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="Red";
        msg.style.color = "white";
    }
}

let playgame = (userChoice) =>{
    let compChoice = genCompChoice();
    if(compChoice === userChoice){
        Draw();
    }
    else
    {
        let userWin = "true";
        if(compChoice === "rock"){
             userWin = userChoice == "scissor" ? false : true;
        }else if(compChoice === "scissor"){
            userWin = userChoice == "paper" ? false : true;
        }else if(compChoice === "paper"){
            userWin = userChoice == "rock" ? false : true;
        }
        else{
            userWin = userChoice == "scissor" ? false : true;
        }
    showWinner(userWin,compChoice,userChoice);
    }
    
}

let genCompChoice = () =>{
    const opt = ["rock","paper","scissor"];
    const ranindx = Math.floor(Math.random()*3);
    return opt[ranindx];
}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})
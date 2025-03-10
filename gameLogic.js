function playGame() {
    const playerChoice = document.querySelector('input[name = "choice"]:checked').value;

    const choices = ["Rock", "Paper", "Scissors", "Spock"];
    const robotChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("playerChoice").innerText = playerChoice;
    document.getElementById("robotChoice").innerText = robotChoice;

    let decision = "";
    let BackColor = "";

    if(playerChoice === robotChoice){
        decision = "Tie";
        BackColor = "blue";
    }else if(
    (playerChoice === "Scissors" && robotChoice === "Rock") ||
    (playerChoice === "Rock" && robotChoice === "Paper") ||
    (playerChoice === "Paper" && robotChoice === "Scissors")
    ) {
        decision = "You Lose";
        BackColor = "red";
    }else if (robotChoice == "Spock"){
        decision = "You Lose";
        BackColor = "red";
    }else{
        decision = "You Win";
        BackColor = "green";
    }

    alert(decision);
    document.body.style.backgroundColor = BackColor;

    return false;
}


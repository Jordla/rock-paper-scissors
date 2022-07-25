function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    const computerSelection = rps[Math.floor(Math.random() * rps.length)];
    return computerSelection;
}

function playSingleRound(playerSelection, computerSelection) {
    let status = "";
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return msg = "It's a tie."
    }

    //Conditions for rock
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return msg = "You Win. Rock beats scissors.";
        } else { 
            return msg = "You Lose. Rock loses to paper"; 
        }
    }

    //Conditions for paper
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return msg = "You Win. Paper beats rock.";
        } else { 
            return msg = "You Lose. Paper loses to scissors."; 
        }
    }

    //Conditions for scissors
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return msg = "You Win. Scissors beats paper.";
        } else { 
            return msg = "You Lose. Scissors loses to rock."; 
        }
    }

    // Conditions
        // Conditions (flipped for both computer and player)
         // Tie 

            // rock > sissors 
            // scissors > paper
            // paper > rock 

            // Tie 
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose either rock, paper or scissors.", getComputerChoice());
        console.log(playSingleRound(playerSelection, getComputerChoice()));
    }
}

game();
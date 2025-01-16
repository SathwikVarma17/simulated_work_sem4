function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let resultMessage;

    if (playerChoice === computerChoice) {
        resultMessage = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    document.getElementById('result').innerText = resultMessage;
}

document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultText = document.getElementById('result-text');
    const options = ['rock', 'paper', 'scissors'];

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const userChoice = choice.id;
            const computerChoice = options[Math.floor(Math.random() * options.length)];
            const result = getResult(userChoice, computerChoice);
            resultText.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
        });
    });

    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a draw!";
        } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
                   (userChoice === 'scissors' && computerChoice === 'paper') ||
                   (userChoice === 'paper' && computerChoice === 'rock')) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
});
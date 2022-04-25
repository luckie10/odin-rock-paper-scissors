const buttons = document.querySelectorAll('button');

const score = {
	player: 0,
	cpu: 0
}

function computerPlay () {
	const options = ["rock", "paper", "scissors", "lizard", "spock"];

	return options[Math.floor(Math.random() * options.length)];
}

function displayMessage(message) {
	const display = document.querySelector(".announce");

	display.textContent = message;
}

function updateScoreDisplay () {
	const playerScore = document.querySelector("#playerScore");
	const cpuScore = document.querySelector("#cpuScore");

	playerScore.textContent = score.player;
	cpuScore.textContent = score.cpu;
}

function playRound(playerSelection, computerSelection) {
	computerSelection = computerSelection || computerPlay();
	
	if (playerSelection === computerSelection) {
		displayMessage("Tie round!")
	} else if (
			playerSelection === "rock" && (computerSelection === "lizard" ||
					computerSelection === "scissors") ||
			playerSelection === "paper" && (computerSelection === "rock" ||
					computerSelection === "spock") ||
			playerSelection === "scissors" && (computerSelection === "paper" ||
					computerSelection === "lizard") ||
			playerSelection === "lizard" && (computerSelection === "spock" ||
					computerSelection === "paper") ||
			playerSelection === "spock" && (computerSelection === "scissors" ||
					computerSelection === "rock")
	) {
		displayMessage("Player wins the round!!")
		score.player++;
		updateScoreDisplay()
		console.log(`Player: ${score.player}`);
	} else {
		displayMessage("CPU wins the round!!!")
		score.cpu++;
		updateScoreDisplay()
		console.log(`CPU: ${score.cpu}`);
	}
}

function resetScore() {
	score.player = 0;
	score.cpu = 0;
	
	updateScoreDisplay();
}

buttons.forEach(button => {
	button.addEventListener("click", event => {
		playRound(event.target.id);

		if (score.player === 5){
			displayMessage("Player WINS the Game!!")
			resetScore();
		} else if (score.cpu === 5) {
			displayMessage("CPU WINS the Game!!!")
			resetScore();
		}
	})
});

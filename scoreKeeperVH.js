const player1 = {
    score: 0,
    button: document.querySelector('.player1'),
    scoreSpan: document.querySelector('.p1ScoreSpan'),
    player: 'Player 1'
}

const player2 = {
    score: 0,
    button: document.querySelector('.player2'),
    scoreSpan: document.querySelector('.p2ScoreSpan'),
    player: 'Player 2'
}

const scoreLimitSelection = document.querySelector('.score-limit');
const resetButton = document.querySelector('.reset');

const winner = document.querySelector('.winner');

let scoreLimit = 1;
let isGameOver = false;

scoreLimitSelection.addEventListener('input', function () {
    // console.dir(scoreLimitSelection);
    scoreLimit = parseInt(scoreLimitSelection.value);
    reset();
})

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === scoreLimit) {
            isGameOver = true;
            player.scoreSpan.classList.add('green');
            opponent.scoreSpan.classList.add('red');
            winner.innerText = `${player.player} wins!! Hit reset to track a new game.`;
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.scoreSpan.innerText = player.score;
    }
}

player1.button.addEventListener('click', function () { updateScore(player1, player2) })

player2.button.addEventListener('click', function () { updateScore(player2, player1) })


function reset() {
    for (let player of [player1, player2]) {
        player.score = 0;
        player.scoreSpan.innerText = 0;
        player.scoreSpan.classList.remove('red', 'green');
        player.button.disabled = false;
    }
    isGameOver = false;
    winner.innerText = '';
}

resetButton.addEventListener('click', reset)
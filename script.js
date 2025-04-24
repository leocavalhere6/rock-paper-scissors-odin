let humanScore = 0;
let computerScore = 0;

function playRound(playerSelection){

    const computerSelection = randomComputer();
    showSelections(playerSelection,computerSelection);

    if (playerSelection ==='rock' && computerSelection === 'rock') {
        document.querySelector('#text').innerText = 'Tie. Both chose rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        document.querySelector('#text').innerText ='You lost!'
        computerScore++;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors')) {
        document.querySelector('#text').innerText ='You win!'
        humanScore ++;
    }

    if (playerSelection ==='paper' && computerSelection === 'paper'){
        document.querySelector('#text').innerText ='Tie. Both chose a paper.'
    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        document.querySelector('#text').innerText ='You lost!'
        computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        document.querySelector('#text').innerText ='You win!'
        humanScore ++;
    }

    if (playerSelection ==='scissors' && computerSelection === 'scissors'){
        document.querySelector('#text').innerText ='Tie. Both chose scissors.'
    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        document.querySelector('#text').innerText ='You win!'
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        document.querySelector('#text').innerText ='You lost!'
        humanScore ++;
    }

    updateScore(humanScore,computerScore);
}


function updateScore(humanScore, computerScore){
    const $score = document.querySelector('#score  p');
    $score.innerText = `Punctuation: ${humanScore} - ${computerScore}`
    if(humanScore === 5 || computerScore === 5){
        setTimeout(() => finishGame(humanScore,computerScore) ,200)
    }
}

function finishGame(humanScore,computerScore){
    const $container = document.querySelector('#container');
    $container.classList.add('hidden');
    const $button = document.querySelector('#restart');
    const $results = document.querySelector('#results');
    if(humanScore > computerScore){
        $results.innerText = `YOU WiN! The final score was: ${humanScore} - ${computerScore}`;
    }
    if(humanScore < computerScore){
        $results.innerText = `YOU LOST! The final score was: ${humanScore} - ${computerScore}`;
    }
    $button.classList.remove('hidden');
    $results.classList.remove('hidden');

    $button.addEventListener('click',() => restartGame())
}

function restartGame(){
    humanScore = 0;
    computerScore = 0;
    
    document.querySelector('#text').innerText = '';

    const $button = document.querySelector('#restart');
    const $results = document.querySelector('#results');
    $button.classList.add('hidden');
    $results.classList.add('hidden');

    const $score = document.querySelector('#score  p');
    $score.innerText = `Score: 0 - 0`

    const $playerSelection = document.querySelector('#human-selection');
    const $computerSelection = document.querySelector('#computer-selection')
    $playerSelection.className = '';
    $computerSelection.className = '';

    const $container = document.querySelector('#container');
    $container.classList.remove('hidden');
}

function showSelections(playerSelection, computerSelection){
    const $playerSelection = document.querySelector('#human-selection');
    const $computerSelection = document.querySelector('#computer-selection')
    $playerSelection.className = '';
    $computerSelection.className = '';
    $playerSelection.classList.add(playerSelection);
    $computerSelection.classList.add(computerSelection)
}

function randomComputer(){
    let options = ['rock', 'paper', 'scissors']
    return (options[Math.floor(Math.random() *options.length)])
}

function initialize() {
    const $options = document.querySelectorAll('#options>div');
    $options.forEach(option => option.addEventListener('click', (e) => 
    playRound(e.target.className)));
}

initialize();

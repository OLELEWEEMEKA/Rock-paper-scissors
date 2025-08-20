    const score =JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        tie: 0
    };

    updateScore();

    function myFunctionRock(){
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber>=0 && randomNumber<1/3)
    {
        computerMove = 'rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3)
    {
        computerMove = 'paper';
    } 
    else if(randomNumber>=2/3 && randomNumber<=1)
    {
        computerMove = 'scissors';
    }
    console.log(computerMove);
    let result = '';
    if (computerMove === 'rock'){
        result= 'Tie.';
    }
    else if (computerMove === 'paper'){
        result= 'You lose.';
    }
    else if (computerMove === 'scissors'){
        result= 'You win.';
    }

    if (result === 'You win.'){
        score.wins++;
    }
    else if(result === 'You lose.'){
        score.losses++;
    }
    else if (result === 'Tie.'){
        score.tie++;
    }

    localStorage.setItem('score', JSON.stringify(score))

    //You <img src="rock-emoji.png" alt="Rock" class="move-icon"><img src="scissors-emoji.png" alt="Scissors" class="move-icon"> Computer

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img src="rock-emoji.png" alt="Rock" class="move-icon">
    <img src="${computerMove}-emoji.png" alt="Computer Move" class="move-icon"> Computer.`;
    updateScore();


    }

    function myFunctionPaper(){
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber>=0 && randomNumber<1/3)
    {
    computerMove = 'rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3)
    {
    computerMove = 'paper';
    } 
    else if(randomNumber>=2/3 && randomNumber<=1)
    {
    computerMove = 'scissors';
    }
    console.log(computerMove);
    let result = '';
    if (computerMove === 'rock'){
    result= 'You win.';
    }
    else if (computerMove === 'paper'){
    result= 'Tie.';
    }
    else if (computerMove === 'scissors'){
    result= 'You lose.';
    }

    if (result === 'You win.'){
    score.wins++;
    }
    else if(result === 'You lose.'){
    score.losses++;
    }
    else if (result === 'Tie.'){
    score.tie++;
    }

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img src="paper-emoji.png" alt="Paper" class="move-icon">
<img src="${computerMove}-emoji.png" alt="Computer Move" class="move-icon"> Computer.`;
    updateScore();
    }

    function myFunctionScissor(){
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber>=0 && randomNumber<1/3)
    {
    computerMove = 'rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3)
    {
    computerMove = 'paper';
    } 
    else if(randomNumber>=2/3 && randomNumber<=1)
    {
    computerMove = 'scissors';
    }
    console.log(computerMove);
    let result = '';
    if (computerMove === 'rock'){
    result= 'You lose.';
    }
    else if (computerMove === 'paper'){
    result= 'You win.';
    }
    else if (computerMove === 'scissors'){
    result= 'Tie.';
    }

    if (result === 'You win.'){
    score.wins++;
    }
    else if(result === 'You lose.'){
    score.losses++;
    }
    else if (result === 'Tie.'){
    score.tie++;
    }

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img src="scissors-emoji.png" alt="Paper" class="move-icon">
<img src="${computerMove}-emoji.png" alt="Computer Move" class="move-icon"> Computer.`;

    updateScore();
    }

    function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.tie = 0;
    localStorage.removeItem('score');
    updateScore();

    }

    // function autoPlay(){
    //     setInterval(() => {
    //         'rock' = computerMove;
    //         myFunctionRock();
    //     }, 1000);
    // }
    function updateScore(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
    }
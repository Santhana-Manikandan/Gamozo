
  const choices = ['Rock', 'Paper', 'Scissors'];
  const images = {
    'Rock': 'rock.png',
    'Paper': 'paper.png',
    'Scissors': 'scissors.png'
  };

  let wins = 0, losses = 0, draws = 0;

  function play(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    
    document.getElementById('user-picked').innerHTML = `<img src="${images[userChoice]}" alt="${userChoice}" class="picked-img">`;
    document.getElementById('computer-picked').innerHTML = `<img src="${images[computerChoice]}" alt="${computerChoice}" class="picked-img">`;

    
    let result;
    if (userChoice === computerChoice) {
      result = "It's a Draw!";
      draws++;
    } else if (
      (userChoice === 'Rock' && computerChoice === 'Scissors') ||
      (userChoice === 'Paper' && computerChoice === 'Rock') ||
      (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      result = "You Win!";
      wins++;
      
    } else {
      result = "You Lose!";
      losses++;
      
    }

    document.getElementById('result').textContent = result;
    document.getElementById('score').textContent = `Wins: ${wins} | Losses: ${losses} | Draws: ${draws}`;
  }

  function resetGame() {
    wins = 0;
    losses = 0;
    draws = 0;
    document.getElementById('user-picked').innerHTML = '';
    document.getElementById('computer-picked').innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/751/751463.png" alt="?" class="placeholder" width="100">`;
    document.getElementById('result').textContent = '';
    document.getElementById('score').textContent = 'Wins: 0 | Losses: 0 | Draws: 0';
  }


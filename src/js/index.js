document.addEventListener('DOMContentLoaded', () => {
  const choicesList = document.querySelector('#choices')
  const choiceLevelBtn = document.querySelector('#choice-level-btn')
  const startCanvas = document.querySelector('#start-canvas')
  const gameCanvas = document.querySelector('#game-canvas')
  const resultCanvas = document.querySelector('#result-canvas')
  const maxNumber = document.querySelector('#max-number')
  const answerBtn = document.querySelector('#answer-btn')
  const usersAnswer = document.querySelector('#users-answer')
  const countOfTries = document.querySelector('#tries-count')
  const hintText = document.querySelector('#hint-text')
  const resultScore = document.querySelector('#result-score')
  const newGameBtn = document.querySelector('#new-game-btn')
  const tostCard = document.querySelector('#history')
  const historyList = document.querySelector('#history-list')
  const closeHistoryBtn = document.querySelector('#close-history')

  const levels = ['Easy', 'Medium', 'Hard']
  const moreHintsArr = [
    "A little more, please.",
    "Just a bit more would be great.",
    "Let's add a touch more.",
    "Could we increase it slightly?",
    "I think we need a little extra.",
    "Adding a tad more would be perfect.",
    "Let's go for a bit extra.",
    "I'm thinking we could use a bit more of that.",
    "How about adding just a smidgen more?"
  ]
  const lessHintsArr = [
    "A little less, please.",
    "Just a bit less would be great.",
    "Let's reduce it slightly.",
    "Could we decrease it a bit?",
    "I think we need a little less.",
    "Reducing a tad would be perfect.",
    "Let's go for a bit less.",
    "I'm thinking we could use a bit less of that.",
    "How about subtracting just a smidgen?"
  ]

  const difficultyLevel = new DifficultyLevel()
  const game = new Game(0, moreHintsArr, lessHintsArr);

  const historyHandler = () => {
    tostCard.classList.add('show')
    historyList.innerHTML = '';
    const historyItems = getLocalStorageScore()
    // localStorage.clear()
    if (!historyItems.length) {
      historyList.innerHTML = "You don't have history yet.";
    }
    else {
      historyItems.forEach((item) => {
        const liElement = document.createElement('li')
        liElement.innerHTML = `
          <label>${item.level} - ${item.result} tries</label>
        <br>`;
        historyList.appendChild(liElement);
      })
    }
    setTimeout(() => {
      tostCard.classList.remove('show')
    }, 1000 * 11)
  }

  const startPage = () => {
    choicesList.innerHTML = '';
    levels.forEach((level) => {
      const liElement = document.createElement('li')
      liElement.innerHTML = `
        <input type="radio" name="choice" value="${level}">
        <label>${level}</label>
      <br>`;
      choicesList.appendChild(liElement);
    })
  }
  historyHandler()
  startPage()

  const levelBtnHandler = () => {
    const choices = document.querySelectorAll('input[name=choice]');
    const choice = [...choices].filter(i => i.checked);
    if (choice.length) {
      difficultyLevel.changeLevel(choice[0].value)
      difficultyLevel.checkLevelHandler()
      startCanvas.style.display = 'none';
      gameCanvas.style.display = 'flex';
      startGame()
    }
  }

  const startGame = () => {
    game.changeDifficulty(difficultyLevel.answer);
    game.changeCorrectAnswer()
    maxNumber.textContent = difficultyLevel.answer
    console.log(game);
  }

  const checkAnswerHandler = () => {
    if (game.attempt(usersAnswer.value)) {
      setLocalStorageScore(game.tries)
      historyHandler()
      resultScore.textContent = game.tries
      gameCanvas.style.display = 'none';
      resultCanvas.style.display = 'flex';
    }
    hintText.textContent = game.randomHint
    countOfTries.textContent = game.tries;
  }

  const newGame = () => {
    game.tries = 0;
    countOfTries.textContent = 0
    usersAnswer.value = ''
    hintText.textContent = 'Write the number'
    startPage()
    resultCanvas.style.display = 'none';
    startCanvas.style.display = 'flex';
  }

  const setLocalStorageScore = (tries) => {
    let globalScore = localStorage.getItem('score') || '[]'
    globalScore = JSON.parse(globalScore);
    globalScore.push({ result: tries, level: difficultyLevel.level })
    localStorage.setItem('score', JSON.stringify(globalScore));
  }

  function getLocalStorageScore() {
    let globalScore = localStorage.getItem('score') || '[]'
    return JSON.parse(globalScore);
  }


  choiceLevelBtn.addEventListener('click', levelBtnHandler);
  answerBtn.addEventListener('click', checkAnswerHandler);
  newGameBtn.addEventListener('click', newGame);
  closeHistoryBtn.addEventListener('click', () => {
    tostCard.classList.remove('show')
  });

})
document.addEventListener('DOMContentLoaded', () => {
  const levels = ['Easy', 'Medium', 'Hard']
  const choicesList = document.querySelector('#choices')
  const choiceLevelBtn = document.querySelector('#choice-level-btn')
  const startCanvas = document.querySelector('#start-canvas')
  const gameCanvas = document.querySelector('#game-canvas')
  const resultCanvas = document.querySelector('#result-canvas')
  const maxNumber = document.querySelector('#max-number')
  const answerBtn = document.querySelector('#answer-btn')

  const difficultyLevel = new DifficultyLevel()
  const game = new Game();

  levels.forEach((level) => {
    const liElement = document.createElement('li')
    liElement.innerHTML = `
      <input type="radio" name="choice" value="${level}">
      <label>${level}</label>
    <br>`;
    choicesList.appendChild(liElement);
  })

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
    game.changeDifficulty(difficultyLevel.level);
    game.changeCorrectAnswer()
    maxNumber.textContent = difficultyLevel.answer
    console.log(game);
  }

  const checkAnswerHandler = () => {
    console.log(34);
  }



  choiceLevelBtn.addEventListener('click', levelBtnHandler);
  answerBtn.addEventListener('click', checkAnswerHandler);







})
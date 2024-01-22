document.addEventListener('DOMContentLoaded', () => {
  const levels = ['Easy', 'Medium', 'Hard']
  const choicesList = document.querySelector('#choices')
  const choiceLevelBtn = document.querySelector('#choice-level-btn')
  const startCanvas = document.querySelector('#start-canvas')
  const gameCanvas = document.querySelector('#game-canvas')
  const resultCanvas = document.querySelector('#result-canvas')

  const level = new DifficultyLevel()

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
      level.changeLevel(choice[0].value)
      // console.log(levelScore.checkLevelHandler());
      startCanvas.style.display = 'none';
      gameCanvas.style.display = 'flex';

    }

  }


  choiceLevelBtn.addEventListener('click', levelBtnHandler);







})
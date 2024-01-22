document.addEventListener('DOMContentLoaded', () => {
  const levels = ['Easy', 'Medium', 'Hard']
  const choicesList = document.querySelector('#choices')
  const choiceLevelBtn = document.querySelector('#choiceLevelBtn')



  levels.forEach((level) => {
    const liElement = document.createElement('li')
    liElement.innerHTML = `
      <input type="radio" name="choice" value="${level}">
      <label>${level}</label>
    <br>`;
    choicesList.appendChild(liElement);
  })

  const levelBtnHandler = () => {
    console.log(213);
  }


  choiceLevelBtn.addEventListener('click', levelBtnHandler);







})
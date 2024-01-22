class Game {
  constructor(difficulty) {
    this.difficulty = difficulty;
    this.correctAnswer = null;
  }
  attempt(value) {

  }
  changeCorrectAnswer() {
    this.correctAnswer = Math.floor(Math.random() * this.difficulty + 1)
  }
  changeDifficulty(difficulty) {
    this.difficulty = difficulty;
  }
}
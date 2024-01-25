class Game {
  constructor(maximum, moreHintsArr, lessHintsArr) {
    this.maximum = maximum;
    this.moreHintsArr = moreHintsArr;
    this.lessHintsArr = lessHintsArr;
    this.correctAnswer = null;
    this.tries = 0
    this.randomHint = ''
  }
  attempt(value) {
    this.tries++
    const result = +value === this.correctAnswer
    if (!result) {
      +value < this.correctAnswer ? this.getRandomHints(this.moreHintsArr) : this.getRandomHints(this.lessHintsArr)
      return result
    }
    return true
  }
  getRandomHints(arr) {
    this.randomHint = arr[Math.floor(Math.random() * arr.length)]
  }
  changeCorrectAnswer() {
    //changeDifficulty - change maximum - our level
    this.correctAnswer = Math.floor(Math.random() * this.maximum + 1)
  }
  changeDifficulty(maximum) {
    this.maximum = maximum;
  }
}
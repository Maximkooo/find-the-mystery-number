class DifficultyLevel {
  constructor(level, answer) {
    this.level = level;
    this.answer = answer;
  }
  checkLevelHandler() {
    switch (this.level) {
      case 'Easy':
        this.answer = 10
        break
      case 'Hard':
        this.answer = 1000
        break
      default:
        this.answer = 100
        break
    }
  }
  changeLevel(level) {
    this.level = level;
  }
}
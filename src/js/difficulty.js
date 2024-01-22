class DifficultyLevel {
  constructor(level) {
    this.level = level;
  }
  checkLevelHandler() {
    switch (this.level) {
      case 'Easy':
        return 10
      case 'Hard':
        return 1000
      default:
        return 100
    }
  }
  changeLevel(level) {
    this.level = level;
  }
}
export default class GameTile {
  private selected: boolean = false;

  constructor(private readonly solution: boolean) {}

  isCorrect(): boolean {
    return this.selected === this.solution;
  }

  getSolution(): boolean {
    return this.solution;
  }

  isSelected(): boolean {
    return this.selected;
  }

  select(): void {
    if (this.selected) {
      throw new Error('tile already selected');
    }

    if (!this.solution) {
      throw new Error('tile must not be selected');
    }

    this.selected = true;
  }
}

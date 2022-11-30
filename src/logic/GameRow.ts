import GameTile from './GameTile';

export default class GameRow {
  constructor(public readonly tiles: GameTile[]) {}

  isCorrect(): boolean {
    return !this.tiles.some((value) => !value.isCorrect());
  }

  getHints(): number[] {
    return this.tiles
      .reduce(
        (result, tile) => {
          if (tile.getSolution()) {
            result[result.length - 1] += 1;
            return result;
          }

          return result.concat(0);
        },
        [0],
      )
      .filter((hint) => hint !== 0);
  }
}

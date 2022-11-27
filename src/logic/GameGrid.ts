import GameTile from './GameTile';
import GameRow from './GameRow';
import InvalidGridSize from './errors/InvalidGridSize';

export default class GameGrid {
  public readonly columnHints: number[][];

  public readonly rowHints: number[][];

  public readonly rows: GameRow[];

  public readonly columns: GameRow[];

  constructor(public readonly tiles: GameTile[], public readonly size: number) {
    if (tiles.length !== size ** 2) {
      throw new InvalidGridSize(size ** 2, tiles.length);
    }

    this.rows = tiles
      .reduce((result, current, index) => {
        const key = Math.floor((index + 0.1) / size);
        result[key] = result[key].concat(current);
        return result;
      }, new Array(size).fill([]))
      .map((tiles) => new GameRow(tiles));

    this.rowHints = this.rows.map((row) => row.getHints());

    this.columns = tiles
      .reduce((result, current, index) => {
        const key = index % size;
        result[key] = result[key].concat(current);
        return result;
      }, new Array(size).fill([]))
      .map((tiles) => new GameRow(tiles));

    this.columnHints = this.columns.map((column) => column.getHints());
  }

  isCorrect(): boolean {
    return !this.tiles.some((value) => !value.isCorrect());
  }
}

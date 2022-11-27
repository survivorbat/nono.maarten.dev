import GameGrid from './GameGrid';
import GameTile from './GameTile';

const generateGrid = (size: number): GameGrid => {
  const list = new Array(size ** 2).fill(0);

  const result = list.map(() => new GameTile(Math.random() <= 0.7));

  return new GameGrid(result, size);
};

export default generateGrid;

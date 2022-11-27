import GameTile from './GameTile';
import GameRow from './GameRow';
import GameGrid from './GameGrid';

describe('GameGrid', () => {
  describe('constructor', () => {
    const testData = [
      {
        tiles: [],
        size: 0,
        expectedRows: [],
        expectedColumns: [],

        expectedRowHints: [],
        expectedColumnHints: [],
      },
      {
        tiles: [new GameTile(true)],
        size: 1,
        expectedRows: [new GameRow([new GameTile(true)])],
        expectedColumns: [new GameRow([new GameTile(true)])],

        expectedRowHints: [[1]],
        expectedColumnHints: [[1]],
      },
      {
        tiles: [
          new GameTile(false),
          new GameTile(true),
          new GameTile(false),
          new GameTile(true),
        ],
        size: 2,
        expectedRows: [
          new GameRow([new GameTile(false), new GameTile(true)]),
          new GameRow([new GameTile(false), new GameTile(true)]),
        ],
        expectedColumns: [
          new GameRow([new GameTile(false), new GameTile(false)]),
          new GameRow([new GameTile(true), new GameTile(true)]),
        ],

        expectedRowHints: [[1], [1]],
        expectedColumnHints: [[], [2]],
      },
      {
        tiles: [
          new GameTile(false),
          new GameTile(false),
          new GameTile(true),
          new GameTile(true),
          new GameTile(true),
          new GameTile(false),
          new GameTile(false),
          new GameTile(true),
          new GameTile(true),
        ],
        size: 3,
        expectedRows: [
          new GameRow([
            new GameTile(false),
            new GameTile(false),
            new GameTile(true),
          ]),
          new GameRow([
            new GameTile(true),
            new GameTile(true),
            new GameTile(false),
          ]),
          new GameRow([
            new GameTile(false),
            new GameTile(true),
            new GameTile(true),
          ]),
        ],
        expectedColumns: [
          new GameRow([
            new GameTile(false),
            new GameTile(true),
            new GameTile(false),
          ]),
          new GameRow([
            new GameTile(false),
            new GameTile(true),
            new GameTile(true),
          ]),
          new GameRow([
            new GameTile(true),
            new GameTile(false),
            new GameTile(true),
          ]),
        ],

        expectedRowHints: [[1], [2], [2]],
        expectedColumnHints: [[1], [2], [1, 1]],
      },
    ];

    testData.forEach(
      ({
        tiles,
        expectedColumnHints,
        expectedRowHints,
        expectedRows,
        expectedColumns,
        size,
      }) => {
        it(`sets expected fields on grid on ${tiles.length} tiles`, () => {
          // Act
          const grid = new GameGrid(tiles, size);

          // Assert
          expect(grid.rows).toEqual(expectedRows);
          expect(grid.columns).toEqual(expectedColumns);
          expect(grid.rowHints).toEqual(expectedRowHints);
          expect(grid.columnHints).toEqual(expectedColumnHints);
        });
      },
    );
  });

  describe('isCorrect', () => {
    const testData = [
      {
        tiles: [],
        size: 0,
        expected: true,
      },
      {
        tiles: [
          new GameTile(false),
          new GameTile(false),
          new GameTile(false),
          new GameTile(false),
        ],
        size: 2,
        expected: true,
      },
      {
        tiles: [
          new GameTile(false),
          new GameTile(false),
          new GameTile(false),
          new GameTile(false),
          new GameTile(false),
          new GameTile(false),
          new GameTile(false),
          new GameTile(false),
          new GameTile(true),
        ],
        size: 3,
        expected: false,
      },
    ];

    testData.forEach(({ tiles, size, expected }) => {
      it('returns expected value', () => {
        // Arrange
        const grid = new GameGrid(tiles, size);

        // Act
        const result = grid.isCorrect();

        // Assert
        expect(result).toEqual(expected);
      });
    });
  });
});

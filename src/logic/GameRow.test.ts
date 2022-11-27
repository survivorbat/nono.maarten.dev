import GameRow from './GameRow';
import GameTile from './GameTile';

describe('GameRow', () => {
  describe('isCorrect', () => {
    const testData = [
      {
        tiles: [],
        expected: true,
      },
      {
        tiles: [new GameTile(false), new GameTile(false)],
        expected: true,
      },
      {
        tiles: [new GameTile(true)],
        expected: false,
      },
      {
        tiles: [new GameTile(false), new GameTile(true)],
        expected: false,
      },
    ];

    testData.forEach(({ tiles, expected }) => {
      it('returns expected value', () => {
        // Arrange
        const row = new GameRow(tiles);

        // Act
        const result = row.isCorrect();

        // Assert
        expect(result).toEqual(expected);
      });
    });
  });

  describe('getHints', () => {
    const testData = [
      {
        tiles: [],
        expected: [],
      },
      {
        tiles: [new GameTile(true)],
        expected: [1],
      },
      {
        tiles: [new GameTile(false), new GameTile(true)],
        expected: [1],
      },
      {
        tiles: [new GameTile(true), new GameTile(true)],
        expected: [2],
      },
      {
        tiles: [
          new GameTile(true),
          new GameTile(true),
          new GameTile(false),
          new GameTile(true),
        ],
        expected: [2, 1],
      },
      {
        tiles: [
          new GameTile(true),
          new GameTile(true),
          new GameTile(false),
          new GameTile(true),
          new GameTile(true),
          new GameTile(true),
          new GameTile(false),
          new GameTile(false),
          new GameTile(true),
        ],
        expected: [2, 3, 1],
      },
    ];

    testData.forEach(({ tiles, expected }) => {
      it(`returns ${expected.length} hints with ${tiles.length} tiles`, () => {
        // Arrange
        const row = new GameRow(tiles);

        // Act
        const result = row.getHints();

        // Assert
        expect(result).toEqual(expected);
      });
    });
  });
});

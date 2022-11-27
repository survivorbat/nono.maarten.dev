import GameTile from './GameTile';

describe('GameTile', () => {
  describe('isCorrect', () => {
    const testData = [
      { solution: false, selected: false, expected: true },
      { solution: true, selected: true, expected: true },
      { solution: true, selected: false, expected: false },
    ];

    testData.forEach(({ solution, selected, expected }) => {
      it(`Returns ${expected} on selected ${selected} and solution ${solution}`, () => {
        // Arrange
        const tile = new GameTile(solution);

        if (selected) {
          tile.select();
        }

        // Act
        const actual = tile.isCorrect();

        // Assert
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('isSelected', () => {
    it('Returns true on selected', () => {
      // Arrange
      const tile = new GameTile(true);
      tile.select();

      // Act
      const result = tile.isSelected();

      // Assert
      expect(result).toBeTruthy();
    });

    it('Returns false on not selected', () => {
      // Arrange
      const tile = new GameTile(true);

      // Act
      const result = tile.isSelected();

      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe('select', () => {
    it('Selects tile', () => {
      // Arrange
      const tile = new GameTile(true);

      // Act
      tile.select();

      // Assert
      expect(tile.isSelected()).toBeTruthy();
    });

    it('Throws exception on already selected', () => {
      // Arrange
      const tile = new GameTile(true);

      tile.select();

      // Act
      const result = () => tile.select();

      // Assert
      expect(result).toThrowError('tile already selected');
    });

    it('Throws exception on already selected', () => {
      // Arrange
      const tile = new GameTile(false);

      // Act
      const result = () => tile.select();

      // Assert
      expect(result).toThrowError('tile must not be selected');
    });
  });

  describe('getSolution', () => {
    const testData = [true, false];

    testData.forEach((solution) => {
      it(`returns ${solution} on solution ${solution}`, () => {
        // Arrange
        const tile = new GameTile(solution);

        // Act
        const result = tile.getSolution();

        // Assert
        expect(result).toEqual(solution);
      });
    });
  });
});

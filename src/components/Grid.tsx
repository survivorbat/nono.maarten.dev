import * as React from 'react';
import Row from './Row';
import GameGrid from '../logic/GameGrid';
import GameTile from '../logic/GameTile';
import RowHint from './RowHint';
import './Grid.css';

interface GridProps {
  grid: GameGrid;
  select: (tile: GameTile) => void;
}

function Grid({ grid, select }: GridProps) {
  return (
    <div className="grid-container">
      <table className="grid">
        <thead>
          <tr>
            <td />
            {grid.columnHints.map((hints, key) => (
              <td key={key}>
                <RowHint
                  vertical
                  solved={grid.columns[key].isCorrect()}
                  hints={hints}
                />
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {grid.rows.map((row, key) => (
            <Row row={row} columns={grid.columns} key={key} select={select} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;

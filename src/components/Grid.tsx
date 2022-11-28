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
  const tileSize = 80 / (grid.rows.length + 2);
  const tileStyle = { width: `${tileSize}vw`, height: `${tileSize}vw` };

  return (
    <div className="grid-container">
      <div>
        <table className="grid">
          <thead>
            <tr>
              <td style={tileStyle} />
              {grid.columnHints.map((hints, key) => (
                <td style={tileStyle} key={key}>
                  <RowHint
                    vertical
                    solved={grid.columns[key].isCorrect()}
                    hints={hints}
                  />
                </td>
              ))}
              <td style={tileStyle} />
            </tr>
          </thead>
          <tbody>
            {grid.rows.map((row, key) => (
              <Row
                tileStyle={tileStyle}
                row={row}
                columns={grid.columns}
                key={key}
                select={select}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grid;

import * as React from 'react';
import Tile from './Tile';
import GameRow from '../logic/GameRow';
import GameTile from '../logic/GameTile';
import RowHint from './RowHint';

interface RowProps {
  row: GameRow;
  tileStyle: any;
  columns: GameRow[];
  select: (index: GameTile) => void;
}

function Row({
  row, columns, select, tileStyle,
}: RowProps) {
  return (
    <div className="grid-row">
      <div className="grid-column-hint" style={tileStyle}>
        <RowHint
          tileStyle={tileStyle}
          solved={row.isCorrect()}
          hints={row.getHints()}
        />
      </div>
      {row.tiles.map((tile, key) => (
        <Tile
          style={tileStyle}
          solved={columns[key].isCorrect() || row.isCorrect()}
          tile={tile}
          select={select}
          key={key}
        />
      ))}
      <div style={tileStyle} />
    </div>
  );
}

export default Row;

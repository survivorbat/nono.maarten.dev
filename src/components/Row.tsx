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
    <tr>
      <td style={tileStyle}>
        <RowHint solved={row.isCorrect()} hints={row.getHints()} />
      </td>
      {row.tiles.map((tile, key) => (
        <Tile
          style={tileStyle}
          solved={columns[key].isCorrect() || row.isCorrect()}
          tile={tile}
          select={select}
          key={key}
        />
      ))}
    </tr>
  );
}

export default Row;

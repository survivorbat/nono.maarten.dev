import * as React from 'react';
import Tile from './Tile';
import GameRow from '../logic/GameRow';
import GameTile from '../logic/GameTile';
import RowHint from './RowHint';

function Row({
  row,
  columns,
  select,
}: {
  row: GameRow;
  columns: GameRow[];
  select: (index: GameTile) => void;
}) {
  return (
    <tr>
      <td>
        <RowHint solved={row.isCorrect()} hints={row.getHints()} />
      </td>
      {row.tiles.map((tile, key) => (
        <Tile
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

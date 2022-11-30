import * as React from 'react';
import Tile from './Tile';
import GameRow from '../logic/GameRow';
import GameTile from '../logic/GameTile';
import RowHint from './RowHint';
import {Fragment} from "react";

interface RowProps {
  row: GameRow;
  columns: GameRow[];
  select: (index: GameTile) => void;
}

function Row({
  row, columns, select,
}: RowProps) {
  return (
    <Fragment>
      <div className="grid-column-hint">
        <RowHint
          solved={row.isCorrect()}
          hints={row.getHints()}
        />
      </div>
      {row.tiles.map((tile, key) => (
        <Tile
          solved={columns[key].isCorrect() || row.isCorrect()}
          tile={tile}
          select={select}
          key={key}
        />
      ))}
      <div/>
      </Fragment>
      );
}

export default Row;

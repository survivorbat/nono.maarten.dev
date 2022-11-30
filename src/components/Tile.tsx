import * as React from 'react';
import GameTile from '../logic/GameTile';

interface TileProps {
  tile: GameTile;
  style: any;
  solved: boolean;
  select: (tile: GameTile) => void;
}

function Tile({
  tile, select, solved, style,
}: TileProps) {
  return (
    <div
      style={style}
      onClick={!tile.isSelected() && !solved ? () => select(tile) : undefined}
      className={`tile tile-${tile.isSelected() ? '' : 'un'}selected ${
        solved ? 'tile-solved' : ''
      }`}
    />
  );
}

export default Tile;

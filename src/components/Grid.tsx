import * as React from 'react';
import {
  useEffect, useLayoutEffect, useRef, useState,
} from 'react';
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
  const ref = useRef<HTMLDivElement>();
  const [, setWindowWidth] = useState(0);
  const [, setWindowHeight] = useState(0);

  // Should be triggered on window resize to re-render the cell width
  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  const gridLength = grid.rows.length + 2;
  const gridSize = Math.round(Math.log10(window.innerWidth * 25) * 85);
  const gridStyle = {
    gridTemplateColumns: `repeat(${gridLength},1fr)`,
    gridTemplateRows: `repeat(${gridLength}, 1fr)`,
    height: gridSize,
    width: gridSize
  }

  return (
    <>
      <div className="grid-grid" style={gridStyle} ref={ref as any}>
        <div/>
          {grid.columnHints.map((hints, key) => (
            <RowHint
              vertical
              key={key}
              solved={grid.columns[key].isCorrect()}
              hints={hints}
            />
          ))}
        <div/>
        {grid.rows.map((row, key) => (
          <Row
            row={row}
            columns={grid.columns}
            key={key}
            select={select}
          />
        ))}
      </div>
  </>
  );
}

export default Grid;

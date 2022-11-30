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
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  // Should be triggered on window resize to re-render the cell width
  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  useLayoutEffect(() => {
    setElementHeight(ref.current!.offsetHeight);
  }, [windowWidth, windowHeight]);

  const gridLength = grid.rows.length + 2;
  const tileSize = (elementHeight * 0.5) / gridLength;
  const tileStyle = { width: `${tileSize}px`, height: `${tileSize}px` };

  return (
    <div className="grid-grid" ref={ref as any}>
      <div className="grid-row">
        <div style={tileStyle} />
        {grid.columnHints.map((hints, key) => (
          <RowHint
            vertical
            tileStyle={tileStyle}
            key={key}
            solved={grid.columns[key].isCorrect()}
            hints={hints}
          />
        ))}
        <div style={tileStyle} />
      </div>
      {grid.rows.map((row, key) => (
        <Row
          tileStyle={tileStyle}
          row={row}
          columns={grid.columns}
          key={key}
          select={select}
        />
      ))}
      <div className="grid-row" style={{ height: tileStyle.height }}>
        <span>{`${gridLength - 2} x ${gridLength - 2}`}</span>
      </div>
    </div>
  );
}

export default Grid;

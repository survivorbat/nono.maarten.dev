import * as React from 'react';

interface RowHintProps {
  hints: number[];
  solved: boolean;
  tileStyle: any;
  vertical?: boolean;
}

function RowHint({
  hints, solved, vertical, tileStyle,
}: RowHintProps) {
  return (
    <div
      style={{ ...tileStyle, flexDirection: vertical ? 'column' : 'row' }}
      className={`grid-hint ${solved ? 'hint-solved' : ''}`}
    >
      {hints.map((hint, key) => (
        <span key={key} className="row-hint-number">
          {hint}
        </span>
      ))}
    </div>
  );
}

export default RowHint;

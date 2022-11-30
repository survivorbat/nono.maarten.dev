import * as React from 'react';

interface RowHintProps {
  hints: number[];
  solved: boolean;
  vertical?: boolean;
}

function RowHint({
  hints, solved, vertical,
}: RowHintProps) {
  return (
    <div
      style={{ flexDirection: vertical ? 'column' : 'row' }}
      className={`grid-hint ${solved ? ' hint-solved' : ''}`}
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

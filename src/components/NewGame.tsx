import * as React from 'react';
import './NewGame.css';

interface NewGameProps {
  newGame: () => void;
}

function NewGame({ newGame }: NewGameProps) {
  return (
    <div className="new-game-container">
      <button type="button" onClick={newGame} className="new-game-button">
        New Game
      </button>
    </div>
  );
}

export default NewGame;

import * as React from 'react';
import './App.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Grid from './components/Grid';
import generateGrid from './logic/Generator';
import GameTile from './logic/GameTile';
import GameGrid from './logic/GameGrid';
import ErrorField from './components/ErrorField';
import NewGame from './components/NewGame';
import SuccessField from './components/SuccessField';

function App() {
  const [difficulty, setDifficulty] = useState(2);
  const [grid, setGrid] = useState(generateGrid(difficulty));
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleGridSelect = (tile: GameTile) => {
    try {
      tile.select();
      setErrorMessage('');
    } catch (e) {
      setErrorMessage('Oops, that one was wrong!');
      setDifficulty(difficulty - 1 < 2 ? difficulty - 1 : difficulty);
    }
    setGrid(new GameGrid(grid.tiles, grid.size));

    if (grid.isCorrect()) {
      setSuccessMessage('Congrats, you solved the puzzle!');
      setDifficulty(difficulty + 1);
    }
  };

  const newGame = () => {
    setGrid(generateGrid(difficulty));
    setSuccessMessage('');
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Grid grid={grid} select={handleGridSelect} />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewGame newGame={newGame} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ErrorField message={errorMessage} />
        </Col>
      </Row>
      <Row>
        <Col>
          <SuccessField message={successMessage} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

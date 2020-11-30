import React, { useState, useCallback, useMemo } from 'react';

import Board from '../Board';
import Moves from '../Moves';
import GameStatus from '../GameStatus';

import { Container, MovesContainer } from './styles';

export interface IArrayHistory {
  squares: string[];
  position: number;
}

const TOTAL_SQUARES = 9;

const initialState = [
  {
    squares: Array(9).fill(null),
    position: -1,
  },
];

const Game = () => {
  const [history, setHistory] = useState<IArrayHistory[]>(initialState);
  const [focusedPlay, setFocusedPlay] = useState<number>(-1);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const currentHistory = useMemo(() => history.slice(0, stepNumber + 1), [
    history,
    stepNumber,
  ]);

  const winner = useMemo(() => {
    const lastHistory = currentHistory[currentHistory.length - 1];
    return calculateWinner(lastHistory.squares);
  }, [currentHistory]);

  const handleClick = useCallback(
    i => {
      const lastHistory = currentHistory[currentHistory.length - 1];
      const squares = lastHistory.squares.slice();

      if (winner[0] || squares[i]) {
        return;
      }

      squares[i] = xIsNext ? 'X' : 'O';

      setHistory(
        currentHistory.concat({
          squares,
          position: i,
        }),
      );
      setXIsNext(!xIsNext);
      setStepNumber(currentHistory.length);
    },
    [xIsNext, winner, currentHistory],
  );

  const handleJumpToClick = useCallback((step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }, []);

  const handleFocused = useCallback((step: number) => {
    setFocusedPlay(step);
  }, []);

  const handleRestart = () => {
    setHistory(initialState);
    setStepNumber(0);
    setFocusedPlay(-1);
    setXIsNext(true);
  };

  return (
    <Container>
      <Board
        squares={history[stepNumber].squares}
        onClick={i => handleClick(i)}
        focusedPlay={focusedPlay}
        winSquares={winner ? (winner[1] as number[]) : null}
      />
      <MovesContainer>
        <GameStatus
          won={!!winner[0]}
          player={winner[0] as string}
          lastMove={stepNumber === TOTAL_SQUARES}
          xIsNext={xIsNext}
        />
        <button
          type="button"
          onClick={() => handleRestart()}
          disabled={history.length <= 1}
        >
          Restart Game
        </button>
        <Moves
          history={history}
          handleJumpTo={handleJumpToClick}
          handleFocusedPlay={handleFocused}
          stepNumber={stepNumber}
        />
      </MovesContainer>
    </Container>
  );
};

function calculateWinner(squares: string[]) {
  const victoryLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < victoryLines.length; i += 1) {
    const [a, b, c] = victoryLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], [a, b, c]];
    }
  }
  return ['', [-1]];
}

export default Game;

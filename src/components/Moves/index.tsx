import React, { useState } from 'react';

import { Container, MovesList, ButtonMove } from './styles';

import { IArrayHistory } from '../Game';

interface IProps {
  history: IArrayHistory[];
  handleJumpTo(step: number): void;
  handleFocusedPlay(step: number | null): void;
  stepNumber: number;
}

const Moves: React.FC<IProps> = ({
  history,
  handleJumpTo,
  handleFocusedPlay,
  stepNumber,
}) => {
  const [reversedList, setReversedList] = useState(false);

  const handleToggleList = () => setReversedList(prev => !prev);

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={step.position}>
        <ButtonMove
          onClick={() => handleJumpTo(move)}
          onMouseEnter={() => handleFocusedPlay(step.position)}
          onMouseLeave={() => handleFocusedPlay(null)}
          focusedStep={stepNumber === move}
        >
          {desc}
        </ButtonMove>
      </li>
    );
  });

  return (
    <Container>
      <button
        type="button"
        onClick={e => handleToggleList()}
        disabled={history.length <= 1}
      >
        Reverse list
      </button>
      <MovesList reversedList={reversedList}>{moves}</MovesList>
    </Container>
  );
};

export default Moves;

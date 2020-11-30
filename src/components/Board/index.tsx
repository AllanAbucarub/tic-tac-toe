import React, { memo } from 'react';

import Square from '../Square';

import { Container } from './styles';

interface IProps {
  squares: string[];
  onClick(i: number): void;
  focusedPlay: number;
  winSquares: number[] | null;
}

const TOTAL_SQUARES = 9;

const Board: React.FC<IProps> = ({
  squares,
  onClick,
  focusedPlay,
  winSquares,
}) => {
  const rows = [];
  for (let i = 0; i < TOTAL_SQUARES; i += 1) {
    rows.push(
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onClick(i)}
        focused={!!(focusedPlay > -1 && i === focusedPlay)}
        won={!!(winSquares !== null && winSquares?.includes(i))}
        isClickable={!!squares[i]}
      />,
    );
  }

  return <Container>{rows}</Container>;
};

export default memo(Board);

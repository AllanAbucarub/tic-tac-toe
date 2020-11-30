import React, { memo } from 'react';

interface IProps {
  won: boolean;
  player: string;
  lastMove: boolean;
  xIsNext: boolean;
}

const GameStatus: React.FC<IProps> = ({ won, player, lastMove, xIsNext }) => {
  let status;

  if (won) {
    status = `Player ${player}, wins!`;
  } else if (lastMove) {
    status = 'We had a draw.';
  } else {
    status = `Next move: Player ${xIsNext ? 'X' : 'O'}`;
  }
  return <span>{status}</span>;
};

export default memo(GameStatus);

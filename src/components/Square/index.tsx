import React, { memo } from 'react';

import { Container } from './styles';

interface IProps {
  onClick(): void;
  value: string;
  focused: boolean;
  won: boolean;
  isClickable: boolean;
}
const Square: React.FC<IProps> = ({
  onClick,
  value,
  focused,
  won,
  isClickable,
}) => (
  <Container
    onClick={onClick}
    focused={focused}
    won={won}
    isClickable={isClickable}
  >
    {value}
  </Container>
);

export default memo(Square);

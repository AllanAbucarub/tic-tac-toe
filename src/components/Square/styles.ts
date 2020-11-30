import styled, { css } from 'styled-components';

interface ISquareProps {
  focused: boolean;
  won: boolean;
  isClickable: boolean;
}

export const Container = styled.button<ISquareProps>`
  height: auto;
  font-size: 60px;
  font-weight: 700;
  background: #b1aebb;
  border-radius: 0;

  ${props =>
    props.isClickable
      ? css`
          background: #a6a3b1;
          &:hover {
          }
          cursor: unset;
        `
      : css`
          &:hover {
            background: #c2c0cb;
          }
          cursor: pointer;
        `}

  ${props =>
    props.won &&
    css`
      background: #3ec883;
    `}

  ${props =>
    props.focused &&
    css`
      background: #4da6ff;
    `}
`;

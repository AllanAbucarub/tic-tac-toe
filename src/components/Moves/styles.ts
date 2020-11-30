import styled, { css } from 'styled-components';

interface IContainerProps {
  reversedList: boolean;
}

export const Container = styled.div`
  > button {
    margin-top: 16px;
    font-weight: 700;
    border-radius: 5px;

    &:enabled:hover {
      background: #3ec883;
      color: #fff;
    }
  }
`;

export const MovesList = styled.ol<IContainerProps>`
  display: flex;
  flex-direction: ${props =>
    props.reversedList
      ? `
      column-reverse;
    `
      : 'column'};

  margin-top: 10px;
  padding-left: 20px;
  background: inherit;
  margin-top: 20px;

  li {
    width: 100%;
    height: 20px;
    margin-top: 5px;
    line-height: 20px;
    color: #99ff99;
  }
`;

interface IButtonMoveProps {
  focusedStep: boolean;
}

export const ButtonMove = styled.button<IButtonMoveProps>`
  border: 0;
  background: transparent;
  width: 100%;
  text-align: left;
  color: inherit;
  padding-left: 5px;

  ${props =>
    props.focusedStep &&
    css`
      font-weight: 700;
      font-size: 16px;
    `};

  &:hover {
    background: #474150;
  }
`;

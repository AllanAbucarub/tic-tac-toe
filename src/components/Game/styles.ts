import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
  max-width: 780px;
  min-width: 280px;
  margin: 40px auto;
  padding: 0 16px 30px 16px;
`;

export const MovesContainer = styled.div`
  margin: 16px;
  margin-top: 25px;
  width: 250px;

  span {
    font-size: 16px;
  }

  > button {
    margin-top: 20px;
    font-weight: 700;

    &:enabled:hover {
      background: #3ec883;
      color: #fff;
    }
  }
`;

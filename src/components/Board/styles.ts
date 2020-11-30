import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  width: 250px;
  height: 250px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 3px;
  margin-top: 25px;
  border: 3px solid #eee;
  padding: 2px;
`;

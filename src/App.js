import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
  ${props =>
    props.huge &&
    `
      width: 10rem;
      height: 10rem;
    `}
`;

function App() {
  return (
    <Circle color="red" huge />
  );
}

export default App;

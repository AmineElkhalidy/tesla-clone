import React from 'react';
import styled from 'styled-components';

const DownArrow = ({src}) => {
  return (
  <Container>
    <img src={src} alt='down arrow' />
  </Container>
  );
};

export default DownArrow;

const Container = styled.div
`
& img
{
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow: hidden;
}

`;

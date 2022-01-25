import React from 'react';
import styled from 'styled-components';

const ItemText = ({title, subTitle}) => {
  return (
  <Container>
    <h1>{title}</h1>
    <p>{subTitle}</p>
  </Container>
  );
};

export default ItemText;

const Container = styled.div
`
padding-top: 15vh;
text-align: center;

`;

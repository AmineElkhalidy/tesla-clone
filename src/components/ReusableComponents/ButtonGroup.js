import React from 'react';
import styled from 'styled-components';

const ButtonGroup = ({leftButton, rightButton}) => {
  return (
  <Container>
    <LeftButton>
        {leftButton}
    </LeftButton>
    {rightButton && <RightButton>
        {rightButton}
    </RightButton>}
  </Container>
  );
};

export default ButtonGroup;
const Container = styled.div 
`
display: flex;
margin-bottom: 30px;

@media screen and (max-width: 768px)
{
    flex-direction: column;
}

`;

const LeftButton = styled.div
`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
`;

const RightButton = styled(LeftButton)
`
background: white;
opacity: 0.65;
color: black;

`;


import React from 'react';
import styled from 'styled-components';
import ButtonGroup from '../ReusableComponents/ButtonGroup';
import DownArrow from '../ReusableComponents/DownArrow';
import ItemText from '../ReusableComponents/ItemText';
import ArrowImage from '../../images/down-arrow.svg';
import Fade from 'react-reveal/Fade';
const Section = (props) => {
  return (
  <Wrapper bgImage={props.backgroundImg} >
    <Fade bottom>
      <ItemText title={props.title} subTitle={props.subTitle}/>
    </Fade>
      
      <Buttons>
        <Fade bottom>
          <ButtonGroup leftButton={props.leftButton} rightButton={props.rightButton} />
          <DownArrow src={ArrowImage} />
        </Fade>
        
      </Buttons>
      
  </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div
`
width: 100vw;
height: 100vh;
background-image: ${props => (`url(${props.bgImage})`)};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const Buttons = styled.div
`

`;
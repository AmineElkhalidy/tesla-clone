import React from 'react';
import Section from '../Section/Section';
import styled from 'styled-components';
import firstImage from '../../images/model-s.jpg';
import secondImage from '../../images/model-y.jpg';
import thirdImage from '../../images/model-3.jpg';
import fourthImage from '../../images/model-x.jpg';
import fifthImage from '../../images/solar-panel.jpg';
import sixthImage from '../../images/solar-roof.jpg';
import seventhImage from '../../images/accessories.jpg';

const Home = () => {
  return (
  <Container>
      <Section 
      title="Model S" 
      subTitle=" Order Online for Touchless Delivery"
      backgroundImg={firstImage}
      leftButton='Custom Order'
      rightButton='Existing Inventory' />

      <Section
      title="Model Y" 
      subTitle="Order Online for Touchless Delivery"
      backgroundImg={secondImage}
      leftButton='Custom Order'
      rightButton='Existing Inventory' />

      <Section 
      title="Model 3" 
      subTitle="Order Online for Touchless Delivery"
      backgroundImg={thirdImage}
      leftButton='Custom Order'
      rightButton='Existing Inventory'/>
      <Section 
      title="Model X" 
      subTitle="Order Online for Touchless Delivery"
      backgroundImg={fourthImage}
      leftButton='Custom Order'
      rightButton='Existing Inventory'/>

      <Section 
      title="Solar Panels" 
      subTitle="Lowest Cost Solar Panels in America"
      backgroundImg={fifthImage}
      leftButton='Custom Order'
      rightButton='Existing Inventory'/>

      <Section 
      title="Solar Roof" 
      subTitle="Produce Clean Energy From Your Roof"
      backgroundImg={sixthImage}
      leftButton='Custom Order'
      rightButton='Existing Inventory'/>

      <Section 
      title="Accessories" 
      subTitle=""
      backgroundImg={seventhImage}
      leftButton='Shop Now'/>


  </Container>
  );
};

export default Home;

const Container = styled.div`
height: 100vh;

`;

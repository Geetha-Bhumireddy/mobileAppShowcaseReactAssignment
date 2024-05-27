import React from 'react';
import {
  SectionContainer,
  Content,
  ImageContainer,
  TextContainer,
  Title,
  Description,
  Button
} from './styledComponents';
import businessImage from '../../assets/images/business-app-image-icon.jpg'; // Ensure you have this image in your assets folder

const BusinessAppSection = () => {
  return (
    <SectionContainer>
      <Content>
        <ImageContainer>
          <img src={businessImage} alt="Business App Illustration" />
        </ImageContainer>
        <TextContainer>
          <Title>Easy And Perfect Solution For Your Business App</Title>
          <Description>
            Aliquam Aliquet Purus A Est Consequat Lobortis. Etiam Vehicula 
            Suscipit Purus, Eget Ullamcorper Augue Blandit Vitae. Ut Eu Euismod 
            Felis. Etiam At Varius Quam. Vivamus Lacinia Pulvinar Turpis In Suscipit. 
            Aenean Mattis Enim Ut Pretium Gravida. Sed Fermentum A Locus Bibendum Convallis.
          </Description>
          <Description>
            Consequat Purus Aliquet A Est Aliquam Lobortis. Etiam Vehicula 
            Suscipit Purus, Eget Ullamcorper Augue Blandit Vitae...
          </Description>
          <Button>Read More</Button>
        </TextContainer>
      </Content>
    </SectionContainer>
  );
};

export default BusinessAppSection;

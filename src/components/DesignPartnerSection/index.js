import React from 'react';
import {
  SectionContainer,
  Content,
  ImageContainer,
  InfoContainer,
  Title,
  Step,
  StepTitle,
  StepDescription
} from './styledComponents';
import designPartnerImage from '../../assets/images/design-partners-image.jpg'; // Ensure you have this image in your assets folder

const steps = [
  { title: 'Aliquam varius ligula nec leo tempus porta.', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.' },
  { title: 'Suspendisse vitae varius diam, a vulputate urna.', description: '' },
  { title: 'Aliquam aliquet purus eget lacus pretium.', description: '' }
];

const DesignPartnerSection = () => {
  return (
    <SectionContainer>
      <Content>
        <ImageContainer>
          <img src={designPartnerImage} alt="Design Partner Illustration" />
        </ImageContainer>
        <InfoContainer>
          <Title>Designed & Worked By The Latest Partners</Title>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepTitle>{step.title}</StepTitle>
              {step.description && <StepDescription>{step.description}</StepDescription>}
            </Step>
          ))}
        </InfoContainer>
      </Content>
    </SectionContainer>
  );
};

export default DesignPartnerSection;

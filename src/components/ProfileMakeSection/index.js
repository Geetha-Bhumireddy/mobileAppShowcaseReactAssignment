import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import {
  SectionContainer,
  Content,
  ImageContainer,
  StepsContainer,
  Step,
  StepIcon,
  StepTextContainer,
  StepTitle,
  StepDescription,
  Title
} from './styledComponents';
import profileImage from '../../assets/images/make-a-profile-image.jpg'; // Ensure you have this image in your assets folder

const steps = [
  { color: '#ff7070', title: 'Make A Profile', description: 'Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.', icon: <FaUserCircle /> },
  { color: '#70b8ff', title: 'Make A Profile', description: 'Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.', icon: <FaUserCircle /> },
  { color: '#ffd570', title: 'Make A Profile', description: 'Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at nunc imperdiet, quis lacinia nisi euismod.', icon: <FaUserCircle /> }
];

const ProfileMakeSection = () => {
  return (
    <SectionContainer>
      <Content>
        <StepsContainer>
        <Title>How does This App work?</Title>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIcon style={{ backgroundColor: step.color }}>
                {step.icon}
              </StepIcon>
              <StepTextContainer>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepTextContainer>
            </Step>
          ))}
        </StepsContainer>
        <ImageContainer>
          <img src={profileImage} alt="Profile Illustration" />
        </ImageContainer>
      </Content>
    </SectionContainer>
  );
};

export default ProfileMakeSection;

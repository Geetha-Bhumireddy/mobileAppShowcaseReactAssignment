import React from 'react';
import {
  ContactSection,
  ContactContainer,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  ContactInfo,
  InfoItem,
  Icon,
  MapImage,
  HeaderImage
} from './styledComponents';
import Header from '../Header';
import ReviewsSection from '../ReviewsSection';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import mapsImage from '../../assets/images/maps.jpg'; // Ensure you have this image in your assets folder
import headerImg from '../../assets/images/features-img.jpg';

const ContactUsSection = () => {
  return (
    <>
    <Header />
    <ContactSection>
    <HeaderImage src={headerImg} alt="Header" />
        <h2>Contact Us</h2>
      <ContactContainer>
        <Form>
          <FormGroup>
            <Label>Name:</Label>
            <Input type="text" placeholder="Enter your name" />
          </FormGroup>
          <FormGroup>
            <Label>Phone Number:</Label>
            <Input type="text" placeholder="Enter your phone number" />
          </FormGroup>
          <FormGroup>
            <Label>Email:</Label>
            <Input type="email" placeholder="Enter your email" />
          </FormGroup>
          <FormGroup>
            <Label>Your Message:</Label>
            <TextArea placeholder="Enter your message"></TextArea>
          </FormGroup>
          <SubmitButton>Send</SubmitButton>
        </Form>
        <ContactInfo>
          <InfoItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            <div>
              <p>Visit Us :</p>
              <p>27 Division St, New York, NY 10002, USA</p>
            </div>
          </InfoItem>
          <InfoItem>
            <Icon>
              <FaPhoneAlt />
            </Icon>
            <div>
              <p>Phone Number :</p>
              <p>+1 (800) 123 456 789</p>
            </div>
          </InfoItem>
          <InfoItem>
            <Icon>
              <FaEnvelope />
            </Icon>
            <div>
              <p>Email :</p>
              <p>Admin@Admin.Com</p>
            </div>
          </InfoItem>
          <MapImage src={mapsImage} alt="Map" />
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
    <ReviewsSection />
    </>
  );
};

export default ContactUsSection;

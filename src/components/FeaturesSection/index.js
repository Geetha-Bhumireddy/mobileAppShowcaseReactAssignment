import React from 'react';
import {
  SectionContainer,
  HeaderImage,
  Title,
  FeaturesContainer,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription
} from './styledComponents';
import Header from '../Header';
import ReviewsSection from '../ReviewsSection';
import { FaRegCopy } from 'react-icons/fa';
import headerImg from '../../assets/images/features-img.jpg'; // Adjust the path as needed

const features = [
  {
    title: "Easy Copy And Paste",
    description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
  },
  {
    title: "Easy Copy And Paste",
    description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
  },
  {
    title: "Easy Copy And Paste",
    description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
  },
  {
    title: "Easy Copy And Paste",
    description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
  },
  {
    title: "Easy Copy And Paste",
    description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
  },
  {
    title: "Easy Copy And Paste",
    description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
  }
];

const FeaturesSection = () => {
  return (
    <>
    <Header />
    <SectionContainer>
      <HeaderImage src={headerImg} alt="Header" />
      <Title>The Features To Create Your</Title>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>
              <FaRegCopy size={40} />
            </FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesContainer>
    </SectionContainer>
    <ReviewsSection />
    </>
  );
};

export default FeaturesSection;

import React from 'react';
import {
  SectionContainer,
  HeaderImage,
  Title,
  Description,
  TextContainer,
  ImageContainer,
  ContentImage
} from './styledComponents';
import headerImg from '../../assets/images/features-img.jpg'; // Adjust the path as needed
import illustrationImg from '../../assets/images/illustration.jpg'; // Adjust the path as needed
import Header from '../Header';
import ReviewsSection from '../ReviewsSection';

const AboutUsSection = () => {
  return (
    <>
    <Header />
    <SectionContainer>
      <HeaderImage src={headerImg} alt="Header" />
      <TextContainer>
        <Title>Find Out More About Our Business Consulting</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum arcu sed erat fringilla placerat.
          Proin fringilla lacinia risus sed porttitor. Quisque tincidunt lectus vitae massa vulputate pellentesque
          et vitae ligula. Sed eu leo odio. Aliquam erat volutpat. Praesent cursus quam purus, sed scelerisque orci
          tincidunt in. Donec a neque facilisis, lobortis tellus vitae, dictum nisl. Morbi sed lacus dui. Sed eu leo
          imperdiet, pulvinar massa ut, ullamcorper magna.
          <br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum arcu sed erat fringilla placerat.
          Proin fringilla lacinia risus sed porttitor. Quisque tincidunt lectus vitae massa vulputate pellentesque
          et vitae ligula. Sed eu leo odio. Aliquam erat volutpat. Praesent cursus quam purus, sed scelerisque orci
          tincidunt in. Donec a neque facilisis, lobortis tellus vitae, dictum nisl. Morbi sed lacus dui. Sed eu leo
          imperdiet, pulvinar massa ut, ullamcorper magna.
        </Description>
      </TextContainer>
      <ImageContainer>
        <ContentImage src={illustrationImg} alt="Illustration" />
      </ImageContainer>
    </SectionContainer>
    <ReviewsSection />
    </>
  );
};

export default AboutUsSection;

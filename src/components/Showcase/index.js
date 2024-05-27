import React from 'react';
import img1 from '../../assets/images/realistic-phone-studio-social-media.jpg';
import {
  ShowcaseContainer,
  ShowcaseContent,
  Title,
  Subtitle,
  ImageContainer,
  Image,
  ReadMoreButton
} from './styledComponents';


const Showcase = () => {
    console.log("showcase component")
  return (
    <ShowcaseContainer>
      <ShowcaseContent>
        <Title>Best Mobile App Showcase</Title>
        <Subtitle>
          Aenean dictum odio dapibus turpis dapibus vestibulum. Mauris quis massa nisi.
          Nullam porta lorem at volutpat euismod. Proin in ex nunc.
        </Subtitle>
        <ReadMoreButton>Read More</ReadMoreButton>
      </ShowcaseContent>
      <ImageContainer>
        <Image src={img1} alt="App Showcase 1" />
        
      </ImageContainer>
    </ShowcaseContainer>
  );
};

export default Showcase;

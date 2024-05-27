import React from 'react';
import {
  SectionContainer,
  Title,
  Subtitle,
  ScreenshotContainer,
  Screenshot,
  ScreenshotsWrapper
} from './styledComponents';

// Example image imports, replace with your actual images
import screenshot1 from '../../assets/images/sc-1.jpg';
import screenshot2 from '../../assets/images/sc-2.jpg';
import screenshot3 from '../../assets/images/sc-3.jpg';
import screenshot4 from '../../assets/images/sc-4.jpg';
import screenshot5 from '../../assets/images/sc-5.jpg';

const AppScreenshotSection = () => {
  return (
    <SectionContainer>
      <Title>App Screenshots</Title>
      <Subtitle>Saep Quo Labore Aenean Dictumst Expedita Commodi Auctor, Nisi, Lorem Iusto Feugiat Nemo Reiciendis Laboris.</Subtitle>
      <ScreenshotsWrapper>
        <ScreenshotContainer>
          <Screenshot src={screenshot1} alt="App Screenshot 1" />
        </ScreenshotContainer>
        <ScreenshotContainer>
          <Screenshot src={screenshot2} alt="App Screenshot 2" />
        </ScreenshotContainer>
        <ScreenshotContainer>
          <Screenshot src={screenshot3} alt="App Screenshot 3" />
        </ScreenshotContainer>
        <ScreenshotContainer>
          <Screenshot src={screenshot4} alt="App Screenshot 4" />
        </ScreenshotContainer>
        <ScreenshotContainer>
          <Screenshot src={screenshot5} alt="App Screenshot 5" />
        </ScreenshotContainer>
      </ScreenshotsWrapper>
    </SectionContainer>
  );
};

export default AppScreenshotSection;

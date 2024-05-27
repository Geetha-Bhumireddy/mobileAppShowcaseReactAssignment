import React from 'react';
import { 
  ShowcaseContainer, 
  Title, 
  Subtitle, 
  CardsContainer, 
  Card, 
  CardIcon, 
  CardTitle, 
  CardDescription, 
  CardButton 
} from './styledComponents';
import { FaDesktop } from 'react-icons/fa';

const EngagingSection = () => {
  return (
    <ShowcaseContainer>
      <Title>Engaging & Spacious School Campus</Title>
      <Subtitle>
        Hise Sed Augue Vitae Felis Pellentesque Varius Nec Quis Nunc. Morbi Mauris Augue, 
        Pulvinar Quis Luctus Eget. Phasellus Gravida Lacus Quis Eros Lobortis, Nec Dapibus Quam Gravida.
      </Subtitle>
      <CardsContainer>
        {[1, 2, 3].map((_, index) => (
          <Card key={index}>
            <CardIcon><FaDesktop /></CardIcon>
            <CardTitle>Perfect UI Design</CardTitle>
            <CardDescription>
              Praesent Ac Vehicula Sapien. Sed Sollicitudin Molestie Consequat. Ut Vitae Ante Ut Mi Vehicula Vulputate.
            </CardDescription>
            <CardButton>&rarr;</CardButton>
          </Card>
        ))}
      </CardsContainer>
    </ShowcaseContainer>
  );
};

export default EngagingSection;

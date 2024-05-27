import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 50px 20px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 20px;
  display:flex;
  align-self:flex-start;
  margin-top:15px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 2.5em;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
`;

export const FeatureIcon = styled.div`
  background: #50c878;
  padding: 20px;
  border-radius: 50%;
  color: white;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeatureTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5em;
  color: #333;
`;

export const FeatureDescription = styled.p`
  font-size: 1em;
  color: #777;
`;

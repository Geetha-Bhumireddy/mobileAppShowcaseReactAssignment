import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 50px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeaderImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 50%;
  margin-right: 24px;
  display:flex;
  align-self:flex-start;
  margin-top:5px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const Description = styled.p`
  font-size: 1em;
  color: #777;
  line-height: 1.6;
`;

export const ImageContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

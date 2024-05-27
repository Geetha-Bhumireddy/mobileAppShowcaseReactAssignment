import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #e9f7f9;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #777;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ScreenshotsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ScreenshotContainer = styled.div`
  flex: 1;
  max-width: 18%;
  margin: 0 0.5rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 45%;
    margin: 0.5rem 0;
  }
`;

export const Screenshot = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

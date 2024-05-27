import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f5f9fd;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StepsContainer = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StepIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff7070; // Default color, will be overridden inline
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    margin-right: 0;
  }
`;

export const StepTextContainer = styled.div`
  flex: 1;
`;

export const StepTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  color: #777;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;

  img {
    width: 90%;
    margin-left:16px;
    height: auto;
    animation: float 3s ease-in-out infinite;

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

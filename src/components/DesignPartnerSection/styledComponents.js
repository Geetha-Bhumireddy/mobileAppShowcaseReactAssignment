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
    flex-direction: column-reverse;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;

  img {
    width: 90%;
    margin-right:10px;
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

export const InfoContainer = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Step = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const StepTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
  background-color: #a8e4a0;
  padding: 10px;
  border-radius: 5px;

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

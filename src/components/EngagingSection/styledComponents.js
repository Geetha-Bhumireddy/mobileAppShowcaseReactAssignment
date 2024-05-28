import styled from 'styled-components';

export const ShowcaseContainer = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f5f9fd;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Card = styled.div`
  background-color: #e5f7ef;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  flex: 1;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 800px) {
    margin-left:20px;
  }
`;

export const CardIcon = styled.div`
  font-size: 3rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const CardDescription = styled.p`
  font-size: 0.6rem;
  color: #555;
  margin-bottom: 2rem;
`;

export const CardButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

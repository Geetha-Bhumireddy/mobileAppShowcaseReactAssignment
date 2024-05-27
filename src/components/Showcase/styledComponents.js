import styled from 'styled-components';

export const ShowcaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ShowcaseContent = styled.div`
  width: 100vw;
  margin-bottom: 2rem;
  padding:10px;
`;

export const Title = styled.h1`
  font-size: 45px;
  font-weight:800;
  margin-bottom: 1rem;
  color: #333;
  margin-bottom:5px;
  margin-top:14px;
`;

export const Subtitle = styled.p`
  font-size: 17px;
  color: #666;
  margin-bottom:16px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 40vw;
  height: auto;
  margin-top:10px;
  border-radius: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ReadMoreButton = styled.button`
  background-color: #000;
  color: #fff;
  margin-top:20px;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
`;

import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const SectionContainer = styled.section`
  padding: 50px 20px;
  background: #f5f5f5;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

export const Title = styled.h2`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const ReviewCard = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 0 auto;
  max-width: 600px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const ReviewText = styled.p`
  font-size: 1em;
  color: #777;
`;

export const Reviewer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ReviewerIcon = styled.div`
  margin-right: 10px;
`;

export const ReviewerName = styled.span`
  font-size: 1.2em;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const Stars = styled.div`
  color: #ffd700;
  margin-top: 10px;
`;

export const NewsletterSection = styled.div`
  margin-top: 50px;
  text-align: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const NewsletterTitle = styled.h3`
  font-size: 2em;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const NewsletterText = styled.p`
  font-size: 1em;
  color: #777;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  background: #007bff;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  @media (max-width: 768px) {
    border-radius: 5px;
    width: 100%;
  }

  &:hover {
    background: #0056b3;
  }
`;

export const Footer = styled.footer`
  margin-top: 50px;
  padding: 20px;
  background: #333;
  color: #fff;
  text-align: center;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLinkGroup = styled.div`
  text-align: left;
  margin-bottom: 20px;

  h4 {
    margin-bottom: 10px;
    font-size: 1.2em;
  }
`;

export const FooterLink = styled.a`
  display: block;
  color: #fff;
  margin-bottom: 5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterText = styled.p`
  font-size: 0.9em;
`;

export const CustomPrevIcon = styled(FaChevronLeft)`
  color: #333;
  font-size: 2em;

  &:hover {
    color: #007bff;
  }
`;

export const CustomNextIcon = styled(FaChevronRight)`
  color: #333;
  font-size: 2em;

  &:hover {
    color: #007bff;
  }
`;

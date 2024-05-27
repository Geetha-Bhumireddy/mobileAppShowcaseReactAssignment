import React from 'react';
import { Carousel } from 'react-bootstrap';
import {
  SectionContainer,
  Title,
  ReviewCard,
  ReviewText,
  Reviewer,
  ReviewerIcon,
  ReviewerName,
  Stars,
  Footer,
  NewsletterSection,
  NewsletterTitle,
  NewsletterText,
  NewsletterForm,
  Input,
  Button,
  FooterLinks,
  FooterLinkGroup,
  FooterLink,
  FooterText,
  CustomPrevIcon,
  CustomNextIcon
} from './styledComponents';
import { FaUserCircle } from 'react-icons/fa';

const ReviewsSection = () => {
  const reviews = [
    {
      text: "Per Sed, Mattis. Integer Viverra Euis...",
      name: "Jenny Wilson",
      stars: 5
    },
    {
      text: "Per Sed, Mattis. Integer Viverra Euis...",
      name: "Jenny Wilson",
      stars: 5
    },
    {
      text: "Per Sed, Mattis. Integer Viverra Euis...",
      name: "John Doe",
      stars: 4
    },
    {
      text: "Per Sed, Mattis. Integer Viverra Euis...",
      name: "Jane Smith",
      stars: 5
    }
  ];

  return (
    <SectionContainer>
      <Title>Reviews From Students</Title>
      <Carousel
        nextIcon={<CustomNextIcon />}
        prevIcon={<CustomPrevIcon />}
      >
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <ReviewCard>
              <ReviewText>{review.text}</ReviewText>
              <Reviewer>
                <ReviewerIcon>
                  <FaUserCircle size={30} />
                </ReviewerIcon>
                <ReviewerName>{review.name}</ReviewerName>
              </Reviewer>
              <Stars>{"★".repeat(review.stars)}</Stars>
            </ReviewCard>
          </Carousel.Item>
        ))}
      </Carousel>
      <NewsletterSection>
        <NewsletterTitle>Subscribe Our Newsletter!</NewsletterTitle>
        <NewsletterText>
          Elementum Ex Similique Sollicitudin Eveniet Sem Eveniet Proin, Iste Eiusmod!
        </NewsletterText>
        <NewsletterForm>
          <Input type="email" placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </NewsletterForm>
      </NewsletterSection>
      <Footer>
        <FooterLinks>
          <FooterLinkGroup>
            <h4>Quick Links</h4>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">News & Articles</FooterLink>
          </FooterLinkGroup>
          <FooterLinkGroup>
            <h4>Useful Links</h4>
            <FooterLink href="#">Help Center</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Parent Community</FooterLink>
          </FooterLinkGroup>
          <FooterLinkGroup>
            <h4>School Hours</h4>
            <FooterText>8 A.M - 5 P.M, Monday - Saturday</FooterText>
            <FooterText>Aut, Quia Corvalis Minim Cum Oram...</FooterText>
          </FooterLinkGroup>
        </FooterLinks>
        <FooterText>&copy; 2022 Educator. All rights reserved.</FooterText>
      </Footer>
    </SectionContainer>
  );
};

export default ReviewsSection;

import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  Nav,
  NavLink,
  SocialIcons,
  Icon,
  HamburgerMenu,
  MobileNav,
} from './styledComponents';

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <HeaderContainer>
      <HamburgerMenu onClick={toggleMobileNav}>
        <FaBars />
      </HamburgerMenu>
      <Nav>
        <NavLink as={Link} to="/">Home</NavLink>
        <NavLink as={Link} to="/about">About Us</NavLink>
        <NavLink as={Link} to="/features">Features</NavLink>
        <NavLink as={Link} to="/contact">Contact</NavLink>
      </Nav>
      <MobileNav open={isMobileNavOpen}>
        <NavLink as={Link} to="/" onClick={toggleMobileNav}>Home</NavLink>
        <NavLink as={Link} to="/about" onClick={toggleMobileNav}>About Us</NavLink>
        <NavLink as={Link} to="/features" onClick={toggleMobileNav}>Features</NavLink>
        <NavLink as={Link} to="/contact" onClick={toggleMobileNav}>Contact</NavLink>
      </MobileNav>
      <SocialIcons>
        <Icon href="#" aria-label="Instagram"><FaInstagram /></Icon>
        <Icon href="#" aria-label="Facebook"><FaFacebookF /></Icon>
        <Icon href="#" aria-label="Twitter"><FaTwitter /></Icon>
      </SocialIcons>
    </HeaderContainer>
  );
};

export default Header;

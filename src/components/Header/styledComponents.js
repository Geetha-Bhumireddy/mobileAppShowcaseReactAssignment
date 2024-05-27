import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 98%;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export const Icon = styled.a`
  color: #333;
  font-size: 1.3rem;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const MobileNav = styled.div`
  display: none;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 999;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }
`;

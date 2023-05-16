import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {
  StyledNavbar,
  LogoContainer,
  NavLinksList,
  NavLink as StyledNavLink,
  NavActions,
  NavButton,
  CartIcon,
  MobileMenuIcon,
  MobileMenu,
  MobileMenuLinks,
  CloseIcon,
} from './styles/NavStyles';

const Nav = ({ isOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <StyledNavbar>
      <LogoContainer>
        <span>Be</span> <span>Unique</span>
      </LogoContainer>

      <NavLinksList>
        <li>
          <Link to='/'>
            <StyledNavLink>Home</StyledNavLink>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <StyledNavLink>Contact</StyledNavLink>
          </Link>
        </li>
        <li>
          <Link to='/CartPage'>
            <StyledNavLink>Cart Page</StyledNavLink>
          </Link>
        </li>
      </NavLinksList>

      <NavActions>
        <CartIcon className='fas fa-shopping-cart' />
        <NavButton to='/login'>Login</NavButton>
        <NavButton to='/register'>Register</NavButton>
        <MobileMenuIcon onClick={handleMobileMenuClick}>
          {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </MobileMenuIcon>
      </NavActions>

      <MobileMenu isOpen={isOpen}>
        <CloseIcon onClick={handleMobileMenuClose}>
          <AiOutlineClose />
        </CloseIcon>
        <MobileMenuLinks>
          <li>
            <NavLink to='/' onClick={handleMobileMenuClose}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={handleMobileMenuClose}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to='/cart' onClick={handleMobileMenuClose}>
              Cart Page
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' onClick={handleMobileMenuClose}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to='/register' onClick={handleMobileMenuClose}>
              Register
            </NavLink>
          </li>
        </MobileMenuLinks>
      </MobileMenu>
    </StyledNavbar>
  );
};

export default Nav;

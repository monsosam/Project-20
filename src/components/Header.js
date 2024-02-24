import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  };

  const logoStyle = {
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '24px',
    color: '#333', // Customize this color to fit your theme
  };

  const linkStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#666', // Customize this color to fit your theme
  };

  const activeStyle = {
    color: '#000', // Customize this color to indicate active page
  };

  return (
    <header style={headerStyle}>
      <div className="logo">
        <NavLink to="/" exact style={logoStyle} activeStyle={activeStyle}>Samuel Monson</NavLink>
      </div>
      <nav>
        <NavLink exact to="/" style={linkStyle} activeStyle={activeStyle}>About Me</NavLink>
        <NavLink to="/portfolio" style={linkStyle} activeStyle={activeStyle}>Portfolio</NavLink>
        <NavLink to="/contact" style={linkStyle} activeStyle={activeStyle}>Contact</NavLink>
        <NavLink to="/resume" style={linkStyle} activeStyle={activeStyle}>Resume</NavLink>
      </nav>
    </header>
  );
}

export default Header;

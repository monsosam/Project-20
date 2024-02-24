import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} />
      </a>
    </footer>
  );
}

export default Footer;
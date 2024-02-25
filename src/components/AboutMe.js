// In src/components/AboutMe.js
import React from "react";
import profileImage from '../assets/My Profile.jpg';

function AboutMe() {
  // Inline styles
  const aboutMeStyle = {
    textAlign: 'center', // Center aligns the content
    margin: '0 auto', // Automatically margins for horizontal centering
    maxWidth: '800px', // Sets a max width for the content
    color: '#72a98f',
    backgroundColor: '#433a3f',
  };

  const photoStyle = {
    width: '150px', // Sets photo width
    height: '150px', // Sets photo height
    borderRadius: '50%', // Makes the photo round
    objectFit: 'cover', // Ensures the photo covers the set dimensions without stretching
    border: '5px solid #8de969',
  };

  const bioStyle = {
    fontSize: '1rem', // Sets the font size for the bio
    lineHeight: '1.5', // Sets the line height for readability
    margin: '20px 0', // Adds top and bottom margin for spacing
    color: '#cbef43',
  };

  return (
    <div style={aboutMeStyle}>
      <img src={profileImage} alt="Your Name" style={photoStyle} />
      <h1>Samuel Monson</h1>
      <p style={bioStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

export default AboutMe;

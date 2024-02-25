function Footer() {
  const footerStyle = {
    backgroundColor: '#3d5a6c', 
    color: '#8de969', 
    textAlign: 'center',
    padding: '20px 0',
  };

  const iconStyle = {
    color: '#8de969', 
    margin: '0 10px',
  };

  return (
    <footer style={footerStyle}>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FaGithub size={30} />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FaLinkedin size={30} />
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FaTwitter size={30} />
      </a>
    </footer>
  );
}
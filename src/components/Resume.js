import React from 'react';

function Resume() {
  const resumeStyle = {
    color: '#72a98f', 
    backgroundColor: '#433a3f', 
    padding: '20px',
    borderRadius: '5px',
  };

  const sectionStyle = {
    backgroundColor: '#3d5a6c', 
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
  };

  const linkStyle = {
    color: '#cbef43', 
    textDecoration: 'none',
  };
  return (
    <div style={resumeStyle}>
      <h2>Resume</h2>
      <p>Here is an overview of my professional background and skills.</p>
      
      <section style={sectionStyle}>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          {/* Add more skills as needed */}
        </ul>
      </section>
      
      <section>
        <h3>Experience</h3>
        <p><strong>Job Title</strong> - Company Name (Year - Year)</p>
        <p>Brief description of your role and achievements.</p>
        {/* Add more experiences as needed */}
      </section>
      
      <section>
        <h3>Education</h3>
        <p><strong>Degree</strong> - Institution Name (Year - Year)</p>
        {/* Add more educational details as needed */}
      </section>
      
      <a href="url-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" style={linkStyle}>Download My Resume</a>
    </div>
  );
}

export default Resume;
import React from 'react';

// Example project data
const projects = [
  {
    title: 'Project 1',
    imageUrl: 'url-to-image',
    deployedUrl: 'url-to-deployed-app',
    githubUrl: 'url-to-github-repo',
  },
  // Add more projects as needed
];

function Portfolio() {
  const projectStyle = {
    color: '#433a3f', 
    margin: '10px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#cbef43', 
    color: '#433a3f', 
    padding: '10px 20px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2>My Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {projects.map((project, index) => (
          <div key={index} style={projectStyle}>
            <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: 'auto' }} />
            <h3>{project.title}</h3>
            <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" style={buttonStyle}>View Project</a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={buttonStyle}>GitHub Repo</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
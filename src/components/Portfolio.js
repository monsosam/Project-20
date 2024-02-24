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
  return (
    <div>
      <h2>My Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ width: '30%', margin: '10px', textAlign: 'center' }}>
            <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: 'auto' }} />
            <h3>{project.title}</h3>
            <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">View Project</a>
            <br />
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
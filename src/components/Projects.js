// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-section">
      <h2>Projects:</h2>
      <p>These are projects that I have done so far:</p>
      <ul>
        <button><a href="https://ehtirammaharramli.github.io/Web_Mobile1_Assignment1/" target="_blank" rel="noopener noreferrer">Portfolio Project</a></button>
        <br></br>
        <button><a href="https://ehtirammaharramli.github.io/Web_Mobile1_Assignment2/" target="_blank" rel="noopener noreferrer">Products Project</a></button>
        <br></br>
        <button><a href="https://ehtirammaharramli.github.io/Web_Mobile1_Assignment3/" target="_blank" rel="noopener noreferrer">Flashcards Project</a></button>

      </ul>
    </div>
  );
}

export default Projects;

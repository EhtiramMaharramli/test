// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Projects />
    </div>
  );
}

export default App;

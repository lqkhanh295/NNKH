import React from 'react';
import CameraView from './components/CameraView';
import './App.css';

function App() {
  const supportedLetters = ['A', 'B', 'C', 'L', 'V', 'Y'];

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">SignAI</h1>
        <p className="subtitle">
          Learn American Sign Language (ASL) with real-time AI feedback. 
          Show a sign to your camera to get started.
        </p>
      </header>

      <main>
        <CameraView />
        
        <div className="supported-signs">
          <h3>Currently Supported Signs</h3>
          <div className="sign-badges">
            {supportedLetters.map(letter => (
              <span key={letter} className="sign-badge">{letter}</span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

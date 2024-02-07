import React from 'react';

export default function HomePage() {
  return (
    <div style={{ position: 'relative', height: '75vh', overflow: 'hidden' }}>
      <img
        src="src/assets/images/services-1.jpg"
        alt="Background"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 1, 
        }}
      >
        <h1 style={{ fontSize: '3rem' }}>Welcome to <span style={{ color:'#FF007F' }}>Daman Hotel</span></h1>
        <p style={{ fontSize: '1.5rem' }}>Experiance the best Hospitability in Town</p>
      </div>
    </div>
  );
}

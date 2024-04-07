import React, { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const background = document.querySelector('.parallax-background');
      if (background) {
        background.style.backgroundPositionY = `${-scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '75vh', overflow: 'hidden' }}>
      <div
        className="parallax-background"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'url(src/assets/images/services-1.jpg) center/cover no-repeat',
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
        <h1 style={{ fontSize: '3rem' }}>
          Welcome to <span style={{ color: '#FF007F' }}>Daman Hotel</span>
        </h1>
        <p style={{ fontSize: '1.5rem' }}>Experience the best Hospitality in Town</p>
      </div>
    </div>
  );
}

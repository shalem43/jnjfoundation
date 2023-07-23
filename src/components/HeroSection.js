import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video01.MP4' autoPlay loop muted />
      <h1>J&J FOUNDATION</h1>
      <p><small>Love Thy Neighbour</small></p>
    </div>
  );
}

export default HeroSection;

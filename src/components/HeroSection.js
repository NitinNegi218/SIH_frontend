import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {

  

  return (
    <div className='hero-container'>
      <h1>MEDICINAL PLANTS</h1>
      <p>Serach the plant using button below</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         UPLOAD IMG
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

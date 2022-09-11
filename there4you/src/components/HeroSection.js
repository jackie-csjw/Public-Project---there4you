import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>it'll be okay</h1>
        <p></p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                box breathing
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;

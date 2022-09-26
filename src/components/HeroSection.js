import React, { useState } from "react";
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
function HeroSection() {
  //var link=<a href={tel:925-989-6050}>925-989-6050</a>; {url && <Youtube videoId={url}opts={opts}/>} 

  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>We come to you!<br></br> Contact us for a FREE estimate!</h1>
      <p><a href="tel:9259896050">
        (925)-989-6050
      </a> <br></br> <a href="mailto:Sean@BigBearGlassRepair.com" >
        Sean@BigBearGlassRepair.com
      </a> </p>
      <div className='hero-btns'>
        <Link to="/services">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        </Link>
      </div>  
    </div>
  );
}

export default HeroSection;

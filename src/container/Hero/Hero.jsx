import React from 'react';
import { images } from '../../constants';
import {IconScroll} from '../../components';
import './Hero.css';


const logos = ["logo01", "logo02", "logo03"];

const Hero = () => {

  return (
    <div className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title"> Freedom and Sovereignty in Every Transaction  </h1>
          <p className="py-4">Born too late to explore the seas, born to early to explore the stars, born just in time to witness the rise of the cryptocurrency revolution.</p>
          <a href="https://docs.google.com/forms/d/1x2nblBXavQ6lek-OtlGGlaEmBVhXyOy8VwGYsgJNZcU/viewform?edit_requested=true">
          <button className="btn-positivus">Join the club</button>
          </a>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.hero} alt="design" />
        </div>
      </div>
      
      <div className="clients">
      {logos.map((logo, index) => (
      <img
        key={index}
        src={images[logo]}
        alt={images[logo]}
      />
    ))}
  
      </div>
      <IconScroll />
    </div>
    
  )
}

export default Hero
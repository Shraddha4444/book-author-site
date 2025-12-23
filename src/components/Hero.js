import React from 'react';
import './Hero.css';
import heroBookImg from '../assets/hero-book.jpg'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="author-name">MAGNUS STAR</h2>
        <h1>Screams from the <br/><span className="highlight">Infinite Void</span></h1>
        <p>
          Bestselling author of "The Event Horizon." 
          Exploring the terror that hides between the stars. 
          <br/>
          <span className="warning-text">⚠️ Warning: Not for the faint of heart.</span>
        </p>
        <div className="hero-btns">
          <button className="btn-filled">Start Reading</button>
          <button className="btn-outline">View Tour Dates</button>
        </div>
      </div>
      
      <div className="hero-book-showcase">
        <div className="book-card">
          <img src={heroBookImg} alt="Magnus Star Book" />
          <div className="book-badge">New Arrival</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
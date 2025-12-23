import React from 'react';
import './Bio.css';
import authorImg from '../assets/author.jpg'; 

const Bio = () => {
  return (
    <section className="bio-section" id="bio">
      <div className="bio-container">
        
        <div className="bio-image">
          <img src={authorImg} alt="Magnus Star" />
          <div className="image-accent-box"></div>
        </div>

        <div className="bio-content">
          <span className="bio-subtitle">About The Author</span>
          <h2>MAGNUS STAR</h2>
          <p>
            Magnus Star is not just a writer; he is a warning. 
            Born under the red glare of Antares, his stories explore 
            the isolation of deep space and the things that 
            watch us from the dark.
          </p>
          <div className="stats-row">
            <div className="stat">
              <span className="stat-number">12</span>
              <span className="stat-label">Bestsellers</span>
            </div>
            <div className="stat">
              <span className="stat-number">5M+</span>
              <span className="stat-label">Readers</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Bio;
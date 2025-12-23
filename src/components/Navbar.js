import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* LOGO */}
        <a href="#" className="logo">
          MAGNUS <span className="logo-accent">STAR</span>
        </a>

        {}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        {}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          
          <li className="nav-item">
            <a href="#books" className="nav-links">Books</a>
          </li>
          
          <li className="nav-item">
            <a href="#bio" className="nav-links">Bio</a>
          </li>
          
          <li className="nav-item">
            <a href="#blog" className="nav-links">Blog</a>
          </li>

          {/* Purchase Button */}
          <li className="nav-item">
            <a href="#books" className="nav-links btn-nav">Purchase</a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
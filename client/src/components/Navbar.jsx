import React from 'react';
import { useState } from "react";
import '../styls/Navbar.css';

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(!isActive);
      };
      
      return (
        <div className="Navbar">
          <div className="Home">
            <a href="/">Home</a>
          </div>
          <button onClick={handleToggle}>Menu</button>
          <ul className={isActive ? 'active' : ''}>
            <li><a href="#about-section">About</a></li>
            <li><a href="/signin">Sign In</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      );
  }
  

export default Navbar;

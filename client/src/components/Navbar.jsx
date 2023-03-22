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
       

            <a href="#about-section">About</a>
            <a href="/signin">Sign In</a>
            <a href="/register">Register</a>
            <a href="/contact">Contact</a>
    
        </div>
      );
  }
  

export default Navbar;

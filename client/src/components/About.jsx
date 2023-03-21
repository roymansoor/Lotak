import React from 'react';
import '../styls/About.css';

function About() {
  return (

    <div className="About">
      <div className="About-content" id="about-section">
        <h1>About Us</h1>
        <p>We are a team of professionals dedicated to providing high-quality services to our clients.
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac luctus est, eget suscipit turpis.
              Morbi convallis nulla quis mi eleifend, nec consectetur massa dapibus. Vestibulum auctor est at lectus 
              accumsan interdum. Proin convallis, velit sed vestibulum congue, nulla elit aliquet mauris, sit amet fringilla 
              tortor eros non mauris. </p>
        <a href="/register" class="about-button">Register</a>
      </div>
    </div>
  );
}

export default About;

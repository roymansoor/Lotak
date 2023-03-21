import React from 'react';
import '../styls/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer">
      <div className="Footer-container">
        <p>&copy; {currentYear} LOTAK LLC. All Rights Reserved.</p>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Use</a>
      </div>
    </footer>
  );
}

export default Footer;

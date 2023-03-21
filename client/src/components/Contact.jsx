import React, { useState } from "react";
import '../styls/Contact.css';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Name: ${name}, Email: ${email}`);
      // TODO: Implement form submission logic here
    };
  
    return (
      <div className="contact-us-container">
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <label htmlFor="name-input">Name:</label>
          <input
            type="text"
            id="name-input"
            value={name}
            onChange={handleNameChange}
            required
          />
  
          <label htmlFor="email-input">Email:</label>
          <input
            type="email"
            id="email-input"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <div className="form-group">
  <label htmlFor="message">Message</label>
  <textarea
    className="form-control"
    id="message"
    rows="10"
    placeholder="Enter your message here"
    required
  ></textarea>
</div>
  
          <button type="submit">Submit</button>
        </form>
  
        <div className="company-info">
          <h2>Lotak</h2>
          <p>123 Main Street</p>
          <p>Anytown, USA</p>
          <p>Phone: <span style={{color: "black"}}>(123) 456-7890</span></p>
          <p>Email: <span style={{color: "black"}}>info@example.com</span></p>
          <div className="map-container">
    <iframe
      title="Our Location"
      width="100%"
      height="350"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193572.2172006946!2d-122.4788423838457!3d37.75761749178829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f8e8eae1b5f23%3A0xe5e5ddb5f5fb9c9b!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1648258431579!5m2!1sen!2sus"
    ></iframe>
  </div>
        </div>


      </div>
    );
  }
  
  export default Contact;
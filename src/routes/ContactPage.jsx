import React from "react";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <div className="content-container contact-page">
      <div className="contact-me-header">
        <p>Contact me</p>
      </div>
      <ContactForm />
      <div className="contact-me-links">
        <div className="link">
          <img src="icons/instagram.svg" alt="instagram-icon" className="icon" />
          <a href="https://www.instagram.com/_jujulia__">Instagram</a>
        </div>
        <div className="link">
          <img src="icons/facebook.svg" alt="facebook-icon" className="icon" />
          <a href="https://www.facebook.com/yuliia.shkarban">Facebook</a>
        </div>
        <div className="link">
          <img src="icons/linkedin.svg" alt="linkedin-icon" className="icon" />
          <a href="https://www.linkedin.com/in/yuliia-shkarban-25857018a/">
            LinkedIn
          </a>
        </div>
        <div className="link">
          <img src="icons/phone.svg" alt="phone-icon" className="icon" />
          <a href="tel:+48 578 003 732">+48578003732</a>
        </div>
        <div className="link">
          <img src="icons/email.svg" alt="email-icon" className="icon" />
          <a href="mailto:shkarban.yuliia@gmail.com">
            shkarban.yuliia@gmail.com
          </a>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

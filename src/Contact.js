import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Your message has been sent successfully!'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // In a real implementation, you would send the form data to your backend here
    // Example: axios.post('/api/contact', formData)
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-details">
              <h3>Location</h3>
              <p>New Delhi, Delhi, India</p>
            </div>
          </div>
          
          <div className="contact-card clickable">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-details">
              <h3>Email</h3>
              <a href="mailto:sanat23122003@gmail.com" className="contact-link">
                sanat23122003@gmail.com
              </a>
            </div>
          </div>
          
          <div className="contact-card clickable">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-details">
              <h3>Phone</h3>
              <a href="tel:+919711647857" className="contact-link">
                +91 9711647857
              </a>
            </div>
          </div>
          
          <div className="contact-card clickable">
            <div className="contact-icon">
              <FaLinkedin />
            </div>
            <div className="contact-details">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/sanat-chaudhary-869a90256/" target="_blank" rel="noopener noreferrer" className="contact-link">
                linkedin.com/sanat-chaudhary
              </a>
            </div>
          </div>
          
          <div className="contact-card clickable">
            <div className="contact-icon">
              <FaWhatsapp />
            </div>
            <div className="contact-details">
              <h3>WhatsApp</h3>
              <a href="https://wa.me/919711647857" target="_blank" rel="noopener noreferrer" className="contact-link">
                +91 9711647857
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
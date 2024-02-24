import React, { useState } from 'react';

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically handle the form submission, like sending an email or saving the data
    console.log(contactInfo);
    alert('Thank you for your message!');
    // Reset form fields
    setContactInfo({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={contactInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={contactInfo.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
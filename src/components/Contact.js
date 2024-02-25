import React, { useState } from "react";

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formStyle = {
    color: "#433a3f", 
    backgroundColor: "#72a98f", 
    padding: "20px",
    borderRadius: "5px",
  };

  const inputStyle = {
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    border: `1px solid #433a3f`, 
  };

  const buttonStyle = {
    backgroundColor: "#cbef43", 
    color: "#433a3f", 
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactInfo);
    alert("Thank you for your message!");
    setContactInfo({ name: "", email: "", message: "" });
  };

  return (
    <div style={formStyle}>
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
            style={inputStyle}
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
            style={inputStyle}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={contactInfo.message}
            onChange={handleChange}
            required
            style={inputStyle}
          ></textarea>
        </div>
        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;

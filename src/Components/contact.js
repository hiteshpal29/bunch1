import React, { useState } from 'react';
import Group11 from './group11';
import Header from './Header/Headers';
const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const formStyle = {
    maxWidth: '400px',
    width: '100%',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
     <>
        <Header/>
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            style={inputStyle}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={inputStyle}
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            style={inputStyle}
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            style={inputStyle}
            value={formData.message}
            onChange={handleChange}
          />
          <button style={buttonStyle} type="submit">Submit</button>
        </form>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close" onClick={closePopup}>&times;</span>
            <div className="popup-content">
  <span className="label">Name:</span> <span className="data">{formData.name}</span>
  <br />
  <span className="label">Email:</span> <span className="data">{formData.email}</span>
  <br />
  <span className="label">Subject:</span> <span className="data">{formData.subject}</span>
  <br />
  <span className="label">Message:</span> <span className="data">{formData.message}</span>
</div>

          </div>
        </div>
      )}
    </div>
    <Group11/>
     </>
   
  );
};

export default ContactUs;

import React, { useState } from 'react';
import fuelvisionLogo from '../images/fuelvisionLogo.png';
import './Homepage.css';

function Homepage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/save-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message);
      setEmail('');
    } catch (error) {
      setMessage('Failed to send email.');
    }
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to FuelVision</h1>
        <img src={fuelvisionLogo} alt="FuelVision Logo" className="logo-img" />
      </header>

      <footer className="footer">
        <form className="email-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
      </footer>
    </div>
  );
}

export default Homepage;

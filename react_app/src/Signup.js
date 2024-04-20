import React, { useState } from 'react';
import './Style.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  // State variables for form inputs and validation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim()) {
      setErrors({ name: 'Name is required' });
      return;
    }
    if (!email.trim()) {
      setErrors({ email: 'Email is required' });
      return;
    }
    if (!password.trim()) {
      setErrors({ password: 'Password is required' });
      return;
    }

    // Additional email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors({ email: 'Invalid email format' });
      return;
    }

    // Redirect to questionnaire route upon successful validation
    navigate('/questionnaire');
  };

  return (
    <div className="signup-container showcase">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
        <button type="submit">SIGN UP</button>
        <Link to="/signin">
          Already have an account? Sign in now.
        </Link>
      </form>
    </div>
  );
};

export default Signup;

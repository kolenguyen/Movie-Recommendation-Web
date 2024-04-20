import React, { useState } from 'react';
import './Style.css';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = ({ toggleForm }) => {
  const navigate = useNavigate();

  // State variables for form inputs and validation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email.trim()) {
      setErrors({ email: 'Email is required' });
      return;
    }
    if (!password.trim()) {
      setErrors({ password: 'Password is required' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors({ email: 'Invalid email format' });
      return;
    }

    // Redirect to dashboard route upon successful validation
    navigate('/');
  };

  return (
    <div className="signin-container showcase">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
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
        <button type="submit">SIGN IN</button>
        <Link to="/signup">
          New user? Sign up now.
        </Link>
      </form>
    </div>
  );
};

export default SignIn;

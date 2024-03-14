import React from 'react';
import './Style.css';

const Login = ({ toggleForm }) => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

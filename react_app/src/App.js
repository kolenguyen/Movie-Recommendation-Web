// App.js
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './Style.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="app">
      {showLogin ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Signup toggleForm={toggleForm} />
      )}
      <div className="toggle-text-container">
        <p className="toggle-text" onClick={toggleForm}>
          {showLogin ? 'New to Netflix? Sign up now.' : 'Already have an account? Sign in now.'}
        </p>
      </div>
    </div>
  );
};


export default App;

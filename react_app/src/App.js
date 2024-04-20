import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import 'Routes' instead of 'Switch'
import Home from './pages/Home';
import './App.css';
import Footer from './components/Footer/Footer';
import Signin from './Signin';
import Signup from './Signup';
import Questionnaire from './Questionnaire';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes> 
          <Route exact path='/' element={<Home />} /> 
          <Route path='/signin' element={<Signin />} /> 
          <Route path='/signup' element={<Signup />} /> 
          <Route path='/questionnaire' element={<Questionnaire />} /> 

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

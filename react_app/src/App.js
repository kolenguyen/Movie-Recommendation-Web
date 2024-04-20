import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import NetFlixShow from './pages/NetFlixShow';
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
          <Route path="/homepage" element ={<NetFlixShow />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

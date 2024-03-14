import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import NetFlixShow from './pages/NetFlixShow';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes> 
          <Route exact path='/' element={<Home />} /> 
          <Route path="/netflix-show" element ={<NetFlixShow />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

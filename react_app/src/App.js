import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import 'Routes' instead of 'Switch'
import Home from './pages/Home';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes> 
          <Route exact path='/' element={<Home />} /> 
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

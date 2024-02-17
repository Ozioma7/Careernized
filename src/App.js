// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavMain from './components/NavMain';
import Footer from './components/Footer';
import Click from './components/Click';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
    <div>
      <Header /> {/* Include your Header component here */}

      <div>
        {/* Define your routes using Routes component */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <NavMain />
      <Click />

      <Footer /> {/* Include your Footer component here */}
    </div>
  </Router>

  );
}

export default App;

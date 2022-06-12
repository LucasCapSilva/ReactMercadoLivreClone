import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/statics/footer/Footer';
import NavBar from './components/statics/navBar/NavBar';
import Home from './pages/home/Home';
import { Produtos } from './pages/produtos/Produtos';


function App() {
  return (
    <>

      <Router>
        <NavBar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/produtos" element={<Produtos />} />

        </Routes>

        <Footer />

      </Router>
    </>
  );
}

export default App;
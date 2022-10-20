import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import {
  HomePage,
  Catalog,
  About,
  Contacts,
  Cart
} from './pages'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes className="page">
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

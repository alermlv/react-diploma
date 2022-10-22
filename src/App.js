import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import {
  HomePageLoaded,
  Catalog,
  About,
  Contacts,
  Cart,
  ViewProduct,
  Page404
} from './pages'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes className="page">
        <Route path="/" element={<HomePageLoaded />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<ViewProduct />} />
        <Route path="/404" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

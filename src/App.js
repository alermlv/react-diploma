import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import {
  HomePageLoaded,
  CatalogPage,
  AboutPage,
  ContactsPage,
  CartPage,
  ViewProductPage,
  Page404
} from './pages';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes className="page">
        <Route path="/" element={<HomePageLoaded />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/:id" element={<ViewProductPage />} />
        <Route path="/404" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
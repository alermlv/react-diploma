import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer, Banner, Main } from './components';
import {
  HomePage,
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
      <Main>
        <Banner />
        <Routes className="page">
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/catalog/:id" element={<ViewProductPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
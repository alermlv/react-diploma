import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer, Banner, Main } from './components';
import { calculateTotals, updateCartItems } from './features/cart/cartSlice';
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
  const products = JSON.parse(localStorage.getItem("cart")) || [];
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(updateCartItems(products));
    dispatch(calculateTotals());
  },[])
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
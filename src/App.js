import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AuthProvider from './components/AuthContext';
import TopNav from './components/TopNav';
import CategoryHeader from './components/CategoryHeader';
import CarouselBanner from './components/CarouselBanner';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Login from './components/Login';
import Checkout from './components/Checkout';
import CartProvider from './components/CartContext';
import ConfirmOrder from './components/ConfirmOrder';
import CategoryPage from './components/CategoryPage';
import Snacks from './components/Snacks';
import Beverages from './components/Beverages';
import Fruits from './components/Fruits';

const AppContent = () => {
  const location = useLocation();
  const hideCarouselOn = ['/snacks', '/beverages', '/fruits','/login'];
  const shouldHideCarousel = hideCarouselOn.includes(location.pathname);

  return (
    <>
      <TopNav />
      <CategoryHeader />
      {!shouldHideCarousel && <CarouselBanner />}

      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirm" element={<ConfirmOrder />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/fruits" element={<Fruits />} />
      </Routes>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

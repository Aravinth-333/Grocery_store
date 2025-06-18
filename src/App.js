import React from 'react';
import AuthProvider from './components/AuthContext'; // Import
import TopNav from './components/TopNav';
import CategoryHeader from './components/CategoryHeader';
import CarouselBanner from './components/CarouselBanner';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Login from './components/Login';
import Checkout from './components/Checkout';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <AuthProvider>
      <Router>
        <TopNav />
        <CategoryHeader />
        <CarouselBanner />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;

import React from 'react';
import TopBar from './layouts/TopBar';
import Navbar from './layouts/Navbar';
import Home from './pages/home/Home';
import Footer from './layouts/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Shop from './pages/shop/Shop';
import ProductDetails from './pages/shop/ProductDetails';
import Blog from './pages/blog/Blog';
import SinglePost from './pages/blog/SinglePost';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import Checkout from './pages/cart/Checkout';

const App = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </div>
      <div className="pt-32">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/product/:slug' element={<ProductDetails />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:slug' element={<SinglePost />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
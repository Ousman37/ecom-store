import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartProvider from './contexts/CartContext';
import HomePage from './pages/home';
import Product from './pages/product';
import Cart from './pages/cart.jsx';
import Checkout from './pages/CheckoutSuccess';
import Contact from './pages/contact';
import Layout from './components/Layout';
import CartIcon from './components/CartIcon';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = product => {
    setCart([...cart, product]);
  };

  return (
    <CartProvider value={{ cart, handleAddToCart }}>
      <Router>
        <CartIcon cartCount={cart.length} />
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/CartPage' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CartProvider } from './contexts/CartContext.jsx';
// import HomePage from './pages/home';
// import Product from './pages/product.jsx';
// import Cart from './pages/cart.jsx';
// import Checkout from './pages/checkout.jsx';
// // import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
// import Contact from './pages/contact';
// import Layout from './components/Layout';

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <Layout>
//           <Routes>
//             <Route path='/' element={<HomePage />} />
//             <Route path='/product/:id' element={<Product />} />
//             <Route path='/CartPage' element={<Cart />} />
//             <Route path='/checkout' element={<Checkout />} />
//             {/* <Route path='/success' element={<CheckoutSuccessPage />} /> */}
//             <Route path='/contact' element={<Contact />} />
//           </Routes>
//         </Layout>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;

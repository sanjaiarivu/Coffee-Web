import React, { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './WebProject/Home';
import Login from './WebProject/Login';
import Signup from './WebProject/Signup';
import Cart from './WebProject/Cart';
import Product from './WebProject/Product';
import About from './WebProject/About';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/cart',
      element: <Cart cartItems={cartItems} />
    },
    {
      path: '/product',
      element: <Product addToCart={addToCart} />
    },
    {
      path: '/about',
      element: <About />
    }
  ]);

  return (
    <div id="body">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

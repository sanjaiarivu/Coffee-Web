import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="landing-page" >
      <nav className="navbar">
        <div className="logo">☕LOGO</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/Product">Product</Link>
          <Link to="/Cart">Cart</Link>
          <Link to="/About">About us</Link>
          <Link to="/signup" className="signup-link">Sign up</Link>
        </div>
      </nav>

      <div className="landing-content">
        <h1>Handcrafted Curations</h1>
        <h3>What's on your mind?</h3>
        <p>
          Welcome to coffee haven – where every cup tells a story.
Sip, relax, and explore our rich brews and handcrafted delights online.
        </p>
        <div className="action-buttons">
          <Link to="/signup" className="btn">Sign Up</Link>
          <Link to="/login" className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

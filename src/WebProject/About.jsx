import React from 'react';

const About = () => {
  return (
    <div id="about-page">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          Welcome to our coffee haven! At Brew Bliss, we don’t just serve coffee — we create experiences. Our journey began with a passion for rich flavors, warm aromas, and a vision to create a space where coffee lovers could gather and unwind.
        </p>
        <p className="about-text">
          Our shop opened its doors in early 2024 in the heart of the city. Since then, we’ve grown into a favorite neighborhood café — a cozy place where students, artists, professionals, and families come together to enjoy a cup of coffee made with care.
        </p>

        <h2 className="about-subtitle">Our Philosophy</h2>
        <p className="about-text">
          We believe that coffee is more than just a drink — it’s a ritual, a source of inspiration, and a way to bring people closer. That's why every cup we serve is crafted with the finest beans, fresh ingredients, and a commitment to sustainability.
        </p>

        <h2 className="about-subtitle">What Makes Us Special</h2>
        <ul className="about-list">
          <li>✔️ Handpicked organic coffee beans from trusted farms.</li>
          <li>✔️ A wide variety of brews — from espresso to cold brew and everything in between.</li>
          <li>✔️ Delicious pastries and snacks made fresh every day.</li>
          <li>✔️ Friendly staff who treat you like family.</li>
          <li>✔️ Comfortable seating and free Wi-Fi for studying or relaxing.</li>
        </ul>

        <h2 className="about-subtitle">Looking Ahead</h2>
        <p className="about-text">
          As we continue to grow, our mission remains the same — to serve coffee that warms the heart and energizes the soul. We’re also working to reduce waste and expand our community initiatives, because we believe in giving back.
        </p>

        <p className="about-text">
          Thank you for being a part of our story. Whether you’re here for your morning boost or a late-night chat over cappuccino, we’re glad to have you with us. Visit us anytime — we’re always brewing something wonderful.
        </p>
      </div>

      <footer className="footer">
        <p className="footer-text">© 2025 Brew Bliss Coffee Shop. All rights reserved.</p>
        <p className="footer-text">123 Bean Street, Roastville | Contact: contact@brewbliss.com</p>
      </footer>
    </div>
  );
};

export default About;

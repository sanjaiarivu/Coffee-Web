
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoffeeData from '../Json/Coffee.json';

const ProductPage = ({ addToCart }) => {
  const navigate = useNavigate();
  const [coffee, setcoffee] = useState([]);

  useEffect(() => {
    setcoffee(CoffeeData);
  }, []);

  const handleAdd = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-page">
      <div id='banner'></div>
      <br />
      <br />
      <div className="product-grid">
        {coffee.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="details">
              <h3>{item.name}</h3>
              <p className="kcal">{item.kcal}</p>
              <p className="desc">{item.desc}</p>
              <p className="price">₹ {item.price.toFixed(2)}</p>
              <button onClick={() => handleAdd(item)}>Add Item</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

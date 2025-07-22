import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const Signup = () => {
   const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  let h = 20;
  let n = 20;
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      await axios.post('http://localhost:5001/users', formData);
      alert('Signup successful!');
      navigate('/login');
    } catch (err) {
      console.log(err);
      alert('Something went wrong. Please try again.');
    }
  };


  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <div className="tab">
          SIGN UP
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create Your Account</h2>

          <input type="text" name="username" placeholder="Full Name" value={formData.username} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          
          <div className="phone-group">
            <select>
              <div>+91</div>
            </select>
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />


          <button type="submit" className="submit-btn">Sign Up</button>

          <p className="login-link">Already have an account? <Link to="/Login">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

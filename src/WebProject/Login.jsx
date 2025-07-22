import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch('../backend/data.json') 
      .then(res => res.json())
      .then(data => {
        console.log('Fetched users:', data.users);
        setUsers(data.users);
      })
      .catch(err => console.error('Error fetching user data:', err));
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = formData.email.trim();
    const trimmedPassword = formData.password.trim();

    console.log('Entered:', { email: trimmedEmail, password: trimmedPassword });

    const user = users.find(
      u => u.email === trimmedEmail && u.password === trimmedPassword
    );

    if (user) {
      console.log('Login successful for:', user.username);
      navigate('/');
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div>
      <div id="loginbody">
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

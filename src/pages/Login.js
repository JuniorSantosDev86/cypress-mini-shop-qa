import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockUser } from '../mockData';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Fake authentication logic
    if (email === mockUser.email && password === mockUser.password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Try admin@test.com / admin123');
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px'
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
          Login to Cypress Mini Shop
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          
          <button type="submit" className="btn" style={{ width: '100%' }}>
            Login
          </button>
          
          {error && <div className="error">{error}</div>}
        </form>
        
        <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '14px', color: '#666' }}>
          <p>Demo credentials:</p>
          <p>Email: admin@test.com</p>
          <p>Password: admin123</p>
        </div>
      </div>
    </div>
  );
};

export default Login; 
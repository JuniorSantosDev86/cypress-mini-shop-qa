import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const navStyle = {
    backgroundColor: '#343a40',
    padding: '1rem 2rem',
    marginBottom: '2rem'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginRight: '2rem',
    fontSize: '16px'
  };

  const buttonStyle = {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginRight: '2rem' }}>
            Cypress Mini Shop
          </span>
          <Link to="/dashboard" style={linkStyle}>
            Dashboard
          </Link>
          <Link to="/add-product" style={linkStyle}>
            Add Product
          </Link>
        </div>
        <button style={buttonStyle} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 
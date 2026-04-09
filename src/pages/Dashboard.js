import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockProducts } from '../mockData';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, []);

  const productCardStyle = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem'
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div style={headerStyle}>
        <h1>Product Dashboard</h1>
        <button 
          className="btn" 
          onClick={() => navigate('/add-product')}
        >
          Go to Add Product
        </button>
      </div>
      
      <div className="products-list">
        <h2>Available Products ({products.length})</h2>
        
        {products.map(product => (
          <div key={product.id} style={productCardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>
                  {product.name}
                </h3>
                <p style={{ margin: '0', color: '#666' }}>
                  Category: {product.category}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#007bff' }}>
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard; 
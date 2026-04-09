import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate saving process
    setTimeout(() => {
      alert('Product added successfully!');
      setIsSubmitting(false);
      navigate('/dashboard');
    }, 500);
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto'
  };

  return (
    <div className="container">
      <h1>Add New Product</h1>
      
      <div style={formStyle}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Product Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter product name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
              placeholder="e.g., $19.99"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              placeholder="e.g., Electronics, Groceries, Stationery"
            />
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              type="submit" 
              className="btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Adding Product...' : 'Add Product'}
            </button>
            
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => navigate('/dashboard')}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct; 
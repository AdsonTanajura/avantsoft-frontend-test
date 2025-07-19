import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import './index.css';
import { FormDataProps } from './interface';
import api from '../../api';
import { NavLink } from 'react-router-dom';

export const ProductForm = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    name: '',
    price: '',
    sku: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { name, price, sku } = formData;
      await api.post('/products', {
        name: name,
        price: parseFloat(price),
        sku: sku,
      });

      setSuccessMessage('Product successfully added!');
      setTimeout(() => setSuccessMessage(null), 2000);

      setFormData({ name: '', price: '', sku: '' });
    } catch (err: unknown) {
      if (err instanceof Error && 'response' in err) {
        const anyErr = err as any;
        if (anyErr.response?.data?.message) {
          setError(anyErr.response.data.message);
          setTimeout(() => setError(null), 5000);
        } else {
          setError('Unknow error');
        }
      }
    }
  };
  return (
    <div className="container">
      <h1 className="title-form">Managed</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          className="form-input"
        />
        <input
          name="sku"
          placeholder="SKU"
          value={formData.sku}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Add Product
        </button>
        {error && (
          <span className="error-message">
            {error || 'Something went wrong'}
          </span>
        )}
        {successMessage && (
          <span className="success-message">{successMessage}</span>
        )}
      </form>

      <nav className="nav-buttons">
        <NavLink className="back-button" to={'/list'}>
          See product list
        </NavLink>
      </nav>
    </div>
  );
};

export default ProductForm;

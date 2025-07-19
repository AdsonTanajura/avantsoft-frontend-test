import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import api from '../../api';
import { ProductListProps } from './interface';

const ProductList = ({}) => {
  const [products, setProducts] = useState<ProductListProps[]>([]);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get('/products');
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      alert('Failed to fetch products. Please try again.');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete: (id: number) => Promise<void> = async (id: number) => {
    await api.delete(`/products/${id}`);
    fetchProducts();
  };

  return (
    <>
      <div className="page-container">
        <nav className="nav-button">
          <NavLink className={'nav-link'} to={'/managed'}>
            Register Product
          </NavLink>
        </nav>
        <ul className="product-list">
          {products.map((p) => (
            <li key={p.id} className="product-item">
              <h2 className="item-content">Product Name: {p.name}</h2>
              <h2 className="item-content">Price: {p.price}</h2>
              <h2 className="item-content">Sku: {p.sku}</h2>
              <h2 className="item-content">
                Missing Letter: {p.missingLetter}
              </h2>
              <button
                onClick={() => handleDelete(p.id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;

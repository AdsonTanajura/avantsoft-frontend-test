import { createBrowserRouter, Navigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/list" replace />,
  },
  {
    path: '/managed',
    element: <ProductForm />,
  },
  {
    path: '/list',
    element: <ProductList />,
  },
]);

export default router;

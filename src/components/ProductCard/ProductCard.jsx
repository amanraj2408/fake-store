import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image} alt={product.title} />
      <h4>{product.title.slice(0, 40)}...</h4>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
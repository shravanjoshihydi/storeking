// src/ProductCard.jsx

import React from 'react';

const ProductCard = ({ name, price }) => {
  const handleBuy = () => {
    alert(`You selected: ${name} for Rs ${price}`);
  };

  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Price: Rs {price}</p>
      <button style={styles.button} onClick={handleBuy}>
        Buy Now
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '10px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif'
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default ProductCard;

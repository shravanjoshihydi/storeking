import React, { useState, useEffect } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Himalayan Face Wash', price: 299 },
  { id: 2, name: 'Aloe Vera Gel', price: 199 },
  { id: 3, name: 'Sunscreen SPF 50', price: 349 }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const found = prevCart.find(item => item.id === product.id);
      if (found) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  return (
    <div className="container">
      <h1>Simple Cart App</h1>
      <section className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: Rs {product.price}</p>
            <button onClick={() => addToCart(product)} className="button">
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      <section className="cart-section">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map(item => (
                <li key={item.id} className="cart-item">
                  {item.name} x {item.quantity} <span>Rs {item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <h3>Total: Rs {totalPrice}</h3>
          </>
        )}
      </section>
    </div>
  );
}

export default App;

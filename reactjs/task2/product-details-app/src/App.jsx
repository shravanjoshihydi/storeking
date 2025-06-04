import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Himalayan Face Wash', price: 299, description: 'A refreshing herbal face wash.' },
  { id: 2, name: 'Aloe Vera Gel', price: 199, description: 'Soothing gel for skin hydration.' },
  { id: 3, name: 'Sunscreen SPF 50', price: 349, description: 'Protects against harmful UV rays.' }
];

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={styles.container}>
      <h2>Product List</h2>
      <ul style={styles.list}>
        {products.map(product => (
          <li
            key={product.id}
            style={styles.listItem}
            onClick={() => setSelectedProduct(product)}
          >
            {product.name}
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div style={styles.details}>
          <h3>Selected Product:</h3>
          <p><strong>Name:</strong> {selectedProduct.name}</p>
          <p><strong>Price:</strong> Rs {selectedProduct.price}</p>
          <p><strong>Description:</strong> {selectedProduct.description}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '500px',
    margin: '0 auto'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
    cursor: 'pointer',
    color: '#007bff'
  },
  details: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #eee',
    borderRadius: '6px'
  }
};

export default App;

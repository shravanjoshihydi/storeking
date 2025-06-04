// src/App.jsx

import React from 'react';
import ProductCard from './ProductCard';

function App() {
  return (
    <div>
      <ProductCard name="Himalayan Face Wash" price={299} />
      <ProductCard name="Aloe Vera Gel" price={199} />
    </div>
  );
}

export default App;

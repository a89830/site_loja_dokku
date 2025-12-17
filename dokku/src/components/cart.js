import React, { useState } from 'react';

export default function Cart({ items }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{marginTop: '2rem'}}>
      <h2>🛒 Carrinho</h2>
      {cart.length === 0 && <p>O carrinho está vazio.</p>}
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>
            {item.name} - €{item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      {cart.length > 0 && <p><strong>Total:</strong> €{total.toFixed(2)}</p>}
      <hr />
      <h3>Produtos disponíveis</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.name} - €{item.price.toFixed(2)}{' '}
            <button onClick={() => addToCart(item)}>Adicionar ao carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from './cartSlice';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
  const { items, totalItems, totalCost } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ textAlign: 'center', color: '#1a4d2e' }}>Shopping Cart</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <p>Total Plants: <strong>{totalItems}</strong></p>
        <p>Total Cost: <strong>${totalCost.toFixed(2)}</strong></p>
      </div>
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => nav('/products')} style={{ marginRight: 8, padding: '8px 12px', backgroundColor: '#94a3b8', color: '#fff', border: 'none', borderRadius: 6 }}>Continue Shopping</button>
        <button onClick={() => alert('Checkout Coming Soon')} style={{ padding: '8px 12px', backgroundColor: '#2f855a', color: '#fff', border: 'none', borderRadius: 6 }}>Checkout</button>
      </div>
      <div>
        {items.length === 0 && <p>Your cart is empty. Add plants from the Products page.</p>}
        {items.map(item => (
          <div key={item.id} style={{ border: '1px solid #e2e8f0', padding: 12, borderRadius: 8, marginBottom: 10, display: 'flex', gap: 12, alignItems: 'center' }}>
            <img src={item.thumbnail} alt={item.name} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 6 }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0 0 6px' }}>{item.name}</h3>
              <p style={{ margin: 0 }}>Unit Price: ${item.price.toFixed(2)}</p>
              <p style={{ margin: '6px 0 0' }}>Line Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div>
                <button onClick={() => dispatch(incrementItem(item.id))} style={{ marginRight: 6, padding: '6px 10px', borderRadius: 6, border: 'none', backgroundColor: '#2f855a', color: '#fff' }}>+</button>
                <button onClick={() => dispatch(decrementItem(item.id))} style={{ padding: '6px 10px', borderRadius: 6, border: 'none', backgroundColor: '#94a3b8', color: '#fff', marginLeft: 6 }}>-</button>
              </div>
              <div>
                <button onClick={() => dispatch(removeItem(item.id))} style={{ padding: '6px 10px', borderRadius: 6, border: 'none', backgroundColor: '#ff6b6b', color: '#fff' }}>Delete</button>
              </div>
              <div style={{ textAlign: 'center', marginTop: 8 }}>Qty: {item.quantity}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const totalItems = useSelector(state => state.cart.totalItems);

  const linkStyle = ({ isActive }) => ({
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
    opacity: isActive ? 0.9 : 0.8
  });

  return (
    <header style={{ padding: '10px', backgroundColor: '#276749', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <h1 style={{ margin: 0, fontSize: '1.4em' }}>Paradise Nursery</h1>
        <p style={{ margin: 0, fontSize: '0.9em', opacity: 0.9 }}>Houseplants & Joy</p>
      </div>
      <nav>
        <NavLink to="/products" style={linkStyle}>Products</NavLink>
        <NavLink to="/cart" style={linkStyle}>Cart ({totalItems})</NavLink>
      </nav>
    </header>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const nav = useNavigate();
  return (
    <div style={{
      backgroundImage: 'url(/assets/landing-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px'
    }}>
      <div style={{ background: 'rgba(255,255,255,0.85)', padding: '30px', borderRadius: '10px', maxWidth: 800, textAlign: 'center' }}>
        <h1 style={{ color: '#1a4d2e', fontSize: '2.6rem', margin: '0 0 10px' }}>Paradise Nursery</h1>
        <p style={{ color: '#2f855a', fontSize: '1.1rem', marginBottom: '18px' }}>
          Welcome to Paradise Nursery — your friendly neighborhood plant shop. Browse our healthy, beautiful houseplants to bring life to your space.
        </p>
        <button
          onClick={() => nav('/products')}
          style={{ padding: '12px 22px', backgroundColor: '#2f855a', color: '#fff', borderRadius: 6, border: 'none', cursor: 'pointer', fontSize: '1rem' }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

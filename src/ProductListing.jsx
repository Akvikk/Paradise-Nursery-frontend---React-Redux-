import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './cartSlice';

const PRODUCTS = [
  { id: 1, name: 'Fern', price: 10, category: 'Indoor', thumbnail: '/assets/fern.png' },
  { id: 2, name: 'Succulent', price: 8, category: 'Succulent', thumbnail: '/assets/succulent.png' },
  { id: 3, name: 'Palm', price: 20, category: 'Indoor', thumbnail: '/assets/palm.png' },
  { id: 4, name: 'Cactus', price: 12, category: 'Succulent', thumbnail: '/assets/cactus.png' },
  { id: 5, name: 'Bonsai', price: 50, category: 'Indoor', thumbnail: '/assets/bonsai.png' },
  { id: 6, name: 'Aloe Vera', price: 15, category: 'Medicinal', thumbnail: '/assets/aloe.png' }
];

const CATEGORIES = ['Indoor', 'Succulent', 'Medicinal'];

export default function ProductListing() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) => cartItems.some(i => i.id === id);

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ textAlign: 'center', color: '#1a4d2e' }}>Our Plants</h1>
      {CATEGORIES.map(category => (
        <section key={category} style={{ marginTop: 22 }}>
          <h2 style={{ color: '#2f855a' }}>{category}</h2>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            {PRODUCTS.filter(p => p.category === category).map(product => (
              <div key={product.id} style={{ border: '1px solid #e2e8f0', padding: 12, borderRadius: 8, width: 180, textAlign: 'center' }}>
                <img src={product.thumbnail} alt={product.name} style={{ width: '100%', height: 110, objectFit: 'cover', borderRadius: 6 }} />
                <h3 style={{ margin: '8px 0 4px' }}>{product.name}</h3>
                <p style={{ margin: '4px 0', color: '#4a5568' }}>${product.price.toFixed(2)}</p>
                <button
                  onClick={() => dispatch(addItem(product))}
                  disabled={isInCart(product.id)}
                  style={{
                    padding: '8px 10px',
                    backgroundColor: isInCart(product.id) ? '#9ae6b4' : '#2f855a',
                    border: 'none',
                    color: '#fff',
                    borderRadius: 6,
                    cursor: isInCart(product.id) ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isInCart(product.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

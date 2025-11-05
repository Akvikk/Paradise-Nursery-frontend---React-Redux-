import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const loadState = () => {
  try {
    const serialized = localStorage.getItem('cart_state');
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem('cart_state', serialized);
  } catch (e) {}
};

const preloadedState = loadState();

const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState
});

store.subscribe(() => {
  saveState({ cart: store.getState().cart });
});

export default store;

import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalItems: 0, totalCost: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) existing.quantity++;
      else state.items.push({ ...item, quantity: 1 });
      state.totalItems += 1;
      state.totalCost = +(state.totalCost + item.price).toFixed(2);
    },
    incrementItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity++;
        state.totalItems++;
        state.totalCost = +(state.totalCost + item.price).toFixed(2);
      }
    },
    decrementItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity--;
        state.totalItems--;
        state.totalCost = +(state.totalCost - item.price).toFixed(2);
      } else {
        state.totalItems -= 1;
        state.totalCost = +(state.totalCost - item.price).toFixed(2);
        state.items = state.items.filter(i => i.id !== id);
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (!item) return;
      state.totalItems -= item.quantity;
      state.totalCost = +(state.totalCost - item.price * item.quantity).toFixed(2);
      state.items = state.items.filter(i => i.id !== id);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalCost = 0;
    }
  }
});

export const { addItem, incrementItem, decrementItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

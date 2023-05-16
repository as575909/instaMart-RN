import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const MyCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToMyCart(state, {payload}) {
      //   console.log(payload);
      const {id} = payload;

      const find = state.find(item => item.id === id);
      if (find) {
        return state.map(item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      } else {
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    increment(state, {payload}) {
      return state.map(item =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
    },
    removeMyCartItem(state, {payload}) {
      return state.map(item =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      );
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      return state.filter(item => item.id !== itemId);
    },
    deleteMyCartItem(state) {
      return [];
    },
  },
});

export const { addProductToMyCart, removeMyCartItem, deleteMyCartItem, removeItem } = MyCartSlice.actions;


export default MyCartSlice.reducer;
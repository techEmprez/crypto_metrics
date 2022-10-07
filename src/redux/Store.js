import { configureStore } from '@reduxjs/toolkit';
import CryptoReducer from './CryptoSlice';

export default configureStore({
  reducer: {
    crypto: CryptoReducer,
  },
});

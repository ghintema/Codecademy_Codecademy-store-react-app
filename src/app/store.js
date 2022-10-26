// Import createStore and combineReducers here.
import { createStore, combineReducers } from 'redux';
// Import the slice reducers here.
import { cartReducer } from '../features/cart/cartSlice.js';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice.js';
import { inventoryReducer } from '../features/inventory/inventorySlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';
// Create and export the store here.

const rootReducer = combineReducers({
  inventory: inventoryReducer,
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
  searchTerm: searchTermReducer
});

export const store = createStore(rootReducer);

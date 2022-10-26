import React from 'react';

import {Inventory}  from '../features/inventory/Inventory.js';
import {CurrencyFilter} from '../features/currencyFilter/CurrencyFilter.js';
import { Cart } from '../features/cart/Cart';
import { SearchTerm, searchTerm } from '../features/searchTerm/SearchTerm';
// Import the Cart component here.

// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;
  console.log('App invoked')
  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />
      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />
      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch} 
      />
    </div>
  );
};

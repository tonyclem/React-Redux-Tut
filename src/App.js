import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from "redux";

// react-redux - Provider - wraps app, connect - used in components
import { Provider } from "react-redux";

// Actions
import { INCREASE, DECREASE } from "./action";

// Reducer
import reducer from "./reducer";

// initial store
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5,
};

const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <main>
      <Provider store={store}>
        <Navbar />
        <CartContainer cart={cartItems} />
      </Provider>
    </main>
  );
}

export default App;

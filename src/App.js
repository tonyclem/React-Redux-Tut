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

// Reducer
import reducer from "./reducer";

const store = createStore(reducer);

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

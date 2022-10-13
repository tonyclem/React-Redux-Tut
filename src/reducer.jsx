import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./action";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    console.log("you decrease amount");
  }
  if (action.type === INCREASE) {
    console.log("you increase amount");
  }
  if (action.type === REMOVE) {
    console.log("you remove amount");
  }

  return state;
};

export default reducer;

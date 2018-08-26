import { CART_REDUCER } from '../reducers/cartReducer';

export const getCartData = (state) => {
  return state[CART_REDUCER]
}
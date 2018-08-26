import { SHIPPING_REDUCER } from '../reducers/shippingReducer';

export const getShippingData = (state) => {
  return state[SHIPPING_REDUCER]
}
import shippingReducer, { SHIPPING_REDUCER } from "./shippingReducer";
import cartReducer, { CART_REDUCER } from "./cartReducer";

const reducer = {
  [SHIPPING_REDUCER]: shippingReducer,
  [CART_REDUCER]: cartReducer
}

export default reducer
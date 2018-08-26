import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { getShippingData } from "../utils/getShippingData";
import { getCartData } from "../utils/getCartData";
import { changeTotalPrice } from '../actions/cartActions';

import {
  addUserName,
  addUserPhone,
  addUserEmail,
  checkUserName,
  checkUserEmail,
  addUserAddress,
  checkUserAddress,
  selectShippingOption,
} from '../actions/shippingActions'




export default compose(
  connect ((state) => {
      return {
        cartItems: getCartData(state).cartItems,
        totalPrice: getCartData(state).totalPrice,
        ...getShippingData(state)
      }
    },
    (dispatch) => ({
      addUserName(value) {
        dispatch(addUserName(value))
      },
      checkUserName(){
        dispatch(checkUserName())
      },
      addUserAddress(value){
        dispatch(addUserAddress(value))
      },
      checkUserAddress() {
        dispatch(checkUserAddress())
      },
      addUserPhone(value){
        dispatch(addUserPhone(value))
      },
      addUserEmail(value){
        dispatch(addUserEmail(value))
      },
      checkUserEmail() {
        dispatch(checkUserEmail())
      },
      selectShippingOption(value) {
        dispatch(changeTotalPrice(value));
        dispatch(selectShippingOption(value))
      }
    })
  ),
  lifecycle({
    componentDidMount(){

    }
  })
)
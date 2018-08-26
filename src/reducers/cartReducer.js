
import {
  DELETE_ITEM,
  HANDLE_CHANGE,
  CHANGE_TOTAL_PRICE,
  CHANGE_ITEM_QUANTITY,
} from '../actions/cartActions'

const initialState = {
  cartItems: [],
  totalPrice: 0,
  latestAddedPrice: 0
}

export const CART_REDUCER = 'CART_REDUCER';

function cartReducer(state = initialState, action) {
  let newState = null;
  switch(action.type) {
    case 'LOADED_ALL_ITEMS':
      let totalPrice = 0;
      newState = {...state};
      action.payload.forEach(item => {
        let itemPrice = Number(item.quantity) * Number(item.price);
        totalPrice = totalPrice + itemPrice;
      });
      newState.totalPrice = totalPrice;
      newState.cartItems = action.payload;
      return newState;
    case DELETE_ITEM:
      newState = {...state};
      let itemTotalPrice = 0;
      newState.cartItems = state.cartItems.filter(item => {
        if(item.id === action.id) {
          itemTotalPrice = item.price * item.quantity;
        }
        return item.id !== action.id
      });
      newState.totalPrice = state.totalPrice - itemTotalPrice;
      return newState;
    case CHANGE_ITEM_QUANTITY:
      const { id, changeType } = action;
      newState = {...state};
      let newCartItems = [];
      if(changeType === 'increase'){
        newState.cartItems = state.cartItems.map(item => {
          if( item.id === id ) {
            newState.totalPrice = Number(state.totalPrice) + Number(item.price);
            return {...item, itemTotalPrice: Number(item.itemTotalPrice) + Number(item.price), quantity: Number(item.quantity) + 1 }
          }
          return item
        })
      }
      else {
        newState.cartItems = state.cartItems.map(item => {
          if( item.id === id ) {
            newState.totalPrice = Number(state.totalPrice) - Number(item.price);
            return {...item, itemTotalPrice: Number(item.itemTotalPrice) - Number(item.price), quantity: Number(item.quantity) - 1 }
          }
          return item
        })
      }
      return newState;
    case 'CART_ITEMS_FETCH_ERROR':
      newState = {...state};
      newState.errorMessage = "Sory!!!!! Something went wrong! Please, Try again";
      return newState;
    case HANDLE_CHANGE:
      newState = {...state};
      const { value } = action;
      let prevItemTotalPrice = null;
      newState.cartItems = state.cartItems.map(item => {
        if( item.id === action.id ) {
          prevItemTotalPrice = item.itemTotalPrice;
          newState.totalPrice = state.totalPrice + (value * item.price - prevItemTotalPrice);
          return {...item, itemTotalPrice: value * Number(item.price), quantity: value }
        }
        return item
      })
      return newState;
    case CHANGE_TOTAL_PRICE:
      newState = {...state};
      if(action.value === 'ninjPost') {
        newState.totalPrice = state.totalPrice - state.latestAddedPrice;
        newState.latestAddedPrice = 0;
        return newState;
      }
      else {
        newState.totalPrice = state.totalPrice +(Number(action.value) - state.latestAddedPrice);
        newState.latestAddedPrice = action.value;
        return newState;
      }
      newState.totalPrice = state.totalPrice + Number(action.value);
      return newState;
    default:
      return state;
  }
}

export default cartReducer;
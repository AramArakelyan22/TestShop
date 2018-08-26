import { checkTheFields } from "../utils/checkTheFields";
import { validateEmail } from "../utils/checkEmailValidation";

import {
  ADD_USER_NAME,
  ADD_USER_PHONE,
  ADD_USER_EMAIL,
  CHECK_USER_NAME,
  CHECK_USER_EMAIL,
  ADD_USER_ADDRESS,
  CHECK_USER_ADDRESS,
  SELECT_SHIPPING_OPTION
} from '../actions/shippingActions';

const initialState = {
  name: '',
  nameError: false,
  nameErrorMessage: '',
  address: '',
  addressError: false,
  addressErrorMessage: '',
  buttonDisabled: true,
  userPhone: '',
  emailErrorMessage: '',
  emailError: false,
  email: '',
  emialIsValid: false,
  shippingOption: 'ninjPost'
}

export const SHIPPING_REDUCER = 'SHIPPING_REDUCER';

function shippingReducer(state = initialState, action) {
  let newState = null;
  switch(action.type) {
    case ADD_USER_NAME:
      newState = {...state};
      newState.name = action.value
      /*if(action.value.trim().length === 0) {
        newState.nameErrorMessage = 'Name Is Required';
        newState.name = action.value;
      }
      else if(state.name.trim().length < 3) {
        newState.nameErrorMessage = 'Name should be more then 3 chars';
        newState.name = action.value
      }
      else{
        newState.nameErrorMessage = '';
        newState.name = action.value
      }*/
      return newState;
    case CHECK_USER_NAME:
      newState = {...state};
      if(state.name.trim().length === 0) {
        newState.nameErrorMessage = 'Name Is Required';
        newState.nameError = true
      }
      else if(state.name.trim().length < 3) {
        newState.nameErrorMessage = 'Name should be more then 3 chars';
        newState.nameError = true
      }
      else{
        newState.nameErrorMessage = '';
        newState.nameError = false
      }
      return newState;
    case ADD_USER_ADDRESS:
      newState = {...state};
      if(state.address.trim().length === 0) {
        newState.addressErrorMessage = 'Address is required';
      }
      newState.address = action.value;
      return newState;
    case CHECK_USER_ADDRESS:
      newState = {...state};
      if(state.address.trim().length === 0) {
        newState.addressErrorMessage = 'Address is required';
        newState.addressError = true;
      }
      else {
        newState.addressErrorMessage = '';
        newState.addressError = false;
      }
      newState.buttonDisabled = checkTheFields(newState);
      return newState;
    case ADD_USER_PHONE:
      newState = {...state};
      newState.userPhone = action.value;
      return newState;
    case ADD_USER_EMAIL:
      newState = {...state};
      newState.emialIsValid = validateEmail(action.value)
      newState.email = action.value;
      return newState;
    case CHECK_USER_EMAIL:
      newState = {...state};
      const validEmail = validateEmail(state.email);
      if(state.email.trim().length === 0) {
        newState.emailError = true;
        newState.emailErrorMessage = 'Email is required';
      }
      else if(validEmail) {
        newState.emailError = false;
        newState.emailErrorMessage = '';
      }
      else {
        newState.emailError = true;
        newState.emailErrorMessage = 'Email is not valid';
      }
      newState.buttonDisabled = checkTheFields(newState);
      return newState;
    case SELECT_SHIPPING_OPTION:
      newState = {...state};
      newState.shippingOption = action.value;
      return newState;
    default:
      return state;
  }
}

export default shippingReducer;
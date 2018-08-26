export const ADD_USER_NAME = 'ADD_USER_NAME';
export const addUserName = (value) => {
  return {
    type: ADD_USER_NAME,
    value
  }
}

export const CHECK_USER_NAME = 'CHECK_USER_NAME';
export const checkUserName = () => {
  return {
    type: CHECK_USER_NAME,
  }
}

export const ADD_USER_ADDRESS = 'ADD_USER_ADDRESS';
export const addUserAddress = (value) => {
  return {
    type: ADD_USER_ADDRESS,
    value
  }
}

export const CHECK_USER_ADDRESS = 'CHECK_USER_ADDRESS';
export const checkUserAddress = () => {
  return {
    type: CHECK_USER_ADDRESS,
  }
}


export const ADD_USER_PHONE = 'ADD_USER_PHONE';
export const addUserPhone = (value) => {
  return {
    type: ADD_USER_PHONE,
    value
  }
}


export const CHECK_USER_EMAIL = 'CHECK_USER_EMAIL';
export const checkUserEmail = () => {
  return {
    type: CHECK_USER_EMAIL,
  }
}


export const ADD_USER_EMAIL = 'ADD_USER_EMAIL';
export const addUserEmail = (value) => {
  return {
    type: ADD_USER_EMAIL,
    value
  }
}

export const SELECT_SHIPPING_OPTION = 'SELECT_SHIPPING_OPTION';
export const selectShippingOption = (value) => {
  return {
    type: SELECT_SHIPPING_OPTION,
    value
  }
}
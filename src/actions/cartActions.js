export const FETCH_ALL_ITEMS  = 'FETCH_ALL_ITEMS';
export const fetchAllItems = () => {
  return {
    type: FETCH_ALL_ITEMS
  }
}


export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id
  }
};

export const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY';
export const changeItemQuantity = (id, changeType) => {
  return {
    type: CHANGE_ITEM_QUANTITY,
    changeType,
    id
  }
}

export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const handleChange = (id, value) => {
  return {
    type: HANDLE_CHANGE,
    id,
    value,
  }
}

export const CHANGE_TOTAL_PRICE = 'CHANGE_TOTAL_PRICE';
export const changeTotalPrice = (value) => {
  return {
    type: CHANGE_TOTAL_PRICE,
    value
  }
}
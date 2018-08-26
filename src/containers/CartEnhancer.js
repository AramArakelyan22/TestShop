import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { getCartData } from '../utils/getCartData';

import {
  deleteItem,
  handleChange,
  fetchAllItems,
  changeItemQuantity,
} from '../actions/cartActions'



export default compose(
  connect ((state) => {
      return {
        ...getCartData(state)
      }
    },
    (dispatch) => ({
      fetchAllItems() {
        dispatch(fetchAllItems())
      },
      changeItemQuantity(id, changeType){
        dispatch(changeItemQuantity(id, changeType))
      },
      deleteItem(id){
        dispatch(deleteItem(id))
      },
      handleChange(id, value) {
        dispatch(handleChange(id, value))
      }
    })
  ),
  lifecycle({
    componentDidMount(){
      const { fetchAllItems}  = this.props;
      fetchAllItems();
    }
  })
)
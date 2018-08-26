import React, { Fragment }  from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import CartItem from '../CartItem/CartItem';
import CartEnhancer from '../../containers/CartEnhancer';
import ReactLoader from '../utils/Loader';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px'
  },
  cart: {
    maxWidth: '600px',
    width: '100%',

  }
}
export const Cart = (props) => {

  const {
    cartItems,
    totalPrice,
    deleteItem,
    errorMessage,
    handleChange,
    changeItemQuantity,
  } = props;

  return(
    <div style={{textAlign: 'center'}}>
      <Helmet>
        <title>Cart</title>
      </Helmet>

      { errorMessage ? <h1 style={{color: 'red'}}>{errorMessage}</h1>
        : <div>

          {cartItems.length === 0 ?
            <ReactLoader/> :
            <div>
              <h1>Cart</h1>
              <div style={styles.wrapper}>
                <div style={styles.cart}>
                  {cartItems && cartItems.map(item => {
                    return (
                      <CartItem
                        changeItemQuantity={changeItemQuantity}
                        deleteItem={deleteItem}
                        handleChange={handleChange}
                        key={item.id}
                        {...item}
                      />
                    )
                  })}
                </div>
              </div>
              <p style={{textAlign: 'center'}}>{`Total Price ${totalPrice}`}</p>
              <button style={{marginBottom: '20px'}}>
                <Link style={{textDecoration: 'none', color: '#000000'}} to='/shipping'> Buy </Link>
              </button>
            </div>
          }
        </div>
      }
    </div>
  )
}

const EnhancedCart = CartEnhancer(Cart);

export default EnhancedCart;
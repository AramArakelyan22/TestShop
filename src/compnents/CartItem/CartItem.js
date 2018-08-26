import React from 'react';
import SelectItem from '../utils/SelectItem';

const CartItem = (props) => {

  const {
    id,
    img,
    title,
    price,
    quantity,
    deleteItem,
    description,
    handleChange,
    itemTotalPrice,
    changeItemQuantity
  } = props;

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', border: '1px solid #d4d0c5', marginBottom: '20px', padding: '15px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} >
        <div>
          <img src={ img } alt={ img }/>
        </div>
        <div style={{marginLeft: '30px'}}>
          <h2 style={{marginTop: 0}}>{ title }</h2>
          <p>{ description }</p>
        </div>
      </div>
      <div style={{width: '100%', maxWidth: '130px', borderLeft: '1px solid #d4d0c5', paddingLeft: '15px'}}>
        <div>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button
              onClick={() => {deleteItem(id)}}
              style={{backgroundColor: 'transparent', border: '1px solid grey', cursor: 'pointer'}}>x</button>
          </div>
          <div>
            {id % 2 === 0 ?
              <SelectItem id={id} handleChange={handleChange} />

             : <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              maxWidth: '83px',
              width: '100%'
            }}>
              <button
                onClick={() => {
                  changeItemQuantity(id, 'decrease')
                }}
                disabled={quantity === 0} style={{
                backgroundColor: quantity !== 0 ? 'transparent' : 'grey',
                cursor: quantity !== 0 ? 'pointer' : 'none',
                border: '1px solid grey'
              }}> -
              </button>
              <p>{quantity}</p>

              <button
                style={{backgroundColor: 'transparent', border: '1px solid grey', cursor: 'pointer'}}
                onClick={() => {
                  changeItemQuantity(id, 'increase')
                }}
              >+
              </button>

            </div>
            }
            <p>{`One Item Price ${price}`}</p>
            <p>{`Total Price ${itemTotalPrice}`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
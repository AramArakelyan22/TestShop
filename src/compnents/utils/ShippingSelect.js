import React from 'react';
import {handleChange} from "../../actions/cartActions";

const ShippingSelect = (props) => {

  const {
    name,
    onSelect,
    required,
    disabled,
    shippingOption,
  } = props;

  return(
    <div style={{marginBottom: '20px',}}>
      <div style={{width: '100%', maxWidth: '468px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <label style={{fontWeight: '800', fontSize: '20px'}}>{`${name}${required ? '*' : ''}`}</label>
        <div style={{ padding: '8px', width: '100%', maxWidth: '270px', border: '1px solid #d4d0c5', borderRadius: '5px', backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-between'}}>
          <label htmlFor="">{shippingOption}</label>
          <select onChange={(e) => onSelect(e.target.value)} disabled={disabled} style={{ width: '100%', maxWidth: '140px', border: 'none', backgroundColor: 'transparent', textAlign:'right'}}>
            <option value="ninjPost" label='FREE SHIPPING'>FREE SHIPPING</option>
            <option value={15.99} >D7L</option>
            <option value={7.99}>7post</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ShippingSelect
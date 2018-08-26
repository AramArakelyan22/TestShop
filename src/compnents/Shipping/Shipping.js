import React from 'react';
import { Helmet } from "react-helmet";

import Input from '../utils/Input'
import ShippingEnhancer from '../../containers/ShippingEnhancer';
import ShippingSelect from '../utils/ShippingSelect';

const Shipping = (props) => {

  const {
    cartItems,
    nameError,
    emailError,
    totalPrice,
    addUserName,
    addUserEmail,
    addressError,
    addUserPhone,
    checkUserName,
    shippingOption,
    buttonDisabled,
    addUserAddress,
    checkUserEmail,
    checkUserAddress,
    nameErrorMessage,
    emailErrorMessage,
    addressErrorMessage,
    selectShippingOption,
  } = props;

  return (
    <div style={{textAlign: 'center'}}>
      <Helmet>
        <title>Shipping</title>
      </Helmet>
      <h1>Shipping</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{maxWidth: '600px', width: '100%'}}>
          <Input
            onChange={addUserName}
            onBlur={checkUserName}
            error={nameError}
            errorMessage={nameErrorMessage}
            name='Name'
            required
            type='text'
          />
          <Input
            onChange={addUserAddress}
            onBlur={checkUserAddress}
            error={addressError}
            errorMessage={addressErrorMessage}
            name='Address'
            required
            maxLength={9}
            type='text'
          />
          <Input
            onChange={addUserPhone}
            name='Phone'
            type='text'
          />
          <Input
            onChange={addUserEmail}
            onBlur={checkUserEmail}
            error={emailError}
            errorMessage={emailErrorMessage}
            name='Email'
            required
            type='email'
          />
          <ShippingSelect
            name='Shipping options'
            disabled={cartItems.length > 3}
            onSelect={selectShippingOption}
            shippingOption={shippingOption}
          />
            <p>{`Total Price: ${totalPrice.toFixed(2)}`}</p>
          <button disabled={buttonDisabled}>Pay</button>
        </div>
      </div>
    </div>

  )
}

const EnhancedShipping = ShippingEnhancer(Shipping);

export default EnhancedShipping
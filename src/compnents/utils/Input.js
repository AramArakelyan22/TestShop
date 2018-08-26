import React, {Fragment} from 'react';

const Input = (props) => {

  const {
    type,
    name,
    error,
    onBlur,
    required,
    onChange,
    errorMessage,
  } = props;

  return (
    <div style={{marginBottom: '20px',}}>
      <div style={{width: '100%', maxWidth: '450px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <label style={{fontWeight: '800', fontSize: '20px'}}>{`${name}${required ? '*' : ''}`}</label>
        <div style={{ width: '100%', maxWidth: '270px'}}>
          <input
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            style={{padding: '8px', width: '100%', maxWidth: '270px', border: `1px solid ${!error ? "#d4d0c5" : 'red'}`, borderRadius: '5px'}}
            type={type}
          />
          <span style={{color: 'red', visibility: error ? 'visible' : 'hidden',fontSize: '12px', textAlign: 'left', height: '14px', display: 'block' }} >{errorMessage}</span>
        </div>
      </div>
    </div>
  )
}

export default Input
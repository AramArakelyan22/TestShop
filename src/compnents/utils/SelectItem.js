import React from 'react';

const SelectItem = (props) => {
  const {
    id,
    handleChange
  } =props;

  const options = new Array(100);
  let selectOptions = [];
  for(let i = 1, length = options.length; i <= length; i++){
    selectOptions.push(<option key={i} value={i}> {i} </option>)
  }
  return (
    <div>
      <select onChange={(e) => handleChange(id, e.target.value)} >
        {selectOptions}
      </select>
    </div>
  )
}

export default SelectItem
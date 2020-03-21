import React, { useState } from 'react';
import { Select, MenuItem } from '@material-ui/core';

const SelectBox = (props) => {
  let [select_value, changeValue] = useState("");
  // let [data_for, ChangeDataFor] = useState(props.data_for);
  const handleChange = event => {
    changeValue(event.target.value);
    props.onSelectChange && props.onSelectChange(event.target.value);
    props.handleResetSelect && props.handleResetSelect();
  };
  let selectd_value_final = props.reset_select ? "" : select_value;
  // if (data_for !== props.data_for) {
  //   selectd_value_final = "";
  // }
  return (
    <Select
      id="outlined-select-currency"
      select
      value={selectd_value_final}
      className={`select-box text-left ${props.className}`}
      onChange={handleChange}
      helperText=""
      displayEmpty
      variant="outlined"
    >
      <MenuItem value="">
        {props.placeholder}
      </MenuItem>
      {(props.select_options || []).map(option => (
        <MenuItem key={option.name} value={option.name}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  )
}

export default SelectBox;
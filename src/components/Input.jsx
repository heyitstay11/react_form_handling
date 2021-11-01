import { useState } from 'react';
import './input.css'

const Input = (props) => {
    const [focus, setFocus] = useState(false);
    const {label, onChange, errorMessage, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocus(true);
    }

    return (
      <div className="formInput">
          <label>{label}</label>
          <input {...inputProps} 
          onChange={onChange} 
          onBlur={handleFocus}
          onFocus={() => inputProps.name === 'confirm_password' && setFocus(true)} 
          focused={focus.toString()} />
          <span>{errorMessage}</span>
      </div>
    )
  }
  
  export default Input;
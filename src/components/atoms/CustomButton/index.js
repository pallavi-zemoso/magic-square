import React from 'react';
import './index.css';

function CustomButton({value, onClick }){
    return (
        <button
          className = "custom-button"
          onClick={ onClick }
        >
          {value}
        </button>
      );
}
export default CustomButton;
import React from 'react';
import './index.css';

function Square({ value, boxId, onClick }){
  return (
    <button 
      className="square"
      onClick={ () => 
        { 
          onClick(boxId);
        }
      }
    > 
      {value}
    </button>
  );
}
export default Square;

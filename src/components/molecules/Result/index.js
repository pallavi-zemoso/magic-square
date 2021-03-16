import Message from 'components/atoms/Message';
import React from 'react';
import './index.css';

function Result({message}){
    return (
      <div 
        className="result">
        <div className="label">Result: </div>
        <Message message={message} />
      </div>
    );
}
export default Result;

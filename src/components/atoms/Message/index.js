import React from 'react';
import './index.css';

function Message({ message }){
    let element;
    if(message){
        element = <div className="message"> {message}</div>;
    }else{
        element = null;
    }
    return element;
}
export default Message;
import React from 'react';

const styles = {
    title: {
        marginTop: 0,
        padding: 10
    }
}

function Title({value}){
    return (
      <h1 
        style = {styles.title}
        className="title"> 
        {value}
      </h1>
    );
}
export default Title;

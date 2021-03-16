import Title from 'components/atoms/Title';
import React from 'react';

const styles = {
    header: {
        marginTop: 0,
        padding: 0,
        textAlign: "center",
        color: "white",
        background: "DodgerBlue"
    }
}

function Header({title}){
    return (
      <div 
        style = {styles.header}
        className="header"> 
        <Title value={title} />
      </div>
    );
}
export default Header;

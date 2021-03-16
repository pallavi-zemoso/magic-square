import React from 'react';
import Header from '../../molecules/Header';
import Game from '../../organisms/Game';

const styles = {
    header: {
        display: "grid"
    }
}

function MyTemplate(){
    return (
      <div 
        style = {styles.template}
        className="main-container">
          <Header title="MagicSquare Game"/>
          <Game/>
      </div>
    );
}
export default MyTemplate;

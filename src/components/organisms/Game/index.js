import Message from 'components/atoms/Message';
import Box from 'components/molecules/Box';
import Result from 'components/molecules/Result';
import React, { useState } from 'react';
import useDocumentTitle from '../../../useDocumentTitle';
import isMagicSquare from '../../../utils/isMagicSquare';
import CustomButton from '../../atoms/CustomButton';
import './index.css';

export default function Game(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextNumber, setNextNumber] = useState(1);
  const [isNewGame, setIsNewGame] = useState(true);

  let title = "Magic Square";
  if(isNewGame){
    title += " - New Game";
  }
  useDocumentTitle(title);

  function handleClickSquare(index){
    const currentSquares = squares;    
    if (currentSquares[index]) {
      return;
    }
    currentSquares[index] = nextNumber;
    setSquares(currentSquares);
    setNextNumber(nextNumber + 1);
    if(isNewGame){
     setIsNewGame(false);
    }
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setNextNumber(1);
    setIsNewGame(true);
  }

  let status;
  let resultDiv = null;
  let infoDiv = null;
  if(nextNumber <= 9){
    console.log("Game is not over yet");
    status = "Next number: " + nextNumber;
    infoDiv = <Message message={status}/>;
  }else{
    console.log("Game over...validating");
    let result ="";
    const hasWon = isMagicSquare(squares);
    if (hasWon) {
      result = 'Cool!! That is a MagicSqaure!!';
    } else {
      result = "Sorry!! It is not a MagicSqaure";
    }
    resultDiv = <Result message={result}/>;
    infoDiv = <CustomButton value="Start New Game" onClick={resetGame}></CustomButton>
  }
  
  return (
    <div className="game">
      {infoDiv}
      <Box squares={squares} onClick={handleClickSquare} />
      {resultDiv}
    </div>
  );
}


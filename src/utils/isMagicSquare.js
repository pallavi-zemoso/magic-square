export default function isMagicSquare(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const expectedSum = 15;
  for( let line of lines){
    let sum = 0;
    for(let element of line ){
      if( element == null ){
        return false;
      }
      sum += squares[element];
    }
    console.log("Sum of " + line + "is " + sum);
    if( sum !== expectedSum ){
      return false;
    }
  }
  return true;
}
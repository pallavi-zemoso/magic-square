import Square from 'components/atoms/Square';
import React from 'react';
import './index.css';

function Box({ squares, onClick}){
    let boxElements =[];
    const rowLength = 3;
    const rowCount = 3;
    let startIndex = 0;

    for(let rowCounter=0; rowCounter < rowCount; rowCounter++){

        let dataArray = squares.slice(startIndex,startIndex + rowLength);
        let rowElements =[];
        let i=0;
        for( let data of dataArray){
            let boxId = (rowCounter * 3) + i;

            rowElements.push(<Square key={boxId} boxId={boxId} value={data} onClick={ onClick} />);
            i++;
        }
        boxElements.push(<div key={rowCounter} className="box-row">{rowElements}</div>);
        startIndex += rowLength;
    }
    return (
        <div className="box">
          {boxElements}
        </div>
    );
}
export default Box;

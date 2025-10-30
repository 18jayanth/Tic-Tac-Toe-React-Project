import React from 'react'
const GameBoard = () => {
    const initalGameBoard=[
        [null,null,null],
        [null,null,null],
        [null,null,null]
]
return(
    <ol id='game-board'>
        {initalGameBoard.map((row,rowIndex)=><li key={rowIndex}>
        <ol>
    {row.map((playerSymbol,colIndex)=><li key={colIndex}><button>{playerSymbol}</button></li>)}
        </ol>
        </li>)}
    </ol>
)

}

export default GameBoard

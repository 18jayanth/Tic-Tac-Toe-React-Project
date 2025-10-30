import React, { useState } from 'react'
const initalGameBoard=[
        [null,null,null],
        [null,null,null],
        [null,null,null]
]
const GameBoard = ({onSelectsquare,activeplayersymbol}) => {
const [gameBoard,setgameBoard]=useState(initalGameBoard)
function handleSelectSquare(rowIndex,colIndex)
{

    setgameBoard((gameBoard)=>{
        const updateBoard=[...gameBoard.map(innerArray=>[...innerArray])];
        updateBoard[rowIndex][colIndex]=activeplayersymbol;
        return updateBoard;
    })
    onSelectsquare()
}    
return(
    <ol id='game-board'>
        {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
        <ol>
    {row.map((playerSymbol,colIndex)=><li key={colIndex}><button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>)}
        </ol>
        </li>)}
    </ol>
)

}

export default GameBoard

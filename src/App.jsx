import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations"
const initalGameBoard=[
        [null,null,null],
        [null,null,null],
        [null,null,null]
]
function dervivedActiveplayer(gameturns)
{
    let currentplayer='X';

    if(gameturns.length>0 && gameturns[0].player==='X'){
        currentplayer='O'
    }
    return currentplayer;

}

function App() {

//const [activeplayer,setactiveplayer]=useState('X')
const [gameturns,setgameturns]=useState([])

 const activePlayer=dervivedActiveplayer(gameturns)
 let winner;
 let gameBoard=initalGameBoard;
 
 
for(const turn of gameturns)
{
    const {square,player}=turn;
    const {row,col}=square;
    gameBoard[row][col]=player;
}
for(const combination of WINNING_COMBINATIONS)
 {
    const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column]
    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol)
    {
        winner=firstSquareSymbol;
    }
 }
function handleSelectsquare(rowIndex,colIndex){
    //setactiveplayer((currentplayer)=>(currentplayer==='X'?'O':'X'));
    
    setgameturns((previousturns)=>{
    let currentplayer=dervivedActiveplayer(previousturns);

    // if(previousturns.length>0 && previousturns[0].player==='X'){
    //     currentplayer='O'
    // }

        const updatedturns=[
        {square:{row:rowIndex,col:colIndex},player:currentplayer},...previousturns]
        return updatedturns;
    })
}

return(
    <main>
    <div id='game-container'>
        <ol id='players' className="highlight-player">
        <Player initialname='Player-1' symbol='X' isActive={activePlayer==='X'}/>
        <Player initialname='Player-2' symbol='O'  isActive={activePlayer==='O'}/>
         </ol>
         {winner && <p>You Won {winner}</p>}
          <GameBoard onSelectsquare={handleSelectsquare} board={gameBoard}/>
    </div>
    <Log turns={gameturns}/>
    </main>
)
  
}

export default App

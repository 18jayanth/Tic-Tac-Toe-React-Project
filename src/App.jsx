import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"
const PLAYERS={
    X:'Player 1',
    O:'Player 2'
}
const INITIAL_GAME_BOARD=[
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
function deriveWinner(gameBoard,players)
{
    let winner;
    for(const combination of WINNING_COMBINATIONS)
 {
    const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column]
    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol)
    {
        winner=players[firstSquareSymbol];
    }
 }
 return winner;

}
function deriveGameboard(gameturns)
{
let gameBoard=[...INITIAL_GAME_BOARD.map((array)=>[...array])]
 
 
for(const turn of gameturns)
{
    const {square,player}=turn;
    const {row,col}=square;
    gameBoard[row][col]=player;
}
return gameBoard;
}

function App() {
//this state is to send to game over component when 
//game is over to know who won
//it should set only after we saved the name not when we edit
const[players,setplayers]=useState(PLAYERS)
//const [activeplayer,setactiveplayer]=useState('X')
const [gameturns,setgameturns]=useState([])

 const activePlayer=dervivedActiveplayer(gameturns)
 
 //we need to keep copy of gameboard we are changing original game board
 //so we cant restart the same from starting
 
const gameBoard=deriveGameboard(gameturns);
const winner=deriveWinner(gameBoard,players);
 const hasDrawn=gameturns.length===9 && !winner;
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
function handleRestart()
{
    setgameturns([])
}
//it is wrong to lift the playernamem  state from player to APP
//because the playername will render at every key stroke from input tag
function handlePlayerNameChange(symbol,newname)
{
    setplayers(prevplayers=>{
        return {
            ...prevplayers,
            [symbol]:newname
        };
    });
}
return(
    <main>
    <div id='game-container'>
        <ol id='players' className="highlight-player">
        <Player initialname={PLAYERS.X} symbol='X' isActive={activePlayer==='X'} onChangename={handlePlayerNameChange}/>
        <Player initialname={PLAYERS.O} symbol='O'  isActive={activePlayer==='O'} onChangename={handlePlayerNameChange}/>
         </ol>
         {(winner||hasDrawn) && <GameOver winner={winner} onRestart={handleRestart}/>}
          <GameBoard onSelectsquare={handleSelectsquare} board={gameBoard}/>
    </div>
    <Log turns={gameturns}/>
    </main>
)
  
}

export default App

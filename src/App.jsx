import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { useState } from "react"
function App() {

const [activeplayer,setactiveplayer]=useState('X')
const [gameturns,setgameturns]=useState([])

function handleSelectsquare(rowIndex,colIndex){
    setactiveplayer((currentplayer)=>(currentplayer==='X'?'O':'X'));
    
    setgameturns((previousturns)=>{
    let currentplayer='X';

    if(previousturns.length>0 && previousturns[0].player==='X'){
        currentplayer='O'
    }

        const updatedturns=[
        {square:{row:rowIndex,col:colIndex},player:currentplayer},...previousturns]
        return updatedturns;
    })
}

return(
    <main>
    <div id='game-container'>
        <ol id='players' className="highlight-player">
        <Player initialname='Player-1' symbol='X' isActive={activeplayer==='X'}/>
        <Player initialname='Player-2' symbol='O'  isActive={activeplayer==='O'}/>
         </ol>
          <GameBoard onSelectsquare={handleSelectsquare} turns={gameturns}/>
    </div>
    <Log/>
    </main>
)
  
}

export default App

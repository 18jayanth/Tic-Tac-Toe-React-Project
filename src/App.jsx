import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
function App() {
const [activeplayer,setactiveplayer]=useState('X')
function handleSelectsquare(){
    setactiveplayer((currentplayer)=>currentplayer==='X'?'O':'X');
}
return(
    <main>
    <div id='game-container'>
        <ol id='players' className="highlight-player">
        <Player initialname='Player-1' symbol='X' isActive={activeplayer==='X'}/>
        <Player initialname='Player-2' symbol='O'  isActive={activeplayer==='O'}/>
         </ol>
          <GameBoard onSelectsquare={handleSelectsquare} activeplayersymbol={activeplayer}/>
    </div>
    Log
    </main>
)
  

  
}

export default App

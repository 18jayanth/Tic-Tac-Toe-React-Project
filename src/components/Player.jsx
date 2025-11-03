import react,{ useState } from "react"

const Player = ({initialname,symbol,isActive,onChangename}) => {
const[isEditing,setisEditing]=useState(false)
const[playername,setplayername]=useState(initialname)
function handleClick()
{
setisEditing((editing)=>!editing)
if(isEditing){
onChangename(symbol,playername)
}
    
}
function handleChange(event)
{
  
  setplayername(event.target.value)
}
let editabaleplayername=<span className="player-name">{playername}</span>;
//let buttonCaption='Edit'
if(isEditing)
    {
    editabaleplayername=<input  required type='text' value={playername} onChange={handleChange}/>
    //buttonCaption="Save"
    }
  return (
    <>
       <li className={isActive ?'active':undefined}>
            <span className="player">
            {editabaleplayername}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing?'Save':'Edit'}</button>
        </li>
    </>
  )
}

export default Player

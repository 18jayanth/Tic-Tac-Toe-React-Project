import { React,useState } from "react"

const Player = ({initialname,symbol}) => {
const[isEditing,setisEditing]=useState(false)
const[playername,setplayername]=useState(initialname)
function handleClick()
{
setisEditing((editing)=>!editing)
    
}
function handleChange(event)
{
  console.log(event)
  console.log(event.target)
  console.log(event.target.value)
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
       <li>
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

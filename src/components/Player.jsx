import { React,useState } from "react"

const Player = ({title,symbol}) => {
const[isEditing,setisEditing]=useState(false)
function handleClick()
{
setisEditing(true)
    
}
let content=<span className="player-name">{title}</span>;
if(isEditing)
    {
    content=<input placeholder="Edit  Name" required type='text'/>
    }
  return (
    <>
       <li>
            <span className="player">
            {content}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>Edit</button>
        </li>
    </>
  )
}

export default Player

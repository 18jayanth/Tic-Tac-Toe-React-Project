import { React,useState } from "react"

const Player = ({title,symbol}) => {
const[isEditing,setisEditing]=useState(false)
function handleClick()
{
setisEditing((editing)=>!editing)
    
}
let content=<span className="player-name">{title}</span>;
//let buttonCaption='Edit'
if(isEditing)
    {
    content=<input  required type='text' value={title}/>
    //buttonCaption="Save"
    }
  return (
    <>
       <li>
            <span className="player">
            {content}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing?'Save':'Edit'}</button>
        </li>
    </>
  )
}

export default Player

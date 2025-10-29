import React from 'react'

const Player = ({title,symbol}) => {
  return (
    <>
       <li>
            <span className="player">
            <span className="player-name">{title}</span>
            <span className="player-symbol">{symbol}</span>
            </span>
            <button>Edit</button>
        </li>
    </>
  )
}

export default Player

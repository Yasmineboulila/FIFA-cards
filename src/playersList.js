import React from 'react'
import Players from "./players";
import Player from './player';
export default function playersList({players}) {
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
      {players.map((el)=><Players key={el.name} player={el}/>)}
    </div>
  )
}

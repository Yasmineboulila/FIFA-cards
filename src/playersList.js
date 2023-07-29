import React from 'react'
import players from "./players";

export default function playersList({players}) {
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
      {players.map((el)=><players key={el.id} player={el}/>)}
    </div>
  )
}

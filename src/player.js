import React from 'react'
import Card from 'react-bootstrap/Card'

export default function player({player}) {
  return (
    <Card style={{ width: '350px' ,backgroundColor:'gray', margin:'50px 70px' }}>
    <Card.Img variant="top" src={player.image} style={{width:'350px', height:'450px'}} />
    <Card.Body style={{fontFamily: 'Georgia'}}>
      <Card.Title style={{fontSize:'x-large'}}>{player.name}</Card.Title>
      <Card.Text>
       {player.team}
       </Card.Text>
       <Card.Text>
       {player.jerseyNumber}
       </Card.Text>
       <Card.Text>
       {player.nationality}
       </Card.Text>
       <Card.Text>
       {player.age} years old
       </Card.Text>
    </Card.Body>
  </Card>
  )
}

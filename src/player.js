import React from 'react'
import Card from 'react-bootstrap/Card'

export default function player({player}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={player.image} />
    <Card.Body>
      <Card.Title>{player.name}</Card.Title>
      <Card.Text>
       {player.team}
       {player.nationality}
       {player.jerseyNumber}
       {player.age}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

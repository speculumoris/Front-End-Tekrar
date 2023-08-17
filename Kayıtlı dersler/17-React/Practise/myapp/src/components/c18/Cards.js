import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Cards = (props) => {
    const {createdAt,productName,avatar,price,id}=props
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={`${avatar}?${id}`} />
    <Card.Body>
      <Card.Title>{id}</Card.Title>
      <Card.Title>{productName}</Card.Title>
      <Card.Text>
       {createdAt}
      </Card.Text>
      <Card.Subtitle>{price} </Card.Subtitle>
     
    </Card.Body>
  </Card>
  )
}

export default Cards
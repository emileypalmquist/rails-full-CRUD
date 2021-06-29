import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const PlantCard = ({plant: {id, name, image, content}, plant, handleEdit, handleDelete}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {content}
      </Card.Text>
      <Button variant="primary" onClick={() => handleEdit(plant)}>Edit</Button>
      <Button variant="danger" onClick={() => handleDelete(id)}>X</Button>
    </Card.Body>
  </Card>
  )
}

export default PlantCard;
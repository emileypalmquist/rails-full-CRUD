import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PlantForm = ({handleSubmit, selectedPlant}) => {
  const id = selectedPlant && selectedPlant.id ? selectedPlant.id : undefined
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    if (selectedPlant) {
      setName(selectedPlant.name)
      setImage(selectedPlant.image)
      setContent(selectedPlant.content)
    }
  }, [selectedPlant])

  const handleFormSubmit = (e) => {
    e.preventDefault()

    handleSubmit({name, image, content}, id)
    
    setName('')
    setImage('')
    setContent('')
  }
  return (
      <Form onSubmit={(e) => handleFormSubmit(e) }>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control type='text' name='image' value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Content</Form.Label>
          <Form.Control type='text' name='content' value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  )
}

export default PlantForm;
import React from 'react'
import PlantCard from '../components/PlantCard'

function CardsContainer({plants, handleEdit, handleDelete}) {

  const renderPlants = () => {
    return plants.map(plant => <PlantCard key={plant.id} plant={plant} handleEdit={handleEdit} handleDelete={handleDelete}/>)
  }

  return (
    <section className='card-container'>
      {renderPlants()}
    </section>
  )
}

export default CardsContainer;
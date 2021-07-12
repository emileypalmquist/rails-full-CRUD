import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {createPlantRequest, updatePlantRequest, deletePlantRequest, getPlants} from './services/api'
import PlantForm from './components/PlantForm'
import CardsContainer from './containers/CardsContainer';

function App() {
  const [plants, setPlants] = useState([])
  const [selectedPlant, setSelectedPlant] = useState(null)

  useEffect(() => {
   getPlants()
      .then(plants => setPlants(plants))
  }, [])

  const createPlant = (plant) => {
    createPlantRequest(plant)
      .then(plant => {
        if (!plant.message) {
          setPlants([plant, ...plants])
        } else {
          // handle error
        }
      })
  }

  const updatePlant = (plant, id) => {
   updatePlantRequest(plant, id)
      .then(plant => {
        let newPlants = plants.map(p => p.id === plant.id ? plant : p )
        setPlants(newPlants)
      })
    setSelectedPlant(null)
  }

  const deletePlant = (id) => {
    deletePlantRequest(id)
      .then(data => {
        let newPlants = plants.filter(p => p.id !== id)
        setPlants(newPlants)
      })
  }

  const handleEditClick = (plant) => {
    setSelectedPlant(plant)
  }

  return (
    <div className="App">
      <PlantForm 
        handleSubmit={selectedPlant ? updatePlant : createPlant} 
        selectedPlant={selectedPlant}
      />
      <CardsContainer 
        plants={plants} 
        handleEdit={handleEditClick} 
        handleDelete={deletePlant}
      />
    </div>
  );
}

export default App;

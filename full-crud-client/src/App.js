import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PlantForm from './components/PlantForm'
import CardsContainer from './containers/CardsContainer';

const plantsData = [
  {id: 1, name: 'fiddle', image: 'https://www.treehugger.com/thmb/oLxFlcuiLYtUlSaYn40uM20oqnc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__12__smartplant-e1a93475fff84db0a699a2ed19054234.jpg', content: 'some content'},
  {id: 2, name: 'fiddle', image: 'https://www.treehugger.com/thmb/oLxFlcuiLYtUlSaYn40uM20oqnc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__12__smartplant-e1a93475fff84db0a699a2ed19054234.jpg', content: 'some content'},
  {id: 3, name: 'fiddle', image: 'https://www.treehugger.com/thmb/oLxFlcuiLYtUlSaYn40uM20oqnc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__12__smartplant-e1a93475fff84db0a699a2ed19054234.jpg', content: 'some content'}
]

function App() {
  const [plants, setPlants] = useState(plantsData)
  const [selectedPlant, setSelectedPlant] = useState(null)

  useEffect(() => {
    console.log('component mounted')
  }, [])

  const createPlant = (plant) => {
    console.log('create plant')
  }

  const updatePlant = (plant, id) => {
    console.log('update plant', id)
    setSelectedPlant(null)
  }

  const handleDelete = (id) => {
    console.log('handle Delete', id)
  }

  const handleEditClick = (plant) => {
    setSelectedPlant(plant)
  }

  return (
    <div className="App">
      <PlantForm handleSubmit={selectedPlant ? updatePlant : createPlant} selectedPlant={selectedPlant}/>
      <CardsContainer plants={plants} handleEdit={handleEditClick} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;

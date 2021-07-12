const BASE_URL = 'http://localhost:3000/'

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

export const createPlantRequest = (plant) => {
  return fetch(BASE_URL + 'plants', {
    method: 'POST',
    headers,
    body: JSON.stringify(plant)
  })
    .then(resp => resp.json())
    .catch(console.log)
}

export const updatePlantRequest = (plant, id) => {
  return  fetch(BASE_URL + `plants/${id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(plant)
  })
    .then(resp => resp.json())
    .catch(console.log)
}

export const deletePlantRequest = (id) => {
  return fetch(BASE_URL + `plants/${id}`, {
    method: 'DELETE'
  })
    .then(resp => resp.json())
    .catch(console.log)
}

export const getPlants = () => {
  return fetch(BASE_URL + 'plants')
  .then(resp => resp.json())
  .catch(console.log)
}
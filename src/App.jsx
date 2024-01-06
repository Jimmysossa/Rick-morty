import useFetch from './hooks/useFetch'
import './App.css'
import { useEffect } from 'react'
import getRandomNumber from './utils/getRandomNumber';
import LocationCard from './components/LocationCard';

function App() {
  const locationId = getRandomNumber(126)
  const url = `https://rickandmortyapi.com/api/location/${locationId}`
  const [ location, getLocation, hasError ] = useFetch(url)
  
  useEffect(() => {
    getLocation()
  }, [])
  console.log(location);
  return (
    <div>
      <h1>Rick and Morty</h1>
      <LocationCard
        location={location}
      />
    </div>
  )
}

export default App

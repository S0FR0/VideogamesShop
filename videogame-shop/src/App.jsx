import { useState, useEffect } from 'react'
import NavBar from './navbar.jsx'
import Card from './card.jsx'

function App() {

  const [ fetchedData, setFetchedData ] = useState([]);
  const [ showData, setShowData ] = useState(false);
  const [ cart, setCart ] = useState({
    title:[],
    amount:[],
    price:[],
  })

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=d7707bf8f376411fbb59f9d5446d82b6&dates=2019-09-01,2019-09-30&platforms=18,1,7', {mode: 'cors'})
    .then((res) => res.json())
    .then((res) => setFetchedData(res.results))
    .catch((err) => console.error(err))
  }, [])

  setTimeout(() => {
    setShowData(true)
  }, 1000)

  return (

    showData === false ? (
      <>
      <NavBar />
      <div className="main-container">
        <h2>Loading...</h2>
      </div>

    </>
    ):(
      <>
      <NavBar
        shopCart = {cart}
      />
      <div className="main-container">
        {fetchedData.map((item) =>
          <Card
            key = {item.id}
            id = {item.id}
            backgroundImg = {item.background_image}
            genra = {item.genres[0].name}
            name = {item.name}
            releaseDate = {item.released}
            cart = {cart}
            setCart = {setCart}
          />
        )}
      </div>

    </>
    )
  )
}

export default App

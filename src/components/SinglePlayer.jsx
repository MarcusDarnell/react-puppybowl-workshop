import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSinglePlayer } from '../API'

export default function SinglePlayer() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [player, setPlayer] = useState(null)
   
    useEffect(() => {
      async function updatePlayer() {
      try{ 
        const player = await getSinglePlayer(id)
        setPlayer(player)
      }catch(e){
      console.error(e)
      }
    }  
    updatePlayer()
    },[])

    if (!player) {
        return <div>Loading {id}. . . </div>
    }

    return <article key={player.id}>
    <h2>
      <img src={player.imageUrl} />
      {player.name}
    </h2>
    <h3>{player.imageUrl}</h3>
    </article> 
    
}
import { getAllPlayers } from '../API/index'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AllPlayers() {
    const navigate = useNavigate()
    const [players, setPlayers] = useState([])
    const [search, setSearch] = useState('')
    
    getAllPlayers();

    useEffect(() => {
        async function updatePlayers() {
          try{ 
            const players = await getAllPlayers()
            console.log('players', players)  
            setPlayers(players)
        }catch (e) {
    console.error(e)
  }
}
     updatePlayers()
    },[])
    function searchHandler(e) {
        console.log('e.target.value', e.target.value)
        setSearch(e.target.value)
    }

    

    return  <main>
        <input name="search" value={search} onChange={searchHandler} />
        {
       filteredPlayers.map((player) => {
            return <article key={player.id}>
          <h2 onClick={() => navigate(`/players/${player.id}`)}>
            <img src={player.imageUrl} />
            {player.name}
          </h2>
          </article>
        })
        }</main>
    }

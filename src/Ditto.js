import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';


function Ditto() {
    const [pokemon, setPokemon] = useState(null);
    console.log("state in card" ,pokemon)
    useEffect(() => {
        console.log('fetching on mount')
        async function fetchData() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
                console.log(response.data)
                setPokemon(response.data);

            } catch (e) {
                console.error(e)
            }
        }
        fetchData()
    }, [])




    return (
        <div>

            { pokemon ? <div>
                <h1>Pokemon</h1>
                <img src={pokemon.sprites.front_default} alt=""/>
            </div> : <h3>loading</h3> }

        </div>
    );
}

export default Ditto;

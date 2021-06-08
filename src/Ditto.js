import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';


function Ditto() {
    const [pokemon, setPokemon] = useState(null);

    async function fetchData() {
        try {
            const result = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
            console.log(result.data)
        } catch (e) {
            console.error(e)
        }



    }
fetchData()

    return (
        <div>
            <button onClick={fetchData}>FetchPokemon</button>
            <div>
                <p>Hier komt Pokemon

                </p>
            </div>

        </div>
    );
}

export default Ditto;

import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';


function Ditto() {
    useEffect(() => {
        async function fetchData() {
            try{
                const result = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
                console.log(result.data)
            } catch(e) {
                console.error(e)
            }
        }
    }, [])

    const [fetchPokemon, setFetchPokemon] = useState()

    return (
        <div>


        </div>
    );
}

export default Ditto;

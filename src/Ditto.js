import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';


function Ditto() {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        console.log('fetching on mount')
        async function fetchData() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
                console.log(response.data)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData()
    }, [])




    return (
        <div>

            <div>
                <p>Hier komt Pokemon

                </p>
            </div>

        </div>
    );
}

export default Ditto;

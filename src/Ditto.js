import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';


function Ditto(props) {
    const [pokemon, setPokemon] = useState();

    console.log("state in card" ,pokemon)


    useEffect(() => {
        console.log('fetching on mount')
        async function fetchData() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.nameOfPokemon}`)
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
                <h1>{pokemon?.name}</h1>
                <div>{pokemon.abilities.map((ability) => {
                    return <p>{ability.ability.name}</p>
                })}</div>
                <img src={pokemon.sprites.front_default} alt=""/>
            </div> : <h3>loading</h3> }



        </div>
    );
}

export default Ditto;

// return (
//         <div>
//             {pokemon ? (
//             <div>
//                 <h1>{pokemon.name}</h1>
//                 <img src={pokemon.sprites.front_default}/>
//                 <div>{pokemon.abilities.map((ability) => {
//                     return(<p>{ability.ability.name}</p>);
//                 })}</div>
//             </div>
//                  ) : (
//                 <h3>Loading</h3>
//                 )}
//         </div>
//     );
// }
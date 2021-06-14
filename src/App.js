import {useState, useEffect} from 'react';
import './App.css';
import Ditto from './Ditto'
import axios from "axios";


function App() {
    const [pokenames, setPokenames] = useState(null);
    const [limit, setLimit] = useState(20);



    useEffect(() => {
        console.log("fetchnames")

        async  function fetchNames(){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
            console.log(response.data.results)

            setPokenames(response.data.results);

        }

        fetchNames()




    }, [])


    console.log(pokenames)

  return (

    <div>

        {pokenames ? <div>
            {/*<Ditto nameOfPokemon={"jigglypuff"}/>*/}
            {/*<Ditto nameOfPokemon={"diglett"}/>*/}
            {/*<Ditto nameOfPokemon={"bulbasaur"}/>*/}
            {/*<Ditto nameOfPokemon={"pikachu"}/>*/}
            {/*<Ditto nameOfPokemon={"scyther"}/>*/}
            {pokenames.map(pokemon => {
                return <Ditto nameOfPokemon={pokemon.name}/>
            })}
        </div> : <h3>Loading Pokenames for you my friend</h3> }
    </div>
  );
}

export default App;

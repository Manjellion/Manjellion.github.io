import { useState } from 'react'
import Capitalized from '../../Service/capsitalized';

function Pokemon() {

  const [ pokemonName, setPokemonName ] = useState('')
  const [ pokemonImg, setPokemonImg ] = useState('');

  const num = Math.floor(Math.random() * 100)

      const getPokemon = async () => {
        try {
          await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
          .then((response) => response.json())
          .then((data) => {
            const dataImg = data.sprites.front_default;
            const dataName = data.name
            setPokemonImg(dataImg);
            setPokemonName(dataName);
          });
        } catch(err) {
          console.error('Error: ', err);
        }
      }      

      const capsPokemonName = Capitalized(pokemonName);

  return (
    <div className='pokemon-img-container'>
      <h1>Which Pokemon you got today?</h1>
        <button onClick={() => getPokemon()}>Click Me</button>
        <div className='prokemon-img-section'>
          <img src={pokemonImg} />
          <p>{capsPokemonName}</p>
        </div>
    </div>
  )
}

export default Pokemon
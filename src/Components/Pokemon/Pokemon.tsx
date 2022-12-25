import React, { useState } from 'react'

function Pokemon() {

  const [ pokemonName, setPokemonName ] = useState('')
  const [ pokemonImg, setPokemonImg ] = useState('');

  const num = Math.floor(Math.random() * 100)

      const getPokemon = async () => {
        try {
          fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.sprites.front_default)
            console.log(num);
            const dataImg = data.sprites.front_default;
            setPokemonImg(dataImg);
          });
        } catch(err) {
          console.error('Error: ', err);
        }
      }      

  return (
    <div className='pokemon-img-section'>
        <button onClick={() => getPokemon()}>Click Me</button>
        <img src={pokemonImg} />
    </div>
  )
}

export default Pokemon
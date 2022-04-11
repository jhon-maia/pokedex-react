import React from 'react'
import styled from 'styled-components'



const CardPokemon=({pokemonId,pokemonType,pokemonName,pokemonImage})=>{
  console.log({pokemonImage})

	const CardPokemon= styled.div
	`
	width:90%;
	height:30vh;
	margin:20px;
  display:flex;
  flex-direction: column;

  img{
    height:30vh;
    width:70%;

  }
     
`

  
  return(
	  	<CardPokemon className={pokemonType}>
	  	  <h1>{pokemonName}#{pokemonId}</h1>
        <img src={pokemonImage} />
	  	</CardPokemon>
     

  	);
}

export default CardPokemon; 
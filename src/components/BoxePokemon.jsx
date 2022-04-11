import React from 'react'
import styled from 'styled-components'
import CardPokemon from './CardPokemon.jsx'
import PokeInfo from './PokeInfo.jsx'

 

 const BoxePokemon=({pokemon})=>{

   const BoxePokemon=styled.section
   `
   background-color:#121212;
   width:50vw;
   height:100vh;
   display:grid;
   grid-template-columns:repeat(3,1fr);
   position:relative;
   padding:10%;
   overflow-y:scroll


   `

   return(
   
      <BoxePokemon>
         {pokemon.map(pokemon=> <CardPokemon pokemonName={pokemon.name} pokemonType={pokemon.types[0].type.name} pokemonImage={pokemon.sprites.front_default} pokemonId={pokemon.id}/> )}
      </BoxePokemon>
   	);

 }






export default BoxePokemon;
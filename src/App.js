import React,{useState,useEffect} from 'react';
import BoxePokemon from './components/BoxePokemon.jsx'
import axios from 'axios';
 






function App() {
     


 const[pokemon,setPokemon]=useState([])
  

 const getPokemon=async ()=>{
 let pokemonList=[]
 for (let i = 1; i <=151; i++){
 await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(pokemon=>pokemonList.push(pokemon.data))
 }
console.log(pokemonList)
setPokemon(pokemonList)

}

useEffect(()=>{
getPokemon()

},[])



  return(
   <BoxePokemon pokemon={pokemon}/>
    );
}

export default App;

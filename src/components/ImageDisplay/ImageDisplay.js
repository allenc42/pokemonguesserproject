import { useEffect, useContext } from "react";
import { PokemonContext } from "../../context/pokemonContext";
import "./ImageDisplay.css"

const ImageDisplay = () => {


    const {setPokemonName, pokemonGuess, setPokemon, pokemon} = useContext(PokemonContext);
    const randomPokemon = Math.floor(Math.random() * 1025 ) + 1 //Ensure random pokemon id exist
    const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setPokemon(res.sprites.front_default); //Set Sprite of pokemon
            setPokemonName(res.name); //set Name of pokemon
        })
    }, [pokemonGuess])
    
    return (
        <div>
            <img className="image" src={pokemon}></img>
        </div>
    )
}

export default ImageDisplay;
import { createContext, useState} from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({children}) => {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonGuess, setPokemonGuess] = useState(0); //Player's Correct guess
    const [livesCount, setLivesCount] = useState(3);
    const [pokemon, setPokemon] = useState(""); //Image of pokemon
    const [pokemonInfo, setPokemonInfo] = useState([]); //Stores current guess run
    return (
        <PokemonContext.Provider
        value={{
            pokemonName,
            pokemonGuess,
            livesCount,
            pokemon,
            pokemonInfo,
            setPokemonName,
            setPokemonGuess,
            setLivesCount,
            setPokemon,
            setPokemonInfo
        }}
        >
        {children}
        </PokemonContext.Provider>
    )
}


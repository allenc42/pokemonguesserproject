import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonContext";
import "./Lives.css"


const Lives = () => {

    const {livesCount, pokemonGuess} = useContext(PokemonContext);
    
    return (
        <div>
            <p className="current">Current Life Count: {livesCount}</p>
            <p className="current">Correct: {pokemonGuess}</p>

        </div>
    )
}

export default Lives;
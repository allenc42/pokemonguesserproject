import { useState, useContext } from "react";
import { PokemonContext } from "../../context/pokemonContext";
import { useNavigate } from "react-router-dom";
import "./AnswerBox.css"


const AnswerBox = () => {
    
    const { pokemon, pokemonName, setPokemonGuess, pokemonGuess, livesCount, setLivesCount, pokemonInfo, setPokemonInfo} = useContext(PokemonContext);
    const [currentPokemonGuess, setCurrentPokemonGuess] = useState("");
    const navigate = useNavigate();

    const handleInput = (e) => {
        setCurrentPokemonGuess(e.target.value.toLowerCase());
    }

    const handleGuess = () => {
        if(currentPokemonGuess === pokemonName) { //Correct Guess
            setPokemonGuess(pokemonGuess + 1);
            const guessInfo = {
                status: "correct",
                name: pokemonName,
                sprite: pokemon,
            }
            setPokemonInfo([...pokemonInfo, guessInfo])
        } else {
            setLivesCount(livesCount - 1); //Wrong Guess
            const guessInfo = {
                status: "wrong",
                name: pokemonName,
                sprite: pokemon,
                guess: currentPokemonGuess

            }
            setPokemonInfo([...pokemonInfo, guessInfo])

            if(livesCount === 1) {
                navigate("/gameover")
            }
        }
    }

    return (
        <div className="bgColor">
            <input className="guessBox" type="text" placeholder=" Enter Guess Here" onChange={handleInput}/>
            <button className="guessButton" onClick={handleGuess}> Guess ! </button>
        </div>
    )
}

export default AnswerBox;
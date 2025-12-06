
import "./GameOver.css"
import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../context/pokemonContext";

const GameOver = () => {
    const { pokemonGuess, setLivesCount, setPokemonGuess, pokemonInfo, setPokemonInfo} = useContext(PokemonContext);

    const navigate = useNavigate();
    const [currentBest, setCurrentBest] = useState(Number(localStorage.getItem("best"))); 


    if(currentBest < pokemonGuess) {
        localStorage.setItem("best", pokemonGuess);
        setCurrentBest(localStorage.getItem("best"));
    }

    const handleButtonClick = () => {
        setLivesCount(3);
        setPokemonGuess(0); //Set current guess count to 0
        setPokemonInfo([]);
        navigate("/");      //Back to starting page
    }

return (
    <div>
        <p className="center">Best Correct: {currentBest}</p>
        <p className="center">Correct this run: {pokemonGuess}</p>
        <div className="container">
        {pokemonInfo.map((x) => (
            <div className="box">
            <p>{x.status === "wrong" ? `Guessed: ${x.guess}` : "Guessed Correctly!"}</p>
            <p>{x.status === "wrong" ? `Correct Name: ${x.name}` : x.name }</p>
            <img src={x.sprite}></img>
            </div>

        ))}
        </div>
        <button className="guessButton" onClick={handleButtonClick}> Play Again </button>
    </div>
)
}

export default GameOver;

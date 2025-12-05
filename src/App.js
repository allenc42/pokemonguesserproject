import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import { PokemonProvider } from './context/pokemonContext';
import AnswerBox from './components/AnswerBox/AnswerBox';
import Lives from './components/Lives/Lives';
import GameOver from './components/GameOver/GameOver';
import './App.css';

function App() {
  return (
    <div>
      <PokemonProvider>
      <Header />
      <Router>
          <Routes>
            <Route path="/" element={<><Lives /> <ImageDisplay /> <AnswerBox /></>} />
            <Route path="/gameover" element={<GameOver/>} />
          </Routes>
      </Router>
      </PokemonProvider>
    </div>

  );
}

export default App;

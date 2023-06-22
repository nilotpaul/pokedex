import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  const [pokeIndex, setPokeIndex] = useState(1);

  const pokeRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomPokemon = () => {
    setPokeIndex(pokeRandom(1, 1000));
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route
            exact
            path="/"
            element={
              <Main
                pokeIndex={pokeIndex}
                setPokeIndex={setPokeIndex}
                randomPokemon={randomPokemon}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

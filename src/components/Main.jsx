import useSWR from "swr";

import "./styles/main.css";
import Loader from "./Additional/Loader";
import Error from "./Additional/Error";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { ImShuffle } from "react-icons/im";

const Main = ({ fetcher, pokeIndex, setPokeIndex, randomPokemon }) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}`;
  const { data: data1, error: err1 } = useSWR(URL, fetcher);

  if (err1) {
    console.log(err1);
    return (
      <>
        <Error />
      </>
    );
  }

  if (!data1) {
    return (
      <>
        <div className={data1 ? "spinner_main" : "spinner_main spinner_main_hidden"}>
          <Loader data1={data1} />
        </div>
      </>
    );
  }

  const right = () => {
    if (pokeIndex < 1000) {
      setPokeIndex(pokeIndex + 1);
    } else {
      return 0;
    }
  };

  const left = () => {
    if (pokeIndex > 1) {
      setPokeIndex(pokeIndex - 1);
    } else {
      return 0;
    }
  };

  return (
    <div className="container">
      <div className="random">
        <button onClick={randomPokemon}>
          <ImShuffle id="shuffle" />
        </button>
      </div>

      <div className="top-container">
        <div className="left">
          {pokeIndex < 2 ? (
            <button id="enabled" onClick={left}>
              <BsChevronLeft style={{ color: "#ccc" }} id="disicon" />
            </button>
          ) : (
            <button id="enabled" onClick={left}>
              <BsChevronLeft id="icon" />
            </button>
          )}
        </div>
        <div className="pokemon">
          <div className="left-div">
            <div className="left-top">
              <img
                id="img"
                src={`https://monikode.github.io/pokedex/assets/icons/${data1.types[0].type.name}.svg`}
              />
              <h3>{data1.types[0].type.name}</h3>
            </div>
            <h1 id="title">{data1.forms[0].name}</h1>
            <div className="left-down">
              <div className="first">
                <h4>Height : </h4>
                <span>{data1.height}</span>
              </div>
              <div className="second">
                <h4>Weight : </h4>
                <span>{data1.weight}</span>
              </div>
              <div className="third">
                <h4>Abilities :</h4>
                <span>{data1.abilities[0].ability.name}</span>
              </div>
            </div>
          </div>

          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data1.id}.png`}
          />
        </div>
        <div onClick={right} className="right">
          <button id="right">
            <BsChevronRight id="ico" />
          </button>
        </div>
      </div>
      <div className="bottom-div">
        <div className="left">
          <h2>Stats</h2>
        </div>
        <div className="categories">
          <div id="first">
            <h3>HP</h3> <span>{data1.stats[0].base_stat}</span>
          </div>

          <div id="second">
            <h3>ATTACK</h3> <span>{data1.stats[1].base_stat}</span>
          </div>

          <div id="third">
            <h3>DEFENCE</h3> <span>{data1.stats[2].base_stat}</span>
          </div>

          <div id="fourth">
            <h3>SPECIAL ATTACK</h3> <span>{data1.stats[3].base_stat}</span>
          </div>

          <div id="fifth">
            <h3>SPECIAL DEFENCE</h3> <span>{data1.stats[4].base_stat}</span>
          </div>

          <div id="sixth">
            <h3>SPEED</h3> <span>{data1.stats[5].base_stat}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

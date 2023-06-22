import { useEffect, useState } from "react";
import "../components/styles/search.css";
import Loader from "../components/Additional/Loader";
import Error from "./Additional/Error";
import useSWR from "swr";

const Search = ({ fetcher }) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/?limit=1000`;
  const { data: data, error: err } = useSWR(URL, fetcher);
  const [input, setInput] = useState("");

  if (err) {
    console.log(err);
    return (
      <>
        <Error />
      </>
    );
  }

  if (data) {
  } else {
    return (
      <>
        <Loader />
      </>
    );
  }

  const filteredList = data.results.filter((item) => {
    return (
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.url.slice(34).replace("/", "").includes(input)
    );
  });

  return (
    <div className="search_div">
      <input
        type="text"
        placeholder="name or id"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="poke_list">
        {filteredList.map((items, id) => {
          return (
            <div key={id}>
              <h3>ID: {items.url.slice(34).replace("/", "")}</h3>
              <h2>{items.name}</h2>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${items.url
                  .slice(34)
                  .replace("/", "")}.png`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;

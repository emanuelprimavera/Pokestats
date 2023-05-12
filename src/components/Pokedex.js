import React, { useState } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";
import "../App.css";
import pokeballpic from "./image/pokeball.png";
import Spinner from "react-bootstrap/Spinner";

const Pokedex = () => {
  const [loading, setLoading] = useState(false);
  //setto pokemonName  prendendo poi il setPokemonName dal target value dell'input
  const [pokemonName, setPokemonName] = useState("");

  //setto show
  const [show, setShow] = useState(false);

  //imposto valori iniziale dei dati come :'' , in modo da non avere valori undefined prima della chiamata
  const [pokemon, setPokemon] = useState({
    id: "",
    name: "",
    img: "",
    sprite: "",
    hp: "",
    attack: "",
    defense: "",
    special_attack: "",
    special_defense: "",
    speed: "",
    type: "",
    type_two: "",
    height: "",
    weight: "",
    ability_one: "",
    ability_two: "",
    ability_three: "",
  });

  /*chiamo searchPokemon al click del form , 
faccio chiamata axios con il nome del pokemon preso dall'input (pokemonName)
e setto il setPokemon con tutti i dati che mi servono*/
  const searchPokemon = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      setPokemon({
        id: resp.data.id,
        name: resp.data.name,
        img: resp.data.sprites.other.home.front_default,
        hp: resp.data.stats[0].base_stat,
        attack: resp.data.stats[1].base_stat,
        defense: resp.data.stats[2].base_stat,
        special_attack: resp.data.stats[3].base_stat,
        special_defense: resp.data.stats[4].base_stat,
        speed: resp.data.stats[5].base_stat,
        type: resp.data.types[0].type.name,
        type_two: resp?.data?.types[1]?.type.name, //uso il changing operator nel caso ci siano undefined
        sprite: resp.data.sprites.front_default,
        height: resp.data.height,
        weight: resp.data.weight,
        ability_one: resp.data.abilities[0].ability.name.toUpperCase(),
        ability_two: resp?.data?.abilities[1]?.ability.name.toUpperCase(),
        ability_three: resp?.data?.abilities[1]?.ability.name,
      });
      setShow(true);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="pokedex-main-container">
      <div className="title shadow-lg p-3 mb-5 bg-white rounded">
        <div>
          <img src={pokeballpic} alt="pokeball" className="pokeball-pic" />
          <h1>PokeStats</h1>
        </div>
      </div>
      <div className="search-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="Inserisci nome o ID"
            className="search-input"
            type="text"
            onChange={(event) => {
              setPokemonName(event.target.value.toLowerCase());
            }}
          ></input>

          <button className="search-button" onClick={searchPokemon}>
            <svg
              className="button-logo"
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="button-logo"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM5.07089 13C5.55612 16.3923 8.47353 19 12 19C15.5265 19 18.4439 16.3923 18.9291 13H14.8293C14.4174 14.1652 13.3062 15 12 15C10.6938 15 9.58251 14.1652 9.17068 13H5.07089ZM18.9291 11C18.4439 7.60771 15.5265 5 12 5C8.47353 5 5.55612 7.60771 5.07089 11H9.17068C9.58251 9.83481 10.6938 9 12 9C13.3062 9 14.4174 9.83481 14.8293 11H18.9291ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" role="status" variant="danger">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          {!show ? (
            <div className="show-alert">
              <h3>Go!</h3>
            </div>
          ) : (
            <div className="display-pokemon">
              <PokeCard
                id={pokemon.id}
                name={pokemon.name}
                img={pokemon.img}
                sprite={pokemon.sprite}
                hp={pokemon.hp}
                attack={pokemon.attack}
                defense={pokemon.defense}
                speed={pokemon.speed}
                special_attack={pokemon.special_attack}
                special_defense={pokemon.special_defense}
                type={pokemon.type}
                type_two={pokemon.type_two}
                weight={pokemon.weight}
                height={pokemon.height}
                ability_one={pokemon.ability_one}
                ability_two={pokemon.ability_two}
                ability_three={pokemon.ability_three}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Pokedex;

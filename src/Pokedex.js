import React from 'react';
import Pokecard from './Pokecard';

const Pokedex = (props) => {
    let winner = null;
  if (props.isWinner) {
    winner = <p className="winner">THIS HAND WINS!</p>;
  }

 return (
    <div>
 <div className="flex">
   {props.pokemon.map(pokemon => (
          <Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} base_experience={pokemon.base_experience}
          />
        ))}
      </div>
      <h4 className="experience">Total experience: {props.exp}</h4>
      {winner}
 </div>)
};

export default Pokedex
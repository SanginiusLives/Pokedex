import React from 'react';

const Pokecard = ({id, name, type, base_experience}) => {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
 return (<div className="pokeCard">
    <h4>{name}</h4>
    <img src={image}/>
    <p>Type: {type}</p>
    <p>EXP: {base_experience}</p>
 </div>)
};

export default Pokecard
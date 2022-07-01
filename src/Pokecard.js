/** @format */

import React from 'react';
import './Pokecard.css';

const POKE_API =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard(props) {
	console.log(props);
	let imgSrc = `${POKE_API}${props.p.id}.png`;
	return (
		<div className="Pokecard">
			<h1 className="Pokecard-header">{props.p.name}</h1>
			<img src={imgSrc} alt={props.p.name} />
			<div className="Pokecard-data">Type: {props.p.type}</div>
			<div className="Pokecard-data">EXP: {props.p.base_experience}</div>
		</div>
	);
}

export default Pokecard;
